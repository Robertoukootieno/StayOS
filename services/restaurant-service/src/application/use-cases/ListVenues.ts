import { UseCase, Result, Logger, Tracer, PaginatedResponse, PaginationParams } from '@stayos/shared';
import { IVenueRepository, VenueFilters } from '../../domain/repositories/IVenueRepository';
import { VenueDTO } from '../dtos/VenueDTO';
import { VenueMapper } from '../mappers/VenueMapper';

export interface ListVenuesRequest {
  tenantId: string;
  filters?: Partial<VenueFilters>;
  pagination: PaginationParams;
}

export class ListVenues implements UseCase<ListVenuesRequest, Result<PaginatedResponse<VenueDTO>>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(private venueRepository: IVenueRepository) {
    this.logger = new Logger('ListVenues');
    this.tracer = new Tracer('restaurant-service');
  }

  async execute(request: ListVenuesRequest): Promise<Result<PaginatedResponse<VenueDTO>>> {
    return this.tracer.executeInSpan('ListVenues.execute', async (span) => {
      try {
        const { tenantId, filters = {}, pagination } = request;

        // Validate required fields
        if (!tenantId || tenantId.trim().length === 0) {
          return Result.fail('Tenant ID is required');
        }

        // Validate pagination
        if (!pagination.page || pagination.page < 1) {
          return Result.fail('Page must be greater than 0');
        }

        if (!pagination.limit || pagination.limit < 1 || pagination.limit > 100) {
          return Result.fail('Limit must be between 1 and 100');
        }

        // Build filters
        const venueFilters: VenueFilters = {
          propertyId: tenantId,
          ...filters,
        };

        // Get paginated venues
        const result = await this.venueRepository.findAll(venueFilters, pagination);

        this.logger.info('Venues listed successfully', {
          tenantId,
          total: result.pagination.total,
          page: result.pagination.page,
        });

        // Convert to DTOs
        const venueDTOs = result.data.map((venue) => VenueMapper.toDTO(venue));

        return Result.ok({
          data: venueDTOs,
          pagination: result.pagination,
        });
      } catch (error) {
        this.logger.error('Failed to list venues', {
          error: error instanceof Error ? error.message : 'Unknown error',
          request,
        });
        return Result.fail('Failed to list venues');
      }
    });
  }
}

