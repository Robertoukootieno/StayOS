-- ============================================================================
-- Sample Data: Restaurants and Bars (Version 2 - Simplified)
-- ============================================================================
-- Description: Sample restaurants and bars for testing
-- Date: 2026-01-17
-- ============================================================================

DO $$
DECLARE
    sample_user_id UUID;
BEGIN
    -- Get or create sample user
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
        ROW('123 Gourmet Street', NULL, 'San Francisco', 'CA', '94102', 'US', NULL, NULL)::shared.address,
        'America/Los_Angeles',
        ROW('reservations@labellavista.com', '+1-415-555-0101', NULL)::shared.contact_info,
        'USD',
        'en',
        1,
        80,
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
        ROW('456 Main Street', NULL, 'Austin', 'TX', '78701', 'US', NULL, NULL)::shared.address,
        'America/Chicago',
        ROW('info@burgerjoint.com', '+1-512-555-0202', NULL)::shared.contact_info,
        'USD',
        'en',
        1,
        120,
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
        ROW('789 Nightlife Avenue', NULL, 'New York', 'NY', '10001', 'US', NULL, NULL)::shared.address,
        'America/New_York',
        ROW('reservations@mixologylounge.com', '+1-212-555-0303', NULL)::shared.contact_info,
        'USD',
        'en',
        1,
        60,
        'ACTIVE',
        sample_user_id,
        sample_user_id
    )
    ON CONFLICT (id) DO NOTHING;

    RAISE NOTICE 'Sample restaurants and bars created successfully!';
END $$;

