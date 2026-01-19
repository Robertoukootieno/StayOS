# Microservices Migration Guide

This guide explains how the StayOS monolithic backend is being migrated to a microservices architecture following clean architecture principles.

## Architecture Overview

### Clean Architecture Layers

Each microservice follows a 3-layer clean architecture:

```
┌─────────────────────────────────────────────────────────┐
│                    Presentation Layer                    │
│              (HTTP Controllers, Routes)                  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                   Application Layer                      │
│         (Use Cases, DTOs, Mappers, Services)            │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                     Domain Layer                         │
│    (Entities, Value Objects, Domain Events, Repos)      │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                  Infrastructure Layer                    │
│      (Database, Message Queue, External Services)       │
└─────────────────────────────────────────────────────────┘
```

### Directory Structure

```
services/<service-name>/
├── src/
│   ├── domain/                    # Business logic (innermost layer)
│   │   ├── entities/              # Domain entities (Aggregates)
│   │   ├── value-objects/         # Value objects
│   │   ├── repositories/          # Repository interfaces
│   │   └── events/                # Domain events
│   ├── application/               # Application business rules
│   │   ├── use-cases/             # Use case implementations
│   │   ├── dtos/                  # Data Transfer Objects
│   │   └── mappers/               # Entity-DTO mappers
│   ├── infrastructure/            # External concerns (outermost layer)
│   │   ├── database/
│   │   │   ├── repositories/      # Repository implementations
│   │   │   └── entities/          # ORM entities (if using TypeORM)
│   │   ├── http/
│   │   │   ├── controllers/       # HTTP controllers
│   │   │   ├── middlewares/       # HTTP middlewares
│   │   │   └── routes/            # Route definitions
│   │   ├── messaging/             # Message queue implementations
│   │   └── config/                # Configuration
│   ├── app.ts                     # Application setup
│   └── index.ts                   # Entry point
├── tests/
│   ├── unit/                      # Unit tests
│   ├── integration/               # Integration tests
│   └── e2e/                       # End-to-end tests
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## Migration Steps

### 1. Identify Bounded Contexts

The monolithic backend has been divided into 10 microservices based on domain boundaries:

1. **API Gateway** - Request routing, authentication, rate limiting
2. **Auth Service** - User authentication and authorization
3. **Property Service** - Property management
4. **Reservation Service** - Room reservations
5. **Restaurant Service** - Venues, tables, reservations
6. **Guest Service** - Guest profiles and preferences
7. **Payment Service** - Payment processing
8. **Notification Service** - Email, SMS, push notifications
9. **Analytics Service** - Reporting and analytics
10. **Storage Service** - File storage and management

### 2. Extract Domain Entities

For each service, identify and extract domain entities from the monolith:

**Example: Restaurant Service - Venue Entity**

```typescript
// Domain Entity (services/restaurant-service/src/domain/entities/Venue.ts)
export class Venue extends AggregateRoot<string> {
  private props: VenueProps;

  // Factory method to create new venue
  public static create(id: string, props: VenueProps): Venue {
    const venue = new Venue(id, props);
    venue.addDomainEvent(new VenueCreatedEvent(id, props.propertyId, props.name));
    return venue;
  }

  // Business methods
  public activate(): void {
    if (this.props.operationalStatus === OperationalStatus.ACTIVE) {
      throw new Error('Venue is already active');
    }
    this.props.operationalStatus = OperationalStatus.ACTIVE;
    this.touch();
  }
}
```

### 3. Define Repository Interfaces

Create repository interfaces in the domain layer:

```typescript
// Domain Repository Interface
export interface IVenueRepository {
  findById(id: string, propertyId: string): Promise<Venue | null>;
  findAll(filters: VenueFilters, pagination: PaginationParams): Promise<PaginatedResponse<Venue>>;
  save(venue: Venue): Promise<void>;
  update(venue: Venue): Promise<void>;
  delete(id: string, propertyId: string): Promise<void>;
}
```

### 4. Create Use Cases

Implement use cases in the application layer:

```typescript
// Application Use Case
export class CreateVenue implements UseCase<CreateVenueRequest, Result<VenueDTO>> {
  constructor(private venueRepository: IVenueRepository) {}

  async execute(request: CreateVenueRequest): Promise<Result<VenueDTO>> {
    // 1. Validate input
    // 2. Create domain entity
    // 3. Save to repository
    // 4. Return DTO
  }
}
```

### 5. Implement Infrastructure

Implement repository and HTTP controllers in the infrastructure layer:

```typescript
// Infrastructure Repository Implementation
export class VenueRepository implements IVenueRepository {
  constructor(private db: Pool) {}

  async save(venue: Venue): Promise<void> {
    const persistence = VenueMapper.toPersistence(venue);
    // SQL INSERT query
  }
}

// Infrastructure HTTP Controller
export class VenueController {
  constructor(private venueRepository: IVenueRepository) {
    this.createVenueUseCase = new CreateVenue(venueRepository);
  }

  createVenue = async (req: Request, res: Response): Promise<void> => {
    const result = await this.createVenueUseCase.execute({
      tenantId: req.headers['x-tenant-id'],
      data: req.body,
    });
    // Handle result
  };
}
```

### 6. Wire Dependencies

Wire everything together in `app.ts`:

```typescript
// Initialize database
const dbPool = createDatabasePool();

// Initialize repositories
const venueRepository = new VenueRepository(dbPool);

// Create routes
app.use('/api/v1/venues', createVenueRoutes(venueRepository));
```

## Best Practices

### 1. Dependency Rule

Dependencies should point inward:
- **Domain** has no dependencies
- **Application** depends only on Domain
- **Infrastructure** depends on Application and Domain

### 2. Use Domain Events

Emit domain events for important business actions:

```typescript
venue.addDomainEvent(new VenueCreatedEvent(id, propertyId, name));
```

### 3. Result Pattern

Use the Result pattern for error handling:

```typescript
const result = await useCase.execute(request);
if (result.isFailure) {
  return res.status(400).json({ error: result.error });
}
return res.status(200).json({ data: result.getValue() });
```

### 4. Mappers

Use mappers to convert between layers:

```typescript
VenueMapper.toDomain(persistence)    // Persistence → Domain
VenueMapper.toPersistence(domain)    // Domain → Persistence
VenueMapper.toDTO(domain)            // Domain → DTO
```

## Testing Strategy

### Unit Tests
Test domain entities and use cases in isolation:

```typescript
describe('Venue', () => {
  it('should create a new venue', () => {
    const venue = Venue.create(id, props);
    expect(venue.name).toBe(props.name);
  });
});
```

### Integration Tests
Test repository implementations with real database:

```typescript
describe('VenueRepository', () => {
  it('should save and retrieve a venue', async () => {
    await repository.save(venue);
    const retrieved = await repository.findById(venue.id, propertyId);
    expect(retrieved).toBeDefined();
  });
});
```

### E2E Tests
Test HTTP endpoints:

```typescript
describe('POST /api/v1/venues', () => {
  it('should create a venue', async () => {
    const response = await request(app)
      .post('/api/v1/venues')
      .set('X-Tenant-Id', tenantId)
      .send(venueData);
    expect(response.status).toBe(201);
  });
});
```

## Migration Checklist

- [ ] Identify bounded context
- [ ] Extract domain entities
- [ ] Define repository interfaces
- [ ] Create use cases
- [ ] Implement repositories
- [ ] Create HTTP controllers
- [ ] Wire dependencies
- [ ] Write unit tests
- [ ] Write integration tests
- [ ] Write E2E tests
- [ ] Update API documentation
- [ ] Deploy to development environment

## License

MIT

