-- ============================================================================
-- StayOS Database Schema - Guest Context
-- ============================================================================
-- Description: Guest profiles, loyalty, preferences, and feedback
-- Aggregates: GuestProfile, Stay, GuestFeedback
-- Version: 1.0
-- Date: 2025-12-21
-- ============================================================================

CREATE SCHEMA IF NOT EXISTS guest;

-- ============================================================================
-- ENUMS
-- ============================================================================

CREATE TYPE guest.guest_type AS ENUM ('INDIVIDUAL', 'CORPORATE', 'GROUP', 'TRAVEL_AGENT');
CREATE TYPE guest.id_type AS ENUM ('PASSPORT', 'NATIONAL_ID', 'DRIVERS_LICENSE', 'OTHER');
CREATE TYPE guest.loyalty_tier AS ENUM ('BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND');
CREATE TYPE guest.stay_status AS ENUM ('CHECKED_IN', 'IN_HOUSE', 'CHECKED_OUT', 'NO_SHOW', 'CANCELLED');

CREATE TYPE guest.feedback_type AS ENUM (
    'POST_STAY_SURVEY', 'IN_STAY_FEEDBACK', 'COMPLAINT', 
    'COMPLIMENT', 'REVIEW', 'NPS'
);

CREATE TYPE guest.feedback_channel AS ENUM (
    'EMAIL_SURVEY', 'SMS_SURVEY', 'IN_APP', 'WEBSITE', 
    'THIRD_PARTY_REVIEW', 'IN_PERSON', 'PHONE'
);

CREATE TYPE guest.feedback_status AS ENUM (
    'NEW', 'ACKNOWLEDGED', 'UNDER_REVIEW', 'RESPONDED', 
    'ESCALATED', 'RESOLVED', 'CLOSED'
);

CREATE TYPE guest.sentiment AS ENUM ('POSITIVE', 'NEUTRAL', 'NEGATIVE');

CREATE TYPE guest.review_platform AS ENUM (
    'GOOGLE', 'TRIPADVISOR', 'BOOKING_COM', 'EXPEDIA', 
    'AIRBNB', 'YELP', 'FACEBOOK', 'OTHER'
);

-- ============================================================================
-- TABLES
-- ============================================================================

-- Guest Profiles (Aggregate Root)
CREATE TABLE guest.profiles (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    
    -- Personal information (PII - encrypt in production)
    title VARCHAR(20),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    full_name VARCHAR(255) GENERATED ALWAYS AS (
        COALESCE(title || ' ', '') || first_name || ' ' || last_name
    ) STORED,
    
    -- Contact
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    alternate_phone VARCHAR(20),
    
    -- Address
    address shared.address,
    
    -- Guest type
    guest_type guest.guest_type NOT NULL DEFAULT 'INDIVIDUAL',
    
    -- Identification (encrypted)
    id_type guest.id_type,
    id_number_encrypted TEXT,  -- Encrypted with pgcrypto
    id_issuing_country CHAR(2) REFERENCES shared.countries(code),
    id_expiry_date DATE,
    
    -- Date of birth (for age verification, promotions)
    date_of_birth DATE,
    
    -- Preferences (JSONB for flexibility)
    preferences JSONB NOT NULL DEFAULT '{}',
    -- Example: {
    --   "room": {"floor": "high", "bed_type": "KING", "pillow_type": "firm"},
    --   "dietary": ["vegetarian", "gluten_free"],
    --   "temperature": 22,
    --   "newspaper": "Wall Street Journal",
    --   "special_requests": "Extra towels"
    -- }
    
    -- Communication preferences
    marketing_opt_in BOOLEAN NOT NULL DEFAULT FALSE,
    sms_opt_in BOOLEAN NOT NULL DEFAULT FALSE,
    preferred_language CHAR(2) REFERENCES shared.languages(code),
    
    -- GDPR compliance
    gdpr_consent_given BOOLEAN NOT NULL DEFAULT FALSE,
    gdpr_consent_date TIMESTAMPTZ,
    data_retention_until DATE,  -- Auto-delete after this date
    
    -- VIP status
    is_vip BOOLEAN NOT NULL DEFAULT FALSE,
    vip_notes TEXT,
    
    -- Blacklist
    is_blacklisted BOOLEAN NOT NULL DEFAULT FALSE,
    blacklist_reason TEXT,
    blacklisted_at TIMESTAMPTZ,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_guest_profiles_email ON guest.profiles(email) WHERE deleted_at IS NULL;
CREATE INDEX idx_guest_profiles_phone ON guest.profiles(phone) WHERE deleted_at IS NULL;
CREATE INDEX idx_guest_profiles_name ON guest.profiles USING GIN(to_tsvector('english', full_name));
CREATE INDEX idx_guest_profiles_preferences ON guest.profiles USING GIN(preferences);
CREATE INDEX idx_guest_profiles_vip ON guest.profiles(is_vip) WHERE is_vip = TRUE AND deleted_at IS NULL;

-- Loyalty Membership (Value Object within GuestProfile)
CREATE TABLE guest.loyalty_memberships (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    guest_id UUID NOT NULL REFERENCES guest.profiles(id) ON DELETE CASCADE,
    
    -- Membership details
    membership_number VARCHAR(50) UNIQUE NOT NULL,
    tier guest.loyalty_tier NOT NULL DEFAULT 'BRONZE',
    points INTEGER NOT NULL DEFAULT 0,
    lifetime_points INTEGER NOT NULL DEFAULT 0,
    
    -- Tier management
    tier_expiry_date DATE,
    tier_qualified_date DATE,
    
    -- Status
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    enrolled_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    CONSTRAINT uq_guest_loyalty UNIQUE(guest_id),
    CONSTRAINT chk_points_non_negative CHECK (points >= 0),
    CONSTRAINT chk_lifetime_points_gte_points CHECK (lifetime_points >= points)
);

CREATE INDEX idx_loyalty_tier ON guest.loyalty_memberships(tier, is_active);
CREATE INDEX idx_loyalty_membership_number ON guest.loyalty_memberships(membership_number);

-- Stays (Aggregate Root - bridges Reservation to Operations)
CREATE TABLE guest.stays (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)
    reservation_id UUID NOT NULL,  -- No FK (cross-context)
    guest_id UUID NOT NULL REFERENCES guest.profiles(id),
    inventory_unit_id UUID NOT NULL,  -- No FK (cross-context)

    -- Stay details
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    actual_check_in_time TIMESTAMPTZ,
    actual_check_out_time TIMESTAMPTZ,

    -- Guest count
    adults INTEGER NOT NULL,
    children INTEGER NOT NULL DEFAULT 0,

    -- Status
    status guest.stay_status NOT NULL DEFAULT 'CHECKED_IN',

    -- Key cards
    key_cards_issued JSONB,  -- [{card_id, issued_at, deactivated_at}, ...]

    -- Special requests
    special_requests TEXT,

    -- Guest satisfaction (post-checkout)
    guest_satisfaction_score INTEGER,  -- 1-5

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES shared.users(id),
    updated_by UUID NOT NULL REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT chk_stay_dates CHECK (check_out_date > check_in_date),
    CONSTRAINT chk_adults_positive CHECK (adults > 0),
    CONSTRAINT chk_satisfaction_range CHECK (guest_satisfaction_score BETWEEN 1 AND 5)
);

CREATE INDEX idx_stays_property ON guest.stays(property_id, status);
CREATE INDEX idx_stays_guest ON guest.stays(guest_id);
CREATE INDEX idx_stays_reservation ON guest.stays(reservation_id);
CREATE INDEX idx_stays_dates ON guest.stays(property_id, check_in_date, check_out_date);
CREATE INDEX idx_stays_current ON guest.stays(property_id)
    WHERE status IN ('CHECKED_IN', 'IN_HOUSE') AND deleted_at IS NULL;

-- Guest Feedback (Aggregate Root)
CREATE TABLE guest.feedback (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,  -- No FK (cross-context)
    guest_id UUID NOT NULL REFERENCES guest.profiles(id),
    stay_id UUID REFERENCES guest.stays(id),
    reservation_id UUID,  -- No FK (cross-context)

    -- Feedback type and channel
    feedback_type guest.feedback_type NOT NULL,
    channel guest.feedback_channel NOT NULL,
    submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    -- Touchpoint
    touchpoint VARCHAR(50),  -- CHECK_IN, DURING_STAY, CHECK_OUT, POST_STAY

    -- Ratings
    overall_rating DECIMAL(3, 2),  -- 1.00 to 5.00 or 1.00 to 10.00
    nps_score INTEGER,  -- 0-10 for NPS surveys

    -- Category ratings (JSONB)
    category_ratings JSONB,
    -- Example: [
    --   {"category": "CLEANLINESS", "rating": 5, "comment": "Spotless!"},
    --   {"category": "STAFF", "rating": 4, "comment": "Friendly"}
    -- ]

    -- Open-ended responses
    open_ended_responses JSONB,
    -- Example: [
    --   {"question": "What did you like most?", "answer": "The view"},
    --   {"question": "What can we improve?", "answer": "WiFi speed"}
    -- ]

    -- Sentiment analysis (AI-derived)
    sentiment guest.sentiment,
    sentiment_score DECIMAL(3, 2),  -- -1.00 to 1.00
    keywords TEXT[],  -- AI-extracted themes

    -- Complaint details (if feedback_type = COMPLAINT)
    complaint_category VARCHAR(50),
    complaint_severity shared.severity,
    resolution_requested BOOLEAN,
    compensation_requested BOOLEAN,

    -- Review details (if third-party review)
    review_platform guest.review_platform,
    review_url VARCHAR(500),
    public_review BOOLEAN NOT NULL DEFAULT FALSE,
    review_text TEXT,
    review_title VARCHAR(255),
    review_photos TEXT[],

    -- Verification
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    anonymous BOOLEAN NOT NULL DEFAULT FALSE,

    -- Response
    response_required BOOLEAN NOT NULL DEFAULT FALSE,
    responded_at TIMESTAMPTZ,
    responded_by UUID REFERENCES shared.users(id),
    response_text TEXT,
    public_response_text TEXT,  -- For third-party platforms

    -- Status and assignment
    status guest.feedback_status NOT NULL DEFAULT 'NEW',
    assigned_to UUID REFERENCES shared.users(id),

    -- Service recovery
    service_recovery_action JSONB,
    -- Example: {
    --   "action_type": "REFUND",
    --   "action_value": {"amount": 50.00, "currency": "USD"},
    --   "approved_by": "user_uuid",
    --   "executed_at": "2025-12-21T10:00:00Z"
    -- }

    -- Follow-up
    follow_up_required BOOLEAN NOT NULL DEFAULT FALSE,
    follow_up_completed_at TIMESTAMPTZ,

    -- Tags for categorization
    tags TEXT[],

    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID REFERENCES shared.users(id),
    updated_by UUID REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ,
    version INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT chk_nps_range CHECK (nps_score IS NULL OR nps_score BETWEEN 0 AND 10),
    CONSTRAINT chk_overall_rating_range CHECK (overall_rating IS NULL OR overall_rating BETWEEN 1.00 AND 10.00),
    CONSTRAINT chk_sentiment_score_range CHECK (sentiment_score IS NULL OR sentiment_score BETWEEN -1.00 AND 1.00)
);

CREATE INDEX idx_feedback_property ON guest.feedback(property_id, submitted_at DESC);
CREATE INDEX idx_feedback_guest ON guest.feedback(guest_id);
CREATE INDEX idx_feedback_stay ON guest.feedback(stay_id);
CREATE INDEX idx_feedback_type ON guest.feedback(property_id, feedback_type);
CREATE INDEX idx_feedback_status ON guest.feedback(property_id, status) WHERE deleted_at IS NULL;
CREATE INDEX idx_feedback_sentiment ON guest.feedback(property_id, sentiment);
CREATE INDEX idx_feedback_nps ON guest.feedback(property_id, nps_score) WHERE nps_score IS NOT NULL;
CREATE INDEX idx_feedback_rating ON guest.feedback(property_id, overall_rating) WHERE overall_rating IS NOT NULL;
CREATE INDEX idx_feedback_unresponded ON guest.feedback(property_id)
    WHERE response_required = TRUE AND responded_at IS NULL AND deleted_at IS NULL;
CREATE INDEX idx_feedback_keywords ON guest.feedback USING GIN(keywords);
CREATE INDEX idx_feedback_tags ON guest.feedback USING GIN(tags);

-- ============================================================================
-- TRIGGERS
-- ============================================================================

CREATE TRIGGER trg_guest_profiles_updated_at
    BEFORE UPDATE ON guest.profiles
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_stays_updated_at
    BEFORE UPDATE ON guest.stays
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

CREATE TRIGGER trg_feedback_updated_at
    BEFORE UPDATE ON guest.feedback
    FOR EACH ROW EXECUTE FUNCTION shared.update_updated_at_column();

-- ============================================================================
-- VIEWS
-- ============================================================================

-- NPS Metrics View
CREATE VIEW guest.v_nps_metrics AS
SELECT
    property_id,
    DATE_TRUNC('month', submitted_at) AS month,
    COUNT(*) AS total_responses,
    COUNT(*) FILTER (WHERE nps_score >= 9) AS promoters,
    COUNT(*) FILTER (WHERE nps_score BETWEEN 7 AND 8) AS passives,
    COUNT(*) FILTER (WHERE nps_score <= 6) AS detractors,
    ROUND(
        (COUNT(*) FILTER (WHERE nps_score >= 9)::DECIMAL / COUNT(*) * 100) -
        (COUNT(*) FILTER (WHERE nps_score <= 6)::DECIMAL / COUNT(*) * 100),
        2
    ) AS nps_score
FROM guest.feedback
WHERE feedback_type = 'NPS' AND nps_score IS NOT NULL AND deleted_at IS NULL
GROUP BY property_id, DATE_TRUNC('month', submitted_at);

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON TABLE guest.profiles IS 'Guest profile aggregate - personal info, preferences, loyalty';
COMMENT ON TABLE guest.feedback IS 'Guest feedback aggregate - surveys, reviews, complaints, NPS';
COMMENT ON COLUMN guest.profiles.preferences IS 'Flexible guest preferences: room, dietary, temperature, etc.';
COMMENT ON COLUMN guest.feedback.category_ratings IS 'Ratings by category: cleanliness, staff, location, etc.';
COMMENT ON VIEW guest.v_nps_metrics IS 'Monthly NPS calculation: (% Promoters - % Detractors)';


