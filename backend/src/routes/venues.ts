import { Router, Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import logger from '../config/logger';
import { authenticate, authorize } from '../middleware/auth';
import { validateTenant } from '../middleware/tenant';

const router = Router();

/**
 * GET /v1/venues
 * List all venues (requires authentication and read:venues scope)
 */
router.get('/', authenticate, authorize('read:venues'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = Math.min(parseInt(req.query.pageSize as string) || 20, 100);
    const offset = (page - 1) * pageSize;

    // Extract filters from query params
    const venueType = req.query.venueType as string;
    const venueClassification = req.query.venueClassification as string;
    const operationalStatus = req.query.operationalStatus as string;
    const acceptsReservations = req.query.acceptsReservations as string;
    const city = req.query.city as string;
    const cuisineType = req.query.cuisineType as string;
    const sortBy = (req.query.sortBy as string) || 'name';
    const sortOrder = (req.query.sortOrder as string) || 'asc';

    // Build WHERE clause
    const conditions: string[] = ['p.deleted_at IS NULL', 'p.property_id = $1'];
    const params: any[] = [req.tenantId];
    let paramIndex = 2;

    if (venueType) {
      conditions.push(`p.property_type = $${paramIndex}`);
      params.push(venueType);
      paramIndex++;
    }

    if (venueClassification) {
      conditions.push(`p.venue_classification = $${paramIndex}`);
      params.push(venueClassification);
      paramIndex++;
    }

    if (operationalStatus) {
      conditions.push(`p.operational_status = $${paramIndex}`);
      params.push(operationalStatus);
      paramIndex++;
    }

    if (acceptsReservations !== undefined) {
      conditions.push(`p.accepts_reservations = $${paramIndex}`);
      params.push(acceptsReservations === 'true');
      paramIndex++;
    }

    if (city) {
      conditions.push(`p.city ILIKE $${paramIndex}`);
      params.push(`%${city}%`);
      paramIndex++;
    }

    if (cuisineType) {
      conditions.push(`$${paramIndex} = ANY(p.cuisine_types)`);
      params.push(cuisineType);
      paramIndex++;
    }

    const whereClause = conditions.join(' AND ');

    // Validate sortBy to prevent SQL injection
    const allowedSortFields = ['name', 'created_at', 'updated_at', 'seating_capacity'];
    const sortField = allowedSortFields.includes(sortBy) ? sortBy : 'name';
    const sortDirection = sortOrder.toLowerCase() === 'desc' ? 'DESC' : 'ASC';

    // Count total records
    const countQuery = `
      SELECT COUNT(*) as total
      FROM property_mgmt.properties p
      WHERE ${whereClause}
    `;

    const countResult = await AppDataSource.query(countQuery, params);
    const total = parseInt(countResult[0].total);

    // Fetch venues
    const query = `
      SELECT 
        p.property_id as "venueId",
        p.property_code as "venueCode",
        p.name,
        p.property_type as "venueType",
        p.venue_classification as "venueClassification",
        p.seating_capacity as "seatingCapacity",
        p.has_outdoor_seating as "hasOutdoorSeating",
        p.has_bar as "hasBar",
        p.has_private_dining as "hasPrivateDining",
        p.cuisine_types as "cuisineTypes",
        p.dress_code as "dressCode",
        p.parking_available as "parkingAvailable",
        p.accepts_reservations as "acceptsReservations",
        p.accepts_walk_ins as "acceptsWalkIns",
        p.delivery_available as "deliveryAvailable",
        p.takeout_available as "takeoutAvailable",
        p.address_line1 as "addressLine1",
        p.address_line2 as "addressLine2",
        p.city,
        p.state_province as "stateProvince",
        p.postal_code as "postalCode",
        p.country,
        p.latitude,
        p.longitude,
        p.timezone,
        p.phone,
        p.email,
        p.website,
        p.operational_status as "operationalStatus",
        p.created_at as "createdAt",
        p.updated_at as "updatedAt",
        p.version
      FROM property_mgmt.properties p
      WHERE ${whereClause}
      ORDER BY p.${sortField} ${sortDirection}
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `;

    params.push(pageSize, offset);

    const venues = await AppDataSource.query(query, params);

    // Build response
    const response = {
      data: venues,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
        hasMore: offset + venues.length < total,
      },
    };

    res.json(response);
  } catch (error) {
    logger.error('Error listing venues:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while listing venues',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * POST /v1/venues
 * Create a new venue (requires authentication and write:venues scope)
 */
router.post('/', authenticate, authorize('write:venues'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      venueCode,
      name,
      venueType,
      venueClassification,
      seatingCapacity,
      hasOutdoorSeating,
      hasBar,
      hasPrivateDining,
      cuisineTypes,
      dressCode,
      parkingAvailable,
      acceptsReservations,
      acceptsWalkIns,
      deliveryAvailable,
      takeoutAvailable,
      location,
      coordinates,
      timezone,
      contactInfo,
      operationalStatus,
    } = req.body;

    // Validation
    if (!name || !venueType || !venueClassification || !location || !timezone) {
      res.status(400).json({
        type: 'https://api.stayos.com/errors/validation-error',
        title: 'Validation Error',
        status: 400,
        detail: 'Missing required fields: name, venueType, venueClassification, location, timezone',
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const query = `
      INSERT INTO property_mgmt.properties (
        property_id,
        property_code,
        name,
        property_type,
        venue_classification,
        seating_capacity,
        has_outdoor_seating,
        has_bar,
        has_private_dining,
        cuisine_types,
        dress_code,
        parking_available,
        accepts_reservations,
        accepts_walk_ins,
        delivery_available,
        takeout_available,
        address_line1,
        address_line2,
        city,
        state_province,
        postal_code,
        country,
        latitude,
        longitude,
        timezone,
        phone,
        email,
        website,
        operational_status,
        created_by,
        updated_by
      ) VALUES (
        shared.uuid_generate_v7(),
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15,
        $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30
      )
      RETURNING
        property_id as "venueId",
        property_code as "venueCode",
        name,
        property_type as "venueType",
        venue_classification as "venueClassification",
        seating_capacity as "seatingCapacity",
        created_at as "createdAt",
        version
    `;

    const result = await AppDataSource.query(query, [
      venueCode,
      name,
      venueType,
      venueClassification,
      seatingCapacity,
      hasOutdoorSeating ?? false,
      hasBar ?? false,
      hasPrivateDining ?? false,
      cuisineTypes,
      dressCode,
      parkingAvailable ?? false,
      acceptsReservations ?? true,
      acceptsWalkIns ?? true,
      deliveryAvailable ?? false,
      takeoutAvailable ?? false,
      location?.addressLine1,
      location?.addressLine2,
      location?.city,
      location?.stateProvince,
      location?.postalCode,
      location?.country,
      coordinates?.latitude,
      coordinates?.longitude,
      timezone,
      contactInfo?.phone,
      contactInfo?.email,
      contactInfo?.website,
      operationalStatus || 'ACTIVE',
      req.user?.id,
      req.user?.id,
    ]);

    const venue = result[0];

    // Set Location header
    res.setHeader('Location', `/v1/venues/${venue.venueId}`);

    // Set ETag
    res.setHeader('ETag', `"${venue.version}"`);

    res.status(201).json(venue);
  } catch (error: any) {
    logger.error('Error creating venue:', error);

    // Handle unique constraint violation
    if (error.code === '23505') {
      res.status(409).json({
        type: 'https://api.stayos.com/errors/conflict',
        title: 'Conflict',
        status: 409,
        detail: 'A venue with this code already exists',
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while creating the venue',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * GET /v1/venues/:venueId
 * Get a single venue by ID (requires authentication and read:venues scope)
 */
router.get('/:venueId', authenticate, authorize('read:venues'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const { venueId } = req.params;

    const query = `
      SELECT
        p.property_id as "venueId",
        p.property_code as "venueCode",
        p.name,
        p.property_type as "venueType",
        p.venue_classification as "venueClassification",
        p.seating_capacity as "seatingCapacity",
        p.has_outdoor_seating as "hasOutdoorSeating",
        p.has_bar as "hasBar",
        p.has_private_dining as "hasPrivateDining",
        p.cuisine_types as "cuisineTypes",
        p.dress_code as "dressCode",
        p.parking_available as "parkingAvailable",
        p.accepts_reservations as "acceptsReservations",
        p.accepts_walk_ins as "acceptsWalkIns",
        p.delivery_available as "deliveryAvailable",
        p.takeout_available as "takeoutAvailable",
        p.address_line1 as "addressLine1",
        p.address_line2 as "addressLine2",
        p.city,
        p.state_province as "stateProvince",
        p.postal_code as "postalCode",
        p.country,
        p.latitude,
        p.longitude,
        p.timezone,
        p.phone,
        p.email,
        p.website,
        p.operational_status as "operationalStatus",
        p.created_at as "createdAt",
        p.updated_at as "updatedAt",
        p.version
      FROM property_mgmt.properties p
      WHERE p.property_id = $1
        AND p.property_id = $2
        AND p.deleted_at IS NULL
    `;

    const result = await AppDataSource.query(query, [venueId, req.tenantId]);

    if (result.length === 0) {
      res.status(404).json({
        type: 'https://api.stayos.com/errors/not-found',
        title: 'Not Found',
        status: 404,
        detail: `Venue with ID ${venueId} not found`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const venue = result[0];

    // Set ETag for caching and optimistic locking
    res.setHeader('ETag', `"${venue.version}"`);
    res.setHeader('Cache-Control', 'private, max-age=300'); // 5 minutes

    // Support conditional requests (304 Not Modified)
    const ifNoneMatch = req.headers['if-none-match'];
    if (ifNoneMatch === `"${venue.version}"`) {
      res.status(304).end();
      return;
    }

    res.json(venue);
  } catch (error) {
    logger.error('Error fetching venue:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while fetching the venue',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * PUT /v1/venues/:venueId
 * Update a venue (requires authentication and write:venues scope)
 * Supports optimistic locking via If-Match header
 */
router.put('/:venueId', authenticate, authorize('write:venues'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const { venueId } = req.params;
    const {
      venueCode,
      name,
      venueType,
      venueClassification,
      seatingCapacity,
      hasOutdoorSeating,
      hasBar,
      hasPrivateDining,
      cuisineTypes,
      dressCode,
      parkingAvailable,
      acceptsReservations,
      acceptsWalkIns,
      deliveryAvailable,
      takeoutAvailable,
      location,
      coordinates,
      timezone,
      contactInfo,
      operationalStatus,
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
      UPDATE property_mgmt.properties
      SET
        property_code = COALESCE($1, property_code),
        name = COALESCE($2, name),
        property_type = COALESCE($3, property_type),
        venue_classification = COALESCE($4, venue_classification),
        seating_capacity = COALESCE($5, seating_capacity),
        has_outdoor_seating = COALESCE($6, has_outdoor_seating),
        has_bar = COALESCE($7, has_bar),
        has_private_dining = COALESCE($8, has_private_dining),
        cuisine_types = COALESCE($9, cuisine_types),
        dress_code = COALESCE($10, dress_code),
        parking_available = COALESCE($11, parking_available),
        accepts_reservations = COALESCE($12, accepts_reservations),
        accepts_walk_ins = COALESCE($13, accepts_walk_ins),
        delivery_available = COALESCE($14, delivery_available),
        takeout_available = COALESCE($15, takeout_available),
        address_line1 = COALESCE($16, address_line1),
        address_line2 = COALESCE($17, address_line2),
        city = COALESCE($18, city),
        state_province = COALESCE($19, state_province),
        postal_code = COALESCE($20, postal_code),
        country = COALESCE($21, country),
        latitude = COALESCE($22, latitude),
        longitude = COALESCE($23, longitude),
        timezone = COALESCE($24, timezone),
        phone = COALESCE($25, phone),
        email = COALESCE($26, email),
        website = COALESCE($27, website),
        operational_status = COALESCE($28, operational_status),
        updated_at = NOW(),
        updated_by = $29,
        version = version + 1
      WHERE property_id = $30
        AND property_id = $31
        AND version = $32
        AND deleted_at IS NULL
      RETURNING
        property_id as "venueId",
        property_code as "venueCode",
        name,
        property_type as "venueType",
        venue_classification as "venueClassification",
        updated_at as "updatedAt",
        version
    `;

    const result = await AppDataSource.query(query, [
      venueCode,
      name,
      venueType,
      venueClassification,
      seatingCapacity,
      hasOutdoorSeating,
      hasBar,
      hasPrivateDining,
      cuisineTypes,
      dressCode,
      parkingAvailable,
      acceptsReservations,
      acceptsWalkIns,
      deliveryAvailable,
      takeoutAvailable,
      location?.addressLine1,
      location?.addressLine2,
      location?.city,
      location?.stateProvince,
      location?.postalCode,
      location?.country,
      coordinates?.latitude,
      coordinates?.longitude,
      timezone,
      contactInfo?.phone,
      contactInfo?.email,
      contactInfo?.website,
      operationalStatus,
      req.user?.id,
      venueId,
      req.tenantId,
      expectedVersion,
    ]);

    if (result.length === 0) {
      // Check if venue exists
      const checkQuery = `
        SELECT version FROM property_mgmt.properties
        WHERE property_id = $1 AND property_id = $2 AND deleted_at IS NULL
      `;
      const checkResult = await AppDataSource.query(checkQuery, [venueId, req.tenantId]);

      if (checkResult.length === 0) {
        res.status(404).json({
          type: 'https://api.stayos.com/errors/not-found',
          title: 'Not Found',
          status: 404,
          detail: `Venue with ID ${venueId} not found`,
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
        detail: 'The venue has been modified by another request. Please fetch the latest version and try again.',
        instance: req.path,
        traceId: req.requestId,
        currentVersion: checkResult[0].version,
      });
      return;
    }

    const venue = result[0];

    // Set new ETag
    res.setHeader('ETag', `"${venue.version}"`);

    res.json(venue);
  } catch (error: any) {
    logger.error('Error updating venue:', error);

    if (error.code === '23505') {
      res.status(409).json({
        type: 'https://api.stayos.com/errors/conflict',
        title: 'Conflict',
        status: 409,
        detail: 'A venue with this code already exists',
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while updating the venue',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * DELETE /v1/venues/:venueId
 * Soft delete a venue (requires authentication and delete:venues scope)
 */
router.delete('/:venueId', authenticate, authorize('delete:venues'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const { venueId } = req.params;

    const query = `
      UPDATE property_mgmt.properties
      SET
        deleted_at = NOW(),
        updated_at = NOW(),
        updated_by = $1
      WHERE property_id = $2
        AND property_id = $3
        AND deleted_at IS NULL
      RETURNING property_id
    `;

    const result = await AppDataSource.query(query, [req.user?.id, venueId, req.tenantId]);

    if (result.length === 0) {
      res.status(404).json({
        type: 'https://api.stayos.com/errors/not-found',
        title: 'Not Found',
        status: 404,
        detail: `Venue with ID ${venueId} not found`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    res.status(204).end();
  } catch (error) {
    logger.error('Error deleting venue:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while deleting the venue',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

export default router;

