#!/bin/bash

# StayOS Database Setup Script (Simple Version)
# Uses current user, no password required

set -e  # Exit on error

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🗄️  StayOS Database Setup"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Configuration
DB_NAME="${DB_NAME:-stayos_dev}"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if PostgreSQL is installed
echo "📋 Step 1: Checking PostgreSQL installation..."
if ! command -v psql &> /dev/null; then
    echo -e "${RED}❌ PostgreSQL is not installed!${NC}"
    exit 1
fi

PSQL_VERSION=$(psql --version | awk '{print $3}')
echo -e "${GREEN}✅ PostgreSQL ${PSQL_VERSION} is installed${NC}"
echo ""

# Check if database exists
echo "📋 Step 2: Checking if database exists..."
if psql -lqt | cut -d \| -f 1 | grep -qw $DB_NAME; then
    echo -e "${YELLOW}⚠️  Database '$DB_NAME' already exists${NC}"
    read -p "Do you want to drop and recreate it? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Dropping database..."
        dropdb $DB_NAME
        echo -e "${GREEN}✅ Database dropped${NC}"
    else
        echo "Using existing database..."
    fi
fi

# Create database if it doesn't exist
if ! psql -lqt | cut -d \| -f 1 | grep -qw $DB_NAME; then
    echo "📋 Step 3: Creating database '$DB_NAME'..."
    createdb $DB_NAME
    echo -e "${GREEN}✅ Database created${NC}"
else
    echo "📋 Step 3: Database exists, skipping creation"
fi
echo ""

# Run schemas
echo "📋 Step 4: Running database schemas..."
echo ""

SCHEMA_DIR="backend/database/schemas"

# Array of schemas in order
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

for schema in "${SCHEMAS[@]}"; do
    if [ -f "$SCHEMA_DIR/$schema" ]; then
        echo "  📄 Running $schema..."
        if psql -d $DB_NAME -f "$SCHEMA_DIR/$schema" > /dev/null 2>&1; then
            echo -e "  ${GREEN}✅ $schema completed${NC}"
        else
            echo -e "  ${RED}❌ $schema failed${NC}"
        fi
    else
        echo -e "  ${YELLOW}⚠️  $schema not found, skipping${NC}"
    fi
done

echo ""
echo "📋 Step 5: Optional F&B module..."
read -p "Install Food & Beverage (POS) module? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if [ -f "$SCHEMA_DIR/schema_fb.sql" ]; then
        echo "  📄 Running schema_fb.sql..."
        if psql -d $DB_NAME -f "$SCHEMA_DIR/schema_fb.sql" > /dev/null 2>&1; then
            echo -e "  ${GREEN}✅ F&B schema completed${NC}"
        else
            echo -e "  ${RED}❌ F&B schema failed${NC}"
        fi
    fi
fi

echo ""
echo "📋 Step 6: Adding sample data..."
read -p "Add sample data for testing? (Y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Nn]$ ]]; then
    if [ -f "$SCHEMA_DIR/sample_data.sql" ]; then
        echo "  📄 Running sample_data.sql..."
        if psql -d $DB_NAME -f "$SCHEMA_DIR/sample_data.sql" 2>&1 | grep -E "(NOTICE|ERROR)"; then
            echo -e "  ${GREEN}✅ Sample data added${NC}"
        fi
    fi
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}🎉 Database setup complete!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Database: $DB_NAME"
echo ""
echo "Verify setup:"
echo "  psql -d $DB_NAME -c \"\\dt\""
echo "  psql -d $DB_NAME -c \"SELECT name FROM properties;\""
echo ""
echo "Next steps:"
echo "  1. Update backend/.env with database credentials"
echo "  2. Run: cd backend && npm run dev"
echo "  3. Test: curl http://localhost:8080/health"
echo ""

