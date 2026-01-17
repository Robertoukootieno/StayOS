# Database Migrations - Restaurant & Bar Extension

This directory contains database migration scripts to extend StayOS to support standalone restaurants and bars.

---

## 📋 Migration Overview

| Migration | Description | Dependencies |
|-----------|-------------|--------------|
| `001_add_restaurant_property_types.sql` | Adds restaurant/bar property types and venue-specific fields | None |
| `002_create_tables_schema.sql` | Creates table management schema for seating | None |
| `003_create_table_reservations_schema.sql` | Creates table reservation and waitlist system | 002 |
| `004_enhance_fb_orders.sql` | Enhances F&B orders for restaurant operations | 002 |

---

## 🚀 Running Migrations

### **Option 1: Run All Migrations (Recommended)**

```bash
# Navigate to migrations directory
cd backend/database/migrations

# Run all migrations in order
psql -U postgres -d stayos_dev -f run_all_migrations.sql
```

### **Option 2: Run Individual Migrations**

```bash
# Run migrations one by one
psql -U postgres -d stayos_dev -f 001_add_restaurant_property_types.sql
psql -U postgres -d stayos_dev -f 002_create_tables_schema.sql
psql -U postgres -d stayos_dev -f 003_create_table_reservations_schema.sql
psql -U postgres -d stayos_dev -f 004_enhance_fb_orders.sql
```

### **Option 3: Using Docker**

```bash
# If using Docker Compose
docker-compose exec postgres psql -U postgres -d stayos_dev -f /migrations/run_all_migrations.sql
```

---

## 📊 What Gets Created

### **New Property Types**
- `RESTAURANT` - Full-service restaurant
- `BAR` - Standalone bar/pub
- `CAFE` - Coffee shop/cafe
- `BISTRO` - Small restaurant
- `PUB` - Traditional pub
- `FOOD_TRUCK` - Mobile food service
- `NIGHTCLUB` - Nightclub with food service

### **New Schemas**
1. **`tables`** - Table and seating management
   - `floor_sections` - Floor sections/areas
   - `tables` - Individual tables
   - `table_combinations` - Joinable table groups

2. **`table_reservations`** - Reservation system
   - `reservations` - Table reservations
   - `waitlist` - Walk-in waitlist

### **Enhanced Tables**
- `property_mgmt.properties` - Added venue-specific fields
- `fb.fb_orders` - Added table assignment and restaurant features
- `fb.menu_items` - Added venue-specific menu features

---

## 🔍 Verification

After running migrations, verify the changes:

```sql
-- Check new property types
SELECT enumlabel 
FROM pg_enum 
WHERE enumtypid = 'property_mgmt.property_type'::regtype
ORDER BY enumlabel;

-- Check new schemas
SELECT schema_name 
FROM information_schema.schemata 
WHERE schema_name IN ('tables', 'table_reservations');

-- Check new tables
SELECT table_schema, table_name 
FROM information_schema.tables 
WHERE table_schema IN ('tables', 'table_reservations')
ORDER BY table_schema, table_name;

-- Check migration history
SELECT * FROM public.schema_migrations ORDER BY executed_at DESC;
```

---

## 🌱 Loading Sample Data

After migrations, load sample data:

```bash
# Load sample restaurants
psql -U postgres -d stayos_dev -f ../seeds/sample_restaurants.sql

# Load sample tables
psql -U postgres -d stayos_dev -f ../seeds/sample_tables.sql
```

---

## 🔄 Rollback (If Needed)

To rollback migrations, run the rollback script:

```bash
psql -U postgres -d stayos_dev -f rollback_all_migrations.sql
```

**⚠️ Warning**: Rollback will delete all data in the new schemas!

---

## 📝 Migration Tracking

Migrations are tracked in the `public.schema_migrations` table:

```sql
-- View migration history
SELECT 
    migration_name,
    executed_at,
    execution_time_ms,
    success,
    error_message
FROM public.schema_migrations
ORDER BY executed_at DESC;
```

---

## 🛠️ Troubleshooting

### **Error: "type already exists"**
This is normal if you're re-running migrations. The scripts use `IF NOT EXISTS` checks.

### **Error: "relation already exists"**
Same as above - migrations are idempotent and safe to re-run.

### **Error: "permission denied"**
Ensure you're running as a user with CREATE privileges:
```bash
psql -U postgres -d stayos_dev
```

### **Error: "database does not exist"**
Create the database first:
```bash
createdb -U postgres stayos_dev
```

---

## 📚 Next Steps

After running migrations:

1. ✅ Verify migrations completed successfully
2. ✅ Load sample data
3. ✅ Update API routes to use new schemas
4. ✅ Write tests for new functionality
5. ✅ Update API documentation

---

## 🔗 Related Documentation

- [Architecture Overview](../../../docs/architecture/RESTAURANT_BAR_EXTENSION.md)
- [Implementation Plan](../../../docs/architecture/IMPLEMENTATION_PLAN.md)
- [Task Breakdown](../../../docs/architecture/TASK_BREAKDOWN.md)
- [Database Schema Guide](../../../docs/guides/database/DATABASE_SCHEMA_SUMMARY.md)

---

**Questions?** Contact the StayOS development team.

