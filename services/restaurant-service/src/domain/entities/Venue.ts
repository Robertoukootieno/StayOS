import { AggregateRoot } from '@stayos/shared';
import { VenueCreatedEvent } from '../events/VenueCreatedEvent';
import { VenueUpdatedEvent } from '../events/VenueUpdatedEvent';

export enum VenueType {
  RESTAURANT = 'restaurant',
  BAR = 'bar',
  LOUNGE = 'lounge',
  CAFE = 'cafe',
  ROOFTOP = 'rooftop',
}

export enum VenueClassification {
  FINE_DINING = 'fine_dining',
  CASUAL_DINING = 'casual_dining',
  FAST_CASUAL = 'fast_casual',
  QUICK_SERVICE = 'quick_service',
  BUFFET = 'buffet',
  FOOD_COURT = 'food_court',
}

export enum OperationalStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  TEMPORARILY_CLOSED = 'temporarily_closed',
  UNDER_RENOVATION = 'under_renovation',
}

export interface VenueProps {
  propertyId: string;
  name: string;
  description?: string;
  venueType: VenueType;
  venueClassification: VenueClassification;
  operationalStatus: OperationalStatus;
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
  deletedAt?: Date;
}

export class Venue extends AggregateRoot<string> {
  private props: VenueProps;

  private constructor(id: string, props: VenueProps, createdAt?: Date, updatedAt?: Date) {
    super(id, createdAt, updatedAt);
    this.props = props;
  }

  // Factory method to create a new venue
  public static create(id: string, props: VenueProps): Venue {
    const venue = new Venue(id, props);
    venue.addDomainEvent(new VenueCreatedEvent(id, props.propertyId, props.name));
    return venue;
  }

  // Factory method to reconstitute from persistence
  public static reconstitute(
    id: string,
    props: VenueProps,
    createdAt: Date,
    updatedAt: Date
  ): Venue {
    return new Venue(id, props, createdAt, updatedAt);
  }

  // Getters
  get propertyId(): string {
    return this.props.propertyId;
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string | undefined {
    return this.props.description;
  }

  get venueType(): VenueType {
    return this.props.venueType;
  }

  get venueClassification(): VenueClassification {
    return this.props.venueClassification;
  }

  get operationalStatus(): OperationalStatus {
    return this.props.operationalStatus;
  }

  get acceptsReservations(): boolean {
    return this.props.acceptsReservations;
  }

  get capacity(): number {
    return this.props.capacity;
  }

  get cuisineType(): string | undefined {
    return this.props.cuisineType;
  }

  get isDeleted(): boolean {
    return this.props.deletedAt !== undefined;
  }

  // Business methods
  public updateDetails(updates: Partial<VenueProps>): void {
    this.props = { ...this.props, ...updates };
    this.touch();
    this.addDomainEvent(new VenueUpdatedEvent(this.id, this.props.propertyId));
  }

  public activate(): void {
    if (this.props.operationalStatus === OperationalStatus.ACTIVE) {
      throw new Error('Venue is already active');
    }
    this.props.operationalStatus = OperationalStatus.ACTIVE;
    this.touch();
  }

  public deactivate(): void {
    if (this.props.operationalStatus === OperationalStatus.INACTIVE) {
      throw new Error('Venue is already inactive');
    }
    this.props.operationalStatus = OperationalStatus.INACTIVE;
    this.touch();
  }

  public softDelete(): void {
    if (this.isDeleted) {
      throw new Error('Venue is already deleted');
    }
    this.props.deletedAt = new Date();
    this.touch();
  }

  // Convert to plain object for persistence
  public toObject(): VenueProps {
    return { ...this.props };
  }
}

