# BillingApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addFolioAdjustment**](#addfolioadjustment) | **POST** /folios/{folioId}/adjustments | Add adjustment to folio|
|[**addFolioCharge**](#addfoliocharge) | **POST** /folios/{folioId}/charges | Add charge to folio|
|[**addFolioLineItem**](#addfoliolineitem) | **POST** /folios/{folioId}/line-items | Add line item to folio|
|[**batchProcessPayments**](#batchprocesspayments) | **POST** /payments/batch | Batch payment processing|
|[**capturePayment**](#capturepayment) | **POST** /payments/{paymentId}/capture | Capture payment|
|[**closeFolio**](#closefolio) | **POST** /folios/{folioId}/close | Close folio|
|[**createFolio**](#createfolio) | **POST** /folios | Create folio|
|[**createPayment**](#createpayment) | **POST** /payments | Process payment|
|[**disputeFolio**](#disputefolio) | **POST** /folios/{folioId}/dispute | Dispute folio|
|[**getFolio**](#getfolio) | **GET** /folios/{folioId} | Get folio details|
|[**getFolioPDF**](#getfoliopdf) | **GET** /folios/{folioId}/pdf | Download folio PDF|
|[**getPayment**](#getpayment) | **GET** /payments/{paymentId} | Get payment details|
|[**getPaymentReceipt**](#getpaymentreceipt) | **GET** /payments/{paymentId}/receipt | Get payment receipt|
|[**getRevenueReconciliation**](#getrevenuereconciliation) | **GET** /revenue/reconciliation | Get revenue reconciliation|
|[**getRevenueReports**](#getrevenuereports) | **GET** /revenue/reports | Get revenue reports|
|[**listFolios**](#listfolios) | **GET** /folios | List folios|
|[**listPayments**](#listpayments) | **GET** /payments | List payments|
|[**refundPayment**](#refundpayment) | **POST** /payments/{paymentId}/refund | Refund payment|
|[**removeFolioLineItem**](#removefoliolineitem) | **DELETE** /folios/{folioId}/line-items/{itemId} | Remove line item from folio|
|[**reopenFolio**](#reopenfolio) | **POST** /folios/{folioId}/reopen | Reopen folio|

# **addFolioAdjustment**
> LineItem addFolioAdjustment(addFolioAdjustmentRequest)

Add an adjustment (discount, comp, etc.) to a folio

### Example

```typescript
import {
    BillingApi,
    Configuration,
    AddFolioAdjustmentRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let folioId: string; // (default to undefined)
let addFolioAdjustmentRequest: AddFolioAdjustmentRequest; //

const { status, data } = await apiInstance.addFolioAdjustment(
    folioId,
    addFolioAdjustmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addFolioAdjustmentRequest** | **AddFolioAdjustmentRequest**|  | |
| **folioId** | [**string**] |  | defaults to undefined|


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
|**201** | Adjustment added |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addFolioCharge**
> object addFolioCharge(addFolioChargeRequest)

Add a new charge to a guest folio for services, amenities, or incidentals

### Example

```typescript
import {
    BillingApi,
    Configuration,
    AddFolioChargeRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let folioId: string; // (default to undefined)
let addFolioChargeRequest: AddFolioChargeRequest; //

const { status, data } = await apiInstance.addFolioCharge(
    folioId,
    addFolioChargeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addFolioChargeRequest** | **AddFolioChargeRequest**|  | |
| **folioId** | [**string**] |  | defaults to undefined|


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
|**201** | Charge added |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addFolioLineItem**
> LineItem addFolioLineItem(lineItem)

Add a line item to a folio

### Example

```typescript
import {
    BillingApi,
    Configuration,
    LineItem
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let folioId: string; // (default to undefined)
let lineItem: LineItem; //

const { status, data } = await apiInstance.addFolioLineItem(
    folioId,
    lineItem
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lineItem** | **LineItem**|  | |
| **folioId** | [**string**] |  | defaults to undefined|


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
|**201** | Line item added |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batchProcessPayments**
> BatchProcessPayments200Response batchProcessPayments(batchProcessPaymentsRequest)

Process multiple payments in a single batch

### Example

```typescript
import {
    BillingApi,
    Configuration,
    BatchProcessPaymentsRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let batchProcessPaymentsRequest: BatchProcessPaymentsRequest; //

const { status, data } = await apiInstance.batchProcessPayments(
    batchProcessPaymentsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchProcessPaymentsRequest** | **BatchProcessPaymentsRequest**|  | |


### Return type

**BatchProcessPayments200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Batch processed |  -  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **capturePayment**
> Payment capturePayment()

Capture a pre-authorized payment

### Example

```typescript
import {
    BillingApi,
    Configuration,
    CapturePaymentRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let paymentId: string; // (default to undefined)
let capturePaymentRequest: CapturePaymentRequest; // (optional)

const { status, data } = await apiInstance.capturePayment(
    paymentId,
    capturePaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **capturePaymentRequest** | **CapturePaymentRequest**|  | |
| **paymentId** | [**string**] |  | defaults to undefined|


### Return type

**Payment**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment captured |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **closeFolio**
> Folio closeFolio()

Close a folio after final settlement

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let folioId: string; // (default to undefined)

const { status, data } = await apiInstance.closeFolio(
    folioId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folioId** | [**string**] |  | defaults to undefined|


### Return type

**Folio**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folio closed |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFolio**
> object createFolio(body)

Create a new guest folio for billing and charge management during a stay

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let body: object; //

const { status, data } = await apiInstance.createFolio(
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
|**201** | Folio created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPayment**
> object createPayment(createPaymentRequest)

Process a new payment for a folio using credit card, cash, or other payment methods

### Example

```typescript
import {
    BillingApi,
    Configuration,
    CreatePaymentRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let createPaymentRequest: CreatePaymentRequest; //

const { status, data } = await apiInstance.createPayment(
    createPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPaymentRequest** | **CreatePaymentRequest**|  | |


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
|**201** | Payment processed |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disputeFolio**
> Folio disputeFolio(disputeFolioRequest)

Create a dispute for a folio

### Example

```typescript
import {
    BillingApi,
    Configuration,
    DisputeFolioRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let folioId: string; // (default to undefined)
let disputeFolioRequest: DisputeFolioRequest; //

const { status, data } = await apiInstance.disputeFolio(
    folioId,
    disputeFolioRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **disputeFolioRequest** | **DisputeFolioRequest**|  | |
| **folioId** | [**string**] |  | defaults to undefined|


### Return type

**Folio**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dispute created |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolio**
> object getFolio()

Retrieve complete folio details including all charges, payments, adjustments, and current balance

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let folioId: string; // (default to undefined)

const { status, data } = await apiInstance.getFolio(
    folioId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folioId** | [**string**] |  | defaults to undefined|


### Return type

**object**

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

# **getFolioPDF**
> File getFolioPDF()

Download folio as PDF document

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let folioId: string; // (default to undefined)

const { status, data } = await apiInstance.getFolioPDF(
    folioId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folioId** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | PDF document |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPayment**
> object getPayment()

Retrieve complete payment details including amount, method, status, and transaction information

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let paymentId: string; // (default to undefined)

const { status, data } = await apiInstance.getPayment(
    paymentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentId** | [**string**] |  | defaults to undefined|


### Return type

**object**

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

# **getPaymentReceipt**
> File getPaymentReceipt()

Retrieve payment receipt

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let paymentId: string; // (default to undefined)

const { status, data } = await apiInstance.getPaymentReceipt(
    paymentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentId** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRevenueReconciliation**
> GetRevenueReconciliation200Response getRevenueReconciliation()

Retrieve revenue reconciliation data

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let date: string; // (default to undefined)
let propertyId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getRevenueReconciliation(
    date,
    propertyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] |  | defaults to undefined|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetRevenueReconciliation200Response**

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

# **getRevenueReports**
> RevenueReport getRevenueReports()

Retrieve revenue reports with various breakdowns

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let startDate: string; // (default to undefined)
let endDate: string; // (default to undefined)
let propertyId: string; // (optional) (default to undefined)
let groupBy: 'DAY' | 'WEEK' | 'MONTH' | 'PROPERTY' | 'CATEGORY'; // (optional) (default to undefined)

const { status, data } = await apiInstance.getRevenueReports(
    startDate,
    endDate,
    propertyId,
    groupBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startDate** | [**string**] |  | defaults to undefined|
| **endDate** | [**string**] |  | defaults to undefined|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **groupBy** | [**&#39;DAY&#39; | &#39;WEEK&#39; | &#39;MONTH&#39; | &#39;PROPERTY&#39; | &#39;CATEGORY&#39;**]**Array<&#39;DAY&#39; &#124; &#39;WEEK&#39; &#124; &#39;MONTH&#39; &#124; &#39;PROPERTY&#39; &#124; &#39;CATEGORY&#39;>** |  | (optional) defaults to undefined|


### Return type

**RevenueReport**

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

# **listFolios**
> GetGuestStays200Response listFolios()

List all guest folios with filtering by property, guest, status, and date range

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let propertyId: string; // (optional) (default to undefined)
let guestId: string; // (optional) (default to undefined)
let status: 'OPEN' | 'CLOSED' | 'SETTLED'; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listFolios(
    propertyId,
    guestId,
    status,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **guestId** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**&#39;OPEN&#39; | &#39;CLOSED&#39; | &#39;SETTLED&#39;**]**Array<&#39;OPEN&#39; &#124; &#39;CLOSED&#39; &#124; &#39;SETTLED&#39;>** |  | (optional) defaults to undefined|
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

# **listPayments**
> ListPayments200Response listPayments()

List all payments with filtering options

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let folioId: string; // (optional) (default to undefined)
let status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED'; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listPayments(
    folioId,
    status,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folioId** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**&#39;PENDING&#39; | &#39;COMPLETED&#39; | &#39;FAILED&#39; | &#39;REFUNDED&#39;**]**Array<&#39;PENDING&#39; &#124; &#39;COMPLETED&#39; &#124; &#39;FAILED&#39; &#124; &#39;REFUNDED&#39;>** |  | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|


### Return type

**ListPayments200Response**

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

# **refundPayment**
> Payment refundPayment(refundPaymentRequest)

Process a refund for a payment

### Example

```typescript
import {
    BillingApi,
    Configuration,
    RefundPaymentRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let paymentId: string; // (default to undefined)
let refundPaymentRequest: RefundPaymentRequest; //

const { status, data } = await apiInstance.refundPayment(
    paymentId,
    refundPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refundPaymentRequest** | **RefundPaymentRequest**|  | |
| **paymentId** | [**string**] |  | defaults to undefined|


### Return type

**Payment**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Refund processed |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeFolioLineItem**
> removeFolioLineItem()

Remove a line item from a folio

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let folioId: string; // (default to undefined)
let itemId: string; // (default to undefined)

const { status, data } = await apiInstance.removeFolioLineItem(
    folioId,
    itemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folioId** | [**string**] |  | defaults to undefined|
| **itemId** | [**string**] |  | defaults to undefined|


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

# **reopenFolio**
> Folio reopenFolio()

Reopen a closed folio for additional charges

### Example

```typescript
import {
    BillingApi,
    Configuration,
    CancelServiceRequestRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let folioId: string; // (default to undefined)
let cancelServiceRequestRequest: CancelServiceRequestRequest; // (optional)

const { status, data } = await apiInstance.reopenFolio(
    folioId,
    cancelServiceRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelServiceRequestRequest** | **CancelServiceRequestRequest**|  | |
| **folioId** | [**string**] |  | defaults to undefined|


### Return type

**Folio**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folio reopened |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

