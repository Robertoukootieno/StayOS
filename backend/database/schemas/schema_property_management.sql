-- ============================================================================
-- StayOS Database Schema - Property Management Context
-- ============================================================================
-- Description: Property, inventory units, rate strategies, and amenities
-- Aggregates: Property, InventoryUnit, RateStrategy
-- Version: 1.0
-- Date: 2025-12-21
-- ============================================================================

CREATE SCHEMA IF NOT EXISTS property_mgmt;

-- ============================================================================
-- ENUMS
-- ============================================================================

CREATE TYPE property_mgmt.property_type AS ENUM (
    'HOTEL', 'RESORT', 'HOSTEL', 'VACATION_RENTAL', 
    'APARTMENT', 'BED_AND_BREAKFAST', 'MOTEL', 'SERVICED_APARTMENT'
);

CREATE TYPE property_mgmt.unit_type AS ENUM (
    'STANDARD_ROOM', 'DELUXE_ROOM', 'SUITE', 'STUDIO', 
    'ONE_BEDROOM', 'TWO_BEDROOM', 'PENTHOUSE', 'DORMITORY'
);

CREATE TYPE property_mgmt.unit_status AS ENUM (
    'AVAILABLE', 'OCCUPIED', 'RESERVED', 'BLOCKED', 
    'OUT_OF_SERVICE', 'MAINTENANCE'
);

CREATE TYPE property_mgmt.bed_type AS ENUM (
    'SINGLE', 'DOUBLE', 'QUEEN', 'KING', 'TWIN', 'BUNK', 'SOFA_BED'
);

CREATE TYPE property_mgmt.pricing_model_type AS ENUM (
    'FIXED', 'DYNAMIC', 'SEASONAL', 'OCCUPANCY_BASED', 'LENGTH_OF_STAY'
);

-- ============================================================================
-- TABLES
-- ============================================================================

-- Properties (Aggregate Root)
CREATE TABLE property_mgmt.properties (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    property_type property_mgmt.property_type NOT NULL,
    
    -- Location
    address shared.address NOT NULL,
    timezone VARCHAR(100) NOT NULL REFERENCES shared.timezones(name),
    
    -- Contact
    contact_info shared.contact_info NOT NULL,
    website VARCHAR(255),
    
    -- Business details
    legal_entity_name VARCHAR(255),
    tax_id VARCHAR(100),
    license_number VARCHAR(100),
    
    -- Configuration
    default_currency CHAR(3) NOT NULL REFERENCES shared.currencies(code),
    default_language CHAR(2) NOT NULL REFERENCES shared.languages(code),
    check_in_time TIME NOT NULL DEFAULT '15:00',
    check_out_time TIME NOT NULL DEFAULT '11:00',
    
    -- Capacity
    total_units INTEGER NOT NULL,
    total_capacity INTEGER NOT NULL,  -- Max guests
    
    -- Settings (JSONB for flexibility)
    settings JSONB NOT NULL DEFAULT '{}',
    
    -- Status
    status shared.status NOT NULL DEFAULT 'ACTIVE',
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,
    
    CONSTRAINT chk_total_units_positive CHECK (total_units > 0),
    CONSTRAINT chk_total_capacity_positive CHECK (total_capacity > 0)
);

CREATE INDEX idx_properties_status ON property_mgmt.properties(status) WHERE deleted_at IS NULL;
CREATE INDEX idx_properties_type ON property_mgmt.properties(property_type);
CREATE INDEX idx_properties_code ON property_mgmt.properties(property_code) WHERE deleted_at IS NULL;

-- Inventory Units (Entity within Property aggregate)
CREATE TABLE property_mgmt.inventory_units (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL REFERENCES property_mgmt.properties(id),
    
    -- Identification
    unit_number VARCHAR(50) NOT NULL,
    unit_name VARCHAR(255),
    unit_type property_mgmt.unit_type NOT NULL,
    
    -- Physical attributes
    floor_number INTEGER,
    building VARCHAR(100),
    square_meters DECIMAL(8, 2),
    
    -- Capacity
    max_occupancy INTEGER NOT NULL,
    standard_occupancy INTEGER NOT NULL,
    
    -- Beds
    bed_configuration JSONB NOT NULL,  -- [{type: 'KING', count: 1}, ...]
    
    -- Features
    has_balcony BOOLEAN NOT NULL DEFAULT FALSE,
    has_kitchen BOOLEAN NOT NULL DEFAULT FALSE,
    is_accessible BOOLEAN NOT NULL DEFAULT FALSE,
    smoking_allowed BOOLEAN NOT NULL DEFAULT FALSE,
    pet_friendly BOOLEAN NOT NULL DEFAULT FALSE,
    
    -- Status
    status property_mgmt.unit_status NOT NULL DEFAULT 'AVAILABLE',
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,
    
    CONSTRAINT uq_property_unit_number UNIQUE(property_id, unit_number),
    CONSTRAINT chk_max_occupancy_positive CHECK (max_occupancy > 0),
    CONSTRAINT chk_standard_lte_max CHECK (standard_occupancy <= max_occupancy)
);

CREATE INDEX idx_inventory_units_property ON property_mgmt.inventory_units(property_id);
CREATE INDEX idx_inventory_units_status ON property_mgmt.inventory_units(property_id, status) WHERE deleted_at IS NULL;
CREATE INDEX idx_inventory_units_type ON property_mgmt.inventory_units(property_id, unit_type);
CREATE INDEX idx_inventory_units_number ON property_mgmt.inventory_units(unit_number);

-- Amenities (Value Object)
CREATE TABLE property_mgmt.amenities (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID REFERENCES property_mgmt.properties(id),
    unit_id UUID REFERENCES property_mgmt.inventory_units(id),
    
    -- One of property_id or unit_id must be set
    CONSTRAINT chk_amenity_owner CHECK (
        (property_id IS NOT NULL AND unit_id IS NULL) OR
        (property_id IS NULL AND unit_id IS NOT NULL)
    ),
    
    -- Amenity details
    category VARCHAR(50) NOT NULL,  -- ROOM, BATHROOM, ENTERTAINMENT, etc.
    name VARCHAR(100) NOT NULL,
    icon VARCHAR(50),
    is_premium BOOLEAN NOT NULL DEFAULT FALSE,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_amenities_property ON property_mgmt.amenities(property_id);
CREATE INDEX idx_amenities_unit ON property_mgmt.amenities(unit_id);

-- Rate Strategies (Aggregate Root)
CREATE TABLE property_mgmt.rate_strategies (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL REFERENCES property_mgmt.properties(id),

    -- Strategy details
    strategy_name VARCHAR(255) NOT NULL,
    strategy_code VARCHAR(50) NOT NULL,
    pricing_model property_mgmt.pricing_model_type NOT NULL,

    -- Base rates (JSONB: {unit_type_id: {amount, currency}})
    base_rates JSONB NOT NULL,

    -- Modifiers
    occupancy_multipliers JSONB,  -- [{threshold: 0.8, multiplier: 1.2}, ...]
    seasonal_adjustments JSONB,   -- [{start_date, end_date, multiplier}, ...]
    demand_modifiers JSONB,        -- [{day_of_week, multiplier}, ...]
    length_of_stay_discounts JSONB, -- [{min_nights, discount_pct}, ...]

    -- Validity
    valid_from DATE NOT NULL,
    valid_to DATE,

    -- Status
    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT uq_property_strategy_code UNIQUE(property_id, strategy_code),
    CONSTRAINT chk_valid_date_range CHECK (valid_to IS NULL OR valid_to >= valid_from)
);

CREATE INDEX idx_rate_strategies_property ON property_mgmt.rate_strategies(property_id);
CREATE INDEX idx_rate_strategies_active ON property_mgmt.rate_strategies(property_id, is_active)
    WHERE deleted_at IS NULL;
CREATE INDEX idx_rate_strategies_validity ON property_mgmt.rate_strategies(property_id, valid_from, valid_to);

-- Photos
CREATE TABLE property_mgmt.photos (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID REFERENCES property_mgmt.properties(id),
    unit_id UUID REFERENCES property_mgmt.inventory_units(id),

    -- One of property_id or unit_id must be set
    CONSTRAINT chk_photo_owner CHECK (
        (property_id IS NOT NULL AND unit_id IS NULL) OR
        (property_id IS NULL AND unit_id IS NOT NULL)
    ),

    -- Photo details
    url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500),
    caption TEXT,
    display_order INTEGER NOT NULL DEFAULT 0,
    is_primary BOOLEAN NOT NULL DEFAULT FALSE,

    -- Metadata
    width INTEGER,
    height INTEGER,
    file_size_bytes INTEGER,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id)
);

CREATE INDEX idx_photos_property ON property_mgmt.photos(property_id, display_order);
CREATE INDEX idx_photos_unit ON property_mgmt.photos(unit_id, display_order);

-- ============================================================================
-- TRIGGERS
-- ============================================================================

-- Auto-update updated_at
CREATE TRIGGER trg_properties_updated_at
    BEFORE UPDATE ON property_mgmt.properties
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_inventory_units_updated_at
    BEFORE UPDATE ON property_mgmt.inventory_units
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_rate_strategies_updated_at
    BEFORE UPDATE ON property_mgmt.rate_strategies
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

-- Protect audit columns
CREATE TRIGGER trg_properties_protect_audit
    BEFORE UPDATE ON property_mgmt.properties
    FOR EACH ROW EXECUTE FUNCTION shared.protect_audit_columns();

CREATE TRIGGER trg_inventory_units_protect_audit
    BEFORE UPDATE ON property_mgmt.inventory_units
    FOR EACH ROW EXECUTE FUNCTION shared.protect_audit_columns();

-- ============================================================================
-- VIEWS
-- ============================================================================

-- Available units view
CREATE VIEW property_mgmt.v_available_units AS
SELECT
    iu.*,
    p.name AS property_name,
    p.property_code,
    COALESCE(
        (SELECT json_agg(json_build_object('category', category, 'name', name))
         FROM property_mgmt.amenities a
         WHERE a.unit_id = iu.id),
        '[]'::json
    ) AS amenities
FROM property_mgmt.inventory_units iu
JOIN property_mgmt.properties p ON iu.property_id = p.id
WHERE iu.status = 'AVAILABLE'
  AND iu.deleted_at IS NULL
  AND p.deleted_at IS NULL;

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON TABLE property_mgmt.properties IS 'Property aggregate root - hotels, resorts, vacation rentals';
COMMENT ON TABLE property_mgmt.inventory_units IS 'Bookable units (rooms, apartments) within a property';
COMMENT ON TABLE property_mgmt.rate_strategies IS 'Pricing strategies with dynamic modifiers';
COMMENT ON COLUMN property_mgmt.properties.settings IS 'Flexible JSON settings: {allow_pets, parking_fee, etc.}';
COMMENT ON COLUMN property_mgmt.rate_strategies.base_rates IS 'Base rates by unit type: {unit_type_id: {amount, currency}}';


