# GuestsApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addLoyaltyPoints**](GuestsApi.md#addLoyaltyPoints) | **POST** /guests/{guestId}/loyalty/points | Add loyalty points |
| [**createGuest**](GuestsApi.md#createGuest) | **POST** /guests | Create guest profile |
| [**deleteGuest**](GuestsApi.md#deleteGuest) | **DELETE** /guests/{guestId} | Delete guest profile (GDPR) |
| [**getGuest**](GuestsApi.md#getGuest) | **GET** /guests/{guestId} | Get guest profile |
| [**getGuestLoyalty**](GuestsApi.md#getGuestLoyalty) | **GET** /guests/{guestId}/loyalty | Get guest loyalty status |
| [**getGuestStays**](GuestsApi.md#getGuestStays) | **GET** /guests/{guestId}/stays | Get guest stay history |
| [**listGuests**](GuestsApi.md#listGuests) | **GET** /guests | List guest profiles |
| [**mergeGuests**](GuestsApi.md#mergeGuests) | **POST** /guests/merge | Merge duplicate guest profiles |
| [**replaceGuest**](GuestsApi.md#replaceGuest) | **PUT** /guests/{guestId} | Replace guest profile (full update) |
| [**replaceGuestPreferences**](GuestsApi.md#replaceGuestPreferences) | **PUT** /guests/{guestId}/preferences | Replace guest preferences (full update) |
| [**searchGuests**](GuestsApi.md#searchGuests) | **POST** /guests/search | Search guests |
| [**updateGuest**](GuestsApi.md#updateGuest) | **PATCH** /guests/{guestId} | Update guest profile (partial update) |
| [**updateGuestPreferences**](GuestsApi.md#updateGuestPreferences) | **PATCH** /guests/{guestId}/preferences | Update guest preferences (partial update) |
| [**verifyGuest**](GuestsApi.md#verifyGuest) | **POST** /guests/{guestId}/verify | Verify guest identity |


<a id="addLoyaltyPoints"></a>
# **addLoyaltyPoints**
> AddLoyaltyPoints200Response addLoyaltyPoints(guestId, addLoyaltyPointsRequest)

Add loyalty points

Add loyalty points to guest account

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.GuestsApi;

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

    GuestsApi apiInstance = new GuestsApi(defaultClient);
    UUID guestId = UUID.randomUUID(); // UUID | 
    AddLoyaltyPointsRequest addLoyaltyPointsRequest = new AddLoyaltyPointsRequest(); // AddLoyaltyPointsRequest | 
    try {
      AddLoyaltyPoints200Response result = apiInstance.addLoyaltyPoints(guestId, addLoyaltyPointsRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GuestsApi#addLoyaltyPoints");
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
| **guestId** | **UUID**|  | |
| **addLoyaltyPointsRequest** | [**AddLoyaltyPointsRequest**](AddLoyaltyPointsRequest.md)|  | |

### Return type

[**AddLoyaltyPoints200Response**](AddLoyaltyPoints200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Points added successfully |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="createGuest"></a>
# **createGuest**
> GuestProfile createGuest(guestProfile)

Create guest profile

Create a new guest profile

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.GuestsApi;

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

    GuestsApi apiInstance = new GuestsApi(defaultClient);
    GuestProfile guestProfile = new GuestProfile(); // GuestProfile | 
    try {
      GuestProfile result = apiInstance.createGuest(guestProfile);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GuestsApi#createGuest");
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
| **guestProfile** | [**GuestProfile**](GuestProfile.md)|  | |

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Guest profile created |  * Location -  <br>  * ETag -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="deleteGuest"></a>
# **deleteGuest**
> deleteGuest(guestId)

Delete guest profile (GDPR)

Delete guest profile per GDPR right to be forgotten

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.GuestsApi;

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

    GuestsApi apiInstance = new GuestsApi(defaultClient);
    UUID guestId = UUID.randomUUID(); // UUID | 
    try {
      apiInstance.deleteGuest(guestId);
    } catch (ApiException e) {
      System.err.println("Exception when calling GuestsApi#deleteGuest");
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
| **guestId** | **UUID**|  | |

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
| **204** | Guest deleted |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="getGuest"></a>
# **getGuest**
> GuestProfile getGuest(guestId)

Get guest profile

Retrieve complete guest profile including personal information, contact details, preferences, and loyalty status

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.GuestsApi;

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

    GuestsApi apiInstance = new GuestsApi(defaultClient);
    UUID guestId = UUID.randomUUID(); // UUID | 
    try {
      GuestProfile result = apiInstance.getGuest(guestId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GuestsApi#getGuest");
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
| **guestId** | **UUID**|  | |

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  * ETag -  <br>  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="getGuestLoyalty"></a>
# **getGuestLoyalty**
> GetGuestLoyalty200Response getGuestLoyalty(guestId)

Get guest loyalty status

Retrieve loyalty program status and points

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.GuestsApi;

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

    GuestsApi apiInstance = new GuestsApi(defaultClient);
    UUID guestId = UUID.randomUUID(); // UUID | 
    try {
      GetGuestLoyalty200Response result = apiInstance.getGuestLoyalty(guestId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GuestsApi#getGuestLoyalty");
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
| **guestId** | **UUID**|  | |

### Return type

[**GetGuestLoyalty200Response**](GetGuestLoyalty200Response.md)

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

<a id="getGuestStays"></a>
# **getGuestStays**
> GetGuestStays200Response getGuestStays(guestId, pageSize, cursor)

Get guest stay history

Retrieve complete stay history for a guest

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.GuestsApi;

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

    GuestsApi apiInstance = new GuestsApi(defaultClient);
    UUID guestId = UUID.randomUUID(); // UUID | 
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      GetGuestStays200Response result = apiInstance.getGuestStays(guestId, pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GuestsApi#getGuestStays");
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
| **guestId** | **UUID**|  | |
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
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="listGuests"></a>
# **listGuests**
> ListGuests200Response listGuests(pageSize, cursor, search, loyaltyTier)

List guest profiles

Retrieve list of guest profiles

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.GuestsApi;

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

    GuestsApi apiInstance = new GuestsApi(defaultClient);
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    String search = "search_example"; // String | Search by name or email
    String loyaltyTier = "NONE"; // String | 
    try {
      ListGuests200Response result = apiInstance.listGuests(pageSize, cursor, search, loyaltyTier);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GuestsApi#listGuests");
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
| **search** | **String**| Search by name or email | [optional] |
| **loyaltyTier** | **String**|  | [optional] [enum: NONE, SILVER, GOLD, PLATINUM] |

### Return type

[**ListGuests200Response**](ListGuests200Response.md)

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

<a id="mergeGuests"></a>
# **mergeGuests**
> GuestProfile mergeGuests(mergeGuestsRequest)

Merge duplicate guest profiles

Merge two guest profiles into one

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.GuestsApi;

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

    GuestsApi apiInstance = new GuestsApi(defaultClient);
    MergeGuestsRequest mergeGuestsRequest = new MergeGuestsRequest(); // MergeGuestsRequest | 
    try {
      GuestProfile result = apiInstance.mergeGuests(mergeGuestsRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GuestsApi#mergeGuests");
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
| **mergeGuestsRequest** | [**MergeGuestsRequest**](MergeGuestsRequest.md)|  | |

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Profiles merged successfully |  -  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="replaceGuest"></a>
# **replaceGuest**
> GuestProfile replaceGuest(guestId, guestProfile, ifMatch)

Replace guest profile (full update)

Replace an existing guest profile with a complete new representation. All fields must be provided. For partial updates, use PATCH instead.  **Optimistic Locking:** Use &#x60;If-Match&#x60; header with ETag 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.GuestsApi;

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

    GuestsApi apiInstance = new GuestsApi(defaultClient);
    UUID guestId = UUID.randomUUID(); // UUID | 
    GuestProfile guestProfile = new GuestProfile(); // GuestProfile | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      GuestProfile result = apiInstance.replaceGuest(guestId, guestProfile, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GuestsApi#replaceGuest");
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
| **guestId** | **UUID**|  | |
| **guestProfile** | [**GuestProfile**](GuestProfile.md)|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

### Return type

[**GuestProfile**](GuestProfile.md)

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

<a id="replaceGuestPreferences"></a>
# **replaceGuestPreferences**
> Object replaceGuestPreferences(guestId, body, ifMatch)

Replace guest preferences (full update)

Replace all guest preferences with new settings including room preferences, dietary restrictions, and communication preferences

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.GuestsApi;

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

    GuestsApi apiInstance = new GuestsApi(defaultClient);
    UUID guestId = UUID.randomUUID(); // UUID | 
    Object body = null; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Object result = apiInstance.replaceGuestPreferences(guestId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GuestsApi#replaceGuestPreferences");
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
| **guestId** | **UUID**|  | |
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

<a id="searchGuests"></a>
# **searchGuests**
> List&lt;GuestProfile&gt; searchGuests(searchGuestsRequest)

Search guests

Advanced guest search with multiple criteria

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.GuestsApi;

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

    GuestsApi apiInstance = new GuestsApi(defaultClient);
    SearchGuestsRequest searchGuestsRequest = new SearchGuestsRequest(); // SearchGuestsRequest | 
    try {
      List<GuestProfile> result = apiInstance.searchGuests(searchGuestsRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GuestsApi#searchGuests");
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
| **searchGuestsRequest** | [**SearchGuestsRequest**](SearchGuestsRequest.md)|  | |

### Return type

[**List&lt;GuestProfile&gt;**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="updateGuest"></a>
# **updateGuest**
> GuestProfile updateGuest(guestId, body, ifMatch)

Update guest profile (partial update)

Partially update a guest profile. Only provided fields will be updated. This is the recommended method for most updates.  **Optimistic Locking:** Use &#x60;If-Match&#x60; header with ETag  **Common use cases:** - Update email or phone - Change address - Update preferences - Modify loyalty tier 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.GuestsApi;

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

    GuestsApi apiInstance = new GuestsApi(defaultClient);
    UUID guestId = UUID.randomUUID(); // UUID | 
    Object body = {"email":"newemail@example.com","phone":"+1234567890"}; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      GuestProfile result = apiInstance.updateGuest(guestId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GuestsApi#updateGuest");
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
| **guestId** | **UUID**|  | |
| **body** | **Object**|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

### Return type

[**GuestProfile**](GuestProfile.md)

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

<a id="updateGuestPreferences"></a>
# **updateGuestPreferences**
> Object updateGuestPreferences(guestId, body, ifMatch)

Update guest preferences (partial update)

Update specific guest preferences. Only provided preferences will be updated.  **Example:** Update room type preference only 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.GuestsApi;

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

    GuestsApi apiInstance = new GuestsApi(defaultClient);
    UUID guestId = UUID.randomUUID(); // UUID | 
    Object body = {"roomType":"KING","floorPreference":"HIGH"}; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Object result = apiInstance.updateGuestPreferences(guestId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GuestsApi#updateGuestPreferences");
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
| **guestId** | **UUID**|  | |
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

<a id="verifyGuest"></a>
# **verifyGuest**
> VerifyGuest200Response verifyGuest(guestId, verifyGuestRequest)

Verify guest identity

Verify guest identity for security purposes

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.GuestsApi;

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

    GuestsApi apiInstance = new GuestsApi(defaultClient);
    UUID guestId = UUID.randomUUID(); // UUID | 
    VerifyGuestRequest verifyGuestRequest = new VerifyGuestRequest(); // VerifyGuestRequest | 
    try {
      VerifyGuest200Response result = apiInstance.verifyGuest(guestId, verifyGuestRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GuestsApi#verifyGuest");
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
| **guestId** | **UUID**|  | |
| **verifyGuestRequest** | [**VerifyGuestRequest**](VerifyGuestRequest.md)|  | |

### Return type

[**VerifyGuest200Response**](VerifyGuest200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Verification successful |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

