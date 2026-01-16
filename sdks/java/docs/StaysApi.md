# StaysApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addStayCharge**](StaysApi.md#addStayCharge) | **POST** /stays/{stayId}/charges | Add incidental charge |
| [**checkoutStay**](StaysApi.md#checkoutStay) | **POST** /stays/{stayId}/checkout | Check-out guest |
| [**createStay**](StaysApi.md#createStay) | **POST** /stays | Create stay (check-in) |
| [**deactivateKeyCard**](StaysApi.md#deactivateKeyCard) | **DELETE** /stays/{stayId}/key-cards/{cardId} | Deactivate key card |
| [**extendStay**](StaysApi.md#extendStay) | **POST** /stays/{stayId}/extend | Extend stay |
| [**getStay**](StaysApi.md#getStay) | **GET** /stays/{stayId} | Get stay details |
| [**issueKeyCard**](StaysApi.md#issueKeyCard) | **POST** /stays/{stayId}/key-cards | Issue key card |
| [**listStays**](StaysApi.md#listStays) | **GET** /stays | List active stays |
| [**replaceStay**](StaysApi.md#replaceStay) | **PUT** /stays/{stayId} | Replace stay (full update) |
| [**updateStay**](StaysApi.md#updateStay) | **PATCH** /stays/{stayId} | Update stay (partial update) |


<a id="addStayCharge"></a>
# **addStayCharge**
> LineItem addStayCharge(stayId, lineItem)

Add incidental charge

Add an incidental charge to the stay

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.StaysApi;

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

    StaysApi apiInstance = new StaysApi(defaultClient);
    UUID stayId = UUID.randomUUID(); // UUID | 
    LineItem lineItem = new LineItem(); // LineItem | 
    try {
      LineItem result = apiInstance.addStayCharge(stayId, lineItem);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StaysApi#addStayCharge");
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
| **stayId** | **UUID**|  | |
| **lineItem** | [**LineItem**](LineItem.md)|  | |

### Return type

[**LineItem**](LineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Charge added |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="checkoutStay"></a>
# **checkoutStay**
> Stay checkoutStay(stayId, checkoutStayRequest)

Check-out guest

Process guest checkout

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.StaysApi;

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

    StaysApi apiInstance = new StaysApi(defaultClient);
    UUID stayId = UUID.randomUUID(); // UUID | 
    CheckoutStayRequest checkoutStayRequest = new CheckoutStayRequest(); // CheckoutStayRequest | 
    try {
      Stay result = apiInstance.checkoutStay(stayId, checkoutStayRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StaysApi#checkoutStay");
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
| **stayId** | **UUID**|  | |
| **checkoutStayRequest** | [**CheckoutStayRequest**](CheckoutStayRequest.md)|  | [optional] |

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Checkout successful |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="createStay"></a>
# **createStay**
> Stay createStay(stay)

Create stay (check-in)

Create a new stay when guest checks in

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.StaysApi;

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

    StaysApi apiInstance = new StaysApi(defaultClient);
    Stay stay = new Stay(); // Stay | 
    try {
      Stay result = apiInstance.createStay(stay);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StaysApi#createStay");
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
| **stay** | [**Stay**](Stay.md)|  | |

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Stay created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="deactivateKeyCard"></a>
# **deactivateKeyCard**
> deactivateKeyCard(stayId, cardId)

Deactivate key card

Deactivate a key card

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.StaysApi;

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

    StaysApi apiInstance = new StaysApi(defaultClient);
    UUID stayId = UUID.randomUUID(); // UUID | 
    UUID cardId = UUID.randomUUID(); // UUID | 
    try {
      apiInstance.deactivateKeyCard(stayId, cardId);
    } catch (ApiException e) {
      System.err.println("Exception when calling StaysApi#deactivateKeyCard");
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
| **stayId** | **UUID**|  | |
| **cardId** | **UUID**|  | |

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
| **204** | Successful operation with no content |  * X-Request-Id - Unique request identifier for tracing <br>  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="extendStay"></a>
# **extendStay**
> Stay extendStay(stayId, extendStayRequest)

Extend stay

Extend guest stay to a new checkout date

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.StaysApi;

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

    StaysApi apiInstance = new StaysApi(defaultClient);
    UUID stayId = UUID.randomUUID(); // UUID | 
    ExtendStayRequest extendStayRequest = new ExtendStayRequest(); // ExtendStayRequest | 
    try {
      Stay result = apiInstance.extendStay(stayId, extendStayRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StaysApi#extendStay");
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
| **stayId** | **UUID**|  | |
| **extendStayRequest** | [**ExtendStayRequest**](ExtendStayRequest.md)|  | |

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stay extended |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="getStay"></a>
# **getStay**
> Stay getStay(stayId)

Get stay details

Retrieve details of a specific stay

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.StaysApi;

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

    StaysApi apiInstance = new StaysApi(defaultClient);
    UUID stayId = UUID.randomUUID(); // UUID | 
    try {
      Stay result = apiInstance.getStay(stayId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StaysApi#getStay");
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
| **stayId** | **UUID**|  | |

### Return type

[**Stay**](Stay.md)

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

<a id="issueKeyCard"></a>
# **issueKeyCard**
> KeyCard issueKeyCard(stayId, keyCard)

Issue key card

Issue a new key card for the stay

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.StaysApi;

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

    StaysApi apiInstance = new StaysApi(defaultClient);
    UUID stayId = UUID.randomUUID(); // UUID | 
    KeyCard keyCard = new KeyCard(); // KeyCard | 
    try {
      KeyCard result = apiInstance.issueKeyCard(stayId, keyCard);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StaysApi#issueKeyCard");
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
| **stayId** | **UUID**|  | |
| **keyCard** | [**KeyCard**](KeyCard.md)|  | [optional] |

### Return type

[**KeyCard**](KeyCard.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Key card issued |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="listStays"></a>
# **listStays**
> ListStays200Response listStays(pageSize, cursor, propertyId, status)

List active stays

Retrieve all active guest stays

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.StaysApi;

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

    StaysApi apiInstance = new StaysApi(defaultClient);
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    UUID propertyId = UUID.randomUUID(); // UUID | 
    String status = "CHECKED_IN"; // String | 
    try {
      ListStays200Response result = apiInstance.listStays(pageSize, cursor, propertyId, status);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StaysApi#listStays");
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
| **pageSize** | **Integer**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **String**| Cursor for pagination (opaque token) | [optional] |
| **propertyId** | **UUID**|  | [optional] |
| **status** | **String**|  | [optional] [enum: CHECKED_IN, IN_HOUSE, CHECKED_OUT] |

### Return type

[**ListStays200Response**](ListStays200Response.md)

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

<a id="replaceStay"></a>
# **replaceStay**
> Stay replaceStay(stayId, stay, ifMatch)

Replace stay (full update)

Replace stay with complete new details

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.StaysApi;

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

    StaysApi apiInstance = new StaysApi(defaultClient);
    UUID stayId = UUID.randomUUID(); // UUID | 
    Stay stay = new Stay(); // Stay | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Stay result = apiInstance.replaceStay(stayId, stay, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StaysApi#replaceStay");
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
| **stayId** | **UUID**|  | |
| **stay** | [**Stay**](Stay.md)|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully replaced |  * ETag -  <br>  |
| **404** | Resource not found |  -  |
| **412** | Precondition failed - optimistic locking failure |  -  |
| **500** | Internal server error |  -  |

<a id="updateStay"></a>
# **updateStay**
> Stay updateStay(stayId, body, ifMatch)

Update stay (partial update)

Update specific fields of a stay

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.StaysApi;

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

    StaysApi apiInstance = new StaysApi(defaultClient);
    UUID stayId = UUID.randomUUID(); // UUID | 
    Object body = null; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Stay result = apiInstance.updateStay(stayId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StaysApi#updateStay");
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
| **stayId** | **UUID**|  | |
| **body** | **Object**|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully updated |  * ETag -  <br>  |
| **404** | Resource not found |  -  |
| **412** | Precondition failed - optimistic locking failure |  -  |
| **500** | Internal server error |  -  |

