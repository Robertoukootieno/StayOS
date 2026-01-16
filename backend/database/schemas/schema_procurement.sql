-- ============================================================================
-- StayOS Database Schema - Procurement Context (OPTIONAL MODULE)
-- ============================================================================
-- Description: Purchase orders, suppliers, goods receipts
-- Aggregates: PurchaseOrder, Supplier
-- Version: 1.0
-- Date: 2025-12-21
-- ============================================================================

CREATE SCHEMA IF NOT EXISTS procurement;

-- ============================================================================
-- ENUMS
-- ============================================================================

CREATE TYPE procurement.po_status AS ENUM (
    'DRAFT', 'PENDING_APPROVAL', 'APPROVED', 'SENT', 
    'PARTIALLY_RECEIVED', 'RECEIVED', 'CANCELLED', 'CLOSED'
);

CREATE TYPE procurement.supplier_status AS ENUM (
    'ACTIVE', 'INACTIVE', 'SUSPENDED', 'BLACKLISTED'
);

CREATE TYPE procurement.supplier_category AS ENUM (
    'FOOD_BEVERAGE', 'HOUSEKEEPING', 'MAINTENANCE', 'UTILITIES', 
    'TECHNOLOGY', 'FURNITURE', 'LINEN', 'AMENITIES', 'OTHER'
);

CREATE TYPE procurement.payment_terms AS ENUM (
    'NET_7', 'NET_15', 'NET_30', 'NET_60', 'NET_90', 
    'COD', 'PREPAID', 'CUSTOM'
);

CREATE TYPE procurement.goods_receipt_status AS ENUM (
    'PENDING', 'PARTIAL', 'COMPLETE', 'DISCREPANCY'
);

-- ============================================================================
-- TABLES
-- ============================================================================

-- Suppliers (Aggregate Root)
CREATE TABLE procurement.suppliers (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    
    -- Supplier details
    supplier_code VARCHAR(50) UNIQUE NOT NULL,
    supplier_name VARCHAR(255) NOT NULL,
    
    -- Category
    category procurement.supplier_category NOT NULL,
    
    -- Contact
    contact_info shared.contact_info NOT NULL,
    address shared.address,
    
    -- Tax
    tax_id VARCHAR(100),
    
    -- Payment terms
    payment_terms procurement.payment_terms NOT NULL DEFAULT 'NET_30',
    custom_payment_terms TEXT,
    
    -- Banking
    bank_account_info JSONB,
    -- Example: {
    --   "bank_name": "ABC Bank",
    --   "account_number": "1234567890",
    --   "routing_number": "123456789",
    --   "swift_code": "ABCDEF12"
    -- }
    
    -- Credit limit
    credit_limit shared.money,
    currency CHAR(3) REFERENCES shared.currencies(code),
    
    -- Performance
    rating DECIMAL(3, 2),  -- 0.00 to 5.00
    on_time_delivery_percentage DECIMAL(5, 2),
    quality_score DECIMAL(5, 2),
    
    -- Certifications
    certifications TEXT[],  -- HACCP, ISO, Organic, Fair Trade, etc.
    
    -- Status
    status procurement.supplier_status NOT NULL DEFAULT 'ACTIVE',
    
    -- Contracts
    contract_start_date DATE,
    contract_end_date DATE,
    contract_document_url VARCHAR(500),
    
    -- Notes
    notes TEXT,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,
    
    CONSTRAINT chk_rating_range CHECK (rating IS NULL OR rating BETWEEN 0 AND 5)
);

CREATE INDEX idx_suppliers_status ON procurement.suppliers(status);
CREATE INDEX idx_suppliers_category ON procurement.suppliers(category, status);
CREATE INDEX idx_suppliers_active ON procurement.suppliers(status) WHERE status = 'ACTIVE';

-- Supplier Certifications (tracking expiry)
CREATE TABLE procurement.supplier_certifications (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    supplier_id UUID NOT NULL REFERENCES procurement.suppliers(id) ON DELETE CASCADE,
    
    -- Certification details
    certification_name VARCHAR(255) NOT NULL,
    certification_number VARCHAR(100),
    
    -- Dates
    issue_date DATE NOT NULL,
    expiry_date DATE,
    
    -- Document
    document_url VARCHAR(500),
    
    -- Verification
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    verified_by UUID REFERENCES shared.users(id),
    verified_at TIMESTAMPTZ,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_supplier_certifications_supplier ON procurement.supplier_certifications(supplier_id);
CREATE INDEX idx_supplier_certifications_expiring ON procurement.supplier_certifications(supplier_id) 
    WHERE expiry_date IS NOT NULL AND expiry_date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '30 days';

-- Purchase Orders (Aggregate Root)
CREATE TABLE procurement.purchase_orders (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)
    
    -- PO number
    po_number VARCHAR(50) UNIQUE NOT NULL,
    
    -- Supplier
    supplier_id UUID NOT NULL REFERENCES procurement.suppliers(id),
    
    -- Status
    status procurement.po_status NOT NULL DEFAULT 'DRAFT',
    
    -- Dates
    order_date DATE NOT NULL,
    expected_delivery_date DATE,
    actual_delivery_date DATE,
    
    -- Amounts
    subtotal shared.money NOT NULL,
    tax_amount shared.money NOT NULL,
    shipping_cost shared.money,
    total_amount shared.money NOT NULL,
    currency CHAR(3) NOT NULL REFERENCES shared.currencies(code),
    
    -- Delivery
    delivery_address shared.address NOT NULL,
    delivery_instructions TEXT,
    
    -- Approval workflow
    requested_by UUID NOT NULL REFERENCES shared.users(id),
    approved_by UUID REFERENCES shared.users(id),
    approved_at TIMESTAMPTZ,
    rejection_reason TEXT,
    
    -- Sent to supplier
    sent_at TIMESTAMPTZ,
    sent_to_email VARCHAR(255),
    
    -- Cancellation
    cancelled_at TIMESTAMPTZ,
    cancellation_reason TEXT,
    
    -- Notes
    internal_notes TEXT,
    supplier_notes TEXT,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_purchase_orders_property ON procurement.purchase_orders(property_id, order_date DESC);
CREATE INDEX idx_purchase_orders_supplier ON procurement.purchase_orders(supplier_id);
CREATE INDEX idx_purchase_orders_status ON procurement.purchase_orders(property_id, status);
CREATE INDEX idx_purchase_orders_pending_approval ON procurement.purchase_orders(property_id)
    WHERE status = 'PENDING_APPROVAL';

-- Purchase Order Line Items
CREATE TABLE procurement.po_line_items (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    purchase_order_id UUID NOT NULL REFERENCES procurement.purchase_orders(id) ON DELETE CASCADE,

    -- Item details
    item_description TEXT NOT NULL,
    item_code VARCHAR(100),

    -- Reference to inventory (if applicable)
    inventory_item_id UUID,  -- No FK (cross-context to fb.inventory_items)

    -- Quantity
    quantity DECIMAL(10, 2) NOT NULL,
    unit VARCHAR(50) NOT NULL,

    -- Pricing
    unit_price shared.money NOT NULL,
    line_total shared.money NOT NULL,

    -- Received quantity
    quantity_received DECIMAL(10, 2) NOT NULL DEFAULT 0,
    quantity_pending DECIMAL(10, 2) GENERATED ALWAYS AS (quantity - quantity_received) STORED,

    -- Notes
    notes TEXT,

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT chk_quantity_positive CHECK (quantity > 0),
    CONSTRAINT chk_quantity_received_valid CHECK (quantity_received >= 0 AND quantity_received <= quantity)
);

CREATE INDEX idx_po_line_items_po ON procurement.po_line_items(purchase_order_id);
CREATE INDEX idx_po_line_items_inventory ON procurement.po_line_items(inventory_item_id);

-- Goods Receipts
CREATE TABLE procurement.goods_receipts (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)
    purchase_order_id UUID NOT NULL REFERENCES procurement.purchase_orders(id),

    -- Receipt number
    receipt_number VARCHAR(50) UNIQUE NOT NULL,

    -- Receipt details
    received_date DATE NOT NULL,
    received_by UUID NOT NULL REFERENCES shared.users(id),

    -- Status
    status procurement.goods_receipt_status NOT NULL DEFAULT 'PENDING',

    -- Discrepancies
    has_discrepancies BOOLEAN NOT NULL DEFAULT FALSE,
    discrepancy_notes TEXT,

    -- Quality check
    quality_check_passed BOOLEAN,
    quality_check_notes TEXT,

    -- Documents
    delivery_note_url VARCHAR(500),
    photos_urls TEXT[],

    -- Notes
    notes TEXT,

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_goods_receipts_property ON procurement.goods_receipts(property_id, received_date DESC);
CREATE INDEX idx_goods_receipts_po ON procurement.goods_receipts(purchase_order_id);
CREATE INDEX idx_goods_receipts_discrepancies ON procurement.goods_receipts(property_id)
    WHERE has_discrepancies = TRUE;

-- Goods Receipt Line Items
CREATE TABLE procurement.goods_receipt_line_items (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    goods_receipt_id UUID NOT NULL REFERENCES procurement.goods_receipts(id) ON DELETE CASCADE,
    po_line_item_id UUID NOT NULL REFERENCES procurement.po_line_items(id),

    -- Received quantity
    quantity_received DECIMAL(10, 2) NOT NULL,

    -- Discrepancy
    quantity_ordered DECIMAL(10, 2) NOT NULL,
    discrepancy DECIMAL(10, 2) GENERATED ALWAYS AS (quantity_received - quantity_ordered) STORED,

    -- Condition
    condition VARCHAR(50),  -- GOOD, DAMAGED, EXPIRED, etc.

    -- Notes
    notes TEXT,

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT chk_quantity_received_positive CHECK (quantity_received >= 0)
);

CREATE INDEX idx_goods_receipt_line_items_receipt ON procurement.goods_receipt_line_items(goods_receipt_id);
CREATE INDEX idx_goods_receipt_line_items_po_line ON procurement.goods_receipt_line_items(po_line_item_id);

-- ============================================================================
-- TRIGGERS
-- ============================================================================

CREATE TRIGGER trg_suppliers_updated_at
    BEFORE UPDATE ON procurement.suppliers
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_supplier_certifications_updated_at
    BEFORE UPDATE ON procurement.supplier_certifications
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_purchase_orders_updated_at
    BEFORE UPDATE ON procurement.purchase_orders
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_po_line_items_updated_at
    BEFORE UPDATE ON procurement.po_line_items
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_goods_receipts_updated_at
    BEFORE UPDATE ON procurement.goods_receipts
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

-- ============================================================================
-- VIEWS
-- ============================================================================

-- Supplier Performance View
CREATE VIEW procurement.v_supplier_performance AS
SELECT
    s.id AS supplier_id,
    s.supplier_name,
    s.category,
    COUNT(DISTINCT po.id) AS total_orders,
    COUNT(DISTINCT po.id) FILTER (WHERE po.status = 'RECEIVED') AS completed_orders,
    AVG(EXTRACT(EPOCH FROM (po.actual_delivery_date - po.expected_delivery_date))/86400) AS avg_delay_days,
    SUM((po.total_amount).amount) AS total_spend,
    s.rating,
    s.on_time_delivery_percentage
FROM procurement.suppliers s
LEFT JOIN procurement.purchase_orders po ON s.id = po.supplier_id
WHERE s.deleted_at IS NULL
GROUP BY s.id, s.supplier_name, s.category, s.rating, s.on_time_delivery_percentage;

-- Pending Purchase Orders View
CREATE VIEW procurement.v_pending_purchase_orders AS
SELECT
    po.property_id,
    po.po_number,
    po.order_date,
    po.expected_delivery_date,
    s.supplier_name,
    po.status,
    (po.total_amount).amount AS total_amount,
    (po.total_amount).currency AS currency,
    CURRENT_DATE - po.order_date AS days_pending
FROM procurement.purchase_orders po
JOIN procurement.suppliers s ON po.supplier_id = s.id
WHERE po.status IN ('PENDING_APPROVAL', 'APPROVED', 'SENT', 'PARTIALLY_RECEIVED')
  AND po.deleted_at IS NULL
ORDER BY po.order_date;

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON TABLE procurement.suppliers IS 'Supplier aggregate - vendor management';
COMMENT ON TABLE procurement.purchase_orders IS 'Purchase order aggregate - procurement workflow';
COMMENT ON TABLE procurement.goods_receipts IS 'Goods receipt tracking with quality checks';
COMMENT ON COLUMN procurement.po_line_items.quantity_pending IS 'Auto-calculated: quantity - quantity_received';
COMMENT ON VIEW procurement.v_supplier_performance IS 'Supplier performance metrics';
COMMENT ON VIEW procurement.v_pending_purchase_orders IS 'Active purchase orders awaiting fulfillment';

