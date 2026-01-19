# API Gateway Service

The API Gateway is the single entry point for all client requests in the StayOS microservices architecture. It handles routing, authentication, rate limiting, and request aggregation.

## Responsibilities

- **Request Routing**: Routes requests to appropriate microservices
- **Authentication & Authorization**: Validates JWT tokens and enforces access control
- **Rate Limiting**: Protects backend services from abuse
- **Request/Response Transformation**: Adapts external API to internal service contracts
- **API Composition**: Aggregates data from multiple services
- **Circuit Breaking**: Handles service failures gracefully
- **Caching**: Caches frequently accessed data
- **Logging & Monitoring**: Centralized logging and distributed tracing

## Architecture

This service follows **Clean Architecture** principles with clear separation of concerns:

```
src/
├── domain/              # Business logic and entities
│   ├── entities/        # Domain entities
│   ├── value-objects/   # Value objects
│   ├── repositories/    # Repository interfaces
│   └── events/          # Domain events
├── application/         # Application business rules
│   ├── use-cases/       # Use case implementations
│   ├── dtos/            # Data Transfer Objects
│   └── mappers/         # Entity-DTO mappers
└── infrastructure/      # External concerns
    ├── database/        # Database implementations
    ├── http/            # HTTP controllers and routes
    ├── messaging/       # Message queue implementations
    └── config/          # Configuration
```

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm >= 9.0.0
- PostgreSQL 16
- Redis 7

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your configuration
```

### Development

```bash
# Run in development mode with hot reload
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Linting & Formatting

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## API Endpoints

### Health Checks

- `GET /health` - General health check
- `GET /health/ready` - Readiness probe (Kubernetes)
- `GET /health/live` - Liveness probe (Kubernetes)

### API Routes

All API routes are prefixed with `/api/v1`:

- Authentication routes are proxied to Auth Service
- Property routes are proxied to Property Service
- Reservation routes are proxied to Reservation Service
- Restaurant routes are proxied to Restaurant Service
- Guest routes are proxied to Guest Service
- Payment routes are proxied to Payment Service
- Notification routes are proxied to Notification Service
- Analytics routes are proxied to Analytics Service
- Storage routes are proxied to Storage Service

## Environment Variables

See `.env.example` for all available configuration options.

## Service Communication

The API Gateway communicates with backend services using:

- **HTTP/REST**: For synchronous request-response patterns
- **gRPC**: For high-performance service-to-service communication (planned)
- **Message Queue**: For asynchronous event-driven communication

## Monitoring

- **Metrics**: Exposed at `/metrics` (Prometheus format)
- **Tracing**: OpenTelemetry traces sent to Jaeger
- **Logging**: Structured JSON logs via Winston

## Deployment

See the main [Infrastructure README](../../infrastructure/README.md) for deployment instructions.

## License

MIT

