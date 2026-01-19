import { UseCase, Result, Logger, Tracer } from '@stayos/shared';
import { IPropertyRepository } from '../../domain/repositories/IPropertyRepository';
import { PropertyDTO } from '../dtos/PropertyDTO';
import { PropertyMapper } from '../mappers/PropertyMapper';

export interface GetPropertyRequest {
  id: string;
}

export class GetProperty implements UseCase<GetPropertyRequest, Result<PropertyDTO>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(private propertyRepository: IPropertyRepository) {
    this.logger = new Logger('GetProperty');
    this.tracer = new Tracer('property-service');
  }

  async execute(request: GetPropertyRequest): Promise<Result<PropertyDTO>> {
    return this.tracer.executeInSpan('GetProperty.execute', async () => {
      try {
        const { id } = request;

        if (!id || !id.trim()) {
          return Result.fail('Property ID is required');
        }

        const property = await this.propertyRepository.findById(id);

        if (!property) {
          return Result.fail(`Property with ID ${id} not found`);
        }

        this.logger.info('Property retrieved successfully', {
          propertyId: property.id,
        });

        return Result.ok(PropertyMapper.toDTO(property));
      } catch (error) {
        this.logger.error('Failed to get property', {
          error: error instanceof Error ? error.message : 'Unknown error',
        });
        return Result.fail('Failed to get property');
      }
    });
  }
}

