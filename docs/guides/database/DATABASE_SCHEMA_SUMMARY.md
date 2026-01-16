# Database Schema Design - Summary

**Project:** Noventrix StayOS
**Database:** PostgreSQL 15+
**Version:** 1.0
**Date:** 2025-12-21
**Status:** ✅ **ALL SCHEMAS COMPLETE (10/10)**

---

## Overview

Comprehensive database schema design for StayOS hospitality management system, following Domain-Driven Design principles and PostgreSQL best practices.

---

## Schema Files Created

### ✅ All Schemas Complete (10/10)

1. **`schema_shared.sql`** - Foundation ✅
   - Custom types (money, address, contact_info)
   - Reference tables (countries, currencies, timezones, languages)
   - Utility functions (UUID v7, encryption, audit triggers)
   - Users table

2. **`schema_property_management.sql`** - Property Management Context ✅
   - **Tables:** properties, inventory_units, amenities, rate_strategies, photos
   - **Aggregates:** Property, InventoryUnit, RateStrategy
   - **Features:** Dynamic pricing, seasonal adjustments, occupancy modifiers

3. **`schema_guest.sql`** - Guest Context ✅
   - **Tables:** profiles, loyalty_memberships, stays, feedback
   - **Aggregates:** GuestProfile, Stay, GuestFeedback
   - **Features:** NPS tracking, sentiment analysis, review management, GDPR compliance

4. **`schema_operations.sql`** - Operations Context ✅
   - **Tables:** staff, staff_shifts, service_requests, incident_reports, corrective_actions, training_modules, training_enrollments, housekeeping_tasks, maintenance_requests
   - **Aggregates:** ServiceRequest, IncidentReport, TrainingModule, HousekeepingTask, MaintenanceRequest, StaffShift
   - **Features:** SLA tracking, incident management, certification tracking

5. **`schema_reservation.sql`** - Reservation Context ✅
   - **Tables:** cancellation_policies, reservations, reservation_line_items, quotes
   - **Aggregates:** Reservation, Quote
   - **Features:** Cancellation policies, quote management, occupancy tracking

6. **`schema_billing.sql`** - Billing & Payments Context ✅
   - **Tables:** folios, folio_line_items, payments, refunds, chargebacks, invoices
   - **Aggregates:** Folio, Payment
   - **Features:** Payment processing, refund workflow, chargeback management, invoicing

7. **`schema_compliance.sql`** - Compliance & Audit Context ✅
   - **Tables:** audit_log (partitioned), domain_events (partitioned), compliance_reports, data_retention_policies
   - **Aggregates:** AuditLog, DomainEvent
   - **Features:** Append-only audit log, event sourcing, GDPR reports, data retention

8. **`schema_channel.sql`** - Channel Management Context ✅
   - **Tables:** channel_connections, channel_mappings, channel_bookings, sync_log
   - **Aggregates:** ChannelConnection, ChannelMapping
   - **Features:** OTA integrations, rate/inventory sync, booking import

9. **`schema_fb.sql`** - Food & Beverage Context (Optional) ✅
   - **Tables:** menu_items, fb_orders, fb_order_items, inventory_items, stock_batches, waste_records
   - **Aggregates:** FoodBeverageOrder, MenuItem, InventoryItem
   - **Features:** Menu management, room service, FIFO inventory, waste tracking

10. **`schema_procurement.sql`** - Procurement Context (Optional) ✅
    - **Tables:** suppliers, supplier_certifications, purchase_orders, po_line_items, goods_receipts, goods_receipt_line_items
    - **Aggregates:** PurchaseOrder, Supplier
    - **Features:** Supplier management, PO workflow, goods receipt, quality checks

---

## Key Statistics

| Metric | Count |
|--------|-------|
| **PostgreSQL Schemas** | 10 (ALL COMPLETE) |
| **Tables Created** | 59 |
| **Custom Types/Enums** | 50+ |
| **Indexes** | 150+ |
| **Triggers** | 30+ |
| **Views** | 10+ |
| **Functions** | 7 |

---

## Design Highlights

### 1. **Aggregate-per-Schema Pattern**
Each bounded context has its own PostgreSQL schema:
- `property_mgmt` - Property Management
- `guest` - Guest profiles and feedback
- `operations` - Day-to-day operations
- `billing` - Payments and invoicing (to be created)
- `fb` - Food & Beverage (to be created)
- `procurement` - Supplier management (to be created)
- `compliance` - Audit logs (to be created)
- `channel` - OTA integrations (to be created)

### 2. **Audit-First Design**
All tables include:
```sql
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
created_by UUID NOT NULL REFERENCES shared.users(id)
updated_by UUID NOT NULL REFERENCES shared.users(id)
deleted_at TIMESTAMPTZ  -- Soft delete
version INTEGER NOT NULL DEFAULT 1  -- Optimistic locking
```

### 3. **Cross-Context References**
- **No foreign keys** across bounded contexts
- Use UUID references only
- Maintains loose coupling
- Example: `property_id UUID NOT NULL` (no FK to property_mgmt.properties)

### 4. **JSONB for Flexibility**
Strategic use of JSONB for:
- Guest preferences
- Feedback category ratings
- Incident involved parties
- Training assessment attempts
- Service request guest feedback

### 5. **Generated Columns**
Auto-calculated fields:
- `full_name` (guest profiles)
- `overtime_minutes` (staff shifts)
- `sla_compliant` (service requests)
- `response_time_seconds` (service requests)
- `nps_score` (calculated from promoters/detractors)

### 6. **Strategic Indexing**
- **Primary keys:** UUID v7 (time-ordered for better performance)
- **Tenant isolation:** property_id indexed on all tables
- **Query optimization:** Composite indexes on common patterns
- **Partial indexes:** `WHERE deleted_at IS NULL`
- **GIN indexes:** JSONB columns, arrays, full-text search
- **Performance:** 80+ indexes across 23 tables

### 7. **Data Integrity**
- Check constraints for business rules
- Unique constraints for natural keys
- NOT NULL constraints for required fields
- Foreign keys within bounded contexts
- Trigger-based validation

---

## Advanced Features

### 1. **NPS Calculation View**
```sql
CREATE VIEW guest.v_nps_metrics AS
SELECT 
    property_id,
    DATE_TRUNC('month', submitted_at) AS month,
    COUNT(*) AS total_responses,
    COUNT(*) FILTER (WHERE nps_score >= 9) AS promoters,
    COUNT(*) FILTER (WHERE nps_score BETWEEN 7 AND 8) AS passives,
    COUNT(*) FILTER (WHERE nps_score <= 6) AS detractors,
    ROUND(
        (COUNT(*) FILTER (WHERE nps_score >= 9)::DECIMAL / COUNT(*) * 100) -
        (COUNT(*) FILTER (WHERE nps_score <= 6)::DECIMAL / COUNT(*) * 100),
        2
    ) AS nps_score
FROM guest.feedback
WHERE feedback_type = 'NPS' AND nps_score IS NOT NULL
GROUP BY property_id, DATE_TRUNC('month', submitted_at);
```

### 2. **SLA Compliance Tracking**
Auto-calculated in `service_requests`:
```sql
sla_compliant BOOLEAN GENERATED ALWAYS AS (
    CASE 
        WHEN acknowledged_at IS NOT NULL THEN
            (acknowledged_at - requested_at) <= INTERVAL '5 minutes'
        ELSE FALSE
    END
) STORED
```

### 3. **PII Encryption Functions**
```sql
-- Encrypt sensitive data
SELECT shared.encrypt_pii('SSN-123-45-6789', 'encryption_key');

-- Decrypt when needed
SELECT shared.decrypt_pii(encrypted_column, 'encryption_key');
```

### 4. **UUID v7 Generation**
Time-ordered UUIDs for better index performance:
```sql
CREATE OR REPLACE FUNCTION shared.uuid_generate_v7()
RETURNS UUID AS $$
DECLARE
    unix_ts_ms BIGINT;
    uuid_bytes BYTEA;
BEGIN
    unix_ts_ms := (EXTRACT(EPOCH FROM clock_timestamp()) * 1000)::BIGINT;
    uuid_bytes := E'\\x' || lpad(to_hex(unix_ts_ms), 12, '0') || 
                  encode(gen_random_bytes(10), 'hex');
    RETURN uuid_bytes::UUID;
END;
$$ LANGUAGE plpgsql;
```

---

## All Schemas Complete! 🎉

### Core Schemas (8/8) ✅
- ✅ `schema_shared.sql` - COMPLETE
- ✅ `schema_property_management.sql` - COMPLETE
- ✅ `schema_guest.sql` - COMPLETE
- ✅ `schema_operations.sql` - COMPLETE
- ✅ `schema_reservation.sql` - COMPLETE
- ✅ `schema_billing.sql` - COMPLETE
- ✅ `schema_compliance.sql` - COMPLETE
- ✅ `schema_channel.sql` - COMPLETE

### Optional Modules (2/2) ✅
- ✅ `schema_fb.sql` - COMPLETE
- ✅ `schema_procurement.sql` - COMPLETE

---

## Migration Strategy

### Version Control
```
migrations/
├── V1.0.0__create_shared_schema.sql
├── V1.0.1__create_property_management_schema.sql
├── V1.0.2__create_guest_schema.sql
├── V1.0.3__create_operations_schema.sql
├── V1.0.4__create_reservation_schema.sql
├── V1.0.5__create_billing_schema.sql
└── ...
```

### Tools
- **Flyway** or **Liquibase** for version control
- **pg_dump** for backups
- **pgAdmin** or **DBeaver** for management

---

## Performance Considerations

### Partitioning Strategy (Future)
High-volume tables to partition:
- `compliance.audit_log` - Partition by month
- `compliance.domain_events` - Partition by month
- `operations.service_requests` - Partition by quarter
- `guest.feedback` - Partition by quarter

### Connection Pooling
- **PgBouncer** recommended
- Pool size: 20-50 connections per application instance
- Transaction pooling mode

### Monitoring
- **pg_stat_statements** for query analysis
- **pg_stat_user_tables** for table statistics
- **pg_stat_user_indexes** for index usage

---

## Security Features

### Row-Level Security (RLS)
```sql
ALTER TABLE guest.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation ON guest.profiles
FOR ALL TO authenticated_user
USING (property_id = current_setting('app.current_property_id')::UUID);
```

### Encryption
- **At rest:** pgcrypto for PII fields
- **In transit:** SSL/TLS required
- **Passwords:** bcrypt hashing

---

## Next Steps

1. ✅ Create shared schema
2. ✅ Create property management schema
3. ✅ Create guest schema
4. ✅ Create operations schema
5. ✅ Create reservation schema
6. ✅ Create billing schema
7. ✅ Create compliance schema
8. ✅ Create F&B schema (optional)
9. ✅ Create procurement schema (optional)
10. ✅ Create channel schema
11. ⏳ Generate complete ER diagrams
12. ⏳ Create seed data scripts
13. ⏳ Set up migration framework (Flyway/Liquibase)
14. ⏳ Create partition management scripts
15. ⏳ Performance testing with sample data
16. ⏳ Deploy to development environment

---

**Status:** ✅ **10 of 10 schemas complete (100%)**
**Ready for:** Migration setup, seed data, and deployment

