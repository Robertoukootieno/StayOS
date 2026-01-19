export interface AddressDTO {
  line1: string;
  line2?: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  country: string;
}

export interface ContactInfoDTO {
  phone: string;
  email: string;
  website?: string;
}

export interface PropertyDTO {
  id: string;
  propertyCode: string;
  name: string;
  propertyType: string;
  address: AddressDTO;
  timezone: string;
  contactInfo: ContactInfoDTO;
  legalEntityName?: string;
  taxId?: string;
  licenseNumber?: string;
  defaultCurrency: string;
  defaultLanguage: string;
  checkInTime: string;
  checkOutTime: string;
  totalUnits: number;
  totalCapacity: number;
  settings?: Record<string, any>;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePropertyDTO {
  propertyCode: string;
  name: string;
  propertyType: string;
  address: AddressDTO;
  timezone: string;
  contactInfo: ContactInfoDTO;
  legalEntityName?: string;
  taxId?: string;
  licenseNumber?: string;
  defaultCurrency?: string;
  defaultLanguage?: string;
  checkInTime?: string;
  checkOutTime?: string;
  totalUnits: number;
  totalCapacity: number;
  settings?: Record<string, any>;
}

export interface UpdatePropertyDTO {
  name?: string;
  address?: AddressDTO;
  contactInfo?: ContactInfoDTO;
  checkInTime?: string;
  checkOutTime?: string;
  settings?: Record<string, any>;
}

export interface PropertyFiltersDTO {
  propertyType?: string;
  status?: string;
  city?: string;
  country?: string;
}

export interface PaginationDTO {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

