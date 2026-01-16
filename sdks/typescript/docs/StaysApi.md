# StaysApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addStayCharge**](#addstaycharge) | **POST** /stays/{stayId}/charges | Add incidental charge|
|[**checkoutStay**](#checkoutstay) | **POST** /stays/{stayId}/checkout | Check-out guest|
|[**createStay**](#createstay) | **POST** /stays | Create stay (check-in)|
|[**deactivateKeyCard**](#deactivatekeycard) | **DELETE** /stays/{stayId}/key-cards/{cardId} | Deactivate key card|
|[**extendStay**](#extendstay) | **POST** /stays/{stayId}/extend | Extend stay|
|[**getStay**](#getstay) | **GET** /stays/{stayId} | Get stay details|
|[**issueKeyCard**](#issuekeycard) | **POST** /stays/{stayId}/key-cards | Issue key card|
|[**listStays**](#liststays) | **GET** /stays | List active stays|
|[**replaceStay**](#replacestay) | **PUT** /stays/{stayId} | Replace stay (full update)|
|[**updateStay**](#updatestay) | **PATCH** /stays/{stayId} | Update stay (partial update)|

# **addStayCharge**
> LineItem addStayCharge(lineItem)

Add an incidental charge to the stay

### Example

```typescript
import {
    StaysApi,
    Configuration,
    LineItem
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new StaysApi(configuration);

let stayId: string; // (default to undefined)
let lineItem: LineItem; //

const { status, data } = await apiInstance.addStayCharge(
    stayId,
    lineItem
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lineItem** | **LineItem**|  | |
| **stayId** | [**string**] |  | defaults to undefined|


### Return type

**LineItem**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Charge added |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkoutStay**
> Stay checkoutStay()

Process guest checkout

### Example

```typescript
import {
    StaysApi,
    Configuration,
    CheckoutStayRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new StaysApi(configuration);

let stayId: string; // (default to undefined)
let checkoutStayRequest: CheckoutStayRequest; // (optional)

const { status, data } = await apiInstance.checkoutStay(
    stayId,
    checkoutStayRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkoutStayRequest** | **CheckoutStayRequest**|  | |
| **stayId** | [**string**] |  | defaults to undefined|


### Return type

**Stay**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Checkout successful |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createStay**
> Stay createStay(stay)

Create a new stay when guest checks in

### Example

```typescript
import {
    StaysApi,
    Configuration,
    Stay
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new StaysApi(configuration);

let stay: Stay; //

const { status, data } = await apiInstance.createStay(
    stay
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stay** | **Stay**|  | |


### Return type

**Stay**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Stay created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivateKeyCard**
> deactivateKeyCard()

Deactivate a key card

### Example

```typescript
import {
    StaysApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new StaysApi(configuration);

let stayId: string; // (default to undefined)
let cardId: string; // (default to undefined)

const { status, data } = await apiInstance.deactivateKeyCard(
    stayId,
    cardId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stayId** | [**string**] |  | defaults to undefined|
| **cardId** | [**string**] |  | defaults to undefined|


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
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extendStay**
> Stay extendStay(extendStayRequest)

Extend guest stay to a new checkout date

### Example

```typescript
import {
    StaysApi,
    Configuration,
    ExtendStayRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new StaysApi(configuration);

let stayId: string; // (default to undefined)
let extendStayRequest: ExtendStayRequest; //

const { status, data } = await apiInstance.extendStay(
    stayId,
    extendStayRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **extendStayRequest** | **ExtendStayRequest**|  | |
| **stayId** | [**string**] |  | defaults to undefined|


### Return type

**Stay**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Stay extended |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStay**
> Stay getStay()

Retrieve details of a specific stay

### Example

```typescript
import {
    StaysApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new StaysApi(configuration);

let stayId: string; // (default to undefined)

const { status, data } = await apiInstance.getStay(
    stayId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stayId** | [**string**] |  | defaults to undefined|


### Return type

**Stay**

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

# **issueKeyCard**
> KeyCard issueKeyCard()

Issue a new key card for the stay

### Example

```typescript
import {
    StaysApi,
    Configuration,
    KeyCard
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new StaysApi(configuration);

let stayId: string; // (default to undefined)
let keyCard: KeyCard; // (optional)

const { status, data } = await apiInstance.issueKeyCard(
    stayId,
    keyCard
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **keyCard** | **KeyCard**|  | |
| **stayId** | [**string**] |  | defaults to undefined|


### Return type

**KeyCard**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Key card issued |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listStays**
> ListStays200Response listStays()

Retrieve all active guest stays

### Example

```typescript
import {
    StaysApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new StaysApi(configuration);

let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)
let propertyId: string; // (optional) (default to undefined)
let status: 'CHECKED_IN' | 'IN_HOUSE' | 'CHECKED_OUT'; // (optional) (default to undefined)

const { status, data } = await apiInstance.listStays(
    pageSize,
    cursor,
    propertyId,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**&#39;CHECKED_IN&#39; | &#39;IN_HOUSE&#39; | &#39;CHECKED_OUT&#39;**]**Array<&#39;CHECKED_IN&#39; &#124; &#39;IN_HOUSE&#39; &#124; &#39;CHECKED_OUT&#39;>** |  | (optional) defaults to undefined|


### Return type

**ListStays200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceStay**
> Stay replaceStay(stay)

Replace stay with complete new details

### Example

```typescript
import {
    StaysApi,
    Configuration,
    Stay
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new StaysApi(configuration);

let stayId: string; // (default to undefined)
let stay: Stay; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceStay(
    stayId,
    stay,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stay** | **Stay**|  | |
| **stayId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**Stay**

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

# **updateStay**
> Stay updateStay(body)

Update specific fields of a stay

### Example

```typescript
import {
    StaysApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new StaysApi(configuration);

let stayId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateStay(
    stayId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **stayId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**Stay**

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

