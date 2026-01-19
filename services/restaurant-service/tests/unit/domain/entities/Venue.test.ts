import { Venue, VenueType, VenueClassification, OperationalStatus, VenueProps } from '../../../../src/domain/entities/Venue';
import { VenueCreatedEvent } from '../../../../src/domain/events/VenueCreatedEvent';
import { VenueUpdatedEvent } from '../../../../src/domain/events/VenueUpdatedEvent';

describe('Venue Entity', () => {
  const validProps: VenueProps = {
    propertyId: 'property-123',
    name: 'The Grand Restaurant',
    description: 'A fine dining experience',
    venueType: VenueType.RESTAURANT,
    venueClassification: VenueClassification.FINE_DINING,
    operationalStatus: OperationalStatus.ACTIVE,
    acceptsReservations: true,
    capacity: 100,
    cuisineType: 'Italian',
    dressCode: 'Smart Casual',
    priceRange: '$$$',
    phoneNumber: '+254712345678',
    email: 'info@grandrestaurant.com',
    website: 'https://grandrestaurant.com',
    location: {
      address: '123 Main St',
      city: 'Nairobi',
      country: 'Kenya',
    },
    operatingHours: {
      monday: { open: '09:00', close: '22:00' },
      tuesday: { open: '09:00', close: '22:00' },
    },
    amenities: ['WiFi', 'Parking', 'Outdoor Seating'],
  };

  describe('create', () => {
    it('should create a new venue with valid properties', () => {
      const venue = Venue.create('venue-123', validProps);

      expect(venue).toBeDefined();
      expect(venue.id).toBe('venue-123');
      expect(venue.name).toBe('The Grand Restaurant');
      expect(venue.description).toBe('A fine dining experience');
      expect(venue.venueType).toBe(VenueType.RESTAURANT);
      expect(venue.venueClassification).toBe(VenueClassification.FINE_DINING);
      expect(venue.operationalStatus).toBe(OperationalStatus.ACTIVE);
      expect(venue.acceptsReservations).toBe(true);
      expect(venue.capacity).toBe(100);
    });

    it('should emit VenueCreatedEvent when created', () => {
      const venue = Venue.create('venue-123', validProps);
      const events = venue.getDomainEvents();

      expect(events).toHaveLength(1);
      expect(events[0]).toBeInstanceOf(VenueCreatedEvent);
      expect((events[0] as VenueCreatedEvent).venueId).toBe('venue-123');
      expect((events[0] as VenueCreatedEvent).propertyId).toBe('property-123');
      expect((events[0] as VenueCreatedEvent).name).toBe('The Grand Restaurant');
    });

    it('should set createdAt and updatedAt timestamps', () => {
      const venue = Venue.create('venue-123', validProps);

      expect(venue.createdAt).toBeInstanceOf(Date);
      expect(venue.updatedAt).toBeInstanceOf(Date);
      expect(venue.createdAt.getTime()).toBeLessThanOrEqual(venue.updatedAt.getTime());
    });
  });

  describe('reconstitute', () => {
    it('should reconstitute a venue from persistence', () => {
      const createdAt = new Date('2024-01-01');
      const updatedAt = new Date('2024-01-02');

      const venue = Venue.reconstitute('venue-123', validProps, createdAt, updatedAt);

      expect(venue).toBeDefined();
      expect(venue.id).toBe('venue-123');
      expect(venue.createdAt).toEqual(createdAt);
      expect(venue.updatedAt).toEqual(updatedAt);
    });

    it('should not emit domain events when reconstituted', () => {
      const venue = Venue.reconstitute('venue-123', validProps, new Date(), new Date());
      const events = venue.getDomainEvents();

      expect(events).toHaveLength(0);
    });
  });

  describe('updateDetails', () => {
    it('should update venue details', () => {
      const venue = Venue.create('venue-123', validProps);
      venue.clearEvents(); // Clear creation event

      const updates = {
        name: 'Updated Restaurant Name',
        description: 'Updated description',
        capacity: 150,
      };

      venue.updateDetails(updates);

      expect(venue.name).toBe('Updated Restaurant Name');
      expect(venue.description).toBe('Updated description');
      expect(venue.capacity).toBe(150);
    });

    it('should emit VenueUpdatedEvent when updated', () => {
      const venue = Venue.create('venue-123', validProps);
      venue.clearEvents();

      venue.updateDetails({ name: 'New Name' });
      const events = venue.getDomainEvents();

      expect(events).toHaveLength(1);
      expect(events[0]).toBeInstanceOf(VenueUpdatedEvent);
      expect((events[0] as VenueUpdatedEvent).venueId).toBe('venue-123');
      expect((events[0] as VenueUpdatedEvent).propertyId).toBe('property-123');
    });

    it('should update the updatedAt timestamp', () => {
      const venue = Venue.create('venue-123', validProps);
      const originalUpdatedAt = venue.updatedAt;

      // Wait a bit to ensure timestamp difference
      setTimeout(() => {
        venue.updateDetails({ name: 'New Name' });
        expect(venue.updatedAt.getTime()).toBeGreaterThan(originalUpdatedAt.getTime());
      }, 10);
    });
  });

  describe('activate', () => {
    it('should activate an inactive venue', () => {
      const inactiveProps = { ...validProps, operationalStatus: OperationalStatus.INACTIVE };
      const venue = Venue.create('venue-123', inactiveProps);

      venue.activate();

      expect(venue.operationalStatus).toBe(OperationalStatus.ACTIVE);
    });

    it('should throw error if venue is already active', () => {
      const venue = Venue.create('venue-123', validProps);

      expect(() => venue.activate()).toThrow('Venue is already active');
    });
  });

  describe('deactivate', () => {
    it('should deactivate an active venue', () => {
      const venue = Venue.create('venue-123', validProps);

      venue.deactivate();

      expect(venue.operationalStatus).toBe(OperationalStatus.INACTIVE);
    });

    it('should throw error if venue is already inactive', () => {
      const inactiveProps = { ...validProps, operationalStatus: OperationalStatus.INACTIVE };
      const venue = Venue.create('venue-123', inactiveProps);

      expect(() => venue.deactivate()).toThrow('Venue is already inactive');
    });
  });

  describe('softDelete', () => {
    it('should soft delete a venue', () => {
      const venue = Venue.create('venue-123', validProps);

      venue.softDelete();

      const venueObj = venue.toObject();
      expect(venueObj.deletedAt).toBeInstanceOf(Date);
    });
  });
});

