# Quick Database Setup

## ⚡ 5-Minute Setup

### Option 1: Automated Setup (Recommended)

```bash
# Run the setup script
./scripts/setup-database.sh
```

That's it! The script handles everything.

---

### Option 2: Manual Setup

```bash
# 1. Create database
createdb stayos_dev

# 2. Run foundation schema
psql -d stayos_dev -f docs/database/schema_shared.sql

# 3. Run core schemas
psql -d stayos_dev -f docs/database/schema_property_management.sql
psql -d stayos_dev -f docs/database/schema_reservation.sql
psql -d stayos_dev -f docs/database/schema_guest.sql
psql -d stayos_dev -f docs/database/schema_billing.sql
psql -d stayos_dev -f docs/database/schema_operations.sql
psql -d stayos_dev -f docs/database/schema_channel.sql
psql -d stayos_dev -f docs/database/schema_compliance.sql
psql -d stayos_dev -f docs/database/schema_procurement.sql

# 4. Optional: Add F&B module
psql -d stayos_dev -f docs/database/schema_fb.sql

# 5. Add sample data
psql -d stayos_dev -f docs/database/sample_data.sql
```

---

### Option 3: One-Liner

```bash
createdb stayos_dev && \
psql -d stayos_dev -f docs/database/schema_shared.sql && \
psql -d stayos_dev -f docs/database/schema_property_management.sql && \
psql -d stayos_dev -f docs/database/schema_reservation.sql && \
psql -d stayos_dev -f docs/database/schema_guest.sql && \
psql -d stayos_dev -f docs/database/schema_billing.sql && \
psql -d stayos_dev -f docs/database/schema_operations.sql && \
psql -d stayos_dev -f docs/database/schema_channel.sql && \
psql -d stayos_dev -f docs/database/schema_compliance.sql && \
psql -d stayos_dev -f docs/database/schema_procurement.sql && \
psql -d stayos_dev -f docs/database/sample_data.sql && \
echo "✅ Database setup complete!"
```

---

## 🔧 Configure Backend

Edit `backend/.env`:

```env
DATABASE_URL=postgresql://localhost:5432/stayos_dev
DB_HOST=localhost
DB_PORT=5432
DB_NAME=stayos_dev
DB_USER=postgres
DB_PASSWORD=
```

---

## ✅ Verify Setup

```bash
# Check tables
psql -d stayos_dev -c "\dt"

# Check sample data
psql -d stayos_dev -c "SELECT name, classification FROM properties;"

# Test UUID v7
psql -d stayos_dev -c "SELECT uuid_generate_v7();"
```

---

## 🚀 Start Backend

```bash
cd backend
npm run dev
```

Test:
```bash
curl http://localhost:8080/health
curl http://localhost:8080/v1/properties
```

---

## 🔄 Reset Database

```bash
dropdb stayos_dev && ./scripts/setup-database.sh
```

---

## 📚 Full Documentation

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed instructions and troubleshooting.

