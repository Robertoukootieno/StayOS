-- ============================================================================
-- StayOS Database Schema - Compliance & Audit Context
-- ============================================================================
-- Description: Audit logs, domain events, compliance reports
-- Aggregates: AuditLog, DomainEvent
-- Version: 1.0
-- Date: 2025-12-21
-- ============================================================================

CREATE SCHEMA IF NOT EXISTS compliance;

-- ============================================================================
-- ENUMS
-- ============================================================================

CREATE TYPE compliance.event_category AS ENUM (
    'SECURITY', 'DATA_ACCESS', 'DATA_MODIFICATION', 'AUTHENTICATION', 
    'AUTHORIZATION', 'BUSINESS_OPERATION', 'SYSTEM', 'INTEGRATION'
);

CREATE TYPE compliance.event_severity AS ENUM (
    'INFO', 'WARNING', 'ERROR', 'CRITICAL'
);

CREATE TYPE compliance.domain_event_status AS ENUM (
    'PENDING', 'PUBLISHED', 'FAILED', 'ARCHIVED'
);

CREATE TYPE compliance.report_type AS ENUM (
    'GDPR_DATA_EXPORT', 'GDPR_RIGHT_TO_ERASURE', 'PCI_COMPLIANCE', 
    'FINANCIAL_AUDIT', 'OPERATIONAL_AUDIT', 'SECURITY_AUDIT'
);

CREATE TYPE compliance.report_status AS ENUM (
    'REQUESTED', 'GENERATING', 'COMPLETED', 'FAILED'
);

-- ============================================================================
-- TABLES
-- ============================================================================

-- Audit Log (Aggregate Root) - Partitioned by month
CREATE TABLE compliance.audit_log (
    id UUID DEFAULT shared.uuid_generate_v7(),
    
    -- Event details
    event_id UUID NOT NULL DEFAULT shared.uuid_generate_v7(),
    event_category compliance.event_category NOT NULL,
    event_type VARCHAR(100) NOT NULL,
    event_severity compliance.event_severity NOT NULL DEFAULT 'INFO',
    
    -- Actor
    actor_id UUID,  -- User who performed the action
    actor_type VARCHAR(50),  -- USER, SYSTEM, API_CLIENT
    actor_ip_address INET,
    actor_user_agent TEXT,
    
    -- Target
    target_type VARCHAR(100),  -- TABLE_NAME or AGGREGATE_TYPE
    target_id UUID,
    target_property_id UUID,  -- For tenant filtering
    
    -- Action
    action VARCHAR(100) NOT NULL,  -- CREATE, UPDATE, DELETE, LOGIN, LOGOUT, etc.
    
    -- Changes (for data modifications)
    old_values JSONB,
    new_values JSONB,
    
    -- Context
    request_id UUID,  -- Correlation ID for request tracing
    session_id UUID,
    
    -- Metadata
    metadata JSONB,
    
    -- Timestamp
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    -- Partitioning key
    year_month INTEGER NOT NULL GENERATED ALWAYS AS (
        EXTRACT(YEAR FROM timestamp)::INTEGER * 100 + EXTRACT(MONTH FROM timestamp)::INTEGER
    ) STORED,
    
    PRIMARY KEY (id, year_month)
) PARTITION BY RANGE (year_month);

-- Create partitions for current and next 12 months
-- Example: compliance.audit_log_202512 for December 2025
-- Note: In production, use automated partition management

CREATE INDEX idx_audit_log_timestamp ON compliance.audit_log(timestamp DESC);
CREATE INDEX idx_audit_log_actor ON compliance.audit_log(actor_id, timestamp DESC);
CREATE INDEX idx_audit_log_target ON compliance.audit_log(target_type, target_id);
CREATE INDEX idx_audit_log_property ON compliance.audit_log(target_property_id, timestamp DESC);
CREATE INDEX idx_audit_log_category ON compliance.audit_log(event_category, timestamp DESC);
CREATE INDEX idx_audit_log_request ON compliance.audit_log(request_id);

-- Domain Events (Aggregate Root) - Partitioned by month
CREATE TABLE compliance.domain_events (
    id UUID DEFAULT shared.uuid_generate_v7(),
    
    -- Event details
    event_type VARCHAR(100) NOT NULL,
    aggregate_type VARCHAR(100) NOT NULL,
    aggregate_id UUID NOT NULL,
    
    -- Property (for tenant filtering)
    property_id UUID,
    
    -- Event data
    event_data JSONB NOT NULL,
    
    -- Metadata
    correlation_id UUID,
    causation_id UUID,  -- ID of the event that caused this event
    
    -- Status
    status compliance.domain_event_status NOT NULL DEFAULT 'PENDING',
    
    -- Publishing
    published_at TIMESTAMPTZ,
    publish_attempts INTEGER NOT NULL DEFAULT 0,
    last_publish_attempt_at TIMESTAMPTZ,
    last_publish_error TEXT,
    
    -- Timestamp
    occurred_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    -- Partitioning key
    year_month INTEGER NOT NULL GENERATED ALWAYS AS (
        EXTRACT(YEAR FROM occurred_at)::INTEGER * 100 + EXTRACT(MONTH FROM occurred_at)::INTEGER
    ) STORED,
    
    PRIMARY KEY (id, year_month)
) PARTITION BY RANGE (year_month);

CREATE INDEX idx_domain_events_occurred ON compliance.domain_events(occurred_at DESC);
CREATE INDEX idx_domain_events_aggregate ON compliance.domain_events(aggregate_type, aggregate_id);
CREATE INDEX idx_domain_events_property ON compliance.domain_events(property_id, occurred_at DESC);
CREATE INDEX idx_domain_events_status ON compliance.domain_events(status) WHERE status = 'PENDING';
CREATE INDEX idx_domain_events_correlation ON compliance.domain_events(correlation_id);

-- Compliance Reports
CREATE TABLE compliance.compliance_reports (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID,  -- NULL for organization-wide reports
    
    -- Report details
    report_type compliance.report_type NOT NULL,
    report_name VARCHAR(255) NOT NULL,
    description TEXT,
    
    -- Request
    requested_by UUID NOT NULL REFERENCES shared.users(id),
    requested_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    -- Parameters
    parameters JSONB,
    -- Example: {
    --   "start_date": "2025-01-01",
    --   "end_date": "2025-12-31",
    --   "guest_id": "uuid",
    --   "include_deleted": false
    -- }
    
    -- Status
    status compliance.report_status NOT NULL DEFAULT 'REQUESTED',
    
    -- Generation
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    failed_at TIMESTAMPTZ,
    failure_reason TEXT,
    
    -- Output
    file_url VARCHAR(500),
    file_size_bytes BIGINT,
    record_count INTEGER,
    
    -- Expiry (for GDPR data exports)
    expires_at TIMESTAMPTZ,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_compliance_reports_property ON compliance.compliance_reports(property_id, requested_at DESC);
CREATE INDEX idx_compliance_reports_type ON compliance.compliance_reports(report_type);
CREATE INDEX idx_compliance_reports_status ON compliance.compliance_reports(status);
CREATE INDEX idx_compliance_reports_requested_by ON compliance.compliance_reports(requested_by);

-- Data Retention Policies
CREATE TABLE compliance.data_retention_policies (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    
    -- Policy details
    policy_name VARCHAR(100) NOT NULL,
    data_type VARCHAR(100) NOT NULL,  -- GUEST_PROFILE, RESERVATION, AUDIT_LOG, etc.
    
    -- Retention period
    retention_days INTEGER NOT NULL,
    
    -- Actions
    action_on_expiry VARCHAR(50) NOT NULL,  -- SOFT_DELETE, HARD_DELETE, ANONYMIZE, ARCHIVE
    
    -- Exceptions
    legal_hold_override BOOLEAN NOT NULL DEFAULT FALSE,
    
    -- Status
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_data_retention_policies_data_type ON compliance.data_retention_policies(data_type, is_active);

-- ============================================================================
-- TRIGGERS
-- ============================================================================

CREATE TRIGGER trg_compliance_reports_updated_at
    BEFORE UPDATE ON compliance.compliance_reports
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_data_retention_policies_updated_at
    BEFORE UPDATE ON compliance.data_retention_policies
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

-- ============================================================================
-- FUNCTIONS
-- ============================================================================

-- Function to log audit events
CREATE OR REPLACE FUNCTION compliance.log_audit_event(
    p_event_category compliance.event_category,
    p_event_type VARCHAR,
    p_actor_id UUID,
    p_action VARCHAR,
    p_target_type VARCHAR DEFAULT NULL,
    p_target_id UUID DEFAULT NULL,
    p_target_property_id UUID DEFAULT NULL,
    p_old_values JSONB DEFAULT NULL,
    p_new_values JSONB DEFAULT NULL,
    p_metadata JSONB DEFAULT NULL
) RETURNS UUID AS $$
DECLARE
    v_event_id UUID;
BEGIN
    v_event_id := shared.uuid_generate_v7();
    
    INSERT INTO compliance.audit_log (
        event_id, event_category, event_type, actor_id, action,
        target_type, target_id, target_property_id,
        old_values, new_values, metadata
    ) VALUES (
        v_event_id, p_event_category, p_event_type, p_actor_id, p_action,
        p_target_type, p_target_id, p_target_property_id,
        p_old_values, p_new_values, p_metadata
    );
    
    RETURN v_event_id;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON TABLE compliance.audit_log IS 'Append-only audit log partitioned by month';
COMMENT ON TABLE compliance.domain_events IS 'Domain events for event-driven architecture';
COMMENT ON TABLE compliance.compliance_reports IS 'GDPR and compliance report generation';
COMMENT ON FUNCTION compliance.log_audit_event IS 'Helper function to log audit events';

