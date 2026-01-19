# StayOS Microservices Architecture

## Overview

StayOS follows a **microservices architecture** pattern with domain-driven design (DDD) principles, ensuring scalability, maintainability, and independent deployability of services.

## Architecture Principles

1. **Single Responsibility**: Each service owns a specific business domain
2. **Loose Coupling**: Services communicate via well-defined APIs
3. **High Cohesion**: Related functionality grouped within services
4. **Database per Service**: Each service owns its data
5. **API Gateway Pattern**: Single entry point for clients
6. **Event-Driven Communication**: Asynchronous communication via message bus
7. **Circuit Breaker Pattern**: Fault tolerance and resilience
8. **Service Discovery**: Dynamic service registration and discovery

## Microservices Breakdown

### 1. **API Gateway Service** (`api-gateway`)
**Port**: 3000  
**Technology**: Node.js + Express + Kong/Nginx  
**Responsibilities**:
- Request routing and load balancing
- Authentication and authorization (JWT validation)
- Rate limiting and throttling
- Request/response transformation
- API composition and aggregation
- CORS handling
- SSL termination

**Dependencies**: All downstream services

---

### 2. **Authentication Service** (`auth-service`)
**Port**: 3001  
**Technology**: Node.js + TypeScript + Passport.js  
**Database**: PostgreSQL (auth schema)  
**Responsibilities**:
- User authentication (OAuth 2.0, OpenID Connect)
- JWT token generation and validation
- Password management (bcrypt hashing)
- Multi-factor authentication (MFA)
- Session management
- Role-based access control (RBAC)
- API key management

**APIs**:
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/refresh` - Token refresh
- `POST /auth/logout` - User logout
- `POST /auth/verify-mfa` - MFA verification

---

### 3. **Property Management Service** (`property-service`)
**Port**: 3002  
**Technology**: Node.js + TypeScript + Express  
**Database**: PostgreSQL (property_mgmt schema)  
**Responsibilities**:
- Property CRUD operations
- Room management
- Amenities management
- Property settings and configuration
- Multi-tenancy support

**APIs**:
- `GET/POST /properties` - List/Create properties
- `GET/PUT/DELETE /properties/:id` - Property operations
- `GET/POST /properties/:id/rooms` - Room management

---

### 4. **Reservation Service** (`reservation-service`)
**Port**: 3003  
**Technology**: Node.js + TypeScript + Express  
**Database**: PostgreSQL (reservations schema)  
**Responsibilities**:
- Reservation lifecycle management
- Booking state machine
- Availability checking
- Reservation modifications and cancellations
- Waitlist management

**APIs**:
- `GET/POST /reservations` - List/Create reservations
- `GET/PUT/DELETE /reservations/:id` - Reservation operations
- `POST /reservations/:id/confirm` - Confirm reservation
- `POST /reservations/:id/cancel` - Cancel reservation

---

### 5. **Restaurant & Bar Service** (`restaurant-service`)
**Port**: 3004  
**Technology**: Node.js + TypeScript + Express  
**Database**: PostgreSQL (restaurant schema)  
**Responsibilities**:
- Venue management (restaurants, bars)
- Table management and floor plans
- Table reservations
- Menu management
- Order management

**APIs**:
- `GET/POST /venues` - Venue operations
- `GET/POST /venues/:id/tables` - Table management
- `GET/POST /venues/:id/reservations` - Table reservations
- `GET/POST /venues/:id/menus` - Menu management

---

### 6. **Guest Service** (`guest-service`)
**Port**: 3005  
**Technology**: Node.js + TypeScript + Express  
**Database**: PostgreSQL (guests schema)  
**Responsibilities**:
- Guest profile management
- Guest preferences and history
- Loyalty program management
- Guest communication preferences
- Guest document management

**APIs**:
- `GET/POST /guests` - Guest operations
- `GET/PUT /guests/:id` - Guest profile
- `GET /guests/:id/history` - Booking history
- `GET /guests/:id/preferences` - Guest preferences

---

### 7. **Payment Service** (`payment-service`)
**Port**: 3006  
**Technology**: Node.js + TypeScript + Stripe SDK  
**Database**: PostgreSQL (payments schema)  
**Responsibilities**:
- Payment processing (Stripe, PayPal)
- Invoice generation
- Refund management
- Payment method storage (PCI-DSS compliant)
- Transaction history
- Payment reconciliation

**APIs**:
- `POST /payments` - Process payment
- `POST /payments/:id/refund` - Refund payment
- `GET /payments/:id` - Payment details
- `GET /invoices/:id` - Invoice details

---

### 8. **Notification Service** (`notification-service`)
**Port**: 3007  
**Technology**: Node.js + TypeScript + Bull Queue  
**Database**: Redis (queue), PostgreSQL (notification history)  
**Responsibilities**:
- Email notifications (SendGrid, AWS SES)
- SMS notifications (Twilio)
- Push notifications (Firebase)
- In-app notifications
- Notification templates
- Notification preferences

**APIs**:
- `POST /notifications/email` - Send email
- `POST /notifications/sms` - Send SMS
- `POST /notifications/push` - Send push notification
- `GET /notifications/:userId` - User notifications

---

### 9. **Analytics Service** (`analytics-service`)
**Port**: 3008  
**Technology**: Node.js + TypeScript + ClickHouse  
**Database**: ClickHouse (time-series data)  
**Responsibilities**:
- Business intelligence and reporting
- Occupancy analytics
- Revenue analytics
- Guest behavior analytics
- Real-time dashboards
- Data aggregation and ETL

**APIs**:
- `GET /analytics/occupancy` - Occupancy reports
- `GET /analytics/revenue` - Revenue reports
- `GET /analytics/guests` - Guest analytics
- `GET /analytics/dashboard` - Dashboard data

---

### 10. **File Storage Service** (`storage-service`)
**Port**: 3009  
**Technology**: Node.js + TypeScript + AWS S3/MinIO  
**Database**: PostgreSQL (metadata), S3/MinIO (files)  
**Responsibilities**:
- File upload and download
- Image processing and optimization
- Document management
- CDN integration
- File versioning
- Access control

**APIs**:
- `POST /files/upload` - Upload file
- `GET /files/:id` - Download file
- `DELETE /files/:id` - Delete file
- `GET /files/:id/metadata` - File metadata

---

## Communication Patterns

### Synchronous Communication (REST/gRPC)
- API Gateway → Services (REST)
- Service-to-Service (gRPC for performance-critical paths)

### Asynchronous Communication (Message Bus)
- **Technology**: RabbitMQ / Apache Kafka
- **Use Cases**:
  - Event notifications (reservation created, payment processed)
  - Background jobs (email sending, report generation)
  - Data synchronization across services

### Event-Driven Architecture
```
Reservation Created → [Event Bus] → Notification Service (send confirmation email)
                                  → Analytics Service (update metrics)
                                  → Payment Service (process deposit)
```

---

## Data Management

### Database Strategy
- **PostgreSQL**: Transactional data (ACID compliance)
- **Redis**: Caching, session storage, rate limiting
- **ClickHouse**: Analytics and time-series data
- **S3/MinIO**: Object storage for files

### Data Consistency
- **Saga Pattern**: Distributed transactions across services
- **Event Sourcing**: Audit trail and state reconstruction
- **CQRS**: Separate read and write models for analytics

---

## Service Discovery & Load Balancing

- **Kubernetes Service Discovery**: Built-in DNS-based discovery
- **Consul**: Service registry and health checking
- **Load Balancing**: Kubernetes Service + Ingress Controller

---

## Security

- **mTLS**: Service-to-service encryption (Istio)
- **API Gateway**: JWT validation, rate limiting
- **Network Policies**: Kubernetes network segmentation
- **Secrets Management**: Kubernetes Secrets + HashiCorp Vault
- **RBAC**: Role-based access control at service level

---

## Observability

- **Distributed Tracing**: OpenTelemetry + Jaeger
- **Metrics**: Prometheus + Grafana
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **APM**: Application Performance Monitoring

---

## Deployment Strategy

- **Containerization**: Docker multi-stage builds
- **Orchestration**: Kubernetes
- **CI/CD**: GitHub Actions
- **GitOps**: ArgoCD / Flux
- **Blue-Green Deployment**: Zero-downtime deployments
- **Canary Releases**: Gradual rollout with traffic splitting


