# StayOS TypeScript/JavaScript SDK - Usage Guide

**Version:** 4.0.0 | **Package:** `@stayos/api-client`

---

## 📦 Installation

```bash
npm install @stayos/api-client
# or
yarn add @stayos/api-client
# or
pnpm add @stayos/api-client
```

---

## 🚀 Quick Start

### Basic Setup

```typescript
import { Configuration, PropertiesApi } from '@stayos/api-client';

// Configure the API client
const config = new Configuration({
  basePath: 'https://api.stayos.com/v1',
  accessToken: 'YOUR_ACCESS_TOKEN'
});

// Create an API instance
const propertiesApi = new PropertiesApi(config);

// Make API calls
const properties = await propertiesApi.listProperties();
console.log(properties.data);
```

---

## 🔑 Authentication

### OAuth 2.0 (Recommended)

```typescript
const config = new Configuration({
  basePath: 'https://api.stayos.com/v1',
  accessToken: 'YOUR_OAUTH_ACCESS_TOKEN'
});
```

### API Key

```typescript
const config = new Configuration({
  basePath: 'https://api.stayos.com/v1',
  apiKey: 'YOUR_API_KEY'
});
```

### Custom Headers

```typescript
const config = new Configuration({
  basePath: 'https://api.stayos.com/v1',
  accessToken: 'YOUR_ACCESS_TOKEN',
  baseOptions: {
    headers: {
      'X-Custom-Header': 'value'
    }
  }
});
```

---

## 📚 Available APIs

The SDK includes 16 API modules:

| API Module | Description | Endpoints |
|------------|-------------|-----------|
| **PropertiesApi** | Property management | 17 |
| **ReservationsApi** | Reservation operations | 14 |
| **GuestsApi** | Guest management | 34 |
| **OperationsApi** | Housekeeping, maintenance | 47 |
| **BillingApi** | Folios, payments | 20 |
| **ComplianceApi** | Audit, GDPR | 13 |
| **ChannelsApi** | OTA integrations | 11 |
| **FoodBeverageApi** | F&B operations | 19 |
| **ProcurementApi** | Purchase orders | 14 |
| **WebhooksApi** | Event notifications | 13 |
| **AvailabilityApi** | Availability calendar | - |
| **InventoryApi** | Inventory units | - |
| **RateStrategiesApi** | Rate management | - |
| **StaysApi** | Guest stays | - |
| **FeedbackApi** | Guest feedback | - |
| **SystemApi** | System health | - |

---

## 💡 Usage Examples

### Property Management

```typescript
import { PropertiesApi, Property } from '@stayos/api-client';

const api = new PropertiesApi(config);

// List all properties
const properties = await api.listProperties();

// Get a specific property
const property = await api.getProperty('prop_123');

// Create a new property
const newProperty: Property = {
  name: 'Grand Hotel Downtown',
  type: 'hotel',
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    postalCode: '10001',
    country: 'US'
  }
};
const created = await api.createProperty(newProperty);

// Update a property
const updated = await api.updateProperty('prop_123', {
  name: 'Grand Hotel Downtown - Updated'
});
```

### Reservations

```typescript
import { ReservationsApi, Reservation } from '@stayos/api-client';

const api = new ReservationsApi(config);

// Create a reservation
const reservation: Reservation = {
  propertyId: 'prop_123',
  unitId: 'unit_456',
  checkIn: '2025-01-15',
  checkOut: '2025-01-20',
  guestId: 'guest_789',
  guestCount: {
    adults: 2,
    children: 1
  }
};
const created = await api.createReservation(reservation);

// Get reservation quote
const quote = await api.getReservationQuote({
  propertyId: 'prop_123',
  unitTypeId: 'type_456',
  checkIn: '2025-01-15',
  checkOut: '2025-01-20',
  guestCount: { adults: 2 }
});

// Cancel a reservation
await api.cancelReservation('res_123', {
  reason: 'Guest request',
  refundAmount: 100.00
});
```

### Guest Management

```typescript
import { GuestsApi, GuestProfile } from '@stayos/api-client';

const api = new GuestsApi(config);

// Create a guest profile
const guest: GuestProfile = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+1-555-0123',
  preferences: {
    roomType: 'non-smoking',
    bedType: 'king'
  }
};
const created = await api.createGuest(guest);

// Search guests
const results = await api.searchGuests({
  query: 'john.doe@example.com'
});

// Get guest loyalty points
const loyalty = await api.getGuestLoyalty('guest_123');
```

### Operations

```typescript
import { OperationsApi } from '@stayos/api-client';

const api = new OperationsApi(config);

// Assign housekeeping task
await api.assignHousekeepingTask('task_123', {
  staffId: 'staff_456',
  priority: 'high'
});

// Complete maintenance request
await api.completeMaintenanceRequest('req_123', {
  resolution: 'Fixed leaking faucet',
  partsUsed: [
    { partId: 'part_789', quantity: 1 }
  ]
});

// Create incident report
const incident = await api.createIncident({
  type: 'safety',
  severity: 'medium',
  description: 'Wet floor in lobby',
  location: 'Lobby - Main Entrance'
});
```

### Billing & Payments

```typescript
import { BillingApi } from '@stayos/api-client';

const api = new BillingApi(config);

// Add charge to folio
await api.addFolioCharge('folio_123', {
  description: 'Room Service',
  amount: { amount: 45.00, currency: 'USD' },
  category: 'food_beverage'
});

// Process payment
const payment = await api.createPayment({
  folioId: 'folio_123',
  amount: { amount: 500.00, currency: 'USD' },
  method: 'credit_card',
  cardToken: 'tok_visa_4242'
});

// Refund payment
await api.refundPayment('pay_123', {
  amount: { amount: 50.00, currency: 'USD' },
  reason: 'Service issue'
});
```

---

## 🛠️ Advanced Features

### Error Handling

```typescript
try {
  const property = await api.getProperty('invalid_id');
} catch (error) {
  if (error.response) {
    // API error response
    console.error('Status:', error.response.status);
    console.error('Error:', error.response.data);
  } else {
    // Network or other error
    console.error('Error:', error.message);
  }
}
```

### Pagination

```typescript
// Using cursor-based pagination
let cursor: string | undefined;
do {
  const response = await api.listProperties({ cursor, limit: 50 });
  
  // Process properties
  response.data.forEach(property => {
    console.log(property.name);
  });
  
  // Get next cursor
  cursor = response.pagination?.nextCursor;
} while (cursor);
```

### Custom Axios Instance

```typescript
import axios from 'axios';

const customAxios = axios.create({
  timeout: 30000,
  headers: {
    'X-Custom-Header': 'value'
  }
});

const config = new Configuration({
  basePath: 'https://api.stayos.com/v1',
  accessToken: 'YOUR_ACCESS_TOKEN',
  baseOptions: {
    axios: customAxios
  }
});
```

---

## 📖 Documentation

- **API Reference:** See `docs/` directory for complete API documentation
- **Models:** See `models/` directory for all data models
- **OpenAPI Spec:** [../../docs/api/openapi-bundled.yaml](../../docs/api/openapi-bundled.yaml)

---

## 🔧 Development

### Build the SDK

```bash
npm install
npm run build
```

### Run Tests

```bash
npm test
```

---

## 📝 License

See the main repository LICENSE file.

