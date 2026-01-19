import { BaseDomainEvent } from '@stayos/shared';

export class VenueCreatedEvent extends BaseDomainEvent {
  constructor(
    public readonly venueId: string,
    public readonly propertyId: string,
    public readonly venueName: string
  ) {
    super();
  }

  getAggregateId(): string {
    return this.venueId;
  }
}

