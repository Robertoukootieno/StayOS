import { UseCase, Result, Logger, Tracer } from '@stayos/shared';
import { IVenueRepository } from '../../domain/repositories/IVenueRepository';
import { VenueDTO } from '../dtos/VenueDTO';
import { VenueMapper } from '../mappers/VenueMapper';

export interface GetVenueRequest {
  venueId: string;
  tenantId: string;
}

export class GetVenue implements UseCase<GetVenueRequest, Result<VenueDTO>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(private venueRepository: IVenueRepository) {
    this.logger = new Logger('GetVenue');
    this.tracer = new Tracer('restaurant-service');
  }

  async execute(request: GetVenueRequest): Promise<Result<VenueDTO>> {
    return this.tracer.executeInSpan('GetVenue.execute', async (span) => {
      try {
        const { venueId, tenantId } = request;

        // Validate required fields
        if (!venueId || venueId.trim().length === 0) {
          return Result.fail('Venue ID is required');
        }

        if (!tenantId || tenantId.trim().length === 0) {
          return Result.fail('Tenant ID is required');
        }

        // Find venue
        const venue = await this.venueRepository.findById(venueId, tenantId);

        if (!venue) {
          this.logger.warn('Venue not found', { venueId, tenantId });
          return Result.fail('Venue not found');
        }

        this.logger.info('Venue retrieved successfully', {
          venueId,
          tenantId,
        });

        // Convert to DTO
        const venueDTO = VenueMapper.toDTO(venue);

        return Result.ok(venueDTO);
      } catch (error) {
        this.logger.error('Failed to get venue', {
          error: error instanceof Error ? error.message : 'Unknown error',
          request,
        });
        return Result.fail('Failed to get venue');
      }
    });
  }
}

