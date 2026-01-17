-- ============================================================================
-- Migration: Create Table Management Schema
-- ============================================================================
-- Description: Creates schema for managing restaurant/bar tables and seating
-- Version: 002
-- Date: 2026-01-17
-- Author: StayOS Team
-- Dependencies: 001_add_restaurant_property_types.sql
-- ============================================================================

-- Create tables schema
CREATE SCHEMA IF NOT EXISTS tables;

-- ============================================================================
-- ENUMS
-- ============================================================================

-- Table status enum
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'table_status') THEN
        CREATE TYPE tables.table_status AS ENUM (
            'AVAILABLE',
            'OCCUPIED',
            'RESERVED',
            'CLEANING',
            'OUT_OF_SERVICE'
        );
    END IF;
END$$;

-- Table shape enum
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'table_shape') THEN
        CREATE TYPE tables.table_shape AS ENUM (
            'SQUARE',
            'RECTANGLE',
            'ROUND',
            'OVAL',
            'BOOTH',
            'BAR_SEATING',
            'COUNTER'
        );
    END IF;
END$$;

-- ============================================================================
-- TABLES
-- ============================================================================

-- Floor sections/areas
CREATE TABLE IF NOT EXISTS tables.floor_sections (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,
    
    -- Section details
    section_name VARCHAR(100) NOT NULL,
    description TEXT,
    floor_level INTEGER DEFAULT 1,
    
    -- Attributes
    is_outdoor BOOLEAN DEFAULT FALSE,
    is_smoking BOOLEAN DEFAULT FALSE,
    is_private BOOLEAN DEFAULT FALSE,
    
    -- Display
    display_order INTEGER DEFAULT 0,
    color_code VARCHAR(7),  -- Hex color for UI (e.g., #FF5733)
    
    -- Capacity
    max_capacity INTEGER,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,
    
    CONSTRAINT unique_section_name_per_property UNIQUE(property_id, section_name, deleted_at)
);

-- Tables (Aggregate Root)
CREATE TABLE IF NOT EXISTS tables.tables (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,
    section_id UUID REFERENCES tables.floor_sections(id),
    
    -- Table identification
    table_number VARCHAR(20) NOT NULL,
    table_name VARCHAR(100),
    qr_code VARCHAR(255),  -- QR code for contactless ordering
    
    -- Physical attributes
    min_capacity INTEGER NOT NULL DEFAULT 2,
    max_capacity INTEGER NOT NULL DEFAULT 4,
    shape tables.table_shape NOT NULL DEFAULT 'SQUARE',
    
    -- Status
    status tables.table_status NOT NULL DEFAULT 'AVAILABLE',
    
    -- Position (for floor plan visualization)
    position_x DECIMAL(10,2),
    position_y DECIMAL(10,2),
    rotation DECIMAL(5,2) DEFAULT 0,  -- Rotation in degrees
    width DECIMAL(10,2),   -- Width in pixels/units
    height DECIMAL(10,2),  -- Height in pixels/units
    
    -- Features
    is_accessible BOOLEAN DEFAULT FALSE,
    is_high_top BOOLEAN DEFAULT FALSE,
    has_power_outlet BOOLEAN DEFAULT FALSE,
    has_window_view BOOLEAN DEFAULT FALSE,
    is_combinable BOOLEAN DEFAULT FALSE,  -- Can be combined with other tables
    
    -- Preferences
    preferred_for_occasions TEXT[],  -- e.g., ['birthday', 'anniversary', 'business']
    
    -- Notes
    notes TEXT,
    internal_notes TEXT,  -- Staff-only notes
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,
    
    CONSTRAINT unique_table_number_per_property UNIQUE(property_id, table_number, deleted_at),
    CONSTRAINT valid_capacity CHECK (max_capacity >= min_capacity),
    CONSTRAINT valid_rotation CHECK (rotation >= 0 AND rotation < 360)
);

-- Table combinations (for joining tables)
CREATE TABLE IF NOT EXISTS tables.table_combinations (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,
    combination_name VARCHAR(100) NOT NULL,
    table_ids UUID[] NOT NULL,
    combined_capacity INTEGER NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ
);

-- ============================================================================
-- INDEXES
-- ============================================================================

-- Floor sections indexes
CREATE INDEX IF NOT EXISTS idx_floor_sections_property 
ON tables.floor_sections(property_id) WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_floor_sections_display_order 
ON tables.floor_sections(property_id, display_order) WHERE deleted_at IS NULL;

-- Tables indexes
CREATE INDEX IF NOT EXISTS idx_tables_property 
ON tables.tables(property_id) WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_tables_section 
ON tables.tables(section_id) WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_tables_status 
ON tables.tables(property_id, status) WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_tables_available 
ON tables.tables(property_id) 
WHERE status = 'AVAILABLE' AND deleted_at IS NULL;

-- Table combinations indexes
CREATE INDEX IF NOT EXISTS idx_table_combinations_property 
ON tables.table_combinations(property_id) WHERE deleted_at IS NULL;

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON SCHEMA tables IS 'Table and seating management for restaurants and bars';
COMMENT ON TABLE tables.floor_sections IS 'Floor sections/areas within a venue';
COMMENT ON TABLE tables.tables IS 'Individual tables for restaurant/bar seating';
COMMENT ON TABLE tables.table_combinations IS 'Combinations of tables that can be joined together';

-- Migration complete
DO $$
BEGIN
    RAISE NOTICE 'Migration 002 completed successfully: Table management schema created';
END$$;

