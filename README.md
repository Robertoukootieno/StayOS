# StayOS - Enterprise Property Management System

> **Cloud-native microservices platform for hospitality management with production-ready infrastructure**

[![API Version](https://img.shields.io/badge/API-v4.0.0-blue.svg)](api/openapi.yaml)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.1.0-green.svg)](api/openapi.yaml)
[![Architecture](https://img.shields.io/badge/Architecture-Microservices-orange.svg)](docs/architecture/MICROSERVICES_ARCHITECTURE.md)
[![Infrastructure](https://img.shields.io/badge/Infrastructure-Kubernetes-blue.svg)](infrastructure/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Overview

StayOS is a comprehensive Property Management System (PMS) designed for hotels, resorts, vacation rentals, and hospitality businesses. Built with **microservices architecture** and **cloud-native best practices**, it provides complete operational management from reservations to revenue reporting with enterprise-grade scalability and reliability.

### Key Features

- ✅ **Microservices Architecture** - 10 independent services with clear domain boundaries
- ✅ **Production-Ready Infrastructure** - Kubernetes, Docker, Terraform, CI/CD pipelines
- ✅ **202 API Endpoints** - Complete coverage of all hospitality operations
- ✅ **15 Functional Modules** - Property, Reservations, Billing, F&B, Operations, and more
- ✅ **Multi-language SDKs** - TypeScript, Python, Java, Go, C#, PHP, Ruby
- ✅ **Production-ready Database** - PostgreSQL with 59 tables, partitioning, and optimization
- ✅ **OAuth 2.0 + JWT** - Enterprise-grade authentication and authorization
- ✅ **Observability Stack** - Prometheus, Grafana, Jaeger for monitoring and tracing
- ✅ **GDPR Compliant** - Built-in data privacy and compliance features
- ✅ **PCI-DSS Ready** - Secure payment processing infrastructure
- ✅ **Multi-tenant Support** - Isolated data and resources per property
- ✅ **East African Localization** - 14 languages, 16 currencies, 15 timezones

## 📁 Project Structure

```
stayOS/
├── api/                      # OpenAPI specifications
│   ├── openapi.yaml         # Main API specification
│   ├── schemas/             # JSON schemas
│   ├── parameters/          # Reusable parameters
│   ├── responses/           # Reusable responses
│   └── examples/            # Request/response examples
│
├── services/                # Microservices (10 services)
│   ├── api-gateway/        # API Gateway (port 3000)
│   ├── auth-service/       # Authentication & Authorization (port 3001)
│   ├── property-service/   # Property Management (port 3002)
│   ├── reservation-service/ # Reservations & Bookings (port 3003)
│   ├── restaurant-service/ # Restaurant & Bar Management (port 3004)
│   ├── guest-service/      # Guest Profiles & Preferences (port 3005)
│   ├── payment-service/    # Payments & Billing (port 3006)
│   ├── notification-service/ # Email, SMS, Push Notifications (port 3007)
│   ├── analytics-service/  # Analytics & Reporting (port 3008)
│   └── storage-service/    # File Storage & Media (port 3009)
│
├── infrastructure/          # Infrastructure as Code
│   ├── docker/             # Docker configurations
│   │   ├── docker-compose.yml  # Local development environment
│   │   └── Dockerfile.node     # Multi-stage Node.js Dockerfile
│   ├── kubernetes/         # Kubernetes manifests
│   │   ├── deployments/    # Service deployments
│   │   ├── services/       # Service definitions
│   │   ├── ingress/        # Ingress controllers
│   │   ├── config/         # ConfigMaps and Secrets
│   │   └── namespaces/     # Environment namespaces
│   ├── terraform/          # Terraform IaC for AWS
│   │   ├── main.tf         # Main infrastructure definition
│   │   ├── variables.tf    # Variable definitions
│   │   └── outputs.tf      # Output values
│   ├── monitoring/         # Observability stack
│   │   ├── prometheus/     # Prometheus configuration
│   │   └── grafana/        # Grafana dashboards
│   └── scripts/            # Deployment automation
│       ├── deploy-infrastructure.sh
│       └── deploy-kubernetes.sh
│
├── backend/                 # Legacy monolith (being migrated)
│   ├── src/                # Source code
│   │   ├── routes/         # API route handlers
│   │   ├── middleware/     # Express middleware
│   │   └── utils/          # Utility functions
│   ├── database/           # Database files
│   │   ├── schemas/        # SQL schema definitions
│   │   └── migrations/     # Database migrations
│   └── tests/              # Test suites (111 tests passing)
│
├── docs/                    # Documentation
│   ├── guides/             # User guides
│   ├── architecture/       # Architecture documentation
│   │   ├── ADR.md          # Architecture Decision Records
│   │   ├── CORE_DOMAIN_MODEL.md
│   │   └── MICROSERVICES_ARCHITECTURE.md
│   └── planning/           # Project planning documents
│
├── sdks/                    # Generated client SDKs
│   ├── typescript/         # TypeScript/JavaScript SDK
│   ├── python/             # Python SDK
│   ├── java/               # Java SDK
│   ├── go/                 # Go SDK
│   ├── csharp/             # C# SDK
│   ├── php/                # PHP SDK
│   └── ruby/               # Ruby SDK
│
├── .github/                # GitHub Actions CI/CD
│   └── workflows/
│       └── ci-cd-pipeline.yml  # Complete CI/CD pipeline
│
└── scripts/                # Build and deployment scripts
    ├── setup-database.sh   # Database setup script
    ├── generate-sdks.sh    # SDK generation script
    └── test-auth.sh        # Authentication testing
```

## 🚀 Quick Start

### Prerequisites

- **Docker** >= 20.10 & **Docker Compose** >= 2.0
- **Node.js** >= 20.0.0 (for local development)
- **PostgreSQL** >= 16 (or use Docker)
- **Kubernetes** >= 1.28 (for production deployment)
- **Terraform** >= 1.6 (for infrastructure provisioning)

### Option 1: Docker Compose (Recommended for Local Development)

```bash
# Clone the repository
git clone https://github.com/robertoukootieno/stayos.git
cd stayos

# Start all services with Docker Compose
cd infrastructure/docker
docker-compose up -d

# Services will be available at:
# - API Gateway: http://localhost:3000
# - PostgreSQL: localhost:5432
# - Redis: localhost:6379
# - RabbitMQ: http://localhost:15672
# - Prometheus: http://localhost:9090
# - Grafana: http://localhost:3001
# - Jaeger: http://localhost:16686
```

### Option 2: Local Development (Single Service)

```bash
# Set up the database
createdb stayos_dev
psql -d stayos_dev -f backend/database/schemas/01_schema_shared.sql
psql -d stayos_dev -f backend/database/schemas/02_schema_property_management.sql
psql -d stayos_dev -f backend/database/schemas/03_schema_reservation.sql
psql -d stayos_dev -f backend/database/schemas/04_schema_restaurant_bar.sql
# ... run all migration scripts

# Start the backend (legacy monolith)
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npm run dev

# The API server will start on http://localhost:8080
```

### Option 3: Kubernetes Deployment

```bash
# Deploy infrastructure with Terraform
cd infrastructure/terraform
terraform init
terraform plan -var-file="development.tfvars"
terraform apply -var-file="development.tfvars"

# Deploy Kubernetes resources
cd ../scripts
./deploy-kubernetes.sh development

# Access services via Ingress
# https://api.stayos.com
```

### View API Documentation

```bash
# Start Swagger UI
npm run api:docs

# Open http://localhost:3000
```

## 📚 Documentation

### Getting Started

- **[Quick Reference](docs/QUICK_REFERENCE.md)** - ⭐ Essential commands and paths
- **[Git Workflow](docs/GIT_WORKFLOW.md)** - Branching strategy and commit conventions
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

### Microservices
- **Runtime**: Node.js 20
- **Language**: TypeScript 5.3
- **Framework**: Express.js 4.18
- **Authentication**: Passport.js, OAuth 2.0, JWT
- **Logging**: Winston 3.11
- **Testing**: Jest 29.7, Supertest 6.3
- **Tracing**: OpenTelemetry, Jaeger

### Databases & Storage
- **Primary Database**: PostgreSQL 16 (transactional data)
- **Cache**: Redis 7 (sessions, rate limiting)
- **Message Broker**: RabbitMQ 3.12 / Apache Kafka
- **Analytics**: ClickHouse (time-series data)
- **Object Storage**: MinIO / AWS S3

### Infrastructure & DevOps
- **Containerization**: Docker (multi-stage builds)
- **Orchestration**: Kubernetes 1.28
- **Service Mesh**: Istio (mTLS, traffic management)
- **Infrastructure as Code**: Terraform 1.6+
- **CI/CD**: GitHub Actions
- **GitOps**: ArgoCD / Flux

### Observability
- **Metrics**: Prometheus
- **Visualization**: Grafana
- **Tracing**: Jaeger
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **APM**: OpenTelemetry

### Security
- **Secrets Management**: HashiCorp Vault, Kubernetes Secrets
- **Network Security**: Network Policies, mTLS via Istio
- **Container Scanning**: Trivy, Snyk
- **TLS Certificates**: cert-manager, Let's Encrypt

### API & Documentation
- **Specification**: OpenAPI 3.1.0
- **Documentation**: Swagger UI 5.10, ReDoc
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

### Local Development with Docker Compose

```bash
# Start all services
cd infrastructure/docker
docker-compose up -d

# View logs
docker-compose logs -f api-gateway

# Stop all services
docker-compose down

# Rebuild a specific service
docker-compose up -d --build api-gateway
```

### Backend Development (Legacy Monolith)

```bash
# Install dependencies
cd backend
npm install

# Run tests (111 tests)
npm test

# Run specific test suites
npm test -- tests/middleware
npm test -- tests/utils

# Build TypeScript
npm run build

# Start development server
npm run dev

# Lint code
npm run lint
```

### Infrastructure Development

```bash
# Validate Terraform configuration
cd infrastructure/terraform
terraform validate

# Plan infrastructure changes
terraform plan -var-file="development.tfvars"

# Validate Kubernetes manifests
kubectl apply --dry-run=client -f infrastructure/kubernetes/

# Deploy to development
cd infrastructure/scripts
./deploy-kubernetes.sh development
```

### API Development

```bash
# Generate SDKs
npm run sdk:all

# View API docs
npm run api:docs

# Validate OpenAPI spec
npm run api:validate
```

## 📖 Documentation

### Architecture
- **[Microservices Architecture](docs/architecture/MICROSERVICES_ARCHITECTURE.md)** - Complete microservices design
- **[Architecture Decision Records](docs/architecture/ADR.md)** - Key architectural decisions
- **[Core Domain Model](docs/architecture/CORE_DOMAIN_MODEL.md)** - Domain-driven design model
- **[Infrastructure README](infrastructure/README.md)** - Infrastructure setup and deployment

### Planning & Guides
- **[Project Overview](docs/planning/PROJECT_OVERVIEW.md)** - High-level project overview
- **[Next Steps Roadmap](docs/planning/NEXT_STEPS_ROADMAP.md)** - Implementation roadmap
- **[Project Status](docs/PROJECT_STATUS.md)** - Current project status
- **[Quick Reference](docs/QUICK_REFERENCE.md)** - Essential commands and paths

### API Documentation
- **[API README](api/README.md)** - API specification overview
- **[OpenAPI Specification](api/openapi.yaml)** - Complete API specification
- **[Headers & Parameters Guide](docs/api/HEADERS_AND_PARAMETERS_GUIDE.md)** - API headers and parameters

### Infrastructure & Deployment
- **[Infrastructure Setup](INFRASTRUCTURE_SETUP_COMPLETE.md)** - Infrastructure completion summary
- **[Phase 3 Summary](PHASE3_COMPLETE_SUMMARY.md)** - Backend implementation summary
- **[Docker Compose](infrastructure/docker/docker-compose.yml)** - Local development environment
- **[Kubernetes Manifests](infrastructure/kubernetes/)** - Production deployment configs
- **[Terraform Configuration](infrastructure/terraform/)** - AWS infrastructure as code

## 🎯 Project Status

| Phase | Component | Status | Progress |
|-------|-----------|--------|----------|
| **Phase 1** | Architecture & Design | ✅ Complete | 100% |
| **Phase 1** | API Specification (202 endpoints) | ✅ Complete | 100% |
| **Phase 1** | Database Schema (59 tables) | ✅ Complete | 100% |
| **Phase 2** | SDK Generation (7 languages) | ✅ Complete | 100% |
| **Phase 3** | Backend Implementation | ✅ Complete | 100% |
| **Phase 3** | Middleware & Utilities | ✅ Complete | 111/111 tests passing |
| **Phase 3** | East African Localization | ✅ Complete | 14 languages, 16 currencies |
| **Phase 4** | Infrastructure Setup | ✅ Complete | 100% |
| **Phase 4** | Docker & Kubernetes | ✅ Complete | 100% |
| **Phase 4** | CI/CD Pipeline | ✅ Complete | 100% |
| **Phase 4** | Terraform IaC | ✅ Complete | 100% |
| **Phase 5** | Service Implementation | 🔄 In Progress | 0% |
| **Phase 5** | Service Migration | ⏳ Pending | 0% |
| **Phase 6** | Frontend Development | ⏳ Pending | 0% |

**Current Status:** ✅ Infrastructure complete, ready for service implementation

## 🤝 Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) guidelines before submitting PRs.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🆘 Support

- **Documentation**: [docs/](docs/)
- **Issues**: [GitHub Issues](https://github.com/robertoukootieno/stayos/issues)
- **Repository**: [github.com/robertoukootieno/stayos](https://github.com/robertoukootieno/stayos)

---

**Built with ❤️ for the hospitality industry**

**StayOS** - Enterprise Property Management System
© 2025 Robert Ouko Otieno. All rights reserved.

