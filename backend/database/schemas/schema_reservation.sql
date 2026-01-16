-- ============================================================================
-- StayOS Database Schema - Reservation Context
-- ============================================================================
-- Description: Reservation management, quotes, cancellation policies
-- Aggregates: Reservation, Quote
-- Version: 1.0
-- Date: 2025-12-21
-- ============================================================================

CREATE SCHEMA IF NOT EXISTS reservation;

-- ============================================================================
-- ENUMS
-- ============================================================================

CREATE TYPE reservation.reservation_status AS ENUM (
    'QUOTE', 'PENDING', 'CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT', 
    'CANCELLED', 'NO_SHOW'
);

CREATE TYPE reservation.booking_source AS ENUM (
    'DIRECT_WEBSITE', 'DIRECT_PHONE', 'DIRECT_EMAIL', 'DIRECT_WALK_IN',
    'OTA_BOOKING', 'OTA_EXPEDIA', 'OTA_AIRBNB', 'CORPORATE', 'TRAVEL_AGENT'
);

CREATE TYPE reservation.cancellation_policy_type AS ENUM (
    'FLEXIBLE', 'MODERATE', 'STRICT', 'NON_REFUNDABLE'
);

CREATE TYPE reservation.guarantee_type AS ENUM (
    'CREDIT_CARD', 'DEPOSIT', 'CORPORATE_ACCOUNT', 'NONE'
);

CREATE TYPE reservation.quote_status AS ENUM (
    'DRAFT', 'SENT', 'VIEWED', 'ACCEPTED', 'DECLINED', 'EXPIRED'
);

-- ============================================================================
-- TABLES
-- ============================================================================

-- Cancellation Policies
CREATE TABLE reservation.cancellation_policies (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)
    
    -- Policy details
    policy_name VARCHAR(100) NOT NULL,
    policy_type reservation.cancellation_policy_type NOT NULL,
    description TEXT,
    
    -- Cancellation windows (hours before check-in)
    free_cancellation_hours INTEGER,  -- NULL = no free cancellation
    partial_refund_hours INTEGER,
    partial_refund_percentage INTEGER,  -- 0-100
    
    -- Fees
    cancellation_fee_percentage INTEGER,  -- 0-100
    no_show_fee_percentage INTEGER DEFAULT 100,  -- 0-100
    
    -- Validity
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,
    
    CONSTRAINT chk_refund_percentage CHECK (partial_refund_percentage BETWEEN 0 AND 100),
    CONSTRAINT chk_cancellation_fee CHECK (cancellation_fee_percentage BETWEEN 0 AND 100),
    CONSTRAINT chk_no_show_fee CHECK (no_show_fee_percentage BETWEEN 0 AND 100)
);

CREATE INDEX idx_cancellation_policies_property ON reservation.cancellation_policies(property_id);
CREATE INDEX idx_cancellation_policies_active ON reservation.cancellation_policies(property_id, is_active);

-- Reservations (Aggregate Root)
CREATE TABLE reservation.reservations (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)
    
    -- Confirmation
    confirmation_number VARCHAR(50) UNIQUE NOT NULL,
    
    -- Guest
    guest_id UUID NOT NULL,  -- No FK (cross-context)
    guest_email VARCHAR(255) NOT NULL,
    guest_phone VARCHAR(20),
    
    -- Dates
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    nights INTEGER GENERATED ALWAYS AS (check_out_date - check_in_date) STORED,
    
    -- Occupancy
    adults INTEGER NOT NULL,
    children INTEGER NOT NULL DEFAULT 0,
    
    -- Status
    status reservation.reservation_status NOT NULL DEFAULT 'PENDING',
    
    -- Booking source
    booking_source reservation.booking_source NOT NULL,
    booking_reference VARCHAR(100),  -- External reference (OTA booking ID)
    
    -- Special requests
    special_requests TEXT,
    
    -- Pricing
    total_amount shared.money NOT NULL,
    currency CHAR(3) NOT NULL REFERENCES shared.currencies(code),
    
    -- Guarantee
    guarantee_type reservation.guarantee_type NOT NULL,
    credit_card_last_4 VARCHAR(4),
    
    -- Cancellation
    cancellation_policy_id UUID REFERENCES reservation.cancellation_policies(id),
    cancelled_at TIMESTAMPTZ,
    cancellation_reason TEXT,
    cancellation_fee shared.money,
    
    -- No-show
    no_show_at TIMESTAMPTZ,
    no_show_fee shared.money,
    
    -- Commission (for OTA bookings)
    commission_percentage DECIMAL(5, 2),
    commission_amount shared.money,
    
    -- Notes
    internal_notes TEXT,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID REFERENCES shared.users(id),
    updated_by UUID REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,
    
    CONSTRAINT chk_reservation_dates CHECK (check_out_date > check_in_date),
    CONSTRAINT chk_adults_positive CHECK (adults > 0),
    CONSTRAINT chk_commission_percentage CHECK (commission_percentage IS NULL OR commission_percentage BETWEEN 0 AND 100)
);

CREATE INDEX idx_reservations_property ON reservation.reservations(property_id, check_in_date);
CREATE INDEX idx_reservations_guest ON reservation.reservations(guest_id);
CREATE INDEX idx_reservations_confirmation ON reservation.reservations(confirmation_number);
CREATE INDEX idx_reservations_status ON reservation.reservations(property_id, status) WHERE deleted_at IS NULL;
CREATE INDEX idx_reservations_dates ON reservation.reservations(property_id, check_in_date, check_out_date);
CREATE INDEX idx_reservations_upcoming ON reservation.reservations(property_id)
    WHERE status = 'CONFIRMED' AND check_in_date >= CURRENT_DATE;

-- Reservation Line Items (room nights)
CREATE TABLE reservation.reservation_line_items (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    reservation_id UUID NOT NULL REFERENCES reservation.reservations(id) ON DELETE CASCADE,

    -- Unit
    inventory_unit_id UUID NOT NULL,  -- No FK (cross-context)
    unit_number VARCHAR(50),

    -- Rate
    rate_strategy_id UUID,  -- No FK (cross-context)
    nightly_rate shared.money NOT NULL,

    -- Dates
    date DATE NOT NULL,

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_reservation_unit_date UNIQUE(reservation_id, inventory_unit_id, date)
);

CREATE INDEX idx_reservation_line_items_reservation ON reservation.reservation_line_items(reservation_id);
CREATE INDEX idx_reservation_line_items_unit ON reservation.reservation_line_items(inventory_unit_id, date);

-- Quotes (Aggregate Root)
CREATE TABLE reservation.quotes (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)

    -- Quote number
    quote_number VARCHAR(50) UNIQUE NOT NULL,

    -- Guest
    guest_id UUID,  -- No FK (cross-context), nullable for new guests
    guest_email VARCHAR(255) NOT NULL,
    guest_name VARCHAR(255) NOT NULL,

    -- Dates
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    nights INTEGER GENERATED ALWAYS AS (check_out_date - check_in_date) STORED,

    -- Occupancy
    adults INTEGER NOT NULL,
    children INTEGER NOT NULL DEFAULT 0,

    -- Pricing
    total_amount shared.money NOT NULL,
    currency CHAR(3) NOT NULL REFERENCES shared.currencies(code),

    -- Quote details
    quote_items JSONB NOT NULL,
    -- Example: [
    --   {
    --     "item_type": "ROOM",
    --     "description": "Deluxe King Room x 3 nights",
    --     "quantity": 3,
    --     "unit_price": {"amount": 150.00, "currency": "USD"},
    --     "total": {"amount": 450.00, "currency": "USD"}
    --   },
    --   {
    --     "item_type": "TAX",
    --     "description": "Tourism Tax",
    --     "total": {"amount": 45.00, "currency": "USD"}
    --   }
    -- ]

    -- Status
    status reservation.quote_status NOT NULL DEFAULT 'DRAFT',

    -- Validity
    valid_until DATE NOT NULL,

    -- Sent details
    sent_at TIMESTAMPTZ,
    sent_to_email VARCHAR(255),
    viewed_at TIMESTAMPTZ,

    -- Acceptance
    accepted_at TIMESTAMPTZ,
    declined_at TIMESTAMPTZ,
    decline_reason TEXT,

    -- Conversion
    converted_to_reservation_id UUID REFERENCES reservation.reservations(id),

    -- Notes
    internal_notes TEXT,
    guest_facing_notes TEXT,

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT chk_quote_dates CHECK (check_out_date > check_in_date),
    CONSTRAINT chk_quote_adults CHECK (adults > 0)
);

CREATE INDEX idx_quotes_property ON reservation.quotes(property_id, created_at DESC);
CREATE INDEX idx_quotes_guest ON reservation.quotes(guest_id);
CREATE INDEX idx_quotes_status ON reservation.quotes(property_id, status);
CREATE INDEX idx_quotes_expiring ON reservation.quotes(property_id)
    WHERE status = 'SENT' AND valid_until BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '7 days';

-- ============================================================================
-- TRIGGERS
-- ============================================================================

CREATE TRIGGER trg_cancellation_policies_updated_at
    BEFORE UPDATE ON reservation.cancellation_policies
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_reservations_updated_at
    BEFORE UPDATE ON reservation.reservations
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_quotes_updated_at
    BEFORE UPDATE ON reservation.quotes
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

-- ============================================================================
-- VIEWS
-- ============================================================================

-- Occupancy View
CREATE VIEW reservation.v_occupancy AS
SELECT
    r.property_id,
    rli.date,
    COUNT(DISTINCT rli.inventory_unit_id) AS occupied_units,
    SUM(rli.nightly_rate.amount) AS total_revenue
FROM reservation.reservations r
JOIN reservation.reservation_line_items rli ON r.id = rli.reservation_id
WHERE r.status IN ('CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT')
  AND r.deleted_at IS NULL
GROUP BY r.property_id, rli.date;

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON TABLE reservation.reservations IS 'Reservation aggregate - bookings, confirmations, cancellations';
COMMENT ON TABLE reservation.quotes IS 'Quote aggregate - pre-reservation quotes with validity';
COMMENT ON COLUMN reservation.reservations.nights IS 'Auto-calculated: check_out_date - check_in_date';
COMMENT ON VIEW reservation.v_occupancy IS 'Daily occupancy and revenue by property';

