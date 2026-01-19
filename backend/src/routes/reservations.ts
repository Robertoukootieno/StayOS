import { Router, Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import logger from '../config/logger';
import { authenticate, authorize } from '../middleware/auth';
import { validateTenant } from '../middleware/tenant';

const router = Router({ mergeParams: true }); // mergeParams to access venueId from parent route

/**
 * Generate a unique confirmation code
 */
const generateConfirmationCode = (): string => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Exclude similar-looking characters
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

/**
 * GET /v1/venues/:venueId/reservations
 * List all reservations for a venue (requires authentication and read:reservations scope)
 */
router.get('/', authenticate, authorize('read:reservations'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = Math.min(parseInt(req.query.pageSize as string) || 20, 100);
    const offset = (page - 1) * pageSize;

    // Extract filters from query params
    const status = req.query.status as string;
    const reservationDate = req.query.reservationDate as string;
    const startDate = req.query.startDate as string;
    const endDate = req.query.endDate as string;
    const guestName = req.query.guestName as string;
    const guestPhone = req.query.guestPhone as string;
    const confirmationCode = req.query.confirmationCode as string;
    const tableId = req.query.tableId as string;
    const sectionId = req.query.sectionId as string;
    const source = req.query.source as string;
    const sortBy = (req.query.sortBy as string) || 'reservation_date';
    const sortOrder = (req.query.sortOrder as string) || 'asc';

    // Build WHERE clause
    const conditions: string[] = ['r.deleted_at IS NULL', 'r.property_id = $1'];
    const params: any[] = [req.tenantId];
    let paramIndex = 2;

    if (status) {
      conditions.push(`r.status = $${paramIndex}`);
      params.push(status);
      paramIndex++;
    }

    if (reservationDate) {
      conditions.push(`r.reservation_date = $${paramIndex}`);
      params.push(reservationDate);
      paramIndex++;
    }

    if (startDate && endDate) {
      conditions.push(`r.reservation_date BETWEEN $${paramIndex} AND $${paramIndex + 1}`);
      params.push(startDate, endDate);
      paramIndex += 2;
    } else if (startDate) {
      conditions.push(`r.reservation_date >= $${paramIndex}`);
      params.push(startDate);
      paramIndex++;
    } else if (endDate) {
      conditions.push(`r.reservation_date <= $${paramIndex}`);
      params.push(endDate);
      paramIndex++;
    }

    if (guestName) {
      conditions.push(`r.guest_name ILIKE $${paramIndex}`);
      params.push(`%${guestName}%`);
      paramIndex++;
    }

    if (guestPhone) {
      conditions.push(`r.guest_phone = $${paramIndex}`);
      params.push(guestPhone);
      paramIndex++;
    }

    if (confirmationCode) {
      conditions.push(`r.confirmation_code = $${paramIndex}`);
      params.push(confirmationCode.toUpperCase());
      paramIndex++;
    }

    if (tableId) {
      conditions.push(`r.table_id = $${paramIndex}`);
      params.push(tableId);
      paramIndex++;
    }

    if (sectionId) {
      conditions.push(`r.preferred_section_id = $${paramIndex}`);
      params.push(sectionId);
      paramIndex++;
    }

    if (source) {
      conditions.push(`r.source = $${paramIndex}`);
      params.push(source);
      paramIndex++;
    }

    const whereClause = conditions.join(' AND ');

    // Validate sortBy to prevent SQL injection
    const allowedSortFields = ['reservation_date', 'reservation_time', 'created_at', 'updated_at', 'guest_name', 'party_size'];
    const sortField = allowedSortFields.includes(sortBy) ? sortBy : 'reservation_date';
    const sortDirection = sortOrder.toLowerCase() === 'desc' ? 'DESC' : 'ASC';

    // Count total records
    const countQuery = `
      SELECT COUNT(*) as total
      FROM table_reservations.reservations r
      WHERE ${whereClause}
    `;

    const countResult = await AppDataSource.query(countQuery, params);
    const total = parseInt(countResult[0].total);

    // Fetch reservations
    const query = `
      SELECT 
        r.id as "reservationId",
        r.guest_id as "guestId",
        r.guest_name as "guestName",
        r.guest_phone as "guestPhone",
        r.guest_email as "guestEmail",
        r.reservation_date as "reservationDate",
        r.reservation_time as "reservationTime",
        r.party_size as "partySize",
        r.duration_minutes as "durationMinutes",
        r.table_id as "tableId",
        r.preferred_section_id as "preferredSectionId",
        r.status,
        r.source,
        r.special_requests as "specialRequests",
        r.occasion,
        r.dietary_restrictions as "dietaryRestrictions",
        r.seating_preferences as "seatingPreferences",
        r.confirmation_code as "confirmationCode",
        r.confirmed_at as "confirmedAt",
        r.seated_at as "seatedAt",
        r.actual_party_size as "actualPartySize",
        r.completed_at as "completedAt",
        r.cancelled_at as "cancelledAt",
        r.cancellation_reason as "cancellationReason",
        r.created_at as "createdAt",
        r.updated_at as "updatedAt",
        r.version
      FROM table_reservations.reservations r
      WHERE ${whereClause}
      ORDER BY r.${sortField} ${sortDirection}, r.reservation_time ${sortDirection}
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `;

    params.push(pageSize, offset);

    const reservations = await AppDataSource.query(query, params);

    // Build response
    const response = {
      data: reservations,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
        hasMore: offset + reservations.length < total,
      },
    };

    res.json(response);
  } catch (error) {
    logger.error('Error listing reservations:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while listing reservations',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * POST /v1/venues/:venueId/reservations
 * Create a new reservation (requires authentication and write:reservations scope)
 */
router.post('/', authenticate, authorize('write:reservations'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      guestId,
      guestName,
      guestPhone,
      guestEmail,
      reservationDate,
      reservationTime,
      partySize,
      durationMinutes,
      tableId,
      preferredSectionId,
      specialRequests,
      occasion,
      dietaryRestrictions,
      seatingPreferences,
      depositRequired,
      depositAmount,
      source,
    } = req.body;

    // Validation
    if (!guestName || !guestPhone || !reservationDate || !reservationTime || !partySize) {
      res.status(400).json({
        type: 'https://api.stayos.com/errors/validation-error',
        title: 'Validation Error',
        status: 400,
        detail: 'Missing required fields: guestName, guestPhone, reservationDate, reservationTime, partySize',
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    // Generate confirmation code
    const confirmationCode = generateConfirmationCode();

    const query = `
      INSERT INTO table_reservations.reservations (
        id,
        property_id,
        guest_id,
        guest_name,
        guest_phone,
        guest_email,
        reservation_date,
        reservation_time,
        party_size,
        duration_minutes,
        table_id,
        preferred_section_id,
        status,
        source,
        special_requests,
        occasion,
        dietary_restrictions,
        seating_preferences,
        confirmation_code,
        deposit_required,
        deposit_amount,
        created_by,
        updated_by
      ) VALUES (
        shared.uuid_generate_v7(),
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22
      )
      RETURNING
        id as "reservationId",
        guest_name as "guestName",
        guest_phone as "guestPhone",
        guest_email as "guestEmail",
        reservation_date as "reservationDate",
        reservation_time as "reservationTime",
        party_size as "partySize",
        status,
        confirmation_code as "confirmationCode",
        created_at as "createdAt",
        version
    `;

    const result = await AppDataSource.query(query, [
      req.tenantId,
      guestId,
      guestName,
      guestPhone,
      guestEmail,
      reservationDate,
      reservationTime,
      partySize,
      durationMinutes || 120, // Default 2 hours
      tableId,
      preferredSectionId,
      'PENDING', // Initial status
      source || 'PHONE',
      specialRequests,
      occasion,
      dietaryRestrictions,
      seatingPreferences,
      confirmationCode,
      depositRequired ?? false,
      depositAmount,
      req.user?.id,
      req.user?.id,
    ]);

    const reservation = result[0];

    // Set Location header
    res.setHeader('Location', `/v1/venues/${req.params.venueId}/reservations/${reservation.reservationId}`);

    // Set ETag
    res.setHeader('ETag', `"${reservation.version}"`);

    res.status(201).json(reservation);
  } catch (error: any) {
    logger.error('Error creating reservation:', error);

    // Handle unique constraint violation (duplicate confirmation code - very rare)
    if (error.code === '23505') {
      res.status(409).json({
        type: 'https://api.stayos.com/errors/conflict',
        title: 'Conflict',
        status: 409,
        detail: 'A reservation with this confirmation code already exists. Please try again.',
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while creating the reservation',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * GET /v1/venues/:venueId/reservations/:reservationId
 * Get a single reservation by ID (requires authentication and read:reservations scope)
 */
router.get('/:reservationId', authenticate, authorize('read:reservations'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const { reservationId } = req.params;

    const query = `
      SELECT
        r.id as "reservationId",
        r.guest_id as "guestId",
        r.guest_name as "guestName",
        r.guest_phone as "guestPhone",
        r.guest_email as "guestEmail",
        r.reservation_date as "reservationDate",
        r.reservation_time as "reservationTime",
        r.party_size as "partySize",
        r.duration_minutes as "durationMinutes",
        r.table_id as "tableId",
        r.preferred_section_id as "preferredSectionId",
        r.status,
        r.source,
        r.special_requests as "specialRequests",
        r.occasion,
        r.dietary_restrictions as "dietaryRestrictions",
        r.seating_preferences as "seatingPreferences",
        r.confirmation_code as "confirmationCode",
        r.confirmed_at as "confirmedAt",
        r.confirmed_by as "confirmedBy",
        r.seated_at as "seatedAt",
        r.seated_by as "seatedBy",
        r.actual_party_size as "actualPartySize",
        r.completed_at as "completedAt",
        r.cancelled_at as "cancelledAt",
        r.cancelled_by as "cancelledBy",
        r.cancellation_reason as "cancellationReason",
        r.marked_no_show_at as "markedNoShowAt",
        r.marked_no_show_by as "markedNoShowBy",
        r.no_show_fee_charged as "noShowFeeCharged",
        r.deposit_required as "depositRequired",
        r.deposit_amount as "depositAmount",
        r.deposit_paid as "depositPaid",
        r.deposit_paid_at as "depositPaidAt",
        r.notes,
        r.internal_notes as "internalNotes",
        r.created_at as "createdAt",
        r.updated_at as "updatedAt",
        r.version
      FROM table_reservations.reservations r
      WHERE r.id = $1
        AND r.property_id = $2
        AND r.deleted_at IS NULL
    `;

    const result = await AppDataSource.query(query, [reservationId, req.tenantId]);

    if (result.length === 0) {
      res.status(404).json({
        type: 'https://api.stayos.com/errors/not-found',
        title: 'Not Found',
        status: 404,
        detail: `Reservation with ID ${reservationId} not found`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const reservation = result[0];

    // Set ETag for caching and optimistic locking
    res.setHeader('ETag', `"${reservation.version}"`);
    res.setHeader('Cache-Control', 'private, max-age=60'); // 1 minute

    // Support conditional requests (304 Not Modified)
    const ifNoneMatch = req.headers['if-none-match'];
    if (ifNoneMatch === `"${reservation.version}"`) {
      res.status(304).end();
      return;
    }

    res.json(reservation);
  } catch (error) {
    logger.error('Error fetching reservation:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while fetching the reservation',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * PUT /v1/venues/:venueId/reservations/:reservationId
 * Update a reservation (requires authentication and write:reservations scope)
 * Supports optimistic locking via If-Match header
 */
router.put('/:reservationId', authenticate, authorize('write:reservations'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const { reservationId } = req.params;
    const {
      guestName,
      guestPhone,
      guestEmail,
      reservationDate,
      reservationTime,
      partySize,
      durationMinutes,
      tableId,
      preferredSectionId,
      specialRequests,
      occasion,
      dietaryRestrictions,
      seatingPreferences,
      notes,
      internalNotes,
    } = req.body;

    // Check If-Match header for optimistic locking
    const ifMatch = req.headers['if-match'];
    if (!ifMatch) {
      res.status(428).json({
        type: 'https://api.stayos.com/errors/precondition-required',
        title: 'Precondition Required',
        status: 428,
        detail: 'If-Match header is required for updates',
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const expectedVersion = parseInt(ifMatch.replace(/"/g, ''));

    const query = `
      UPDATE table_reservations.reservations
      SET
        guest_name = COALESCE($1, guest_name),
        guest_phone = COALESCE($2, guest_phone),
        guest_email = COALESCE($3, guest_email),
        reservation_date = COALESCE($4, reservation_date),
        reservation_time = COALESCE($5, reservation_time),
        party_size = COALESCE($6, party_size),
        duration_minutes = COALESCE($7, duration_minutes),
        table_id = COALESCE($8, table_id),
        preferred_section_id = COALESCE($9, preferred_section_id),
        special_requests = COALESCE($10, special_requests),
        occasion = COALESCE($11, occasion),
        dietary_restrictions = COALESCE($12, dietary_restrictions),
        seating_preferences = COALESCE($13, seating_preferences),
        notes = COALESCE($14, notes),
        internal_notes = COALESCE($15, internal_notes),
        updated_at = NOW(),
        updated_by = $16,
        version = version + 1
      WHERE id = $17
        AND property_id = $18
        AND version = $19
        AND deleted_at IS NULL
      RETURNING
        id as "reservationId",
        guest_name as "guestName",
        guest_phone as "guestPhone",
        reservation_date as "reservationDate",
        reservation_time as "reservationTime",
        party_size as "partySize",
        status,
        confirmation_code as "confirmationCode",
        updated_at as "updatedAt",
        version
    `;

    const result = await AppDataSource.query(query, [
      guestName,
      guestPhone,
      guestEmail,
      reservationDate,
      reservationTime,
      partySize,
      durationMinutes,
      tableId,
      preferredSectionId,
      specialRequests,
      occasion,
      dietaryRestrictions,
      seatingPreferences,
      notes,
      internalNotes,
      req.user?.id,
      reservationId,
      req.tenantId,
      expectedVersion,
    ]);

    if (result.length === 0) {
      // Check if reservation exists
      const checkQuery = `
        SELECT version FROM table_reservations.reservations
        WHERE id = $1 AND property_id = $2 AND deleted_at IS NULL
      `;
      const checkResult = await AppDataSource.query(checkQuery, [reservationId, req.tenantId]);

      if (checkResult.length === 0) {
        res.status(404).json({
          type: 'https://api.stayos.com/errors/not-found',
          title: 'Not Found',
          status: 404,
          detail: `Reservation with ID ${reservationId} not found`,
          instance: req.path,
          traceId: req.requestId,
        });
        return;
      }

      // Version mismatch - optimistic locking conflict
      res.status(412).json({
        type: 'https://api.stayos.com/errors/precondition-failed',
        title: 'Precondition Failed',
        status: 412,
        detail: 'The reservation has been modified by another request. Please fetch the latest version and try again.',
        instance: req.path,
        traceId: req.requestId,
        currentVersion: checkResult[0].version,
      });
      return;
    }

    const reservation = result[0];

    // Set new ETag
    res.setHeader('ETag', `"${reservation.version}"`);

    res.json(reservation);
  } catch (error) {
    logger.error('Error updating reservation:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while updating the reservation',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * POST /v1/venues/:venueId/reservations/:reservationId/confirm
 * Confirm a pending reservation (requires authentication and write:reservations scope)
 */
router.post('/:reservationId/confirm', authenticate, authorize('write:reservations'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const { reservationId } = req.params;
    const { tableId } = req.body; // Optional: assign table during confirmation

    // Check current status
    const checkQuery = `
      SELECT status, version FROM table_reservations.reservations
      WHERE id = $1 AND property_id = $2 AND deleted_at IS NULL
    `;
    const checkResult = await AppDataSource.query(checkQuery, [reservationId, req.tenantId]);

    if (checkResult.length === 0) {
      res.status(404).json({
        type: 'https://api.stayos.com/errors/not-found',
        title: 'Not Found',
        status: 404,
        detail: `Reservation with ID ${reservationId} not found`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const currentStatus = checkResult[0].status;

    // Validate state transition
    if (currentStatus !== 'PENDING') {
      res.status(422).json({
        type: 'https://api.stayos.com/errors/invalid-state-transition',
        title: 'Invalid State Transition',
        status: 422,
        detail: `Cannot confirm reservation with status ${currentStatus}. Only PENDING reservations can be confirmed.`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const query = `
      UPDATE table_reservations.reservations
      SET
        status = 'CONFIRMED',
        table_id = COALESCE($1, table_id),
        confirmed_at = NOW(),
        confirmed_by = $2,
        updated_at = NOW(),
        updated_by = $2,
        version = version + 1
      WHERE id = $3
        AND property_id = $4
        AND deleted_at IS NULL
      RETURNING
        id as "reservationId",
        guest_name as "guestName",
        reservation_date as "reservationDate",
        reservation_time as "reservationTime",
        party_size as "partySize",
        status,
        confirmation_code as "confirmationCode",
        confirmed_at as "confirmedAt",
        version
    `;

    const result = await AppDataSource.query(query, [
      tableId,
      req.user?.id,
      reservationId,
      req.tenantId,
    ]);

    const reservation = result[0];

    // Set new ETag
    res.setHeader('ETag', `"${reservation.version}"`);

    res.json(reservation);
  } catch (error) {
    logger.error('Error confirming reservation:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while confirming the reservation',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * POST /v1/venues/:venueId/reservations/:reservationId/seat
 * Mark a reservation as seated (requires authentication and write:reservations scope)
 */
router.post('/:reservationId/seat', authenticate, authorize('write:reservations'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const { reservationId } = req.params;
    const { tableId, actualPartySize } = req.body;

    if (!tableId) {
      res.status(400).json({
        type: 'https://api.stayos.com/errors/validation-error',
        title: 'Validation Error',
        status: 400,
        detail: 'tableId is required to seat a reservation',
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    // Check current status
    const checkQuery = `
      SELECT status, version FROM table_reservations.reservations
      WHERE id = $1 AND property_id = $2 AND deleted_at IS NULL
    `;
    const checkResult = await AppDataSource.query(checkQuery, [reservationId, req.tenantId]);

    if (checkResult.length === 0) {
      res.status(404).json({
        type: 'https://api.stayos.com/errors/not-found',
        title: 'Not Found',
        status: 404,
        detail: `Reservation with ID ${reservationId} not found`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const currentStatus = checkResult[0].status;

    // Validate state transition
    if (!['PENDING', 'CONFIRMED'].includes(currentStatus)) {
      res.status(422).json({
        type: 'https://api.stayos.com/errors/invalid-state-transition',
        title: 'Invalid State Transition',
        status: 422,
        detail: `Cannot seat reservation with status ${currentStatus}. Only PENDING or CONFIRMED reservations can be seated.`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const query = `
      UPDATE table_reservations.reservations
      SET
        status = 'SEATED',
        table_id = $1,
        actual_party_size = COALESCE($2, party_size),
        seated_at = NOW(),
        seated_by = $3,
        updated_at = NOW(),
        updated_by = $3,
        version = version + 1
      WHERE id = $4
        AND property_id = $5
        AND deleted_at IS NULL
      RETURNING
        id as "reservationId",
        guest_name as "guestName",
        reservation_date as "reservationDate",
        reservation_time as "reservationTime",
        party_size as "partySize",
        actual_party_size as "actualPartySize",
        table_id as "tableId",
        status,
        seated_at as "seatedAt",
        version
    `;

    const result = await AppDataSource.query(query, [
      tableId,
      actualPartySize,
      req.user?.id,
      reservationId,
      req.tenantId,
    ]);

    const reservation = result[0];

    // Set new ETag
    res.setHeader('ETag', `"${reservation.version}"`);

    res.json(reservation);
  } catch (error) {
    logger.error('Error seating reservation:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while seating the reservation',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * POST /v1/venues/:venueId/reservations/:reservationId/complete
 * Mark a reservation as completed (requires authentication and write:reservations scope)
 */
router.post('/:reservationId/complete', authenticate, authorize('write:reservations'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const { reservationId } = req.params;

    // Check current status
    const checkQuery = `
      SELECT status, version FROM table_reservations.reservations
      WHERE id = $1 AND property_id = $2 AND deleted_at IS NULL
    `;
    const checkResult = await AppDataSource.query(checkQuery, [reservationId, req.tenantId]);

    if (checkResult.length === 0) {
      res.status(404).json({
        type: 'https://api.stayos.com/errors/not-found',
        title: 'Not Found',
        status: 404,
        detail: `Reservation with ID ${reservationId} not found`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const currentStatus = checkResult[0].status;

    // Validate state transition
    if (currentStatus !== 'SEATED') {
      res.status(422).json({
        type: 'https://api.stayos.com/errors/invalid-state-transition',
        title: 'Invalid State Transition',
        status: 422,
        detail: `Cannot complete reservation with status ${currentStatus}. Only SEATED reservations can be completed.`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const query = `
      UPDATE table_reservations.reservations
      SET
        status = 'COMPLETED',
        completed_at = NOW(),
        updated_at = NOW(),
        updated_by = $1,
        version = version + 1
      WHERE id = $2
        AND property_id = $3
        AND deleted_at IS NULL
      RETURNING
        id as "reservationId",
        guest_name as "guestName",
        status,
        completed_at as "completedAt",
        version
    `;

    const result = await AppDataSource.query(query, [
      req.user?.id,
      reservationId,
      req.tenantId,
    ]);

    const reservation = result[0];

    // Set new ETag
    res.setHeader('ETag', `"${reservation.version}"`);

    res.json(reservation);
  } catch (error) {
    logger.error('Error completing reservation:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while completing the reservation',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * POST /v1/venues/:venueId/reservations/:reservationId/no-show
 * Mark a reservation as no-show (requires authentication and write:reservations scope)
 */
router.post('/:reservationId/no-show', authenticate, authorize('write:reservations'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const { reservationId } = req.params;
    const { chargeNoShowFee } = req.body;

    // Check current status
    const checkQuery = `
      SELECT status, version FROM table_reservations.reservations
      WHERE id = $1 AND property_id = $2 AND deleted_at IS NULL
    `;
    const checkResult = await AppDataSource.query(checkQuery, [reservationId, req.tenantId]);

    if (checkResult.length === 0) {
      res.status(404).json({
        type: 'https://api.stayos.com/errors/not-found',
        title: 'Not Found',
        status: 404,
        detail: `Reservation with ID ${reservationId} not found`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const currentStatus = checkResult[0].status;

    // Validate state transition
    if (!['PENDING', 'CONFIRMED'].includes(currentStatus)) {
      res.status(422).json({
        type: 'https://api.stayos.com/errors/invalid-state-transition',
        title: 'Invalid State Transition',
        status: 422,
        detail: `Cannot mark reservation with status ${currentStatus} as no-show. Only PENDING or CONFIRMED reservations can be marked as no-show.`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const query = `
      UPDATE table_reservations.reservations
      SET
        status = 'NO_SHOW',
        marked_no_show_at = NOW(),
        marked_no_show_by = $1,
        no_show_fee_charged = $2,
        updated_at = NOW(),
        updated_by = $1,
        version = version + 1
      WHERE id = $3
        AND property_id = $4
        AND deleted_at IS NULL
      RETURNING
        id as "reservationId",
        guest_name as "guestName",
        status,
        marked_no_show_at as "markedNoShowAt",
        no_show_fee_charged as "noShowFeeCharged",
        version
    `;

    const result = await AppDataSource.query(query, [
      req.user?.id,
      chargeNoShowFee ?? false,
      reservationId,
      req.tenantId,
    ]);

    const reservation = result[0];

    // Set new ETag
    res.setHeader('ETag', `"${reservation.version}"`);

    res.json(reservation);
  } catch (error) {
    logger.error('Error marking reservation as no-show:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while marking the reservation as no-show',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * POST /v1/venues/:venueId/reservations/:reservationId/cancel
 * Cancel a reservation (requires authentication and write:reservations scope)
 */
router.post('/:reservationId/cancel', authenticate, authorize('write:reservations'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const { reservationId } = req.params;
    const { cancellationReason } = req.body;

    // Check current status
    const checkQuery = `
      SELECT status, version FROM table_reservations.reservations
      WHERE id = $1 AND property_id = $2 AND deleted_at IS NULL
    `;
    const checkResult = await AppDataSource.query(checkQuery, [reservationId, req.tenantId]);

    if (checkResult.length === 0) {
      res.status(404).json({
        type: 'https://api.stayos.com/errors/not-found',
        title: 'Not Found',
        status: 404,
        detail: `Reservation with ID ${reservationId} not found`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const currentStatus = checkResult[0].status;

    // Validate state transition
    if (['COMPLETED', 'CANCELLED', 'NO_SHOW'].includes(currentStatus)) {
      res.status(422).json({
        type: 'https://api.stayos.com/errors/invalid-state-transition',
        title: 'Invalid State Transition',
        status: 422,
        detail: `Cannot cancel reservation with status ${currentStatus}. Only PENDING, CONFIRMED, or SEATED reservations can be cancelled.`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const query = `
      UPDATE table_reservations.reservations
      SET
        status = 'CANCELLED',
        cancelled_at = NOW(),
        cancelled_by = $1,
        cancellation_reason = $2,
        updated_at = NOW(),
        updated_by = $1,
        version = version + 1
      WHERE id = $3
        AND property_id = $4
        AND deleted_at IS NULL
      RETURNING
        id as "reservationId",
        guest_name as "guestName",
        status,
        cancelled_at as "cancelledAt",
        cancellation_reason as "cancellationReason",
        version
    `;

    const result = await AppDataSource.query(query, [
      req.user?.id,
      cancellationReason,
      reservationId,
      req.tenantId,
    ]);

    const reservation = result[0];

    // Set new ETag
    res.setHeader('ETag', `"${reservation.version}"`);

    res.json(reservation);
  } catch (error) {
    logger.error('Error cancelling reservation:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while cancelling the reservation',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

export default router;

