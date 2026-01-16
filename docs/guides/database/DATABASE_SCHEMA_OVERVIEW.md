# Database Schema Design - Overview

**Database:** PostgreSQL 15+  
**Version:** 1.0  
**Date:** 2025-12-21  
**Status:** Design Complete

---

## Design Principles

Following **ADR-004: Data Management – Relational Core with Audit-First Design**

### Core Principles

1. **Aggregate-per-Schema Pattern**
   - Each bounded context has its own PostgreSQL schema
   - Prevents cross-context coupling at database level
   - Enables independent scaling and migration

2. **Audit-First Design**
   - All tables include audit columns (created_at, updated_at, created_by, updated_by)
   - Soft deletes with deleted_at timestamp
   - Comprehensive audit log table for all mutations

3. **Event Sourcing Hybrid**
   - Critical aggregates (Reservation, Payment) support event sourcing
   - Domain events stored in dedicated events table
   - Enables temporal queries and audit trails

4. **Data Integrity**
   - Foreign keys within bounded contexts
   - No cross-context foreign keys (use IDs only)
   - Check constraints for business rules
   - Partial indexes for performance

5. **Performance Optimization**
   - Strategic indexing on query patterns
   - JSONB for flexible attributes
   - Partitioning for high-volume tables (audit logs, events)
   - Materialized views for analytics

6. **Multi-tenancy**
   - property_id in all tables for data isolation
   - Row-level security (RLS) policies
   - Tenant-aware indexes

7. **Compliance & Privacy**
   - PII encryption at rest (pgcrypto)
   - GDPR-compliant data retention policies
   - Anonymization support for deleted guests

---

## Schema Organization

### PostgreSQL Schemas (Namespaces)

```
stayos_db
├── property_mgmt          -- Property Management Context
├── reservation            -- Reservation Context
├── guest                  -- Guest Context
├── operations             -- Operations Context
├── billing                -- Billing & Payments Context
├── fb                     -- Food & Beverage Context (Optional)
├── procurement            -- Procurement Context (Optional)
├── compliance             -- Compliance & Audit Context
├── channel                -- Channel Management Context
└── shared                 -- Shared types, functions, views
```

---

## Common Patterns

### Standard Audit Columns

All tables include:

```sql
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
created_by UUID NOT NULL REFERENCES shared.users(id),
updated_by UUID NOT NULL REFERENCES shared.users(id),
deleted_at TIMESTAMPTZ,
version INTEGER NOT NULL DEFAULT 1  -- Optimistic locking
```

### Standard Triggers

1. **update_updated_at_column()** - Auto-update updated_at on row modification
2. **audit_trigger()** - Log all changes to audit.audit_log
3. **publish_domain_event()** - Publish domain events to event bus

---

## Table Count by Context

| Context | Tables | Estimated Rows (Year 1) |
|---------|--------|-------------------------|
| Property Management | 8 | 10K - 100K |
| Reservation | 6 | 100K - 1M |
| Guest | 5 | 50K - 500K |
| Operations | 12 | 500K - 5M |
| Billing & Payments | 6 | 200K - 2M |
| F&B (Optional) | 8 | 100K - 1M |
| Procurement (Optional) | 6 | 10K - 100K |
| Compliance & Audit | 4 | 1M - 10M (partitioned) |
| Channel Management | 4 | 1K - 10K |
| **Total** | **59 tables** | **~10M rows** |

---

## Data Volume Estimates

### High-Volume Tables (Partitioning Required)

1. **audit.audit_log** - 10M+ rows/year
   - Partition by month
   - Retention: 7 years (compliance)

2. **compliance.domain_events** - 5M+ rows/year
   - Partition by month
   - Retention: 3 years

3. **operations.service_requests** - 1M+ rows/year
   - Partition by quarter
   - Retention: 2 years

4. **guest.feedback** - 500K+ rows/year
   - Partition by quarter
   - Retention: 5 years

---

## Indexing Strategy

### Primary Indexes
- All primary keys (UUID v7 for time-ordered)
- Foreign keys
- property_id (tenant isolation)

### Query Optimization Indexes
- Composite indexes on common query patterns
- Partial indexes for active records (WHERE deleted_at IS NULL)
- GIN indexes on JSONB columns
- Full-text search indexes (tsvector)

### Example:
```sql
-- Composite index for common query
CREATE INDEX idx_reservations_property_status_checkin 
ON reservation.reservations(property_id, status, check_in_date)
WHERE deleted_at IS NULL;

-- JSONB index for preferences
CREATE INDEX idx_guest_preferences_gin 
ON guest.profiles USING GIN(preferences);

-- Full-text search on guest names
CREATE INDEX idx_guest_name_fts 
ON guest.profiles USING GIN(to_tsvector('english', full_name));
```

---

## Security Features

### Row-Level Security (RLS)

```sql
-- Enable RLS on all tables
ALTER TABLE reservation.reservations ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their property's data
CREATE POLICY tenant_isolation ON reservation.reservations
FOR ALL
TO authenticated_user
USING (property_id = current_setting('app.current_property_id')::UUID);
```

### Encryption

- **PII Fields:** Encrypted using pgcrypto (SSN, passport, credit card)
- **Passwords:** bcrypt hashing (never stored plain)
- **API Keys:** Encrypted at rest

---

## Migration Strategy

### Version Control
- Flyway or Liquibase for schema migrations
- Semantic versioning (V1.0.0__initial_schema.sql)
- Rollback scripts for all migrations

### Zero-Downtime Deployments
- Expand-contract pattern for schema changes
- Blue-green deployments for major changes
- Online index creation (CONCURRENTLY)

---

## Backup & Recovery

### Backup Strategy
- **Full backup:** Daily (3 AM UTC)
- **Incremental backup:** Every 6 hours
- **WAL archiving:** Continuous (Point-in-Time Recovery)
- **Retention:** 30 days online, 7 years archived

### Disaster Recovery
- **RTO (Recovery Time Objective):** 1 hour
- **RPO (Recovery Point Objective):** 15 minutes
- **Multi-region replication:** Async streaming replication

---

## Next Steps

1. ✅ Review this overview
2. ⏳ Create detailed schema SQL files for each context
3. ⏳ Generate ER diagrams
4. ⏳ Create seed data scripts
5. ⏳ Set up migration framework

---

**Files to be created:**
- `schema_property_management.sql`
- `schema_reservation.sql`
- `schema_guest.sql`
- `schema_operations.sql`
- `schema_billing.sql`
- `schema_fb.sql`
- `schema_procurement.sql`
- `schema_compliance.sql`
- `schema_channel.sql`
- `schema_shared.sql`
- `migrations/` directory with versioned scripts

