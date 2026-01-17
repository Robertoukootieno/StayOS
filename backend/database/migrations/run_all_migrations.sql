-- ============================================================================
-- StayOS Database Migrations - Master Script
-- ============================================================================
-- Description: Runs all migrations in order to extend StayOS for restaurants
-- Date: 2026-01-17
-- Author: StayOS Team
-- ============================================================================

-- Create migrations tracking table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.schema_migrations (
    id SERIAL PRIMARY KEY,
    migration_name VARCHAR(255) UNIQUE NOT NULL,
    executed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    execution_time_ms INTEGER,
    success BOOLEAN NOT NULL DEFAULT TRUE,
    error_message TEXT
);

-- Function to run a migration
CREATE OR REPLACE FUNCTION run_migration(migration_file TEXT, migration_sql TEXT)
RETURNS VOID AS $$
DECLARE
    start_time TIMESTAMPTZ;
    end_time TIMESTAMPTZ;
    execution_time INTEGER;
BEGIN
    -- Check if migration already executed
    IF EXISTS (SELECT 1 FROM public.schema_migrations WHERE migration_name = migration_file AND success = TRUE) THEN
        RAISE NOTICE 'Migration % already executed, skipping...', migration_file;
        RETURN;
    END IF;

    RAISE NOTICE 'Running migration: %', migration_file;
    start_time := clock_timestamp();
    
    -- Execute the migration
    EXECUTE migration_sql;
    
    end_time := clock_timestamp();
    execution_time := EXTRACT(MILLISECONDS FROM (end_time - start_time))::INTEGER;
    
    -- Record successful migration
    INSERT INTO public.schema_migrations (migration_name, executed_at, execution_time_ms, success)
    VALUES (migration_file, end_time, execution_time, TRUE);
    
    RAISE NOTICE 'Migration % completed in % ms', migration_file, execution_time;
    
EXCEPTION WHEN OTHERS THEN
    -- Record failed migration
    INSERT INTO public.schema_migrations (migration_name, executed_at, success, error_message)
    VALUES (migration_file, clock_timestamp(), FALSE, SQLERRM);
    
    RAISE EXCEPTION 'Migration % failed: %', migration_file, SQLERRM;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- Run migrations in order
-- ============================================================================

\echo '============================================================================'
\echo 'Starting StayOS Restaurant & Bar Extension Migrations'
\echo '============================================================================'

-- Migration 001: Add Restaurant Property Types
\echo ''
\echo 'Running Migration 001: Add Restaurant Property Types...'
\i 001_add_restaurant_property_types.sql

-- Migration 002: Create Tables Schema
\echo ''
\echo 'Running Migration 002: Create Tables Schema...'
\i 002_create_tables_schema.sql

-- Migration 003: Create Table Reservations Schema
\echo ''
\echo 'Running Migration 003: Create Table Reservations Schema...'
\i 003_create_table_reservations_schema.sql

-- Migration 004: Enhance F&B Orders
\echo ''
\echo 'Running Migration 004: Enhance F&B Orders...'
\i 004_enhance_fb_orders.sql

-- ============================================================================
-- Summary
-- ============================================================================

\echo ''
\echo '============================================================================'
\echo 'Migration Summary'
\echo '============================================================================'

SELECT 
    migration_name,
    executed_at,
    execution_time_ms,
    CASE WHEN success THEN '✓ SUCCESS' ELSE '✗ FAILED' END as status,
    error_message
FROM public.schema_migrations
ORDER BY executed_at DESC
LIMIT 10;

\echo ''
\echo '============================================================================'
\echo 'All migrations completed!'
\echo '============================================================================'

