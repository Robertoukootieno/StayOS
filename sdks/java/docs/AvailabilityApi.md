# AvailabilityApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createInventoryBlock**](AvailabilityApi.md#createInventoryBlock) | **POST** /availability/block | Block inventory |
| [**deleteInventoryBlock**](AvailabilityApi.md#deleteInventoryBlock) | **DELETE** /availability/block/{blockId} | Remove inventory block |
| [**getAvailabilityCalendar**](AvailabilityApi.md#getAvailabilityCalendar) | **GET** /availability/calendar | Get availability calendar |
| [**searchAvailability**](AvailabilityApi.md#searchAvailability) | **POST** /availability/search | Search availability |
| [**updateAvailabilityCalendar**](AvailabilityApi.md#updateAvailabilityCalendar) | **PUT** /availability/calendar | Update availability calendar (bulk) |


<a id="createInventoryBlock"></a>
# **createInventoryBlock**
> CreateInventoryBlock201Response createInventoryBlock(createInventoryBlockRequest)

Block inventory

Create an inventory block (for groups, maintenance, etc.)

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.AvailabilityApi;

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

    AvailabilityApi apiInstance = new AvailabilityApi(defaultClient);
    CreateInventoryBlockRequest createInventoryBlockRequest = new CreateInventoryBlockRequest(); // CreateInventoryBlockRequest | 
    try {
      CreateInventoryBlock201Response result = apiInstance.createInventoryBlock(createInventoryBlockRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AvailabilityApi#createInventoryBlock");
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
| **createInventoryBlockRequest** | [**CreateInventoryBlockRequest**](CreateInventoryBlockRequest.md)|  | |

### Return type

[**CreateInventoryBlock201Response**](CreateInventoryBlock201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Block created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="deleteInventoryBlock"></a>
# **deleteInventoryBlock**
> deleteInventoryBlock(blockId)

Remove inventory block

Remove an existing inventory block

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.AvailabilityApi;

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

    AvailabilityApi apiInstance = new AvailabilityApi(defaultClient);
    UUID blockId = UUID.randomUUID(); // UUID | 
    try {
      apiInstance.deleteInventoryBlock(blockId);
    } catch (ApiException e) {
      System.err.println("Exception when calling AvailabilityApi#deleteInventoryBlock");
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
| **blockId** | **UUID**|  | |

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Block removed successfully |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="getAvailabilityCalendar"></a>
# **getAvailabilityCalendar**
> AvailabilityCalendar getAvailabilityCalendar(propertyId, startDate, endDate, unitTypeId)

Get availability calendar

Retrieve availability calendar for specified date range

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.AvailabilityApi;

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

    AvailabilityApi apiInstance = new AvailabilityApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | 
    LocalDate startDate = LocalDate.now(); // LocalDate | 
    LocalDate endDate = LocalDate.now(); // LocalDate | 
    UUID unitTypeId = UUID.randomUUID(); // UUID | 
    try {
      AvailabilityCalendar result = apiInstance.getAvailabilityCalendar(propertyId, startDate, endDate, unitTypeId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AvailabilityApi#getAvailabilityCalendar");
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
| **propertyId** | **UUID**|  | |
| **startDate** | **LocalDate**|  | |
| **endDate** | **LocalDate**|  | |
| **unitTypeId** | **UUID**|  | [optional] |

### Return type

[**AvailabilityCalendar**](AvailabilityCalendar.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="searchAvailability"></a>
# **searchAvailability**
> SearchAvailability200Response searchAvailability(searchAvailabilityRequest)

Search availability

Search for available inventory across properties based on criteria.  This is the primary endpoint for booking engines and search interfaces.  **Performance:** Optimized for sub-200ms response time  **Caching:** Results cached for 5 minutes 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.AvailabilityApi;

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

    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    AvailabilityApi apiInstance = new AvailabilityApi(defaultClient);
    SearchAvailabilityRequest searchAvailabilityRequest = new SearchAvailabilityRequest(); // SearchAvailabilityRequest | 
    try {
      SearchAvailability200Response result = apiInstance.searchAvailability(searchAvailabilityRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AvailabilityApi#searchAvailability");
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
| **searchAvailabilityRequest** | [**SearchAvailabilityRequest**](SearchAvailabilityRequest.md)|  | |

### Return type

[**SearchAvailability200Response**](SearchAvailability200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Available inventory found |  -  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="updateAvailabilityCalendar"></a>
# **updateAvailabilityCalendar**
> UpdateAvailabilityCalendar200Response updateAvailabilityCalendar(updateAvailabilityCalendarRequest)

Update availability calendar (bulk)

Bulk update availability for multiple dates

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.AvailabilityApi;

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

    AvailabilityApi apiInstance = new AvailabilityApi(defaultClient);
    UpdateAvailabilityCalendarRequest updateAvailabilityCalendarRequest = new UpdateAvailabilityCalendarRequest(); // UpdateAvailabilityCalendarRequest | 
    try {
      UpdateAvailabilityCalendar200Response result = apiInstance.updateAvailabilityCalendar(updateAvailabilityCalendarRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AvailabilityApi#updateAvailabilityCalendar");
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
| **updateAvailabilityCalendarRequest** | [**UpdateAvailabilityCalendarRequest**](UpdateAvailabilityCalendarRequest.md)|  | |

### Return type

[**UpdateAvailabilityCalendar200Response**](UpdateAvailabilityCalendar200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully updated |  -  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

