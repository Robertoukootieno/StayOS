-- ============================================================================
-- StayOS Database Schema - Food & Beverage Context (OPTIONAL MODULE)
-- ============================================================================
-- Description: Restaurant, room service, menu, inventory management
-- Aggregates: FoodBeverageOrder, MenuItem, InventoryItem
-- Version: 1.0
-- Date: 2025-12-21
-- ============================================================================

CREATE SCHEMA IF NOT EXISTS fb;

-- ============================================================================
-- ENUMS
-- ============================================================================

CREATE TYPE fb.order_type AS ENUM (
    'DINE_IN', 'ROOM_SERVICE', 'TAKEAWAY', 'DELIVERY', 'BANQUET'
);

CREATE TYPE fb.order_status AS ENUM (
    'PENDING', 'CONFIRMED', 'PREPARING', 'READY', 'SERVED', 
    'COMPLETED', 'CANCELLED'
);

CREATE TYPE fb.menu_category AS ENUM (
    'APPETIZER', 'MAIN_COURSE', 'DESSERT', 'BEVERAGE', 
    'BREAKFAST', 'LUNCH', 'DINNER', 'SNACK', 'ALCOHOL'
);

CREATE TYPE fb.dietary_restriction AS ENUM (
    'VEGETARIAN', 'VEGAN', 'GLUTEN_FREE', 'DAIRY_FREE', 
    'NUT_FREE', 'HALAL', 'KOSHER', 'NONE'
);

CREATE TYPE fb.inventory_unit AS ENUM (
    'KG', 'G', 'L', 'ML', 'PIECE', 'PORTION', 'BOTTLE', 'CAN'
);

CREATE TYPE fb.stock_status AS ENUM (
    'IN_STOCK', 'LOW_STOCK', 'OUT_OF_STOCK', 'DISCONTINUED'
);

-- ============================================================================
-- TABLES
-- ============================================================================

-- Menu Items (Aggregate Root)
CREATE TABLE fb.menu_items (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)
    
    -- Item details
    item_code VARCHAR(50) UNIQUE NOT NULL,
    item_name VARCHAR(255) NOT NULL,
    description TEXT,
    
    -- Category
    category fb.menu_category NOT NULL,
    
    -- Pricing
    price shared.money NOT NULL,
    currency CHAR(3) NOT NULL REFERENCES shared.currencies(code),
    
    -- Dietary info
    dietary_restrictions fb.dietary_restriction[] NOT NULL DEFAULT '{}',
    allergens TEXT[],
    calories INTEGER,
    
    -- Availability
    is_available BOOLEAN NOT NULL DEFAULT TRUE,
    available_times JSONB,  -- {"breakfast": true, "lunch": true, "dinner": false}
    
    -- Preparation
    preparation_time_minutes INTEGER,
    
    -- Recipe/Ingredients (simplified)
    ingredients JSONB,
    -- Example: [
    --   {"inventory_item_id": "uuid", "quantity": 0.2, "unit": "KG"},
    --   {"inventory_item_id": "uuid", "quantity": 0.1, "unit": "L"}
    -- ]
    
    -- Photo
    photo_url VARCHAR(500),
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_menu_items_property ON fb.menu_items(property_id);
CREATE INDEX idx_menu_items_category ON fb.menu_items(property_id, category);
CREATE INDEX idx_menu_items_available ON fb.menu_items(property_id) 
    WHERE is_available = TRUE AND deleted_at IS NULL;

-- Food & Beverage Orders (Aggregate Root)
CREATE TABLE fb.fb_orders (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)
    
    -- Order number
    order_number VARCHAR(50) UNIQUE NOT NULL,
    
    -- Order type
    order_type fb.order_type NOT NULL,
    
    -- Guest/Customer
    guest_id UUID,  -- No FK (cross-context), nullable for walk-ins
    stay_id UUID,  -- No FK (cross-context)
    table_number VARCHAR(20),
    room_number VARCHAR(20),
    
    -- Status
    status fb.order_status NOT NULL DEFAULT 'PENDING',
    
    -- Timing
    ordered_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    confirmed_at TIMESTAMPTZ,
    preparing_at TIMESTAMPTZ,
    ready_at TIMESTAMPTZ,
    served_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    
    -- Delivery (for room service)
    delivery_requested_time TIMESTAMPTZ,
    delivery_actual_time TIMESTAMPTZ,
    delivery_staff_id UUID,  -- No FK (cross-context)
    
    -- Pricing
    subtotal shared.money NOT NULL,
    tax_amount shared.money NOT NULL,
    service_charge shared.money,
    total_amount shared.money NOT NULL,
    currency CHAR(3) NOT NULL REFERENCES shared.currencies(code),
    
    -- Payment
    charge_to_room BOOLEAN NOT NULL DEFAULT FALSE,
    folio_id UUID,  -- No FK (cross-context)
    paid BOOLEAN NOT NULL DEFAULT FALSE,
    
    -- Special instructions
    special_instructions TEXT,
    
    -- Cancellation
    cancelled_at TIMESTAMPTZ,
    cancellation_reason TEXT,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID REFERENCES shared.users(id),
    updated_by UUID REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_fb_orders_property ON fb.fb_orders(property_id, ordered_at DESC);
CREATE INDEX idx_fb_orders_guest ON fb.fb_orders(guest_id);
CREATE INDEX idx_fb_orders_status ON fb.fb_orders(property_id, status);
CREATE INDEX idx_fb_orders_active ON fb.fb_orders(property_id) 
    WHERE status IN ('PENDING', 'CONFIRMED', 'PREPARING', 'READY');

-- Order Items
CREATE TABLE fb.fb_order_items (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    order_id UUID NOT NULL REFERENCES fb.fb_orders(id) ON DELETE CASCADE,
    
    -- Menu item
    menu_item_id UUID NOT NULL REFERENCES fb.menu_items(id),
    item_name VARCHAR(255) NOT NULL,  -- Snapshot at order time
    
    -- Quantity
    quantity INTEGER NOT NULL DEFAULT 1,
    
    -- Pricing
    unit_price shared.money NOT NULL,
    total_price shared.money NOT NULL,
    
    -- Customization
    customizations TEXT,  -- "No onions, extra cheese"
    
    -- Status
    is_ready BOOLEAN NOT NULL DEFAULT FALSE,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    CONSTRAINT chk_quantity_positive CHECK (quantity > 0)
);

CREATE INDEX idx_fb_order_items_order ON fb.fb_order_items(order_id);
CREATE INDEX idx_fb_order_items_menu_item ON fb.fb_order_items(menu_item_id);

-- Inventory Items (Aggregate Root)
CREATE TABLE fb.inventory_items (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)

    -- Item details
    item_code VARCHAR(50) UNIQUE NOT NULL,
    item_name VARCHAR(255) NOT NULL,
    description TEXT,

    -- Category
    category VARCHAR(100),  -- PRODUCE, MEAT, DAIRY, DRY_GOODS, BEVERAGES, etc.

    -- Unit
    unit fb.inventory_unit NOT NULL,

    -- Stock levels
    current_stock DECIMAL(10, 2) NOT NULL DEFAULT 0,
    minimum_stock DECIMAL(10, 2) NOT NULL,
    reorder_point DECIMAL(10, 2) NOT NULL,

    -- Status
    stock_status fb.stock_status GENERATED ALWAYS AS (
        CASE
            WHEN current_stock <= 0 THEN 'OUT_OF_STOCK'::fb.stock_status
            WHEN current_stock <= minimum_stock THEN 'LOW_STOCK'::fb.stock_status
            ELSE 'IN_STOCK'::fb.stock_status
        END
    ) STORED,

    -- Pricing
    unit_cost shared.money,
    currency CHAR(3) REFERENCES shared.currencies(code),

    -- Storage
    storage_location VARCHAR(100),

    -- Expiry tracking
    perishable BOOLEAN NOT NULL DEFAULT FALSE,
    shelf_life_days INTEGER,

    -- Supplier
    supplier_id UUID,  -- No FK (cross-context to procurement)

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT chk_stock_positive CHECK (current_stock >= 0)
);

CREATE INDEX idx_inventory_items_property ON fb.inventory_items(property_id);
CREATE INDEX idx_inventory_items_status ON fb.inventory_items(property_id, stock_status);
CREATE INDEX idx_inventory_items_low_stock ON fb.inventory_items(property_id)
    WHERE current_stock <= reorder_point;

-- Stock Batches (for FIFO tracking)
CREATE TABLE fb.stock_batches (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    inventory_item_id UUID NOT NULL REFERENCES fb.inventory_items(id),

    -- Batch details
    batch_number VARCHAR(100),

    -- Quantity
    quantity DECIMAL(10, 2) NOT NULL,
    remaining_quantity DECIMAL(10, 2) NOT NULL,

    -- Dates
    received_date DATE NOT NULL,
    expiry_date DATE,

    -- Cost
    unit_cost shared.money NOT NULL,

    -- Supplier
    supplier_id UUID,  -- No FK (cross-context)

    -- Status
    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_stock_batches_inventory_item ON fb.stock_batches(inventory_item_id);
CREATE INDEX idx_stock_batches_expiring ON fb.stock_batches(inventory_item_id)
    WHERE expiry_date IS NOT NULL AND expiry_date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '7 days';

-- Waste Records
CREATE TABLE fb.waste_records (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)
    inventory_item_id UUID NOT NULL REFERENCES fb.inventory_items(id),

    -- Waste details
    quantity DECIMAL(10, 2) NOT NULL,
    unit fb.inventory_unit NOT NULL,

    -- Reason
    waste_reason VARCHAR(100) NOT NULL,  -- EXPIRED, SPOILED, DAMAGED, OVERPRODUCTION, etc.
    description TEXT,

    -- Cost impact
    cost_impact shared.money,

    -- Date
    waste_date DATE NOT NULL,

    -- Recorded by
    recorded_by UUID NOT NULL REFERENCES shared.users(id),

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_waste_records_property ON fb.waste_records(property_id, waste_date DESC);
CREATE INDEX idx_waste_records_inventory_item ON fb.waste_records(inventory_item_id);

-- ============================================================================
-- TRIGGERS
-- ============================================================================

CREATE TRIGGER trg_menu_items_updated_at
    BEFORE UPDATE ON fb.menu_items
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_fb_orders_updated_at
    BEFORE UPDATE ON fb.fb_orders
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_inventory_items_updated_at
    BEFORE UPDATE ON fb.inventory_items
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_stock_batches_updated_at
    BEFORE UPDATE ON fb.stock_batches
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

-- ============================================================================
-- VIEWS
-- ============================================================================

-- F&B Revenue View
CREATE VIEW fb.v_fb_revenue AS
SELECT
    property_id,
    DATE_TRUNC('day', ordered_at) AS date,
    order_type,
    COUNT(*) AS total_orders,
    SUM((total_amount).amount) AS total_revenue
FROM fb.fb_orders
WHERE status = 'COMPLETED' AND deleted_at IS NULL
GROUP BY property_id, DATE_TRUNC('day', ordered_at), order_type;

-- Low Stock Alert View
CREATE VIEW fb.v_low_stock_alerts AS
SELECT
    i.property_id,
    i.item_name,
    i.current_stock,
    i.minimum_stock,
    i.reorder_point,
    i.stock_status,
    i.supplier_id
FROM fb.inventory_items i
WHERE i.current_stock <= i.reorder_point
  AND i.deleted_at IS NULL
ORDER BY i.current_stock / NULLIF(i.minimum_stock, 0);

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON TABLE fb.menu_items IS 'Menu items with pricing and dietary info';
COMMENT ON TABLE fb.fb_orders IS 'F&B orders - dine-in, room service, takeaway';
COMMENT ON TABLE fb.inventory_items IS 'F&B inventory with stock tracking';
COMMENT ON TABLE fb.stock_batches IS 'FIFO batch tracking for perishables';
COMMENT ON TABLE fb.waste_records IS 'Food waste tracking for cost control';
COMMENT ON COLUMN fb.inventory_items.stock_status IS 'Auto-calculated based on current_stock vs minimum_stock';
COMMENT ON VIEW fb.v_fb_revenue IS 'Daily F&B revenue by order type';
COMMENT ON VIEW fb.v_low_stock_alerts IS 'Items below reorder point';

