#!/bin/bash

# StayOS Database Setup Script
# This script sets up the PostgreSQL database with all schemas

set -e  # Exit on error

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🗄️  StayOS Database Setup"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Configuration
DB_NAME="${DB_NAME:-stayos_dev}"
DB_USER="${DB_USER:-postgres}"
DB_HOST="${DB_HOST:-localhost}"
DB_PORT="${DB_PORT:-5432}"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if PostgreSQL is installed
echo "📋 Step 1: Checking PostgreSQL installation..."
if ! command -v psql &> /dev/null; then
    echo -e "${RED}❌ PostgreSQL is not installed!${NC}"
    echo ""
    echo "Please install PostgreSQL first:"
    echo ""
    echo "  Ubuntu/Debian:"
    echo "    sudo apt update"
    echo "    sudo apt install postgresql postgresql-contrib"
    echo ""
    echo "  macOS:"
    echo "    brew install postgresql@15"
    echo "    brew services start postgresql@15"
    echo ""
    echo "  Windows:"
    echo "    Download from: https://www.postgresql.org/download/windows/"
    echo ""
    exit 1
fi

PSQL_VERSION=$(psql --version | awk '{print $3}')
echo -e "${GREEN}✅ PostgreSQL ${PSQL_VERSION} is installed${NC}"
echo ""

# Check if PostgreSQL is running
echo "📋 Step 2: Checking if PostgreSQL is running..."
if ! pg_isready -h $DB_HOST -p $DB_PORT &> /dev/null; then
    echo -e "${YELLOW}⚠️  PostgreSQL is not running${NC}"
    echo ""
    echo "Please start PostgreSQL:"
    echo ""
    echo "  Ubuntu/Debian:"
    echo "    sudo systemctl start postgresql"
    echo ""
    echo "  macOS:"
    echo "    brew services start postgresql@15"
    echo ""
    exit 1
fi

echo -e "${GREEN}✅ PostgreSQL is running${NC}"
echo ""

# Check if database exists
echo "📋 Step 3: Checking if database exists..."
if psql -h $DB_HOST -p $DB_PORT -U $DB_USER -lqt | cut -d \| -f 1 | grep -qw $DB_NAME; then
    echo -e "${YELLOW}⚠️  Database '$DB_NAME' already exists${NC}"
    read -p "Do you want to drop and recreate it? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Dropping database..."
        dropdb -h $DB_HOST -p $DB_PORT -U $DB_USER $DB_NAME
        echo -e "${GREEN}✅ Database dropped${NC}"
    else
        echo "Skipping database creation..."
        echo ""
    fi
fi

# Create database
if ! psql -h $DB_HOST -p $DB_PORT -U $DB_USER -lqt | cut -d \| -f 1 | grep -qw $DB_NAME; then
    echo "📋 Step 4: Creating database '$DB_NAME'..."
    createdb -h $DB_HOST -p $DB_PORT -U $DB_USER $DB_NAME
    echo -e "${GREEN}✅ Database created${NC}"
    echo ""
else
    echo "📋 Step 4: Database already exists, skipping creation"
    echo ""
fi

# Run schemas
echo "📋 Step 5: Running database schemas..."
echo ""

SCHEMA_DIR="backend/database/schemas"

# Array of schemas in order (based on actual files)
SCHEMAS=(
    "schema_shared.sql"
    "schema_property_management.sql"
    "schema_reservation.sql"
    "schema_guest.sql"
    "schema_billing.sql"
    "schema_operations.sql"
    "schema_channel.sql"
    "schema_compliance.sql"
    "schema_procurement.sql"
)

# Optional schemas
OPTIONAL_SCHEMAS=(
    "schema_fb.sql"
)

for schema in "${SCHEMAS[@]}"; do
    if [ -f "$SCHEMA_DIR/$schema" ]; then
        echo "  📄 Running $schema..."
        psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -f "$SCHEMA_DIR/$schema" > /dev/null 2>&1
        echo -e "  ${GREEN}✅ $schema completed${NC}"
    else
        echo -e "  ${YELLOW}⚠️  $schema not found, skipping${NC}"
    fi
done

echo ""
echo "📋 Step 6: Optional schemas..."
read -p "Do you want to install Food & Beverage (POS) module? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if [ -f "$SCHEMA_DIR/schema_fb.sql" ]; then
        echo "  📄 Running schema_fb.sql..."
        psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -f "$SCHEMA_DIR/schema_fb.sql" > /dev/null 2>&1
        echo -e "  ${GREEN}✅ F&B schema completed${NC}"
    fi
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}🎉 Database setup complete!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Database: $DB_NAME"
echo "Host: $DB_HOST"
echo "Port: $DB_PORT"
echo "User: $DB_USER"
echo ""
echo "Next steps:"
echo "  1. Update backend/.env with database credentials"
echo "  2. Run: npm run dev"
echo "  3. Test: curl http://localhost:8080/health"
echo ""

