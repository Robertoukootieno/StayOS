import { Venue } from '../entities/Venue';
import { PaginatedResponse, PaginationParams } from '@stayos/shared';

export interface VenueFilters {
  propertyId: string;
  venueType?: string;
  venueClassification?: string;
  operationalStatus?: string;
  acceptsReservations?: boolean;
  city?: string;
  cuisineType?: string;
}

export interface IVenueRepository {
  /**
   * Find a venue by ID
   */
  findById(id: string, propertyId: string): Promise<Venue | null>;

  /**
   * Find all venues with filters and pagination
   */
  findAll(
    filters: VenueFilters,
    pagination: PaginationParams
  ): Promise<PaginatedResponse<Venue>>;

  /**
   * Save a new venue
   */
  save(venue: Venue): Promise<void>;

  /**
   * Update an existing venue
   */
  update(venue: Venue): Promise<void>;

  /**
   * Delete a venue (soft delete)
   */
  delete(id: string, propertyId: string): Promise<void>;

  /**
   * Check if a venue exists
   */
  exists(id: string, propertyId: string): Promise<boolean>;
}

