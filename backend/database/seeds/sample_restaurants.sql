-- ============================================================================
-- Sample Data: Restaurants and Bars
-- ============================================================================
-- Description: Sample restaurants, bars, and cafes for testing
-- Date: 2026-01-17
-- ============================================================================

-- Get a sample user ID for created_by/updated_by
DO $$
DECLARE
    sample_user_id UUID;
BEGIN
    -- Get first user or create a system user
    SELECT id INTO sample_user_id FROM shared.users LIMIT 1;
    
    IF sample_user_id IS NULL THEN
        -- Create a system user if none exists
        INSERT INTO shared.users (id, email, full_name, status)
        VALUES (
            '00000000-0000-0000-0000-000000000001',
            'system@stayos.com',
            'System User',
            'ACTIVE'
        )
        ON CONFLICT (id) DO NOTHING;

        sample_user_id := '00000000-0000-0000-0000-000000000001';
    END IF;

    -- Insert sample restaurants and bars
    INSERT INTO property_mgmt.properties (
        id,
        property_code,
        name,
        property_type,
        venue_classification,
        seating_capacity,
        has_outdoor_seating,
        has_bar,
        has_private_dining,
        cuisine_types,
        dress_code,
        parking_available,
        accepts_reservations,
        accepts_walk_ins,
        delivery_available,
        takeout_available,
        address,
        timezone,
        contact_info,
        default_currency,
        default_language,
        total_units,
        total_capacity,
        status,
        created_by,
        updated_by
    ) VALUES
    -- Fine Dining Restaurant
    (
        'a1111111-1111-1111-1111-111111111111',
        'REST-001',
        'La Bella Vista',
        'RESTAURANT',
        'FINE_DINING',
        80,
        TRUE,
        TRUE,
        TRUE,
        ARRAY['Italian', 'Mediterranean'],
        'Business Casual',
        TRUE,
        TRUE,
        FALSE,
        FALSE,
        FALSE,
        '123 Gourmet Street',
        'San Francisco',
        'CA',
        '94102',
        'US',
        'America/Los_Angeles',
        '+1-415-555-0101',
        'reservations@labellavista.com',
        'ACTIVE',
        sample_user_id,
        sample_user_id
    ),
    -- Casual Dining Restaurant
    (
        'a2222222-2222-2222-2222-222222222222',
        'REST-002',
        'The Burger Joint',
        'RESTAURANT',
        'CASUAL_DINING',
        120,
        TRUE,
        TRUE,
        FALSE,
        ARRAY['American', 'Burgers'],
        'Casual',
        TRUE,
        TRUE,
        TRUE,
        TRUE,
        TRUE,
        '456 Main Street',
        'Austin',
        'TX',
        '78701',
        'US',
        'America/Chicago',
        '+1-512-555-0202',
        'info@burgerjoint.com',
        'ACTIVE',
        sample_user_id,
        sample_user_id
    ),
    -- Cocktail Bar
    (
        'a3333333-3333-3333-3333-333333333333',
        'BAR-001',
        'The Mixology Lounge',
        'BAR',
        'LOUNGE',
        60,
        FALSE,
        TRUE,
        TRUE,
        ARRAY['Cocktails', 'Small Plates'],
        'Smart Casual',
        FALSE,
        TRUE,
        TRUE,
        FALSE,
        FALSE,
        '789 Nightlife Avenue',
        'New York',
        'NY',
        '10001',
        'US',
        'America/New_York',
        '+1-212-555-0303',
        'reservations@mixologylounge.com',
        'ACTIVE',
        sample_user_id,
        sample_user_id
    ),
    -- Cafe
    (
        'a4444444-4444-4444-4444-444444444444',
        'CAFE-001',
        'Morning Brew Cafe',
        'CAFE',
        'CAFE',
        40,
        TRUE,
        FALSE,
        FALSE,
        ARRAY['Coffee', 'Breakfast', 'Pastries'],
        'Casual',
        TRUE,
        FALSE,
        TRUE,
        TRUE,
        TRUE,
        '321 Coffee Lane',
        'Seattle',
        'WA',
        '98101',
        'US',
        'America/Los_Angeles',
        '+1-206-555-0404',
        'hello@morningbrew.com',
        'ACTIVE',
        sample_user_id,
        sample_user_id
    ),
    -- Pub
    (
        'a5555555-5555-5555-5555-555555555555',
        'PUB-001',
        'The Irish Pub',
        'PUB',
        'BAR',
        100,
        TRUE,
        TRUE,
        FALSE,
        ARRAY['Irish', 'Pub Food'],
        'Casual',
        TRUE,
        TRUE,
        TRUE,
        FALSE,
        TRUE,
        '654 Pub Street',
        'Boston',
        'MA',
        '02101',
        'US',
        'America/New_York',
        '+1-617-555-0505',
        'info@irishpub.com',
        'ACTIVE',
        sample_user_id,
        sample_user_id
    )
    ON CONFLICT (id) DO NOTHING;

    RAISE NOTICE 'Sample restaurants and bars created successfully';
END$$;

