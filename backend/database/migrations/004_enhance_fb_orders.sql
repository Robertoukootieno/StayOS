-- ============================================================================
-- Migration: Enhance F&B Orders for Restaurant Operations
-- ============================================================================
-- Description: Adds restaurant-specific features to F&B orders
-- Version: 004
-- Date: 2026-01-17
-- Author: StayOS Team
-- Dependencies: 002_create_tables_schema.sql
-- ============================================================================

-- Add table_id to fb_orders
ALTER TABLE fb.fb_orders 
ADD COLUMN IF NOT EXISTS table_id UUID REFERENCES tables.tables(id),
ADD COLUMN IF NOT EXISTS table_reservation_id UUID,
ADD COLUMN IF NOT EXISTS course_sequence INTEGER DEFAULT 1,
ADD COLUMN IF NOT EXISTS is_split_bill BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS split_bill_info JSONB,
ADD COLUMN IF NOT EXISTS server_id UUID REFERENCES shared.users(id),
ADD COLUMN IF NOT EXISTS kitchen_notes TEXT,
ADD COLUMN IF NOT EXISTS bar_notes TEXT;

-- Add comments
COMMENT ON COLUMN fb.fb_orders.table_id IS 'Reference to table for dine-in orders';
COMMENT ON COLUMN fb.fb_orders.table_reservation_id IS 'Reference to table reservation if applicable';
COMMENT ON COLUMN fb.fb_orders.course_sequence IS 'Course number (1=appetizer, 2=main, 3=dessert, etc.)';
COMMENT ON COLUMN fb.fb_orders.is_split_bill IS 'Whether this order has split billing';
COMMENT ON COLUMN fb.fb_orders.split_bill_info IS 'JSON data for split bill details';
COMMENT ON COLUMN fb.fb_orders.server_id IS 'Server/waiter assigned to this order';
COMMENT ON COLUMN fb.fb_orders.kitchen_notes IS 'Notes for kitchen staff';
COMMENT ON COLUMN fb.fb_orders.bar_notes IS 'Notes for bar staff';

-- Create index for table orders
CREATE INDEX IF NOT EXISTS idx_fb_orders_table 
ON fb.fb_orders(table_id) WHERE deleted_at IS NULL;

-- Create index for server orders
CREATE INDEX IF NOT EXISTS idx_fb_orders_server 
ON fb.fb_orders(server_id) WHERE deleted_at IS NULL;

-- Add venue-specific fields to menu items
ALTER TABLE fb.menu_items
ADD COLUMN IF NOT EXISTS venue_id UUID,
ADD COLUMN IF NOT EXISTS is_signature_dish BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS is_seasonal BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS season_start_date DATE,
ADD COLUMN IF NOT EXISTS season_end_date DATE,
ADD COLUMN IF NOT EXISTS spice_level INTEGER CHECK (spice_level BETWEEN 0 AND 5),
ADD COLUMN IF NOT EXISTS serving_size VARCHAR(50),
ADD COLUMN IF NOT EXISTS pairing_suggestions TEXT[];

-- Add comments
COMMENT ON COLUMN fb.menu_items.venue_id IS 'Specific venue/restaurant this item belongs to';
COMMENT ON COLUMN fb.menu_items.is_signature_dish IS 'Whether this is a signature/specialty dish';
COMMENT ON COLUMN fb.menu_items.is_seasonal IS 'Whether this is a seasonal item';
COMMENT ON COLUMN fb.menu_items.season_start_date IS 'Start date for seasonal availability';
COMMENT ON COLUMN fb.menu_items.season_end_date IS 'End date for seasonal availability';
COMMENT ON COLUMN fb.menu_items.spice_level IS 'Spice level from 0 (mild) to 5 (very spicy)';
COMMENT ON COLUMN fb.menu_items.serving_size IS 'Serving size description (e.g., "Serves 2-3")';
COMMENT ON COLUMN fb.menu_items.pairing_suggestions IS 'Suggested pairings (wines, sides, etc.)';

-- Create index for venue menu items
CREATE INDEX IF NOT EXISTS idx_menu_items_venue 
ON fb.menu_items(venue_id) WHERE deleted_at IS NULL;

-- Create index for signature dishes
CREATE INDEX IF NOT EXISTS idx_menu_items_signature 
ON fb.menu_items(property_id) 
WHERE is_signature_dish = TRUE AND deleted_at IS NULL;

-- Create index for seasonal items
CREATE INDEX IF NOT EXISTS idx_menu_items_seasonal 
ON fb.menu_items(property_id, season_start_date, season_end_date) 
WHERE is_seasonal = TRUE AND deleted_at IS NULL;

-- Migration complete
DO $$
BEGIN
    RAISE NOTICE 'Migration 004 completed successfully: F&B orders enhanced for restaurant operations';
END$$;

