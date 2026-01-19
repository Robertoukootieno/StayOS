import { Property } from '../entities/Property';

export interface PropertyFilters {
  propertyType?: string;
  status?: string;
  city?: string;
  country?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface IPropertyRepository {
  findById(id: string): Promise<Property | null>;
  findByCode(propertyCode: string): Promise<Property | null>;
  findAll(filters: PropertyFilters, pagination: PaginationParams): Promise<PaginatedResponse<Property>>;
  save(property: Property): Promise<void>;
  update(property: Property): Promise<void>;
  delete(id: string): Promise<void>;
  exists(id: string): Promise<boolean>;
  existsByCode(propertyCode: string): Promise<boolean>;
}

