/**
 * Base DomainEvent interface
 * Domain events represent something that happened in the domain
 */
export interface DomainEvent {
  occurredAt: Date;
  getAggregateId(): string;
}

/**
 * Base class for domain events
 */
export abstract class BaseDomainEvent implements DomainEvent {
  public readonly occurredAt: Date;

  constructor() {
    this.occurredAt = new Date();
  }

  abstract getAggregateId(): string;
}

