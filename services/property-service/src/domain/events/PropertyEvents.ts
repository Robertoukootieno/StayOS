import { DomainEvent } from '@stayos/shared';
import { PropertyType, PropertyStatus } from '../entities/Property';

export class PropertyCreatedEvent implements DomainEvent {
  constructor(
    public readonly aggregateId: string,
    public readonly occurredAt: Date,
    public readonly payload: {
      propertyCode: string;
      name: string;
      propertyType: PropertyType;
    }
  ) {}

  getAggregateId(): string {
    return this.aggregateId;
  }

  getOccurredAt(): Date {
    return this.occurredAt;
  }
}

export class PropertyUpdatedEvent implements DomainEvent {
  constructor(
    public readonly aggregateId: string,
    public readonly occurredAt: Date,
    public readonly payload: Record<string, any>
  ) {}

  getAggregateId(): string {
    return this.aggregateId;
  }

  getOccurredAt(): Date {
    return this.occurredAt;
  }
}

export class PropertyActivatedEvent implements DomainEvent {
  constructor(
    public readonly aggregateId: string,
    public readonly occurredAt: Date,
    public readonly payload: { status: PropertyStatus }
  ) {}

  getAggregateId(): string {
    return this.aggregateId;
  }

  getOccurredAt(): Date {
    return this.occurredAt;
  }
}

export class PropertyDeactivatedEvent implements DomainEvent {
  constructor(
    public readonly aggregateId: string,
    public readonly occurredAt: Date,
    public readonly payload: { status: PropertyStatus }
  ) {}

  getAggregateId(): string {
    return this.aggregateId;
  }

  getOccurredAt(): Date {
    return this.occurredAt;
  }
}

export class PropertyCapacityUpdatedEvent implements DomainEvent {
  constructor(
    public readonly aggregateId: string,
    public readonly occurredAt: Date,
    public readonly payload: { totalUnits: number; totalCapacity: number }
  ) {}

  getAggregateId(): string {
    return this.aggregateId;
  }

  getOccurredAt(): Date {
    return this.occurredAt;
  }
}

