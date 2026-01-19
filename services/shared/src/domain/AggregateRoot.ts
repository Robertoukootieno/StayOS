import { Entity } from './Entity';
import { DomainEvent } from './DomainEvent';

/**
 * Base AggregateRoot class following DDD principles
 * Aggregates are clusters of domain objects that can be treated as a single unit
 */
export abstract class AggregateRoot<T> extends Entity<T> {
  private _domainEvents: DomainEvent[] = [];

  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent);
  }

  public clearEvents(): void {
    this._domainEvents = [];
  }
}

