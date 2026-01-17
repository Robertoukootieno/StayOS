import { Router, Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import logger from '../config/logger';
import { authenticate, authorize } from '../middleware/auth';
import { validateTenant } from '../middleware/tenant';

const router = Router({ mergeParams: true }); // mergeParams to access venueId from parent route

/**
 * GET /v1/venues/:venueId/tables
 * List all tables for a venue (requires authentication and read:tables scope)
 */
router.get('/', authenticate, authorize('read:tables'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = Math.min(parseInt(req.query.pageSize as string) || 20, 100);
    const offset = (page - 1) * pageSize;

    // Extract filters from query params
    const sectionId = req.query.sectionId as string;
    const status = req.query.status as string;
    const minCapacity = req.query.minCapacity ? parseInt(req.query.minCapacity as string) : undefined;
    const maxCapacity = req.query.maxCapacity ? parseInt(req.query.maxCapacity as string) : undefined;
    const shape = req.query.shape as string;
    const isAccessible = req.query.isAccessible as string;
    const hasWindowView = req.query.hasWindowView as string;
    const sortBy = (req.query.sortBy as string) || 'table_number';
    const sortOrder = (req.query.sortOrder as string) || 'asc';

    // Build WHERE clause
    const conditions: string[] = ['t.deleted_at IS NULL', 't.property_id = $1'];
    const params: any[] = [req.tenantId];
    let paramIndex = 2;

    if (sectionId) {
      conditions.push(`t.section_id = $${paramIndex}`);
      params.push(sectionId);
      paramIndex++;
    }

    if (status) {
      conditions.push(`t.status = $${paramIndex}`);
      params.push(status);
      paramIndex++;
    }

    if (minCapacity !== undefined) {
      conditions.push(`t.max_capacity >= $${paramIndex}`);
      params.push(minCapacity);
      paramIndex++;
    }

    if (maxCapacity !== undefined) {
      conditions.push(`t.min_capacity <= $${paramIndex}`);
      params.push(maxCapacity);
      paramIndex++;
    }

    if (shape) {
      conditions.push(`t.shape = $${paramIndex}`);
      params.push(shape);
      paramIndex++;
    }

    if (isAccessible !== undefined) {
      conditions.push(`t.is_accessible = $${paramIndex}`);
      params.push(isAccessible === 'true');
      paramIndex++;
    }

    if (hasWindowView !== undefined) {
      conditions.push(`t.has_window_view = $${paramIndex}`);
      params.push(hasWindowView === 'true');
      paramIndex++;
    }

    const whereClause = conditions.join(' AND ');

    // Validate sortBy to prevent SQL injection
    const allowedSortFields = ['table_number', 'table_name', 'created_at', 'updated_at', 'min_capacity', 'max_capacity'];
    const sortField = allowedSortFields.includes(sortBy) ? sortBy : 'table_number';
    const sortDirection = sortOrder.toLowerCase() === 'desc' ? 'DESC' : 'ASC';

    // Count total records
    const countQuery = `
      SELECT COUNT(*) as total
      FROM tables.tables t
      WHERE ${whereClause}
    `;

    const countResult = await AppDataSource.query(countQuery, params);
    const total = parseInt(countResult[0].total);

    // Fetch tables
    const query = `
      SELECT 
        t.id as "tableId",
        t.section_id as "sectionId",
        t.table_number as "tableNumber",
        t.table_name as "tableName",
        t.qr_code as "qrCode",
        t.min_capacity as "minCapacity",
        t.max_capacity as "maxCapacity",
        t.shape,
        t.status,
        t.position_x as "positionX",
        t.position_y as "positionY",
        t.rotation,
        t.width,
        t.height,
        t.is_accessible as "isAccessible",
        t.is_high_top as "isHighTop",
        t.has_power_outlet as "hasPowerOutlet",
        t.has_window_view as "hasWindowView",
        t.is_combinable as "isCombinable",
        t.preferred_for_occasions as "preferredForOccasions",
        t.notes,
        t.created_at as "createdAt",
        t.updated_at as "updatedAt",
        t.version,
        s.section_name as "sectionName"
      FROM tables.tables t
      LEFT JOIN tables.floor_sections s ON t.section_id = s.id
      WHERE ${whereClause}
      ORDER BY t.${sortField} ${sortDirection}
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `;

    params.push(pageSize, offset);

    const tables = await AppDataSource.query(query, params);

    // Build response
    const response = {
      data: tables,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
        hasMore: offset + tables.length < total,
      },
    };

    res.json(response);
  } catch (error) {
    logger.error('Error listing tables:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while listing tables',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * POST /v1/venues/:venueId/tables
 * Create a new table (requires authentication and write:tables scope)
 */
router.post('/', authenticate, authorize('write:tables'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const { venueId } = req.params;
    const {
      sectionId,
      tableNumber,
      tableName,
      minCapacity,
      maxCapacity,
      shape,
      status,
      positionX,
      positionY,
      rotation,
      width,
      height,
      isAccessible,
      isHighTop,
      hasPowerOutlet,
      hasWindowView,
      isCombinable,
      preferredForOccasions,
      notes,
    } = req.body;

    // Validation
    if (!tableNumber || !minCapacity || !maxCapacity || !shape) {
      res.status(400).json({
        type: 'https://api.stayos.com/errors/validation-error',
        title: 'Validation Error',
        status: 400,
        detail: 'Missing required fields: tableNumber, minCapacity, maxCapacity, shape',
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const query = `
      INSERT INTO tables.tables (
        id,
        property_id,
        section_id,
        table_number,
        table_name,
        min_capacity,
        max_capacity,
        shape,
        status,
        position_x,
        position_y,
        rotation,
        width,
        height,
        is_accessible,
        is_high_top,
        has_power_outlet,
        has_window_view,
        is_combinable,
        preferred_for_occasions,
        notes,
        created_by,
        updated_by
      ) VALUES (
        shared.uuid_generate_v7(),
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22
      )
      RETURNING
        id as "tableId",
        section_id as "sectionId",
        table_number as "tableNumber",
        table_name as "tableName",
        min_capacity as "minCapacity",
        max_capacity as "maxCapacity",
        shape,
        status,
        created_at as "createdAt",
        version
    `;

    const result = await AppDataSource.query(query, [
      req.tenantId,
      sectionId,
      tableNumber,
      tableName,
      minCapacity,
      maxCapacity,
      shape,
      status || 'AVAILABLE',
      positionX,
      positionY,
      rotation || 0,
      width,
      height,
      isAccessible ?? false,
      isHighTop ?? false,
      hasPowerOutlet ?? false,
      hasWindowView ?? false,
      isCombinable ?? false,
      preferredForOccasions,
      notes,
      req.user?.id,
      req.user?.id,
    ]);

    const table = result[0];

    // Set Location header
    res.setHeader('Location', `/v1/venues/${venueId}/tables/${table.tableId}`);

    // Set ETag
    res.setHeader('ETag', `"${table.version}"`);

    res.status(201).json(table);
  } catch (error: any) {
    logger.error('Error creating table:', error);

    // Handle unique constraint violation
    if (error.code === '23505') {
      res.status(409).json({
        type: 'https://api.stayos.com/errors/conflict',
        title: 'Conflict',
        status: 409,
        detail: 'A table with this number already exists',
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while creating the table',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * GET /v1/venues/:venueId/tables/:tableId
 * Get a single table by ID (requires authentication and read:tables scope)
 */
router.get('/:tableId', authenticate, authorize('read:tables'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const { tableId } = req.params;

    const query = `
      SELECT
        t.id as "tableId",
        t.section_id as "sectionId",
        t.table_number as "tableNumber",
        t.table_name as "tableName",
        t.qr_code as "qrCode",
        t.min_capacity as "minCapacity",
        t.max_capacity as "maxCapacity",
        t.shape,
        t.status,
        t.position_x as "positionX",
        t.position_y as "positionY",
        t.rotation,
        t.width,
        t.height,
        t.is_accessible as "isAccessible",
        t.is_high_top as "isHighTop",
        t.has_power_outlet as "hasPowerOutlet",
        t.has_window_view as "hasWindowView",
        t.is_combinable as "isCombinable",
        t.preferred_for_occasions as "preferredForOccasions",
        t.notes,
        t.internal_notes as "internalNotes",
        t.created_at as "createdAt",
        t.updated_at as "updatedAt",
        t.version
      FROM tables.tables t
      WHERE t.id = $1
        AND t.property_id = $2
        AND t.deleted_at IS NULL
    `;

    const result = await AppDataSource.query(query, [tableId, req.tenantId]);

    if (result.length === 0) {
      res.status(404).json({
        type: 'https://api.stayos.com/errors/not-found',
        title: 'Not Found',
        status: 404,
        detail: `Table with ID ${tableId} not found`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    const table = result[0];

    // Set ETag for caching and optimistic locking
    res.setHeader('ETag', `"${table.version}"`);
    res.setHeader('Cache-Control', 'private, max-age=300'); // 5 minutes

    // Support conditional requests (304 Not Modified)
    const ifNoneMatch = req.headers['if-none-match'];
    if (ifNoneMatch === `"${table.version}"`) {
      res.status(304).end();
      return;
    }

    res.json(table);
  } catch (error) {
    logger.error('Error fetching table:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while fetching the table',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * PUT /v1/venues/:venueId/tables/:tableId
 * Update a table (requires authentication and write:tables scope)
 * Supports optimistic locking via If-Match header
 */
router.put('/:tableId', authenticate, authorize('write:tables'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const { tableId } = req.params;
    const {
      sectionId,
      tableNumber,
      tableName,
      minCapacity,
      maxCapacity,
      shape,
      status,
      positionX,
      positionY,
      rotation,
      width,
      height,
      isAccessible,
      isHighTop,
      hasPowerOutlet,
      hasWindowView,
      isCombinable,
      preferredForOccasions,
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
      UPDATE tables.tables
      SET
        section_id = COALESCE($1, section_id),
        table_number = COALESCE($2, table_number),
        table_name = COALESCE($3, table_name),
        min_capacity = COALESCE($4, min_capacity),
        max_capacity = COALESCE($5, max_capacity),
        shape = COALESCE($6, shape),
        status = COALESCE($7, status),
        position_x = COALESCE($8, position_x),
        position_y = COALESCE($9, position_y),
        rotation = COALESCE($10, rotation),
        width = COALESCE($11, width),
        height = COALESCE($12, height),
        is_accessible = COALESCE($13, is_accessible),
        is_high_top = COALESCE($14, is_high_top),
        has_power_outlet = COALESCE($15, has_power_outlet),
        has_window_view = COALESCE($16, has_window_view),
        is_combinable = COALESCE($17, is_combinable),
        preferred_for_occasions = COALESCE($18, preferred_for_occasions),
        notes = COALESCE($19, notes),
        internal_notes = COALESCE($20, internal_notes),
        updated_at = NOW(),
        updated_by = $21,
        version = version + 1
      WHERE id = $22
        AND property_id = $23
        AND version = $24
        AND deleted_at IS NULL
      RETURNING
        id as "tableId",
        table_number as "tableNumber",
        table_name as "tableName",
        status,
        updated_at as "updatedAt",
        version
    `;

    const result = await AppDataSource.query(query, [
      sectionId,
      tableNumber,
      tableName,
      minCapacity,
      maxCapacity,
      shape,
      status,
      positionX,
      positionY,
      rotation,
      width,
      height,
      isAccessible,
      isHighTop,
      hasPowerOutlet,
      hasWindowView,
      isCombinable,
      preferredForOccasions,
      notes,
      internalNotes,
      req.user?.id,
      tableId,
      req.tenantId,
      expectedVersion,
    ]);

    if (result.length === 0) {
      // Check if table exists
      const checkQuery = `
        SELECT version FROM tables.tables
        WHERE id = $1 AND property_id = $2 AND deleted_at IS NULL
      `;
      const checkResult = await AppDataSource.query(checkQuery, [tableId, req.tenantId]);

      if (checkResult.length === 0) {
        res.status(404).json({
          type: 'https://api.stayos.com/errors/not-found',
          title: 'Not Found',
          status: 404,
          detail: `Table with ID ${tableId} not found`,
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
        detail: 'The table has been modified by another request. Please fetch the latest version and try again.',
        instance: req.path,
        traceId: req.requestId,
        currentVersion: checkResult[0].version,
      });
      return;
    }

    const table = result[0];

    // Set new ETag
    res.setHeader('ETag', `"${table.version}"`);

    res.json(table);
  } catch (error: any) {
    logger.error('Error updating table:', error);

    if (error.code === '23505') {
      res.status(409).json({
        type: 'https://api.stayos.com/errors/conflict',
        title: 'Conflict',
        status: 409,
        detail: 'A table with this number already exists',
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while updating the table',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

/**
 * DELETE /v1/venues/:venueId/tables/:tableId
 * Soft delete a table (requires authentication and delete:tables scope)
 */
router.delete('/:tableId', authenticate, authorize('delete:tables'), validateTenant, async (req: Request, res: Response): Promise<void> => {
  try {
    const { tableId } = req.params;

    const query = `
      UPDATE tables.tables
      SET
        deleted_at = NOW(),
        updated_at = NOW(),
        updated_by = $1
      WHERE id = $2
        AND property_id = $3
        AND deleted_at IS NULL
      RETURNING id
    `;

    const result = await AppDataSource.query(query, [req.user?.id, tableId, req.tenantId]);

    if (result.length === 0) {
      res.status(404).json({
        type: 'https://api.stayos.com/errors/not-found',
        title: 'Not Found',
        status: 404,
        detail: `Table with ID ${tableId} not found`,
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    res.status(204).end();
  } catch (error) {
    logger.error('Error deleting table:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred while deleting the table',
      instance: req.path,
      traceId: req.requestId,
    });
  }
});

export default router;

