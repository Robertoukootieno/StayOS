/**
 * Shared utilities and types for StayOS microservices
 * @module @stayos/shared
 */

// Domain
export * from './domain/Entity';
export * from './domain/ValueObject';
export * from './domain/AggregateRoot';
export * from './domain/DomainEvent';
export * from './domain/Result';

// Application
export * from './application/UseCase';
export * from './application/Mapper';

// Infrastructure
export * from './infrastructure/Logger';
export * from './infrastructure/Tracer';

// Common types
export * from './types/common';
export * from './types/errors';

