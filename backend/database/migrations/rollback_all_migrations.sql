-- ============================================================================
-- StayOS Database Migrations - Rollback Script
-- ============================================================================
-- Description: Rolls back all restaurant/bar extension migrations
-- Date: 2026-01-17
-- Author: StayOS Team
-- WARNING: This will delete all data in the new schemas!
-- ============================================================================

\echo '============================================================================'
\echo 'WARNING: This will rollback all restaurant/bar extension migrations!'
\echo 'All data in tables and table_reservations schemas will be DELETED!'
\echo '============================================================================'
\echo ''
\echo 'Press Ctrl+C to cancel, or press Enter to continue...'
\prompt 'Continue? (yes/no): ' confirm

-- Only proceed if user confirms
DO $$
BEGIN
    IF '$(confirm)' != 'yes' THEN
        RAISE EXCEPTION 'Rollback cancelled by user';
    END IF;
END$$;

\echo ''
\echo 'Starting rollback...'
\echo ''

-- ============================================================================
-- Rollback Migration 004: Enhance F&B Orders
-- ============================================================================

\echo 'Rolling back Migration 004: Enhance F&B Orders...'

-- Drop indexes
DROP INDEX IF EXISTS fb.idx_fb_orders_table;
DROP INDEX IF EXISTS fb.idx_fb_orders_server;
DROP INDEX IF EXISTS fb.idx_menu_items_venue;
DROP INDEX IF EXISTS fb.idx_menu_items_signature;
DROP INDEX IF EXISTS fb.idx_menu_items_seasonal;

-- Drop columns from fb_orders
ALTER TABLE fb.fb_orders 
DROP COLUMN IF EXISTS table_id,
DROP COLUMN IF EXISTS table_reservation_id,
DROP COLUMN IF EXISTS course_sequence,
DROP COLUMN IF EXISTS is_split_bill,
DROP COLUMN IF EXISTS split_bill_info,
DROP COLUMN IF EXISTS server_id,
DROP COLUMN IF EXISTS kitchen_notes,
DROP COLUMN IF EXISTS bar_notes;

-- Drop columns from menu_items
ALTER TABLE fb.menu_items
DROP COLUMN IF EXISTS venue_id,
DROP COLUMN IF EXISTS is_signature_dish,
DROP COLUMN IF EXISTS is_seasonal,
DROP COLUMN IF EXISTS season_start_date,
DROP COLUMN IF EXISTS season_end_date,
DROP COLUMN IF EXISTS spice_level,
DROP COLUMN IF EXISTS serving_size,
DROP COLUMN IF EXISTS pairing_suggestions;

\echo '✓ Migration 004 rolled back'
\echo ''

-- ============================================================================
-- Rollback Migration 003: Create Table Reservations Schema
-- ============================================================================

\echo 'Rolling back Migration 003: Create Table Reservations Schema...'

-- Drop tables
DROP TABLE IF EXISTS table_reservations.waitlist CASCADE;
DROP TABLE IF EXISTS table_reservations.reservations CASCADE;

-- Drop enums
DROP TYPE IF EXISTS table_reservations.reservation_status CASCADE;
DROP TYPE IF EXISTS table_reservations.reservation_source CASCADE;

-- Drop schema
DROP SCHEMA IF EXISTS table_reservations CASCADE;

\echo '✓ Migration 003 rolled back'
\echo ''

-- ============================================================================
-- Rollback Migration 002: Create Tables Schema
-- ============================================================================

\echo 'Rolling back Migration 002: Create Tables Schema...'

-- Drop tables
DROP TABLE IF EXISTS tables.table_combinations CASCADE;
DROP TABLE IF EXISTS tables.tables CASCADE;
DROP TABLE IF EXISTS tables.floor_sections CASCADE;

-- Drop enums
DROP TYPE IF EXISTS tables.table_status CASCADE;
DROP TYPE IF EXISTS tables.table_shape CASCADE;

-- Drop schema
DROP SCHEMA IF EXISTS tables CASCADE;

\echo '✓ Migration 002 rolled back'
\echo ''

-- ============================================================================
-- Rollback Migration 001: Add Restaurant Property Types
-- ============================================================================

\echo 'Rolling back Migration 001: Add Restaurant Property Types...'

-- Drop indexes
DROP INDEX IF EXISTS property_mgmt.idx_properties_venue_classification;
DROP INDEX IF EXISTS property_mgmt.idx_properties_type;

-- Drop columns from properties
ALTER TABLE property_mgmt.properties 
DROP COLUMN IF EXISTS venue_classification,
DROP COLUMN IF EXISTS seating_capacity,
DROP COLUMN IF EXISTS has_outdoor_seating,
DROP COLUMN IF EXISTS has_bar,
DROP COLUMN IF EXISTS has_private_dining,
DROP COLUMN IF EXISTS cuisine_types,
DROP COLUMN IF EXISTS dress_code,
DROP COLUMN IF EXISTS parking_available,
DROP COLUMN IF EXISTS accepts_reservations,
DROP COLUMN IF EXISTS accepts_walk_ins,
DROP COLUMN IF EXISTS delivery_available,
DROP COLUMN IF EXISTS takeout_available;

-- Drop venue classification enum
DROP TYPE IF EXISTS property_mgmt.venue_classification CASCADE;

-- Note: Cannot remove enum values from property_type in PostgreSQL
-- They will remain but won't be used
\echo 'Note: Property type enum values (RESTAURANT, BAR, etc.) cannot be removed in PostgreSQL'
\echo 'They will remain in the enum but should not be used'

\echo '✓ Migration 001 rolled back'
\echo ''

-- ============================================================================
-- Update migration tracking
-- ============================================================================

DELETE FROM public.schema_migrations 
WHERE migration_name IN (
    '001_add_restaurant_property_types.sql',
    '002_create_tables_schema.sql',
    '003_create_table_reservations_schema.sql',
    '004_enhance_fb_orders.sql'
);

-- ============================================================================
-- Summary
-- ============================================================================

\echo ''
\echo '============================================================================'
\echo 'Rollback completed successfully!'
\echo '============================================================================'
\echo ''
\echo 'The following changes were rolled back:'
\echo '  - Table reservations schema deleted'
\echo '  - Tables schema deleted'
\echo '  - F&B enhancements removed'
\echo '  - Property venue fields removed'
\echo ''
\echo 'Note: Property type enum values cannot be removed in PostgreSQL'
\echo '============================================================================'

