# ProcurementApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**approvePurchaseOrder**](#approvepurchaseorder) | **POST** /procurement/purchase-orders/{poId}/approve | Approve purchase order|
|[**createPurchaseOrder**](#createpurchaseorder) | **POST** /procurement/purchase-orders | Create purchase order|
|[**createSupplier**](#createsupplier) | **POST** /procurement/suppliers | Create supplier|
|[**getSupplier**](#getsupplier) | **GET** /procurement/suppliers/{supplierId} | Get supplier details|
|[**getSupplierPerformance**](#getsupplierperformance) | **GET** /procurement/suppliers/{supplierId}/performance | Get supplier performance|
|[**invoicePurchaseOrder**](#invoicepurchaseorder) | **POST** /procurement/purchase-orders/{poId}/invoice | Record invoice for purchase order|
|[**listPurchaseOrders**](#listpurchaseorders) | **GET** /procurement/purchase-orders | List purchase orders|
|[**listSuppliers**](#listsuppliers) | **GET** /procurement/suppliers | List suppliers|
|[**receivePurchaseOrder**](#receivepurchaseorder) | **POST** /procurement/purchase-orders/{poId}/receive | Receive purchase order|
|[**replacePurchaseOrder**](#replacepurchaseorder) | **PUT** /procurement/purchase-orders/{poId} | Replace purchase order (full update)|
|[**replaceSupplier**](#replacesupplier) | **PUT** /procurement/suppliers/{supplierId} | Replace supplier (full update)|
|[**submitPurchaseOrder**](#submitpurchaseorder) | **POST** /procurement/purchase-orders/{poId}/submit | Submit purchase order|
|[**updatePurchaseOrder**](#updatepurchaseorder) | **PATCH** /procurement/purchase-orders/{poId} | Update purchase order (partial update)|
|[**updateSupplier**](#updatesupplier) | **PATCH** /procurement/suppliers/{supplierId} | Update supplier (partial update)|

# **approvePurchaseOrder**
> PurchaseOrder approvePurchaseOrder()

Approve a purchase order for processing

### Example

```typescript
import {
    ProcurementApi,
    Configuration,
    ApprovePurchaseOrderRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ProcurementApi(configuration);

let poId: string; // (default to undefined)
let approvePurchaseOrderRequest: ApprovePurchaseOrderRequest; // (optional)

const { status, data } = await apiInstance.approvePurchaseOrder(
    poId,
    approvePurchaseOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **approvePurchaseOrderRequest** | **ApprovePurchaseOrderRequest**|  | |
| **poId** | [**string**] |  | defaults to undefined|


### Return type

**PurchaseOrder**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Purchase order approved |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPurchaseOrder**
> object createPurchaseOrder(body)

Create a new purchase order for supplies, equipment, or services

### Example

```typescript
import {
    ProcurementApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ProcurementApi(configuration);

let body: object; //

const { status, data } = await apiInstance.createPurchaseOrder(
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
|**201** | Purchase order created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createSupplier**
> Supplier createSupplier(supplier)

Create a new supplier

### Example

```typescript
import {
    ProcurementApi,
    Configuration,
    Supplier
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ProcurementApi(configuration);

let supplier: Supplier; //

const { status, data } = await apiInstance.createSupplier(
    supplier
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **supplier** | **Supplier**|  | |


### Return type

**Supplier**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Supplier created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSupplier**
> Supplier getSupplier()

Retrieve details of a specific supplier

### Example

```typescript
import {
    ProcurementApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ProcurementApi(configuration);

let supplierId: string; // (default to undefined)

const { status, data } = await apiInstance.getSupplier(
    supplierId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **supplierId** | [**string**] |  | defaults to undefined|


### Return type

**Supplier**

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

# **getSupplierPerformance**
> SupplierPerformance getSupplierPerformance()

Get performance metrics for a supplier

### Example

```typescript
import {
    ProcurementApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ProcurementApi(configuration);

let supplierId: string; // (default to undefined)
let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getSupplierPerformance(
    supplierId,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **supplierId** | [**string**] |  | defaults to undefined|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SupplierPerformance**

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

# **invoicePurchaseOrder**
> PurchaseOrder invoicePurchaseOrder(invoicePurchaseOrderRequest)

Record supplier invoice for purchase order

### Example

```typescript
import {
    ProcurementApi,
    Configuration,
    InvoicePurchaseOrderRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ProcurementApi(configuration);

let poId: string; // (default to undefined)
let invoicePurchaseOrderRequest: InvoicePurchaseOrderRequest; //

const { status, data } = await apiInstance.invoicePurchaseOrder(
    poId,
    invoicePurchaseOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invoicePurchaseOrderRequest** | **InvoicePurchaseOrderRequest**|  | |
| **poId** | [**string**] |  | defaults to undefined|


### Return type

**PurchaseOrder**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Invoice recorded |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPurchaseOrders**
> GetGuestStays200Response listPurchaseOrders()

List all purchase orders with filtering by supplier, status, property, and date range

### Example

```typescript
import {
    ProcurementApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ProcurementApi(configuration);

let propertyId: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listPurchaseOrders(
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

# **listSuppliers**
> ListSuppliers200Response listSuppliers()

List all suppliers with filtering and search

### Example

```typescript
import {
    ProcurementApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ProcurementApi(configuration);

let status: 'ACTIVE' | 'INACTIVE'; // (optional) (default to undefined)
let category: string; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listSuppliers(
    status,
    category,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | [**&#39;ACTIVE&#39; | &#39;INACTIVE&#39;**]**Array<&#39;ACTIVE&#39; &#124; &#39;INACTIVE&#39;>** |  | (optional) defaults to undefined|
| **category** | [**string**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|


### Return type

**ListSuppliers200Response**

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

# **receivePurchaseOrder**
> PurchaseOrder receivePurchaseOrder(receivePurchaseOrderRequest)

Record receipt of goods from purchase order

### Example

```typescript
import {
    ProcurementApi,
    Configuration,
    ReceivePurchaseOrderRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ProcurementApi(configuration);

let poId: string; // (default to undefined)
let receivePurchaseOrderRequest: ReceivePurchaseOrderRequest; //

const { status, data } = await apiInstance.receivePurchaseOrder(
    poId,
    receivePurchaseOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **receivePurchaseOrderRequest** | **ReceivePurchaseOrderRequest**|  | |
| **poId** | [**string**] |  | defaults to undefined|


### Return type

**PurchaseOrder**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Receipt recorded |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replacePurchaseOrder**
> object replacePurchaseOrder(body)

Replace purchase order with complete new details including items, quantities, and delivery information

### Example

```typescript
import {
    ProcurementApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ProcurementApi(configuration);

let poId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replacePurchaseOrder(
    poId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **poId** | [**string**] |  | defaults to undefined|
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

# **replaceSupplier**
> object replaceSupplier(body)

Replace supplier information with complete new details including contact, terms, and product catalog

### Example

```typescript
import {
    ProcurementApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ProcurementApi(configuration);

let supplierId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceSupplier(
    supplierId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **supplierId** | [**string**] |  | defaults to undefined|
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

# **submitPurchaseOrder**
> PurchaseOrder submitPurchaseOrder()

Submit a purchase order to supplier

### Example

```typescript
import {
    ProcurementApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ProcurementApi(configuration);

let poId: string; // (default to undefined)

const { status, data } = await apiInstance.submitPurchaseOrder(
    poId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **poId** | [**string**] |  | defaults to undefined|


### Return type

**PurchaseOrder**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Purchase order submitted |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePurchaseOrder**
> object updatePurchaseOrder(body)

Partially update purchase order to modify status, quantities, or delivery details **Common use cases:** | Update specific fields of a purchase order. **Common use cases:** - Update delivery date - Change PO status - Add notes - Modify payment terms

### Example

```typescript
import {
    ProcurementApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ProcurementApi(configuration);

let poId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updatePurchaseOrder(
    poId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **poId** | [**string**] |  | defaults to undefined|
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

# **updateSupplier**
> object updateSupplier(body)

Partially update supplier information to modify contact details, terms, or status **Common use cases:** | Update specific fields of a supplier. **Common use cases:** - Update contact information - Change payment terms - Modify supplier status - Update rating

### Example

```typescript
import {
    ProcurementApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ProcurementApi(configuration);

let supplierId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateSupplier(
    supplierId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **supplierId** | [**string**] |  | defaults to undefined|
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

