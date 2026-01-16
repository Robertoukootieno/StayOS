# StayOS Database Schema Documentation

**Version:** 1.0
**Date:** 2025-12-21
**Database:** PostgreSQL 15+
**Status:** ✅ **ALL SCHEMAS COMPLETE (10/10)**

---

## 📁 Documentation Structure

```
docs/database/
├── README.md                              # This file - Overview and quick start
├── DATABASE_SCHEMA_OVERVIEW.md            # Design principles and strategy
├── DATABASE_SCHEMA_SUMMARY.md             # Complete summary with statistics
├── schema_shared.sql                      # Foundation schema (types, functions, users)
├── schema_property_management.sql         # Property Management Context
├── schema_guest.sql                       # Guest Context (profiles, feedback, stays)
├── schema_operations.sql                  # Operations Context (staff, requests, incidents, training)
├── schema_reservation.sql                 # ✅ Reservation Context
├── schema_billing.sql                     # ✅ Billing & Payments Context
├── schema_fb.sql                          # ✅ Food & Beverage Context (Optional)
├── schema_procurement.sql                 # ✅ Procurement Context (Optional)
├── schema_compliance.sql                  # ✅ Compliance & Audit Context
├── schema_channel.sql                     # ✅ Channel Management Context
└── migrations/                            # [TO BE CREATED] Versioned migration scripts
```

---

## 🎯 Quick Start

### 1. Prerequisites

- PostgreSQL 15 or higher
- Extensions: `uuid-ossp`, `pgcrypto`, `pg_trgm`, `btree_gin`
- Database user with CREATE SCHEMA privileges

### 2. Installation Order

Execute SQL files in this exact order:

```bash
# 1. Foundation
psql -U postgres -d stayos_db -f schema_shared.sql

# 2. Core contexts
psql -U postgres -d stayos_db -f schema_property_management.sql
psql -U postgres -d stayos_db -f schema_guest.sql
psql -U postgres -d stayos_db -f schema_operations.sql

# 3. Remaining contexts
psql -U postgres -d stayos_db -f schema_reservation.sql
psql -U postgres -d stayos_db -f schema_billing.sql
psql -U postgres -d stayos_db -f schema_compliance.sql
psql -U postgres -d stayos_db -f schema_channel.sql

# 4. Optional modules
psql -U postgres -d stayos_db -f schema_fb.sql
psql -U postgres -d stayos_db -f schema_procurement.sql
```

### 3. Verify Installation

```sql
-- List all schemas
SELECT schema_name FROM information_schema.schemata 
WHERE schema_name LIKE '%' 
ORDER BY schema_name;

-- Count tables per schema
SELECT 
    schemaname, 
    COUNT(*) as table_count 
FROM pg_tables 
WHERE schemaname IN ('shared', 'property_mgmt', 'guest', 'operations')
GROUP BY schemaname;

-- Verify extensions
SELECT * FROM pg_extension;
```

---

## 📊 Schema Overview

### ✅ All Schemas Complete (10/10)

#### 1. **shared** - Foundation
- **Purpose:** Common types, functions, reference data
- **Tables:** 5 (users, countries, currencies, timezones, languages)
- **Functions:** 6 (UUID v7, encryption, audit triggers)
- **Custom Types:** 5 (money, address, contact_info, status, priority, severity)

#### 2. **property_mgmt** - Property Management Context
- **Purpose:** Properties, inventory units, pricing strategies
- **Tables:** 5 (properties, inventory_units, amenities, rate_strategies, photos)
- **Aggregates:** Property, InventoryUnit, RateStrategy
- **Key Features:** Dynamic pricing, seasonal adjustments, occupancy modifiers

#### 3. **guest** - Guest Context
- **Purpose:** Guest profiles, loyalty, feedback, stays
- **Tables:** 4 (profiles, loyalty_memberships, stays, feedback)
- **Aggregates:** GuestProfile, Stay, GuestFeedback
- **Key Features:** NPS tracking, sentiment analysis, GDPR compliance, review management

#### 4. **operations** - Operations Context
- **Purpose:** Day-to-day operations, staff, training, incidents
- **Tables:** 9 (staff, staff_shifts, service_requests, incident_reports, corrective_actions, training_modules, training_enrollments, housekeeping_tasks, maintenance_requests)
- **Aggregates:** ServiceRequest, IncidentReport, TrainingModule, HousekeepingTask, MaintenanceRequest, StaffShift
- **Key Features:** SLA tracking, certification management, safety compliance

5. **reservation** - Reservation Context ✅
   - **Tables:** 4 (cancellation_policies, reservations, reservation_line_items, quotes)
   - **Aggregates:** Reservation, Quote
   - **Key Features:** Cancellation policies, quote management, occupancy tracking

6. **billing** - Billing & Payments Context ✅
   - **Tables:** 6 (folios, folio_line_items, payments, refunds, chargebacks, invoices)
   - **Aggregates:** Folio, Payment
   - **Key Features:** Payment processing, refund workflow, chargeback management

7. **compliance** - Compliance & Audit Context ✅
   - **Tables:** 4 (audit_log, domain_events, compliance_reports, data_retention_policies)
   - **Aggregates:** AuditLog, DomainEvent
   - **Key Features:** Partitioned audit log, event sourcing, GDPR compliance

8. **channel** - Channel Management Context ✅
   - **Tables:** 4 (channel_connections, channel_mappings, channel_bookings, sync_log)
   - **Aggregates:** ChannelConnection, ChannelMapping
   - **Key Features:** OTA integrations, rate/inventory sync, booking import

9. **fb** - Food & Beverage Context (Optional) ✅
   - **Tables:** 6 (menu_items, fb_orders, fb_order_items, inventory_items, stock_batches, waste_records)
   - **Aggregates:** FoodBeverageOrder, MenuItem, InventoryItem
   - **Key Features:** Menu management, room service, FIFO inventory tracking

10. **procurement** - Procurement Context (Optional) ✅
    - **Tables:** 6 (suppliers, supplier_certifications, purchase_orders, po_line_items, goods_receipts, goods_receipt_line_items)
    - **Aggregates:** PurchaseOrder, Supplier
    - **Key Features:** Supplier management, PO approval workflow, goods receipt

---

## 🔑 Key Design Decisions

### 1. **Bounded Context Isolation**
- Each context has its own PostgreSQL schema
- No foreign keys across contexts (loose coupling)
- Cross-context references use UUIDs only

### 2. **UUID v7 for Primary Keys**
- Time-ordered UUIDs for better index performance
- Custom function: `shared.uuid_generate_v7()`
- Better than UUID v4 for sequential inserts

### 3. **Audit-First Design**
- All tables include: `created_at`, `updated_at`, `created_by`, `updated_by`, `deleted_at`, `version`
- Soft deletes (never hard delete)
- Optimistic locking with version column

### 4. **JSONB for Flexibility**
- Guest preferences
- Feedback category ratings
- Training assessment attempts
- Incident involved parties
- Rate strategy modifiers

### 5. **Generated Columns**
- Auto-calculated fields (e.g., `sla_compliant`, `overtime_minutes`, `full_name`)
- Reduces application logic
- Always consistent

### 6. **Strategic Indexing**
- 80+ indexes across 23 tables
- Composite indexes for common queries
- Partial indexes for active records
- GIN indexes for JSONB and arrays

---

## 📈 Statistics

| Metric | Count |
|--------|-------|
| **Schemas** | 10 (ALL COMPLETE) |
| **Tables** | 59 |
| **Custom Types/Enums** | 50+ |
| **Indexes** | 150+ |
| **Triggers** | 30+ |
| **Views** | 10+ |
| **Functions** | 7 |
| **Estimated Rows (Year 1)** | ~10M |

---

## 🔒 Security Features

### Row-Level Security (RLS)
```sql
-- Enable RLS on all tables
ALTER TABLE guest.profiles ENABLE ROW LEVEL SECURITY;

-- Tenant isolation policy
CREATE POLICY tenant_isolation ON guest.profiles
FOR ALL TO authenticated_user
USING (property_id = current_setting('app.current_property_id')::UUID);
```

### PII Encryption
```sql
-- Encrypt sensitive data
UPDATE guest.profiles 
SET id_number_encrypted = shared.encrypt_pii(id_number, 'encryption_key');

-- Decrypt when needed
SELECT shared.decrypt_pii(id_number_encrypted, 'encryption_key') AS id_number;
```

---

## 🚀 Next Steps

1. ✅ Create shared schema
2. ✅ Create property management schema
3. ✅ Create guest schema
4. ✅ Create operations schema
5. ✅ Create reservation schema
6. ✅ Create billing schema
7. ✅ Create compliance schema
8. ✅ Create channel schema
9. ✅ Create F&B schema (optional)
10. ✅ Create procurement schema (optional)
11. ⏳ Set up migration framework (Flyway/Liquibase)
12. ⏳ Create partition management scripts (audit_log, domain_events)
13. ⏳ Create seed data scripts
14. ⏳ Generate complete ER diagrams
15. ⏳ Performance testing and optimization
16. ⏳ Deploy to development environment

---

## 📚 Additional Resources

- **DATABASE_SCHEMA_OVERVIEW.md** - Design principles, patterns, backup strategy
- **DATABASE_SCHEMA_SUMMARY.md** - Detailed statistics, features, migration strategy
- **CORE_DOMAIN_MODEL.md** - Domain model that drives schema design
- **ADR.md** - Architecture decisions including database choices

---

**For questions or issues, refer to the comprehensive documentation files listed above.**

