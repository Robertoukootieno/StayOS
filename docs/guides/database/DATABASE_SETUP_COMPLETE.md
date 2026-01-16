# ✅ PostgreSQL Database Setup - Ready to Go!

**Date:** December 26, 2025  
**PostgreSQL Version:** 16.11 ✅  
**Status:** Installed and Running ✅

---

## 🎉 Good News!

PostgreSQL is **already installed and running** on your system! You're ready to set up the StayOS database.

---

## 🚀 Quick Setup (Choose One Method)

### Method 1: Interactive Setup Script (Recommended)

```bash
./scripts/setup-database-simple.sh
```

This script will:
1. ✅ Check PostgreSQL installation (already done!)
2. ✅ Create `stayos_dev` database
3. ✅ Run all schemas in correct order
4. ✅ Ask if you want F&B module
5. ✅ Ask if you want sample data
6. ✅ Verify everything works

**Time:** ~2 minutes

---

### Method 2: Manual Commands

```bash
# Create database
createdb stayos_dev

# Run foundation schema (required)
psql -d stayos_dev -f docs/database/schema_shared.sql

# Run core schemas (required)
psql -d stayos_dev -f docs/database/schema_property_management.sql
psql -d stayos_dev -f docs/database/schema_reservation.sql
psql -d stayos_dev -f docs/database/schema_guest.sql
psql -d stayos_dev -f docs/database/schema_billing.sql
psql -d stayos_dev -f docs/database/schema_operations.sql
psql -d stayos_dev -f docs/database/schema_channel.sql
psql -d stayos_dev -f docs/database/schema_compliance.sql
psql -d stayos_dev -f docs/database/schema_procurement.sql

# Optional: Add F&B (POS) module
psql -d stayos_dev -f docs/database/schema_fb.sql

# Add sample data
psql -d stayos_dev -f docs/database/sample_data.sql
```

**Time:** ~3 minutes

---

### Method 3: One-Liner (Fast!)

```bash
createdb stayos_dev && \
for schema in schema_shared schema_property_management schema_reservation schema_guest schema_billing schema_operations schema_channel schema_compliance schema_procurement; do \
  psql -d stayos_dev -f docs/database/${schema}.sql; \
done && \
psql -d stayos_dev -f docs/database/sample_data.sql && \
echo "✅ Database ready!"
```

**Time:** ~1 minute

---

## 📊 What You'll Get

### Database Structure

After setup, you'll have:

#### Foundation (schema_shared.sql)
- ✅ UUID v7 generation function
- ✅ Audit triggers (created_at, updated_at, deleted_at)
- ✅ Shared types and enums
- ✅ Utility functions

#### Core Tables (40+ tables)
- ✅ **Properties** (3 tables) - Property management
- ✅ **Reservations** (5 tables) - Booking management
- ✅ **Guests** (4 tables) - Guest profiles
- ✅ **Billing** (6 tables) - Invoicing and payments
- ✅ **Operations** (8 tables) - Housekeeping, maintenance
- ✅ **Channels** (5 tables) - OTA integrations
- ✅ **Compliance** (4 tables) - GDPR, audit logs
- ✅ **Procurement** (5 tables) - Supplier management

#### Optional: F&B Module (6 tables)
- ✅ Menu items
- ✅ Orders and order items
- ✅ Inventory tracking
- ✅ Waste management

#### Sample Data
- ✅ 5 sample properties (hotels, resorts, boutique, lodge, hostel)
- ✅ Contact information for each property
- ✅ Amenities (WiFi, parking, pool, gym, etc.)

---

## 🔧 Configure Backend

After database setup, update `backend/.env`:

```env
# Database Configuration
DATABASE_URL=postgresql://localhost:5432/stayos_dev
DB_HOST=localhost
DB_PORT=5432
DB_NAME=stayos_dev
DB_USER=robert
DB_PASSWORD=
```

**Note:** Since PostgreSQL is running locally, you likely don't need a password for the `robert` user.

---

## ✅ Verify Setup

After running the setup, verify everything works:

```bash
# List all tables
psql -d stayos_dev -c "\dt"

# Check sample properties
psql -d stayos_dev -c "SELECT name, classification, star_rating FROM properties;"

# Test UUID v7 generation
psql -d stayos_dev -c "SELECT uuid_generate_v7();"

# Count tables
psql -d stayos_dev -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public';"
```

Expected output:
- ✅ 40+ tables listed
- ✅ 5 properties shown
- ✅ UUID v7 generated successfully

---

## 🚀 Start the Backend

Once database is set up:

```bash
# Start development server
cd backend
npm run dev
```

The server will start on http://localhost:8080

---

## 🧪 Test the API

```bash
# Health check
curl http://localhost:8080/health

# Get all properties
curl http://localhost:8080/v1/properties

# Get specific property
curl http://localhost:8080/v1/properties/{id}
```

---

## 📚 Documentation

- **[QUICK_SETUP.md](QUICK_SETUP.md)** - Quick reference
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Detailed guide with troubleshooting
- **[README.md](README.md)** - Database schema documentation

---

## 🔄 Reset Database

If you need to start over:

```bash
dropdb stayos_dev
./scripts/setup-database-simple.sh
```

---

## 🎯 Next Steps

1. **Run the setup script**
   ```bash
   ./scripts/setup-database-simple.sh
   ```

2. **Configure backend**
   ```bash
   cd backend
   nano .env  # Update DATABASE_URL
   ```

3. **Start development**
   ```bash
   npm run dev
   ```

4. **Test the API**
   ```bash
   curl http://localhost:8080/v1/properties
   ```

5. **View in Swagger UI**
   ```bash
   npm run api:docs
   # Open http://localhost:3000
   ```

---

**You're all set! PostgreSQL is ready, now just run the setup script!** 🚀

