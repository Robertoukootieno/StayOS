import request from 'supertest';
import { Pool } from 'pg';
import { app } from '../../src/app';
import { v4 as uuidv4 } from 'uuid';

describe('Venues E2E Tests', () => {
  let pool: Pool;
  const propertyId = 'test-property-' + uuidv4();
  const tenantId = propertyId;

  beforeAll(async () => {
    pool = new Pool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME || 'stayos_test',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
    });

    // Ensure table exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS venues (
        venue_id VARCHAR(255) PRIMARY KEY,
        property_id VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        venue_type VARCHAR(50) NOT NULL,
        venue_classification VARCHAR(50) NOT NULL,
        operational_status VARCHAR(50) NOT NULL,
        accepts_reservations BOOLEAN DEFAULT true,
        capacity INTEGER,
        cuisine_type VARCHAR(100),
        dress_code VARCHAR(100),
        price_range VARCHAR(50),
        phone_number VARCHAR(50),
        email VARCHAR(255),
        website VARCHAR(255),
        location JSONB,
        operating_hours JSONB,
        amenities TEXT[],
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        deleted_at TIMESTAMP
      )
    `);
  });

  afterAll(async () => {
    await pool.query('DELETE FROM venues WHERE property_id = $1', [propertyId]);
    await pool.end();
  });

  beforeEach(async () => {
    await pool.query('DELETE FROM venues WHERE property_id = $1', [propertyId]);
  });

  describe('POST /api/v1/venues', () => {
    it('should create a new venue', async () => {
      const venueData = {
        propertyId,
        name: 'Test Restaurant',
        venueType: 'restaurant',
        venueClassification: 'fine_dining',
        operationalStatus: 'active',
        acceptsReservations: true,
        capacity: 100,
        description: 'A test restaurant',
        cuisineType: 'Italian',
        dressCode: 'Smart Casual',
        priceRange: '$$$',
      };

      const response = await request(app)
        .post('/api/v1/venues')
        .set('X-Tenant-Id', tenantId)
        .send(venueData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data.name).toBe('Test Restaurant');
      expect(response.body.data.venueType).toBe('restaurant');
    });

    it('should return 400 if X-Tenant-Id header is missing', async () => {
      const venueData = {
        propertyId,
        name: 'Test Restaurant',
        venueType: 'restaurant',
        venueClassification: 'fine_dining',
        operationalStatus: 'active',
        acceptsReservations: true,
        capacity: 100,
      };

      const response = await request(app)
        .post('/api/v1/venues')
        .send(venueData)
        .expect(400);

      expect(response.body.error).toBe('Bad Request');
      expect(response.body.message).toContain('X-Tenant-Id');
    });

    it('should return 400 if required fields are missing', async () => {
      const venueData = {
        propertyId,
        // Missing name
        venueType: 'restaurant',
      };

      const response = await request(app)
        .post('/api/v1/venues')
        .set('X-Tenant-Id', tenantId)
        .send(venueData)
        .expect(400);

      expect(response.body.error).toBe('Bad Request');
    });

    it('should return 400 if tenant ID does not match property ID', async () => {
      const venueData = {
        propertyId: 'different-property-id',
        name: 'Test Restaurant',
        venueType: 'restaurant',
        venueClassification: 'fine_dining',
        operationalStatus: 'active',
        acceptsReservations: true,
        capacity: 100,
      };

      const response = await request(app)
        .post('/api/v1/venues')
        .set('X-Tenant-Id', tenantId)
        .send(venueData)
        .expect(400);

      expect(response.body.error).toBe('Bad Request');
      expect(response.body.message).toContain('Tenant ID');
    });
  });

  describe('GET /api/v1/venues/:id', () => {
    it('should get a venue by ID', async () => {
      // First create a venue
      const createResponse = await request(app)
        .post('/api/v1/venues')
        .set('X-Tenant-Id', tenantId)
        .send({
          propertyId,
          name: 'Get Test Restaurant',
          venueType: 'restaurant',
          venueClassification: 'casual_dining',
          operationalStatus: 'active',
          acceptsReservations: true,
          capacity: 50,
        });

      const venueId = createResponse.body.data.id;

      // Now get it
      const response = await request(app)
        .get(`/api/v1/venues/${venueId}`)
        .set('X-Tenant-Id', tenantId)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBe(venueId);
      expect(response.body.data.name).toBe('Get Test Restaurant');
    });

    it('should return 404 if venue not found', async () => {
      const response = await request(app)
        .get('/api/v1/venues/non-existent-id')
        .set('X-Tenant-Id', tenantId)
        .expect(404);

      expect(response.body.error).toBe('Not Found');
    });
  });

  describe('GET /api/v1/venues', () => {
    it('should list all venues', async () => {
      // Create multiple venues
      await request(app)
        .post('/api/v1/venues')
        .set('X-Tenant-Id', tenantId)
        .send({
          propertyId,
          name: 'Restaurant A',
          venueType: 'restaurant',
          venueClassification: 'fine_dining',
          operationalStatus: 'active',
          acceptsReservations: true,
          capacity: 100,
        });

      await request(app)
        .post('/api/v1/venues')
        .set('X-Tenant-Id', tenantId)
        .send({
          propertyId,
          name: 'Bar B',
          venueType: 'bar',
          venueClassification: 'casual_dining',
          operationalStatus: 'active',
          acceptsReservations: false,
          capacity: 50,
        });

      const response = await request(app)
        .get('/api/v1/venues')
        .set('X-Tenant-Id', tenantId)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(2);
      expect(response.body.pagination.total).toBe(2);
    });

    it('should filter venues by type', async () => {
      await request(app)
        .post('/api/v1/venues')
        .set('X-Tenant-Id', tenantId)
        .send({
          propertyId,
          name: 'Restaurant A',
          venueType: 'restaurant',
          venueClassification: 'fine_dining',
          operationalStatus: 'active',
          acceptsReservations: true,
          capacity: 100,
        });

      await request(app)
        .post('/api/v1/venues')
        .set('X-Tenant-Id', tenantId)
        .send({
          propertyId,
          name: 'Bar B',
          venueType: 'bar',
          venueClassification: 'casual_dining',
          operationalStatus: 'active',
          acceptsReservations: false,
          capacity: 50,
        });

      const response = await request(app)
        .get('/api/v1/venues?venueType=restaurant')
        .set('X-Tenant-Id', tenantId)
        .expect(200);

      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].venueType).toBe('restaurant');
    });

    it('should paginate results', async () => {
      // Create 5 venues
      for (let i = 0; i < 5; i++) {
        await request(app)
          .post('/api/v1/venues')
          .set('X-Tenant-Id', tenantId)
          .send({
            propertyId,
            name: `Restaurant ${i}`,
            venueType: 'restaurant',
            venueClassification: 'casual_dining',
            operationalStatus: 'active',
            acceptsReservations: true,
            capacity: 50,
          });
      }

      const response = await request(app)
        .get('/api/v1/venues?page=1&limit=2')
        .set('X-Tenant-Id', tenantId)
        .expect(200);

      expect(response.body.data).toHaveLength(2);
      expect(response.body.pagination.total).toBe(5);
      expect(response.body.pagination.totalPages).toBe(3);
    });
  });

  describe('PUT /api/v1/venues/:id', () => {
    it('should update a venue', async () => {
      // Create a venue
      const createResponse = await request(app)
        .post('/api/v1/venues')
        .set('X-Tenant-Id', tenantId)
        .send({
          propertyId,
          name: 'Original Name',
          venueType: 'restaurant',
          venueClassification: 'casual_dining',
          operationalStatus: 'active',
          acceptsReservations: true,
          capacity: 50,
        });

      const venueId = createResponse.body.data.id;

      // Update it
      const response = await request(app)
        .put(`/api/v1/venues/${venueId}`)
        .set('X-Tenant-Id', tenantId)
        .send({
          name: 'Updated Name',
          capacity: 75,
        })
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe('Updated Name');
      expect(response.body.data.capacity).toBe(75);
    });

    it('should return 404 if venue not found', async () => {
      const response = await request(app)
        .put('/api/v1/venues/non-existent-id')
        .set('X-Tenant-Id', tenantId)
        .send({ name: 'Updated Name' })
        .expect(404);

      expect(response.body.error).toBe('Not Found');
    });
  });

  describe('DELETE /api/v1/venues/:id', () => {
    it('should delete a venue', async () => {
      // Create a venue
      const createResponse = await request(app)
        .post('/api/v1/venues')
        .set('X-Tenant-Id', tenantId)
        .send({
          propertyId,
          name: 'To Be Deleted',
          venueType: 'restaurant',
          venueClassification: 'casual_dining',
          operationalStatus: 'active',
          acceptsReservations: true,
          capacity: 50,
        });

      const venueId = createResponse.body.data.id;

      // Delete it
      await request(app)
        .delete(`/api/v1/venues/${venueId}`)
        .set('X-Tenant-Id', tenantId)
        .expect(204);

      // Verify it's deleted
      await request(app)
        .get(`/api/v1/venues/${venueId}`)
        .set('X-Tenant-Id', tenantId)
        .expect(404);
    });

    it('should return 404 if venue not found', async () => {
      const response = await request(app)
        .delete('/api/v1/venues/non-existent-id')
        .set('X-Tenant-Id', tenantId)
        .expect(404);

      expect(response.body.error).toBe('Not Found');
    });
  });
});

