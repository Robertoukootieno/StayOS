# StayOS Database

This directory contains all database-related files for the StayOS backend.

## 📁 Directory Structure

```
backend/database/
├── schemas/                          # SQL schema definitions
│   ├── schema_shared.sql            # Shared types and functions
│   ├── schema_property_management.sql
│   ├── schema_reservation.sql
│   ├── schema_guest.sql
│   ├── schema_billing.sql
│   ├── schema_channel.sql
│   ├── schema_compliance.sql
│   ├── schema_operations.sql
│   ├── schema_procurement.sql
│   ├── schema_fb.sql                # Food & Beverage (optional)
│   └── create_simple_properties.sql # Simplified properties table
├── seeds/                            # Sample/seed data
│   └── sample_data.sql              # Development sample data
└── migrations/                       # Database migrations (future)
    └── .gitkeep
```

## 🗄️ Database Information

- **Database:** PostgreSQL 16.11+
- **Database Name:** `stayos_dev` (development)
- **Schemas:** 10 (shared, property_mgmt, reservation, guest, billing, channel, compliance, operations, procurement, public)
- **Tables:** 42+
- **Connection:** localhost:5432

## 🚀 Quick Setup

### 1. Install PostgreSQL

```bash
# Ubuntu/Debian
sudo apt install postgresql postgresql-contrib

# macOS
brew install postgresql@16
```

### 2. Set Password for postgres User

```bash
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'postgres';"
```

### 3. Run Setup Script

```bash
# From project root
./scripts/setup-database.sh
```

Or manually:

```bash
# Create database
PGPASSWORD=postgres psql -h localhost -U postgres -c "CREATE DATABASE stayos_dev;"

# Run schemas in order
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev -f backend/database/schemas/schema_shared.sql
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev -f backend/database/schemas/schema_property_management.sql
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev -f backend/database/schemas/schema_reservation.sql
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev -f backend/database/schemas/schema_guest.sql
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev -f backend/database/schemas/schema_billing.sql
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev -f backend/database/schemas/schema_channel.sql
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev -f backend/database/schemas/schema_compliance.sql
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev -f backend/database/schemas/schema_operations.sql
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev -f backend/database/schemas/schema_procurement.sql

# Create simple properties table for API
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev -f backend/database/schemas/create_simple_properties.sql

# Load sample data
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev -f backend/database/seeds/sample_data.sql
```

## 🔧 Configuration

Update `backend/.env` with database credentials:

```env
DATABASE_URL=postgresql://localhost:5432/stayos_dev
DB_HOST=localhost
DB_PORT=5432
DB_NAME=stayos_dev
DB_USER=postgres
DB_PASSWORD=postgres
```

## 📊 Schema Overview

### Core Schemas

1. **shared** - Common types, functions, and utilities
   - UUID v7 generation
   - Address and contact types
   - Status enums

2. **property_mgmt** - Property management
   - Properties
   - Amenities
   - Inventory units
   - Photos
   - Rate strategies

3. **reservation** - Booking and reservations
   - Reservations
   - Booking sources
   - Cancellations
   - Modifications

4. **guest** - Guest management
   - Guest profiles
   - Preferences
   - Loyalty programs
   - Communication history

5. **billing** - Financial operations
   - Invoices
   - Payments
   - Refunds
   - Transactions

6. **channel** - Distribution channels
   - Channel configurations
   - Rate mappings
   - Inventory sync

7. **compliance** - Regulatory compliance
   - Audit logs
   - Data retention
   - Privacy settings

8. **operations** - Daily operations
   - Housekeeping
   - Maintenance
   - Work orders

9. **procurement** - Purchasing
   - Suppliers
   - Purchase orders
   - Inventory management

10. **public** - Simple API tables
    - Properties (simplified for API)

## 🌱 Sample Data

The `seeds/sample_data.sql` file contains:
- 5 sample properties
- Various property types (Hotel, Resort, Boutique, Lodge, Apartment)
- Different star ratings and locations

## 🔍 Useful Commands

```bash
# Connect to database
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev

# List all schemas
\dn

# List tables in a schema
\dt property_mgmt.*

# Describe a table
\d property_mgmt.properties

# Count records
SELECT COUNT(*) FROM properties;

# View sample properties
SELECT id, name, classification, star_rating, status FROM properties;
```

## 🧪 Testing

```bash
# Verify database connection
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev -c "SELECT version();"

# Check table count
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema NOT IN ('pg_catalog', 'information_schema');"

# Verify sample data
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev -c "SELECT COUNT(*) FROM properties;"
```

## 📚 Related Documentation

- [Database Setup Guide](../../docs/guides/database/SETUP_GUIDE.md)
- [Quick Setup](../../docs/guides/database/QUICK_SETUP.md)
- [Schema Overview](../../docs/guides/database/DATABASE_SCHEMA_OVERVIEW.md)

## 🔄 Migrations (Future)

Database migrations will be managed using a migration tool (e.g., TypeORM migrations, Flyway, or Liquibase).

The `migrations/` directory is reserved for future use.

