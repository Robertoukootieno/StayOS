# FoodBeverageApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelFBOrder**](#cancelfborder) | **POST** /fb/orders/{orderId}/cancel | Cancel F&amp;B order|
|[**confirmFBOrder**](#confirmfborder) | **POST** /fb/orders/{orderId}/confirm | Confirm F&amp;B order|
|[**consumeFBInventory**](#consumefbinventory) | **POST** /fb/inventory/{itemId}/consume | Record consumption|
|[**countFBInventory**](#countfbinventory) | **POST** /fb/inventory/count | Perform stock count|
|[**createFBInventoryItem**](#createfbinventoryitem) | **POST** /fb/inventory | Create inventory item|
|[**createFBOrder**](#createfborder) | **POST** /fb/orders | Create F&amp;B order|
|[**createMenuItem**](#createmenuitem) | **POST** /fb/menu | Create menu item|
|[**getFBInventoryItem**](#getfbinventoryitem) | **GET** /fb/inventory/{itemId} | Get inventory item details|
|[**getMenuItem**](#getmenuitem) | **GET** /fb/menu/{itemId} | Get menu item details|
|[**listFBInventory**](#listfbinventory) | **GET** /fb/inventory | List F&amp;B inventory items|
|[**listFBOrders**](#listfborders) | **GET** /fb/orders | List F&amp;B orders|
|[**listMenuItems**](#listmenuitems) | **GET** /fb/menu | List menu items|
|[**markFBItemReady**](#markfbitemready) | **POST** /fb/orders/{orderId}/items/{itemId}/ready | Mark item as ready|
|[**receiveFBInventory**](#receivefbinventory) | **POST** /fb/inventory/{itemId}/receive | Receive stock|
|[**replaceFBOrder**](#replacefborder) | **PUT** /fb/orders/{orderId} | Replace F&amp;B order (full update)|
|[**replaceMenuItem**](#replacemenuitem) | **PUT** /fb/menu/{itemId} | Replace menu item (full update)|
|[**serveFBOrder**](#servefborder) | **POST** /fb/orders/{orderId}/serve | Mark order as served|
|[**updateFBInventoryItem**](#updatefbinventoryitem) | **PUT** /fb/inventory/{itemId} | Update inventory item|
|[**updateFBOrder**](#updatefborder) | **PATCH** /fb/orders/{orderId} | Update F&amp;B order (partial update)|
|[**updateMenuItem**](#updatemenuitem) | **PATCH** /fb/menu/{itemId} | Update menu item (partial update)|
|[**wasteFBInventory**](#wastefbinventory) | **POST** /fb/inventory/{itemId}/waste | Record waste|

# **cancelFBOrder**
> FBOrder cancelFBOrder()

Cancel an F&B order

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration,
    CancelServiceRequestRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let orderId: string; // (default to undefined)
let cancelServiceRequestRequest: CancelServiceRequestRequest; // (optional)

const { status, data } = await apiInstance.cancelFBOrder(
    orderId,
    cancelServiceRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelServiceRequestRequest** | **CancelServiceRequestRequest**|  | |
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**FBOrder**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Order cancelled |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirmFBOrder**
> FBOrder confirmFBOrder()

Confirm receipt and acceptance of an F&B order

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration,
    ConfirmFBOrderRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let orderId: string; // (default to undefined)
let confirmFBOrderRequest: ConfirmFBOrderRequest; // (optional)

const { status, data } = await apiInstance.confirmFBOrder(
    orderId,
    confirmFBOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmFBOrderRequest** | **ConfirmFBOrderRequest**|  | |
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**FBOrder**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Order confirmed |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consumeFBInventory**
> FBInventoryItem consumeFBInventory(receiveFBInventoryRequest)

Record inventory consumption

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration,
    ReceiveFBInventoryRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let itemId: string; // (default to undefined)
let receiveFBInventoryRequest: ReceiveFBInventoryRequest; //

const { status, data } = await apiInstance.consumeFBInventory(
    itemId,
    receiveFBInventoryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **receiveFBInventoryRequest** | **ReceiveFBInventoryRequest**|  | |
| **itemId** | [**string**] |  | defaults to undefined|


### Return type

**FBInventoryItem**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Consumption recorded |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **countFBInventory**
> CountFBInventory200Response countFBInventory(countFBInventoryRequest)

Perform physical inventory stock count

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration,
    CountFBInventoryRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let countFBInventoryRequest: CountFBInventoryRequest; //

const { status, data } = await apiInstance.countFBInventory(
    countFBInventoryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **countFBInventoryRequest** | **CountFBInventoryRequest**|  | |


### Return type

**CountFBInventory200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Stock count completed |  -  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFBInventoryItem**
> FBInventoryItem createFBInventoryItem(fBInventoryItem)

Create a new F&B inventory item

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration,
    FBInventoryItem
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let fBInventoryItem: FBInventoryItem; //

const { status, data } = await apiInstance.createFBInventoryItem(
    fBInventoryItem
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fBInventoryItem** | **FBInventoryItem**|  | |


### Return type

**FBInventoryItem**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Inventory item created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFBOrder**
> object createFBOrder(body)

Create a new F&B order for room service, restaurant, or bar service

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let body: object; //

const { status, data } = await apiInstance.createFBOrder(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


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
|**201** | Order created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createMenuItem**
> MenuItem createMenuItem(menuItem)

Create a new menu item

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration,
    MenuItem
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let menuItem: MenuItem; //

const { status, data } = await apiInstance.createMenuItem(
    menuItem
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **menuItem** | **MenuItem**|  | |


### Return type

**MenuItem**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Menu item created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFBInventoryItem**
> FBInventoryItem getFBInventoryItem()

Retrieve details of a specific F&B inventory item

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let itemId: string; // (default to undefined)

const { status, data } = await apiInstance.getFBInventoryItem(
    itemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **itemId** | [**string**] |  | defaults to undefined|


### Return type

**FBInventoryItem**

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

# **getMenuItem**
> MenuItem getMenuItem()

Retrieve details of a specific menu item

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let itemId: string; // (default to undefined)

const { status, data } = await apiInstance.getMenuItem(
    itemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **itemId** | [**string**] |  | defaults to undefined|


### Return type

**MenuItem**

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

# **listFBInventory**
> ListFBInventory200Response listFBInventory()

List all F&B inventory items with stock levels

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let propertyId: string; // (optional) (default to undefined)
let lowStock: boolean; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listFBInventory(
    propertyId,
    lowStock,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **lowStock** | [**boolean**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|


### Return type

**ListFBInventory200Response**

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

# **listFBOrders**
> GetGuestStays200Response listFBOrders()

List all food & beverage orders with filtering by property, venue, status, and date range

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let propertyId: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listFBOrders(
    propertyId,
    status,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|


### Return type

**GetGuestStays200Response**

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

# **listMenuItems**
> ListMenuItems200Response listMenuItems()

List all menu items with filtering by venue and availability

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let propertyId: string; // (optional) (default to undefined)
let venue: string; // (optional) (default to undefined)
let isAvailable: boolean; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listMenuItems(
    propertyId,
    venue,
    isAvailable,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **venue** | [**string**] |  | (optional) defaults to undefined|
| **isAvailable** | [**boolean**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|


### Return type

**ListMenuItems200Response**

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

# **markFBItemReady**
> FBOrder markFBItemReady()

Mark an order item as ready for delivery

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let orderId: string; // (default to undefined)
let itemId: string; // (default to undefined)

const { status, data } = await apiInstance.markFBItemReady(
    orderId,
    itemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] |  | defaults to undefined|
| **itemId** | [**string**] |  | defaults to undefined|


### Return type

**FBOrder**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Item marked as ready |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **receiveFBInventory**
> FBInventoryItem receiveFBInventory(receiveFBInventoryRequest)

Record receipt of inventory stock

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration,
    ReceiveFBInventoryRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let itemId: string; // (default to undefined)
let receiveFBInventoryRequest: ReceiveFBInventoryRequest; //

const { status, data } = await apiInstance.receiveFBInventory(
    itemId,
    receiveFBInventoryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **receiveFBInventoryRequest** | **ReceiveFBInventoryRequest**|  | |
| **itemId** | [**string**] |  | defaults to undefined|


### Return type

**FBInventoryItem**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Stock received |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceFBOrder**
> object replaceFBOrder(body)

Replace F&B order with complete new order details including items, pricing, and delivery information

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let orderId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceFBOrder(
    orderId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **orderId** | [**string**] |  | defaults to undefined|
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

# **replaceMenuItem**
> object replaceMenuItem(body)

Replace menu item with complete new details including pricing, ingredients, and availability

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let itemId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceMenuItem(
    itemId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **itemId** | [**string**] |  | defaults to undefined|
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

# **serveFBOrder**
> FBOrder serveFBOrder()

Mark an order as delivered/served to guest

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration,
    ServeFBOrderRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let orderId: string; // (default to undefined)
let serveFBOrderRequest: ServeFBOrderRequest; // (optional)

const { status, data } = await apiInstance.serveFBOrder(
    orderId,
    serveFBOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serveFBOrderRequest** | **ServeFBOrderRequest**|  | |
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**FBOrder**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Order marked as served |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFBInventoryItem**
> FBInventoryItem updateFBInventoryItem(fBInventoryItem)

Update F&B inventory item details

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration,
    FBInventoryItem
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let itemId: string; // (default to undefined)
let fBInventoryItem: FBInventoryItem; //

const { status, data } = await apiInstance.updateFBInventoryItem(
    itemId,
    fBInventoryItem
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fBInventoryItem** | **FBInventoryItem**|  | |
| **itemId** | [**string**] |  | defaults to undefined|


### Return type

**FBInventoryItem**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Inventory item updated |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFBOrder**
> object updateFBOrder(body)

Partially update F&B order to modify status, add items, or update delivery details **Common use cases:** | Update specific fields of an F&B order. **Common use cases:** - Update order status - Modify delivery time - Add special instructions - Change order items

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let orderId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateFBOrder(
    orderId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **orderId** | [**string**] |  | defaults to undefined|
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

# **updateMenuItem**
> object updateMenuItem(body)

Partially update menu item to modify pricing, availability, or description **Common use cases:** | Update specific fields of a menu item. **Common use cases:** - Update price - Change availability - Modify description - Update dietary information

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let itemId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateMenuItem(
    itemId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **itemId** | [**string**] |  | defaults to undefined|
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

# **wasteFBInventory**
> FBInventoryItem wasteFBInventory(wasteFBInventoryRequest)

Record inventory waste

### Example

```typescript
import {
    FoodBeverageApi,
    Configuration,
    WasteFBInventoryRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FoodBeverageApi(configuration);

let itemId: string; // (default to undefined)
let wasteFBInventoryRequest: WasteFBInventoryRequest; //

const { status, data } = await apiInstance.wasteFBInventory(
    itemId,
    wasteFBInventoryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **wasteFBInventoryRequest** | **WasteFBInventoryRequest**|  | |
| **itemId** | [**string**] |  | defaults to undefined|


### Return type

**FBInventoryItem**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Waste recorded |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

