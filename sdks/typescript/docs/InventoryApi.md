# InventoryApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createInventoryUnit**](#createinventoryunit) | **POST** /properties/{propertyId}/inventory-units | Create inventory unit|
|[**createUnitType**](#createunittype) | **POST** /properties/{propertyId}/unit-types | Create unit type|
|[**getUnitType**](#getunittype) | **GET** /unit-types/{unitTypeId} | Get unit type details|
|[**listInventoryUnits**](#listinventoryunits) | **GET** /properties/{propertyId}/inventory-units | List inventory units for property|
|[**listUnitTypes**](#listunittypes) | **GET** /properties/{propertyId}/unit-types | List unit types|
|[**replaceUnitType**](#replaceunittype) | **PUT** /unit-types/{unitTypeId} | Replace unit type (full update)|
|[**updateUnitType**](#updateunittype) | **PATCH** /unit-types/{unitTypeId} | Update unit type (partial update)|

# **createInventoryUnit**
> InventoryUnit createInventoryUnit(inventoryUnit)

Add a new inventory unit to the property

### Example

```typescript
import {
    InventoryApi,
    Configuration,
    InventoryUnit
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let propertyId: string; //Unique property identifier (default to undefined)
let inventoryUnit: InventoryUnit; //
let idempotencyKey: string; //Unique key for idempotent operations (UUID recommended) (optional) (default to undefined)

const { status, data } = await apiInstance.createInventoryUnit(
    propertyId,
    inventoryUnit,
    idempotencyKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inventoryUnit** | **InventoryUnit**|  | |
| **propertyId** | [**string**] | Unique property identifier | defaults to undefined|
| **idempotencyKey** | [**string**] | Unique key for idempotent operations (UUID recommended) | (optional) defaults to undefined|


### Return type

**InventoryUnit**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Inventory unit created successfully |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**409** | Unit number already exists |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createUnitType**
> UnitType createUnitType(unitType)

Create a new unit type for a property

### Example

```typescript
import {
    InventoryApi,
    Configuration,
    UnitType
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let propertyId: string; //Unique property identifier (default to undefined)
let unitType: UnitType; //

const { status, data } = await apiInstance.createUnitType(
    propertyId,
    unitType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **unitType** | **UnitType**|  | |
| **propertyId** | [**string**] | Unique property identifier | defaults to undefined|


### Return type

**UnitType**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Unit type created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUnitType**
> UnitType getUnitType()

Retrieve details of a specific unit type

### Example

```typescript
import {
    InventoryApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let unitTypeId: string; // (default to undefined)

const { status, data } = await apiInstance.getUnitType(
    unitTypeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **unitTypeId** | [**string**] |  | defaults to undefined|


### Return type

**UnitType**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listInventoryUnits**
> ListInventoryUnits200Response listInventoryUnits()

Retrieve all inventory units (rooms, beds, suites) for a property

### Example

```typescript
import {
    InventoryApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let propertyId: string; //Unique property identifier (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)
let unitTypeId: string; //Filter by unit type (optional) (default to undefined)
let operationalStatus: 'AVAILABLE' | 'OCCUPIED' | 'BLOCKED' | 'OUT_OF_SERVICE'; //Filter by operational status (optional) (default to undefined)
let floor: number; //Filter by floor number (optional) (default to undefined)

const { status, data } = await apiInstance.listInventoryUnits(
    propertyId,
    pageSize,
    cursor,
    unitTypeId,
    operationalStatus,
    floor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] | Unique property identifier | defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|
| **unitTypeId** | [**string**] | Filter by unit type | (optional) defaults to undefined|
| **operationalStatus** | [**&#39;AVAILABLE&#39; | &#39;OCCUPIED&#39; | &#39;BLOCKED&#39; | &#39;OUT_OF_SERVICE&#39;**]**Array<&#39;AVAILABLE&#39; &#124; &#39;OCCUPIED&#39; &#124; &#39;BLOCKED&#39; &#124; &#39;OUT_OF_SERVICE&#39;>** | Filter by operational status | (optional) defaults to undefined|
| **floor** | [**number**] | Filter by floor number | (optional) defaults to undefined|


### Return type

**ListInventoryUnits200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listUnitTypes**
> ListUnitTypes200Response listUnitTypes()

Retrieve all unit types for a property

### Example

```typescript
import {
    InventoryApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let propertyId: string; //Unique property identifier (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listUnitTypes(
    propertyId,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] | Unique property identifier | defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|


### Return type

**ListUnitTypes200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceUnitType**
> UnitType replaceUnitType(unitType)

Replace unit type with complete new details

### Example

```typescript
import {
    InventoryApi,
    Configuration,
    UnitType
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let unitTypeId: string; // (default to undefined)
let unitType: UnitType; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceUnitType(
    unitTypeId,
    unitType,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **unitType** | **UnitType**|  | |
| **unitTypeId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**UnitType**

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

# **updateUnitType**
> UnitType updateUnitType(body)

Update specific fields of a unit type

### Example

```typescript
import {
    InventoryApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let unitTypeId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateUnitType(
    unitTypeId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **unitTypeId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**UnitType**

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

