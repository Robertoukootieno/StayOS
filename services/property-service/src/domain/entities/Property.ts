import { AggregateRoot } from '@stayos/shared';
import {
  PropertyCreatedEvent,
  PropertyUpdatedEvent,
  PropertyActivatedEvent,
  PropertyDeactivatedEvent,
  PropertyCapacityUpdatedEvent,
} from '../events/PropertyEvents';

export enum PropertyType {
  HOTEL = 'hotel',
  RESORT = 'resort',
  BOUTIQUE = 'boutique',
  LODGE = 'lodge',
  APARTMENT = 'apartment',
  VILLA = 'villa',
  HOSTEL = 'hostel',
}

export enum PropertyStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  UNDER_CONSTRUCTION = 'under_construction',
  TEMPORARILY_CLOSED = 'temporarily_closed',
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  country: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website?: string;
}

export interface PropertyProps {
  propertyCode: string;
  name: string;
  propertyType: PropertyType;
  address: Address;
  timezone: string;
  contactInfo: ContactInfo;
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
  status: PropertyStatus;
}

export class Property extends AggregateRoot<string> {
  private props: PropertyProps;

  private constructor(id: string, props: PropertyProps, createdAt?: Date, updatedAt?: Date) {
    super(id, createdAt, updatedAt);
    this.props = props;
  }

  public static create(id: string, props: PropertyProps): Property {
    const property = new Property(id, props);

    property.addDomainEvent(
      new PropertyCreatedEvent(id, new Date(), {
        propertyCode: props.propertyCode,
        name: props.name,
        propertyType: props.propertyType,
      })
    );

    return property;
  }

  public static reconstitute(
    id: string,
    props: PropertyProps,
    createdAt: Date,
    updatedAt: Date
  ): Property {
    return new Property(id, props, createdAt, updatedAt);
  }

  // Getters
  public get propertyCode(): string {
    return this.props.propertyCode;
  }

  public get name(): string {
    return this.props.name;
  }

  public get propertyType(): PropertyType {
    return this.props.propertyType;
  }

  public get address(): Address {
    return { ...this.props.address };
  }

  public get timezone(): string {
    return this.props.timezone;
  }

  public get contactInfo(): ContactInfo {
    return { ...this.props.contactInfo };
  }

  public get legalEntityName(): string | undefined {
    return this.props.legalEntityName;
  }

  public get taxId(): string | undefined {
    return this.props.taxId;
  }

  public get licenseNumber(): string | undefined {
    return this.props.licenseNumber;
  }

  public get defaultCurrency(): string {
    return this.props.defaultCurrency;
  }

  public get defaultLanguage(): string {
    return this.props.defaultLanguage;
  }

  public get checkInTime(): string {
    return this.props.checkInTime;
  }

  public get checkOutTime(): string {
    return this.props.checkOutTime;
  }

  public get totalUnits(): number {
    return this.props.totalUnits;
  }

  public get totalCapacity(): number {
    return this.props.totalCapacity;
  }

  public get settings(): Record<string, any> {
    return { ...this.props.settings };
  }

  public get status(): PropertyStatus {
    return this.props.status;
  }

  // Business methods
  public updateDetails(updates: Partial<PropertyProps>): void {
    if (updates.name) {
      this.props.name = updates.name;
    }
    if (updates.address) {
      this.props.address = updates.address;
    }
    if (updates.contactInfo) {
      this.props.contactInfo = updates.contactInfo;
    }
    if (updates.checkInTime) {
      this.props.checkInTime = updates.checkInTime;
    }
    if (updates.checkOutTime) {
      this.props.checkOutTime = updates.checkOutTime;
    }
    if (updates.settings) {
      this.props.settings = { ...this.props.settings, ...updates.settings };
    }

    this.touch();

    this.addDomainEvent(new PropertyUpdatedEvent(this.id, new Date(), updates));
  }

  public activate(): void {
    if (this.props.status === PropertyStatus.ACTIVE) {
      throw new Error('Property is already active');
    }

    this.props.status = PropertyStatus.ACTIVE;
    this.touch();

    this.addDomainEvent(
      new PropertyActivatedEvent(this.id, new Date(), { status: PropertyStatus.ACTIVE })
    );
  }

  public deactivate(): void {
    if (this.props.status === PropertyStatus.INACTIVE) {
      throw new Error('Property is already inactive');
    }

    this.props.status = PropertyStatus.INACTIVE;
    this.touch();

    this.addDomainEvent(
      new PropertyDeactivatedEvent(this.id, new Date(), { status: PropertyStatus.INACTIVE })
    );
  }

  public updateCapacity(totalUnits: number, totalCapacity: number): void {
    if (totalUnits < 0 || totalCapacity < 0) {
      throw new Error('Capacity values must be non-negative');
    }

    this.props.totalUnits = totalUnits;
    this.props.totalCapacity = totalCapacity;
    this.touch();

    this.addDomainEvent(
      new PropertyCapacityUpdatedEvent(this.id, new Date(), { totalUnits, totalCapacity })
    );
  }

  public toObject(): PropertyProps {
    return { ...this.props };
  }
}

