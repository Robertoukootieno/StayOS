import { UseCase, Result, Logger, Tracer } from '@stayos/shared';
import { IVenueRepository } from '../../domain/repositories/IVenueRepository';
import { UpdateVenueDTO, VenueDTO } from '../dtos/VenueDTO';
import { VenueMapper } from '../mappers/VenueMapper';
import { VenueType, VenueClassification, OperationalStatus } from '../../domain/entities/Venue';

export interface UpdateVenueRequest {
  venueId: string;
  tenantId: string;
  data: UpdateVenueDTO;
}

export class UpdateVenue implements UseCase<UpdateVenueRequest, Result<VenueDTO>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(private venueRepository: IVenueRepository) {
    this.logger = new Logger('UpdateVenue');
    this.tracer = new Tracer('restaurant-service');
  }

  async execute(request: UpdateVenueRequest): Promise<Result<VenueDTO>> {
    return this.tracer.executeInSpan('UpdateVenue.execute', async (span) => {
      try {
        const { venueId, tenantId, data } = request;

        // Validate required fields
        if (!venueId || venueId.trim().length === 0) {
          return Result.fail('Venue ID is required');
        }

        if (!tenantId || tenantId.trim().length === 0) {
          return Result.fail('Tenant ID is required');
        }

        // Validate optional fields
        if (data.name !== undefined && data.name.trim().length === 0) {
          return Result.fail('Venue name cannot be empty');
        }

        if (data.venueType !== undefined && !Object.values(VenueType).includes(data.venueType as VenueType)) {
          return Result.fail('Invalid venue type');
        }

        if (data.venueClassification !== undefined && !Object.values(VenueClassification).includes(data.venueClassification as VenueClassification)) {
          return Result.fail('Invalid venue classification');
        }

        if (data.operationalStatus !== undefined && !Object.values(OperationalStatus).includes(data.operationalStatus as OperationalStatus)) {
          return Result.fail('Invalid operational status');
        }

        if (data.capacity !== undefined && data.capacity <= 0) {
          return Result.fail('Capacity must be greater than 0');
        }

        // Find existing venue
        const venue = await this.venueRepository.findById(venueId, tenantId);

        if (!venue) {
          this.logger.warn('Venue not found', { venueId, tenantId });
          return Result.fail('Venue not found');
        }

        // Update venue
        const updates: any = {};
        if (data.name !== undefined) updates.name = data.name.trim();
        if (data.description !== undefined) updates.description = data.description?.trim();
        if (data.venueType !== undefined) updates.venueType = data.venueType;
        if (data.venueClassification !== undefined) updates.venueClassification = data.venueClassification;
        if (data.operationalStatus !== undefined) updates.operationalStatus = data.operationalStatus;
        if (data.acceptsReservations !== undefined) updates.acceptsReservations = data.acceptsReservations;
        if (data.capacity !== undefined) updates.capacity = data.capacity;
        if (data.cuisineType !== undefined) updates.cuisineType = data.cuisineType;
        if (data.dressCode !== undefined) updates.dressCode = data.dressCode;
        if (data.priceRange !== undefined) updates.priceRange = data.priceRange;
        if (data.phoneNumber !== undefined) updates.phoneNumber = data.phoneNumber;
        if (data.email !== undefined) updates.email = data.email;
        if (data.website !== undefined) updates.website = data.website;
        if (data.location !== undefined) updates.location = data.location;
        if (data.operatingHours !== undefined) updates.operatingHours = data.operatingHours;
        if (data.amenities !== undefined) updates.amenities = data.amenities;

        venue.updateDetails(updates);

        // Save to repository
        await this.venueRepository.update(venue);

        this.logger.info('Venue updated successfully', {
          venueId,
          tenantId,
        });

        // Convert to DTO
        const venueDTO = VenueMapper.toDTO(venue);

        return Result.ok(venueDTO);
      } catch (error) {
        this.logger.error('Failed to update venue', {
          error: error instanceof Error ? error.message : 'Unknown error',
          request,
        });
        return Result.fail('Failed to update venue');
      }
    });
  }
}

