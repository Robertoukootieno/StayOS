import { Entity } from './Entity';
import { DomainEvent } from './DomainEvent';
export declare abstract class AggregateRoot<T> extends Entity<T> {
    private _domainEvents;
    get domainEvents(): DomainEvent[];
    protected addDomainEvent(domainEvent: DomainEvent): void;
    clearEvents(): void;
}
//# sourceMappingURL=AggregateRoot.d.ts.map