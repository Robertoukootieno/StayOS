#!/bin/bash
# ============================================================================
# StayOS Database Migration Runner
# ============================================================================
# Description: Applies all restaurant/bar extension migrations
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
echo -e "${BLUE}StayOS Restaurant & Bar Extension - Database Migration${NC}"
echo -e "${BLUE}============================================================================${NC}"
echo ""

# Function to run SQL file
run_sql_file() {
    local file=$1
    local description=$2
    
    echo -e "${YELLOW}Running: ${description}${NC}"
    
    if psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -f "$file" > /dev/null 2>&1; then
        echo -e "${GREEN}✓ Success: ${description}${NC}"
        return 0
    else
        echo -e "${RED}✗ Failed: ${description}${NC}"
        return 1
    fi
}

# Function to run SQL command
run_sql_command() {
    local command=$1
    local description=$2
    
    echo -e "${YELLOW}Checking: ${description}${NC}"
    
    if psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -c "$command" > /dev/null 2>&1; then
        echo -e "${GREEN}✓ ${description}${NC}"
        return 0
    else
        echo -e "${RED}✗ ${description}${NC}"
        return 1
    fi
}

# Check database connection
echo -e "${BLUE}Step 1: Checking database connection...${NC}"
if ! psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -c "SELECT 1;" > /dev/null 2>&1; then
    echo -e "${RED}✗ Cannot connect to database${NC}"
    echo -e "${RED}  Host: $DB_HOST:$DB_PORT${NC}"
    echo -e "${RED}  Database: $DB_NAME${NC}"
    echo -e "${RED}  User: $DB_USER${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Database connection successful${NC}"
echo ""

# Check if F&B schema exists
echo -e "${BLUE}Step 2: Checking F&B schema...${NC}"
FB_EXISTS=$(psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -t -c "SELECT COUNT(*) FROM information_schema.schemata WHERE schema_name = 'fb';")

if [ "$FB_EXISTS" -eq 0 ]; then
    echo -e "${YELLOW}F&B schema not found. Loading F&B schema...${NC}"
    run_sql_file "../schemas/schema_fb.sql" "Load F&B schema"
    echo ""
else
    echo -e "${GREEN}✓ F&B schema already exists${NC}"
    echo ""
fi

# Run migrations
echo -e "${BLUE}Step 3: Running migrations...${NC}"
echo ""

# Migration 001
echo -e "${BLUE}Migration 001: Add Restaurant Property Types${NC}"
run_sql_file "001_add_restaurant_property_types.sql" "Add restaurant property types"
echo ""

# Migration 002
echo -e "${BLUE}Migration 002: Create Tables Schema${NC}"
run_sql_file "002_create_tables_schema.sql" "Create tables schema"
echo ""

# Migration 003
echo -e "${BLUE}Migration 003: Create Table Reservations Schema${NC}"
run_sql_file "003_create_table_reservations_schema.sql" "Create table reservations schema"
echo ""

# Migration 004
echo -e "${BLUE}Migration 004: Enhance F&B Orders${NC}"
run_sql_file "004_enhance_fb_orders.sql" "Enhance F&B orders"
echo ""

# Verify migrations
echo -e "${BLUE}Step 4: Verifying migrations...${NC}"
echo ""

# Check for new schemas
echo -e "${YELLOW}Checking new schemas...${NC}"
TABLES_SCHEMA=$(psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -t -c "SELECT COUNT(*) FROM information_schema.schemata WHERE schema_name = 'tables';")
RESERVATIONS_SCHEMA=$(psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -t -c "SELECT COUNT(*) FROM information_schema.schemata WHERE schema_name = 'table_reservations';")

if [ "$TABLES_SCHEMA" -eq 1 ] && [ "$RESERVATIONS_SCHEMA" -eq 1 ]; then
    echo -e "${GREEN}✓ New schemas created successfully${NC}"
else
    echo -e "${RED}✗ Schema creation failed${NC}"
    exit 1
fi

# Count tables
TOTAL_TABLES=$(psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -t -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema NOT IN ('pg_catalog', 'information_schema');")
echo -e "${GREEN}✓ Total tables in database: ${TOTAL_TABLES}${NC}"

echo ""
echo -e "${BLUE}============================================================================${NC}"
echo -e "${GREEN}✓ All migrations completed successfully!${NC}"
echo -e "${BLUE}============================================================================${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo -e "  1. Load sample data: ${BLUE}./load_sample_data.sh${NC}"
echo -e "  2. Verify data: ${BLUE}psql -U $DB_USER -d $DB_NAME${NC}"
echo ""

# Unset password
unset PGPASSWORD

