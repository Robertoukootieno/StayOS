#!/bin/bash
# ============================================================================
# StayOS Sample Data Loader
# ============================================================================
# Description: Loads sample restaurants and tables
# Date: 2026-01-17
# ============================================================================

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Database configuration
DB_HOST="${DB_HOST:-localhost}"
DB_PORT="${DB_PORT:-5432}"
DB_NAME="${DB_NAME:-stayos_dev}"
DB_USER="${DB_USER:-postgres}"
DB_PASSWORD="${DB_PASSWORD:-postgres}"

# Export password for psql
export PGPASSWORD="$DB_PASSWORD"

echo -e "${BLUE}============================================================================${NC}"
echo -e "${BLUE}StayOS Sample Data Loader${NC}"
echo -e "${BLUE}============================================================================${NC}"
echo ""

# Function to run SQL file
run_sql_file() {
    local file=$1
    local description=$2
    
    echo -e "${YELLOW}Loading: ${description}${NC}"
    
    if psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -f "$file"; then
        echo -e "${GREEN}✓ Success: ${description}${NC}"
        return 0
    else
        echo -e "${RED}✗ Failed: ${description}${NC}"
        return 1
    fi
}

# Check database connection
echo -e "${BLUE}Step 1: Checking database connection...${NC}"
if ! psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -c "SELECT 1;" > /dev/null 2>&1; then
    echo -e "${RED}✗ Cannot connect to database${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Database connection successful${NC}"
echo ""

# Load sample restaurants
echo -e "${BLUE}Step 2: Loading sample restaurants...${NC}"
run_sql_file "../seeds/sample_restaurants.sql" "Sample restaurants and bars"
echo ""

# Load sample tables
echo -e "${BLUE}Step 3: Loading sample tables...${NC}"
run_sql_file "../seeds/sample_tables.sql" "Sample tables and floor sections"
echo ""

# Verify data
echo -e "${BLUE}Step 4: Verifying sample data...${NC}"
echo ""

# Count restaurants
RESTAURANT_COUNT=$(psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -t -c "SELECT COUNT(*) FROM property_mgmt.properties WHERE property_type IN ('RESTAURANT', 'BAR', 'CAFE', 'PUB');")
echo -e "${GREEN}✓ Restaurants/Bars loaded: ${RESTAURANT_COUNT}${NC}"

# Count tables
TABLE_COUNT=$(psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -t -c "SELECT COUNT(*) FROM tables.tables;")
echo -e "${GREEN}✓ Tables loaded: ${TABLE_COUNT}${NC}"

# Count floor sections
SECTION_COUNT=$(psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -t -c "SELECT COUNT(*) FROM tables.floor_sections;")
echo -e "${GREEN}✓ Floor sections loaded: ${SECTION_COUNT}${NC}"

echo ""
echo -e "${BLUE}============================================================================${NC}"
echo -e "${GREEN}✓ Sample data loaded successfully!${NC}"
echo -e "${BLUE}============================================================================${NC}"
echo ""
echo -e "${YELLOW}Sample Venues:${NC}"
psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -c "SELECT property_code, name, property_type, venue_classification, seating_capacity FROM property_mgmt.properties WHERE property_type IN ('RESTAURANT', 'BAR', 'CAFE', 'PUB') ORDER BY property_code;"
echo ""

# Unset password
unset PGPASSWORD

