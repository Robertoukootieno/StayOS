# Architecture Comparison: API vs Backend vs Services

## 📋 Overview

The StayOS project has **three main directories** that serve different purposes in the architecture:

1. **`/api`** - OpenAPI Specification (API Contract)
2. **`/backend`** - Legacy Monolithic Backend (Being Phased Out)
3. **`/services`** - New Microservices Architecture (Current Development)

---

## 📄 `/api` Directory - OpenAPI Specifications

### Purpose
**API Contract Definition** - The single source of truth for all API endpoints, schemas, and behaviors.

### Contents
```
/api
├── openapi.yaml              # Main OpenAPI 3.1.0 specification
├── schemas/                  # Data models (Property, Venue, Reservation, etc.)
├── paths/                    # Endpoint definitions (venues.yaml, properties.yaml, etc.)
├── parameters/               # Reusable parameters
├── responses/                # Reusable responses
├── examples/                 # Request/response examples
└── openapi-bundled.yaml      # Bundled single-file spec
```

### Key Characteristics
- ✅ **Language-agnostic** - Just YAML/JSON specifications
- ✅ **Contract-first** - Defines what the API should do
- ✅ **Documentation** - Auto-generates Swagger UI
- ✅ **SDK Generation** - Used to generate 7 client SDKs (TypeScript, Python, Java, Go, PHP, Ruby, C#)
- ✅ **Validation** - Can validate requests/responses against spec

### Role in Architecture
- **NOT executable code** - Just specifications
- **Consumed by**: Backend, Services, SDK generators, API documentation
- **Defines**: 202 REST endpoints across all domains

### Example
<augment_code_snippet path="api/paths/venues.yaml" mode="EXCERPT">
````yaml
/venues:
  get:
    summary: List venues
    operationId: listVenues
    responses:
      '200':
        description: Success
````
</augment_code_snippet>

---

## 🏢 `/backend` Directory - Legacy Monolithic Backend

### Purpose
**Original monolithic implementation** - Single Express.js application handling all functionality.

### Contents
```
/backend
├── src/
│   ├── app.ts                # Express application
│   ├── routes/               # Route handlers
│   │   ├── properties.ts     # Property endpoints
│   │   ├── venues.ts         # Venue endpoints
│   │   ├── reservations.ts   # Reservation endpoints
│   │   └── auth.ts           # Authentication
│   ├── middleware/           # Middleware (auth, tenant, etc.)
│   └── utils/                # Utilities
├── database/                 # Database schemas and migrations
└── tests/                    # Tests
```

### Key Characteristics
- ⚠️ **Monolithic** - All functionality in one application
- ⚠️ **Direct database access** - Raw SQL queries in route handlers
- ⚠️ **No clean architecture** - Business logic mixed with HTTP layer
- ⚠️ **Single deployment** - All or nothing
- ⚠️ **Tight coupling** - Hard to scale individual features
- ✅ **Currently working** - Functional but not scalable

### Architecture Pattern
```
Request → Express Route → SQL Query → Database → Response
```

### Example
<augment_code_snippet path="backend/src/routes/properties.ts" mode="EXCERPT">
````typescript
router.get('/', authenticate, authorize('read:properties'), async (req, res) => {
  const query = `SELECT * FROM properties WHERE deleted_at IS NULL`;
  const properties = await AppDataSource.query(query);
  res.json({ data: properties });
});
````
</augment_code_snippet>

### Status
- 🔴 **Being phased out** - Migrating to microservices
- 🟡 **Still functional** - Can be used for testing
- 🟢 **Reference implementation** - Shows what needs to be migrated

---

## 🔷 `/services` Directory - New Microservices Architecture

### Purpose
**Modern microservices implementation** - Independent services following clean architecture principles.

### Contents
```
/services
├── api-gateway/              # API Gateway (Port 3000)
├── auth-service/             # Authentication (Port 3001)
├── property-service/         # Property Management (Port 3002)
├── reservation-service/      # Reservations (Port 3003)
├── restaurant-service/       # Restaurants/Venues (Port 3004)
├── guest-service/            # Guest Management (Port 3005)
├── payment-service/          # Payments (Port 3006)
├── notification-service/     # Notifications (Port 3007)
├── analytics-service/        # Analytics (Port 3008)
├── storage-service/          # File Storage (Port 3009)
└── shared/                   # Shared library (@stayos/shared)
```

### Service Structure (Clean Architecture)
```
/services/restaurant-service
├── src/
│   ├── domain/               # Business logic (entities, repositories)
│   │   ├── entities/         # Domain entities (Venue)
│   │   └── repositories/     # Repository interfaces
│   ├── application/          # Use cases
│   │   ├── use-cases/        # Business operations (CreateVenue, etc.)
│   │   └── dtos/             # Data transfer objects
│   └── infrastructure/       # External concerns
│       ├── database/         # PostgreSQL implementation
│       ├── http/             # Controllers, routes, middleware
│       └── services/         # External services
├── tests/
│   ├── unit/                 # Unit tests
│   ├── integration/          # Integration tests
│   └── e2e/                  # End-to-end tests
└── migrations/               # Database migrations
```

### Key Characteristics
- ✅ **Clean Architecture** - Separation of concerns (Domain → Application → Infrastructure)
- ✅ **Domain-Driven Design** - Entities, Value Objects, Aggregates, Domain Events
- ✅ **Independent deployment** - Each service can be deployed separately
- ✅ **Technology flexibility** - Each service can use different tech stack
- ✅ **Scalability** - Scale services independently based on load
- ✅ **Testability** - Unit, integration, and E2E tests
- ✅ **PostgreSQL** - Production-ready database
- ✅ **Observability** - OpenTelemetry, Prometheus, Grafana, Jaeger

### Architecture Pattern
```
Request → API Gateway → Service → Use Case → Repository → Database
                                     ↓
                                  Domain
                                  Entity
```

### Example (Restaurant Service)
<augment_code_snippet path="services/restaurant-service/src/application/use-cases/CreateVenue.ts" mode="EXCERPT">
````typescript
export class CreateVenue implements UseCase<CreateVenueDTO, Result<VenueDTO>> {
  async execute(request: CreateVenueDTO): Promise<Result<VenueDTO>> {
    // Business logic in use case
    const venue = Venue.create(venueId, props);
    await this.repository.save(venue);
    return Result.ok(VenueMapper.toDTO(venue));
  }
}
````
</augment_code_snippet>

### Status
- 🟢 **Active development** - Current focus
- 🟢 **Production-ready** - Restaurant Service and Auth Service complete
- 🟡 **In progress** - Property Service (30% complete)
- 🔴 **Not started** - Reservation, Guest, Payment, Notification, Analytics, Storage services

---

## 🔄 Migration Strategy

### Current State
```
Clients → /backend (Monolith) → PostgreSQL
```

### Target State
```
Clients → /services/api-gateway → Individual Services → PostgreSQL
```

### Migration Progress

| Service | Status | Completion |
|---------|--------|------------|
| **Restaurant Service** | ✅ Complete | 100% |
| **Auth Service** | ✅ Complete | 100% |
| **Property Service** | 🟡 In Progress | 30% |
| **API Gateway** | 🔴 Not Started | 0% |
| **Reservation Service** | 🔴 Not Started | 0% |
| **Guest Service** | 🔴 Not Started | 0% |
| **Payment Service** | 🔴 Not Started | 0% |
| **Notification Service** | 🔴 Not Started | 0% |
| **Analytics Service** | 🔴 Not Started | 0% |
| **Storage Service** | 🔴 Not Started | 0% |

---

## 📊 Comparison Table

| Aspect | `/api` | `/backend` | `/services` |
|--------|--------|------------|-------------|
| **Type** | Specification | Monolith | Microservices |
| **Language** | YAML/JSON | TypeScript | TypeScript |
| **Executable** | ❌ No | ✅ Yes | ✅ Yes |
| **Architecture** | N/A | Layered | Clean Architecture |
| **Database** | N/A | Direct SQL | Repository Pattern |
| **Testing** | Spec validation | Basic tests | Unit + Integration + E2E |
| **Scalability** | N/A | ❌ Poor | ✅ Excellent |
| **Deployment** | N/A | Single | Independent |
| **Status** | ✅ Active | ⚠️ Legacy | ✅ Active |

---

## 🎯 Current Development Focus

### What We're Building
We are **migrating from `/backend` to `/services`** while using `/api` as the contract.

### Workflow
1. **Reference `/api`** - Check OpenAPI spec for endpoint definitions
2. **Check `/backend`** - See existing implementation for business logic
3. **Build in `/services`** - Implement with clean architecture
4. **Test** - Unit, integration, and E2E tests
5. **Deploy** - Independent service deployment

### Example: Venue Management
- **`/api/paths/venues.yaml`** - Defines GET/POST/PUT/DELETE /venues endpoints
- **`/backend/src/routes/venues.ts`** - Old implementation (direct SQL)
- **`/services/restaurant-service`** - New implementation (clean architecture)

---

## 🚀 Next Steps

1. ✅ **Complete Property Service** - Finish migration
2. ✅ **Set up API Gateway** - Route requests to services
3. ⏳ **Migrate remaining services** - Reservation, Guest, Payment, etc.
4. ⏳ **Deprecate `/backend`** - Once all services are migrated
5. ⏳ **Production deployment** - Deploy to Kubernetes

---

## 💡 Key Takeaways

1. **`/api`** = Contract (what the API should do)
2. **`/backend`** = Old implementation (being replaced)
3. **`/services`** = New implementation (clean architecture, microservices)

**We are NOT consuming the API from `/api` directory** - we are using it as a **specification** to guide our implementation in `/services`.

The `/backend` directory is the **legacy monolith** that we're **migrating away from** to the new **microservices in `/services`**.

