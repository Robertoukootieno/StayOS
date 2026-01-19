import { BaseDomainEvent } from '@stayos/shared';

export class VenueUpdatedEvent extends BaseDomainEvent {
  constructor(
    public readonly venueId: string,
    public readonly propertyId: string
  ) {
    super();
  }

  getAggregateId(): string {
    return this.venueId;
  }
}

