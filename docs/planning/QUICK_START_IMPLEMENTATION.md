# StayOS - Quick Start Implementation Guide

**Goal:** Get your first working API endpoint running in 1-2 days

---

## 🎯 Option 1: Node.js/TypeScript (Recommended)

### Step 1: Create Backend Project (15 minutes)

```bash
# Create backend directory
mkdir backend
cd backend

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express typescript @types/node @types/express
npm install pg dotenv cors helmet
npm install -D ts-node nodemon @types/cors @types/helmet

# Initialize TypeScript
npx tsc --init
```

### Step 2: Configure TypeScript

```json
// backend/tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

### Step 3: Create Basic Server (30 minutes)

```typescript
// backend/src/index.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { Pool } from 'pg';

const app = express();
const PORT = process.env.PORT || 8080;

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/stayos_dev'
});

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'StayOS API' });
});

// First endpoint: List properties
app.get('/v1/properties', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, name, classification, star_rating, timezone, status
      FROM properties
      WHERE deleted_at IS NULL
      ORDER BY created_at DESC
      LIMIT 20
    `);
    
    res.json({
      data: result.rows,
      pagination: {
        total: result.rowCount,
        page: 1,
        pageSize: 20
      }
    });
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 StayOS API running on http://localhost:${PORT}`);
  console.log(`📖 Health check: http://localhost:${PORT}/health`);
  console.log(`🏨 Properties: http://localhost:${PORT}/v1/properties`);
});
```

### Step 4: Set Up Database (30 minutes)

```bash
# Install PostgreSQL (if not installed)
# macOS: brew install postgresql@15
# Ubuntu: sudo apt install postgresql-15
# Windows: Download from postgresql.org

# Create database
createdb stayos_dev

# Run schemas
cd ..  # Back to project root
psql -d stayos_dev -f docs/database/schema_shared.sql
psql -d stayos_dev -f docs/database/schema_property_management.sql

# Create test data
psql -d stayos_dev << EOF
INSERT INTO properties (id, name, classification, star_rating, timezone, status)
VALUES 
  (gen_uuid_v7(), 'Grand Plaza Hotel', 'HOTEL', 4.5, 'America/New_York', 'ACTIVE'),
  (gen_uuid_v7(), 'Sunset Resort', 'RESORT', 5.0, 'America/Los_Angeles', 'ACTIVE'),
  (gen_uuid_v7(), 'City Hostel', 'HOSTEL', 3.0, 'Europe/London', 'ACTIVE');
EOF
```

### Step 5: Run & Test (5 minutes)

```bash
# Create .env file
cat > backend/.env << EOF
DATABASE_URL=postgresql://localhost:5432/stayos_dev
PORT=8080
NODE_ENV=development
EOF

# Add scripts to package.json
cat > backend/package.json << EOF
{
  "name": "stayos-backend",
  "version": "1.0.0",
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
EOF

# Start server
npm run dev

# Test in another terminal
curl http://localhost:8080/health
curl http://localhost:8080/v1/properties
```

### Step 6: Update Swagger UI to Use Local Backend (5 minutes)

```bash
# Update .env in docs/api
cat > docs/api/.env << EOF
USE_MOCK_AUTH=true
API_BASE_URL=http://localhost:8080/v1
SWAGGER_UI_PORT=3000
EOF

# Restart Swagger UI
npm run api:restart

# Now test in Swagger UI at http://localhost:3000
# Try GET /v1/properties - it should return real data!
```

---

## 🎯 Option 2: Python/FastAPI

### Step 1: Create Backend Project

```bash
# Create backend directory
mkdir backend
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install fastapi uvicorn sqlalchemy psycopg2-binary python-dotenv
```

### Step 2: Create Basic Server

```python
# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
from psycopg2.extras import RealDictCursor
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="StayOS API", version="1.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database connection
def get_db():
    return psycopg2.connect(
        os.getenv("DATABASE_URL", "postgresql://localhost:5432/stayos_dev"),
        cursor_factory=RealDictCursor
    )

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "StayOS API"}

@app.get("/v1/properties")
def list_properties():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT id, name, classification, star_rating, timezone, status
        FROM properties
        WHERE deleted_at IS NULL
        ORDER BY created_at DESC
        LIMIT 20
    """)
    properties = cursor.fetchall()
    cursor.close()
    conn.close()
    
    return {
        "data": properties,
        "pagination": {"total": len(properties), "page": 1, "pageSize": 20}
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
```

### Step 3: Run & Test

```bash
# Create .env
echo "DATABASE_URL=postgresql://localhost:5432/stayos_dev" > .env

# Run server
python main.py

# Test
curl http://localhost:8080/health
curl http://localhost:8080/v1/properties
```

---

## 🎯 What You'll Have After This

✅ **Working API server** on http://localhost:8080  
✅ **Database** with test data  
✅ **First endpoint** returning real data  
✅ **Swagger UI** connected to your backend  
✅ **Foundation** for building remaining 201 endpoints  

---

## 📋 Next Steps After Quick Start

1. **Add More Endpoints**
   - GET /v1/properties/{id}
   - POST /v1/properties
   - PUT /v1/properties/{id}

2. **Add Authentication**
   - JWT token validation
   - OAuth 2.0 integration

3. **Add Business Logic**
   - Domain models
   - Validation
   - Business rules

4. **Add Tests**
   - Unit tests
   - Integration tests
   - API tests

---

## 🆘 Troubleshooting

### Database Connection Error
```bash
# Check PostgreSQL is running
pg_isready

# Check database exists
psql -l | grep stayos_dev

# Test connection
psql -d stayos_dev -c "SELECT 1"
```

### Port Already in Use
```bash
# Kill process on port 8080
lsof -ti:8080 | xargs kill -9

# Or use different port
PORT=8081 npm run dev
```

---

**Time to First Endpoint:** ~1-2 hours  
**Next Milestone:** 10 working endpoints (1 week)  
**Full API:** 202 endpoints (2-3 months)

