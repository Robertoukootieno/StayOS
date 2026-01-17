-- ============================================================================
-- Migration: Add Restaurant & Bar Property Types
-- ============================================================================
-- Description: Extends property_mgmt schema to support restaurants and bars
-- Version: 001
-- Date: 2026-01-17
-- Author: StayOS Team
-- ============================================================================

-- Add new property types for restaurants and bars
-- Note: PostgreSQL doesn't support IF NOT EXISTS for ALTER TYPE ADD VALUE
-- We need to check if the value exists before adding it

DO $$
BEGIN
    -- Add RESTAURANT type
    IF NOT EXISTS (
        SELECT 1 FROM pg_enum 
        WHERE enumlabel = 'RESTAURANT' 
        AND enumtypid = 'property_mgmt.property_type'::regtype
    ) THEN
        ALTER TYPE property_mgmt.property_type ADD VALUE 'RESTAURANT';
    END IF;

    -- Add BAR type
    IF NOT EXISTS (
        SELECT 1 FROM pg_enum 
        WHERE enumlabel = 'BAR' 
        AND enumtypid = 'property_mgmt.property_type'::regtype
    ) THEN
        ALTER TYPE property_mgmt.property_type ADD VALUE 'BAR';
    END IF;

    -- Add CAFE type
    IF NOT EXISTS (
        SELECT 1 FROM pg_enum 
        WHERE enumlabel = 'CAFE' 
        AND enumtypid = 'property_mgmt.property_type'::regtype
    ) THEN
        ALTER TYPE property_mgmt.property_type ADD VALUE 'CAFE';
    END IF;

    -- Add BISTRO type
    IF NOT EXISTS (
        SELECT 1 FROM pg_enum 
        WHERE enumlabel = 'BISTRO' 
        AND enumtypid = 'property_mgmt.property_type'::regtype
    ) THEN
        ALTER TYPE property_mgmt.property_type ADD VALUE 'BISTRO';
    END IF;

    -- Add PUB type
    IF NOT EXISTS (
        SELECT 1 FROM pg_enum 
        WHERE enumlabel = 'PUB' 
        AND enumtypid = 'property_mgmt.property_type'::regtype
    ) THEN
        ALTER TYPE property_mgmt.property_type ADD VALUE 'PUB';
    END IF;

    -- Add FOOD_TRUCK type
    IF NOT EXISTS (
        SELECT 1 FROM pg_enum 
        WHERE enumlabel = 'FOOD_TRUCK' 
        AND enumtypid = 'property_mgmt.property_type'::regtype
    ) THEN
        ALTER TYPE property_mgmt.property_type ADD VALUE 'FOOD_TRUCK';
    END IF;

    -- Add NIGHTCLUB type
    IF NOT EXISTS (
        SELECT 1 FROM pg_enum 
        WHERE enumlabel = 'NIGHTCLUB' 
        AND enumtypid = 'property_mgmt.property_type'::regtype
    ) THEN
        ALTER TYPE property_mgmt.property_type ADD VALUE 'NIGHTCLUB';
    END IF;
END$$;

-- Create venue classification enum
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'venue_classification') THEN
        CREATE TYPE property_mgmt.venue_classification AS ENUM (
            'FINE_DINING',
            'CASUAL_DINING',
            'FAST_CASUAL',
            'QUICK_SERVICE',
            'FOOD_COURT',
            'BUFFET',
            'CAFE',
            'BAKERY',
            'BAR',
            'LOUNGE',
            'NIGHTCLUB',
            'FOOD_TRUCK'
        );
    END IF;
END$$;

-- Add venue-specific columns to properties table
ALTER TABLE property_mgmt.properties 
ADD COLUMN IF NOT EXISTS venue_classification property_mgmt.venue_classification,
ADD COLUMN IF NOT EXISTS seating_capacity INTEGER,
ADD COLUMN IF NOT EXISTS has_outdoor_seating BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS has_bar BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS has_private_dining BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS cuisine_types TEXT[],
ADD COLUMN IF NOT EXISTS dress_code VARCHAR(100),
ADD COLUMN IF NOT EXISTS parking_available BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS accepts_reservations BOOLEAN DEFAULT TRUE,
ADD COLUMN IF NOT EXISTS accepts_walk_ins BOOLEAN DEFAULT TRUE,
ADD COLUMN IF NOT EXISTS delivery_available BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS takeout_available BOOLEAN DEFAULT FALSE;

-- Add comments for documentation
COMMENT ON COLUMN property_mgmt.properties.venue_classification IS 'Classification for restaurant/bar venues';
COMMENT ON COLUMN property_mgmt.properties.seating_capacity IS 'Total seating capacity for restaurants/bars';
COMMENT ON COLUMN property_mgmt.properties.has_outdoor_seating IS 'Whether venue has outdoor seating';
COMMENT ON COLUMN property_mgmt.properties.has_bar IS 'Whether venue has a bar';
COMMENT ON COLUMN property_mgmt.properties.has_private_dining IS 'Whether venue has private dining rooms';
COMMENT ON COLUMN property_mgmt.properties.cuisine_types IS 'Array of cuisine types (e.g., Italian, Mexican, Asian)';
COMMENT ON COLUMN property_mgmt.properties.dress_code IS 'Dress code requirement (e.g., Casual, Business Casual, Formal)';
COMMENT ON COLUMN property_mgmt.properties.parking_available IS 'Whether parking is available';
COMMENT ON COLUMN property_mgmt.properties.accepts_reservations IS 'Whether venue accepts reservations';
COMMENT ON COLUMN property_mgmt.properties.accepts_walk_ins IS 'Whether venue accepts walk-in customers';
COMMENT ON COLUMN property_mgmt.properties.delivery_available IS 'Whether delivery service is available';
COMMENT ON COLUMN property_mgmt.properties.takeout_available IS 'Whether takeout/pickup is available';

-- Create index for venue classification
CREATE INDEX IF NOT EXISTS idx_properties_venue_classification 
ON property_mgmt.properties(venue_classification) 
WHERE deleted_at IS NULL;

-- Create index for property type (to support filtering by restaurants/bars)
CREATE INDEX IF NOT EXISTS idx_properties_type 
ON property_mgmt.properties(property_type) 
WHERE deleted_at IS NULL;

-- Migration complete
DO $$
BEGIN
    RAISE NOTICE 'Migration 001 completed successfully: Restaurant & Bar property types added';
END$$;

