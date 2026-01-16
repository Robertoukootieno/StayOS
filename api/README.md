# StayOS API Specification

This directory contains the OpenAPI 3.1.0 specification for the StayOS Hotel Management System API.

## 📁 Directory Structure

```
api/
├── openapi.yaml              # Main OpenAPI specification (modular)
├── openapi-bundled.yaml      # Bundled single-file specification
├── openapi-local-test.yaml   # Local testing configuration
├── index.html                # Swagger UI documentation viewer
├── serve.js                  # Development server for API docs
├── config.js                 # API configuration
├── swagger-config.js         # Swagger UI configuration
├── schemas/                  # JSON Schema definitions
│   ├── Property.yaml
│   ├── Reservation.yaml
│   ├── Guest.yaml
│   └── ...
├── parameters/               # Reusable parameter definitions
│   ├── PathParameters.yaml
│   ├── QueryParameters.yaml
│   └── ...
├── responses/                # Reusable response definitions
│   ├── ErrorResponses.yaml
│   ├── SuccessResponses.yaml
│   └── ...
├── headers/                  # Reusable header definitions
│   └── CommonHeaders.yaml
└── examples/                 # Example requests and responses
    ├── properties/
    ├── reservations/
    └── ...
```

## 🚀 Quick Start

### View API Documentation

```bash
# Start the documentation server
npm run api:docs

# Open in browser
open http://localhost:3000
```

### Validate OpenAPI Spec

```bash
# Validate the specification
npm run api:validate

# Lint the specification
npm run api:lint
```

### Bundle the Specification

```bash
# Create a single-file bundled version
npm run api:bundle
```

## 📖 API Overview

- **Version:** 1.0.0
- **Base URL:** `http://localhost:8080/v1`
- **Authentication:** OAuth 2.0 (Password Grant, Client Credentials)
- **Format:** JSON
- **Total Endpoints:** 202+
- **Modules:** 15

## 🔐 Authentication

The API uses OAuth 2.0 for authentication. See the [Authentication Guide](../docs/guides/AUTH_TESTING_GUIDE.md) for details.

### Quick Example

```bash
# Get access token
curl -X POST http://localhost:8080/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "password",
    "username": "admin@stayos.com",
    "password": "admin123"
  }'

# Use token in requests
curl http://localhost:8080/v1/properties \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## 📚 API Modules

| Module | Endpoints | Description |
|--------|-----------|-------------|
| Properties | 15+ | Property management |
| Reservations | 20+ | Booking and reservations |
| Guests | 12+ | Guest profiles |
| Billing | 18+ | Invoicing and payments |
| Housekeeping | 10+ | Room cleaning operations |
| Maintenance | 8+ | Facility maintenance |
| Channel Management | 15+ | Distribution channels |
| Rate Management | 12+ | Pricing and rates |
| Inventory | 10+ | Room inventory |
| Reports | 25+ | Analytics and reporting |
| Users | 8+ | User management |
| Settings | 6+ | System configuration |
| Integrations | 15+ | Third-party integrations |
| Compliance | 8+ | Regulatory compliance |
| F&B (POS) | 20+ | Food & Beverage operations |

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Available Scripts

```bash
npm run api:docs      # Start documentation server
npm run api:validate  # Validate OpenAPI spec
npm run api:lint      # Lint OpenAPI spec
npm run api:bundle    # Bundle into single file
npm run api:generate  # Generate SDKs
```

## 📦 SDK Generation

Generate client SDKs from the OpenAPI specification:

```bash
# Generate all SDKs
npm run generate:sdks

# Generate specific SDK
npm run generate:sdk:typescript
npm run generate:sdk:python
npm run generate:sdk:java
```

See [SDK Documentation](../sdks/README.md) for more details.

## 🧪 Testing

```bash
# Test API endpoints
npm run test:api

# Test authentication
npm run test:auth
```

## 📝 Specification Guidelines

When modifying the OpenAPI specification:

1. **Use modular structure** - Keep schemas, parameters, and responses in separate files
2. **Follow naming conventions** - Use PascalCase for schemas, camelCase for properties
3. **Add examples** - Include request/response examples for all endpoints
4. **Document errors** - Define all possible error responses
5. **Version carefully** - Use semantic versioning for API changes
6. **Validate before commit** - Always run `npm run api:validate`

## 🔗 Related Documentation

- [API Quick Start Guide](../docs/guides/API_QUICK_START.md)
- [Authentication Guide](../docs/guides/AUTH_TESTING_GUIDE.md)
- [Database Setup](../docs/guides/database/QUICK_SETUP.md)
- [Architecture Documentation](../docs/architecture/ADR.md)

## 📄 License

See [LICENSE](../LICENSE) file for details.

