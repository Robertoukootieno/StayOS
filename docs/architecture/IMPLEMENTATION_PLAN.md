# Restaurant & Bar Extension - Implementation Plan

**Date**: 2026-01-17
**Version**: 1.1
**Estimated Duration**: 4-6 weeks
**Last Updated**: 2026-01-17

---

## 🎯 Implementation Status

| Phase | Status | Completion Date | Notes |
|-------|--------|----------------|-------|
| **Phase 1: Foundation & Database Design** | ✅ COMPLETE | 2026-01-17 | Database migrations applied successfully |
| **Phase 2: API Specification Design** | ✅ COMPLETE | 2026-01-17 | 21 endpoints, 2,462 lines of OpenAPI spec |
| **Phase 3: Backend Implementation** | ⏳ PENDING | - | Ready to begin |
| **Phase 4: Testing & Validation** | ⏳ PENDING | - | - |
| **Phase 5: Documentation & Deployment** | ⏳ PENDING | - | - |

### **Completed Work:**

**Phase 1 Deliverables:**
- ✅ 4 database migration scripts (525 lines)
- ✅ 2 sample data scripts
- ✅ 3 architecture documents
- ✅ Database successfully migrated to `stayos_dev`

**Phase 2 Deliverables:**
- ✅ 3 schema files (venues, tables, table-reservations) - 1,408 lines
- ✅ 5 path files (venues, tables, floor-sections, reservations, operations) - 1,054 lines
- ✅ Updated main OpenAPI file with 5 tags, 4 scopes, 24 schemas
- ✅ Added UnprocessableEntity (422) response
- ✅ 21 new REST endpoints designed

**Git Commits:**
- `87aa5ae` - feat: add restaurant and bar extension architecture and database migrations
- `7cefa28` - docs: add comprehensive summary of restaurant extension Phase 1
- `9b8ea3e` - docs: add migration completion report
- `ad2b56d` - feat: add comprehensive OpenAPI specs for restaurant and bar features

---

## 📅 Project Timeline

### **Phase 1: Foundation** (Week 1-2)
- Extend property types and venue management
- Create table management system
- Update database schemas

### **Phase 2: Core Features** (Week 2-3)
- Implement table reservation system
- Enhance F&B orders for dine-in
- Add POS features (split bills, transfers)

### **Phase 3: Operations** (Week 3-4)
- Kitchen Display System (KDS) integration
- Restaurant-specific reporting
- Staff shift management

### **Phase 4: Advanced Features** (Week 4-5)
- Delivery integration (UberEats, DoorDash, etc.)
- Customer loyalty for walk-ins
- Waitlist management

### **Phase 5: Testing & Documentation** (Week 5-6)
- Comprehensive testing
- API documentation
- User guides
- Deployment

---

## 🗄️ Database Schema Changes

### **1. Extend Property Management Schema**

**File**: `backend/database/schemas/schema_property_management.sql`

```sql
-- Add new property types for restaurants and bars
ALTER TYPE property_mgmt.property_type ADD VALUE IF NOT EXISTS 'RESTAURANT';
ALTER TYPE property_mgmt.property_type ADD VALUE IF NOT EXISTS 'BAR';
ALTER TYPE property_mgmt.property_type ADD VALUE IF NOT EXISTS 'CAFE';
ALTER TYPE property_mgmt.property_type ADD VALUE IF NOT EXISTS 'BISTRO';
ALTER TYPE property_mgmt.property_type ADD VALUE IF NOT EXISTS 'PUB';
ALTER TYPE property_mgmt.property_type ADD VALUE IF NOT EXISTS 'FOOD_TRUCK';
ALTER TYPE property_mgmt.property_type ADD VALUE IF NOT EXISTS 'NIGHTCLUB';

-- Add venue classification enum
CREATE TYPE property_mgmt.venue_classification AS ENUM (
    'FINE_DINING',
    'CASUAL_DINING',
    'FAST_CASUAL',
    'QUICK_SERVICE',
    'FOOD_COURT',
    'BUFFET',
    'CAFE',
    'BAKERY',
    'BAR',
    'LOUNGE',
    'NIGHTCLUB',
    'FOOD_TRUCK'
);

-- Add venue-specific attributes to properties table
ALTER TABLE property_mgmt.properties 
ADD COLUMN venue_classification property_mgmt.venue_classification,
ADD COLUMN seating_capacity INTEGER,
ADD COLUMN has_outdoor_seating BOOLEAN DEFAULT FALSE,
ADD COLUMN has_bar BOOLEAN DEFAULT FALSE,
ADD COLUMN has_private_dining BOOLEAN DEFAULT FALSE,
ADD COLUMN cuisine_types TEXT[],
ADD COLUMN dress_code VARCHAR(100),
ADD COLUMN parking_available BOOLEAN DEFAULT FALSE;
```

### **2. Create Table Management Schema**

**File**: `backend/database/schemas/schema_tables.sql`

```sql
-- New schema for table and seating management
CREATE SCHEMA IF NOT EXISTS tables;

-- Table status enum
CREATE TYPE tables.table_status AS ENUM (
    'AVAILABLE',
    'OCCUPIED',
    'RESERVED',
    'CLEANING',
    'OUT_OF_SERVICE'
);

-- Table shape enum
CREATE TYPE tables.table_shape AS ENUM (
    'SQUARE',
    'RECTANGLE',
    'ROUND',
    'OVAL',
    'BOOTH',
    'BAR_SEATING',
    'COUNTER'
);

-- Floor sections/areas
CREATE TABLE tables.floor_sections (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,
    section_name VARCHAR(100) NOT NULL,
    description TEXT,
    floor_level INTEGER DEFAULT 1,
    is_outdoor BOOLEAN DEFAULT FALSE,
    is_smoking BOOLEAN DEFAULT FALSE,
    display_order INTEGER,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ
);

-- Tables (Aggregate Root)
CREATE TABLE tables.tables (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,
    section_id UUID REFERENCES tables.floor_sections(id),
    
    -- Table identification
    table_number VARCHAR(20) NOT NULL,
    table_name VARCHAR(100),
    
    -- Physical attributes
    min_capacity INTEGER NOT NULL DEFAULT 2,
    max_capacity INTEGER NOT NULL DEFAULT 4,
    shape tables.table_shape NOT NULL DEFAULT 'SQUARE',
    
    -- Status
    status tables.table_status NOT NULL DEFAULT 'AVAILABLE',
    
    -- Position (for floor plan visualization)
    position_x DECIMAL(10,2),
    position_y DECIMAL(10,2),
    rotation DECIMAL(5,2) DEFAULT 0,
    
    -- Features
    is_accessible BOOLEAN DEFAULT FALSE,
    is_high_top BOOLEAN DEFAULT FALSE,
    has_power_outlet BOOLEAN DEFAULT FALSE,
    notes TEXT,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ,
    
    UNIQUE(property_id, table_number)
);

CREATE INDEX idx_tables_property ON tables.tables(property_id);
CREATE INDEX idx_tables_status ON tables.tables(property_id, status) 
    WHERE deleted_at IS NULL;
CREATE INDEX idx_tables_section ON tables.tables(section_id);
```

### **3. Create Table Reservation Schema**

**File**: `backend/database/schemas/schema_table_reservations.sql`

```sql
CREATE SCHEMA IF NOT EXISTS table_reservations;

-- Reservation status
CREATE TYPE table_reservations.reservation_status AS ENUM (
    'PENDING',
    'CONFIRMED',
    'SEATED',
    'COMPLETED',
    'CANCELLED',
    'NO_SHOW'
);

-- Table Reservations (Aggregate Root)
CREATE TABLE table_reservations.reservations (
    id UUID PRIMARY KEY DEFAULT shared.uuid_generate_v7(),
    property_id UUID NOT NULL,
    
    -- Guest information
    guest_id UUID,  -- Optional: link to guest profile
    guest_name VARCHAR(255) NOT NULL,
    guest_phone VARCHAR(50) NOT NULL,
    guest_email VARCHAR(255),
    
    -- Reservation details
    reservation_date DATE NOT NULL,
    reservation_time TIME NOT NULL,
    party_size INTEGER NOT NULL,
    duration_minutes INTEGER DEFAULT 120,
    
    -- Table assignment
    table_id UUID REFERENCES tables.tables(id),
    preferred_section_id UUID REFERENCES tables.floor_sections(id),
    
    -- Status
    status table_reservations.reservation_status NOT NULL DEFAULT 'PENDING',
    
    -- Special requests
    special_requests TEXT,
    occasion VARCHAR(100),  -- Birthday, Anniversary, etc.
    dietary_restrictions TEXT[],
    
    -- Confirmation
    confirmation_code VARCHAR(20) UNIQUE,
    confirmed_at TIMESTAMPTZ,
    
    -- Seating
    seated_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    
    -- Cancellation
    cancelled_at TIMESTAMPTZ,
    cancellation_reason TEXT,
    
    -- No-show tracking
    marked_no_show_at TIMESTAMPTZ,
    
    -- Audit
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by UUID REFERENCES shared.users(id),
    deleted_at TIMESTAMPTZ
);

CREATE INDEX idx_reservations_property ON table_reservations.reservations(property_id);
CREATE INDEX idx_reservations_date ON table_reservations.reservations(property_id, reservation_date);
CREATE INDEX idx_reservations_status ON table_reservations.reservations(status) 
    WHERE deleted_at IS NULL;
CREATE INDEX idx_reservations_table ON table_reservations.reservations(table_id);
```

---

## 🔌 API Endpoints

### **New Endpoints to Implement**

#### **Venue Management**
```
GET    /v1/venues                    # List all venues (restaurants/bars)
POST   /v1/venues                    # Create new venue
GET    /v1/venues/{venueId}          # Get venue details
PUT    /v1/venues/{venueId}          # Update venue
DELETE /v1/venues/{venueId}          # Delete venue
```

#### **Table Management**
```
GET    /v1/tables                    # List tables
POST   /v1/tables                    # Create table
GET    /v1/tables/{tableId}          # Get table details
PUT    /v1/tables/{tableId}          # Update table
DELETE /v1/tables/{tableId}          # Delete table
PATCH  /v1/tables/{tableId}/status   # Update table status
GET    /v1/tables/availability       # Check table availability
```

#### **Floor Sections**
```
GET    /v1/floor-sections            # List floor sections
POST   /v1/floor-sections            # Create section
GET    /v1/floor-sections/{sectionId} # Get section details
PUT    /v1/floor-sections/{sectionId} # Update section
DELETE /v1/floor-sections/{sectionId} # Delete section
```

#### **Table Reservations**
```
GET    /v1/table-reservations        # List reservations
POST   /v1/table-reservations        # Create reservation
GET    /v1/table-reservations/{id}   # Get reservation details
PUT    /v1/table-reservations/{id}   # Update reservation
DELETE /v1/table-reservations/{id}   # Cancel reservation
POST   /v1/table-reservations/{id}/confirm  # Confirm reservation
POST   /v1/table-reservations/{id}/seat     # Mark as seated
POST   /v1/table-reservations/{id}/complete # Complete reservation
POST   /v1/table-reservations/{id}/no-show  # Mark as no-show
GET    /v1/table-reservations/availability  # Check availability
```

---

## 📝 Next Steps

1. **Review this implementation plan**
2. **Create database migration scripts**
3. **Design OpenAPI specifications**
4. **Implement backend routes and controllers**
5. **Write comprehensive tests**
6. **Update documentation**

---

**Ready to proceed?** Let me know and I'll start implementing!

