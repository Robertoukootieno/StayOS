-- ============================================
-- StayOS Sample Data
-- ============================================
-- This file contains sample data for development and testing
-- Run after all schemas have been created

-- ============================================
-- Sample Properties
-- ============================================

INSERT INTO properties (
    id,
    name,
    classification,
    star_rating,
    location_street,
    location_city,
    location_state,
    location_postal_code,
    location_country,
    coordinates_latitude,
    coordinates_longitude,
    timezone,
    default_currency,
    check_in_time,
    check_out_time,
    status,
    created_at,
    updated_at
) VALUES
(
    uuid_generate_v7(),
    'Grand Plaza Hotel',
    'HOTEL',
    4.5,
    '123 Main Street',
    'San Francisco',
    'CA',
    '94102',
    'US',
    37.7749,
    -122.4194,
    'America/Los_Angeles',
    'USD',
    '15:00:00',
    '11:00:00',
    'ACTIVE',
    NOW(),
    NOW()
),
(
    uuid_generate_v7(),
    'Seaside Resort & Spa',
    'RESORT',
    5.0,
    '456 Ocean Drive',
    'Miami Beach',
    'FL',
    '33139',
    'US',
    25.7907,
    -80.1300,
    'America/New_York',
    'USD',
    '16:00:00',
    '11:00:00',
    'ACTIVE',
    NOW(),
    NOW()
),
(
    uuid_generate_v7(),
    'Downtown Boutique Inn',
    'BOUTIQUE',
    4.0,
    '789 Market Street',
    'Seattle',
    'WA',
    '98101',
    'US',
    47.6062,
    -122.3321,
    'America/Los_Angeles',
    'USD',
    '14:00:00',
    '12:00:00',
    'ACTIVE',
    NOW(),
    NOW()
),
(
    uuid_generate_v7(),
    'Mountain View Lodge',
    'LODGE',
    3.5,
    '321 Alpine Road',
    'Aspen',
    'CO',
    '81611',
    'US',
    39.1911,
    -106.8175,
    'America/Denver',
    'USD',
    '15:00:00',
    '10:00:00',
    'ACTIVE',
    NOW(),
    NOW()
),
(
    uuid_generate_v7(),
    'City Center Hostel',
    'HOSTEL',
    2.5,
    '555 Broadway',
    'New York',
    'NY',
    '10012',
    'US',
    40.7128,
    -74.0060,
    'America/New_York',
    'USD',
    '14:00:00',
    '11:00:00',
    'ACTIVE',
    NOW(),
    NOW()
);

-- ============================================
-- Sample Contact Information
-- ============================================

INSERT INTO property_contact_info (
    property_id,
    email,
    phone,
    website,
    created_at,
    updated_at
)
SELECT 
    id,
    LOWER(REPLACE(name, ' ', '')) || '@example.com',
    '+1-555-' || LPAD(FLOOR(RANDOM() * 10000)::TEXT, 4, '0'),
    'https://www.' || LOWER(REPLACE(name, ' ', '')) || '.com',
    NOW(),
    NOW()
FROM properties;

-- ============================================
-- Sample Amenities
-- ============================================

INSERT INTO property_amenities (
    property_id,
    amenity_code,
    created_at
)
SELECT 
    p.id,
    unnest(ARRAY['WIFI', 'PARKING', 'POOL', 'GYM', 'RESTAURANT', 'BAR', 'SPA', 'CONCIERGE'])
FROM properties p
WHERE p.star_rating >= 4.0;

INSERT INTO property_amenities (
    property_id,
    amenity_code,
    created_at
)
SELECT 
    p.id,
    unnest(ARRAY['WIFI', 'PARKING'])
FROM properties p
WHERE p.star_rating < 4.0;

-- ============================================
-- Success Message
-- ============================================

DO $$
DECLARE
    property_count INTEGER;
    contact_count INTEGER;
    amenity_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO property_count FROM properties;
    SELECT COUNT(*) INTO contact_count FROM property_contact_info;
    SELECT COUNT(*) INTO amenity_count FROM property_amenities;
    
    RAISE NOTICE '';
    RAISE NOTICE '✅ Sample data inserted successfully!';
    RAISE NOTICE '';
    RAISE NOTICE 'Properties: %', property_count;
    RAISE NOTICE 'Contact Info: %', contact_count;
    RAISE NOTICE 'Amenities: %', amenity_count;
    RAISE NOTICE '';
END $$;

