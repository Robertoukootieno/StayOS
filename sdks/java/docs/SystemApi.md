# SystemApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSystemHealth**](SystemApi.md#getSystemHealth) | **GET** /system/health | Health check |
| [**getSystemMetrics**](SystemApi.md#getSystemMetrics) | **GET** /system/metrics | Get system metrics |
| [**getSystemStatus**](SystemApi.md#getSystemStatus) | **GET** /system/status | Get system status |


<a id="getSystemHealth"></a>
# **getSystemHealth**
> GetSystemHealth200Response getSystemHealth()

Health check

Check system health status

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.models.*;
import com.stayos.api.SystemApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");

    SystemApi apiInstance = new SystemApi(defaultClient);
    try {
      GetSystemHealth200Response result = apiInstance.getSystemHealth();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SystemApi#getSystemHealth");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetSystemHealth200Response**](GetSystemHealth200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | System is healthy |  -  |
| **503** | System is unhealthy |  -  |

<a id="getSystemMetrics"></a>
# **getSystemMetrics**
> GetSystemMetrics200Response getSystemMetrics(metric, startTime, endTime)

Get system metrics

Retrieve system performance metrics

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.SystemApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");
    
    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    SystemApi apiInstance = new SystemApi(defaultClient);
    String metric = "metric_example"; // String | 
    OffsetDateTime startTime = OffsetDateTime.now(); // OffsetDateTime | 
    OffsetDateTime endTime = OffsetDateTime.now(); // OffsetDateTime | 
    try {
      GetSystemMetrics200Response result = apiInstance.getSystemMetrics(metric, startTime, endTime);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SystemApi#getSystemMetrics");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **metric** | **String**|  | [optional] |
| **startTime** | **OffsetDateTime**|  | [optional] |
| **endTime** | **OffsetDateTime**|  | [optional] |

### Return type

[**GetSystemMetrics200Response**](GetSystemMetrics200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **500** | Internal server error |  -  |

<a id="getSystemStatus"></a>
# **getSystemStatus**
> GetSystemStatus200Response getSystemStatus()

Get system status

Get overall system status and component health

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.models.*;
import com.stayos.api.SystemApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");

    SystemApi apiInstance = new SystemApi(defaultClient);
    try {
      GetSystemStatus200Response result = apiInstance.getSystemStatus();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SystemApi#getSystemStatus");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetSystemStatus200Response**](GetSystemStatus200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **500** | Internal server error |  -  |

