# ReservationsApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addSpecialRequest**](ReservationsApi.md#addSpecialRequest) | **POST** /reservations/{reservationId}/special-requests | Add special request to reservation |
| [**cancelReservation**](ReservationsApi.md#cancelReservation) | **POST** /reservations/{reservationId}/cancel | Cancel reservation |
| [**confirmReservation**](ReservationsApi.md#confirmReservation) | **POST** /reservations/{reservationId}/confirm | Confirm reservation |
| [**createReservation**](ReservationsApi.md#createReservation) | **POST** /reservations | Create reservation |
| [**getReservation**](ReservationsApi.md#getReservation) | **GET** /reservations/{reservationId} | Get reservation details |
| [**getReservationHistory**](ReservationsApi.md#getReservationHistory) | **GET** /reservations/{reservationId}/history | Get reservation modification history |
| [**getReservationQuote**](ReservationsApi.md#getReservationQuote) | **POST** /reservations/quote | Get pricing quote |
| [**markReservationNoShow**](ReservationsApi.md#markReservationNoShow) | **POST** /reservations/{reservationId}/no-show | Mark reservation as no-show |
| [**replaceReservation**](ReservationsApi.md#replaceReservation) | **PUT** /reservations/{reservationId} | Replace reservation (full update) |
| [**searchReservations**](ReservationsApi.md#searchReservations) | **GET** /reservations/search | Advanced reservation search |
| [**updateReservation**](ReservationsApi.md#updateReservation) | **PATCH** /reservations/{reservationId} | Update reservation (partial update) |


<a id="addSpecialRequest"></a>
# **addSpecialRequest**
> Reservation addSpecialRequest(reservationId, addSpecialRequestRequest)

Add special request to reservation

Add a special request or note to an existing reservation

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ReservationsApi;

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

    ReservationsApi apiInstance = new ReservationsApi(defaultClient);
    UUID reservationId = UUID.randomUUID(); // UUID | 
    AddSpecialRequestRequest addSpecialRequestRequest = new AddSpecialRequestRequest(); // AddSpecialRequestRequest | 
    try {
      Reservation result = apiInstance.addSpecialRequest(reservationId, addSpecialRequestRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReservationsApi#addSpecialRequest");
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
| **reservationId** | **UUID**|  | |
| **addSpecialRequestRequest** | [**AddSpecialRequestRequest**](AddSpecialRequestRequest.md)|  | |

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Special request added |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="cancelReservation"></a>
# **cancelReservation**
> Reservation cancelReservation(reservationId, cancelReservationRequest)

Cancel reservation

Cancel an existing reservation

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ReservationsApi;

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

    ReservationsApi apiInstance = new ReservationsApi(defaultClient);
    UUID reservationId = UUID.randomUUID(); // UUID | 
    CancelReservationRequest cancelReservationRequest = new CancelReservationRequest(); // CancelReservationRequest | 
    try {
      Reservation result = apiInstance.cancelReservation(reservationId, cancelReservationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReservationsApi#cancelReservation");
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
| **reservationId** | **UUID**|  | |
| **cancelReservationRequest** | [**CancelReservationRequest**](CancelReservationRequest.md)|  | |

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reservation cancelled |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="confirmReservation"></a>
# **confirmReservation**
> Reservation confirmReservation(reservationId)

Confirm reservation

Confirm a pending reservation

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ReservationsApi;

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

    ReservationsApi apiInstance = new ReservationsApi(defaultClient);
    UUID reservationId = UUID.randomUUID(); // UUID | 
    try {
      Reservation result = apiInstance.confirmReservation(reservationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReservationsApi#confirmReservation");
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
| **reservationId** | **UUID**|  | |

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reservation confirmed |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="createReservation"></a>
# **createReservation**
> Reservation createReservation(reservation)

Create reservation

Create a new reservation

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ReservationsApi;

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

    ReservationsApi apiInstance = new ReservationsApi(defaultClient);
    Reservation reservation = new Reservation(); // Reservation | 
    try {
      Reservation result = apiInstance.createReservation(reservation);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReservationsApi#createReservation");
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
| **reservation** | [**Reservation**](Reservation.md)|  | |

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Reservation created |  * Location -  <br>  * ETag -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="getReservation"></a>
# **getReservation**
> Reservation getReservation(reservationId)

Get reservation details

Retrieve complete details of a specific reservation including guest information, dates, pricing, and current status

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ReservationsApi;

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

    ReservationsApi apiInstance = new ReservationsApi(defaultClient);
    UUID reservationId = UUID.randomUUID(); // UUID | 
    try {
      Reservation result = apiInstance.getReservation(reservationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReservationsApi#getReservation");
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
| **reservationId** | **UUID**|  | |

### Return type

[**Reservation**](Reservation.md)

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

<a id="getReservationHistory"></a>
# **getReservationHistory**
> List&lt;GetReservationHistory200ResponseInner&gt; getReservationHistory(reservationId)

Get reservation modification history

Retrieve complete history of changes to a reservation

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ReservationsApi;

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

    ReservationsApi apiInstance = new ReservationsApi(defaultClient);
    UUID reservationId = UUID.randomUUID(); // UUID | 
    try {
      List<GetReservationHistory200ResponseInner> result = apiInstance.getReservationHistory(reservationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReservationsApi#getReservationHistory");
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
| **reservationId** | **UUID**|  | |

### Return type

[**List&lt;GetReservationHistory200ResponseInner&gt;**](GetReservationHistory200ResponseInner.md)

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

<a id="getReservationQuote"></a>
# **getReservationQuote**
> GetReservationQuote200Response getReservationQuote(getReservationQuoteRequest)

Get pricing quote

Calculate pricing for a potential reservation without creating it

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ReservationsApi;

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

    ReservationsApi apiInstance = new ReservationsApi(defaultClient);
    GetReservationQuoteRequest getReservationQuoteRequest = new GetReservationQuoteRequest(); // GetReservationQuoteRequest | 
    try {
      GetReservationQuote200Response result = apiInstance.getReservationQuote(getReservationQuoteRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReservationsApi#getReservationQuote");
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
| **getReservationQuoteRequest** | [**GetReservationQuoteRequest**](GetReservationQuoteRequest.md)|  | |

### Return type

[**GetReservationQuote200Response**](GetReservationQuote200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Quote generated successfully |  -  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="markReservationNoShow"></a>
# **markReservationNoShow**
> Reservation markReservationNoShow(reservationId, markReservationNoShowRequest)

Mark reservation as no-show

Mark a reservation as no-show when guest doesn&#39;t arrive

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ReservationsApi;

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

    ReservationsApi apiInstance = new ReservationsApi(defaultClient);
    UUID reservationId = UUID.randomUUID(); // UUID | 
    MarkReservationNoShowRequest markReservationNoShowRequest = new MarkReservationNoShowRequest(); // MarkReservationNoShowRequest | 
    try {
      Reservation result = apiInstance.markReservationNoShow(reservationId, markReservationNoShowRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReservationsApi#markReservationNoShow");
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
| **reservationId** | **UUID**|  | |
| **markReservationNoShowRequest** | [**MarkReservationNoShowRequest**](MarkReservationNoShowRequest.md)|  | [optional] |

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Marked as no-show |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="replaceReservation"></a>
# **replaceReservation**
> Reservation replaceReservation(reservationId, reservation, ifMatch)

Replace reservation (full update)

Replace an existing reservation with a complete new representation. All fields must be provided. For partial updates, use PATCH instead.  **Optimistic Locking:** Use &#x60;If-Match&#x60; header with ETag to prevent conflicts 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ReservationsApi;

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

    ReservationsApi apiInstance = new ReservationsApi(defaultClient);
    UUID reservationId = UUID.randomUUID(); // UUID | 
    Reservation reservation = new Reservation(); // Reservation | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Reservation result = apiInstance.replaceReservation(reservationId, reservation, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReservationsApi#replaceReservation");
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
| **reservationId** | **UUID**|  | |
| **reservation** | [**Reservation**](Reservation.md)|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

### Return type

[**Reservation**](Reservation.md)

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

<a id="searchReservations"></a>
# **searchReservations**
> SearchReservations200Response searchReservations(propertyId, guestName, confirmationNumber, status, checkInDate, checkOutDate, pageSize, cursor)

Advanced reservation search

Search reservations with advanced filters

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ReservationsApi;

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

    ReservationsApi apiInstance = new ReservationsApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | 
    String guestName = "guestName_example"; // String | 
    String confirmationNumber = "confirmationNumber_example"; // String | 
    String status = "PENDING"; // String | 
    LocalDate checkInDate = LocalDate.now(); // LocalDate | 
    LocalDate checkOutDate = LocalDate.now(); // LocalDate | 
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      SearchReservations200Response result = apiInstance.searchReservations(propertyId, guestName, confirmationNumber, status, checkInDate, checkOutDate, pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReservationsApi#searchReservations");
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
| **guestName** | **String**|  | [optional] |
| **confirmationNumber** | **String**|  | [optional] |
| **status** | **String**|  | [optional] [enum: PENDING, CONFIRMED, CHECKED_IN, CHECKED_OUT, CANCELLED, NO_SHOW] |
| **checkInDate** | **LocalDate**|  | [optional] |
| **checkOutDate** | **LocalDate**|  | [optional] |
| **pageSize** | **Integer**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **String**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**SearchReservations200Response**](SearchReservations200Response.md)

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

<a id="updateReservation"></a>
# **updateReservation**
> Reservation updateReservation(reservationId, body, ifMatch)

Update reservation (partial update)

Partially update a reservation. Only provided fields will be updated. This is the recommended method for most updates.  **Optimistic Locking:** Use &#x60;If-Match&#x60; header with ETag to prevent conflicts  **Common use cases:** - Update special requests - Change guest count - Modify arrival time - Add notes 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ReservationsApi;

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

    ReservationsApi apiInstance = new ReservationsApi(defaultClient);
    UUID reservationId = UUID.randomUUID(); // UUID | 
    Object body = {"specialRequests":"Late check-in at 10 PM","guestCount":{"adults":2,"children":1}}; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Reservation result = apiInstance.updateReservation(reservationId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReservationsApi#updateReservation");
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
| **reservationId** | **UUID**|  | |
| **body** | **Object**|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

### Return type

[**Reservation**](Reservation.md)

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

