# FoodBeverageApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelFBOrder**](FoodBeverageApi.md#cancelFBOrder) | **POST** /fb/orders/{orderId}/cancel | Cancel F&amp;B order |
| [**confirmFBOrder**](FoodBeverageApi.md#confirmFBOrder) | **POST** /fb/orders/{orderId}/confirm | Confirm F&amp;B order |
| [**consumeFBInventory**](FoodBeverageApi.md#consumeFBInventory) | **POST** /fb/inventory/{itemId}/consume | Record consumption |
| [**countFBInventory**](FoodBeverageApi.md#countFBInventory) | **POST** /fb/inventory/count | Perform stock count |
| [**createFBInventoryItem**](FoodBeverageApi.md#createFBInventoryItem) | **POST** /fb/inventory | Create inventory item |
| [**createFBOrder**](FoodBeverageApi.md#createFBOrder) | **POST** /fb/orders | Create F&amp;B order |
| [**createMenuItem**](FoodBeverageApi.md#createMenuItem) | **POST** /fb/menu | Create menu item |
| [**getFBInventoryItem**](FoodBeverageApi.md#getFBInventoryItem) | **GET** /fb/inventory/{itemId} | Get inventory item details |
| [**getMenuItem**](FoodBeverageApi.md#getMenuItem) | **GET** /fb/menu/{itemId} | Get menu item details |
| [**listFBInventory**](FoodBeverageApi.md#listFBInventory) | **GET** /fb/inventory | List F&amp;B inventory items |
| [**listFBOrders**](FoodBeverageApi.md#listFBOrders) | **GET** /fb/orders | List F&amp;B orders |
| [**listMenuItems**](FoodBeverageApi.md#listMenuItems) | **GET** /fb/menu | List menu items |
| [**markFBItemReady**](FoodBeverageApi.md#markFBItemReady) | **POST** /fb/orders/{orderId}/items/{itemId}/ready | Mark item as ready |
| [**receiveFBInventory**](FoodBeverageApi.md#receiveFBInventory) | **POST** /fb/inventory/{itemId}/receive | Receive stock |
| [**replaceFBOrder**](FoodBeverageApi.md#replaceFBOrder) | **PUT** /fb/orders/{orderId} | Replace F&amp;B order (full update) |
| [**replaceMenuItem**](FoodBeverageApi.md#replaceMenuItem) | **PUT** /fb/menu/{itemId} | Replace menu item (full update) |
| [**serveFBOrder**](FoodBeverageApi.md#serveFBOrder) | **POST** /fb/orders/{orderId}/serve | Mark order as served |
| [**updateFBInventoryItem**](FoodBeverageApi.md#updateFBInventoryItem) | **PUT** /fb/inventory/{itemId} | Update inventory item |
| [**updateFBOrder**](FoodBeverageApi.md#updateFBOrder) | **PATCH** /fb/orders/{orderId} | Update F&amp;B order (partial update) |
| [**updateMenuItem**](FoodBeverageApi.md#updateMenuItem) | **PATCH** /fb/menu/{itemId} | Update menu item (partial update) |
| [**wasteFBInventory**](FoodBeverageApi.md#wasteFBInventory) | **POST** /fb/inventory/{itemId}/waste | Record waste |


<a id="cancelFBOrder"></a>
# **cancelFBOrder**
> FBOrder cancelFBOrder(orderId, cancelServiceRequestRequest)

Cancel F&amp;B order

Cancel an F&amp;B order

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID orderId = UUID.randomUUID(); // UUID | 
    CancelServiceRequestRequest cancelServiceRequestRequest = new CancelServiceRequestRequest(); // CancelServiceRequestRequest | 
    try {
      FBOrder result = apiInstance.cancelFBOrder(orderId, cancelServiceRequestRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#cancelFBOrder");
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
| **orderId** | **UUID**|  | |
| **cancelServiceRequestRequest** | [**CancelServiceRequestRequest**](CancelServiceRequestRequest.md)|  | [optional] |

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Order cancelled |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="confirmFBOrder"></a>
# **confirmFBOrder**
> FBOrder confirmFBOrder(orderId, confirmFBOrderRequest)

Confirm F&amp;B order

Confirm receipt and acceptance of an F&amp;B order

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID orderId = UUID.randomUUID(); // UUID | 
    ConfirmFBOrderRequest confirmFBOrderRequest = new ConfirmFBOrderRequest(); // ConfirmFBOrderRequest | 
    try {
      FBOrder result = apiInstance.confirmFBOrder(orderId, confirmFBOrderRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#confirmFBOrder");
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
| **orderId** | **UUID**|  | |
| **confirmFBOrderRequest** | [**ConfirmFBOrderRequest**](ConfirmFBOrderRequest.md)|  | [optional] |

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Order confirmed |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="consumeFBInventory"></a>
# **consumeFBInventory**
> FBInventoryItem consumeFBInventory(itemId, receiveFBInventoryRequest)

Record consumption

Record inventory consumption

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID itemId = UUID.randomUUID(); // UUID | 
    ReceiveFBInventoryRequest receiveFBInventoryRequest = new ReceiveFBInventoryRequest(); // ReceiveFBInventoryRequest | 
    try {
      FBInventoryItem result = apiInstance.consumeFBInventory(itemId, receiveFBInventoryRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#consumeFBInventory");
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
| **itemId** | **UUID**|  | |
| **receiveFBInventoryRequest** | [**ReceiveFBInventoryRequest**](ReceiveFBInventoryRequest.md)|  | |

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Consumption recorded |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="countFBInventory"></a>
# **countFBInventory**
> CountFBInventory200Response countFBInventory(countFBInventoryRequest)

Perform stock count

Perform physical inventory stock count

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    CountFBInventoryRequest countFBInventoryRequest = new CountFBInventoryRequest(); // CountFBInventoryRequest | 
    try {
      CountFBInventory200Response result = apiInstance.countFBInventory(countFBInventoryRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#countFBInventory");
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
| **countFBInventoryRequest** | [**CountFBInventoryRequest**](CountFBInventoryRequest.md)|  | |

### Return type

[**CountFBInventory200Response**](CountFBInventory200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stock count completed |  -  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="createFBInventoryItem"></a>
# **createFBInventoryItem**
> FBInventoryItem createFBInventoryItem(fbInventoryItem)

Create inventory item

Create a new F&amp;B inventory item

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    FBInventoryItem fbInventoryItem = new FBInventoryItem(); // FBInventoryItem | 
    try {
      FBInventoryItem result = apiInstance.createFBInventoryItem(fbInventoryItem);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#createFBInventoryItem");
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
| **fbInventoryItem** | [**FBInventoryItem**](FBInventoryItem.md)|  | |

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Inventory item created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="createFBOrder"></a>
# **createFBOrder**
> Object createFBOrder(body)

Create F&amp;B order

Create a new F&amp;B order for room service, restaurant, or bar service

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    Object body = null; // Object | 
    try {
      Object result = apiInstance.createFBOrder(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#createFBOrder");
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
| **body** | **Object**|  | |

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
| **201** | Order created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="createMenuItem"></a>
# **createMenuItem**
> MenuItem createMenuItem(menuItem)

Create menu item

Create a new menu item

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    MenuItem menuItem = new MenuItem(); // MenuItem | 
    try {
      MenuItem result = apiInstance.createMenuItem(menuItem);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#createMenuItem");
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
| **menuItem** | [**MenuItem**](MenuItem.md)|  | |

### Return type

[**MenuItem**](MenuItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Menu item created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="getFBInventoryItem"></a>
# **getFBInventoryItem**
> FBInventoryItem getFBInventoryItem(itemId)

Get inventory item details

Retrieve details of a specific F&amp;B inventory item

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID itemId = UUID.randomUUID(); // UUID | 
    try {
      FBInventoryItem result = apiInstance.getFBInventoryItem(itemId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#getFBInventoryItem");
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
| **itemId** | **UUID**|  | |

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

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

<a id="getMenuItem"></a>
# **getMenuItem**
> MenuItem getMenuItem(itemId)

Get menu item details

Retrieve details of a specific menu item

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID itemId = UUID.randomUUID(); // UUID | 
    try {
      MenuItem result = apiInstance.getMenuItem(itemId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#getMenuItem");
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
| **itemId** | **UUID**|  | |

### Return type

[**MenuItem**](MenuItem.md)

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

<a id="listFBInventory"></a>
# **listFBInventory**
> ListFBInventory200Response listFBInventory(propertyId, lowStock, pageSize, cursor)

List F&amp;B inventory items

List all F&amp;B inventory items with stock levels

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | 
    Boolean lowStock = true; // Boolean | 
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      ListFBInventory200Response result = apiInstance.listFBInventory(propertyId, lowStock, pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#listFBInventory");
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
| **propertyId** | **UUID**|  | [optional] |
| **lowStock** | **Boolean**|  | [optional] |
| **pageSize** | **Integer**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **String**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**ListFBInventory200Response**](ListFBInventory200Response.md)

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

<a id="listFBOrders"></a>
# **listFBOrders**
> GetGuestStays200Response listFBOrders(propertyId, status, pageSize, cursor)

List F&amp;B orders

List all food &amp; beverage orders with filtering by property, venue, status, and date range

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | 
    String status = "status_example"; // String | 
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      GetGuestStays200Response result = apiInstance.listFBOrders(propertyId, status, pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#listFBOrders");
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
| **propertyId** | **UUID**|  | [optional] |
| **status** | **String**|  | [optional] |
| **pageSize** | **Integer**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **String**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

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

<a id="listMenuItems"></a>
# **listMenuItems**
> ListMenuItems200Response listMenuItems(propertyId, venue, isAvailable, pageSize, cursor)

List menu items

List all menu items with filtering by venue and availability

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | 
    String venue = "venue_example"; // String | 
    Boolean isAvailable = true; // Boolean | 
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      ListMenuItems200Response result = apiInstance.listMenuItems(propertyId, venue, isAvailable, pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#listMenuItems");
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
| **propertyId** | **UUID**|  | [optional] |
| **venue** | **String**|  | [optional] |
| **isAvailable** | **Boolean**|  | [optional] |
| **pageSize** | **Integer**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **String**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**ListMenuItems200Response**](ListMenuItems200Response.md)

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

<a id="markFBItemReady"></a>
# **markFBItemReady**
> FBOrder markFBItemReady(orderId, itemId)

Mark item as ready

Mark an order item as ready for delivery

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID orderId = UUID.randomUUID(); // UUID | 
    UUID itemId = UUID.randomUUID(); // UUID | 
    try {
      FBOrder result = apiInstance.markFBItemReady(orderId, itemId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#markFBItemReady");
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
| **orderId** | **UUID**|  | |
| **itemId** | **UUID**|  | |

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Item marked as ready |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="receiveFBInventory"></a>
# **receiveFBInventory**
> FBInventoryItem receiveFBInventory(itemId, receiveFBInventoryRequest)

Receive stock

Record receipt of inventory stock

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID itemId = UUID.randomUUID(); // UUID | 
    ReceiveFBInventoryRequest receiveFBInventoryRequest = new ReceiveFBInventoryRequest(); // ReceiveFBInventoryRequest | 
    try {
      FBInventoryItem result = apiInstance.receiveFBInventory(itemId, receiveFBInventoryRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#receiveFBInventory");
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
| **itemId** | **UUID**|  | |
| **receiveFBInventoryRequest** | [**ReceiveFBInventoryRequest**](ReceiveFBInventoryRequest.md)|  | |

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stock received |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="replaceFBOrder"></a>
# **replaceFBOrder**
> Object replaceFBOrder(orderId, body, ifMatch)

Replace F&amp;B order (full update)

Replace F&amp;B order with complete new order details including items, pricing, and delivery information

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID orderId = UUID.randomUUID(); // UUID | 
    Object body = null; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Object result = apiInstance.replaceFBOrder(orderId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#replaceFBOrder");
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
| **orderId** | **UUID**|  | |
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

<a id="replaceMenuItem"></a>
# **replaceMenuItem**
> Object replaceMenuItem(itemId, body, ifMatch)

Replace menu item (full update)

Replace menu item with complete new details including pricing, ingredients, and availability

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID itemId = UUID.randomUUID(); // UUID | 
    Object body = null; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Object result = apiInstance.replaceMenuItem(itemId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#replaceMenuItem");
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
| **itemId** | **UUID**|  | |
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

<a id="serveFBOrder"></a>
# **serveFBOrder**
> FBOrder serveFBOrder(orderId, serveFBOrderRequest)

Mark order as served

Mark an order as delivered/served to guest

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID orderId = UUID.randomUUID(); // UUID | 
    ServeFBOrderRequest serveFBOrderRequest = new ServeFBOrderRequest(); // ServeFBOrderRequest | 
    try {
      FBOrder result = apiInstance.serveFBOrder(orderId, serveFBOrderRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#serveFBOrder");
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
| **orderId** | **UUID**|  | |
| **serveFBOrderRequest** | [**ServeFBOrderRequest**](ServeFBOrderRequest.md)|  | [optional] |

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Order marked as served |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="updateFBInventoryItem"></a>
# **updateFBInventoryItem**
> FBInventoryItem updateFBInventoryItem(itemId, fbInventoryItem)

Update inventory item

Update F&amp;B inventory item details

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID itemId = UUID.randomUUID(); // UUID | 
    FBInventoryItem fbInventoryItem = new FBInventoryItem(); // FBInventoryItem | 
    try {
      FBInventoryItem result = apiInstance.updateFBInventoryItem(itemId, fbInventoryItem);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#updateFBInventoryItem");
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
| **itemId** | **UUID**|  | |
| **fbInventoryItem** | [**FBInventoryItem**](FBInventoryItem.md)|  | |

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Inventory item updated |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="updateFBOrder"></a>
# **updateFBOrder**
> Object updateFBOrder(orderId, body, ifMatch)

Update F&amp;B order (partial update)

Partially update F&amp;B order to modify status, add items, or update delivery details **Common use cases:** | Update specific fields of an F&amp;B order. **Common use cases:** - Update order status - Modify delivery time - Add special instructions - Change order items

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID orderId = UUID.randomUUID(); // UUID | 
    Object body = {"status":"PREPARING","estimatedDelivery":"2025-12-21T19:30:00Z","specialInstructions":"No nuts - allergy"}; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Object result = apiInstance.updateFBOrder(orderId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#updateFBOrder");
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
| **orderId** | **UUID**|  | |
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

<a id="updateMenuItem"></a>
# **updateMenuItem**
> Object updateMenuItem(itemId, body, ifMatch)

Update menu item (partial update)

Partially update menu item to modify pricing, availability, or description **Common use cases:** | Update specific fields of a menu item. **Common use cases:** - Update price - Change availability - Modify description - Update dietary information

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID itemId = UUID.randomUUID(); // UUID | 
    Object body = {"price":{"amount":24.99,"currency":"USD"},"available":true}; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Object result = apiInstance.updateMenuItem(itemId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#updateMenuItem");
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
| **itemId** | **UUID**|  | |
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

<a id="wasteFBInventory"></a>
# **wasteFBInventory**
> FBInventoryItem wasteFBInventory(itemId, wasteFBInventoryRequest)

Record waste

Record inventory waste

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.FoodBeverageApi;

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

    FoodBeverageApi apiInstance = new FoodBeverageApi(defaultClient);
    UUID itemId = UUID.randomUUID(); // UUID | 
    WasteFBInventoryRequest wasteFBInventoryRequest = new WasteFBInventoryRequest(); // WasteFBInventoryRequest | 
    try {
      FBInventoryItem result = apiInstance.wasteFBInventory(itemId, wasteFBInventoryRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FoodBeverageApi#wasteFBInventory");
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
| **itemId** | **UUID**|  | |
| **wasteFBInventoryRequest** | [**WasteFBInventoryRequest**](WasteFBInventoryRequest.md)|  | |

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Waste recorded |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

