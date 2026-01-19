export interface VenueDTO {
  id: string;
  propertyId: string;
  name: string;
  description?: string;
  venueType: string;
  venueClassification: string;
  operationalStatus: string;
  acceptsReservations: boolean;
  capacity: number;
  cuisineType?: string;
  dressCode?: string;
  priceRange?: string;
  phoneNumber?: string;
  email?: string;
  website?: string;
  location?: {
    floor?: string;
    building?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
  };
  operatingHours?: Record<string, { open: string; close: string }>;
  amenities?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateVenueDTO {
  propertyId: string;
  name: string;
  description?: string;
  venueType: string;
  venueClassification: string;
  operationalStatus?: string;
  acceptsReservations?: boolean;
  capacity: number;
  cuisineType?: string;
  dressCode?: string;
  priceRange?: string;
  phoneNumber?: string;
  email?: string;
  website?: string;
  location?: {
    floor?: string;
    building?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
  };
  operatingHours?: Record<string, { open: string; close: string }>;
  amenities?: string[];
}

export interface UpdateVenueDTO {
  name?: string;
  description?: string;
  venueType?: string;
  venueClassification?: string;
  operationalStatus?: string;
  acceptsReservations?: boolean;
  capacity?: number;
  cuisineType?: string;
  dressCode?: string;
  priceRange?: string;
  phoneNumber?: string;
  email?: string;
  website?: string;
  location?: {
    floor?: string;
    building?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
  };
  operatingHours?: Record<string, { open: string; close: string }>;
  amenities?: string[];
}

