# PropertiesApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createProperty**](#createproperty) | **POST** /properties | Create property|
|[**deleteProperty**](#deleteproperty) | **DELETE** /properties/{propertyId} | Delete property|
|[**getProperty**](#getproperty) | **GET** /properties/{propertyId} | Get property by ID|
|[**listProperties**](#listproperties) | **GET** /properties | List properties|
|[**replaceInventoryUnit**](#replaceinventoryunit) | **PUT** /inventory-units/{unitId} | Replace inventory unit (full update)|
|[**replaceProperty**](#replaceproperty) | **PUT** /properties/{propertyId} | Replace property (full update)|
|[**replaceRateStrategy**](#replaceratestrategy) | **PUT** /rate-strategies/{strategyId} | Replace rate strategy (full update)|
|[**updateInventoryUnit**](#updateinventoryunit) | **PATCH** /inventory-units/{unitId} | Update inventory unit (partial update)|
|[**updateProperty**](#updateproperty) | **PATCH** /properties/{propertyId} | Update property (partial update)|
|[**updateRateStrategy**](#updateratestrategy) | **PATCH** /rate-strategies/{strategyId} | Update rate strategy (partial update)|

# **createProperty**
> Property createProperty(property)

Create a new property. This is typically an administrative operation.  **Authorization:** Requires `write:properties` or `admin:all` scope  **Idempotency:** Supports idempotency via `Idempotency-Key` header 

### Example

```typescript
import {
    PropertiesApi,
    Configuration,
    Property
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new PropertiesApi(configuration);

let property: Property; //
let idempotencyKey: string; //Unique key for idempotent operations (UUID recommended) (optional) (default to undefined)

const { status, data } = await apiInstance.createProperty(
    property,
    idempotencyKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **property** | **Property**|  | |
| **idempotencyKey** | [**string**] | Unique key for idempotent operations (UUID recommended) | (optional) defaults to undefined|


### Return type

**Property**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Property created successfully |  * Location -  <br>  * X-Request-Id - Unique request identifier for tracing <br>  |
|**400** | Bad request - validation error |  -  |
|**401** | Unauthorized - authentication required |  -  |
|**403** | Forbidden - insufficient permissions |  -  |
|**409** | Conflict - resource state conflict |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProperty**
> deleteProperty()

Soft delete a property. Property status changes to CLOSED.  **Warning:** This operation cannot be undone. All future reservations will be cancelled. 

### Example

```typescript
import {
    PropertiesApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new PropertiesApi(configuration);

let propertyId: string; //Unique property identifier (default to undefined)

const { status, data } = await apiInstance.deleteProperty(
    propertyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] | Unique property identifier | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful operation with no content |  * X-Request-Id - Unique request identifier for tracing <br>  |
|**404** | Resource not found |  -  |
|**409** | Cannot delete property with active reservations |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProperty**
> Property getProperty()

Retrieve detailed information about a specific property

### Example

```typescript
import {
    PropertiesApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new PropertiesApi(configuration);

let propertyId: string; //Unique property identifier (default to undefined)
let expand: string; //Comma-separated list of related resources to include (optional) (default to undefined)
let ifNoneMatch: string; //ETag for conditional requests (optional) (default to undefined)

const { status, data } = await apiInstance.getProperty(
    propertyId,
    expand,
    ifNoneMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] | Unique property identifier | defaults to undefined|
| **expand** | [**string**] | Comma-separated list of related resources to include | (optional) defaults to undefined|
| **ifNoneMatch** | [**string**] | ETag for conditional requests | (optional) defaults to undefined|


### Return type

**Property**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  * ETag -  <br>  * X-Request-Id - Unique request identifier for tracing <br>  |
|**304** | Not Modified (cached version is current) |  -  |
|**401** | Unauthorized - authentication required |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProperties**
> ListProperties200Response listProperties()

Retrieve a paginated list of properties. Supports filtering, sorting, and field expansion.  **Authorization:** Requires `read:properties` scope  **Rate Limit:** 100 requests/minute 

### Example

```typescript
import {
    PropertiesApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new PropertiesApi(configuration);

let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)
let organizationId: string; //Filter by organization (optional) (default to undefined)
let operationalStatus: 'ACTIVE' | 'SUSPENDED' | 'CLOSED'; //Filter by operational status (optional) (default to undefined)
let classification: 'HOTEL' | 'HOSTEL' | 'RESORT' | 'BOUTIQUE'; //Filter by property classification (optional) (default to undefined)
let sortBy: string; //Field to sort by (optional) (default to undefined)
let sortOrder: 'asc' | 'desc'; //Sort order (optional) (default to 'asc')
let expand: string; //Comma-separated list of related resources to include (optional) (default to undefined)

const { status, data } = await apiInstance.listProperties(
    pageSize,
    cursor,
    organizationId,
    operationalStatus,
    classification,
    sortBy,
    sortOrder,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|
| **organizationId** | [**string**] | Filter by organization | (optional) defaults to undefined|
| **operationalStatus** | [**&#39;ACTIVE&#39; | &#39;SUSPENDED&#39; | &#39;CLOSED&#39;**]**Array<&#39;ACTIVE&#39; &#124; &#39;SUSPENDED&#39; &#124; &#39;CLOSED&#39;>** | Filter by operational status | (optional) defaults to undefined|
| **classification** | [**&#39;HOTEL&#39; | &#39;HOSTEL&#39; | &#39;RESORT&#39; | &#39;BOUTIQUE&#39;**]**Array<&#39;HOTEL&#39; &#124; &#39;HOSTEL&#39; &#124; &#39;RESORT&#39; &#124; &#39;BOUTIQUE&#39;>** | Filter by property classification | (optional) defaults to undefined|
| **sortBy** | [**string**] | Field to sort by | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order | (optional) defaults to 'asc'|
| **expand** | [**string**] | Comma-separated list of related resources to include | (optional) defaults to undefined|


### Return type

**ListProperties200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Request-Id - Unique request identifier for tracing <br>  |
|**400** | Bad request - validation error |  -  |
|**401** | Unauthorized - authentication required |  -  |
|**429** | Too many requests - rate limit exceeded |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset - Unix timestamp when rate limit resets <br>  * Retry-After - Seconds until rate limit resets <br>  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceInventoryUnit**
> object replaceInventoryUnit(body)

Replace inventory unit with complete new details including type, status, and physical attributes

### Example

```typescript
import {
    PropertiesApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new PropertiesApi(configuration);

let unitId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceInventoryUnit(
    unitId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **unitId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully replaced |  * ETag -  <br>  |
|**404** | Resource not found |  -  |
|**412** | Precondition failed - optimistic locking failure |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceProperty**
> Property replaceProperty(property)

Replace an existing property with a complete new representation. All fields must be provided. For partial updates, use PATCH instead.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts 

### Example

```typescript
import {
    PropertiesApi,
    Configuration,
    Property
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new PropertiesApi(configuration);

let propertyId: string; //Unique property identifier (default to undefined)
let property: Property; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceProperty(
    propertyId,
    property,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **property** | **Property**|  | |
| **propertyId** | [**string**] | Unique property identifier | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**Property**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully replaced |  * ETag -  <br>  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**412** | Precondition failed - optimistic locking failure |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceRateStrategy**
> RateStrategy replaceRateStrategy(rateStrategy)

Replace rate strategy with complete new pricing rules, restrictions, and yield management settings

### Example

```typescript
import {
    PropertiesApi,
    Configuration,
    RateStrategy
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new PropertiesApi(configuration);

let strategyId: string; // (default to undefined)
let rateStrategy: RateStrategy; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceRateStrategy(
    strategyId,
    rateStrategy,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rateStrategy** | **RateStrategy**|  | |
| **strategyId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**RateStrategy**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully replaced |  * ETag -  <br>  |
|**404** | Resource not found |  -  |
|**412** | Precondition failed - optimistic locking failure |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateInventoryUnit**
> object updateInventoryUnit(body)

Update specific fields of an inventory unit.  **Common use cases:** - Change unit status (AVAILABLE → MAINTENANCE) - Update room features - Modify floor/location - Update amenities 

### Example

```typescript
import {
    PropertiesApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new PropertiesApi(configuration);

let unitId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateInventoryUnit(
    unitId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **unitId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully updated |  * ETag -  <br>  |
|**404** | Resource not found |  -  |
|**412** | Precondition failed - optimistic locking failure |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProperty**
> Property updateProperty(body)

Partially update a property. Only provided fields will be updated. This is the recommended method for most updates.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts  **Example:** Update only the property name and contact email: ```json {   \"name\": \"New Property Name\",   \"contactInfo\": {     \"email\": \"newemail@property.com\"   } } ``` 

### Example

```typescript
import {
    PropertiesApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new PropertiesApi(configuration);

let propertyId: string; //Unique property identifier (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateProperty(
    propertyId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **propertyId** | [**string**] | Unique property identifier | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**Property**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully updated |  * ETag -  <br>  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**412** | Precondition failed - optimistic locking failure |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateRateStrategy**
> RateStrategy updateRateStrategy(body)

Update specific fields of a rate strategy.  **Common use cases:** - Adjust base rate - Update seasonal modifiers - Change minimum stay requirements - Modify cancellation policy 

### Example

```typescript
import {
    PropertiesApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new PropertiesApi(configuration);

let strategyId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateRateStrategy(
    strategyId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **strategyId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**RateStrategy**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully updated |  * ETag -  <br>  |
|**404** | Resource not found |  -  |
|**412** | Precondition failed - optimistic locking failure |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

