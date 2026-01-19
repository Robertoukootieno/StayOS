import { UseCase, Result, Logger, Tracer } from '@stayos/shared';
import { IPropertyRepository } from '../../domain/repositories/IPropertyRepository';

export interface DeletePropertyRequest {
  id: string;
}

export class DeleteProperty implements UseCase<DeletePropertyRequest, Result<void>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(private propertyRepository: IPropertyRepository) {
    this.logger = new Logger('DeleteProperty');
    this.tracer = new Tracer('property-service');
  }

  async execute(request: DeletePropertyRequest): Promise<Result<void>> {
    return this.tracer.executeInSpan('DeleteProperty.execute', async () => {
      try {
        const { id } = request;

        if (!id || !id.trim()) {
          return Result.fail('Property ID is required');
        }

        // Check if property exists
        const exists = await this.propertyRepository.exists(id);

        if (!exists) {
          return Result.fail(`Property with ID ${id} not found`);
        }

        // Soft delete property
        await this.propertyRepository.delete(id);

        this.logger.info('Property deleted successfully', {
          propertyId: id,
        });

        return Result.ok(undefined);
      } catch (error) {
        this.logger.error('Failed to delete property', {
          error: error instanceof Error ? error.message : 'Unknown error',
        });
        return Result.fail('Failed to delete property');
      }
    });
  }
}

