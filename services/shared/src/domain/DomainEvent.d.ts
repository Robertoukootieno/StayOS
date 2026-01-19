export interface DomainEvent {
    occurredAt: Date;
    getAggregateId(): string;
}
export declare abstract class BaseDomainEvent implements DomainEvent {
    readonly occurredAt: Date;
    constructor();
    abstract getAggregateId(): string;
}
//# sourceMappingURL=DomainEvent.d.ts.map