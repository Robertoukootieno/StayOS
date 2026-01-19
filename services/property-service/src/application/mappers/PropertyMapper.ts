import { Property, PropertyProps } from '../../domain/entities/Property';
import { PropertyDTO, AddressDTO, ContactInfoDTO } from '../dtos/PropertyDTO';

export class PropertyMapper {
  public static toDTO(property: Property): PropertyDTO {
    return {
      id: property.id,
      propertyCode: property.propertyCode,
      name: property.name,
      propertyType: property.propertyType,
      address: property.address,
      timezone: property.timezone,
      contactInfo: property.contactInfo,
      legalEntityName: property.legalEntityName,
      taxId: property.taxId,
      licenseNumber: property.licenseNumber,
      defaultCurrency: property.defaultCurrency,
      defaultLanguage: property.defaultLanguage,
      checkInTime: property.checkInTime,
      checkOutTime: property.checkOutTime,
      totalUnits: property.totalUnits,
      totalCapacity: property.totalCapacity,
      settings: property.settings,
      status: property.status,
      createdAt: property.createdAt.toISOString(),
      updatedAt: property.updatedAt.toISOString(),
    };
  }

  public static toDomain(dto: PropertyDTO): Property {
    const props: PropertyProps = {
      propertyCode: dto.propertyCode,
      name: dto.name,
      propertyType: dto.propertyType as any,
      address: dto.address,
      timezone: dto.timezone,
      contactInfo: dto.contactInfo,
      legalEntityName: dto.legalEntityName,
      taxId: dto.taxId,
      licenseNumber: dto.licenseNumber,
      defaultCurrency: dto.defaultCurrency,
      defaultLanguage: dto.defaultLanguage,
      checkInTime: dto.checkInTime,
      checkOutTime: dto.checkOutTime,
      totalUnits: dto.totalUnits,
      totalCapacity: dto.totalCapacity,
      settings: dto.settings,
      status: dto.status as any,
    };

    return Property.reconstitute(
      dto.id,
      props,
      new Date(dto.createdAt),
      new Date(dto.updatedAt)
    );
  }
}

