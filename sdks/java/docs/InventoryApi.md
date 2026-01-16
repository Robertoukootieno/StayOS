# InventoryApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createInventoryUnit**](InventoryApi.md#createInventoryUnit) | **POST** /properties/{propertyId}/inventory-units | Create inventory unit |
| [**createUnitType**](InventoryApi.md#createUnitType) | **POST** /properties/{propertyId}/unit-types | Create unit type |
| [**getUnitType**](InventoryApi.md#getUnitType) | **GET** /unit-types/{unitTypeId} | Get unit type details |
| [**listInventoryUnits**](InventoryApi.md#listInventoryUnits) | **GET** /properties/{propertyId}/inventory-units | List inventory units for property |
| [**listUnitTypes**](InventoryApi.md#listUnitTypes) | **GET** /properties/{propertyId}/unit-types | List unit types |
| [**replaceUnitType**](InventoryApi.md#replaceUnitType) | **PUT** /unit-types/{unitTypeId} | Replace unit type (full update) |
| [**updateUnitType**](InventoryApi.md#updateUnitType) | **PATCH** /unit-types/{unitTypeId} | Update unit type (partial update) |


<a id="createInventoryUnit"></a>
# **createInventoryUnit**
> InventoryUnit createInventoryUnit(propertyId, inventoryUnit, idempotencyKey)

Create inventory unit

Add a new inventory unit to the property

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.InventoryApi;

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

    InventoryApi apiInstance = new InventoryApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | Unique property identifier
    InventoryUnit inventoryUnit = new InventoryUnit(); // InventoryUnit | 
    UUID idempotencyKey = UUID.randomUUID(); // UUID | Unique key for idempotent operations (UUID recommended)
    try {
      InventoryUnit result = apiInstance.createInventoryUnit(propertyId, inventoryUnit, idempotencyKey);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InventoryApi#createInventoryUnit");
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
| **inventoryUnit** | [**InventoryUnit**](InventoryUnit.md)|  | |
| **idempotencyKey** | **UUID**| Unique key for idempotent operations (UUID recommended) | [optional] |

### Return type

[**InventoryUnit**](InventoryUnit.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Inventory unit created successfully |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **409** | Unit number already exists |  -  |
| **500** | Internal server error |  -  |

<a id="createUnitType"></a>
# **createUnitType**
> UnitType createUnitType(propertyId, unitType)

Create unit type

Create a new unit type for a property

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.InventoryApi;

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

    InventoryApi apiInstance = new InventoryApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | Unique property identifier
    UnitType unitType = new UnitType(); // UnitType | 
    try {
      UnitType result = apiInstance.createUnitType(propertyId, unitType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InventoryApi#createUnitType");
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
| **unitType** | [**UnitType**](UnitType.md)|  | |

### Return type

[**UnitType**](UnitType.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Unit type created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="getUnitType"></a>
# **getUnitType**
> UnitType getUnitType(unitTypeId)

Get unit type details

Retrieve details of a specific unit type

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.InventoryApi;

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

    InventoryApi apiInstance = new InventoryApi(defaultClient);
    UUID unitTypeId = UUID.randomUUID(); // UUID | 
    try {
      UnitType result = apiInstance.getUnitType(unitTypeId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InventoryApi#getUnitType");
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
| **unitTypeId** | **UUID**|  | |

### Return type

[**UnitType**](UnitType.md)

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

<a id="listInventoryUnits"></a>
# **listInventoryUnits**
> ListInventoryUnits200Response listInventoryUnits(propertyId, pageSize, cursor, unitTypeId, operationalStatus, floor)

List inventory units for property

Retrieve all inventory units (rooms, beds, suites) for a property

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.InventoryApi;

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

    InventoryApi apiInstance = new InventoryApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | Unique property identifier
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    UUID unitTypeId = UUID.randomUUID(); // UUID | Filter by unit type
    String operationalStatus = "AVAILABLE"; // String | Filter by operational status
    Integer floor = 56; // Integer | Filter by floor number
    try {
      ListInventoryUnits200Response result = apiInstance.listInventoryUnits(propertyId, pageSize, cursor, unitTypeId, operationalStatus, floor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InventoryApi#listInventoryUnits");
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
| **cursor** | **String**| Cursor for pagination (opaque token) | [optional] |
| **unitTypeId** | **UUID**| Filter by unit type | [optional] |
| **operationalStatus** | **String**| Filter by operational status | [optional] [enum: AVAILABLE, OCCUPIED, BLOCKED, OUT_OF_SERVICE] |
| **floor** | **Integer**| Filter by floor number | [optional] |

### Return type

[**ListInventoryUnits200Response**](ListInventoryUnits200Response.md)

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

<a id="listUnitTypes"></a>
# **listUnitTypes**
> ListUnitTypes200Response listUnitTypes(propertyId, pageSize, cursor)

List unit types

Retrieve all unit types for a property

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.InventoryApi;

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

    InventoryApi apiInstance = new InventoryApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | Unique property identifier
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      ListUnitTypes200Response result = apiInstance.listUnitTypes(propertyId, pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InventoryApi#listUnitTypes");
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
| **cursor** | **String**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**ListUnitTypes200Response**](ListUnitTypes200Response.md)

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

<a id="replaceUnitType"></a>
# **replaceUnitType**
> UnitType replaceUnitType(unitTypeId, unitType, ifMatch)

Replace unit type (full update)

Replace unit type with complete new details

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.InventoryApi;

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

    InventoryApi apiInstance = new InventoryApi(defaultClient);
    UUID unitTypeId = UUID.randomUUID(); // UUID | 
    UnitType unitType = new UnitType(); // UnitType | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      UnitType result = apiInstance.replaceUnitType(unitTypeId, unitType, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InventoryApi#replaceUnitType");
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
| **unitTypeId** | **UUID**|  | |
| **unitType** | [**UnitType**](UnitType.md)|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

### Return type

[**UnitType**](UnitType.md)

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

<a id="updateUnitType"></a>
# **updateUnitType**
> UnitType updateUnitType(unitTypeId, body, ifMatch)

Update unit type (partial update)

Update specific fields of a unit type

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.InventoryApi;

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

    InventoryApi apiInstance = new InventoryApi(defaultClient);
    UUID unitTypeId = UUID.randomUUID(); // UUID | 
    Object body = null; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      UnitType result = apiInstance.updateUnitType(unitTypeId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InventoryApi#updateUnitType");
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
| **unitTypeId** | **UUID**|  | |
| **body** | **Object**|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

### Return type

[**UnitType**](UnitType.md)

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

