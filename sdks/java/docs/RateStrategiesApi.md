# RateStrategiesApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createRateStrategy**](RateStrategiesApi.md#createRateStrategy) | **POST** /properties/{propertyId}/rate-strategies | Create rate strategy |
| [**listRateStrategies**](RateStrategiesApi.md#listRateStrategies) | **GET** /properties/{propertyId}/rate-strategies | List rate strategies |


<a id="createRateStrategy"></a>
# **createRateStrategy**
> RateStrategy createRateStrategy(propertyId, rateStrategy)

Create rate strategy

Create a new pricing strategy for the property

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.RateStrategiesApi;

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

    RateStrategiesApi apiInstance = new RateStrategiesApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | Unique property identifier
    RateStrategy rateStrategy = new RateStrategy(); // RateStrategy | 
    try {
      RateStrategy result = apiInstance.createRateStrategy(propertyId, rateStrategy);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RateStrategiesApi#createRateStrategy");
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
| **propertyId** | **UUID**| Unique property identifier | |
| **rateStrategy** | [**RateStrategy**](RateStrategy.md)|  | |

### Return type

[**RateStrategy**](RateStrategy.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Rate strategy created successfully |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="listRateStrategies"></a>
# **listRateStrategies**
> ListRateStrategies200Response listRateStrategies(propertyId, pageSize, strategyType, isActive)

List rate strategies

Retrieve all rate strategies for a property

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.RateStrategiesApi;

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

    RateStrategiesApi apiInstance = new RateStrategiesApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | Unique property identifier
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String strategyType = "STANDARD"; // String | Filter by strategy type
    Boolean isActive = true; // Boolean | Filter by active status
    try {
      ListRateStrategies200Response result = apiInstance.listRateStrategies(propertyId, pageSize, strategyType, isActive);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RateStrategiesApi#listRateStrategies");
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
| **propertyId** | **UUID**| Unique property identifier | |
| **pageSize** | **Integer**| Number of items per page (max 100) | [optional] [default to 20] |
| **strategyType** | **String**| Filter by strategy type | [optional] [enum: STANDARD, DYNAMIC, PROMOTIONAL, CORPORATE, GROUP] |
| **isActive** | **Boolean**| Filter by active status | [optional] |

### Return type

[**ListRateStrategies200Response**](ListRateStrategies200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

