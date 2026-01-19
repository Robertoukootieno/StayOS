import { CreateVenue } from '../../../../src/application/use-cases/CreateVenue';
import { IVenueRepository } from '../../../../src/domain/repositories/IVenueRepository';
import { Venue, VenueType, VenueClassification } from '../../../../src/domain/entities/Venue';

// Mock repository
class MockVenueRepository implements Partial<IVenueRepository> {
  save = jest.fn();
  findById = jest.fn();
  exists = jest.fn();
}

describe('CreateVenue Use Case', () => {
  let useCase: CreateVenue;
  let mockRepository: MockVenueRepository;

  beforeEach(() => {
    mockRepository = new MockVenueRepository();
    useCase = new CreateVenue(mockRepository as IVenueRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a venue successfully', async () => {
    const request = {
      tenantId: 'property-123',
      data: {
        propertyId: 'property-123',
        name: 'Test Restaurant',
        venueType: VenueType.RESTAURANT,
        venueClassification: VenueClassification.CASUAL_DINING,
        capacity: 50,
      },
    };

    mockRepository.save.mockResolvedValue(undefined);

    const result = await useCase.execute(request);

    expect(result.isSuccess).toBe(true);
    expect(mockRepository.save).toHaveBeenCalledTimes(1);
    
    const savedVenue = mockRepository.save.mock.calls[0][0];
    expect(savedVenue).toBeInstanceOf(Venue);
    expect(savedVenue.name).toBe('Test Restaurant');
  });

  it('should fail if venue name is empty', async () => {
    const request = {
      tenantId: 'property-123',
      data: {
        propertyId: 'property-123',
        name: '',
        venueType: VenueType.RESTAURANT,
        venueClassification: VenueClassification.CASUAL_DINING,
        capacity: 50,
      },
    };

    const result = await useCase.execute(request);

    expect(result.isFailure).toBe(true);
    expect(result.error).toBe('Venue name is required');
    expect(mockRepository.save).not.toHaveBeenCalled();
  });

  it('should fail if property ID is missing', async () => {
    const request = {
      tenantId: 'property-123',
      data: {
        propertyId: '',
        name: 'Test Restaurant',
        venueType: VenueType.RESTAURANT,
        venueClassification: VenueClassification.CASUAL_DINING,
        capacity: 50,
      },
    };

    const result = await useCase.execute(request);

    expect(result.isFailure).toBe(true);
    expect(result.error).toBe('Property ID is required');
    expect(mockRepository.save).not.toHaveBeenCalled();
  });

  it('should fail if venue type is invalid', async () => {
    const request = {
      tenantId: 'property-123',
      data: {
        propertyId: 'property-123',
        name: 'Test Restaurant',
        venueType: 'INVALID_TYPE' as any,
        venueClassification: VenueClassification.CASUAL_DINING,
        capacity: 50,
      },
    };

    const result = await useCase.execute(request);

    expect(result.isFailure).toBe(true);
    expect(result.error).toBe('Valid venue type is required');
    expect(mockRepository.save).not.toHaveBeenCalled();
  });

  it('should fail if capacity is zero or negative', async () => {
    const request = {
      tenantId: 'property-123',
      data: {
        propertyId: 'property-123',
        name: 'Test Restaurant',
        venueType: VenueType.RESTAURANT,
        venueClassification: VenueClassification.CASUAL_DINING,
        capacity: 0,
      },
    };

    const result = await useCase.execute(request);

    expect(result.isFailure).toBe(true);
    expect(result.error).toBe('Capacity must be greater than 0');
    expect(mockRepository.save).not.toHaveBeenCalled();
  });

  it('should fail if tenant ID does not match property ID', async () => {
    const request = {
      tenantId: 'property-123',
      data: {
        propertyId: 'property-456',
        name: 'Test Restaurant',
        venueType: VenueType.RESTAURANT,
        venueClassification: VenueClassification.CASUAL_DINING,
        capacity: 50,
      },
    };

    const result = await useCase.execute(request);

    expect(result.isFailure).toBe(true);
    expect(result.error).toBe('Property ID must match tenant ID');
    expect(mockRepository.save).not.toHaveBeenCalled();
  });

  it('should trim venue name', async () => {
    const request = {
      tenantId: 'property-123',
      data: {
        propertyId: 'property-123',
        name: '  Test Restaurant  ',
        venueType: VenueType.RESTAURANT,
        venueClassification: VenueClassification.CASUAL_DINING,
        capacity: 50,
      },
    };

    mockRepository.save.mockResolvedValue(undefined);

    const result = await useCase.execute(request);

    expect(result.isSuccess).toBe(true);
    
    const savedVenue = mockRepository.save.mock.calls[0][0];
    expect(savedVenue.name).toBe('Test Restaurant');
  });
});

