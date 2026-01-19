import { Pool } from 'pg';
import { VenueRepository } from '../../../src/infrastructure/database/repositories/VenueRepository';
import { Venue, VenueType, VenueClassification, OperationalStatus } from '../../../src/domain/entities/Venue';
import { v4 as uuidv4 } from 'uuid';

describe('VenueRepository Integration Tests', () => {
  let pool: Pool;
  let repository: VenueRepository;
  const propertyId = 'test-property-' + uuidv4();

  beforeAll(async () => {
    // Create database connection
    pool = new Pool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME || 'stayos_test',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
    });

    repository = new VenueRepository(pool);

    // Ensure the venues table exists (run migrations if needed)
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
    // Clean up test data
    await pool.query('DELETE FROM venues WHERE property_id = $1', [propertyId]);
    await pool.end();
  });

  beforeEach(async () => {
    // Clean up before each test
    await pool.query('DELETE FROM venues WHERE property_id = $1', [propertyId]);
  });

  describe('save', () => {
    it('should save a venue to the database', async () => {
      const venueId = 'venue-' + uuidv4();
      const venue = Venue.create(venueId, {
        propertyId,
        name: 'Test Restaurant',
        venueType: VenueType.RESTAURANT,
        venueClassification: VenueClassification.FINE_DINING,
        operationalStatus: OperationalStatus.ACTIVE,
        acceptsReservations: true,
        capacity: 100,
        description: 'A test restaurant',
        cuisineType: 'Italian',
        dressCode: 'Smart Casual',
        priceRange: '$$$',
        phoneNumber: '+1234567890',
        email: 'test@restaurant.com',
        website: 'https://test-restaurant.com',
        location: {
          addressLine1: '123 Main St',
          city: 'Nairobi',
          stateProvince: 'Nairobi',
          postalCode: '00100',
          country: 'Kenya',
          latitude: -1.286389,
          longitude: 36.817223,
          timezone: 'Africa/Nairobi',
        },
        operatingHours: {
          monday: { open: '09:00', close: '22:00' },
          tuesday: { open: '09:00', close: '22:00' },
        },
        amenities: ['WiFi', 'Parking', 'Outdoor Seating'],
      });

      await repository.save(venue);

      // Verify it was saved
      const result = await pool.query('SELECT * FROM venues WHERE venue_id = $1', [venueId]);
      expect(result.rows).toHaveLength(1);
      expect(result.rows[0].name).toBe('Test Restaurant');
      expect(result.rows[0].venue_type).toBe(VenueType.RESTAURANT);
    });
  });

  describe('findById', () => {
    it('should find a venue by ID', async () => {
      const venueId = 'venue-' + uuidv4();
      const venue = Venue.create(venueId, {
        propertyId,
        name: 'Find Me Restaurant',
        venueType: VenueType.RESTAURANT,
        venueClassification: VenueClassification.CASUAL_DINING,
        operationalStatus: OperationalStatus.ACTIVE,
        acceptsReservations: true,
        capacity: 50,
      });

      await repository.save(venue);

      const found = await repository.findById(venueId, propertyId);

      expect(found).not.toBeNull();
      expect(found!.id).toBe(venueId);
      expect(found!.name).toBe('Find Me Restaurant');
    });

    it('should return null if venue not found', async () => {
      const found = await repository.findById('non-existent-id', propertyId);
      expect(found).toBeNull();
    });

    it('should return null if venue is soft deleted', async () => {
      const venueId = 'venue-' + uuidv4();
      const venue = Venue.create(venueId, {
        propertyId,
        name: 'Deleted Restaurant',
        venueType: VenueType.RESTAURANT,
        venueClassification: VenueClassification.CASUAL_DINING,
        operationalStatus: OperationalStatus.ACTIVE,
        acceptsReservations: true,
        capacity: 50,
      });

      await repository.save(venue);
      await repository.delete(venueId, propertyId);

      const found = await repository.findById(venueId, propertyId);
      expect(found).toBeNull();
    });
  });

  describe('findAll', () => {
    it('should find all venues for a property', async () => {
      // Create multiple venues
      const venue1 = Venue.create('venue-1-' + uuidv4(), {
        propertyId,
        name: 'Restaurant A',
        venueType: VenueType.RESTAURANT,
        venueClassification: VenueClassification.FINE_DINING,
        operationalStatus: OperationalStatus.ACTIVE,
        acceptsReservations: true,
        capacity: 100,
      });

      const venue2 = Venue.create('venue-2-' + uuidv4(), {
        propertyId,
        name: 'Bar B',
        venueType: VenueType.BAR,
        venueClassification: VenueClassification.CASUAL_DINING,
        operationalStatus: OperationalStatus.ACTIVE,
        acceptsReservations: false,
        capacity: 50,
      });

      await repository.save(venue1);
      await repository.save(venue2);

      const result = await repository.findAll(
        { propertyId },
        { page: 1, limit: 10 }
      );

      expect(result.data).toHaveLength(2);
      expect(result.pagination.total).toBe(2);
    });

    it('should filter venues by type', async () => {
      const venue1 = Venue.create('venue-1-' + uuidv4(), {
        propertyId,
        name: 'Restaurant A',
        venueType: VenueType.RESTAURANT,
        venueClassification: VenueClassification.FINE_DINING,
        operationalStatus: OperationalStatus.ACTIVE,
        acceptsReservations: true,
        capacity: 100,
      });

      const venue2 = Venue.create('venue-2-' + uuidv4(), {
        propertyId,
        name: 'Bar B',
        venueType: VenueType.BAR,
        venueClassification: VenueClassification.CASUAL_DINING,
        operationalStatus: OperationalStatus.ACTIVE,
        acceptsReservations: false,
        capacity: 50,
      });

      await repository.save(venue1);
      await repository.save(venue2);

      const result = await repository.findAll(
        { propertyId, venueType: VenueType.RESTAURANT },
        { page: 1, limit: 10 }
      );

      expect(result.data).toHaveLength(1);
      expect(result.data[0].venueType).toBe(VenueType.RESTAURANT);
    });

    it('should paginate results', async () => {
      // Create 5 venues
      for (let i = 0; i < 5; i++) {
        const venue = Venue.create('venue-' + i + '-' + uuidv4(), {
          propertyId,
          name: `Restaurant ${i}`,
          venueType: VenueType.RESTAURANT,
          venueClassification: VenueClassification.CASUAL_DINING,
          operationalStatus: OperationalStatus.ACTIVE,
          acceptsReservations: true,
          capacity: 50,
        });
        await repository.save(venue);
      }

      const page1 = await repository.findAll(
        { propertyId },
        { page: 1, limit: 2 }
      );

      expect(page1.data).toHaveLength(2);
      expect(page1.pagination.total).toBe(5);
      expect(page1.pagination.totalPages).toBe(3);

      const page2 = await repository.findAll(
        { propertyId },
        { page: 2, limit: 2 }
      );

      expect(page2.data).toHaveLength(2);
      expect(page2.pagination.page).toBe(2);
    });
  });

  describe('update', () => {
    it('should update a venue', async () => {
      const venueId = 'venue-' + uuidv4();
      const venue = Venue.create(venueId, {
        propertyId,
        name: 'Original Name',
        venueType: VenueType.RESTAURANT,
        venueClassification: VenueClassification.CASUAL_DINING,
        operationalStatus: OperationalStatus.ACTIVE,
        acceptsReservations: true,
        capacity: 50,
      });

      await repository.save(venue);

      venue.updateDetails({ name: 'Updated Name', capacity: 75 });
      await repository.update(venue);

      const updated = await repository.findById(venueId, propertyId);
      expect(updated!.name).toBe('Updated Name');
      expect(updated!.capacity).toBe(75);
    });
  });

  describe('delete', () => {
    it('should soft delete a venue', async () => {
      const venueId = 'venue-' + uuidv4();
      const venue = Venue.create(venueId, {
        propertyId,
        name: 'To Be Deleted',
        venueType: VenueType.RESTAURANT,
        venueClassification: VenueClassification.CASUAL_DINING,
        operationalStatus: OperationalStatus.ACTIVE,
        acceptsReservations: true,
        capacity: 50,
      });

      await repository.save(venue);
      await repository.delete(venueId, propertyId);

      const found = await repository.findById(venueId, propertyId);
      expect(found).toBeNull();

      // Verify it's soft deleted (deleted_at is set)
      const result = await pool.query(
        'SELECT deleted_at FROM venues WHERE venue_id = $1',
        [venueId]
      );
      expect(result.rows[0].deleted_at).not.toBeNull();
    });
  });

  describe('exists', () => {
    it('should return true if venue exists', async () => {
      const venueId = 'venue-' + uuidv4();
      const venue = Venue.create(venueId, {
        propertyId,
        name: 'Exists Test',
        venueType: VenueType.RESTAURANT,
        venueClassification: VenueClassification.CASUAL_DINING,
        operationalStatus: OperationalStatus.ACTIVE,
        acceptsReservations: true,
        capacity: 50,
      });

      await repository.save(venue);

      const exists = await repository.exists(venueId, propertyId);
      expect(exists).toBe(true);
    });

    it('should return false if venue does not exist', async () => {
      const exists = await repository.exists('non-existent-id', propertyId);
      expect(exists).toBe(false);
    });
  });
});

