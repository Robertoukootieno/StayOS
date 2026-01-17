-- ============================================================================
-- Sample Data: Tables and Floor Sections (Version 2 - Simplified)
-- ============================================================================
-- Description: Sample tables and floor sections for La Bella Vista restaurant
-- Date: 2026-01-17
-- ============================================================================

DO $$
DECLARE
    sample_user_id UUID;
    restaurant_id UUID := 'a1111111-1111-1111-1111-111111111111'; -- La Bella Vista
    main_dining_id UUID;
    patio_id UUID;
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
    
    -- Create floor sections for La Bella Vista
    INSERT INTO tables.floor_sections (
        id, property_id, section_name, description, floor_level,
        is_outdoor, is_smoking, is_private, display_order, color_code,
        max_capacity, created_by, updated_by
    ) VALUES
    (
        'f1111111-1111-1111-1111-111111111111',
        restaurant_id,
        'Main Dining Room',
        'Main indoor dining area with elegant ambiance',
        1,
        FALSE,
        FALSE,
        FALSE,
        1,
        '#3498db',
        50,
        sample_user_id,
        sample_user_id
    ),
    (
        'f2222222-2222-2222-2222-222222222222',
        restaurant_id,
        'Patio',
        'Outdoor patio with city views',
        1,
        TRUE,
        FALSE,
        FALSE,
        2,
        '#2ecc71',
        20,
        sample_user_id,
        sample_user_id
    )
    ON CONFLICT (id) DO NOTHING;
    
    main_dining_id := 'f1111111-1111-1111-1111-111111111111';
    patio_id := 'f2222222-2222-2222-2222-222222222222';
    
    -- Create tables for Main Dining Room
    INSERT INTO tables.tables (
        property_id, section_id, table_number, table_name,
        min_capacity, max_capacity, shape, status,
        position_x, position_y, rotation, width, height,
        is_accessible, is_high_top, has_power_outlet, has_window_view,
        is_combinable, created_by, updated_by
    ) VALUES
    -- Two-tops
    (restaurant_id, main_dining_id, '101', 'Table 101', 2, 2, 'SQUARE', 'AVAILABLE', 50, 50, 0, 80, 80, FALSE, FALSE, FALSE, TRUE, FALSE, sample_user_id, sample_user_id),
    (restaurant_id, main_dining_id, '102', 'Table 102', 2, 2, 'SQUARE', 'AVAILABLE', 150, 50, 0, 80, 80, FALSE, FALSE, FALSE, TRUE, FALSE, sample_user_id, sample_user_id),
    (restaurant_id, main_dining_id, '103', 'Table 103', 2, 2, 'SQUARE', 'AVAILABLE', 250, 50, 0, 80, 80, TRUE, FALSE, FALSE, FALSE, FALSE, sample_user_id, sample_user_id),
    
    -- Four-tops
    (restaurant_id, main_dining_id, '201', 'Table 201', 2, 4, 'ROUND', 'AVAILABLE', 50, 200, 0, 120, 120, FALSE, FALSE, TRUE, FALSE, TRUE, sample_user_id, sample_user_id),
    (restaurant_id, main_dining_id, '202', 'Table 202', 2, 4, 'ROUND', 'AVAILABLE', 200, 200, 0, 120, 120, FALSE, FALSE, TRUE, FALSE, TRUE, sample_user_id, sample_user_id),
    (restaurant_id, main_dining_id, '203', 'Table 203', 2, 4, 'SQUARE', 'AVAILABLE', 350, 200, 0, 120, 120, FALSE, FALSE, FALSE, FALSE, TRUE, sample_user_id, sample_user_id),
    
    -- Six-tops
    (restaurant_id, main_dining_id, '301', 'Table 301', 4, 6, 'RECTANGLE', 'AVAILABLE', 50, 350, 0, 180, 100, FALSE, FALSE, FALSE, FALSE, TRUE, sample_user_id, sample_user_id),
    (restaurant_id, main_dining_id, '302', 'Table 302', 4, 6, 'RECTANGLE', 'AVAILABLE', 250, 350, 0, 180, 100, FALSE, FALSE, FALSE, FALSE, TRUE, sample_user_id, sample_user_id),
    
    -- Booths
    (restaurant_id, main_dining_id, '401', 'Booth 1', 2, 4, 'BOOTH', 'AVAILABLE', 500, 50, 0, 150, 100, FALSE, FALSE, TRUE, FALSE, FALSE, sample_user_id, sample_user_id),
    (restaurant_id, main_dining_id, '402', 'Booth 2', 2, 4, 'BOOTH', 'AVAILABLE', 500, 200, 0, 150, 100, FALSE, FALSE, TRUE, FALSE, FALSE, sample_user_id, sample_user_id),
    (restaurant_id, main_dining_id, '403', 'Booth 3', 2, 4, 'BOOTH', 'AVAILABLE', 500, 350, 0, 150, 100, FALSE, FALSE, TRUE, FALSE, FALSE, sample_user_id, sample_user_id),
    
    -- Patio tables
    (restaurant_id, patio_id, 'P01', 'Patio Table 1', 2, 4, 'ROUND', 'AVAILABLE', 100, 100, 0, 100, 100, FALSE, FALSE, FALSE, TRUE, FALSE, sample_user_id, sample_user_id),
    (restaurant_id, patio_id, 'P02', 'Patio Table 2', 2, 4, 'ROUND', 'AVAILABLE', 250, 100, 0, 100, 100, FALSE, FALSE, FALSE, TRUE, FALSE, sample_user_id, sample_user_id),
    (restaurant_id, patio_id, 'P03', 'Patio Table 3', 2, 4, 'ROUND', 'AVAILABLE', 400, 100, 0, 100, 100, FALSE, FALSE, FALSE, TRUE, FALSE, sample_user_id, sample_user_id),
    (restaurant_id, patio_id, 'P04', 'Patio Table 4', 2, 2, 'SQUARE', 'AVAILABLE', 100, 250, 0, 80, 80, FALSE, FALSE, FALSE, TRUE, FALSE, sample_user_id, sample_user_id),
    (restaurant_id, patio_id, 'P05', 'Patio Table 5', 2, 2, 'SQUARE', 'AVAILABLE', 250, 250, 0, 80, 80, FALSE, FALSE, FALSE, TRUE, FALSE, sample_user_id, sample_user_id);

    RAISE NOTICE 'Sample tables and floor sections created successfully!';
    RAISE NOTICE 'Created % floor sections', (SELECT COUNT(*) FROM tables.floor_sections WHERE property_id = restaurant_id);
    RAISE NOTICE 'Created % tables', (SELECT COUNT(*) FROM tables.tables WHERE property_id = restaurant_id);
END $$;

