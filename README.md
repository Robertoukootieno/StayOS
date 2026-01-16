# StayOS - Complete Property Management System

> **Enterprise-grade hospitality management platform with 100% API coverage**

[![API Version](https://img.shields.io/badge/API-v4.0.0-blue.svg)](api/openapi.yaml)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.1.0-green.svg)](api/openapi.yaml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Overview

StayOS is a comprehensive Property Management System (PMS) designed for hotels, resorts, vacation rentals, and hospitality businesses. Built with modern architecture and industry best practices, it provides complete operational management from reservations to revenue reporting.

### Key Features

- ✅ **202 API Endpoints** - Complete coverage of all hospitality operations
- ✅ **15 Functional Modules** - Property, Reservations, Billing, F&B, Operations, and more
- ✅ **Multi-language SDKs** - TypeScript, Python, Java, Go, C#, PHP, Ruby
- ✅ **Production-ready Database** - PostgreSQL with 59 tables, partitioning, and optimization
- ✅ **OAuth 2.0 + JWT** - Enterprise-grade authentication and authorization
- ✅ **GDPR Compliant** - Built-in data privacy and compliance features
- ✅ **PCI-DSS Ready** - Secure payment processing infrastructure

## 📁 Project Structure

```
stayOS/
├── api/                      # OpenAPI specifications
│   ├── openapi.yaml         # Main API specification
│   ├── schemas/             # JSON schemas
│   ├── parameters/          # Reusable parameters
│   ├── responses/           # Reusable responses
│   └── examples/            # Request/response examples
├── backend/                 # Node.js/TypeScript API server
│   ├── src/                # Source code
│   │   ├── routes/         # API route handlers
│   │   ├── middleware/     # Express middleware
│   │   ├── config/         # Configuration files
│   │   └── utils/          # Utility functions
│   ├── database/           # Database files
│   │   ├── schemas/        # SQL schema definitions
│   │   ├── seeds/          # Sample/seed data
│   │   └── migrations/     # Database migrations
│   └── tests/              # Test suites
├── docs/                    # Documentation
│   ├── guides/             # User guides
│   │   ├── database/       # Database setup guides
│   │   ├── API_QUICK_START.md
│   │   └── AUTH_TESTING_GUIDE.md
│   ├── architecture/       # Architecture documentation
│   │   ├── ADR.md          # Architecture Decision Records
│   │   └── CORE_DOMAIN_MODEL.md
│   └── planning/           # Project planning documents
│       ├── PROJECT_OVERVIEW.md
│       └── NEXT_STEPS_ROADMAP.md
├── sdks/                    # Generated client SDKs
│   ├── typescript/         # TypeScript/JavaScript SDK
│   ├── python/             # Python SDK
│   ├── java/               # Java SDK
│   ├── go/                 # Go SDK
│   ├── csharp/             # C# SDK
│   ├── php/                # PHP SDK
│   └── ruby/               # Ruby SDK
└── scripts/                # Build and deployment scripts
    ├── setup-database.sh   # Database setup script
    ├── generate-sdks.sh    # SDK generation script
    └── test-auth.sh        # Authentication testing
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **PostgreSQL** >= 15
- **npm** >= 9.0.0

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/stayos.git
cd stayos
```

### 2. Set Up the Database

```bash
# Automated setup (recommended)
npm run db:setup

# Or manual setup
createdb stayos_dev
psql -d stayos_dev -f backend/database/schemas/schema_shared.sql
psql -d stayos_dev -f backend/database/schemas/schema_property_management.sql
psql -d stayos_dev -f backend/database/schemas/schema_reservation.sql
psql -d stayos_dev -f backend/database/schemas/schema_guest.sql
psql -d stayos_dev -f backend/database/schemas/schema_billing.sql
# ... add other schemas as needed

# Load sample data
psql -d stayos_dev -f backend/database/seeds/sample_data.sql
```

### 3. Start the Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npm run dev
```

The API server will start on http://localhost:8080

### 4. View API Documentation

```bash
# From project root
npm run api:docs
```

Open http://localhost:3000 to view the interactive Swagger UI documentation.

## 📚 Documentation

### Getting Started

- **[Quick Reference](docs/QUICK_REFERENCE.md)** - ⭐ Essential commands and paths
- **[Migration Guide](docs/MIGRATION_GUIDE.md)** - Update your local environment (v4.0.0)
- **[Troubleshooting](docs/TROUBLESHOOTING.md)** - Common issues and solutions

### Core Documentation

- **[API Specification](api/README.md)** - OpenAPI specification and API reference
- **[Database Guide](backend/database/README.md)** - Database schemas and setup
- **[Architecture](docs/architecture/ADR.md)** - Architecture Decision Records
- **[Visual Diagrams](docs/architecture/VISUAL_DIAGRAMS.md)** - Project structure diagrams
- **[User Guides](docs/guides/)** - Setup and usage guides
- **[Planning Docs](docs/planning/)** - Roadmap and implementation guides
- **[Backend Guide](backend/README.md)** - Backend development guide

### Project Information

- **[Project Structure](docs/PROJECT_STRUCTURE.md)** - Directory organization
- **[Status Report](docs/STATUS_REPORT.md)** - Current project status
- **[Reorganization Summary](docs/REORGANIZATION_SUMMARY.md)** - What changed in v4.0.0

## 🔌 API Modules

| Module | Endpoints | Description |
|--------|-----------|-------------|
| Properties | 12 | Property management and configuration |
| Reservations | 18 | Booking and reservation management |
| Guests | 14 | Guest profiles and preferences |
| Stays | 10 | Check-in/out and stay management |
| Billing | 16 | Invoicing and payment processing |
| Food & Beverage | 20 | POS and F&B operations |
| Inventory | 12 | Room and unit inventory |
| Operations | 22 | Housekeeping and maintenance |
| Channels | 14 | OTA and channel management |
| Rate Strategies | 10 | Dynamic pricing and revenue |
| Feedback | 12 | Reviews and guest feedback |
| Compliance | 10 | GDPR and regulatory compliance |
| Procurement | 14 | Supplier and purchasing |
| System | 8 | Health, metrics, and monitoring |
| Webhooks | 10 | Event notifications |

**Total: 202 Endpoints**

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js 18+
- **Language**: TypeScript 5.3
- **Framework**: Express.js
- **ORM**: TypeORM
- **Database**: PostgreSQL 15+
- **Authentication**: OAuth 2.0 + JWT
- **Logging**: Winston
- **Testing**: Jest

### API & Documentation
- **Specification**: OpenAPI 3.1.0
- **Documentation**: Swagger UI / ReDoc
- **Validation**: Spectral
- **SDK Generation**: OpenAPI Generator

## 📦 Available SDKs

Pre-generated client SDKs are available in the `sdks/` directory:

```bash
# TypeScript/JavaScript
npm install @stayos/api-client

# Python
pip install stayos-api-client

# Java
# See sdks/java/README.md

# Go
go get github.com/yourusername/stayos-go-sdk

# C#
dotnet add package StayOS.ApiClient

# PHP
composer require stayos/api-client

# Ruby
gem install stayos-api-client
```

## 🧪 Development

```bash
# Install dependencies
npm install

# Start development server
cd backend && npm run dev

# Run tests
npm test

# Lint code
npm run lint

# Generate SDKs
npm run sdk:all

# View API docs
npm run api:docs
```

## 📖 Learn More

- [Next Steps Roadmap](docs/planning/NEXT_STEPS_ROADMAP.md)
- [Technology Stack Decision](docs/planning/TECHNOLOGY_STACK_DECISION.md)
- [Quick Start Implementation](docs/planning/QUICK_START_IMPLEMENTATION.md)
- [Project Overview](docs/planning/PROJECT_OVERVIEW.md)

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

- **Documentation**: [docs/](docs/)
- **Issues**: [GitHub Issues](https://github.com/yourusername/stayos/issues)
- **Email**: support@stayos.com

---

**Built with ❤️ for the hospitality industry**

