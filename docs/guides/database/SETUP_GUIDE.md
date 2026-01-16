# PostgreSQL Database Setup Guide

This guide will walk you through setting up the StayOS PostgreSQL database.

## 📋 Prerequisites

### 1. Install PostgreSQL

#### Ubuntu/Debian
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

#### macOS
```bash
brew install postgresql@15
brew services start postgresql@15
```

#### Windows
Download and install from: https://www.postgresql.org/download/windows/

### 2. Verify Installation

```bash
psql --version
# Should output: psql (PostgreSQL) 15.x or higher
```

### 3. Check PostgreSQL is Running

```bash
# Linux
sudo systemctl status postgresql

# macOS
brew services list | grep postgresql

# All platforms
pg_isready
```

## 🚀 Quick Setup (Automated)

Use the automated setup script:

```bash
# From project root
./scripts/setup-database.sh
```

This script will:
- ✅ Check PostgreSQL installation
- ✅ Create the database
- ✅ Run all schemas in correct order
- ✅ Optionally install F&B module

## 🔧 Manual Setup

If you prefer to set up manually:

### Step 1: Create Database

```bash
createdb stayos_dev
```

Or using psql:
```bash
psql -U postgres
CREATE DATABASE stayos_dev;
\q
```

### Step 2: Run Foundation Schema

```bash
psql -d stayos_dev -f docs/database/schema_shared.sql
```

This creates:
- UUID v7 generation function
- Audit trigger functions
- Shared utility functions
- Base tables and types

### Step 3: Run Domain Schemas

Run these in order:

```bash
# Core modules (required)
psql -d stayos_dev -f docs/database/schema_property_management.sql
psql -d stayos_dev -f docs/database/schema_reservations.sql
psql -d stayos_dev -f docs/database/schema_guests.sql
psql -d stayos_dev -f docs/database/schema_billing.sql
psql -d stayos_dev -f docs/database/schema_inventory.sql
psql -d stayos_dev -f docs/database/schema_operations.sql
psql -d stayos_dev -f docs/database/schema_channels.sql
psql -d stayos_dev -f docs/database/schema_rates.sql
psql -d stayos_dev -f docs/database/schema_feedback.sql
psql -d stayos_dev -f docs/database/schema_compliance.sql
psql -d stayos_dev -f docs/database/schema_procurement.sql

# Optional modules
psql -d stayos_dev -f docs/database/schema_fb.sql  # Food & Beverage (POS)
```

### Step 4: Add Sample Data

```bash
psql -d stayos_dev -f docs/database/sample_data.sql
```

This inserts:
- 5 sample properties
- Contact information
- Amenities

### Step 5: Verify Setup

```bash
psql -d stayos_dev -c "\dt"
```

You should see all tables listed.

## 🔐 Database Configuration

### Create Database User (Optional)

For production or team development:

```bash
psql -U postgres
CREATE USER stayos_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE stayos_dev TO stayos_user;
\q
```

### Update Backend Configuration

Edit `backend/.env`:

```env
# Database Configuration
DATABASE_URL=postgresql://localhost:5432/stayos_dev
DB_HOST=localhost
DB_PORT=5432
DB_NAME=stayos_dev
DB_USER=postgres
DB_PASSWORD=your_password

# Or use connection string
DATABASE_URL=postgresql://stayos_user:your_password@localhost:5432/stayos_dev
```

## 📊 Database Structure

After setup, you'll have:

### Foundation (schema_shared.sql)
- UUID v7 generation
- Audit triggers
- Shared types and enums

### Core Tables (59 total)
- **Properties**: 3 tables
- **Reservations**: 5 tables
- **Guests**: 4 tables
- **Billing**: 6 tables
- **Inventory**: 4 tables
- **Operations**: 8 tables
- **Channels**: 5 tables
- **Rates**: 4 tables
- **Feedback**: 3 tables
- **Compliance**: 4 tables
- **Procurement**: 5 tables
- **F&B** (optional): 6 tables

## 🧪 Testing the Database

### Test Connection

```bash
psql -d stayos_dev -c "SELECT version();"
```

### Count Tables

```bash
psql -d stayos_dev -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public';"
```

### View Sample Properties

```bash
psql -d stayos_dev -c "SELECT id, name, classification, star_rating FROM properties;"
```

### Test UUID v7 Generation

```bash
psql -d stayos_dev -c "SELECT uuid_generate_v7();"
```

## 🔄 Reset Database

To start fresh:

```bash
# Drop and recreate
dropdb stayos_dev
createdb stayos_dev

# Re-run setup script
./scripts/setup-database.sh
```

## 🐛 Troubleshooting

### PostgreSQL Not Running

```bash
# Linux
sudo systemctl start postgresql

# macOS
brew services start postgresql@15
```

### Permission Denied

```bash
# Switch to postgres user (Linux)
sudo -u postgres psql

# Or grant permissions
sudo -u postgres psql -c "ALTER USER your_username WITH SUPERUSER;"
```

### Connection Refused

Check PostgreSQL is listening:
```bash
sudo netstat -plunt | grep postgres
```

Edit `postgresql.conf` to listen on all interfaces:
```
listen_addresses = '*'
```

### Database Already Exists

```bash
dropdb stayos_dev
createdb stayos_dev
```

## 📚 Next Steps

After database setup:

1. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Test API**
   ```bash
   curl http://localhost:8080/health
   curl http://localhost:8080/v1/properties
   ```

3. **View in Swagger UI**
   ```bash
   npm run api:docs
   # Open http://localhost:3000
   ```

## 🔗 Resources

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [TypeORM Documentation](https://typeorm.io/)
- [Database Schema Files](./README.md)

---

**Need help?** Check the [main README](../../README.md) or open an issue.

