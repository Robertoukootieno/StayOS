# StayOS Project Structure

This document describes the organization of the StayOS project following clean architecture and DevOps best practices.

**Last Updated**: 2026-01-16 (After major reorganization)

## 📁 Directory Structure

```
stayOS/
├── api/                          # API Specifications (OpenAPI)
│   ├── openapi.yaml             # Main OpenAPI 3.1.0 specification
│   ├── openapi-bundled.yaml     # Bundled single-file version
│   ├── schemas/                 # JSON Schema definitions
│   ├── parameters/              # Reusable parameter definitions
│   ├── responses/               # Reusable response definitions
│   ├── headers/                 # Reusable header definitions
│   ├── examples/                # Example requests and responses
│   ├── index.html               # Swagger UI documentation viewer
│   ├── serve.js                 # Development server for API docs
│   └── README.md                # API documentation
│
├── backend/                      # Backend Application (Node.js/TypeScript)
│   ├── src/                     # Source code
│   │   ├── routes/              # API route handlers
│   │   ├── middleware/          # Express middleware (auth, validation)
│   │   ├── config/              # Configuration files
│   │   ├── models/              # Data models (TypeORM entities)
│   │   ├── services/            # Business logic layer
│   │   ├── utils/               # Utility functions
│   │   ├── app.ts               # Express app setup
│   │   └── index.ts             # Server entry point
│   ├── database/                # Database files
│   │   ├── schemas/             # SQL schema definitions
│   │   ├── seeds/               # Sample/seed data
│   │   ├── migrations/          # Database migrations (future)
│   │   └── README.md            # Database documentation
│   ├── tests/                   # Test suites
│   ├── logs/                    # Application logs
│   ├── .env                     # Environment variables (not in git)
│   ├── package.json             # Backend dependencies
│   └── README.md                # Backend documentation
│
├── docs/                         # Documentation
│   ├── guides/                  # User guides
│   │   ├── database/            # Database-specific guides
│   │   ├── API_QUICK_START.md
│   │   └── AUTH_TESTING_GUIDE.md
│   ├── architecture/            # Architecture documentation
│   │   ├── ADR.md              # Architecture Decision Records
│   │   └── CORE_DOMAIN_MODEL.md
│   ├── planning/                # Project planning documents
│   │   ├── PROJECT_OVERVIEW.md
│   │   └── NEXT_STEPS_ROADMAP.md
│   └── PROJECT_STRUCTURE.md     # This file
│
├── sdks/                         # Generated Client SDKs
│   ├── typescript/              # TypeScript/JavaScript SDK
│   ├── python/                  # Python SDK
│   └── README.md
│
├── scripts/                      # Build and deployment scripts
│   ├── setup-database.sh        # Database setup (interactive)
│   ├── test-auth.sh             # Authentication testing
│   └── generate-sdks.sh         # SDK generation
│
├── .gitignore                    # Git ignore rules
├── CHANGELOG.md                  # Version history
├── CONTRIBUTING.md               # Contribution guidelines
├── LICENSE                       # MIT License
├── README.md                     # Main project README
└── package.json                  # Root package.json (workspace)
```

## 🏗️ Architecture Principles

### 1. Clean Architecture
- **Separation of Concerns**: API specs, backend code, database, and docs are clearly separated
- **Dependency Rule**: Dependencies point inward (API → Backend → Database)
- **Independent of Frameworks**: Business logic is not tied to Express or TypeORM

### 2. DevOps Best Practices
- **Infrastructure as Code**: Database schemas in version control
- **Automated Setup**: Scripts for database and environment setup
- **Documentation as Code**: OpenAPI specs generate documentation
- **CI/CD Ready**: Structure supports automated testing and deployment

### 3. Domain-Driven Design
- **Bounded Contexts**: Each module (properties, reservations, etc.) is a bounded context
- **Ubiquitous Language**: Consistent terminology across code, API, and docs
- **Aggregates**: Database schemas reflect domain aggregates

## 📂 Key Directories Explained

### `/api` - API Specifications
Contains the source of truth for the API contract. All client SDKs and documentation are generated from these files.

**Why at root level?** API specifications are the contract between frontend and backend, making them a first-class citizen.

### `/backend` - Application Code
The Node.js/TypeScript backend implementing the API specification. Follows MVC pattern with routes, middleware, and services.

### `/backend/database` - Database Layer
All database-related files including schemas, seeds, and migrations. Keeps database logic separate from application code.

**Why inside backend?** Database is infrastructure for the backend application.

### `/docs` - Documentation
Human-readable documentation organized by purpose (guides, architecture, planning).

### `/sdks` - Client Libraries
Auto-generated client libraries for multiple programming languages.

### `/scripts` - Automation
Bash scripts for common tasks like database setup, testing, and SDK generation.

## 🔄 Data Flow

```
Client Request
    ↓
API Specification (OpenAPI)
    ↓
Backend Routes (Express)
    ↓
Middleware (Auth, Validation)
    ↓
Services (Business Logic)
    ↓
Database (PostgreSQL)
```

## 📝 File Naming Conventions

- **Configuration**: `lowercase.config.js` or `.env`
- **TypeScript**: `PascalCase.ts` for classes, `camelCase.ts` for utilities
- **SQL**: `snake_case.sql`
- **Documentation**: `SCREAMING_SNAKE_CASE.md` for important docs
- **Scripts**: `kebab-case.sh`

## 🔗 Related Documentation

- [API Specification](../api/README.md)
- [Backend Guide](../backend/README.md)
- [Database Guide](../backend/database/README.md)
- [Architecture Decisions](architecture/ADR.md)

