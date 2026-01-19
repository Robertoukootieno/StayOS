-- Create properties table
CREATE TABLE IF NOT EXISTS properties (
  property_id VARCHAR(255) PRIMARY KEY,
  property_code VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  property_type VARCHAR(50) NOT NULL,
  
  -- Address
  address_line1 VARCHAR(255) NOT NULL,
  address_line2 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state_province VARCHAR(100) NOT NULL,
  postal_code VARCHAR(20) NOT NULL,
  country VARCHAR(100) NOT NULL,
  
  -- Contact
  timezone VARCHAR(100) NOT NULL DEFAULT 'UTC',
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  website VARCHAR(255),
  
  -- Business details
  legal_entity_name VARCHAR(255),
  tax_id VARCHAR(100),
  license_number VARCHAR(100),
  
  -- Configuration
  default_currency CHAR(3) NOT NULL DEFAULT 'USD',
  default_language CHAR(2) NOT NULL DEFAULT 'en',
  check_in_time VARCHAR(10) NOT NULL DEFAULT '15:00',
  check_out_time VARCHAR(10) NOT NULL DEFAULT '11:00',
  
  -- Capacity
  total_units INTEGER NOT NULL DEFAULT 0,
  total_capacity INTEGER NOT NULL DEFAULT 0,
  
  -- Settings (JSONB for flexibility)
  settings JSONB NOT NULL DEFAULT '{}',
  
  -- Status
  status VARCHAR(50) NOT NULL DEFAULT 'active',
  
  -- Audit
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMP,
  
  -- Constraints
  CONSTRAINT properties_property_code_unique UNIQUE (property_code),
  CONSTRAINT properties_property_type_check CHECK (property_type IN ('hotel', 'resort', 'boutique', 'lodge', 'apartment', 'villa', 'hostel')),
  CONSTRAINT properties_status_check CHECK (status IN ('active', 'inactive', 'under_construction', 'temporarily_closed')),
  CONSTRAINT properties_total_units_check CHECK (total_units >= 0),
  CONSTRAINT properties_total_capacity_check CHECK (total_capacity >= 0)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_properties_property_code ON properties(property_code) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_properties_property_type ON properties(property_type) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_properties_status ON properties(status) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_properties_city ON properties(city) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_properties_country ON properties(country) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_properties_created_at ON properties(created_at DESC) WHERE deleted_at IS NULL;

-- Insert sample properties
INSERT INTO properties (
  property_id, property_code, name, property_type,
  address_line1, city, state_province, postal_code, country,
  phone, email, website,
  default_currency, default_language,
  check_in_time, check_out_time,
  total_units, total_capacity,
  status
) VALUES
(
  '01234567-89ab-cdef-0123-456789abcdef',
  'PROP-001',
  'Grand Plaza Hotel',
  'hotel',
  '123 Main Street',
  'Los Angeles',
  'California',
  '90001',
  'USA',
  '+1-555-0100',
  'info@grandplaza.com',
  'https://grandplaza.com',
  'USD',
  'en',
  '15:00',
  '11:00',
  150,
  300,
  'active'
),
(
  '12345678-9abc-def0-1234-56789abcdef0',
  'PROP-002',
  'Sunset Beach Resort',
  'resort',
  '456 Ocean Drive',
  'Miami',
  'Florida',
  '33101',
  'USA',
  '+1-555-0200',
  'info@sunsetbeach.com',
  'https://sunsetbeach.com',
  'USD',
  'en',
  '16:00',
  '10:00',
  200,
  500,
  'active'
),
(
  '23456789-abcd-ef01-2345-6789abcdef01',
  'PROP-003',
  'Downtown Boutique Inn',
  'boutique',
  '789 Park Avenue',
  'New York',
  'New York',
  '10001',
  'USA',
  '+1-555-0300',
  'info@downtownboutique.com',
  'https://downtownboutique.com',
  'USD',
  'en',
  '14:00',
  '12:00',
  50,
  100,
  'active'
)
ON CONFLICT (property_code) DO NOTHING;

-- Add comments
COMMENT ON TABLE properties IS 'Property aggregate root - hotels, resorts, vacation rentals';
COMMENT ON COLUMN properties.settings IS 'Flexible JSON settings: {allow_pets, parking_fee, etc.}';
COMMENT ON COLUMN properties.property_type IS 'Type of property: hotel, resort, boutique, lodge, apartment, villa, hostel';
COMMENT ON COLUMN properties.status IS 'Property status: active, inactive, under_construction, temporarily_closed';

