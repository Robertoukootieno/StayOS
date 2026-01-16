-- ============================================================================
-- StayOS Database Schema - Shared Components
-- ============================================================================
-- Description: Shared types, enums, functions, and reference tables
-- Version: 1.0
-- Date: 2025-12-21
-- ============================================================================

-- Create shared schema
CREATE SCHEMA IF NOT EXISTS shared;

-- ============================================================================
-- EXTENSIONS
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";      -- UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";       -- Encryption
CREATE EXTENSION IF NOT EXISTS "pg_trgm";        -- Fuzzy text search
CREATE EXTENSION IF NOT EXISTS "btree_gin";      -- GIN indexes on scalar types

-- ============================================================================
-- CUSTOM TYPES & ENUMS
-- ============================================================================

-- Money type (amount + currency)
CREATE TYPE shared.money AS (
    amount NUMERIC(12, 2),
    currency_code CHAR(3)  -- ISO 4217
);

-- Address type
CREATE TYPE shared.address AS (
    street_line1 VARCHAR(255),
    street_line2 VARCHAR(255),
    city VARCHAR(100),
    state_province VARCHAR(100),
    postal_code VARCHAR(20),
    country_code CHAR(2),  -- ISO 3166-1 alpha-2
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8)
);

-- Contact info type
CREATE TYPE shared.contact_info AS (
    email VARCHAR(255),
    phone VARCHAR(20),      -- E.164 format
    alternate_phone VARCHAR(20)
);

-- Common enums
CREATE TYPE shared.status AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED', 'ARCHIVED');
CREATE TYPE shared.priority AS ENUM ('URGENT', 'HIGH', 'NORMAL', 'LOW');
CREATE TYPE shared.severity AS ENUM ('CRITICAL', 'HIGH', 'MEDIUM', 'LOW');

-- ============================================================================
-- REFERENCE TABLES
-- ============================================================================

-- Countries (ISO 3166-1)
CREATE TABLE shared.countries (
    code CHAR(2) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    alpha3 CHAR(3) NOT NULL,
    numeric_code CHAR(3),
    phone_prefix VARCHAR(10),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_countries_name ON shared.countries(name);

-- Currencies (ISO 4217)
CREATE TABLE shared.currencies (
    code CHAR(3) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    symbol VARCHAR(10),
    decimal_places SMALLINT NOT NULL DEFAULT 2,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Timezones (IANA)
CREATE TABLE shared.timezones (
    name VARCHAR(100) PRIMARY KEY,
    utc_offset INTERVAL NOT NULL,
    supports_dst BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Languages (ISO 639-1)
CREATE TABLE shared.languages (
    code CHAR(2) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    native_name VARCHAR(100),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- USERS & AUTHENTICATION (Simplified - integrate with Auth0/Keycloak)
-- ============================================================================

CREATE TABLE shared.users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    external_auth_id VARCHAR(255) UNIQUE,  -- Auth0/Keycloak ID
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    status shared.status NOT NULL DEFAULT 'ACTIVE',
    last_login_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ
);

CREATE INDEX idx_users_email ON shared.users(email) WHERE deleted_at IS NULL;
CREATE INDEX idx_users_status ON shared.users(status) WHERE deleted_at IS NULL;

-- ============================================================================
-- UTILITY FUNCTIONS
-- ============================================================================

-- Function: Update updated_at timestamp
CREATE OR REPLACE FUNCTION shared.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    NEW.version = OLD.version + 1;  -- Optimistic locking
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function: Prevent updates to audit columns
CREATE OR REPLACE FUNCTION shared.protect_audit_columns()
RETURNS TRIGGER AS $$
BEGIN
    NEW.created_at = OLD.created_at;
    NEW.created_by = OLD.created_by;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function: Soft delete
CREATE OR REPLACE FUNCTION shared.soft_delete()
RETURNS TRIGGER AS $$
BEGIN
    NEW.deleted_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function: Generate UUID v7 (time-ordered)
CREATE OR REPLACE FUNCTION shared.uuid_generate_v7()
RETURNS UUID AS $$
DECLARE
    unix_ts_ms BIGINT;
    uuid_bytes BYTEA;
BEGIN
    unix_ts_ms := (EXTRACT(EPOCH FROM clock_timestamp()) * 1000)::BIGINT;
    uuid_bytes := E'\\x' || lpad(to_hex(unix_ts_ms), 12, '0') || 
                  encode(gen_random_bytes(10), 'hex');
    RETURN uuid_bytes::UUID;
END;
$$ LANGUAGE plpgsql;

-- Function: Encrypt PII
CREATE OR REPLACE FUNCTION shared.encrypt_pii(data TEXT, key TEXT)
RETURNS TEXT AS $$
BEGIN
    RETURN encode(pgp_sym_encrypt(data, key), 'base64');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function: Decrypt PII
CREATE OR REPLACE FUNCTION shared.decrypt_pii(encrypted_data TEXT, key TEXT)
RETURNS TEXT AS $$
BEGIN
    RETURN pgp_sym_decrypt(decode(encrypted_data, 'base64'), key);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON SCHEMA shared IS 'Shared types, functions, and reference data used across all bounded contexts';
COMMENT ON FUNCTION shared.update_updated_at_column() IS 'Trigger function to auto-update updated_at and increment version';
COMMENT ON FUNCTION shared.uuid_generate_v7() IS 'Generate time-ordered UUID v7 for better index performance';

