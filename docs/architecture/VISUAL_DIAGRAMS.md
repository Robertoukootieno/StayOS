# StayOS Visual Architecture Diagrams

This document contains visual diagrams explaining the StayOS project structure and architecture.

**Last Updated**: 2026-01-16

---

## 📊 Available Diagrams

### 1. Complete Project Structure
Shows the full directory hierarchy with all major components.

**Key Components**:
- `api/` - OpenAPI specifications and documentation
- `backend/` - Application code and database files
- `docs/` - Documentation organized by purpose
- `sdks/` - Generated client libraries
- `scripts/` - Automation scripts

### 2. Data Flow & Architecture
Illustrates how data flows through the system from client to database.

**Layers**:
1. **Client Applications** - Web, mobile, third-party integrations
2. **API Contract Layer** - OpenAPI specs and generated SDKs
3. **Backend Application** - Express server with middleware and routes
4. **Data Layer** - TypeORM and PostgreSQL database
5. **Infrastructure** - Database schemas, seeds, and scripts

### 3. Before vs After Reorganization
Compares the old scattered structure with the new clean architecture.

**Before Issues**:
- ❌ Planning docs cluttered root directory
- ❌ API specs buried in docs folder
- ❌ Database files separated from backend
- ❌ Guides mixed with other documentation

**After Benefits**:
- ✅ API contract at root level
- ✅ Database co-located with backend code
- ✅ Planning docs organized in docs/planning/
- ✅ Guides categorized in docs/guides/

### 4. Clean Architecture Layers
Shows how the project follows clean architecture principles.

**Layers** (from outside to inside):
1. **External Layer** - Clients and SDKs
2. **Interface Layer** - API contract (OpenAPI)
3. **Application Layer** - Routes, middleware, services
4. **Domain Layer** - Business logic and models
5. **Infrastructure Layer** - Database and configuration
6. **Support Layer** - Documentation, scripts, tests

---

## 🎯 Architecture Principles

### Separation of Concerns
Each directory has a single, well-defined responsibility:
- `api/` - API contract definition
- `backend/src/` - Application logic
- `backend/database/` - Data persistence
- `docs/` - Human-readable documentation

### Dependency Rule
Dependencies point inward:
```
Clients → API Spec → Backend → Domain → Database
```

### Independent of Frameworks
- Business logic is not tied to Express or TypeORM
- API contract is framework-agnostic
- Database schemas are independent of ORM

---

## 📁 Directory Mapping

### API Contract (`api/`)
```
api/
├── openapi.yaml          # Source of truth for API
├── schemas/              # Data models
├── parameters/           # Reusable parameters
├── responses/            # Reusable responses
└── examples/             # Request/response examples
```

**Purpose**: Define the contract between frontend and backend

### Backend Application (`backend/`)
```
backend/
├── src/
│   ├── routes/          # API endpoints
│   ├── middleware/      # Auth, validation
│   ├── config/          # Configuration
│   └── services/        # Business logic
└── database/
    ├── schemas/         # SQL schema files
    ├── seeds/           # Sample data
    └── migrations/      # Version control
```

**Purpose**: Implement the API contract

### Documentation (`docs/`)
```
docs/
├── guides/              # User guides
│   ├── API_QUICK_START.md
│   ├── AUTH_TESTING_GUIDE.md
│   └── database/
├── architecture/        # Architecture docs
│   ├── ADR.md
│   └── VISUAL_DIAGRAMS.md
└── planning/            # Planning docs
    ├── PROJECT_OVERVIEW.md
    └── NEXT_STEPS_ROADMAP.md
```

**Purpose**: Document the system for developers

---

## 🔄 Data Flow Example

### GET /v1/properties Request Flow

1. **Client** sends HTTP request
2. **API Spec** validates request format
3. **Express Router** receives request
4. **Auth Middleware** validates JWT token
5. **Authorization Middleware** checks scopes
6. **Route Handler** processes request
7. **TypeORM** queries database
8. **PostgreSQL** returns data
9. **Route Handler** formats response
10. **Client** receives JSON response

---

## 🏗️ Clean Architecture Benefits

### 1. Testability
- Each layer can be tested independently
- Mock dependencies easily
- Unit tests for business logic

### 2. Maintainability
- Clear separation of concerns
- Easy to find and modify code
- Reduced coupling

### 3. Scalability
- Easy to add new features
- Support for microservices
- Independent deployment

### 4. Flexibility
- Swap frameworks without changing business logic
- Change database without affecting API
- Multiple frontend implementations

---

## 📚 Related Documentation

- [Project Structure](../PROJECT_STRUCTURE.md)
- [Architecture Decision Records](ADR.md)
- [Core Domain Model](CORE_DOMAIN_MODEL.md)
- [Reorganization Summary](../REORGANIZATION_SUMMARY.md)

---

## 🎨 Diagram Tools

These diagrams were created using Mermaid.js and can be viewed in:
- GitHub (native Mermaid support)
- VS Code (with Mermaid extension)
- Mermaid Live Editor (https://mermaid.live)

To regenerate diagrams, see the Mermaid definitions in this repository.

