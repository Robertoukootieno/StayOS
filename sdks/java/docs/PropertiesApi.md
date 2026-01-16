# PropertiesApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createProperty**](PropertiesApi.md#createProperty) | **POST** /properties | Create property |
| [**deleteProperty**](PropertiesApi.md#deleteProperty) | **DELETE** /properties/{propertyId} | Delete property |
| [**getProperty**](PropertiesApi.md#getProperty) | **GET** /properties/{propertyId} | Get property by ID |
| [**listProperties**](PropertiesApi.md#listProperties) | **GET** /properties | List properties |
| [**replaceInventoryUnit**](PropertiesApi.md#replaceInventoryUnit) | **PUT** /inventory-units/{unitId} | Replace inventory unit (full update) |
| [**replaceProperty**](PropertiesApi.md#replaceProperty) | **PUT** /properties/{propertyId} | Replace property (full update) |
| [**replaceRateStrategy**](PropertiesApi.md#replaceRateStrategy) | **PUT** /rate-strategies/{strategyId} | Replace rate strategy (full update) |
| [**updateInventoryUnit**](PropertiesApi.md#updateInventoryUnit) | **PATCH** /inventory-units/{unitId} | Update inventory unit (partial update) |
| [**updateProperty**](PropertiesApi.md#updateProperty) | **PATCH** /properties/{propertyId} | Update property (partial update) |
| [**updateRateStrategy**](PropertiesApi.md#updateRateStrategy) | **PATCH** /rate-strategies/{strategyId} | Update rate strategy (partial update) |


<a id="createProperty"></a>
# **createProperty**
> Property createProperty(property, idempotencyKey)

Create property

Create a new property. This is typically an administrative operation.  **Authorization:** Requires &#x60;write:properties&#x60; or &#x60;admin:all&#x60; scope  **Idempotency:** Supports idempotency via &#x60;Idempotency-Key&#x60; header 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.PropertiesApi;

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

    PropertiesApi apiInstance = new PropertiesApi(defaultClient);
    Property property = new Property(); // Property | 
    UUID idempotencyKey = UUID.randomUUID(); // UUID | Unique key for idempotent operations (UUID recommended)
    try {
      Property result = apiInstance.createProperty(property, idempotencyKey);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PropertiesApi#createProperty");
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
| **property** | [**Property**](Property.md)|  | |
| **idempotencyKey** | **UUID**| Unique key for idempotent operations (UUID recommended) | [optional] |

### Return type

[**Property**](Property.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Property created successfully |  * Location -  <br>  * X-Request-Id - Unique request identifier for tracing <br>  |
| **400** | Bad request - validation error |  -  |
| **401** | Unauthorized - authentication required |  -  |
| **403** | Forbidden - insufficient permissions |  -  |
| **409** | Conflict - resource state conflict |  -  |
| **500** | Internal server error |  -  |

<a id="deleteProperty"></a>
# **deleteProperty**
> deleteProperty(propertyId)

Delete property

Soft delete a property. Property status changes to CLOSED.  **Warning:** This operation cannot be undone. All future reservations will be cancelled. 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.PropertiesApi;

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

    PropertiesApi apiInstance = new PropertiesApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | Unique property identifier
    try {
      apiInstance.deleteProperty(propertyId);
    } catch (ApiException e) {
      System.err.println("Exception when calling PropertiesApi#deleteProperty");
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
| **409** | Cannot delete property with active reservations |  -  |
| **500** | Internal server error |  -  |

<a id="getProperty"></a>
# **getProperty**
> Property getProperty(propertyId, expand, ifNoneMatch)

Get property by ID

Retrieve detailed information about a specific property

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.PropertiesApi;

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

    PropertiesApi apiInstance = new PropertiesApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | Unique property identifier
    String expand = "property,guest,rateStrategy"; // String | Comma-separated list of related resources to include
    String ifNoneMatch = "ifNoneMatch_example"; // String | ETag for conditional requests
    try {
      Property result = apiInstance.getProperty(propertyId, expand, ifNoneMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PropertiesApi#getProperty");
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
| **expand** | **String**| Comma-separated list of related resources to include | [optional] |
| **ifNoneMatch** | **String**| ETag for conditional requests | [optional] |

### Return type

[**Property**](Property.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  * ETag -  <br>  * X-Request-Id - Unique request identifier for tracing <br>  |
| **304** | Not Modified (cached version is current) |  -  |
| **401** | Unauthorized - authentication required |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="listProperties"></a>
# **listProperties**
> ListProperties200Response listProperties(pageSize, cursor, organizationId, operationalStatus, classification, sortBy, sortOrder, expand)

List properties

Retrieve a paginated list of properties. Supports filtering, sorting, and field expansion.  **Authorization:** Requires &#x60;read:properties&#x60; scope  **Rate Limit:** 100 requests/minute 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.PropertiesApi;

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

    PropertiesApi apiInstance = new PropertiesApi(defaultClient);
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    UUID organizationId = UUID.randomUUID(); // UUID | Filter by organization
    String operationalStatus = "ACTIVE"; // String | Filter by operational status
    String classification = "HOTEL"; // String | Filter by property classification
    String sortBy = "sortBy_example"; // String | Field to sort by
    String sortOrder = "asc"; // String | Sort order
    String expand = "property,guest,rateStrategy"; // String | Comma-separated list of related resources to include
    try {
      ListProperties200Response result = apiInstance.listProperties(pageSize, cursor, organizationId, operationalStatus, classification, sortBy, sortOrder, expand);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PropertiesApi#listProperties");
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
| **organizationId** | **UUID**| Filter by organization | [optional] |
| **operationalStatus** | **String**| Filter by operational status | [optional] [enum: ACTIVE, SUSPENDED, CLOSED] |
| **classification** | **String**| Filter by property classification | [optional] [enum: HOTEL, HOSTEL, RESORT, BOUTIQUE] |
| **sortBy** | **String**| Field to sort by | [optional] |
| **sortOrder** | **String**| Sort order | [optional] [default to asc] [enum: asc, desc] |
| **expand** | **String**| Comma-separated list of related resources to include | [optional] |

### Return type

[**ListProperties200Response**](ListProperties200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Request-Id - Unique request identifier for tracing <br>  |
| **400** | Bad request - validation error |  -  |
| **401** | Unauthorized - authentication required |  -  |
| **429** | Too many requests - rate limit exceeded |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset - Unix timestamp when rate limit resets <br>  * Retry-After - Seconds until rate limit resets <br>  |
| **500** | Internal server error |  -  |

<a id="replaceInventoryUnit"></a>
# **replaceInventoryUnit**
> Object replaceInventoryUnit(unitId, body, ifMatch)

Replace inventory unit (full update)

Replace inventory unit with complete new details including type, status, and physical attributes

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.PropertiesApi;

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

    PropertiesApi apiInstance = new PropertiesApi(defaultClient);
    UUID unitId = UUID.randomUUID(); // UUID | 
    Object body = null; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Object result = apiInstance.replaceInventoryUnit(unitId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PropertiesApi#replaceInventoryUnit");
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
| **unitId** | **UUID**|  | |
| **body** | **Object**|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

### Return type

**Object**

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

<a id="replaceProperty"></a>
# **replaceProperty**
> Property replaceProperty(propertyId, property, ifMatch)

Replace property (full update)

Replace an existing property with a complete new representation. All fields must be provided. For partial updates, use PATCH instead.  **Optimistic Locking:** Use &#x60;If-Match&#x60; header with ETag to prevent conflicts 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.PropertiesApi;

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

    PropertiesApi apiInstance = new PropertiesApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | Unique property identifier
    Property property = new Property(); // Property | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Property result = apiInstance.replaceProperty(propertyId, property, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PropertiesApi#replaceProperty");
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
| **property** | [**Property**](Property.md)|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

### Return type

[**Property**](Property.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully replaced |  * ETag -  <br>  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **412** | Precondition failed - optimistic locking failure |  -  |
| **500** | Internal server error |  -  |

<a id="replaceRateStrategy"></a>
# **replaceRateStrategy**
> RateStrategy replaceRateStrategy(strategyId, rateStrategy, ifMatch)

Replace rate strategy (full update)

Replace rate strategy with complete new pricing rules, restrictions, and yield management settings

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.PropertiesApi;

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

    PropertiesApi apiInstance = new PropertiesApi(defaultClient);
    UUID strategyId = UUID.randomUUID(); // UUID | 
    RateStrategy rateStrategy = new RateStrategy(); // RateStrategy | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      RateStrategy result = apiInstance.replaceRateStrategy(strategyId, rateStrategy, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PropertiesApi#replaceRateStrategy");
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
| **strategyId** | **UUID**|  | |
| **rateStrategy** | [**RateStrategy**](RateStrategy.md)|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

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
| **200** | Successfully replaced |  * ETag -  <br>  |
| **404** | Resource not found |  -  |
| **412** | Precondition failed - optimistic locking failure |  -  |
| **500** | Internal server error |  -  |

<a id="updateInventoryUnit"></a>
# **updateInventoryUnit**
> Object updateInventoryUnit(unitId, body, ifMatch)

Update inventory unit (partial update)

Update specific fields of an inventory unit.  **Common use cases:** - Change unit status (AVAILABLE → MAINTENANCE) - Update room features - Modify floor/location - Update amenities 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.PropertiesApi;

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

    PropertiesApi apiInstance = new PropertiesApi(defaultClient);
    UUID unitId = UUID.randomUUID(); // UUID | 
    Object body = {"status":"MAINTENANCE","maintenanceNotes":"AC repair scheduled"}; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Object result = apiInstance.updateInventoryUnit(unitId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PropertiesApi#updateInventoryUnit");
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
| **unitId** | **UUID**|  | |
| **body** | **Object**|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

### Return type

**Object**

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

<a id="updateProperty"></a>
# **updateProperty**
> Property updateProperty(propertyId, body, ifMatch)

Update property (partial update)

Partially update a property. Only provided fields will be updated. This is the recommended method for most updates.  **Optimistic Locking:** Use &#x60;If-Match&#x60; header with ETag to prevent conflicts  **Example:** Update only the property name and contact email: &#x60;&#x60;&#x60;json {   \&quot;name\&quot;: \&quot;New Property Name\&quot;,   \&quot;contactInfo\&quot;: {     \&quot;email\&quot;: \&quot;newemail@property.com\&quot;   } } &#x60;&#x60;&#x60; 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.PropertiesApi;

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

    PropertiesApi apiInstance = new PropertiesApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | Unique property identifier
    Object body = {"name":"Updated Property Name","contactInfo":{"email":"newemail@example.com"}}; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Property result = apiInstance.updateProperty(propertyId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PropertiesApi#updateProperty");
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
| **body** | **Object**|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

### Return type

[**Property**](Property.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully updated |  * ETag -  <br>  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **412** | Precondition failed - optimistic locking failure |  -  |
| **500** | Internal server error |  -  |

<a id="updateRateStrategy"></a>
# **updateRateStrategy**
> RateStrategy updateRateStrategy(strategyId, body, ifMatch)

Update rate strategy (partial update)

Update specific fields of a rate strategy.  **Common use cases:** - Adjust base rate - Update seasonal modifiers - Change minimum stay requirements - Modify cancellation policy 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.PropertiesApi;

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

    PropertiesApi apiInstance = new PropertiesApi(defaultClient);
    UUID strategyId = UUID.randomUUID(); // UUID | 
    Object body = {"baseRate":{"amount":199.99,"currency":"USD"},"minimumStay":2}; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      RateStrategy result = apiInstance.updateRateStrategy(strategyId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PropertiesApi#updateRateStrategy");
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
| **strategyId** | **UUID**|  | |
| **body** | **Object**|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

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
| **200** | Successfully updated |  * ETag -  <br>  |
| **404** | Resource not found |  -  |
| **412** | Precondition failed - optimistic locking failure |  -  |
| **500** | Internal server error |  -  |

