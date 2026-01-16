-- ============================================
-- Simple Properties Table for API Testing
-- ============================================
-- This creates a simplified properties table that matches
-- what the current API expects

-- Create uuid_generate_v7 function if it doesn't exist
CREATE OR REPLACE FUNCTION uuid_generate_v7() RETURNS uuid
AS $$
DECLARE
  unix_ts_ms BIGINT;
  uuid_bytes BYTEA;
BEGIN
  unix_ts_ms = (EXTRACT(EPOCH FROM clock_timestamp()) * 1000)::BIGINT;
  uuid_bytes = E'\\x' ||
    LPAD(TO_HEX((unix_ts_ms >> 32)::INT), 8, '0') ||
    LPAD(TO_HEX((unix_ts_ms & 4294967295)::BIGINT), 8, '0') ||
    LPAD(TO_HEX((RANDOM() * 65535)::INT), 4, '0') ||
    LPAD(TO_HEX(((RANDOM() * 16383)::INT | 32768)), 4, '0') ||
    LPAD(TO_HEX((RANDOM() * 4294967295)::BIGINT), 8, '0') ||
    LPAD(TO_HEX((RANDOM() * 4294967295)::BIGINT), 8, '0');
  RETURN uuid_bytes::UUID;
END;
$$ LANGUAGE plpgsql;

-- Create properties table
CREATE TABLE IF NOT EXISTS properties (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v7(),
    name VARCHAR(255) NOT NULL,
    classification VARCHAR(50) NOT NULL,
    star_rating DECIMAL(2,1),
    timezone VARCHAR(100) NOT NULL DEFAULT 'UTC',
    status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE
);

-- Create index on status and deleted_at for efficient queries
CREATE INDEX IF NOT EXISTS idx_properties_status ON properties(status) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_properties_created_at ON properties(created_at DESC);

-- Insert sample data
INSERT INTO properties (
    name,
    classification,
    star_rating,
    timezone,
    status
) VALUES
(
    'Grand Plaza Hotel',
    'HOTEL',
    4.5,
    'America/Los_Angeles',
    'ACTIVE'
),
(
    'Sunset Beach Resort',
    'RESORT',
    5.0,
    'America/Los_Angeles',
    'ACTIVE'
),
(
    'Downtown Boutique Inn',
    'BOUTIQUE',
    4.0,
    'America/New_York',
    'ACTIVE'
),
(
    'Mountain View Lodge',
    'LODGE',
    3.5,
    'America/Denver',
    'ACTIVE'
),
(
    'City Center Apartments',
    'APARTMENT',
    4.0,
    'America/Chicago',
    'ACTIVE'
);

-- Display inserted data
SELECT 
    id,
    name,
    classification,
    star_rating,
    timezone,
    status,
    created_at
FROM properties
ORDER BY created_at DESC;

