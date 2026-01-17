import { Router, Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import logger from '../config/logger';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

/**
 * GET /v1/properties
 * List all properties (requires authentication and read:properties scope)
 */
router.get('/', authenticate, authorize('read:properties'), async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 20;
    const offset = (page - 1) * pageSize;

    const query = `
      SELECT
        id,
        name,
        classification,
        star_rating,
        timezone,
        status,
        created_at,
        updated_at
      FROM properties
      WHERE deleted_at IS NULL
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `;

    const countQuery = `
      SELECT COUNT(*) as total
      FROM properties
      WHERE deleted_at IS NULL
    `;

    const [properties, countResult] = await Promise.all([
      AppDataSource.query(query, [pageSize, offset]),
      AppDataSource.query(countQuery),
    ]);

    const total = parseInt(countResult[0]?.total || '0');
    const totalPages = Math.ceil(total / pageSize);

    res.json({
      data: properties,
      pagination: {
        page,
        pageSize,
        total,
        totalPages,
      },
      links: {
        self: `/v1/properties?page=${page}&pageSize=${pageSize}`,
        first: `/v1/properties?page=1&pageSize=${pageSize}`,
        last: `/v1/properties?page=${totalPages}&pageSize=${pageSize}`,
        ...(page > 1 && { prev: `/v1/properties?page=${page - 1}&pageSize=${pageSize}` }),
        ...(page < totalPages && { next: `/v1/properties?page=${page + 1}&pageSize=${pageSize}` }),
      },
    });

    logger.info(`Listed ${properties.length} properties (page ${page}/${totalPages})`);
  } catch (error) {
    logger.error('Error fetching properties:', error);
    res.status(500).json({
      type: 'https://stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'Failed to fetch properties',
      instance: req.path,
    });
  }
});

/**
 * GET /v1/properties/:id
 * Get a single property by ID (requires authentication and read:properties scope)
 */
router.get('/:id', authenticate, authorize('read:properties'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const query = `
      SELECT
        id,
        name,
        classification,
        star_rating,
        timezone,
        status,
        created_at,
        updated_at
      FROM properties
      WHERE id = $1 AND deleted_at IS NULL
    `;

    const properties = await AppDataSource.query(query, [id]);

    if (properties.length === 0) {
      res.status(404).json({
        type: 'https://stayos.com/errors/not-found',
        title: 'Property Not Found',
        status: 404,
        detail: `Property with ID ${id} was not found`,
        instance: req.path,
      });
      return;
    }

    logger.info(`Retrieved property ${id}`);

    res.json({
      data: properties[0],
      links: {
        self: `/v1/properties/${id}`,
        units: `/v1/properties/${id}/units`,
        unitTypes: `/v1/properties/${id}/unit-types`,
      },
    });
  } catch (error) {
    logger.error('Error fetching property:', error);
    res.status(500).json({
      type: 'https://stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'Failed to fetch property',
      instance: req.path,
    });
  }
});

export default router;

