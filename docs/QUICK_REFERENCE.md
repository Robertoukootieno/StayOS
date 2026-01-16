# StayOS Quick Reference Card

**Version**: 4.0.0 (After Reorganization)  
**Last Updated**: 2026-01-16

---

## 📁 Directory Structure

```
stayOS/
├── api/                      # OpenAPI specifications
├── backend/
│   ├── src/                 # Application code
│   └── database/            # Database files
│       ├── schemas/         # SQL schemas
│       ├── seeds/           # Sample data
│       └── migrations/      # DB migrations
├── docs/
│   ├── guides/              # User guides
│   ├── architecture/        # Architecture docs
│   └── planning/            # Planning docs
├── sdks/                     # Generated SDKs
└── scripts/                  # Automation scripts
```

---

## 🚀 Common Commands

### Development

```bash
# Start backend server
cd backend && npm run dev

# View API documentation
npm run api:docs

# Setup database
npm run db:setup

# Run tests
cd backend && npm test
```

### API Operations

```bash
# Validate OpenAPI spec
npm run api:validate

# Bundle OpenAPI spec
npm run api:bundle

# Lint OpenAPI spec
npm run api:lint
```

### Database Operations

```bash
# Setup database (interactive)
npm run db:setup

# Setup database (simple)
npm run db:setup:simple

# Connect to database
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev

# Run specific schema
PGPASSWORD=postgres psql -h localhost -U postgres -d stayos_dev \
  -f backend/database/schemas/schema_shared.sql
```

---

## 📂 File Locations

### API Files

| File | Location |
|------|----------|
| OpenAPI Spec | `api/openapi.yaml` |
| Bundled Spec | `api/openapi-bundled.yaml` |
| JSON Schemas | `api/schemas/` |
| Swagger UI | `api/index.html` |
| API README | `api/README.md` |

### Backend Files

| File | Location |
|------|----------|
| Server Entry | `backend/src/index.ts` |
| Express App | `backend/src/app.ts` |
| Routes | `backend/src/routes/` |
| Middleware | `backend/src/middleware/` |
| Config | `backend/src/config/` |
| Environment | `backend/.env` |

### Database Files

| File | Location |
|------|----------|
| SQL Schemas | `backend/database/schemas/` |
| Sample Data | `backend/database/seeds/sample_data.sql` |
| Migrations | `backend/database/migrations/` |
| DB README | `backend/database/README.md` |

### Documentation

| File | Location |
|------|----------|
| Main README | `README.md` |
| Migration Guide | `docs/MIGRATION_GUIDE.md` |
| Troubleshooting | `docs/TROUBLESHOOTING.md` |
| Project Structure | `docs/PROJECT_STRUCTURE.md` |
| API Quick Start | `docs/guides/API_QUICK_START.md` |
| Auth Guide | `docs/guides/AUTH_TESTING_GUIDE.md` |

---

## 🔐 Authentication

### Test Users

| Email | Password | Role | Scopes |
|-------|----------|------|--------|
| admin@stayos.com | admin123 | admin | admin:all |
| manager@stayos.com | manager123 | manager | read/write properties, reservations, guests |
| readonly@stayos.com | readonly123 | viewer | read-only access |

### Get Access Token

```bash
curl -X POST http://localhost:3000/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "password",
    "username": "admin@stayos.com",
    "password": "admin123"
  }'
```

### Use Token

```bash
TOKEN="your-token-here"

curl http://localhost:3000/v1/properties \
  -H "Authorization: Bearer $TOKEN"
```

---

## 🗄️ Database

### Connection Details

```
Host: localhost
Port: 5432
Database: stayos_dev
User: postgres
Password: postgres
```

### Connection String

```
postgresql://postgres:postgres@localhost:5432/stayos_dev
```

### Schemas

| Schema | Tables | Purpose |
|--------|--------|---------|
| shared | Common types | Shared utilities |
| property_mgmt | 8+ | Property management |
| reservation | 6+ | Bookings |
| guest | 5+ | Guest profiles |
| billing | 7+ | Payments |
| channel | 4+ | Distribution |
| compliance | 3+ | Regulatory |
| operations | 6+ | Housekeeping |
| procurement | 4+ | Purchasing |
| public | 1 | Simple properties |

---

## 🛠️ Troubleshooting

### Quick Fixes

```bash
# File not found errors
git pull origin main
npm install

# Port already in use
lsof -i :3000
kill -9 <PID>

# Database connection fails
# Check backend/.env file

# npm scripts not working
git checkout origin/main -- package.json
npm install

# Complete reset (nuclear option)
git clean -fdx
git reset --hard origin/main
npm install
cd backend && npm install
```

### Common Issues

| Error | Solution |
|-------|----------|
| "Cannot find module 'docs/api/...'" | Update to `api/...` |
| "ENOENT: docs/database/..." | Update to `backend/database/...` |
| "Merge conflict" | `git checkout --theirs <file>` |
| "Port in use" | `kill -9 $(lsof -t -i:3000)` |

---

## 📊 Project Stats

| Metric | Count |
|--------|-------|
| API Endpoints | 202+ |
| Database Tables | 42 |
| Database Schemas | 10 |
| SQL Schema Files | 11 |
| OpenAPI Schemas | 50+ |
| Documentation Files | 20+ |

---

## 🔗 Important Links

### Documentation

- [Main README](../README.md)
- [Migration Guide](MIGRATION_GUIDE.md)
- [Troubleshooting](TROUBLESHOOTING.md)
- [Project Structure](PROJECT_STRUCTURE.md)
- [Visual Diagrams](architecture/VISUAL_DIAGRAMS.md)

### API

- [API README](../api/README.md)
- [OpenAPI Spec](../api/openapi.yaml)
- Swagger UI: http://localhost:3000 (when running `npm run api:docs`)

### Database

- [Database README](../backend/database/README.md)
- [Database Schemas](../backend/database/schemas/)
- [Sample Data](../backend/database/seeds/sample_data.sql)

---

## 💡 Tips

### Development Workflow

1. Start backend: `cd backend && npm run dev`
2. Open API docs: `npm run api:docs` (in another terminal)
3. Test endpoints with Swagger UI or curl
4. Check logs: `tail -f backend/logs/app.log`

### Before Committing

```bash
# Validate API spec
npm run api:validate

# Run tests
cd backend && npm test

# Check for TypeScript errors
cd backend && npm run build
```

### Path Migration

| Old | New |
|-----|-----|
| `docs/api/*` | `api/*` |
| `docs/database/*` | `backend/database/schemas/*` |
| `docs/database/sample_data.sql` | `backend/database/seeds/sample_data.sql` |
| `NEXT_STEPS_ROADMAP.md` | `docs/planning/NEXT_STEPS_ROADMAP.md` |

---

## 🆘 Getting Help

1. Check [Troubleshooting Guide](TROUBLESHOOTING.md)
2. Search documentation
3. Ask in #stayos-dev Slack
4. Email devops@stayos.com

---

**Print this page for quick reference!** 📄

