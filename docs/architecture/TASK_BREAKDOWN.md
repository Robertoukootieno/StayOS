# Restaurant & Bar Extension - Task Breakdown

**Date**: 2026-01-17  
**Status**: Planning  

---

## 📋 Task List

### **Phase 1: Foundation & Database** (Week 1-2)

#### **Task 1.1: Extend Property Types** ⏳
- [ ] Update `property_mgmt.property_type` enum
- [ ] Add `venue_classification` enum
- [ ] Add venue-specific columns to properties table
- [ ] Create migration script
- [ ] Test migration on dev database
- [ ] Update seed data with sample restaurants/bars

**Estimated Time**: 4 hours  
**Dependencies**: None  
**Files**:
- `backend/database/schemas/schema_property_management.sql`
- `backend/database/migrations/001_add_restaurant_property_types.sql`

---

#### **Task 1.2: Create Table Management Schema** ⏳
- [ ] Create `tables` schema
- [ ] Create `floor_sections` table
- [ ] Create `tables` table with all attributes
- [ ] Add indexes for performance
- [ ] Create migration script
- [ ] Add seed data for sample tables

**Estimated Time**: 6 hours  
**Dependencies**: None  
**Files**:
- `backend/database/schemas/schema_tables.sql`
- `backend/database/migrations/002_create_tables_schema.sql`
- `backend/database/seeds/sample_tables.sql`

---

#### **Task 1.3: Create Table Reservation Schema** ⏳
- [ ] Create `table_reservations` schema
- [ ] Create `reservations` table
- [ ] Add indexes and constraints
- [ ] Create migration script
- [ ] Add seed data for sample reservations

**Estimated Time**: 5 hours  
**Dependencies**: Task 1.2  
**Files**:
- `backend/database/schemas/schema_table_reservations.sql`
- `backend/database/migrations/003_create_table_reservations_schema.sql`
- `backend/database/seeds/sample_reservations.sql`

---

#### **Task 1.4: Enhance F&B Schema** ⏳
- [ ] Add table_id to fb_orders table
- [ ] Add course_sequence field
- [ ] Add split_bill_info JSONB field
- [ ] Update order_type enum if needed
- [ ] Create migration script

**Estimated Time**: 3 hours  
**Dependencies**: Task 1.2  
**Files**:
- `backend/database/schemas/schema_fb.sql`
- `backend/database/migrations/004_enhance_fb_orders.sql`

---

### **Phase 2: API Specification** (Week 2)

#### **Task 2.1: Design Venue API Spec** ⏳
- [ ] Create OpenAPI spec for venues endpoints
- [ ] Define request/response schemas
- [ ] Add examples
- [ ] Validate with Spectral

**Estimated Time**: 4 hours  
**Dependencies**: Task 1.1  
**Files**:
- `api/schemas/venue.yaml`
- `api/paths/venues.yaml`

---

#### **Task 2.2: Design Table Management API Spec** ⏳
- [ ] Create OpenAPI spec for tables endpoints
- [ ] Create OpenAPI spec for floor sections
- [ ] Define request/response schemas
- [ ] Add examples
- [ ] Validate with Spectral

**Estimated Time**: 5 hours  
**Dependencies**: Task 1.2  
**Files**:
- `api/schemas/tables.yaml`
- `api/paths/tables.yaml`
- `api/paths/floor-sections.yaml`

---

#### **Task 2.3: Design Table Reservation API Spec** ⏳
- [ ] Create OpenAPI spec for reservations endpoints
- [ ] Define request/response schemas
- [ ] Add availability check endpoint spec
- [ ] Add examples
- [ ] Validate with Spectral

**Estimated Time**: 5 hours  
**Dependencies**: Task 1.3  
**Files**:
- `api/schemas/table-reservations.yaml`
- `api/paths/table-reservations.yaml`

---

#### **Task 2.4: Update Main OpenAPI File** ⏳
- [ ] Import new schema files
- [ ] Import new path files
- [ ] Add new tags
- [ ] Add new security scopes
- [ ] Regenerate bundled spec
- [ ] Regenerate SDKs

**Estimated Time**: 3 hours  
**Dependencies**: Tasks 2.1, 2.2, 2.3  
**Files**:
- `api/openapi.yaml`
- `api/openapi-bundled.yaml`

---

### **Phase 3: Backend Implementation** (Week 2-3)

#### **Task 3.1: Implement Venue Routes** ⏳
- [ ] Create venue controller
- [ ] Implement CRUD operations
- [ ] Add authentication middleware
- [ ] Add authorization checks
- [ ] Add input validation
- [ ] Add error handling

**Estimated Time**: 8 hours  
**Dependencies**: Task 2.1  
**Files**:
- `backend/src/routes/venues.ts`
- `backend/src/controllers/venueController.ts`
- `backend/src/middleware/venueAuth.ts`

---

#### **Task 3.2: Implement Table Management Routes** ⏳
- [ ] Create table controller
- [ ] Create floor section controller
- [ ] Implement CRUD operations
- [ ] Add status update endpoint
- [ ] Add availability check logic
- [ ] Add authentication/authorization
- [ ] Add input validation

**Estimated Time**: 10 hours  
**Dependencies**: Task 2.2  
**Files**:
- `backend/src/routes/tables.ts`
- `backend/src/routes/floor-sections.ts`
- `backend/src/controllers/tableController.ts`
- `backend/src/controllers/floorSectionController.ts`

---

#### **Task 3.3: Implement Table Reservation Routes** ⏳
- [ ] Create reservation controller
- [ ] Implement CRUD operations
- [ ] Add confirmation logic
- [ ] Add seating logic
- [ ] Add no-show tracking
- [ ] Add availability check algorithm
- [ ] Add authentication/authorization
- [ ] Send confirmation emails/SMS

**Estimated Time**: 12 hours  
**Dependencies**: Task 2.3, Task 3.2  
**Files**:
- `backend/src/routes/table-reservations.ts`
- `backend/src/controllers/tableReservationController.ts`
- `backend/src/services/reservationService.ts`
- `backend/src/services/notificationService.ts`

---

#### **Task 3.4: Enhance F&B Order Routes** ⏳
- [ ] Update order creation to support table assignment
- [ ] Add split bill functionality
- [ ] Add table transfer functionality
- [ ] Add course management
- [ ] Update order status workflow

**Estimated Time**: 8 hours  
**Dependencies**: Task 1.4, Task 3.2  
**Files**:
- `backend/src/routes/fb.ts`
- `backend/src/controllers/fbController.ts`
- `backend/src/services/orderService.ts`

---

### **Phase 4: Testing** (Week 3-4)

#### **Task 4.1: Unit Tests** ⏳
- [ ] Write tests for venue controller
- [ ] Write tests for table controller
- [ ] Write tests for reservation controller
- [ ] Write tests for F&B enhancements
- [ ] Achieve 80%+ code coverage

**Estimated Time**: 12 hours  
**Dependencies**: Phase 3  
**Files**:
- `backend/tests/unit/venueController.test.ts`
- `backend/tests/unit/tableController.test.ts`
- `backend/tests/unit/reservationController.test.ts`

---

#### **Task 4.2: Integration Tests** ⏳
- [ ] Write API integration tests
- [ ] Test complete workflows
- [ ] Test error scenarios
- [ ] Test authorization

**Estimated Time**: 10 hours  
**Dependencies**: Phase 3  
**Files**:
- `backend/tests/integration/venues.test.ts`
- `backend/tests/integration/tables.test.ts`
- `backend/tests/integration/reservations.test.ts`

---

#### **Task 4.3: End-to-End Tests** ⏳
- [ ] Create restaurant booking scenario
- [ ] Create table management scenario
- [ ] Create order workflow scenario
- [ ] Test with real database

**Estimated Time**: 8 hours  
**Dependencies**: Phase 3  
**Files**:
- `backend/tests/e2e/restaurant-workflow.test.ts`

---

### **Phase 5: Documentation** (Week 4)

#### **Task 5.1: API Documentation** ⏳
- [ ] Generate Swagger UI docs
- [ ] Write API usage guides
- [ ] Add code examples
- [ ] Create Postman collection

**Estimated Time**: 6 hours  
**Files**:
- `docs/api/VENUE_API.md`
- `docs/api/TABLE_API.md`
- `docs/api/RESERVATION_API.md`

---

#### **Task 5.2: User Guides** ⏳
- [ ] Write restaurant setup guide
- [ ] Write table management guide
- [ ] Write reservation guide
- [ ] Create video tutorials

**Estimated Time**: 8 hours  
**Files**:
- `docs/guides/RESTAURANT_SETUP.md`
- `docs/guides/TABLE_MANAGEMENT.md`
- `docs/guides/RESERVATION_SYSTEM.md`

---

## 📊 Summary

| Phase | Tasks | Estimated Hours | Status |
|-------|-------|----------------|--------|
| Phase 1: Foundation | 4 | 18 hours | ⏳ Not Started |
| Phase 2: API Spec | 4 | 17 hours | ⏳ Not Started |
| Phase 3: Backend | 4 | 38 hours | ⏳ Not Started |
| Phase 4: Testing | 3 | 30 hours | ⏳ Not Started |
| Phase 5: Documentation | 2 | 14 hours | ⏳ Not Started |
| **TOTAL** | **17** | **117 hours** (~3-4 weeks) | |

---

**Ready to start?** Let me know which phase to begin with!

