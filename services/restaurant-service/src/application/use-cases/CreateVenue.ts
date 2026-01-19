import { UseCase, Result, Logger, Tracer } from '@stayos/shared';
import { v7 as uuidv7 } from 'uuid';
import { Venue, VenueType, VenueClassification, OperationalStatus } from '../../domain/entities/Venue';
import { IVenueRepository } from '../../domain/repositories/IVenueRepository';
import { CreateVenueDTO, VenueDTO } from '../dtos/VenueDTO';
import { VenueMapper } from '../mappers/VenueMapper';

export interface CreateVenueRequest {
  tenantId: string;
  data: CreateVenueDTO;
}

export class CreateVenue implements UseCase<CreateVenueRequest, Result<VenueDTO>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(private venueRepository: IVenueRepository) {
    this.logger = new Logger('CreateVenue');
    this.tracer = new Tracer('restaurant-service');
  }

  async execute(request: CreateVenueRequest): Promise<Result<VenueDTO>> {
    return this.tracer.executeInSpan('CreateVenue.execute', async (span) => {
      try {
        const { tenantId, data } = request;

        // Validate required fields
        if (!data.name || data.name.trim().length === 0) {
          return Result.fail('Venue name is required');
        }

        if (!data.propertyId) {
          return Result.fail('Property ID is required');
        }

        if (!data.venueType || !Object.values(VenueType).includes(data.venueType as VenueType)) {
          return Result.fail('Valid venue type is required');
        }

        if (!data.venueClassification || !Object.values(VenueClassification).includes(data.venueClassification as VenueClassification)) {
          return Result.fail('Valid venue classification is required');
        }

        if (!data.capacity || data.capacity <= 0) {
          return Result.fail('Capacity must be greater than 0');
        }

        // Verify tenant matches property
        if (data.propertyId !== tenantId) {
          return Result.fail('Property ID must match tenant ID');
        }

        // Create venue entity
        const venueId = uuidv7();
        const venue = Venue.create(venueId, {
          propertyId: data.propertyId,
          name: data.name.trim(),
          description: data.description?.trim(),
          venueType: data.venueType as VenueType,
          venueClassification: data.venueClassification as VenueClassification,
          operationalStatus: (data.operationalStatus as OperationalStatus) || OperationalStatus.ACTIVE,
          acceptsReservations: data.acceptsReservations ?? true,
          capacity: data.capacity,
          cuisineType: data.cuisineType,
          dressCode: data.dressCode,
          priceRange: data.priceRange,
          phoneNumber: data.phoneNumber,
          email: data.email,
          website: data.website,
          location: data.location,
          operatingHours: data.operatingHours,
          amenities: data.amenities,
        });

        // Save to repository
        await this.venueRepository.save(venue);

        this.logger.info('Venue created successfully', {
          venueId,
          propertyId: data.propertyId,
          name: data.name,
        });

        // Convert to DTO
        const venueDTO = VenueMapper.toDTO(venue);

        return Result.ok(venueDTO);
      } catch (error) {
        this.logger.error('Failed to create venue', {
          error: error instanceof Error ? error.message : 'Unknown error',
          request,
        });
        return Result.fail('Failed to create venue');
      }
    });
  }
}

