# StayOS API - Client SDKs

**Version:** 4.0.0 | **Generated from:** OpenAPI 3.1.0 Specification

---

## 🎉 Available SDKs

Client libraries generated from the complete StayOS API specification with **202 endpoints** and **38 domain models**.

### Supported Languages

| Language | Package Name | Status | Location |
|----------|--------------|--------|----------|
| **TypeScript/JavaScript** | `@stayos/api-client` | ✅ Generated | [typescript/](./typescript/) |
| **Python** | `stayos-api-client` | ⏳ Generating | [python/](./python/) |
| **Java** | `com.stayos:stayos-api-client` | 📋 Ready | [java/](./java/) |
| **Go** | `github.com/stayos/api-client-go` | 📋 Ready | [go/](./go/) |
| **C#** | `StayOS.ApiClient` | 📋 Ready | [csharp/](./csharp/) |
| **PHP** | `stayos/api-client` | 📋 Ready | [php/](./php/) |
| **Ruby** | `stayos-api-client` | 📋 Ready | [ruby/](./ruby/) |

---

## 🚀 Quick Start

### Generate SDKs

```bash
# Generate all SDKs
npm run sdk:all

# Generate specific SDK
npm run sdk:typescript
npm run sdk:python
npm run sdk:java
npm run sdk:go
npm run sdk:csharp
```

### Using the Generation Script

```bash
# Show available options
bash scripts/generate-sdks.sh

# Generate specific SDK
bash scripts/generate-sdks.sh typescript
bash scripts/generate-sdks.sh python

# Generate all SDKs
bash scripts/generate-sdks.sh all
```

---

## 📦 TypeScript/JavaScript SDK

### Installation

```bash
npm install @stayos/api-client
# or
yarn add @stayos/api-client
```

### Usage

```typescript
import { Configuration, PropertiesApi, ReservationsApi } from '@stayos/api-client';

// Configure API client
const config = new Configuration({
  basePath: 'https://api.stayos.com/v1',
  accessToken: 'YOUR_ACCESS_TOKEN'
});

// Create API instances
const propertiesApi = new PropertiesApi(config);
const reservationsApi = new ReservationsApi(config);

// List properties
const properties = await propertiesApi.listProperties();
console.log(properties.data);

// Create a reservation
const reservation = await reservationsApi.createReservation({
  propertyId: 'prop_123',
  unitId: 'unit_456',
  checkIn: '2025-01-15',
  checkOut: '2025-01-20',
  guestId: 'guest_789'
});
```

### Features

✅ **242 TypeScript files** - Complete type safety
✅ **16 API modules** - Organized by context
✅ **221 model files** - All domain models with validation
✅ **Axios-based** - Modern HTTP client
✅ **Promise-based** - Async/await support
✅ **Tree-shakeable** - Import only what you need

---

## 🐍 Python SDK

### Installation

```bash
pip install stayos-api-client
```

### Usage

```python
from stayos_api_client import Configuration, ApiClient
from stayos_api_client.api import PropertiesApi, ReservationsApi

# Configure API client
configuration = Configuration(
    host="https://api.stayos.com/v1",
    access_token="YOUR_ACCESS_TOKEN"
)

# Create API client
with ApiClient(configuration) as api_client:
    # Create API instances
    properties_api = PropertiesApi(api_client)
    reservations_api = ReservationsApi(api_client)
    
    # List properties
    properties = properties_api.list_properties()
    print(properties.data)
    
    # Create a reservation
    reservation = reservations_api.create_reservation(
        property_id="prop_123",
        unit_id="unit_456",
        check_in="2025-01-15",
        check_out="2025-01-20",
        guest_id="guest_789"
    )
```

### Features

✅ **Async support** - asyncio library
✅ **Type hints** - Full type annotations
✅ **Pydantic models** - Data validation
✅ **Context managers** - Automatic resource cleanup

---

## ☕ Java SDK

### Installation

**Maven:**

```xml
<dependency>
    <groupId>com.stayos</groupId>
    <artifactId>stayos-api-client</artifactId>
    <version>4.0.0</version>
</dependency>
```

**Gradle:**

```gradle
implementation 'com.stayos:stayos-api-client:4.0.0'
```

### Usage

```java
import com.stayos.client.ApiClient;
import com.stayos.api.PropertiesApi;
import com.stayos.model.Property;

// Configure API client
ApiClient client = new ApiClient();
client.setBasePath("https://api.stayos.com/v1");
client.setAccessToken("YOUR_ACCESS_TOKEN");

// Create API instance
PropertiesApi api = new PropertiesApi(client);

// List properties
List<Property> properties = api.listProperties();
```

---

## 🔧 SDK Structure

Each generated SDK includes:

```
sdks/{language}/
├── api/              # API endpoint classes
├── models/           # Domain model classes
├── docs/             # Auto-generated documentation
├── README.md         # SDK-specific documentation
├── package.json      # Package configuration (JS/TS)
├── setup.py          # Package configuration (Python)
├── pom.xml           # Package configuration (Java)
└── go.mod            # Package configuration (Go)
```

---

## 📚 Documentation

Each SDK includes:
- **README.md** - Getting started guide
- **API Documentation** - Complete API reference
- **Model Documentation** - All data models
- **Examples** - Usage examples

---

## 🔑 Authentication

All SDKs support multiple authentication methods:

### OAuth 2.0 (Recommended)

```typescript
const config = new Configuration({
  accessToken: 'YOUR_ACCESS_TOKEN'
});
```

### API Key

```typescript
const config = new Configuration({
  apiKey: 'YOUR_API_KEY'
});
```

### Bearer Token

```typescript
const config = new Configuration({
  accessToken: 'YOUR_BEARER_TOKEN'
});
```

---

## 🛠️ Customization

### Custom Base URL

```typescript
const config = new Configuration({
  basePath: 'https://your-custom-domain.com/api/v1'
});
```

### Custom Headers

```typescript
const config = new Configuration({
  baseOptions: {
    headers: {
      'X-Custom-Header': 'value'
    }
  }
});
```

---

## 📖 Additional Resources

- **OpenAPI Spec:** [docs/api/openapi-bundled.yaml](../docs/api/openapi-bundled.yaml)
- **API Documentation:** [docs/api/index.html](../docs/api/index.html)
- **API Reference:** [docs/api/API_SPECIFICATION.md](../docs/api/API_SPECIFICATION.md)
- **Generation Script:** [scripts/generate-sdks.sh](../scripts/generate-sdks.sh)

---

## 🆘 Support

For issues or questions:
1. Check the SDK-specific README in each language directory
2. Review the API documentation
3. Check the OpenAPI specification
4. Open an issue in the repository

