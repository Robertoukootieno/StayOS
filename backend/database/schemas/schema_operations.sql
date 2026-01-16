-- ============================================================================
-- StayOS Database Schema - Operations Context
-- ============================================================================
-- Description: Housekeeping, maintenance, staff, service requests, incidents, training
-- Aggregates: HousekeepingTask, MaintenanceRequest, StaffShift, ServiceRequest, 
--             IncidentReport, TrainingModule
-- Version: 1.0
-- Date: 2025-12-21
-- ============================================================================

CREATE SCHEMA IF NOT EXISTS operations;

-- ============================================================================
-- ENUMS
-- ============================================================================

-- Housekeeping
CREATE TYPE operations.task_type AS ENUM (
    'TURNOVER', 'DEEP_CLEAN', 'REFRESH', 'INSPECTION', 'LAUNDRY'
);

CREATE TYPE operations.task_status AS ENUM (
    'PENDING', 'ASSIGNED', 'IN_PROGRESS', 'COMPLETED', 'VERIFIED', 'FAILED'
);

-- Maintenance
CREATE TYPE operations.maintenance_type AS ENUM (
    'PREVENTIVE', 'CORRECTIVE', 'EMERGENCY', 'INSPECTION'
);

CREATE TYPE operations.maintenance_status AS ENUM (
    'REPORTED', 'ACKNOWLEDGED', 'ASSIGNED', 'IN_PROGRESS', 
    'COMPLETED', 'VERIFIED', 'CANCELLED'
);

-- Staff
CREATE TYPE operations.staff_role AS ENUM (
    'FRONT_DESK', 'HOUSEKEEPING', 'MAINTENANCE', 'F_AND_B', 
    'MANAGEMENT', 'SECURITY', 'CONCIERGE', 'VALET'
);

CREATE TYPE operations.shift_type AS ENUM ('MORNING', 'AFTERNOON', 'NIGHT', 'SPLIT');

-- Service Requests
CREATE TYPE operations.request_type AS ENUM (
    'HOUSEKEEPING', 'ROOM_SERVICE', 'CONCIERGE', 'MAINTENANCE', 
    'AMENITY', 'COMPLAINT', 'OTHER'
);

CREATE TYPE operations.request_status AS ENUM (
    'PENDING', 'ACKNOWLEDGED', 'ASSIGNED', 'IN_PROGRESS', 
    'COMPLETED', 'CANCELLED'
);

CREATE TYPE operations.requested_by AS ENUM (
    'GUEST_PHONE', 'GUEST_APP', 'GUEST_IN_PERSON', 'STAFF'
);

-- Incidents
CREATE TYPE operations.incident_type AS ENUM (
    'SAFETY', 'SECURITY', 'HEALTH', 'PROPERTY_DAMAGE', 
    'GUEST_INJURY', 'STAFF_INJURY', 'FIRE', 'THEFT', 'OTHER'
);

CREATE TYPE operations.incident_status AS ENUM (
    'OPEN', 'UNDER_INVESTIGATION', 'RESOLVED', 'CLOSED'
);

CREATE TYPE operations.area AS ENUM (
    'GUEST_ROOM', 'LOBBY', 'RESTAURANT', 'POOL', 'PARKING', 
    'KITCHEN', 'BACK_OF_HOUSE', 'OTHER'
);

-- Training
CREATE TYPE operations.module_type AS ENUM (
    'ONBOARDING', 'COMPLIANCE', 'SERVICE_STANDARDS', 
    'TECHNICAL_SKILLS', 'SAFETY', 'LEADERSHIP'
);

CREATE TYPE operations.training_category AS ENUM ('MANDATORY', 'RECOMMENDED', 'OPTIONAL');

CREATE TYPE operations.content_format AS ENUM (
    'VIDEO', 'DOCUMENT', 'INTERACTIVE', 'IN_PERSON', 'HYBRID'
);

CREATE TYPE operations.module_status AS ENUM ('DRAFT', 'ACTIVE', 'ARCHIVED');

CREATE TYPE operations.enrollment_status AS ENUM (
    'NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'FAILED', 'EXPIRED'
);

-- ============================================================================
-- TABLES
-- ============================================================================

-- Staff (simplified - full HR system would be separate)
CREATE TABLE operations.staff (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)
    user_id UUID REFERENCES shared.users(id),
    
    -- Personal info
    employee_number VARCHAR(50) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    
    -- Contact
    email VARCHAR(255),
    phone VARCHAR(20),
    
    -- Employment
    role operations.staff_role NOT NULL,
    department VARCHAR(100),
    hire_date DATE NOT NULL,
    termination_date DATE,
    
    -- Status
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_staff_property ON operations.staff(property_id, is_active);
CREATE INDEX idx_staff_role ON operations.staff(property_id, role);
CREATE INDEX idx_staff_employee_number ON operations.staff(employee_number);

-- Staff Shifts (Aggregate Root)
CREATE TABLE operations.staff_shifts (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,
    staff_id UUID NOT NULL REFERENCES operations.staff(id),
    
    -- Shift details
    shift_type operations.shift_type NOT NULL,
    shift_date DATE NOT NULL,
    scheduled_start TIME NOT NULL,
    scheduled_end TIME NOT NULL,
    
    -- Actual times
    actual_start TIMESTAMPTZ,
    actual_end TIMESTAMPTZ,
    
    -- Break time
    break_minutes INTEGER NOT NULL DEFAULT 0,
    
    -- Overtime
    overtime_minutes INTEGER GENERATED ALWAYS AS (
        CASE 
            WHEN actual_start IS NOT NULL AND actual_end IS NOT NULL THEN
                GREATEST(0, 
                    EXTRACT(EPOCH FROM (actual_end - actual_start))/60 - 
                    EXTRACT(EPOCH FROM (scheduled_end - scheduled_start))/60 -
                    break_minutes
                )::INTEGER
            ELSE 0
        END
    ) STORED,
    
    -- Notes
    notes TEXT,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,
    
    CONSTRAINT chk_shift_times CHECK (scheduled_end > scheduled_start)
);

CREATE INDEX idx_staff_shifts_property ON operations.staff_shifts(property_id, shift_date);
CREATE INDEX idx_staff_shifts_staff ON operations.staff_shifts(staff_id, shift_date);

-- Service Requests (Aggregate Root) - NEW
CREATE TABLE operations.service_requests (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,
    stay_id UUID,  -- No FK (cross-context)
    guest_id UUID,  -- No FK (cross-context)
    inventory_unit_id UUID,  -- No FK (cross-context)

    -- Request details
    request_type operations.request_type NOT NULL,
    category VARCHAR(100),
    priority shared.priority NOT NULL DEFAULT 'NORMAL',
    description TEXT NOT NULL,

    -- Timing
    requested_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    requested_by operations.requested_by NOT NULL,
    acknowledged_at TIMESTAMPTZ,
    assigned_at TIMESTAMPTZ,
    estimated_completion_time TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    cancelled_at TIMESTAMPTZ,
    cancellation_reason TEXT,

    -- Assignment
    assigned_to UUID REFERENCES operations.staff(id),

    -- Status
    status operations.request_status NOT NULL DEFAULT 'PENDING',

    -- Guest feedback
    guest_feedback JSONB,  -- {rating: 5, comment: "Fast service!", received_at: "..."}

    -- Resolution
    resolution_notes TEXT,

    -- Escalation
    escalated BOOLEAN NOT NULL DEFAULT FALSE,
    escalated_to UUID REFERENCES operations.staff(id),
    escalated_at TIMESTAMPTZ,

    -- SLA tracking
    sla_compliant BOOLEAN GENERATED ALWAYS AS (
        CASE
            WHEN acknowledged_at IS NOT NULL THEN
                (acknowledged_at - requested_at) <= INTERVAL '5 minutes'
            ELSE FALSE
        END
    ) STORED,

    response_time_seconds INTEGER GENERATED ALWAYS AS (
        CASE
            WHEN acknowledged_at IS NOT NULL THEN
                EXTRACT(EPOCH FROM (acknowledged_at - requested_at))::INTEGER
            ELSE NULL
        END
    ) STORED,

    completion_time_seconds INTEGER GENERATED ALWAYS AS (
        CASE
            WHEN completed_at IS NOT NULL THEN
                EXTRACT(EPOCH FROM (completed_at - requested_at))::INTEGER
            ELSE NULL
        END
    ) STORED,

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID REFERENCES shared.users(id),
    updated_by UUID REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_service_requests_property ON operations.service_requests(property_id, requested_at DESC);
CREATE INDEX idx_service_requests_stay ON operations.service_requests(stay_id);
CREATE INDEX idx_service_requests_status ON operations.service_requests(property_id, status)
    WHERE deleted_at IS NULL;
CREATE INDEX idx_service_requests_assigned ON operations.service_requests(assigned_to)
    WHERE status IN ('ASSIGNED', 'IN_PROGRESS');
CREATE INDEX idx_service_requests_sla_breach ON operations.service_requests(property_id)
    WHERE sla_compliant = FALSE AND deleted_at IS NULL;
CREATE INDEX idx_service_requests_urgent ON operations.service_requests(property_id)
    WHERE priority = 'URGENT' AND status NOT IN ('COMPLETED', 'CANCELLED');

-- Incident Reports (Aggregate Root) - NEW
CREATE TABLE operations.incident_reports (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,

    -- Incident details
    incident_type operations.incident_type NOT NULL,
    severity shared.severity NOT NULL,

    -- Location
    area operations.area NOT NULL,
    specific_location TEXT,
    inventory_unit_id UUID,  -- No FK (cross-context)

    -- Timing
    occurred_at TIMESTAMPTZ NOT NULL,
    reported_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    reported_by UUID NOT NULL REFERENCES operations.staff(id),

    -- Description
    description TEXT NOT NULL,

    -- Involved parties (JSONB array)
    involved_parties JSONB,
    -- Example: [
    --   {
    --     "party_type": "GUEST",
    --     "party_id": "guest_uuid",
    --     "name": "John Doe",
    --     "injury_details": {
    --       "injury_type": "Slip and fall",
    --       "body_part": "Ankle",
    --       "medical_attention_required": true,
    --       "hospital_name": "City Hospital"
    --     }
    --   }
    -- ]

    -- Witnesses (JSONB array)
    witnesses JSONB,

    -- Immediate actions taken
    immediate_actions JSONB,

    -- Root cause analysis
    root_cause_analysis JSONB,

    -- Corrective actions (separate table for tracking)
    preventive_measures TEXT[],

    -- Evidence
    photos_urls TEXT[],
    videos_urls TEXT[],

    -- External reports
    police_report_number VARCHAR(100),
    insurance_claim_number VARCHAR(100),
    regulatory_report_required BOOLEAN NOT NULL DEFAULT FALSE,
    regulatory_report_submitted BOOLEAN NOT NULL DEFAULT FALSE,
    regulatory_report_submitted_at TIMESTAMPTZ,

    -- Status
    status operations.incident_status NOT NULL DEFAULT 'OPEN',
    investigated_by UUID REFERENCES operations.staff(id),
    closed_at TIMESTAMPTZ,
    closed_by UUID REFERENCES operations.staff(id),

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_incident_reports_property ON operations.incident_reports(property_id, occurred_at DESC);
CREATE INDEX idx_incident_reports_type ON operations.incident_reports(property_id, incident_type);
CREATE INDEX idx_incident_reports_severity ON operations.incident_reports(property_id, severity);
CREATE INDEX idx_incident_reports_status ON operations.incident_reports(property_id, status)
    WHERE deleted_at IS NULL;
CREATE INDEX idx_incident_reports_critical ON operations.incident_reports(property_id)
    WHERE severity = 'CRITICAL' AND status != 'CLOSED';

-- Corrective Actions (Entity within IncidentReport)
CREATE TABLE operations.corrective_actions (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    incident_id UUID NOT NULL REFERENCES operations.incident_reports(id) ON DELETE CASCADE,

    -- Action details
    action TEXT NOT NULL,
    assigned_to UUID NOT NULL REFERENCES operations.staff(id),
    due_date DATE NOT NULL,

    -- Status
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING',  -- PENDING, IN_PROGRESS, COMPLETED
    completed_at TIMESTAMPTZ,

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_corrective_actions_incident ON operations.corrective_actions(incident_id);
CREATE INDEX idx_corrective_actions_assigned ON operations.corrective_actions(assigned_to, status);
CREATE INDEX idx_corrective_actions_overdue ON operations.corrective_actions(assigned_to)
    WHERE status != 'COMPLETED' AND due_date < CURRENT_DATE;

-- Training Modules (Aggregate Root) - NEW
CREATE TABLE operations.training_modules (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID,  -- NULL = organization-wide

    -- Module details
    title VARCHAR(255) NOT NULL,
    description TEXT,
    module_type operations.module_type NOT NULL,
    category operations.training_category NOT NULL,

    -- Target audience
    target_roles operations.staff_role[],  -- Array of roles

    -- Content
    content_format operations.content_format NOT NULL,
    content_url VARCHAR(500),
    duration_minutes INTEGER,

    -- Learning objectives
    learning_objectives TEXT[],

    -- Prerequisites
    prerequisite_module_ids UUID[],

    -- Certification
    certification_required BOOLEAN NOT NULL DEFAULT FALSE,
    certification_validity_days INTEGER,  -- NULL = no expiry

    -- Assessment
    assessment_required BOOLEAN NOT NULL DEFAULT FALSE,
    passing_score INTEGER,  -- Percentage

    -- Version control
    version_number INTEGER NOT NULL DEFAULT 1,

    -- Status
    status operations.module_status NOT NULL DEFAULT 'DRAFT',

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT chk_passing_score_range CHECK (passing_score IS NULL OR passing_score BETWEEN 0 AND 100)
);

CREATE INDEX idx_training_modules_property ON operations.training_modules(property_id);
CREATE INDEX idx_training_modules_type ON operations.training_modules(module_type, category);
CREATE INDEX idx_training_modules_status ON operations.training_modules(status) WHERE deleted_at IS NULL;
CREATE INDEX idx_training_modules_roles ON operations.training_modules USING GIN(target_roles);

-- Training Enrollments (Entity within TrainingModule)
CREATE TABLE operations.training_enrollments (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    module_id UUID NOT NULL REFERENCES operations.training_modules(id),
    staff_id UUID NOT NULL REFERENCES operations.staff(id),

    -- Enrollment details
    enrolled_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,

    -- Status
    status operations.enrollment_status NOT NULL DEFAULT 'NOT_STARTED',
    progress_percentage INTEGER NOT NULL DEFAULT 0,

    -- Assessment attempts (JSONB array)
    assessment_attempts JSONB,
    -- Example: [
    --   {
    --     "attempt_number": 1,
    --     "attempted_at": "2025-12-21T10:00:00Z",
    --     "score": 75,
    --     "passed": false
    --   },
    --   {
    --     "attempt_number": 2,
    --     "attempted_at": "2025-12-22T10:00:00Z",
    --     "score": 85,
    --     "passed": true
    --   }
    -- ]

    -- Certification
    certification_issued BOOLEAN NOT NULL DEFAULT FALSE,
    certification_issued_at TIMESTAMPTZ,
    certification_expires_at TIMESTAMPTZ,
    certification_number VARCHAR(100),

    -- Instructor (if in-person)
    instructor_id UUID REFERENCES operations.staff(id),

    -- Feedback
    feedback_rating INTEGER,  -- 1-5
    feedback_comment TEXT,
    feedback_submitted_at TIMESTAMPTZ,

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_module_staff UNIQUE(module_id, staff_id),
    CONSTRAINT chk_progress_range CHECK (progress_percentage BETWEEN 0 AND 100),
    CONSTRAINT chk_feedback_rating_range CHECK (feedback_rating IS NULL OR feedback_rating BETWEEN 1 AND 5)
);

CREATE INDEX idx_training_enrollments_module ON operations.training_enrollments(module_id);
CREATE INDEX idx_training_enrollments_staff ON operations.training_enrollments(staff_id);
CREATE INDEX idx_training_enrollments_status ON operations.training_enrollments(staff_id, status);
CREATE INDEX idx_training_enrollments_expiring ON operations.training_enrollments(staff_id)
    WHERE certification_expires_at IS NOT NULL
      AND certification_expires_at BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '30 days';

-- Housekeeping Tasks (Aggregate Root)
CREATE TABLE operations.housekeeping_tasks (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,
    inventory_unit_id UUID NOT NULL,  -- No FK (cross-context)

    -- Task details
    task_type operations.task_type NOT NULL,
    priority shared.priority NOT NULL DEFAULT 'NORMAL',

    -- Assignment
    assigned_to UUID REFERENCES operations.staff(id),

    -- Status
    status operations.task_status NOT NULL DEFAULT 'PENDING',

    -- Timing
    scheduled_for TIMESTAMPTZ,
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    verified_at TIMESTAMPTZ,
    verified_by UUID REFERENCES operations.staff(id),

    -- Quality
    quality_score INTEGER,  -- 1-5
    inspection_notes TEXT,

    -- Issues found
    issues_found TEXT[],

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT chk_quality_score_range CHECK (quality_score IS NULL OR quality_score BETWEEN 1 AND 5)
);

CREATE INDEX idx_housekeeping_tasks_property ON operations.housekeeping_tasks(property_id, scheduled_for);
CREATE INDEX idx_housekeeping_tasks_unit ON operations.housekeeping_tasks(inventory_unit_id);
CREATE INDEX idx_housekeeping_tasks_assigned ON operations.housekeeping_tasks(assigned_to, status);
CREATE INDEX idx_housekeeping_tasks_pending ON operations.housekeeping_tasks(property_id)
    WHERE status IN ('PENDING', 'ASSIGNED') AND deleted_at IS NULL;

-- Maintenance Requests (Aggregate Root)
CREATE TABLE operations.maintenance_requests (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,
    inventory_unit_id UUID,  -- No FK (cross-context), nullable for common areas

    -- Request details
    maintenance_type operations.maintenance_type NOT NULL,
    category VARCHAR(100),  -- PLUMBING, ELECTRICAL, HVAC, etc.
    severity shared.severity NOT NULL,
    description TEXT NOT NULL,

    -- Reported by
    reported_by UUID NOT NULL REFERENCES operations.staff(id),
    reported_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    -- Assignment
    assigned_to UUID REFERENCES operations.staff(id),
    assigned_at TIMESTAMPTZ,

    -- Vendor (if external)
    vendor_name VARCHAR(255),
    vendor_contact VARCHAR(255),

    -- Status
    status operations.maintenance_status NOT NULL DEFAULT 'REPORTED',

    -- Timing
    scheduled_for TIMESTAMPTZ,
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    verified_at TIMESTAMPTZ,
    verified_by UUID REFERENCES operations.staff(id),

    -- Cost
    estimated_cost shared.money,
    actual_cost shared.money,

    -- Resolution
    resolution_notes TEXT,
    parts_used TEXT[],

    -- Photos
    photos_urls TEXT[],

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_maintenance_requests_property ON operations.maintenance_requests(property_id, reported_at DESC);
CREATE INDEX idx_maintenance_requests_unit ON operations.maintenance_requests(inventory_unit_id);
CREATE INDEX idx_maintenance_requests_assigned ON operations.maintenance_requests(assigned_to, status);
CREATE INDEX idx_maintenance_requests_emergency ON operations.maintenance_requests(property_id)
    WHERE maintenance_type = 'EMERGENCY' AND status NOT IN ('COMPLETED', 'CANCELLED');

-- ============================================================================
-- TRIGGERS
-- ============================================================================

CREATE TRIGGER trg_staff_updated_at
    BEFORE UPDATE ON operations.staff
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_service_requests_updated_at
    BEFORE UPDATE ON operations.service_requests
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_incident_reports_updated_at
    BEFORE UPDATE ON operations.incident_reports
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_training_modules_updated_at
    BEFORE UPDATE ON operations.training_modules
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON TABLE operations.service_requests IS 'Guest service requests - housekeeping, room service, concierge, etc.';
COMMENT ON TABLE operations.incident_reports IS 'Safety, security, and operational incident tracking';
COMMENT ON TABLE operations.training_modules IS 'Staff training modules with certification tracking';
COMMENT ON TABLE operations.training_enrollments IS 'Staff enrollment in training modules';
COMMENT ON COLUMN operations.service_requests.sla_compliant IS 'Auto-calculated: acknowledged within 5 minutes';



