-- ============================================================================
-- Migration: Create Table Reservations Schema
-- ============================================================================
-- Description: Creates schema for managing table reservations
-- Version: 003
-- Date: 2026-01-17
-- Author: StayOS Team
-- Dependencies: 002_create_tables_schema.sql
-- ============================================================================

-- Create table_reservations schema
CREATE SCHEMA IF NOT EXISTS table_reservations;

-- ============================================================================
-- ENUMS
-- ============================================================================

-- Reservation status
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'reservation_status') THEN
        CREATE TYPE table_reservations.reservation_status AS ENUM (
            'PENDING',
            'CONFIRMED',
            'SEATED',
            'COMPLETED',
            'CANCELLED',
            'NO_SHOW'
        );
    END IF;
END$$;

-- Reservation source
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'reservation_source') THEN
        CREATE TYPE table_reservations.reservation_source AS ENUM (
            'PHONE',
            'WEBSITE',
            'MOBILE_APP',
            'WALK_IN',
            'THIRD_PARTY',
            'EMAIL'
        );
    END IF;
END$$;

-- ============================================================================
-- TABLES
-- ============================================================================

-- Table Reservations (Aggregate Root)
CREATE TABLE IF NOT EXISTS table_reservations.reservations (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,
    
    -- Guest information
    guest_id UUID,  -- Optional: link to guest profile in guest schema
    guest_name VARCHAR(255) NOT NULL,
    guest_phone VARCHAR(50) NOT NULL,
    guest_email VARCHAR(255),
    
    -- Reservation details
    reservation_date DATE NOT NULL,
    reservation_time TIME NOT NULL,
    party_size INTEGER NOT NULL CHECK (party_size > 0),
    duration_minutes INTEGER DEFAULT 120 CHECK (duration_minutes > 0),
    
    -- Table assignment
    table_id UUID REFERENCES tables.tables(id),
    preferred_section_id UUID REFERENCES tables.floor_sections(id),
    
    -- Status
    status table_reservations.reservation_status NOT NULL DEFAULT 'PENDING',
    source table_reservations.reservation_source NOT NULL DEFAULT 'PHONE',
    
    -- Special requests
    special_requests TEXT,
    occasion VARCHAR(100),  -- Birthday, Anniversary, Business Meeting, etc.
    dietary_restrictions TEXT[],
    seating_preferences TEXT[],  -- e.g., ['window', 'quiet', 'outdoor']
    
    -- Confirmation
    confirmation_code VARCHAR(20) UNIQUE,
    confirmed_at TIMESTAMPTZ,
    confirmed_by UUID REFERENCES shared.users(id),
    
    -- Reminders
    reminder_sent_at TIMESTAMPTZ,
    reminder_count INTEGER DEFAULT 0,
    
    -- Seating
    seated_at TIMESTAMPTZ,
    seated_by UUID REFERENCES shared.users(id),
    actual_party_size INTEGER,
    
    -- Completion
    completed_at TIMESTAMPTZ,
    
    -- Cancellation
    cancelled_at TIMESTAMPTZ,
    cancelled_by UUID REFERENCES shared.users(id),
    cancellation_reason TEXT,
    
    -- No-show tracking
    marked_no_show_at TIMESTAMPTZ,
    marked_no_show_by UUID REFERENCES shared.users(id),
    no_show_fee_charged BOOLEAN DEFAULT FALSE,
    
    -- Deposit/prepayment
    deposit_required BOOLEAN DEFAULT FALSE,
    deposit_amount shared.money,
    deposit_paid BOOLEAN DEFAULT FALSE,
    deposit_paid_at TIMESTAMPTZ,
    
    -- Notes
    notes TEXT,
    internal_notes TEXT,  -- Staff-only notes
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID REFERENCES shared.users(id),
    updated_by UUID REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1
);

-- Waitlist (for walk-ins when no tables available)
CREATE TABLE IF NOT EXISTS table_reservations.waitlist (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,
    
    -- Guest information
    guest_name VARCHAR(255) NOT NULL,
    guest_phone VARCHAR(50) NOT NULL,
    party_size INTEGER NOT NULL CHECK (party_size > 0),
    
    -- Preferences
    preferred_section_id UUID REFERENCES tables.floor_sections(id),
    seating_preferences TEXT[],
    
    -- Status
    is_active BOOLEAN DEFAULT TRUE,
    estimated_wait_minutes INTEGER,
    
    -- Notification
    notified_at TIMESTAMPTZ,
    notification_method VARCHAR(20),  -- SMS, CALL, etc.
    
    -- Seating
    seated_at TIMESTAMPTZ,
    table_id UUID REFERENCES tables.tables(id),
    
    -- Cancellation
    cancelled_at TIMESTAMPTZ,
    cancellation_reason TEXT,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ
);

-- ============================================================================
-- INDEXES
-- ============================================================================

-- Reservations indexes
CREATE INDEX IF NOT EXISTS idx_reservations_property 
ON table_reservations.reservations(property_id) WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_reservations_date 
ON table_reservations.reservations(property_id, reservation_date) WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_reservations_date_time 
ON table_reservations.reservations(property_id, reservation_date, reservation_time) 
WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_reservations_status 
ON table_reservations.reservations(status) WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_reservations_table 
ON table_reservations.reservations(table_id) WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_reservations_guest 
ON table_reservations.reservations(guest_id) WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_reservations_confirmation 
ON table_reservations.reservations(confirmation_code) WHERE deleted_at IS NULL;

-- Waitlist indexes
CREATE INDEX IF NOT EXISTS idx_waitlist_property 
ON table_reservations.waitlist(property_id) WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS idx_waitlist_active 
ON table_reservations.waitlist(property_id, created_at) 
WHERE is_active = TRUE AND deleted_at IS NULL;

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON SCHEMA table_reservations IS 'Table reservation and waitlist management';
COMMENT ON TABLE table_reservations.reservations IS 'Table reservations for restaurants and bars';
COMMENT ON TABLE table_reservations.waitlist IS 'Waitlist for walk-in customers';

-- Migration complete
DO $$
BEGIN
    RAISE NOTICE 'Migration 003 completed successfully: Table reservations schema created';
END$$;

