# SystemApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSystemHealth**](#getsystemhealth) | **GET** /system/health | Health check|
|[**getSystemMetrics**](#getsystemmetrics) | **GET** /system/metrics | Get system metrics|
|[**getSystemStatus**](#getsystemstatus) | **GET** /system/status | Get system status|

# **getSystemHealth**
> GetSystemHealth200Response getSystemHealth()

Check system health status

### Example

```typescript
import {
    SystemApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new SystemApi(configuration);

const { status, data } = await apiInstance.getSystemHealth();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSystemHealth200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | System is healthy |  -  |
|**503** | System is unhealthy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSystemMetrics**
> GetSystemMetrics200Response getSystemMetrics()

Retrieve system performance metrics

### Example

```typescript
import {
    SystemApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new SystemApi(configuration);

let metric: string; // (optional) (default to undefined)
let startTime: string; // (optional) (default to undefined)
let endTime: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getSystemMetrics(
    metric,
    startTime,
    endTime
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metric** | [**string**] |  | (optional) defaults to undefined|
| **startTime** | [**string**] |  | (optional) defaults to undefined|
| **endTime** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetSystemMetrics200Response**

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

# **getSystemStatus**
> GetSystemStatus200Response getSystemStatus()

Get overall system status and component health

### Example

```typescript
import {
    SystemApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new SystemApi(configuration);

const { status, data } = await apiInstance.getSystemStatus();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSystemStatus200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

