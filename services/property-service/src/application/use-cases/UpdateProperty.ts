import { UseCase, Result, Logger, Tracer } from '@stayos/shared';
import { IPropertyRepository } from '../../domain/repositories/IPropertyRepository';
import { UpdatePropertyDTO, PropertyDTO } from '../dtos/PropertyDTO';
import { PropertyMapper } from '../mappers/PropertyMapper';

export interface UpdatePropertyRequest {
  id: string;
  updates: UpdatePropertyDTO;
}

export class UpdateProperty implements UseCase<UpdatePropertyRequest, Result<PropertyDTO>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(private propertyRepository: IPropertyRepository) {
    this.logger = new Logger('UpdateProperty');
    this.tracer = new Tracer('property-service');
  }

  async execute(request: UpdatePropertyRequest): Promise<Result<PropertyDTO>> {
    return this.tracer.executeInSpan('UpdateProperty.execute', async () => {
      try {
        const { id, updates } = request;

        if (!id || !id.trim()) {
          return Result.fail('Property ID is required');
        }

        // Find property
        const property = await this.propertyRepository.findById(id);

        if (!property) {
          return Result.fail(`Property with ID ${id} not found`);
        }

        // Update property
        property.updateDetails(updates);

        // Save changes
        await this.propertyRepository.update(property);

        this.logger.info('Property updated successfully', {
          propertyId: property.id,
        });

        return Result.ok(PropertyMapper.toDTO(property));
      } catch (error) {
        this.logger.error('Failed to update property', {
          error: error instanceof Error ? error.message : 'Unknown error',
        });
        return Result.fail('Failed to update property');
      }
    });
  }
}

