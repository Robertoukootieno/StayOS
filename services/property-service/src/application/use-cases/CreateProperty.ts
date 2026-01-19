import { UseCase, Result, Logger, Tracer } from '@stayos/shared';
import { IPropertyRepository } from '../../domain/repositories/IPropertyRepository';
import { Property, PropertyType, PropertyStatus } from '../../domain/entities/Property';
import { CreatePropertyDTO, PropertyDTO } from '../dtos/PropertyDTO';
import { PropertyMapper } from '../mappers/PropertyMapper';
import { v4 as uuidv4 } from 'uuid';

export class CreateProperty implements UseCase<CreatePropertyDTO, Result<PropertyDTO>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(private propertyRepository: IPropertyRepository) {
    this.logger = new Logger('CreateProperty');
    this.tracer = new Tracer('property-service');
  }

  async execute(request: CreatePropertyDTO): Promise<Result<PropertyDTO>> {
    return this.tracer.executeInSpan('CreateProperty.execute', async () => {
      try {
        // Validate input
        if (!request.name || !request.name.trim()) {
          return Result.fail('Property name is required');
        }

        if (!request.propertyCode || !request.propertyCode.trim()) {
          return Result.fail('Property code is required');
        }

        if (!request.address || !request.address.city || !request.address.country) {
          return Result.fail('Valid address is required');
        }

        if (!request.contactInfo || !request.contactInfo.email || !request.contactInfo.phone) {
          return Result.fail('Valid contact information is required');
        }

        if (request.totalUnits < 0 || request.totalCapacity < 0) {
          return Result.fail('Total units and capacity must be non-negative');
        }

        // Check if property code already exists
        const existingProperty = await this.propertyRepository.findByCode(request.propertyCode);
        if (existingProperty) {
          return Result.fail(`Property with code ${request.propertyCode} already exists`);
        }

        // Create property entity
        const propertyId = uuidv4();
        const property = Property.create(propertyId, {
          propertyCode: request.propertyCode.trim(),
          name: request.name.trim(),
          propertyType: request.propertyType as PropertyType,
          address: request.address,
          timezone: request.timezone || 'UTC',
          contactInfo: request.contactInfo,
          legalEntityName: request.legalEntityName,
          taxId: request.taxId,
          licenseNumber: request.licenseNumber,
          defaultCurrency: request.defaultCurrency || 'USD',
          defaultLanguage: request.defaultLanguage || 'en',
          checkInTime: request.checkInTime || '15:00',
          checkOutTime: request.checkOutTime || '11:00',
          totalUnits: request.totalUnits,
          totalCapacity: request.totalCapacity,
          settings: request.settings || {},
          status: PropertyStatus.ACTIVE,
        });

        // Save property
        await this.propertyRepository.save(property);

        this.logger.info('Property created successfully', {
          propertyId: property.id,
          propertyCode: property.propertyCode,
          name: property.name,
        });

        // Return DTO
        return Result.ok(PropertyMapper.toDTO(property));
      } catch (error) {
        this.logger.error('Failed to create property', {
          error: error instanceof Error ? error.message : 'Unknown error',
        });
        return Result.fail('Failed to create property');
      }
    });
  }
}

