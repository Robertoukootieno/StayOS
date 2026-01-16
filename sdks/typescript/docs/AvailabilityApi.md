# AvailabilityApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createInventoryBlock**](#createinventoryblock) | **POST** /availability/block | Block inventory|
|[**deleteInventoryBlock**](#deleteinventoryblock) | **DELETE** /availability/block/{blockId} | Remove inventory block|
|[**getAvailabilityCalendar**](#getavailabilitycalendar) | **GET** /availability/calendar | Get availability calendar|
|[**searchAvailability**](#searchavailability) | **POST** /availability/search | Search availability|
|[**updateAvailabilityCalendar**](#updateavailabilitycalendar) | **PUT** /availability/calendar | Update availability calendar (bulk)|

# **createInventoryBlock**
> CreateInventoryBlock201Response createInventoryBlock(createInventoryBlockRequest)

Create an inventory block (for groups, maintenance, etc.)

### Example

```typescript
import {
    AvailabilityApi,
    Configuration,
    CreateInventoryBlockRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new AvailabilityApi(configuration);

let createInventoryBlockRequest: CreateInventoryBlockRequest; //

const { status, data } = await apiInstance.createInventoryBlock(
    createInventoryBlockRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createInventoryBlockRequest** | **CreateInventoryBlockRequest**|  | |


### Return type

**CreateInventoryBlock201Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Block created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteInventoryBlock**
> deleteInventoryBlock()

Remove an existing inventory block

### Example

```typescript
import {
    AvailabilityApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new AvailabilityApi(configuration);

let blockId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteInventoryBlock(
    blockId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **blockId** | [**string**] |  | defaults to undefined|


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
|**204** | Block removed successfully |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAvailabilityCalendar**
> AvailabilityCalendar getAvailabilityCalendar()

Retrieve availability calendar for specified date range

### Example

```typescript
import {
    AvailabilityApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new AvailabilityApi(configuration);

let propertyId: string; // (default to undefined)
let startDate: string; // (default to undefined)
let endDate: string; // (default to undefined)
let unitTypeId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getAvailabilityCalendar(
    propertyId,
    startDate,
    endDate,
    unitTypeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] |  | defaults to undefined|
| **startDate** | [**string**] |  | defaults to undefined|
| **endDate** | [**string**] |  | defaults to undefined|
| **unitTypeId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AvailabilityCalendar**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchAvailability**
> SearchAvailability200Response searchAvailability(searchAvailabilityRequest)

Search for available inventory across properties based on criteria.  This is the primary endpoint for booking engines and search interfaces.  **Performance:** Optimized for sub-200ms response time  **Caching:** Results cached for 5 minutes 

### Example

```typescript
import {
    AvailabilityApi,
    Configuration,
    SearchAvailabilityRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new AvailabilityApi(configuration);

let searchAvailabilityRequest: SearchAvailabilityRequest; //

const { status, data } = await apiInstance.searchAvailability(
    searchAvailabilityRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchAvailabilityRequest** | **SearchAvailabilityRequest**|  | |


### Return type

**SearchAvailability200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Available inventory found |  -  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAvailabilityCalendar**
> UpdateAvailabilityCalendar200Response updateAvailabilityCalendar(updateAvailabilityCalendarRequest)

Bulk update availability for multiple dates

### Example

```typescript
import {
    AvailabilityApi,
    Configuration,
    UpdateAvailabilityCalendarRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new AvailabilityApi(configuration);

let updateAvailabilityCalendarRequest: UpdateAvailabilityCalendarRequest; //

const { status, data } = await apiInstance.updateAvailabilityCalendar(
    updateAvailabilityCalendarRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAvailabilityCalendarRequest** | **UpdateAvailabilityCalendarRequest**|  | |


### Return type

**UpdateAvailabilityCalendar200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully updated |  -  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

