-- ============================================================================
-- StayOS Database Schema - Channel Management Context
-- ============================================================================
-- Description: OTA integrations, channel connections, rate/inventory sync
-- Aggregates: ChannelConnection, ChannelMapping
-- Version: 1.0
-- Date: 2025-12-21
-- ============================================================================

CREATE SCHEMA IF NOT EXISTS channel;

-- ============================================================================
-- ENUMS
-- ============================================================================

CREATE TYPE channel.channel_type AS ENUM (
    'OTA', 'GDS', 'METASEARCH', 'DIRECT', 'WHOLESALER', 'CORPORATE'
);

CREATE TYPE channel.connection_status AS ENUM (
    'ACTIVE', 'INACTIVE', 'SUSPENDED', 'ERROR', 'PENDING_SETUP'
);

CREATE TYPE channel.sync_direction AS ENUM (
    'PUSH', 'PULL', 'BIDIRECTIONAL'
);

CREATE TYPE channel.sync_status AS ENUM (
    'SUCCESS', 'FAILED', 'PARTIAL', 'IN_PROGRESS'
);

CREATE TYPE channel.mapping_type AS ENUM (
    'ROOM_TYPE', 'RATE_PLAN', 'AMENITY', 'CANCELLATION_POLICY'
);

-- ============================================================================
-- TABLES
-- ============================================================================

-- Channel Connections (Aggregate Root)
CREATE TABLE channel.channel_connections (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)
    
    -- Channel details
    channel_name VARCHAR(100) NOT NULL,  -- Booking.com, Expedia, Airbnb, etc.
    channel_type channel.channel_type NOT NULL,
    
    -- Connection
    connection_status channel.connection_status NOT NULL DEFAULT 'PENDING_SETUP',
    
    -- Credentials (encrypted)
    credentials JSONB NOT NULL,
    -- Example: {
    --   "hotel_id": "12345",
    --   "api_key_encrypted": "...",
    --   "username": "...",
    --   "endpoint_url": "https://api.booking.com/..."
    -- }
    
    -- Configuration
    sync_direction channel.sync_direction NOT NULL,
    auto_sync_enabled BOOLEAN NOT NULL DEFAULT TRUE,
    sync_interval_minutes INTEGER DEFAULT 15,
    
    -- Commission
    commission_percentage DECIMAL(5, 2),
    
    -- Last sync
    last_sync_at TIMESTAMPTZ,
    last_sync_status channel.sync_status,
    last_sync_error TEXT,
    
    -- Activation
    activated_at TIMESTAMPTZ,
    deactivated_at TIMESTAMPTZ,
    
    -- Notes
    notes TEXT,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,
    
    CONSTRAINT chk_commission_percentage CHECK (commission_percentage IS NULL OR commission_percentage BETWEEN 0 AND 100)
);

CREATE INDEX idx_channel_connections_property ON channel.channel_connections(property_id);
CREATE INDEX idx_channel_connections_status ON channel.channel_connections(property_id, connection_status);
CREATE INDEX idx_channel_connections_active ON channel.channel_connections(property_id) 
    WHERE connection_status = 'ACTIVE' AND deleted_at IS NULL;

-- Channel Mappings (Entity)
CREATE TABLE channel.channel_mappings (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    channel_connection_id UUID NOT NULL REFERENCES channel.channel_connections(id) ON DELETE CASCADE,
    
    -- Mapping type
    mapping_type channel.mapping_type NOT NULL,
    
    -- Internal (StayOS)
    internal_id UUID NOT NULL,  -- inventory_unit_id, rate_strategy_id, etc.
    internal_code VARCHAR(100),
    internal_name VARCHAR(255),
    
    -- External (Channel)
    external_id VARCHAR(255) NOT NULL,
    external_code VARCHAR(100),
    external_name VARCHAR(255),
    
    -- Mapping metadata
    mapping_data JSONB,
    
    -- Status
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    CONSTRAINT uq_channel_mapping UNIQUE(channel_connection_id, mapping_type, internal_id)
);

CREATE INDEX idx_channel_mappings_connection ON channel.channel_mappings(channel_connection_id);
CREATE INDEX idx_channel_mappings_internal ON channel.channel_mappings(internal_id);
CREATE INDEX idx_channel_mappings_type ON channel.channel_mappings(mapping_type);

-- Channel Bookings (for OTA bookings)
CREATE TABLE channel.channel_bookings (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)
    channel_connection_id UUID NOT NULL REFERENCES channel.channel_connections(id),
    
    -- Channel booking reference
    channel_booking_id VARCHAR(255) NOT NULL,
    channel_confirmation_number VARCHAR(100),
    
    -- Internal reservation
    reservation_id UUID,  -- No FK (cross-context), NULL until imported
    
    -- Booking data (raw from channel)
    booking_data JSONB NOT NULL,
    
    -- Import status
    imported BOOLEAN NOT NULL DEFAULT FALSE,
    imported_at TIMESTAMPTZ,
    import_error TEXT,
    
    -- Modification tracking
    modified_at_channel TIMESTAMPTZ,
    last_synced_at TIMESTAMPTZ,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    CONSTRAINT uq_channel_booking UNIQUE(channel_connection_id, channel_booking_id)
);

CREATE INDEX idx_channel_bookings_property ON channel.channel_bookings(property_id, created_at DESC);
CREATE INDEX idx_channel_bookings_connection ON channel.channel_bookings(channel_connection_id);
CREATE INDEX idx_channel_bookings_reservation ON channel.channel_bookings(reservation_id);
CREATE INDEX idx_channel_bookings_not_imported ON channel.channel_bookings(property_id) 
    WHERE imported = FALSE;

-- Rate/Inventory Sync Log
CREATE TABLE channel.sync_log (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    channel_connection_id UUID NOT NULL REFERENCES channel.channel_connections(id),
    
    -- Sync details
    sync_type VARCHAR(50) NOT NULL,  -- RATE, INVENTORY, BOOKING, RESTRICTION
    sync_direction channel.sync_direction NOT NULL,
    
    -- Status
    status channel.sync_status NOT NULL,
    
    -- Timing
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    duration_ms INTEGER GENERATED ALWAYS AS (
        CASE 
            WHEN completed_at IS NOT NULL THEN
                EXTRACT(EPOCH FROM (completed_at - started_at))::INTEGER * 1000
            ELSE NULL
        END
    ) STORED,
    
    -- Results
    records_processed INTEGER,
    records_succeeded INTEGER,
    records_failed INTEGER,
    
    -- Error details
    error_message TEXT,
    error_details JSONB,
    
    -- Request/Response
    request_payload JSONB,
    response_payload JSONB
);

CREATE INDEX idx_sync_log_connection ON channel.sync_log(channel_connection_id, started_at DESC);
CREATE INDEX idx_sync_log_status ON channel.sync_log(status);
CREATE INDEX idx_sync_log_failed ON channel.sync_log(channel_connection_id) 
    WHERE status = 'FAILED';

-- ============================================================================
-- TRIGGERS
-- ============================================================================

CREATE TRIGGER trg_channel_connections_updated_at
    BEFORE UPDATE ON channel.channel_connections
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_channel_mappings_updated_at
    BEFORE UPDATE ON channel.channel_mappings
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_channel_bookings_updated_at
    BEFORE UPDATE ON channel.channel_bookings
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

-- ============================================================================
-- VIEWS
-- ============================================================================

-- Channel Performance View
CREATE VIEW channel.v_channel_performance AS
SELECT 
    cc.property_id,
    cc.channel_name,
    COUNT(DISTINCT cb.id) AS total_bookings,
    COUNT(DISTINCT cb.id) FILTER (WHERE cb.imported = TRUE) AS imported_bookings,
    COUNT(DISTINCT sl.id) FILTER (WHERE sl.status = 'SUCCESS') AS successful_syncs,
    COUNT(DISTINCT sl.id) FILTER (WHERE sl.status = 'FAILED') AS failed_syncs,
    AVG(sl.duration_ms) AS avg_sync_duration_ms
FROM channel.channel_connections cc
LEFT JOIN channel.channel_bookings cb ON cc.id = cb.channel_connection_id
LEFT JOIN channel.sync_log sl ON cc.id = sl.channel_connection_id
WHERE cc.deleted_at IS NULL
GROUP BY cc.property_id, cc.channel_name;

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON TABLE channel.channel_connections IS 'OTA and channel integrations';
COMMENT ON TABLE channel.channel_mappings IS 'Mapping between internal and external IDs';
COMMENT ON TABLE channel.channel_bookings IS 'Bookings received from channels';
COMMENT ON TABLE channel.sync_log IS 'Rate and inventory synchronization log';
COMMENT ON VIEW channel.v_channel_performance IS 'Channel performance metrics';

