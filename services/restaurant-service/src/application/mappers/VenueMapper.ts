import { Venue, VenueProps } from '../../domain/entities/Venue';
import { VenueDTO } from '../dtos/VenueDTO';

export interface VenuePersistence {
  venue_id: string;
  property_id: string;
  name: string;
  description?: string;
  venue_type: string;
  venue_classification: string;
  operational_status: string;
  accepts_reservations: boolean;
  capacity: number;
  cuisine_type?: string;
  dress_code?: string;
  price_range?: string;
  phone_number?: string;
  email?: string;
  website?: string;
  location?: any;
  operating_hours?: any;
  amenities?: string[];
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export class VenueMapper {
  public static toDomain(raw: VenuePersistence): Venue {
    const props: VenueProps = {
      propertyId: raw.property_id,
      name: raw.name,
      description: raw.description,
      venueType: raw.venue_type as any,
      venueClassification: raw.venue_classification as any,
      operationalStatus: raw.operational_status as any,
      acceptsReservations: raw.accepts_reservations,
      capacity: raw.capacity,
      cuisineType: raw.cuisine_type,
      dressCode: raw.dress_code,
      priceRange: raw.price_range,
      phoneNumber: raw.phone_number,
      email: raw.email,
      website: raw.website,
      location: raw.location,
      operatingHours: raw.operating_hours,
      amenities: raw.amenities,
      deletedAt: raw.deleted_at,
    };

    return Venue.reconstitute(raw.venue_id, props, raw.created_at, raw.updated_at);
  }

  public static toPersistence(venue: Venue): VenuePersistence {
    const props = venue.toObject();
    return {
      venue_id: venue.id,
      property_id: props.propertyId,
      name: props.name,
      description: props.description,
      venue_type: props.venueType,
      venue_classification: props.venueClassification,
      operational_status: props.operationalStatus,
      accepts_reservations: props.acceptsReservations,
      capacity: props.capacity,
      cuisine_type: props.cuisineType,
      dress_code: props.dressCode,
      price_range: props.priceRange,
      phone_number: props.phoneNumber,
      email: props.email,
      website: props.website,
      location: props.location,
      operating_hours: props.operatingHours,
      amenities: props.amenities,
      created_at: venue.createdAt,
      updated_at: venue.updatedAt,
      deleted_at: props.deletedAt,
    };
  }

  public static toDTO(venue: Venue): VenueDTO {
    const props = venue.toObject();
    return {
      id: venue.id,
      propertyId: props.propertyId,
      name: props.name,
      description: props.description,
      venueType: props.venueType,
      venueClassification: props.venueClassification,
      operationalStatus: props.operationalStatus,
      acceptsReservations: props.acceptsReservations,
      capacity: props.capacity,
      cuisineType: props.cuisineType,
      dressCode: props.dressCode,
      priceRange: props.priceRange,
      phoneNumber: props.phoneNumber,
      email: props.email,
      website: props.website,
      location: props.location,
      operatingHours: props.operatingHours,
      amenities: props.amenities,
      createdAt: venue.createdAt.toISOString(),
      updatedAt: venue.updatedAt.toISOString(),
    };
  }
}

