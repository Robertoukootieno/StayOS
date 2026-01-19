import { UseCase, Result, Logger, Tracer } from '@stayos/shared';
import { IPropertyRepository, PropertyFilters, PaginationParams, PaginatedResponse } from '../../domain/repositories/IPropertyRepository';
import { PropertyDTO, PropertyFiltersDTO, PaginationDTO } from '../dtos/PropertyDTO';
import { PropertyMapper } from '../mappers/PropertyMapper';

export interface ListPropertiesRequest {
  filters: PropertyFiltersDTO;
  pagination: PaginationDTO;
}

export interface ListPropertiesResponse {
  data: PropertyDTO[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export class ListProperties implements UseCase<ListPropertiesRequest, Result<ListPropertiesResponse>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(private propertyRepository: IPropertyRepository) {
    this.logger = new Logger('ListProperties');
    this.tracer = new Tracer('property-service');
  }

  async execute(request: ListPropertiesRequest): Promise<Result<ListPropertiesResponse>> {
    return this.tracer.executeInSpan('ListProperties.execute', async () => {
      try {
        const filters: PropertyFilters = {
          propertyType: request.filters.propertyType,
          status: request.filters.status,
          city: request.filters.city,
          country: request.filters.country,
        };

        const pagination: PaginationParams = {
          page: request.pagination.page || 1,
          limit: Math.min(request.pagination.limit || 20, 100), // Max 100 per page
          sortBy: request.pagination.sortBy || 'createdAt',
          sortOrder: request.pagination.sortOrder || 'desc',
        };

        const result = await this.propertyRepository.findAll(filters, pagination);

        this.logger.info('Properties listed successfully', {
          total: result.pagination.total,
          page: result.pagination.page,
        });

        return Result.ok({
          data: result.data.map(PropertyMapper.toDTO),
          pagination: result.pagination,
        });
      } catch (error) {
        this.logger.error('Failed to list properties', {
          error: error instanceof Error ? error.message : 'Unknown error',
        });
        return Result.fail('Failed to list properties');
      }
    });
  }
}

