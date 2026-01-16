# Core Domain Model – Advanced DDD Implementation

This document defines the **strategic and tactical domain model** for Noventrix StayOS, following Domain-Driven Design principles. It establishes bounded contexts, aggregates, domain events, and integration patterns that guide the entire system architecture.

**Version:** 1.0  
**Date:** 2025-12-18  
**Status:** Living Document

---

## Strategic Design: Bounded Contexts

### Context Map

```
┌──────────────────────────────────────────────────────────────────────────┐
│                           StayOS System                                   │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  ┌──────────────┐         ┌──────────────┐         ┌──────────────┐    │
│  │  Property    │────────▶│ Reservation  │────────▶│    Guest     │    │
│  │  Management  │   ACL   │   Context    │   OHS   │   Context    │    │
│  └──────────────┘         └──────────────┘         └──────────────┘    │
│         │                        │                        │              │
│         │                        │                        │              │
│         ▼                        ▼                        ▼              │
│  ┌──────────────┐         ┌──────────────┐         ┌──────────────┐    │
│  │  Operations  │◀────────│   Billing &  │         │   Training   │    │
│  │   Context    │         │   Payments   │         │   Context    │    │
│  └──────────────┘         └──────────────┘         └──────────────┘    │
│         │                        │                        │              │
│         │                        │                        │              │
│         ▼                        ▼                        ▼              │
│  ┌──────────────┐         ┌──────────────┐         ┌──────────────┐    │
│  │     F&B      │         │  Compliance  │         │ Procurement  │    │
│  │   Context    │────────▶│  & Audit     │◀────────│   Context    │    │
│  │  (Optional)  │         │   Context    │         │  (Optional)  │    │
│  └──────────────┘         └──────────────┘         └──────────────┘    │
│         │                        ▲                        │              │
│         │                        │                        │              │
│         └────────────────────────┴────────────────────────┘              │
│                                                                           │
│  ┌─────────────────────────────────────────────────────────────┐        │
│  │         Channel Management (External Integration)            │        │
│  └─────────────────────────────────────────────────────────────┘        │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘

Legend:
ACL = Anti-Corruption Layer
OHS = Open Host Service
```

### Context Relationships

| Upstream Context | Downstream Context | Relationship Pattern | Integration Method |
|-----------------|-------------------|---------------------|-------------------|
| Property Management | Reservation | Conformist | Domain Events |
| Reservation | Guest | Customer/Supplier | REST API + Events |
| Guest | Operations | Open Host Service | Published Interface |
| Operations | Billing & Payments | Partnership | Shared Kernel (limited) |
| Operations | Training | Partnership | Domain Events |
| Operations | F&B (Optional) | Partnership | Domain Events |
| F&B | Procurement (Optional) | Customer/Supplier | REST API |
| Procurement | Compliance & Audit | Published Language | Event Streaming |
| All Contexts | Compliance & Audit | Published Language | Event Streaming |
| Channel Management | Reservation | Anti-Corruption Layer | Adapter Pattern |

---

## 1. Property Management Context

**Core Responsibility:** Manage physical and logical inventory, pricing strategies, and property-level policies.

**Ubiquitous Language:**
- **Property**: A hospitality establishment (hotel, hostel, resort)
- **Inventory Unit**: Sellable accommodation (room, bed, suite)
- **Rate Strategy**: Dynamic pricing logic with seasonal/demand adjustments
- **Availability Calendar**: Time-based inventory state

### Aggregate: **Property**

**Root Entity:** Property

**Responsibilities**
* Define organizational structure and operational boundaries
* Manage multi-property hierarchies (chains, groups)
* Enforce property-level business rules and compliance requirements
* Coordinate inventory and rate strategy lifecycle

**Core Attributes**
```typescript
propertyId: PropertyId (UUID)
organizationId: OrganizationId
name: PropertyName (Value Object)
classification: PropertyClassification (HOTEL | HOSTEL | RESORT | BOUTIQUE)
location: Address (Value Object)
coordinates: GeoCoordinates (Value Object)
timezone: Timezone (immutable)
operationalStatus: OperationalStatus (ACTIVE | SUSPENDED | CLOSED)
policies: PropertyPolicies (Value Object)
  - checkInPolicy: CheckInPolicy
  - checkOutPolicy: CheckOutPolicy
  - cancellationPolicy: CancellationPolicy
  - houseRules: HouseRules[]
amenities: Amenity[]
certifications: Certification[] (ISO, safety, sustainability)
metadata: PropertyMetadata
```

**Invariants**
* Property must have at least one active Inventory Unit to accept reservations
* Timezone is immutable after creation (affects all time-based calculations)
* operationalStatus transitions follow state machine: ACTIVE ↔ SUSPENDED → CLOSED (terminal)
* Cancellation policy changes only apply to future reservations
* Property must maintain valid business license and insurance records

**Domain Events**
* PropertyCreated
* PropertyStatusChanged
* PropertyPoliciesUpdated
* PropertyCertificationExpiring (30 days before)

**Business Rules**
* BR-PM-001: Properties in SUSPENDED status cannot accept new reservations
* BR-PM-002: Policy changes require audit trail with effective date
* BR-PM-003: Multi-property groups share organization-level settings but override locally

---

### Aggregate: **InventoryUnit**

**Root Entity:** InventoryUnit (formerly "Room")

**Responsibilities**
* Represent sellable accommodation inventory
* Track physical and operational state
* Manage unit-specific attributes and configurations
* Coordinate with availability and housekeeping

**Core Attributes**
```typescript
inventoryUnitId: InventoryUnitId (UUID)
propertyId: PropertyId
unitNumber: UnitNumber (Value Object - e.g., "101", "A-205")
unitType: UnitType (Entity - reusable classification)
  - typeId: UnitTypeId
  - name: string (e.g., "Deluxe King", "Shared Dorm 8-bed")
  - capacity: GuestCapacity
  - bedConfiguration: BedConfiguration[]
  - baseAmenities: Amenity[]
physicalStatus: PhysicalStatus (OPERATIONAL | MAINTENANCE | RENOVATION | DECOMMISSIONED)
operationalStatus: OperationalStatus (AVAILABLE | OCCUPIED | BLOCKED | OUT_OF_SERVICE)
floor: FloorNumber
accessibility: AccessibilityFeatures (Value Object)
lastMaintenanceDate: Date
nextScheduledMaintenance: Date
```

**Invariants**
* InventoryUnit cannot be AVAILABLE if physicalStatus is not OPERATIONAL
* OCCUPIED units must have an active Stay reference
* Unit transitions to OUT_OF_SERVICE automatically if maintenance is overdue (>90 days)
* UnitType changes require all active reservations to be migrated or cancelled

**Domain Events**
* InventoryUnitCreated
* InventoryUnitStatusChanged
* InventoryUnitTypeChanged
* MaintenanceRequired
* UnitBlockedForMaintenance

**Business Rules**
* BR-IU-001: Units in MAINTENANCE status automatically block future availability
* BR-IU-002: Status transitions require authorization based on role
* BR-IU-003: Accessibility features must comply with local regulations (ADA, etc.)

---

### Aggregate: **RateStrategy**

**Root Entity:** RateStrategy (formerly "RatePlan")

**Responsibilities**
* Encapsulate sophisticated pricing logic
* Support dynamic pricing, yield management, and revenue optimization
* Manage seasonal variations, demand-based adjustments, and channel-specific rates
* Apply promotional rules and corporate/group discounts

**Core Attributes**
```typescript
rateStrategyId: RateStrategyId (UUID)
propertyId: PropertyId
name: string
description: string
strategyType: StrategyType (STANDARD | DYNAMIC | PROMOTIONAL | CORPORATE | GROUP)
applicability: ApplicabilityRules (Value Object)
  - validDateRange: DateRange
  - daysOfWeek: DayOfWeek[]
  - minimumStayDuration: number
  - maximumStayDuration: number
  - advanceBookingWindow: BookingWindow
pricingModel: PricingModel (Value Object)
  - baseRates: Map<UnitTypeId, Money>
  - occupancyMultipliers: OccupancyMultiplier[]
  - seasonalAdjustments: SeasonalAdjustment[]
  - demandModifiers: DemandModifier[]
  - lengthOfStayDiscounts: LOSDiscount[]
cancellationTerms: CancellationTerms (Value Object)
  - refundability: Refundability (FULLY_REFUNDABLE | PARTIALLY_REFUNDABLE | NON_REFUNDABLE)
  - penaltySchedule: PenaltySchedule[]
channelDistribution: ChannelDistribution[]
  - channelId: ChannelId
  - markup: Percentage
  - availability: boolean
```

**Invariants**
* All baseRates must be >= 0
* validDateRange must not overlap with other PROMOTIONAL strategies for same UnitType
* Seasonal adjustments must cover entire year without gaps
* Channel markup cannot exceed property-defined maximum (typically 30%)
* Non-refundable rates must offer minimum 10% discount vs. refundable equivalent

**Domain Events**
* RateStrategyCreated
* RateStrategyActivated
* RateStrategyDeactivated
* PricingModelUpdated
* SeasonalAdjustmentApplied

**Business Rules**
* BR-RS-001: Dynamic pricing recalculates every 6 hours based on occupancy forecast
* BR-RS-002: Corporate rates require valid corporate agreement reference
* BR-RS-003: Group rates (>10 units) require manual approval
* BR-RS-004: Rate changes only apply to new reservations unless explicitly migrated

---

### Aggregate: **AvailabilityCalendar**

**Root Entity:** AvailabilityCalendar

**Responsibilities**
* Maintain real-time inventory availability state
* Prevent overbooking through optimistic locking
* Support allocation strategies (sell-through, stop-sell)
* Coordinate with channel management for distribution

**Core Attributes**
```typescript
calendarId: CalendarId (UUID)
propertyId: PropertyId
inventoryUnitId: InventoryUnitId
availabilitySlots: AvailabilitySlot[] (sorted by date)
  - date: LocalDate
  - status: SlotStatus (AVAILABLE | RESERVED | BLOCKED | SOLD_OUT)
  - allocations: Allocation[]
    - channelId: ChannelId
    - quantity: number
  - restrictions: Restriction[]
    - type: RestrictionType (MIN_STAY | MAX_STAY | CLOSED_TO_ARRIVAL | CLOSED_TO_DEPARTURE)
    - value: number
version: number (for optimistic locking)
```

**Invariants**
* Sum of allocations per slot cannot exceed physical inventory
* SOLD_OUT status is derived, not set directly
* Availability slots are immutable once in the past
* Calendar must maintain 365-day rolling window minimum

**Domain Events**
* AvailabilityReduced
* AvailabilityRestored
* InventoryBlocked
* OverbookingDetected (critical alert)

**Business Rules**
* BR-AC-001: Overbooking tolerance configurable per property (0-10%)
* BR-AC-002: Channel allocations refresh every 15 minutes
* BR-AC-003: Manual blocks take precedence over automated allocations

---

## 2. Reservation Context

**Core Responsibility:** Manage the complete booking lifecycle from search to confirmation, modification, and cancellation.

**Ubiquitous Language:**
- **Booking**: Customer intent to reserve (may be unconfirmed)
- **Reservation**: Confirmed allocation of inventory
- **Modification**: Change to existing reservation (dates, units, guests)
- **Cancellation**: Termination of reservation with potential penalties

### Aggregate: **Reservation**

**Root Entity:** Reservation

**Responsibilities**
* Orchestrate booking lifecycle state machine
* Enforce business rules for modifications and cancellations
* Coordinate with inventory, pricing, and payment contexts
* Maintain booking history and audit trail

**Core Attributes**
```typescript
reservationId: ReservationId (UUID)
bookingReference: BookingReference (human-readable, e.g., "NVX-2025-A7B3")
propertyId: PropertyId
inventoryUnitId: InventoryUnitId
guestId: GuestId (primary guest)
additionalGuests: GuestId[] (companions)
dateRange: DateRange (Value Object)
  - checkInDate: LocalDate
  - checkOutDate: LocalDate
  - nights: number (derived)
rateStrategyId: RateStrategyId
appliedRate: AppliedRate (Value Object - snapshot at booking time)
  - totalAmount: Money
  - breakdown: RateBreakdown[]
    - date: LocalDate
    - nightlyRate: Money
    - taxes: Tax[]
    - fees: Fee[]
status: ReservationStatus (State Machine)
  - PENDING_PAYMENT
  - CONFIRMED
  - MODIFIED
  - CANCELLED
  - NO_SHOW
  - COMPLETED
source: BookingSource (DIRECT | OTA | GDS | CORPORATE | WALK_IN)
channelId: ChannelId (if applicable)
specialRequests: SpecialRequest[]
guaranteeType: GuaranteeType (CREDIT_CARD | DEPOSIT | CORPORATE_BILLING)
cancellationDeadline: DateTime
modificationHistory: ModificationRecord[]
createdAt: DateTime
confirmedAt: DateTime
version: number (optimistic locking)
```

**State Machine**
```
PENDING_PAYMENT → CONFIRMED → COMPLETED
       ↓              ↓
   CANCELLED ← MODIFIED → CONFIRMED
                ↓
            NO_SHOW
```

**Invariants**
* checkOutDate must be after checkInDate
* Reservation dates cannot overlap for same InventoryUnit (enforced at calendar level)
* CONFIRMED reservations must have valid payment guarantee
* Modifications within 24h of check-in require manager approval
* Cancelled reservations are immutable
* Total amount must match rate calculation at time of booking

**Domain Events**
* ReservationCreated
* ReservationConfirmed
* ReservationModified (with change details)
* ReservationCancelled (with reason and penalty)
* ReservationNoShow
* ReservationCompleted
* PaymentGuaranteeExpiring

**Business Rules**
* BR-RES-001: Modifications changing dates trigger availability recheck
* BR-RES-002: Cancellation penalties calculated based on policy at booking time
* BR-RES-003: No-show status auto-applied 24h after check-in time if no Stay created
* BR-RES-004: Group reservations (>5 units) follow different modification rules
* BR-RES-005: OTA reservations cannot be modified directly (must sync via channel)

---

### Value Object: **DateRange**

**Responsibilities**
* Encapsulate check-in/check-out logic
* Calculate nights, validate ranges
* Support overlap detection

**Attributes**
```typescript
checkInDate: LocalDate
checkOutDate: LocalDate
```

**Methods**
```typescript
nights(): number
overlaps(other: DateRange): boolean
contains(date: LocalDate): boolean
isValid(): boolean
```

**Invariants**
* checkOutDate > checkInDate
* Maximum stay duration: 365 nights
* Minimum stay duration: 1 night

---

## 3. Guest Context

**Core Responsibility:** Manage guest identity, preferences, loyalty, and relationship history.

**Ubiquitous Language:**
- **Guest Profile**: Persistent identity and preferences
- **Guest Journey**: Complete interaction history across stays
- **Loyalty Tier**: Membership level with associated benefits
- **Preference**: Stored choices (room type, amenities, dietary)

### Aggregate: **GuestProfile**

**Root Entity:** GuestProfile

**Responsibilities**
* Maintain verified guest identity
* Store preferences and special requirements
* Track loyalty status and benefits
* Ensure GDPR compliance and data privacy
* Support guest segmentation and personalization

**Core Attributes**
```typescript
guestId: GuestId (UUID)
personalInfo: PersonalInfo (Value Object - PII)
  - firstName: string
  - lastName: string
  - dateOfBirth: LocalDate (optional)
  - nationality: CountryCode
  - governmentId: GovernmentId (encrypted)
    - type: IdType (PASSPORT | NATIONAL_ID | DRIVERS_LICENSE)
    - number: string (encrypted)
    - issuingCountry: CountryCode
    - expiryDate: LocalDate
contactInfo: ContactInfo (Value Object)
  - email: EmailAddress (verified)
  - phone: PhoneNumber (verified)
  - alternatePhone: PhoneNumber (optional)
  - preferredContactMethod: ContactMethod
address: Address (Value Object)
preferences: GuestPreferences (Value Object)
  - roomPreferences: RoomPreference[]
    - floor: FloorPreference (HIGH | LOW | SPECIFIC)
    - bedType: BedType
    - smokingAllowed: boolean
  - amenityPreferences: Amenity[]
  - dietaryRestrictions: DietaryRestriction[]
  - languagePreference: LanguageCode
  - accessibilityNeeds: AccessibilityNeed[]
loyaltyMembership: LoyaltyMembership (optional)
  - membershipId: MembershipId
  - tier: LoyaltyTier (BRONZE | SILVER | GOLD | PLATINUM)
  - points: number
  - tierExpiryDate: LocalDate
marketingConsent: MarketingConsent (Value Object)
  - email: boolean
  - sms: boolean
  - phone: boolean
  - consentDate: DateTime
  - gdprCompliant: boolean
vipStatus: VIPStatus (STANDARD | VIP | VVIP)
internalNotes: Note[] (staff-only, encrypted)
dataRetentionPolicy: RetentionPolicy
  - retainUntil: LocalDate
  - deletionRequested: boolean
createdAt: DateTime
lastUpdated: DateTime
```

**Invariants**
* Email or phone must be verified before first reservation
* Government ID required for international guests (regulatory compliance)
* Personal data encrypted at rest
* Data retention follows GDPR (max 7 years post-last-stay unless consent)
* Marketing consent can be withdrawn anytime
* VIP status requires manager approval

**Domain Events**
* GuestProfileCreated
* GuestProfileVerified
* GuestPreferencesUpdated
* LoyaltyTierChanged
* MarketingConsentUpdated
* DataDeletionRequested (GDPR right to be forgotten)
* GuestMerged (duplicate resolution)

**Business Rules**
* BR-GP-001: Duplicate detection runs on email/phone before profile creation
* BR-GP-002: Government ID validation required for check-in
* BR-GP-003: Loyalty points expire after 24 months of inactivity
* BR-GP-004: VIP guests receive automatic room upgrades (subject to availability)
* BR-GP-005: Data deletion requests processed within 30 days

---

### Aggregate: **Stay**

**Root Entity:** Stay

**Responsibilities**
* Represent actual guest occupancy period
* Bridge reservation to operational reality
* Track in-stay services and charges
* Coordinate check-in/check-out processes

**Core Attributes**
```typescript
stayId: StayId (UUID)
reservationId: ReservationId
propertyId: PropertyId
inventoryUnitId: InventoryUnitId
primaryGuestId: GuestId
accompaniedGuests: AccompaniedGuest[]
  - guestId: GuestId (optional - for registered guests)
  - name: string
  - relationship: Relationship
  - age: AgeCategory (ADULT | CHILD | INFANT)
actualCheckIn: DateTime
expectedCheckOut: DateTime
actualCheckOut: DateTime (nullable until checkout)
status: StayStatus (CHECKED_IN | CHECKED_OUT | EXTENDED | EARLY_DEPARTURE)
assignedStaffId: StaffId (front desk agent)
keyCards: KeyCard[]
  - keyCardId: KeyCardId
  - issuedAt: DateTime
  - deactivatedAt: DateTime (nullable)
incidentalCharges: Charge[] (minibar, room service, etc.)
specialServices: Service[] (late checkout, extra bed, etc.)
guestSatisfaction: SatisfactionScore (post-checkout)
```

**Invariants**
* Stay cannot exist without confirmed Reservation
* actualCheckIn must be within 24h of reservation checkInDate (or flagged)
* actualCheckOut must be after actualCheckIn
* CHECKED_OUT status is immutable
* Key cards auto-deactivate on checkout

**Domain Events**
* StayCheckInCompleted
* StayCheckOutCompleted
* StayExtended
* EarlyDepartureRequested
* IncidentalChargeAdded
* GuestComplaintLogged

**Business Rules**
* BR-STAY-001: Late checkout (after 12:00) incurs additional charge
* BR-STAY-002: Early checkout does not trigger refund for non-refundable rates
* BR-STAY-003: Stay extensions require availability check
* BR-STAY-004: All incidental charges must be settled before checkout

---

### Aggregate: **GuestFeedback**

**Root Entity:** GuestFeedback

**Responsibilities**
* Collect and manage guest feedback across touchpoints
* Support service quality measurement (NPS, CSAT)
* Enable reputation management
* Drive service improvement initiatives
* Facilitate service recovery

**Core Attributes**
```typescript
feedbackId: FeedbackId (UUID)
propertyId: PropertyId
guestId: GuestId
stayId: StayId (nullable - may be pre-stay or general feedback)
reservationId: ReservationId (nullable)
feedbackType: FeedbackType (POST_STAY_SURVEY | IN_STAY_FEEDBACK | COMPLAINT | COMPLIMENT | REVIEW | NPS)
channel: FeedbackChannel (EMAIL_SURVEY | SMS_SURVEY | IN_APP | WEBSITE | THIRD_PARTY_REVIEW | IN_PERSON | PHONE)
submittedAt: DateTime
touchpoint: Touchpoint (CHECK_IN | DURING_STAY | CHECK_OUT | POST_STAY)
overallRating: number (1-5 or 1-10 depending on scale)
npsScore: number (0-10, for NPS surveys)
  - Detractor: 0-6
  - Passive: 7-8
  - Promoter: 9-10
categoryRatings: CategoryRating[]
  - category: RatingCategory (CLEANLINESS | STAFF | LOCATION | AMENITIES | VALUE | COMFORT | FOOD_BEVERAGE)
  - rating: number (1-5)
  - comment: string
openEndedResponses: Response[]
  - question: string
  - answer: string
sentiment: Sentiment (POSITIVE | NEUTRAL | NEGATIVE) // AI-derived
sentimentScore: number (-1.0 to 1.0)
keywords: string[] // AI-extracted themes
complaintDetails: ComplaintDetails (if feedbackType = COMPLAINT)
  - complaintCategory: ComplaintCategory (SERVICE | CLEANLINESS | NOISE | BILLING | AMENITY | SAFETY | OTHER)
  - severity: Severity (CRITICAL | HIGH | MEDIUM | LOW)
  - resolutionRequested: boolean
  - compensationRequested: boolean
reviewPlatform: ReviewPlatform (GOOGLE | TRIPADVISOR | BOOKING_COM | EXPEDIA | YELP | OTHER)
reviewUrl: string (if third-party review)
publicReview: boolean
reviewText: string
reviewTitle: string
reviewPhotos: string[]
verified: boolean (verified stay)
anonymous: boolean
responseRequired: boolean
respondedAt: DateTime
respondedBy: StaffId
responseText: string
publicResponseText: string (for third-party platforms)
status: FeedbackStatus (NEW | ACKNOWLEDGED | UNDER_REVIEW | RESPONDED | ESCALATED | RESOLVED | CLOSED)
assignedTo: StaffId (for follow-up)
serviceRecoveryAction: ServiceRecoveryAction (optional)
  - actionType: ActionType (APOLOGY | REFUND | DISCOUNT | UPGRADE | COMP | POINTS | OTHER)
  - actionValue: Money (if applicable)
  - approvedBy: StaffId
  - executedAt: DateTime
followUpRequired: boolean
followUpCompletedAt: DateTime
tags: string[] (for categorization)
```

**Invariants**
* NPS score must be 0-10
* Overall rating must match scale (1-5 or 1-10)
* Complaints require response within 24 hours
* Public reviews require public response
* Service recovery actions require manager approval
* Verified feedback requires valid stayId

**Domain Events**
* FeedbackReceived
* ComplaintReceived
* NegativeFeedbackDetected (rating < 3 or NPS < 7)
* PositiveFeedbackReceived (rating >= 4 or NPS >= 9)
* FeedbackResponded
* ServiceRecoveryInitiated
* ThirdPartyReviewReceived
* FeedbackEscalated

**Business Rules**
* BR-GF-001: Post-stay surveys sent 24 hours after checkout
* BR-GF-002: Negative feedback (rating < 3) triggers immediate management alert
* BR-GF-003: Complaints require response within 24 hours
* BR-GF-004: NPS surveys sent to all guests (sample size for statistical validity)
* BR-GF-005: Third-party reviews monitored daily
* BR-GF-006: Service recovery budget limits enforced by tier:
  - Staff: up to $50
  - Supervisor: up to $200
  - Manager: up to $500
  - GM: unlimited
* BR-GF-007: Feedback trends analyzed weekly for service improvement
* BR-GF-008: Guest satisfaction score (CSAT) calculated monthly
* BR-GF-009: NPS calculated quarterly

**Metrics Derived**
```typescript
// Property-level metrics
NPS = (% Promoters - % Detractors)
CSAT = (Number of satisfied customers / Total responses) × 100
AverageRating = Sum of all ratings / Number of ratings
ResponseRate = (Surveys completed / Surveys sent) × 100
ComplaintRate = (Complaints / Total stays) × 100
ResolutionTime = Average time from complaint to resolution
```

---

## 4. Operations Context

**Core Responsibility:** Manage day-to-day property operations including housekeeping, maintenance, staff coordination, guest services, and safety compliance.

**Ubiquitous Language:**
- **Turnover**: Room cleaning between guests
- **Deep Clean**: Comprehensive periodic cleaning
- **Preventive Maintenance**: Scheduled upkeep
- **Corrective Maintenance**: Repair of defects
- **Shift**: Staff work period
- **Service Request**: Guest-initiated service need
- **Incident**: Safety or security event requiring documentation
- **SOP**: Standard Operating Procedure

### Aggregate: **HousekeepingTask**

**Root Entity:** HousekeepingTask

**Responsibilities**
* Track room cleaning and preparation
* Coordinate with check-in/check-out schedule
* Ensure quality standards
* Optimize staff allocation

**Core Attributes**
```typescript
taskId: TaskId (UUID)
propertyId: PropertyId
inventoryUnitId: InventoryUnitId
taskType: TaskType (TURNOVER | DEEP_CLEAN | REFRESH | INSPECTION)
priority: Priority (URGENT | HIGH | NORMAL | LOW)
  - URGENT: Guest waiting for check-in
  - HIGH: Same-day arrival
  - NORMAL: Next-day arrival
  - LOW: Vacant, no immediate booking
assignedTo: StaffId (nullable)
assignedAt: DateTime
status: TaskStatus (PENDING | ASSIGNED | IN_PROGRESS | COMPLETED | VERIFIED | FAILED)
scheduledFor: DateTime
startedAt: DateTime
completedAt: DateTime
verifiedBy: StaffId (supervisor)
verifiedAt: DateTime
checklistItems: ChecklistItem[]
  - item: string
  - completed: boolean
  - notes: string
issuesFound: Issue[]
  - description: string
  - severity: Severity
  - photoUrls: string[]
  - maintenanceRequestId: MaintenanceRequestId (if escalated)
estimatedDuration: Duration
actualDuration: Duration
qualityScore: QualityScore (1-5, from inspection)
```

**Invariants**
* COMPLETED tasks cannot be reopened (create new task instead)
* URGENT tasks must be assigned within 15 minutes
* Tasks cannot be VERIFIED without being COMPLETED
* Quality score required for VERIFIED status
* Deep cleans required every 30 days minimum

**Domain Events**
* HousekeepingTaskCreated
* TaskAssigned
* TaskStarted
* TaskCompleted
* TaskVerified
* IssueFoundDuringCleaning
* TaskOverdue

**Business Rules**
* BR-HK-001: Turnover tasks auto-created on checkout
* BR-HK-002: Failed quality inspections trigger re-clean
* BR-HK-003: Staff performance tracked via completion time and quality scores
* BR-HK-004: Urgent tasks escalate to supervisor if unassigned >30 minutes

---

### Aggregate: **MaintenanceRequest**

**Root Entity:** MaintenanceRequest

**Responsibilities**
* Track defects and repair needs
* Coordinate with external vendors
* Ensure safety compliance
* Prevent inventory unavailability

**Core Attributes**
```typescript
requestId: RequestId (UUID)
propertyId: PropertyId
inventoryUnitId: InventoryUnitId (nullable - may be common area)
location: Location (Value Object)
  - area: Area (GUEST_ROOM | LOBBY | RESTAURANT | POOL | PARKING | OTHER)
  - specificLocation: string
category: MaintenanceCategory (PLUMBING | ELECTRICAL | HVAC | FURNITURE | APPLIANCE | STRUCTURAL | SAFETY)
severity: Severity (CRITICAL | HIGH | MEDIUM | LOW)
  - CRITICAL: Safety hazard, unit uninhabitable
  - HIGH: Major inconvenience, impacts guest experience
  - MEDIUM: Minor issue, can be deferred
  - LOW: Cosmetic, no functional impact
description: string
reportedBy: ReporterId (StaffId | GuestId)
reportedAt: DateTime
status: MaintenanceStatus (OPEN | ASSIGNED | IN_PROGRESS | PARTS_ORDERED | COMPLETED | VERIFIED | CLOSED)
assignedTo: TechnicianId (internal or vendor)
assignedAt: DateTime
scheduledFor: DateTime
startedAt: DateTime
completedAt: DateTime
verifiedBy: StaffId
verifiedAt: DateTime
workPerformed: string
partsUsed: Part[]
  - partName: string
  - quantity: number
  - cost: Money
laborCost: Money
totalCost: Money
photosBefore: string[]
photosAfter: string[]
recurringIssue: boolean
relatedRequestIds: RequestId[] (if recurring)
warrantyApplicable: boolean
vendorInvoiceId: InvoiceId (if external)
```

**Invariants**
* CRITICAL severity auto-blocks inventory unit
* COMPLETED requests are immutable
* totalCost = sum(parts costs) + laborCost
* VERIFIED status requires photo evidence
* Recurring issues (>3 times) trigger asset replacement evaluation

**Domain Events**
* MaintenanceRequestCreated
* CriticalMaintenanceDetected (alerts management)
* MaintenanceAssigned
* MaintenanceCompleted
* MaintenanceVerified
* RecurringIssueDetected
* InventoryUnitBlocked
* InventoryUnitRestored

**Business Rules**
* BR-MR-001: CRITICAL issues must be assigned within 1 hour
* BR-MR-002: Unresolved HIGH severity issues escalate after 24 hours
* BR-MR-003: Preventive maintenance scheduled based on asset age and usage
* BR-MR-004: Vendor performance tracked via completion time and quality

---

### Aggregate: **StaffShift**

**Root Entity:** StaffShift

**Responsibilities**
* Manage staff scheduling and attendance
* Track labor allocation
* Support compliance with labor laws
* Enable performance analytics

**Core Attributes**
```typescript
shiftId: ShiftId (UUID)
propertyId: PropertyId
staffId: StaffId
role: StaffRole (FRONT_DESK | HOUSEKEEPING | MAINTENANCE | MANAGEMENT | SECURITY | F&B)
shiftType: ShiftType (MORNING | AFTERNOON | NIGHT | SPLIT)
scheduledStart: DateTime
scheduledEnd: DateTime
actualStart: DateTime (clock-in)
actualEnd: DateTime (clock-out)
status: ShiftStatus (SCHEDULED | ACTIVE | COMPLETED | ABSENT | LATE)
breakPeriods: BreakPeriod[]
  - startTime: DateTime
  - endTime: DateTime
  - type: BreakType (MEAL | REST)
tasksCompleted: TaskId[]
performanceNotes: string
overtimeHours: Duration
```

**Invariants**
* actualStart must be within 15 minutes of scheduledStart (or marked LATE)
* Break periods must comply with labor regulations
* Overtime requires manager approval
* Minimum 8-hour rest period between shifts

**Domain Events**
* ShiftScheduled
* ShiftStarted
* ShiftCompleted
* StaffAbsent
* OvertimeApproved

**Business Rules**
* BR-SS-001: Minimum staffing levels enforced per shift type
* BR-SS-002: Overtime auto-calculated and flagged for approval
* BR-SS-003: Consecutive night shifts limited to 5 maximum

---

### Aggregate: **ServiceRequest**

**Root Entity:** ServiceRequest

**Responsibilities**
* Track guest-initiated service requests
* Route requests to appropriate staff
* Monitor SLA compliance
* Enable service recovery workflows
* Support guest satisfaction measurement

**Core Attributes**
```typescript
requestId: RequestId (UUID)
propertyId: PropertyId
stayId: StayId (nullable - may be pre-arrival or post-departure)
guestId: GuestId
inventoryUnitId: InventoryUnitId (nullable - may be common area)
requestType: RequestType (HOUSEKEEPING | ROOM_SERVICE | CONCIERGE | MAINTENANCE | AMENITY | COMPLAINT | OTHER)
category: ServiceCategory
  - HOUSEKEEPING: Extra towels, pillows, cleaning
  - ROOM_SERVICE: Food & beverage delivery
  - CONCIERGE: Reservations, transportation, information
  - MAINTENANCE: In-room issues (overlaps with MaintenanceRequest)
  - AMENITY: Pool towels, gym access, etc.
  - COMPLAINT: Service quality issues
priority: Priority (URGENT | HIGH | NORMAL | LOW)
  - URGENT: Safety concern, guest distress
  - HIGH: Impacts guest comfort significantly
  - NORMAL: Standard request
  - LOW: Nice-to-have
description: string
requestedAt: DateTime
requestedBy: RequestedBy (GUEST_PHONE | GUEST_APP | GUEST_IN_PERSON | STAFF)
status: RequestStatus (PENDING | ACKNOWLEDGED | ASSIGNED | IN_PROGRESS | COMPLETED | CANCELLED)
acknowledgedAt: DateTime (SLA: <5 minutes)
assignedTo: StaffId
assignedAt: DateTime
estimatedCompletionTime: DateTime
completedAt: DateTime
cancelledAt: DateTime
cancellationReason: string
guestFeedback: GuestFeedback (optional)
  - rating: number (1-5)
  - comment: string
  - receivedAt: DateTime
resolutionNotes: string
escalated: boolean
escalatedTo: StaffId (supervisor/manager)
escalatedAt: DateTime
slaCompliant: boolean (derived)
responseTime: Duration (derived: acknowledgedAt - requestedAt)
completionTime: Duration (derived: completedAt - requestedAt)
```

**State Machine**
```
PENDING → ACKNOWLEDGED → ASSIGNED → IN_PROGRESS → COMPLETED
   ↓                                                    ↑
CANCELLED ←──────────────────────────────────────────┘
   ↓
ESCALATED (if SLA breach)
```

**Invariants**
* Request must be ACKNOWLEDGED within 5 minutes (SLA)
* URGENT requests must be ASSIGNED within 15 minutes
* Completed requests require resolutionNotes
* Guest feedback only allowed after COMPLETED status
* Escalation automatic if SLA breached

**Domain Events**
* ServiceRequestCreated
* RequestAcknowledged
* RequestAssigned
* RequestCompleted
* RequestCancelled
* RequestEscalated
* SLABreached
* GuestFeedbackReceived

**Business Rules**
* BR-SR-001: URGENT requests trigger immediate notification to on-duty manager
* BR-SR-002: Unacknowledged requests escalate after 5 minutes
* BR-SR-003: Guest feedback requested automatically upon completion
* BR-SR-004: Complaint-type requests always escalate to management
* BR-SR-005: Service recovery (comp, upgrade) requires manager approval

---

### Aggregate: **IncidentReport**

**Root Entity:** IncidentReport

**Responsibilities**
* Document safety, security, and operational incidents
* Ensure regulatory compliance (OSHA, local laws)
* Track corrective actions
* Support risk management and insurance claims
* Enable trend analysis for prevention

**Core Attributes**
```typescript
incidentId: IncidentId (UUID)
propertyId: PropertyId
incidentType: IncidentType (SAFETY | SECURITY | HEALTH | PROPERTY_DAMAGE | GUEST_INJURY | STAFF_INJURY | FIRE | THEFT | OTHER)
severity: Severity (CRITICAL | HIGH | MEDIUM | LOW)
  - CRITICAL: Life-threatening, major property damage, regulatory violation
  - HIGH: Injury requiring medical attention, significant damage
  - MEDIUM: Minor injury, moderate damage
  - LOW: Near-miss, minor incident
location: Location (Value Object)
  - area: Area (GUEST_ROOM | LOBBY | RESTAURANT | POOL | PARKING | KITCHEN | BACK_OF_HOUSE | OTHER)
  - specificLocation: string
  - inventoryUnitId: InventoryUnitId (if applicable)
occurredAt: DateTime
reportedAt: DateTime
reportedBy: StaffId
description: string (detailed narrative)
involvedParties: InvolvedParty[]
  - partyType: PartyType (GUEST | STAFF | VISITOR | VENDOR | UNKNOWN)
  - partyId: string (GuestId or StaffId if known)
  - name: string
  - injuryDetails: InjuryDetails (if applicable)
    - injuryType: string
    - bodyPart: string
    - medicalAttentionRequired: boolean
    - hospitalName: string (if transported)
witnesses: Witness[]
  - witnessId: string
  - name: string
  - contactInfo: ContactInfo
  - statement: string
immediateActions: Action[]
  - action: string
  - takenBy: StaffId
  - takenAt: DateTime
rootCauseAnalysis: RootCause (optional)
  - cause: string
  - contributingFactors: string[]
correctiveActions: CorrectiveAction[]
  - action: string
  - assignedTo: StaffId
  - dueDate: LocalDate
  - completedAt: DateTime
  - status: ActionStatus (PENDING | IN_PROGRESS | COMPLETED)
preventiveMeasures: string[]
photosUrls: string[]
videoUrls: string[]
policeReportNumber: string (if applicable)
insuranceClaimNumber: string (if applicable)
regulatoryReportRequired: boolean
regulatoryReportSubmitted: boolean
regulatoryReportSubmittedAt: DateTime
status: IncidentStatus (OPEN | UNDER_INVESTIGATION | RESOLVED | CLOSED)
investigatedBy: StaffId
closedAt: DateTime
closedBy: StaffId
```

**Invariants**
* CRITICAL incidents must be reported to management immediately
* Guest/staff injuries require medical attention documentation
* Regulatory reports must be submitted within jurisdiction timeframes
* All corrective actions must be completed before incident closure
* Photos required for property damage and injury incidents

**Domain Events**
* IncidentReported
* CriticalIncidentDetected
* InjuryReported
* CorrectiveActionAssigned
* CorrectiveActionCompleted
* RegulatoryReportSubmitted
* IncidentClosed

**Business Rules**
* BR-IR-001: CRITICAL incidents trigger immediate management notification
* BR-IR-002: Guest injuries require incident report within 1 hour
* BR-IR-003: Fire incidents require fire marshal notification
* BR-IR-004: Theft incidents require police report
* BR-IR-005: Workplace injuries require OSHA reporting (if applicable)
* BR-IR-006: Incident trends analyzed monthly for prevention

---

### Aggregate: **TrainingModule**

**Root Entity:** TrainingModule

**Responsibilities**
* Manage staff training and certification
* Track onboarding progress
* Ensure compliance training completion
* Support continuous professional development
* Enable service quality improvement

**Core Attributes**
```typescript
moduleId: ModuleId (UUID)
propertyId: PropertyId (nullable - may be organization-wide)
title: string
description: string
moduleType: ModuleType (ONBOARDING | COMPLIANCE | SERVICE_STANDARDS | TECHNICAL_SKILLS | SAFETY | LEADERSHIP)
category: TrainingCategory (MANDATORY | RECOMMENDED | OPTIONAL)
targetRoles: StaffRole[] (FRONT_DESK | HOUSEKEEPING | MAINTENANCE | F&B | MANAGEMENT | ALL)
content: TrainingContent
  - format: ContentFormat (VIDEO | DOCUMENT | INTERACTIVE | IN_PERSON | HYBRID)
  - contentUrl: string (if digital)
  - duration: Duration
  - materials: Material[]
learningObjectives: string[]
prerequisites: ModuleId[] (other modules required first)
certificationRequired: boolean
certificationValidityPeriod: Duration (e.g., 1 year for food safety)
assessmentRequired: boolean
assessment: Assessment (optional)
  - assessmentType: AssessmentType (QUIZ | PRACTICAL | OBSERVATION)
  - passingScore: number
  - questions: Question[]
createdBy: StaffId
createdAt: DateTime
lastUpdated: DateTime
version: number
status: ModuleStatus (DRAFT | ACTIVE | ARCHIVED)
```

**Related Entity:** TrainingEnrollment

```typescript
enrollmentId: EnrollmentId (UUID)
moduleId: ModuleId
staffId: StaffId
enrolledAt: DateTime
startedAt: DateTime
completedAt: DateTime
status: EnrollmentStatus (NOT_STARTED | IN_PROGRESS | COMPLETED | FAILED | EXPIRED)
progress: Percentage
assessmentAttempts: AssessmentAttempt[]
  - attemptNumber: number
  - attemptedAt: DateTime
  - score: number
  - passed: boolean
certificationIssued: boolean
certificationIssuedAt: DateTime
certificationExpiresAt: DateTime
certificationNumber: string
instructorId: StaffId (if in-person)
feedback: TrainingFeedback (optional)
  - rating: number (1-5)
  - comment: string
  - submittedAt: DateTime
```

**Invariants**
* MANDATORY modules must be completed within onboarding period (30 days)
* Certification renewal required before expiry
* Assessment passing score must be achieved for certification
* Prerequisites must be completed before enrollment
* Expired certifications trigger re-training notification

**Domain Events**
* TrainingModuleCreated
* StaffEnrolled
* TrainingStarted
* TrainingCompleted
* AssessmentPassed
* AssessmentFailed
* CertificationIssued
* CertificationExpiring (30 days before)
* CertificationExpired

**Business Rules**
* BR-TM-001: Food safety certification required for F&B staff (renewed annually)
* BR-TM-002: Fire safety training mandatory for all staff (renewed annually)
* BR-TM-003: New hires complete onboarding modules within 30 days
* BR-TM-004: Service standards training required before guest-facing role
* BR-TM-005: Failed assessments allow 2 retries before requiring instructor intervention
* BR-TM-006: Training completion tracked for performance reviews

---

## 5. Billing & Payments Context

**Core Responsibility:** Manage financial transactions, invoicing, revenue recognition, and payment processing.

**Ubiquitous Language:**
- **Folio**: Guest account accumulating charges
- **Settlement**: Payment transaction
- **Reconciliation**: Matching payments to invoices
- **Revenue Recognition**: Accounting for earned revenue

### Aggregate: **Folio**

**Root Entity:** Folio (formerly "Invoice")

**Responsibilities**
* Accumulate all charges for a stay
* Support split billing and group folios
* Ensure accurate financial records
* Enable dispute resolution

**Core Attributes**
```typescript
folioId: FolioId (UUID)
stayId: StayId
guestId: GuestId
propertyId: PropertyId
folioNumber: FolioNumber (human-readable, sequential)
folioType: FolioType (INDIVIDUAL | MASTER | SPLIT | CORPORATE)
lineItems: LineItem[]
  - lineItemId: LineItemId
  - date: LocalDate
  - description: string
  - category: ChargeCategory (ROOM | TAX | FEE | INCIDENTAL | SERVICE)
  - quantity: number
  - unitPrice: Money
  - totalPrice: Money
  - taxable: boolean
  - taxes: Tax[]
  - revenueCategory: RevenueCategory (for accounting)
  - postedBy: StaffId
  - postedAt: DateTime
  - voidable: boolean
adjustments: Adjustment[]
  - adjustmentId: AdjustmentId
  - lineItemId: LineItemId (nullable - may apply to entire folio)
  - type: AdjustmentType (DISCOUNT | REFUND | COMP | CORRECTION)
  - amount: Money
  - reason: string
  - authorizedBy: StaffId
  - authorizedAt: DateTime
subtotal: Money (derived)
totalTax: Money (derived)
totalFees: Money (derived)
totalAmount: Money (derived)
amountPaid: Money
balance: Money (derived: totalAmount - amountPaid)
status: FolioStatus (OPEN | CLOSED | DISPUTED | WRITTEN_OFF)
currency: CurrencyCode
exchangeRate: ExchangeRate (if multi-currency)
billingAddress: Address
taxExempt: boolean
taxExemptionCertificate: string (if applicable)
closedAt: DateTime
closedBy: StaffId
```

**Invariants**
* totalAmount = subtotal + totalTax + totalFees - sum(adjustments)
* CLOSED folios are immutable (except for disputes)
* balance must be 0 to close folio
* Line items cannot be deleted, only voided
* Adjustments require authorization above threshold (e.g., >$100)

**Domain Events**
* FolioCreated
* LineItemAdded
* LineItemVoided
* AdjustmentApplied
* FolioClosed
* FolioDisputed
* FolioReopened (exceptional)

**Business Rules**
* BR-FOL-001: Room charges posted daily at 00:00 property time
* BR-FOL-002: Tax calculations follow jurisdiction rules (property location)
* BR-FOL-003: Corporate folios require valid billing agreement
* BR-FOL-004: Disputed folios freeze collection activities
* BR-FOL-005: Write-offs require CFO approval above $500

---

### Aggregate: **Payment**

**Root Entity:** Payment

**Responsibilities**
* Record settlement transactions
* Integrate with payment gateways
* Handle refunds and chargebacks
* Support multiple payment methods

**Core Attributes**
```typescript
paymentId: PaymentId (UUID)
folioId: FolioId
amount: Money
currency: CurrencyCode
paymentMethod: PaymentMethod (CREDIT_CARD | DEBIT_CARD | CASH | BANK_TRANSFER | MOBILE_MONEY | CORPORATE_ACCOUNT)
paymentDetails: PaymentDetails (Value Object - varies by method)
  // For cards:
  - cardType: CardType (VISA | MASTERCARD | AMEX)
  - last4Digits: string
  - cardholderName: string
  - expiryDate: YearMonth
  - authorizationCode: string
  - gatewayTransactionId: string
  // For bank transfer:
  - bankName: string
  - accountLast4: string
  - referenceNumber: string
status: PaymentStatus (INITIATED | AUTHORIZED | CAPTURED | SETTLED | FAILED | REFUNDED | DISPUTED)
initiatedAt: DateTime
authorizedAt: DateTime
capturedAt: DateTime
settledAt: DateTime
gatewayProvider: GatewayProvider (STRIPE | PAYPAL | FLUTTERWAVE | MPESA)
gatewayResponse: GatewayResponse (encrypted)
processingFee: Money
netAmount: Money (amount - processingFee)
refunds: Refund[]
  - refundId: RefundId
  - amount: Money
  - reason: string
  - initiatedAt: DateTime
  - completedAt: DateTime
  - status: RefundStatus
chargebacks: Chargeback[]
  - chargebackId: ChargebackId
  - amount: Money
  - reason: string
  - receivedAt: DateTime
  - status: ChargebackStatus
  - evidence: Evidence[]
receiptNumber: ReceiptNumber
receiptUrl: string
processedBy: StaffId
```

**Invariants**
* amount must be > 0
* CAPTURED payments cannot be cancelled (only refunded)
* Refund amount cannot exceed original payment amount
* Card details must be PCI-DSS compliant (tokenized)
* SETTLED status is terminal (except for chargebacks)

**Domain Events**
* PaymentInitiated
* PaymentAuthorized
* PaymentCaptured
* PaymentFailed
* PaymentRefunded
* ChargebackReceived
* ChargebackWon
* ChargebackLost

**Business Rules**
* BR-PAY-001: Card authorizations expire after 7 days if not captured
* BR-PAY-002: Refunds processed within 5-10 business days
* BR-PAY-003: Chargeback evidence submitted within 7 days
* BR-PAY-004: Mobile money payments settle instantly (no authorization phase)
* BR-PAY-005: Corporate accounts invoiced monthly with NET-30 terms

---

## 6. Food & Beverage Context (Optional Module)

**Core Responsibility:** Manage restaurant, bar, and room service operations for properties with F&B facilities.

**Ubiquitous Language:**
- **Cover**: Guest dining at table
- **Order**: F&B purchase transaction
- **Menu Item**: Sellable food or beverage
- **Recipe**: Ingredient specifications
- **Par Level**: Minimum stock quantity

### Aggregate: **FoodBeverageOrder**

**Root Entity:** FoodBeverageOrder

**Responsibilities**
* Track F&B orders from creation to fulfillment
* Integrate with kitchen display system
* Support revenue tracking
* Enable inventory consumption tracking

**Core Attributes**
```typescript
orderId: OrderId (UUID)
propertyId: PropertyId
outletId: OutletId (restaurant, bar, room service)
orderType: OrderType (DINE_IN | ROOM_SERVICE | TAKEAWAY | BAR)
tableNumber: string (if DINE_IN)
stayId: StayId (if ROOM_SERVICE)
guestId: GuestId (optional)
orderItems: OrderItem[]
  - itemId: MenuItemId
  - itemName: string
  - quantity: number
  - unitPrice: Money
  - modifiers: Modifier[] (e.g., "no onions", "extra cheese")
  - specialInstructions: string
  - courseType: CourseType (APPETIZER | MAIN | DESSERT | BEVERAGE)
  - status: ItemStatus (PENDING | PREPARING | READY | SERVED)
  - preparedBy: StaffId (chef)
  - servedBy: StaffId (server)
subtotal: Money
taxes: Tax[]
serviceCharge: Money (optional, percentage-based)
totalAmount: Money
orderStatus: OrderStatus (PENDING | CONFIRMED | PREPARING | READY | SERVED | COMPLETED | CANCELLED)
orderedAt: DateTime
confirmedAt: DateTime
estimatedReadyTime: DateTime
actualReadyTime: DateTime
servedAt: DateTime
completedAt: DateTime
orderedBy: StaffId (server)
paymentMethod: PaymentMethod (ROOM_CHARGE | CASH | CARD | COMP)
folioId: FolioId (if ROOM_CHARGE)
specialRequests: string
allergyNotes: string[]
```

**Domain Events**
* OrderCreated
* OrderConfirmed
* OrderSentToKitchen
* OrderReady
* OrderServed
* OrderCompleted
* OrderCancelled

**Business Rules**
* BR-FB-001: Room service orders auto-charge to guest folio
* BR-FB-002: Allergy notes displayed prominently in kitchen
* BR-FB-003: Service charge calculated based on property policy
* BR-FB-004: Order modifications allowed until PREPARING status

---

### Aggregate: **InventoryItem** (F&B Inventory)

**Root Entity:** InventoryItem

**Responsibilities**
* Track F&B inventory levels
* Support procurement planning
* Enable waste tracking
* Ensure food safety compliance

**Core Attributes**
```typescript
itemId: ItemId (UUID)
propertyId: PropertyId
itemName: string
category: InventoryCategory (FOOD | BEVERAGE | SUPPLIES | CLEANING)
subcategory: string (e.g., "Dairy", "Spirits", "Disposables")
unit: Unit (KG | LITER | PIECE | CASE | BOTTLE)
currentStock: Quantity
parLevel: Quantity (minimum stock level)
reorderPoint: Quantity (triggers procurement)
reorderQuantity: Quantity (standard order size)
supplierId: SupplierId
unitCost: Money
lastPurchasePrice: Money
lastPurchaseDate: LocalDate
expiryTracking: boolean
stockItems: StockItem[] (individual batches)
  - batchId: BatchId
  - quantity: Quantity
  - receivedDate: LocalDate
  - expiryDate: LocalDate (if applicable)
  - lotNumber: string
  - supplierId: SupplierId
storageLocation: StorageLocation (WALK_IN_FRIDGE | DRY_STORAGE | BAR | KITCHEN)
temperatureControlRequired: boolean
  - minTemp: Temperature
  - maxTemp: Temperature
haccp Compliant: boolean
allergens: Allergen[] (DAIRY | GLUTEN | NUTS | SHELLFISH | SOY | EGGS)
```

**Domain Events**
* StockLevelLow (below par level)
* StockReceived
* StockConsumed
* StockExpiring (7 days before expiry)
* StockExpired
* WasteRecorded
* StockCountCompleted

**Business Rules**
* BR-INV-001: Stock below reorder point triggers purchase order
* BR-INV-002: FIFO (First In, First Out) enforced for perishables
* BR-INV-003: Expired items auto-flagged for disposal
* BR-INV-004: Temperature logs required for HACCP compliance
* BR-INV-005: Physical stock count required monthly

---

## 7. Procurement Context (Optional Module)

**Core Responsibility:** Manage supplier relationships, purchase orders, and cost control.

**Ubiquitous Language:**
- **Purchase Order (PO)**: Formal order to supplier
- **Supplier**: Vendor providing goods/services
- **Receiving**: Goods receipt and verification
- **Invoice Matching**: PO vs. invoice reconciliation

### Aggregate: **PurchaseOrder**

**Root Entity:** PurchaseOrder

**Responsibilities**
* Formalize procurement requests
* Track order fulfillment
* Support budget control
* Enable three-way matching (PO, receipt, invoice)

**Core Attributes**
```typescript
poId: POId (UUID)
poNumber: string (sequential, e.g., "PO-2025-001234")
propertyId: PropertyId
supplierId: SupplierId
supplier: SupplierInfo
  - name: string
  - contactPerson: string
  - email: EmailAddress
  - phone: PhoneNumber
  - paymentTerms: PaymentTerms (NET_30 | NET_60 | COD | PREPAID)
orderDate: LocalDate
requestedDeliveryDate: LocalDate
actualDeliveryDate: LocalDate
lineItems: POLineItem[]
  - lineNumber: number
  - itemId: ItemId (if inventory item)
  - description: string
  - quantity: Quantity
  - unit: Unit
  - unitPrice: Money
  - totalPrice: Money
  - receivedQuantity: Quantity
  - status: LineStatus (PENDING | PARTIAL | RECEIVED | CANCELLED)
subtotal: Money
taxes: Tax[]
shippingCost: Money
totalAmount: Money
status: POStatus (DRAFT | SUBMITTED | APPROVED | PARTIALLY_RECEIVED | RECEIVED | INVOICED | CLOSED | CANCELLED)
createdBy: StaffId
approvedBy: StaffId
approvedAt: DateTime
budgetCode: BudgetCode
deliveryAddress: Address
specialInstructions: string
receivingNotes: string[]
invoiceNumber: string (when invoiced)
invoiceAmount: Money
invoiceDate: LocalDate
paymentStatus: PaymentStatus (PENDING | PAID | OVERDUE)
paidAt: DateTime
```

**Domain Events**
* PurchaseOrderCreated
* PurchaseOrderApproved
* PurchaseOrderSubmitted
* GoodsReceived
* PartialDeliveryReceived
* InvoiceReceived
* InvoiceMismatch (PO vs. invoice discrepancy)
* PaymentDue
* PaymentCompleted

**Business Rules**
* BR-PO-001: POs above $1000 require manager approval
* BR-PO-002: Three-way matching required before payment (PO, receipt, invoice)
* BR-PO-003: Invoice discrepancies >5% require investigation
* BR-PO-004: Overdue payments flagged for follow-up
* BR-PO-005: Supplier performance tracked (on-time delivery, quality)

---

### Aggregate: **Supplier**

**Root Entity:** Supplier

**Responsibilities**
* Maintain supplier master data
* Track supplier performance
* Support vendor selection
* Enable compliance verification

**Core Attributes**
```typescript
supplierId: SupplierId (UUID)
supplierName: string
supplierType: SupplierType (FOOD | BEVERAGE | LINEN | MAINTENANCE | UTILITIES | SERVICES)
contactInfo: ContactInfo
  - primaryContact: string
  - email: EmailAddress
  - phone: PhoneNumber
  - alternatePhone: PhoneNumber
address: Address
taxId: string
paymentTerms: PaymentTerms
bankDetails: BankDetails (for payments)
  - bankName: string
  - accountNumber: string (encrypted)
  - routingNumber: string
certifications: Certification[]
  - certificationType: CertificationType (FOOD_SAFETY | ORGANIC | HALAL | KOSHER)
  - certificationNumber: string
  - issuedBy: string
  - expiryDate: LocalDate
contractDetails: ContractDetails (optional)
  - contractNumber: string
  - startDate: LocalDate
  - endDate: LocalDate
  - terms: string
performanceMetrics: PerformanceMetrics
  - onTimeDeliveryRate: Percentage
  - qualityRating: number (1-5)
  - averageLeadTime: Duration
  - totalPurchaseValue: Money (YTD)
  - numberOfOrders: number (YTD)
status: SupplierStatus (ACTIVE | INACTIVE | SUSPENDED | BLACKLISTED)
notes: string
```

**Domain Events**
* SupplierCreated
* SupplierActivated
* SupplierSuspended
* CertificationExpiring
* CertificationExpired
* ContractExpiring
* PerformanceReviewDue

**Business Rules**
* BR-SUP-001: Food suppliers require valid food safety certification
* BR-SUP-002: Certifications reviewed quarterly
* BR-SUP-003: Supplier performance reviewed annually
* BR-SUP-004: Poor performance (rating < 3) triggers review
* BR-SUP-005: Suspended suppliers cannot receive new POs

---

## 8. Compliance & Audit Context

**Core Responsibility:** Ensure regulatory compliance, maintain audit trails, and support data governance.

**Ubiquitous Language:**
- **Audit Event**: Immutable record of system action
- **Compliance Rule**: Regulatory requirement
- **Data Retention**: Lifecycle management policy
- **Access Log**: Security tracking

### Aggregate: **AuditLog**

**Root Entity:** AuditLog

**Responsibilities**
* Record all business-critical events
* Support forensic analysis
* Enable compliance reporting
* Detect anomalies and fraud

**Core Attributes**
```typescript
eventId: EventId (UUID)
timestamp: DateTime (immutable, server-generated)
eventType: EventType (BUSINESS | SECURITY | DATA_ACCESS | SYSTEM)
action: Action (CREATE | READ | UPDATE | DELETE | EXECUTE)
aggregateType: string (e.g., "Reservation", "Payment")
aggregateId: string
actorId: ActorId (UserId | SystemId)
actorType: ActorType (GUEST | STAFF | SYSTEM | EXTERNAL_SERVICE)
actorIpAddress: IpAddress
actorUserAgent: string
propertyId: PropertyId (nullable)
changeSet: ChangeSet (Value Object)
  - before: JSON (snapshot before change)
  - after: JSON (snapshot after change)
  - fields: string[] (changed field names)
outcome: Outcome (SUCCESS | FAILURE | PARTIAL)
errorDetails: string (if FAILURE)
severity: Severity (INFO | WARNING | ERROR | CRITICAL)
tags: string[] (for categorization and search)
correlationId: CorrelationId (links related events)
metadata: Map<string, string>
```

**Invariants**
* Audit entries are append-only (immutable)
* timestamp must be monotonically increasing
* All PII in changeSet must be encrypted
* Retention period: minimum 7 years for financial events
* CRITICAL events trigger real-time alerts

**Domain Events**
* (AuditLog itself doesn't emit events - it records them)

**Business Rules**
* BR-AUD-001: All financial transactions logged with full details
* BR-AUD-002: Guest data access logged for GDPR compliance
* BR-AUD-003: Failed login attempts trigger security review after 5 attempts
* BR-AUD-004: Audit logs replicated to immutable storage (WORM)

---

### Aggregate: **ComplianceReport**

**Root Entity:** ComplianceReport

**Responsibilities**
* Generate regulatory reports
* Track compliance status
* Support audits and inspections

**Core Attributes**
```typescript
reportId: ReportId (UUID)
reportType: ReportType (GUEST_REGISTRY | TAX_REPORT | GDPR_AUDIT | FINANCIAL_AUDIT | SAFETY_INSPECTION)
propertyId: PropertyId
reportingPeriod: DateRange
generatedAt: DateTime
generatedBy: StaffId
status: ReportStatus (DRAFT | SUBMITTED | APPROVED | REJECTED)
jurisdiction: Jurisdiction (country/region specific requirements)
data: ReportData (structure varies by type)
submittedTo: Authority (government agency, auditor)
submittedAt: DateTime
approvalReference: string
expiryDate: LocalDate (for certifications)
```

**Invariants**
* SUBMITTED reports are immutable
* Guest registry reports required daily in some jurisdictions
* Tax reports must reconcile with payment records

**Domain Events**
* ComplianceReportGenerated
* ComplianceReportSubmitted
* ComplianceViolationDetected
* CertificationExpiring

**Business Rules**
* BR-CR-001: Guest registry submitted to authorities within 24h of check-in
* BR-CR-002: Tax reports generated monthly and submitted by 15th of following month
* BR-CR-003: GDPR data access requests fulfilled within 30 days

---

## 7. Channel Management Context (External Integration)

**Core Responsibility:** Integrate with OTAs, GDS, and distribution channels.

**Ubiquitous Language:**
- **Channel**: External booking platform (Booking.com, Expedia, etc.)
- **Channel Manager**: Integration middleware
- **Rate Parity**: Consistent pricing across channels
- **Inventory Allocation**: Channel-specific availability

### Aggregate: **ChannelConnection**

**Root Entity:** ChannelConnection

**Responsibilities**
* Manage channel integrations
* Sync rates and availability
* Handle channel-specific business rules
* Monitor connection health

**Core Attributes**
```typescript
connectionId: ConnectionId (UUID)
propertyId: PropertyId
channelId: ChannelId
channelName: string (e.g., "Booking.com", "Expedia")
channelType: ChannelType (OTA | GDS | METASEARCH | DIRECT)
connectionStatus: ConnectionStatus (ACTIVE | PAUSED | ERROR | DISCONNECTED)
credentials: ChannelCredentials (encrypted)
mappings: ChannelMapping[]
  - internalUnitTypeId: UnitTypeId
  - externalRoomTypeId: string
  - internalRateStrategyId: RateStrategyId
  - externalRatePlanId: string
syncConfiguration: SyncConfiguration
  - rateSync: boolean
  - availabilitySync: boolean
  - reservationSync: boolean
  - syncFrequency: Duration
lastSyncAt: DateTime
lastSyncStatus: SyncStatus (SUCCESS | PARTIAL | FAILED)
commissionRate: Percentage
contractTerms: ContractTerms
  - startDate: LocalDate
  - endDate: LocalDate
  - paymentTerms: string
performanceMetrics: ChannelMetrics
  - bookingsReceived: number
  - revenue: Money
  - cancellationRate: Percentage
```

**Invariants**
* Active connections must have valid credentials
* Mappings required before sync can start
* Commission rate cannot exceed 30%

**Domain Events**
* ChannelConnected
* ChannelDisconnected
* SyncCompleted
* SyncFailed
* RateParityViolationDetected

**Business Rules**
* BR-CH-001: Rate parity enforced across all channels
* BR-CH-002: Inventory allocations rebalanced every 15 minutes
* BR-CH-003: Channel reservations auto-confirmed if inventory available

---

## 8. Cross-Cutting Patterns & Principles

### 8.1 Aggregate Communication

**Rules:**
* Aggregates communicate via **Domain Events** (asynchronous)
* Aggregates reference other aggregates by **ID only** (no object references)
* Cross-context queries use **Application Services** with DTOs
* Eventual consistency accepted between contexts

### 8.2 Value Objects (Shared Kernel)

**Common Value Objects:**
```typescript
Money { amount: Decimal, currency: CurrencyCode }
Address { street, city, state, postalCode, country }
EmailAddress { value: string } // validated
PhoneNumber { countryCode, number } // E.164 format
DateRange { start: LocalDate, end: LocalDate }
GeoCoordinates { latitude: Decimal, longitude: Decimal }
```

### 8.3 Domain Event Structure

**Standard Event Schema:**
```typescript
interface DomainEvent {
  eventId: EventId (UUID)
  eventType: string
  aggregateId: string
  aggregateType: string
  occurredAt: DateTime
  version: number
  causationId: EventId (what caused this event)
  correlationId: CorrelationId (trace across contexts)
  payload: EventPayload
  metadata: EventMetadata
}
```

### 8.4 Invariant Enforcement Strategy

| Invariant Type | Enforcement Location | Example |
|---------------|---------------------|---------|
| Single Aggregate | Aggregate Root | Reservation dates valid |
| Cross-Aggregate, Same Context | Domain Service | Availability check before booking |
| Cross-Context | Application Service + Events | Payment before reservation confirmation |
| External System | Anti-Corruption Layer | Channel rate parity |

### 8.5 Error Handling

**Domain Exceptions:**
```typescript
class DomainException extends Error {
  code: ErrorCode
  aggregateId: string
  context: Map<string, any>
}

// Examples:
InvariantViolationException
ConcurrencyException (optimistic locking)
BusinessRuleViolationException
```

---

## 9. Future Extensions & Scalability

### 9.1 Event Sourcing (Deferred)

**Candidates for Event Sourcing:**
* Reservation (complete audit trail of modifications)
* Folio (financial audit requirements)
* AvailabilityCalendar (time-travel queries for analytics)

**Benefits:**
* Complete audit trail
* Temporal queries
* Event replay for debugging

**Challenges:**
* Increased complexity
* Schema evolution
* Snapshot management

**Decision:** Implement for Reservation aggregate in Phase 2

### 9.2 CQRS (Command Query Responsibility Segregation)

**Read Models:**
* Availability Search (optimized for fast queries)
* Guest History (denormalized for quick lookup)
* Revenue Analytics (pre-aggregated)

**Implementation:**
* Write side: Domain model (as defined above)
* Read side: Materialized views updated via domain events
* Eventual consistency acceptable for read models

### 9.3 Microservices Extraction Candidates

**If/when modular monolith reaches limits:**

| Context | Extraction Priority | Reason |
|---------|-------------------|--------|
| Channel Management | High | External integration, independent scaling |
| Billing & Payments | High | PCI-DSS isolation, specialized infrastructure |
| Compliance & Audit | Medium | Regulatory isolation |
| Operations | Low | Tightly coupled to property context |

---

## 10. Validation & Quality Metrics

### 10.1 Domain Model Quality Indicators

* **Aggregate Size:** <15 entities per aggregate (current: compliant)
* **Bounded Context Cohesion:** >80% of changes contained within single context
* **Event Coupling:** <5 contexts subscribing to any single event type
* **Invariant Coverage:** 100% of business rules mapped to invariants

### 10.2 Testing Strategy

* **Unit Tests:** Aggregate invariants and business rules
* **Integration Tests:** Cross-aggregate workflows within context
* **Contract Tests:** Inter-context event schemas
* **End-to-End Tests:** Complete business scenarios

---

**Document Status:** Living Document - Updated as domain understanding evolves

**Next Review:** 2025-Q2

**Maintained By:** Architecture Team

**Approval:** CTO, Domain Experts

---

**End of Core Domain Model**
```

