import { UseCase, Result, Logger, Tracer } from '@stayos/shared';
import { IVenueRepository } from '../../domain/repositories/IVenueRepository';

export interface DeleteVenueRequest {
  venueId: string;
  tenantId: string;
}

export class DeleteVenue implements UseCase<DeleteVenueRequest, Result<void>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(private venueRepository: IVenueRepository) {
    this.logger = new Logger('DeleteVenue');
    this.tracer = new Tracer('restaurant-service');
  }

  async execute(request: DeleteVenueRequest): Promise<Result<void>> {
    return this.tracer.executeInSpan('DeleteVenue.execute', async (span) => {
      try {
        const { venueId, tenantId } = request;

        // Validate required fields
        if (!venueId || venueId.trim().length === 0) {
          return Result.fail('Venue ID is required');
        }

        if (!tenantId || tenantId.trim().length === 0) {
          return Result.fail('Tenant ID is required');
        }

        // Check if venue exists
        const exists = await this.venueRepository.exists(venueId, tenantId);

        if (!exists) {
          this.logger.warn('Venue not found', { venueId, tenantId });
          return Result.fail('Venue not found');
        }

        // Soft delete venue
        await this.venueRepository.delete(venueId, tenantId);

        this.logger.info('Venue deleted successfully', {
          venueId,
          tenantId,
        });

        return Result.ok();
      } catch (error) {
        this.logger.error('Failed to delete venue', {
          error: error instanceof Error ? error.message : 'Unknown error',
          request,
        });
        return Result.fail('Failed to delete venue');
      }
    });
  }
}

