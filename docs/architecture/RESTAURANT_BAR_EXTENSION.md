# StayOS Extension: Restaurant & Bar Management

**Date**: 2026-01-17  
**Version**: 1.0  
**Status**: Proposal  

---

## 🎯 Executive Summary

This document outlines the architectural changes needed to extend StayOS to support **standalone restaurants and bars** while maintaining clean architecture principles and backward compatibility with existing hotel/hospitality features.

### **Key Objectives**

1. ✅ Support standalone restaurants and bars (not just hotel F&B)
2. ✅ Maintain clean architecture and domain-driven design principles
3. ✅ Ensure backward compatibility with existing hotel features
4. ✅ Enable multi-venue management (hotels + restaurants + bars)
5. ✅ Reuse existing infrastructure (auth, billing, inventory, etc.)

---

## 📊 Current State Analysis

### **Existing Capabilities** ✅

StayOS already has strong F&B foundations:

1. **Food & Beverage Schema** (`schema_fb.sql`)
   - Menu items with categories, pricing, dietary info
   - F&B orders (room service, restaurant, bar, banquet)
   - Inventory management with FIFO tracking
   - Waste tracking and stock counts

2. **API Endpoints** (`/fb/*`)
   - Menu management (CRUD operations)
   - Order management (create, confirm, serve, cancel)
   - Inventory operations (receive, consume, count, waste)

3. **Supporting Systems**
   - Billing and payments
   - Staff management
   - Procurement and suppliers
   - Compliance and reporting

### **Gaps for Standalone Restaurant/Bar** ❌

1. **Property Type Limitation**
   - Current: Only supports HOTEL, RESORT, etc.
   - Needed: RESTAURANT, BAR, CAFE, FOOD_TRUCK, etc.

2. **Table/Seating Management**
   - No table reservation system
   - No floor plan management
   - No table status tracking

3. **Point of Sale (POS) Features**
   - No split bills
   - No table transfers
   - No quick service mode
   - No kitchen display system (KDS) integration

4. **Restaurant-Specific Operations**
   - No shift management for restaurant staff
   - No reservation/waitlist system
   - No customer loyalty for walk-ins
   - No delivery integration

---

## 🏗️ Proposed Architecture

### **Design Principles**

1. **Bounded Contexts** - Separate restaurant/bar domain from hospitality
2. **Shared Kernel** - Reuse common infrastructure (auth, billing, inventory)
3. **Anti-Corruption Layer** - Isolate restaurant logic from hotel logic
4. **Open-Closed Principle** - Extend without modifying existing code
5. **Single Responsibility** - Each module has one reason to change

### **Architecture Diagram**

```
┌─────────────────────────────────────────────────────────────┐
│                     StayOS Platform                          │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────┐  ┌──────────────────┐                │
│  │  Hospitality     │  │  Restaurant &    │                │
│  │  Domain          │  │  Bar Domain      │                │
│  │                  │  │                  │                │
│  │  - Properties    │  │  - Venues        │                │
│  │  - Rooms         │  │  - Tables        │                │
│  │  - Reservations  │  │  - Reservations  │                │
│  │  - Stays         │  │  - Orders        │                │
│  └──────────────────┘  └──────────────────┘                │
│           │                      │                           │
│           └──────────┬───────────┘                           │
│                      │                                       │
│  ┌───────────────────────────────────────────────────────┐  │
│  │           Shared Kernel (Common Services)             │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │  - Authentication & Authorization                     │  │
│  │  - Billing & Payments                                 │  │
│  │  - Food & Beverage (Menu, Orders, Inventory)         │  │
│  │  - Staff Management                                   │  │
│  │  - Procurement & Suppliers                            │  │
│  │  - Compliance & Reporting                             │  │
│  │  - Audit Logging                                      │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 Implementation Plan

### **Phase 1: Core Restaurant/Bar Domain** (Week 1-2)

#### **1.1 Extend Property Types**
- Add new property types: `RESTAURANT`, `BAR`, `CAFE`, `BISTRO`, `PUB`, `FOOD_TRUCK`
- Update property schema to support venue-specific attributes
- Add venue classification (FINE_DINING, CASUAL, FAST_CASUAL, QSR, etc.)

#### **1.2 Table Management**
- Create `tables` schema for seating management
- Table entities: floor plans, sections, table status
- Table reservation system
- Waitlist management

#### **1.3 Restaurant-Specific Orders**
- Extend F&B orders for dine-in scenarios
- Table assignment and tracking
- Order splitting and merging
- Course management (appetizer, main, dessert)

---

## 🗄️ Database Schema Changes

### **New Schemas**

1. **`schema_venue.sql`** - Venue Management
2. **`schema_tables.sql`** - Table & Seating Management  
3. **`schema_restaurant_ops.sql`** - Restaurant Operations

### **Extended Schemas**

1. **`schema_property_management.sql`** - Add restaurant property types
2. **`schema_fb.sql`** - Enhance for restaurant scenarios
3. **`schema_reservation.sql`** - Add table reservations

---

## 🔌 API Changes

### **New API Endpoints**

```
/v1/venues/*                    # Venue management (restaurants/bars)
/v1/tables/*                    # Table management
/v1/table-reservations/*        # Table reservation system
/v1/pos/*                       # Point of Sale operations
/v1/kitchen-display/*           # Kitchen Display System
/v1/delivery-integrations/*     # Third-party delivery
```

### **Extended Endpoints**

```
/v1/properties/*                # Support restaurant property types
/v1/fb/orders/*                 # Enhanced for dine-in scenarios
/v1/fb/menu/*                   # Add venue-specific menus
```

---

## 🎨 Domain Model

### **New Aggregates**

1. **Venue** - Restaurant/Bar entity
2. **Table** - Seating entity
3. **TableReservation** - Table booking
4. **DineInOrder** - Restaurant order with table context
5. **Shift** - Restaurant shift management

### **Value Objects**

1. **FloorPlan** - Table layout
2. **TableStatus** - Available, Occupied, Reserved, Cleaning
3. **CourseSequence** - Order of courses
4. **SplitBill** - Bill splitting logic

---

## 🔐 Security & Authorization

### **New Scopes**

```
read:venues
write:venues
read:tables
write:tables
read:table-reservations
write:table-reservations
read:pos
write:pos
```

### **Roles**

- **Restaurant Manager** - Full venue access
- **Host/Hostess** - Table management, reservations
- **Server/Waiter** - Order taking, table service
- **Kitchen Staff** - View orders, update status
- **Bartender** - Bar orders only
- **Cashier** - Billing and payments

---

## 📊 Next Steps

1. Review and approve this proposal
2. Create detailed database schema designs
3. Design API specifications (OpenAPI)
4. Implement Phase 1 features
5. Write comprehensive tests
6. Update documentation
7. Deploy and test

---

**Status**: Awaiting approval to proceed with detailed implementation.

