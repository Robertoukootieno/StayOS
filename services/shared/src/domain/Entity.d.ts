export declare abstract class Entity<T> {
    protected readonly _id: T;
    protected readonly _createdAt: Date;
    protected _updatedAt: Date;
    constructor(id: T, createdAt?: Date, updatedAt?: Date);
    get id(): T;
    get createdAt(): Date;
    get updatedAt(): Date;
    protected touch(): void;
    equals(entity?: Entity<T>): boolean;
}
//# sourceMappingURL=Entity.d.ts.map