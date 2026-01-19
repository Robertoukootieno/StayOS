import request from 'supertest';
import express, { Express } from 'express';
import venuesRouter from '../../src/routes/venues';
import { AppDataSource } from '../../src/config/database';

// Mock logger
jest.mock('../../src/config/logger', () => ({
  default: {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  },
}));

// Mock database
jest.mock('../../src/config/database', () => ({
  AppDataSource: {
    query: jest.fn(),
  },
}));

// Mock authentication middleware
jest.mock('../../src/middleware/auth', () => ({
  authenticate: (req: any, _res: any, next: any) => {
    req.user = { id: 'user-123', email: 'test@example.com' };
    next();
  },
  authorize: () => (_req: any, _res: any, next: any) => next(),
}));

// Mock tenant middleware
jest.mock('../../src/middleware/tenant', () => ({
  validateTenant: (req: any, _res: any, next: any) => {
    req.tenantId = req.headers['x-tenant-id'] || 'tenant-123';
    next();
  },
}));

describe('Venues Routes', () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/v1/venues', venuesRouter);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /v1/venues', () => {
    it('should return list of venues with pagination', async () => {
      const mockVenues = [
        {
          id: 'venue-1',
          property_id: 'tenant-123',
          name: 'Main Restaurant',
          venue_type: 'RESTAURANT',
          status: 'ACTIVE',
          created_at: new Date(),
        },
      ];

      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([{ count: '1' }]);
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce(mockVenues);

      const response = await request(app)
        .get('/v1/venues')
        .set('X-Tenant-Id', 'tenant-123')
        .query({ page: 1, pageSize: 10 });

      expect(response.status).toBe(200);
      expect(response.body.data).toHaveLength(1);
      expect(response.body.pagination).toMatchObject({
        page: 1,
        pageSize: 10,
        total: 1,
      });
    });

    it('should filter venues by status', async () => {
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([{ count: '0' }]);
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([]);

      const response = await request(app)
        .get('/v1/venues')
        .set('X-Tenant-Id', 'tenant-123')
        .query({ status: 'ACTIVE' });

      expect(response.status).toBe(200);
      expect(AppDataSource.query).toHaveBeenCalledWith(
        expect.stringContaining('WHERE property_id = $1 AND deleted_at IS NULL AND status = $2'),
        expect.arrayContaining(['tenant-123', 'ACTIVE'])
      );
    });

    it('should filter venues by type', async () => {
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([{ count: '0' }]);
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([]);

      const response = await request(app)
        .get('/v1/venues')
        .set('X-Tenant-Id', 'tenant-123')
        .query({ venueType: 'RESTAURANT' });

      expect(response.status).toBe(200);
      expect(AppDataSource.query).toHaveBeenCalledWith(
        expect.stringContaining('venue_type = $'),
        expect.arrayContaining(['RESTAURANT'])
      );
    });

    it('should sort venues by name', async () => {
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([{ count: '0' }]);
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([]);

      const response = await request(app)
        .get('/v1/venues')
        .set('X-Tenant-Id', 'tenant-123')
        .query({ sortBy: 'name', sortOrder: 'asc' });

      expect(response.status).toBe(200);
      expect(AppDataSource.query).toHaveBeenCalledWith(
        expect.stringContaining('ORDER BY name asc'),
        expect.any(Array)
      );
    });
  });

  describe('POST /v1/venues', () => {
    it('should create a new venue', async () => {
      const newVenue = {
        name: 'New Restaurant',
        venueType: 'RESTAURANT',
        status: 'ACTIVE',
      };

      const mockCreatedVenue = {
        id: 'venue-new',
        property_id: 'tenant-123',
        ...newVenue,
        venue_type: newVenue.venueType,
        created_at: new Date(),
      };

      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockCreatedVenue]);

      const response = await request(app)
        .post('/v1/venues')
        .set('X-Tenant-Id', 'tenant-123')
        .send(newVenue);

      expect(response.status).toBe(201);
      expect(response.body.id).toBe('venue-new');
      expect(response.body.name).toBe(newVenue.name);
      expect(response.headers.location).toContain('/v1/venues/venue-new');
    });

    it('should return 400 for invalid venue data', async () => {
      const invalidVenue = {
        // Missing required fields
        venueType: 'INVALID_TYPE',
      };

      const response = await request(app)
        .post('/v1/venues')
        .set('X-Tenant-Id', 'tenant-123')
        .send(invalidVenue);

      expect(response.status).toBe(400);
    });
  });

  describe('GET /v1/venues/:venueId', () => {
    it('should return a single venue', async () => {
      const mockVenue = {
        id: 'venue-1',
        property_id: 'tenant-123',
        name: 'Main Restaurant',
        venue_type: 'RESTAURANT',
        status: 'ACTIVE',
        version: 1,
        created_at: new Date(),
      };

      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockVenue]);

      const response = await request(app)
        .get('/v1/venues/venue-1')
        .set('X-Tenant-Id', 'tenant-123');

      expect(response.status).toBe(200);
      expect(response.body.id).toBe('venue-1');
      expect(response.headers.etag).toBeDefined();
    });

    it('should return 404 for non-existent venue', async () => {
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([]);

      const response = await request(app)
        .get('/v1/venues/non-existent')
        .set('X-Tenant-Id', 'tenant-123');

      expect(response.status).toBe(404);
      expect(response.body.type).toContain('not-found');
    });
  });

  describe('PUT /v1/venues/:venueId', () => {
    it('should update a venue with optimistic locking', async () => {
      const updateData = {
        name: 'Updated Restaurant',
        status: 'ACTIVE',
      };

      const mockUpdatedVenue = {
        id: 'venue-1',
        property_id: 'tenant-123',
        ...updateData,
        version: 2,
        updated_at: new Date(),
      };

      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockUpdatedVenue]);

      const response = await request(app)
        .put('/v1/venues/venue-1')
        .set('X-Tenant-Id', 'tenant-123')
        .set('If-Match', '"1"')
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.name).toBe(updateData.name);
      expect(response.headers.etag).toBe('"2"');
    });

    it('should return 428 if If-Match header is missing', async () => {
      const response = await request(app)
        .put('/v1/venues/venue-1')
        .set('X-Tenant-Id', 'tenant-123')
        .send({ name: 'Updated' });

      expect(response.status).toBe(428);
      expect(response.body.type).toContain('precondition-required');
    });

    it('should return 412 on version mismatch', async () => {
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([]);

      const response = await request(app)
        .put('/v1/venues/venue-1')
        .set('X-Tenant-Id', 'tenant-123')
        .set('If-Match', '"999"')
        .send({ name: 'Updated' });

      expect(response.status).toBe(412);
      expect(response.body.type).toContain('precondition-failed');
    });
  });

  describe('DELETE /v1/venues/:venueId', () => {
    it('should soft delete a venue', async () => {
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce({ rowCount: 1 });

      const response = await request(app)
        .delete('/v1/venues/venue-1')
        .set('X-Tenant-Id', 'tenant-123');

      expect(response.status).toBe(204);
      expect(AppDataSource.query).toHaveBeenCalledWith(
        expect.stringContaining('UPDATE property_mgmt.venues SET deleted_at'),
        expect.any(Array)
      );
    });

    it('should return 404 when deleting non-existent venue', async () => {
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce({ rowCount: 0 });

      const response = await request(app)
        .delete('/v1/venues/non-existent')
        .set('X-Tenant-Id', 'tenant-123');

      expect(response.status).toBe(404);
    });
  });
});


