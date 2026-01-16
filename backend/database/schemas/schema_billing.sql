-- ============================================================================
-- StayOS Database Schema - Billing Context
-- ============================================================================
-- Description: Folios, payments, refunds, invoices
-- Aggregates: Folio, Payment
-- Version: 1.0
-- Date: 2025-12-21
-- ============================================================================

CREATE SCHEMA IF NOT EXISTS billing;

-- ============================================================================
-- ENUMS
-- ============================================================================

CREATE TYPE billing.folio_status AS ENUM (
    'OPEN', 'CLOSED', 'SETTLED', 'DISPUTED'
);

CREATE TYPE billing.charge_type AS ENUM (
    'ROOM', 'TAX', 'SERVICE_CHARGE', 'MINIBAR', 'RESTAURANT', 
    'SPA', 'LAUNDRY', 'PARKING', 'PHONE', 'INTERNET', 'OTHER'
);

CREATE TYPE billing.payment_method AS ENUM (
    'CREDIT_CARD', 'DEBIT_CARD', 'CASH', 'BANK_TRANSFER', 
    'MOBILE_PAYMENT', 'CORPORATE_ACCOUNT', 'VOUCHER', 'CRYPTO'
);

CREATE TYPE billing.payment_status AS ENUM (
    'PENDING', 'AUTHORIZED', 'CAPTURED', 'SETTLED', 
    'FAILED', 'CANCELLED', 'REFUNDED', 'PARTIALLY_REFUNDED'
);

CREATE TYPE billing.refund_status AS ENUM (
    'PENDING', 'APPROVED', 'REJECTED', 'PROCESSED', 'FAILED'
);

CREATE TYPE billing.invoice_status AS ENUM (
    'DRAFT', 'SENT', 'PAID', 'OVERDUE', 'CANCELLED'
);

-- ============================================================================
-- TABLES
-- ============================================================================

-- Folios (Aggregate Root)
CREATE TABLE billing.folios (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)
    
    -- Folio number
    folio_number VARCHAR(50) UNIQUE NOT NULL,
    
    -- Guest and reservation
    guest_id UUID NOT NULL,  -- No FK (cross-context)
    reservation_id UUID,  -- No FK (cross-context)
    stay_id UUID,  -- No FK (cross-context)
    
    -- Status
    status billing.folio_status NOT NULL DEFAULT 'OPEN',
    
    -- Amounts
    subtotal shared.money NOT NULL DEFAULT ROW(0, 'USD'),
    tax_amount shared.money NOT NULL DEFAULT ROW(0, 'USD'),
    service_charge shared.money NOT NULL DEFAULT ROW(0, 'USD'),
    total_amount shared.money NOT NULL DEFAULT ROW(0, 'USD'),
    paid_amount shared.money NOT NULL DEFAULT ROW(0, 'USD'),
    balance shared.money GENERATED ALWAYS AS (
        ROW(
            (total_amount).amount - (paid_amount).amount,
            (total_amount).currency
        )::shared.money
    ) STORED,
    
    -- Currency
    currency CHAR(3) NOT NULL REFERENCES shared.currencies(code),
    
    -- Dates
    opened_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    closed_at TIMESTAMPTZ,
    settled_at TIMESTAMPTZ,
    
    -- Dispute
    disputed_at TIMESTAMPTZ,
    dispute_reason TEXT,
    dispute_resolved_at TIMESTAMPTZ,
    
    -- Notes
    notes TEXT,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_folios_property ON billing.folios(property_id, opened_at DESC);
CREATE INDEX idx_folios_guest ON billing.folios(guest_id);
CREATE INDEX idx_folios_reservation ON billing.folios(reservation_id);
CREATE INDEX idx_folios_status ON billing.folios(property_id, status) WHERE deleted_at IS NULL;
CREATE INDEX idx_folios_open ON billing.folios(property_id) WHERE status = 'OPEN';

-- Folio Line Items (charges)
CREATE TABLE billing.folio_line_items (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    folio_id UUID NOT NULL REFERENCES billing.folios(id) ON DELETE CASCADE,
    
    -- Charge details
    charge_type billing.charge_type NOT NULL,
    description TEXT NOT NULL,
    
    -- Quantity and pricing
    quantity DECIMAL(10, 2) NOT NULL DEFAULT 1,
    unit_price shared.money NOT NULL,
    amount shared.money NOT NULL,
    
    -- Tax
    tax_rate DECIMAL(5, 2),  -- Percentage
    tax_amount shared.money,
    
    -- Date
    charge_date DATE NOT NULL,
    
    -- Reference
    reference_id UUID,  -- Reference to source (e.g., service_request_id, reservation_line_item_id)
    reference_type VARCHAR(50),
    
    -- Voided
    voided BOOLEAN NOT NULL DEFAULT FALSE,
    voided_at TIMESTAMPTZ,
    voided_by UUID REFERENCES shared.users(id),
    void_reason TEXT,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id)
);

CREATE INDEX idx_folio_line_items_folio ON billing.folio_line_items(folio_id);
CREATE INDEX idx_folio_line_items_date ON billing.folio_line_items(charge_date);
CREATE INDEX idx_folio_line_items_type ON billing.folio_line_items(charge_type);

-- Payments (Aggregate Root)
CREATE TABLE billing.payments (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)
    
    -- Payment reference
    payment_reference VARCHAR(100) UNIQUE NOT NULL,
    
    -- Folio
    folio_id UUID NOT NULL REFERENCES billing.folios(id),
    
    -- Amount
    amount shared.money NOT NULL,
    currency CHAR(3) NOT NULL REFERENCES shared.currencies(code),
    
    -- Payment method
    payment_method billing.payment_method NOT NULL,
    
    -- Card details (if applicable)
    card_last_4 VARCHAR(4),
    card_brand VARCHAR(50),  -- VISA, MASTERCARD, AMEX, etc.
    
    -- Payment gateway
    gateway_name VARCHAR(100),  -- STRIPE, SQUARE, PAYPAL, etc.
    gateway_transaction_id VARCHAR(255),
    gateway_response JSONB,
    
    -- Status
    status billing.payment_status NOT NULL DEFAULT 'PENDING',
    
    -- Authorization
    authorized_at TIMESTAMPTZ,
    authorization_code VARCHAR(100),
    
    -- Capture
    captured_at TIMESTAMPTZ,
    
    -- Settlement
    settled_at TIMESTAMPTZ,
    
    -- Failure
    failed_at TIMESTAMPTZ,
    failure_reason TEXT,
    
    -- Refund tracking
    refunded_amount shared.money NOT NULL DEFAULT ROW(0, 'USD'),
    
    -- Notes
    notes TEXT,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID REFERENCES shared.users(id),
    updated_by UUID REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_payments_property ON billing.payments(property_id, created_at DESC);
CREATE INDEX idx_payments_folio ON billing.payments(folio_id);
CREATE INDEX idx_payments_status ON billing.payments(property_id, status);
CREATE INDEX idx_payments_gateway_txn ON billing.payments(gateway_transaction_id);

-- Refunds
CREATE TABLE billing.refunds (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)

    -- Refund reference
    refund_reference VARCHAR(100) UNIQUE NOT NULL,

    -- Original payment
    payment_id UUID NOT NULL REFERENCES billing.payments(id),

    -- Amount
    amount shared.money NOT NULL,
    currency CHAR(3) NOT NULL REFERENCES shared.currencies(code),

    -- Reason
    reason TEXT NOT NULL,
    refund_type VARCHAR(50),  -- CANCELLATION, SERVICE_ISSUE, OVERBILLING, etc.

    -- Status
    status billing.refund_status NOT NULL DEFAULT 'PENDING',

    -- Approval
    requested_by UUID NOT NULL REFERENCES shared.users(id),
    requested_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    approved_by UUID REFERENCES shared.users(id),
    approved_at TIMESTAMPTZ,
    rejected_by UUID REFERENCES shared.users(id),
    rejected_at TIMESTAMPTZ,
    rejection_reason TEXT,

    -- Processing
    processed_at TIMESTAMPTZ,
    gateway_refund_id VARCHAR(255),

    -- Failure
    failed_at TIMESTAMPTZ,
    failure_reason TEXT,

    -- Notes
    notes TEXT,

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_refunds_property ON billing.refunds(property_id, requested_at DESC);
CREATE INDEX idx_refunds_payment ON billing.refunds(payment_id);
CREATE INDEX idx_refunds_status ON billing.refunds(property_id, status);
CREATE INDEX idx_refunds_pending_approval ON billing.refunds(property_id)
    WHERE status = 'PENDING';

-- Chargebacks
CREATE TABLE billing.chargebacks (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)

    -- Payment
    payment_id UUID NOT NULL REFERENCES billing.payments(id),

    -- Chargeback details
    chargeback_reference VARCHAR(100) UNIQUE NOT NULL,
    amount shared.money NOT NULL,
    currency CHAR(3) NOT NULL REFERENCES shared.currencies(code),

    -- Reason
    reason_code VARCHAR(50),
    reason_description TEXT,

    -- Dates
    chargeback_date DATE NOT NULL,
    response_due_date DATE,

    -- Response
    disputed BOOLEAN NOT NULL DEFAULT FALSE,
    dispute_evidence JSONB,
    dispute_submitted_at TIMESTAMPTZ,

    -- Outcome
    outcome VARCHAR(50),  -- WON, LOST, ACCEPTED
    outcome_date DATE,

    -- Notes
    notes TEXT,

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_chargebacks_property ON billing.chargebacks(property_id, chargeback_date DESC);
CREATE INDEX idx_chargebacks_payment ON billing.chargebacks(payment_id);
CREATE INDEX idx_chargebacks_pending_response ON billing.chargebacks(property_id)
    WHERE disputed = FALSE AND response_due_date >= CURRENT_DATE;

-- Invoices
CREATE TABLE billing.invoices (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)

    -- Invoice number
    invoice_number VARCHAR(50) UNIQUE NOT NULL,

    -- Folio
    folio_id UUID NOT NULL REFERENCES billing.folios(id),

    -- Customer
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255),
    customer_address shared.address,
    customer_tax_id VARCHAR(100),

    -- Amounts
    subtotal shared.money NOT NULL,
    tax_amount shared.money NOT NULL,
    total_amount shared.money NOT NULL,
    currency CHAR(3) NOT NULL REFERENCES shared.currencies(code),

    -- Status
    status billing.invoice_status NOT NULL DEFAULT 'DRAFT',

    -- Dates
    invoice_date DATE NOT NULL,
    due_date DATE NOT NULL,
    sent_at TIMESTAMPTZ,
    paid_at TIMESTAMPTZ,

    -- Payment terms
    payment_terms TEXT,

    -- PDF
    pdf_url VARCHAR(500),

    -- Notes
    notes TEXT,

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_invoices_property ON billing.invoices(property_id, invoice_date DESC);
CREATE INDEX idx_invoices_folio ON billing.invoices(folio_id);
CREATE INDEX idx_invoices_status ON billing.invoices(property_id, status);
CREATE INDEX idx_invoices_overdue ON billing.invoices(property_id)
    WHERE status = 'SENT' AND due_date < CURRENT_DATE;

-- ============================================================================
-- TRIGGERS
-- ============================================================================

CREATE TRIGGER trg_folios_updated_at
    BEFORE UPDATE ON billing.folios
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_payments_updated_at
    BEFORE UPDATE ON billing.payments
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_refunds_updated_at
    BEFORE UPDATE ON billing.refunds
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_chargebacks_updated_at
    BEFORE UPDATE ON billing.chargebacks
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_invoices_updated_at
    BEFORE UPDATE ON billing.invoices
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

-- ============================================================================
-- VIEWS
-- ============================================================================

-- Revenue Summary View
CREATE VIEW billing.v_revenue_summary AS
SELECT
    f.property_id,
    DATE_TRUNC('day', f.opened_at) AS date,
    COUNT(DISTINCT f.id) AS total_folios,
    SUM((f.total_amount).amount) AS total_revenue,
    SUM((f.paid_amount).amount) AS collected_revenue,
    SUM((f.total_amount).amount - (f.paid_amount).amount) AS outstanding_balance
FROM billing.folios f
WHERE f.deleted_at IS NULL
GROUP BY f.property_id, DATE_TRUNC('day', f.opened_at);

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON TABLE billing.folios IS 'Folio aggregate - guest charges and billing';
COMMENT ON TABLE billing.payments IS 'Payment aggregate - payment processing and settlement';
COMMENT ON TABLE billing.refunds IS 'Refund tracking with approval workflow';
COMMENT ON TABLE billing.chargebacks IS 'Chargeback management and dispute tracking';
COMMENT ON COLUMN billing.folios.balance IS 'Auto-calculated: total_amount - paid_amount';
COMMENT ON VIEW billing.v_revenue_summary IS 'Daily revenue summary by property';

