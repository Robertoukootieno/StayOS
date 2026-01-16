# WebhooksApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWebhook**](#createwebhook) | **POST** /webhooks | Create webhook|
|[**deleteWebhook**](#deletewebhook) | **DELETE** /webhooks/{webhookId} | Delete webhook|
|[**getWebhook**](#getwebhook) | **GET** /webhooks/{webhookId} | Get webhook details|
|[**getWebhookDeliveries**](#getwebhookdeliveries) | **GET** /webhooks/{webhookId}/deliveries | Get webhook deliveries|
|[**listWebhooks**](#listwebhooks) | **GET** /webhooks | List webhooks|
|[**replaceWebhook**](#replacewebhook) | **PUT** /webhooks/{webhookId} | Replace webhook configuration (full update)|
|[**testWebhook**](#testwebhook) | **POST** /webhooks/{webhookId}/test | Test webhook|
|[**updateWebhook**](#updatewebhook) | **PATCH** /webhooks/{webhookId} | Update webhook configuration (partial update)|

# **createWebhook**
> object createWebhook(createWebhookRequest)

Create a new webhook subscription for real-time event notifications

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    CreateWebhookRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let createWebhookRequest: CreateWebhookRequest; //

const { status, data } = await apiInstance.createWebhook(
    createWebhookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWebhookRequest** | **CreateWebhookRequest**|  | |


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
|**201** | Webhook created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWebhook**
> deleteWebhook()

Delete a webhook subscription

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteWebhook(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] |  | defaults to undefined|


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
|**204** | Webhook deleted |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhook**
> Webhook getWebhook()

Retrieve details of a specific webhook

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; // (default to undefined)

const { status, data } = await apiInstance.getWebhook(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] |  | defaults to undefined|


### Return type

**Webhook**

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

# **getWebhookDeliveries**
> GetWebhookDeliveries200Response getWebhookDeliveries()

Retrieve delivery history for a webhook

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; // (default to undefined)
let status: 'SUCCESS' | 'FAILED' | 'PENDING'; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.getWebhookDeliveries(
    webhookId,
    status,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] |  | defaults to undefined|
| **status** | [**&#39;SUCCESS&#39; | &#39;FAILED&#39; | &#39;PENDING&#39;**]**Array<&#39;SUCCESS&#39; &#124; &#39;FAILED&#39; &#124; &#39;PENDING&#39;>** |  | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|


### Return type

**GetWebhookDeliveries200Response**

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

# **listWebhooks**
> GetGuestStays200Response listWebhooks()

List all configured webhooks with subscription details and delivery status

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let enabled: boolean; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listWebhooks(
    enabled,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **enabled** | [**boolean**] |  | (optional) defaults to undefined|
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

# **replaceWebhook**
> object replaceWebhook(body)

Replace webhook configuration with complete new settings including URL, events, and authentication

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceWebhook(
    webhookId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **webhookId** | [**string**] |  | defaults to undefined|
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

# **testWebhook**
> TestWebhook200Response testWebhook()

Send a test event to the webhook endpoint

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; // (default to undefined)

const { status, data } = await apiInstance.testWebhook(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] |  | defaults to undefined|


### Return type

**TestWebhook200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Test event sent successfully |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebhook**
> object updateWebhook(body)

Update specific fields of a webhook configuration.  **Common use cases:** - Update webhook URL - Change event subscriptions - Modify retry settings - Update authentication 

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateWebhook(
    webhookId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **webhookId** | [**string**] |  | defaults to undefined|
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

