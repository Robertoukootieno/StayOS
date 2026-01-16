# StayOS.ApiClient.Api.ReservationsApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddSpecialRequest**](ReservationsApi.md#addspecialrequest) | **POST** /reservations/{reservationId}/special-requests | Add special request to reservation |
| [**CancelReservation**](ReservationsApi.md#cancelreservation) | **POST** /reservations/{reservationId}/cancel | Cancel reservation |
| [**ConfirmReservation**](ReservationsApi.md#confirmreservation) | **POST** /reservations/{reservationId}/confirm | Confirm reservation |
| [**CreateReservation**](ReservationsApi.md#createreservation) | **POST** /reservations | Create reservation |
| [**GetReservation**](ReservationsApi.md#getreservation) | **GET** /reservations/{reservationId} | Get reservation details |
| [**GetReservationHistory**](ReservationsApi.md#getreservationhistory) | **GET** /reservations/{reservationId}/history | Get reservation modification history |
| [**GetReservationQuote**](ReservationsApi.md#getreservationquote) | **POST** /reservations/quote | Get pricing quote |
| [**MarkReservationNoShow**](ReservationsApi.md#markreservationnoshow) | **POST** /reservations/{reservationId}/no-show | Mark reservation as no-show |
| [**ReplaceReservation**](ReservationsApi.md#replacereservation) | **PUT** /reservations/{reservationId} | Replace reservation (full update) |
| [**SearchReservations**](ReservationsApi.md#searchreservations) | **GET** /reservations/search | Advanced reservation search |
| [**UpdateReservation**](ReservationsApi.md#updatereservation) | **PATCH** /reservations/{reservationId} | Update reservation (partial update) |

<a id="addspecialrequest"></a>
# **AddSpecialRequest**
> Reservation AddSpecialRequest (Guid reservationId, AddSpecialRequestRequest addSpecialRequestRequest)

Add special request to reservation

Add a special request or note to an existing reservation

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class AddSpecialRequestExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ReservationsApi(httpClient, config, httpClientHandler);
            var reservationId = "reservationId_example";  // Guid | 
            var addSpecialRequestRequest = new AddSpecialRequestRequest(); // AddSpecialRequestRequest | 

            try
            {
                // Add special request to reservation
                Reservation result = apiInstance.AddSpecialRequest(reservationId, addSpecialRequestRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReservationsApi.AddSpecialRequest: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddSpecialRequestWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Add special request to reservation
    ApiResponse<Reservation> response = apiInstance.AddSpecialRequestWithHttpInfo(reservationId, addSpecialRequestRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReservationsApi.AddSpecialRequestWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **reservationId** | **Guid** |  |  |
| **addSpecialRequestRequest** | [**AddSpecialRequestRequest**](AddSpecialRequestRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="cancelreservation"></a>
# **CancelReservation**
> Reservation CancelReservation (Guid reservationId, CancelReservationRequest cancelReservationRequest)

Cancel reservation

Cancel an existing reservation

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class CancelReservationExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ReservationsApi(httpClient, config, httpClientHandler);
            var reservationId = "reservationId_example";  // Guid | 
            var cancelReservationRequest = new CancelReservationRequest(); // CancelReservationRequest | 

            try
            {
                // Cancel reservation
                Reservation result = apiInstance.CancelReservation(reservationId, cancelReservationRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReservationsApi.CancelReservation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CancelReservationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Cancel reservation
    ApiResponse<Reservation> response = apiInstance.CancelReservationWithHttpInfo(reservationId, cancelReservationRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReservationsApi.CancelReservationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **reservationId** | **Guid** |  |  |
| **cancelReservationRequest** | [**CancelReservationRequest**](CancelReservationRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="confirmreservation"></a>
# **ConfirmReservation**
> Reservation ConfirmReservation (Guid reservationId)

Confirm reservation

Confirm a pending reservation

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class ConfirmReservationExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ReservationsApi(httpClient, config, httpClientHandler);
            var reservationId = "reservationId_example";  // Guid | 

            try
            {
                // Confirm reservation
                Reservation result = apiInstance.ConfirmReservation(reservationId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReservationsApi.ConfirmReservation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ConfirmReservationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Confirm reservation
    ApiResponse<Reservation> response = apiInstance.ConfirmReservationWithHttpInfo(reservationId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReservationsApi.ConfirmReservationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **reservationId** | **Guid** |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createreservation"></a>
# **CreateReservation**
> Reservation CreateReservation (Reservation reservation)

Create reservation

Create a new reservation

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class CreateReservationExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ReservationsApi(httpClient, config, httpClientHandler);
            var reservation = new Reservation(); // Reservation | 

            try
            {
                // Create reservation
                Reservation result = apiInstance.CreateReservation(reservation);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReservationsApi.CreateReservation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateReservationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create reservation
    ApiResponse<Reservation> response = apiInstance.CreateReservationWithHttpInfo(reservation);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReservationsApi.CreateReservationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **reservation** | [**Reservation**](Reservation.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getreservation"></a>
# **GetReservation**
> Reservation GetReservation (Guid reservationId)

Get reservation details

Retrieve complete details of a specific reservation including guest information, dates, pricing, and current status

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class GetReservationExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ReservationsApi(httpClient, config, httpClientHandler);
            var reservationId = "reservationId_example";  // Guid | 

            try
            {
                // Get reservation details
                Reservation result = apiInstance.GetReservation(reservationId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReservationsApi.GetReservation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetReservationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get reservation details
    ApiResponse<Reservation> response = apiInstance.GetReservationWithHttpInfo(reservationId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReservationsApi.GetReservationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **reservationId** | **Guid** |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getreservationhistory"></a>
# **GetReservationHistory**
> List&lt;GetReservationHistory200ResponseInner&gt; GetReservationHistory (Guid reservationId)

Get reservation modification history

Retrieve complete history of changes to a reservation

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class GetReservationHistoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ReservationsApi(httpClient, config, httpClientHandler);
            var reservationId = "reservationId_example";  // Guid | 

            try
            {
                // Get reservation modification history
                List<GetReservationHistory200ResponseInner> result = apiInstance.GetReservationHistory(reservationId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReservationsApi.GetReservationHistory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetReservationHistoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get reservation modification history
    ApiResponse<List<GetReservationHistory200ResponseInner>> response = apiInstance.GetReservationHistoryWithHttpInfo(reservationId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReservationsApi.GetReservationHistoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **reservationId** | **Guid** |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getreservationquote"></a>
# **GetReservationQuote**
> GetReservationQuote200Response GetReservationQuote (GetReservationQuoteRequest getReservationQuoteRequest)

Get pricing quote

Calculate pricing for a potential reservation without creating it

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class GetReservationQuoteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ReservationsApi(httpClient, config, httpClientHandler);
            var getReservationQuoteRequest = new GetReservationQuoteRequest(); // GetReservationQuoteRequest | 

            try
            {
                // Get pricing quote
                GetReservationQuote200Response result = apiInstance.GetReservationQuote(getReservationQuoteRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReservationsApi.GetReservationQuote: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetReservationQuoteWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get pricing quote
    ApiResponse<GetReservationQuote200Response> response = apiInstance.GetReservationQuoteWithHttpInfo(getReservationQuoteRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReservationsApi.GetReservationQuoteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **getReservationQuoteRequest** | [**GetReservationQuoteRequest**](GetReservationQuoteRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="markreservationnoshow"></a>
# **MarkReservationNoShow**
> Reservation MarkReservationNoShow (Guid reservationId, MarkReservationNoShowRequest markReservationNoShowRequest = null)

Mark reservation as no-show

Mark a reservation as no-show when guest doesn't arrive

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class MarkReservationNoShowExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ReservationsApi(httpClient, config, httpClientHandler);
            var reservationId = "reservationId_example";  // Guid | 
            var markReservationNoShowRequest = new MarkReservationNoShowRequest(); // MarkReservationNoShowRequest |  (optional) 

            try
            {
                // Mark reservation as no-show
                Reservation result = apiInstance.MarkReservationNoShow(reservationId, markReservationNoShowRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReservationsApi.MarkReservationNoShow: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the MarkReservationNoShowWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Mark reservation as no-show
    ApiResponse<Reservation> response = apiInstance.MarkReservationNoShowWithHttpInfo(reservationId, markReservationNoShowRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReservationsApi.MarkReservationNoShowWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **reservationId** | **Guid** |  |  |
| **markReservationNoShowRequest** | [**MarkReservationNoShowRequest**](MarkReservationNoShowRequest.md) |  | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="replacereservation"></a>
# **ReplaceReservation**
> Reservation ReplaceReservation (Guid reservationId, Reservation reservation, string ifMatch = null)

Replace reservation (full update)

Replace an existing reservation with a complete new representation. All fields must be provided. For partial updates, use PATCH instead.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class ReplaceReservationExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ReservationsApi(httpClient, config, httpClientHandler);
            var reservationId = "reservationId_example";  // Guid | 
            var reservation = new Reservation(); // Reservation | 
            var ifMatch = "ifMatch_example";  // string | ETag for optimistic locking (optional) 

            try
            {
                // Replace reservation (full update)
                Reservation result = apiInstance.ReplaceReservation(reservationId, reservation, ifMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReservationsApi.ReplaceReservation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ReplaceReservationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Replace reservation (full update)
    ApiResponse<Reservation> response = apiInstance.ReplaceReservationWithHttpInfo(reservationId, reservation, ifMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReservationsApi.ReplaceReservationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **reservationId** | **Guid** |  |  |
| **reservation** | [**Reservation**](Reservation.md) |  |  |
| **ifMatch** | **string** | ETag for optimistic locking | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="searchreservations"></a>
# **SearchReservations**
> SearchReservations200Response SearchReservations (Guid? propertyId = null, string guestName = null, string confirmationNumber = null, string status = null, DateTime? checkInDate = null, DateTime? checkOutDate = null, int? pageSize = null, string cursor = null)

Advanced reservation search

Search reservations with advanced filters

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class SearchReservationsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ReservationsApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid? |  (optional) 
            var guestName = "guestName_example";  // string |  (optional) 
            var confirmationNumber = "confirmationNumber_example";  // string |  (optional) 
            var status = "PENDING";  // string |  (optional) 
            var checkInDate = DateTime.Parse("2013-10-20");  // DateTime? |  (optional) 
            var checkOutDate = DateTime.Parse("2013-10-20");  // DateTime? |  (optional) 
            var pageSize = 20;  // int? | Number of items per page (max 100) (optional)  (default to 20)
            var cursor = "cursor_example";  // string | Cursor for pagination (opaque token) (optional) 

            try
            {
                // Advanced reservation search
                SearchReservations200Response result = apiInstance.SearchReservations(propertyId, guestName, confirmationNumber, status, checkInDate, checkOutDate, pageSize, cursor);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReservationsApi.SearchReservations: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SearchReservationsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Advanced reservation search
    ApiResponse<SearchReservations200Response> response = apiInstance.SearchReservationsWithHttpInfo(propertyId, guestName, confirmationNumber, status, checkInDate, checkOutDate, pageSize, cursor);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReservationsApi.SearchReservationsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid?** |  | [optional]  |
| **guestName** | **string** |  | [optional]  |
| **confirmationNumber** | **string** |  | [optional]  |
| **status** | **string** |  | [optional]  |
| **checkInDate** | **DateTime?** |  | [optional]  |
| **checkOutDate** | **DateTime?** |  | [optional]  |
| **pageSize** | **int?** | Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string** | Cursor for pagination (opaque token) | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatereservation"></a>
# **UpdateReservation**
> Reservation UpdateReservation (Guid reservationId, Object body, string ifMatch = null)

Update reservation (partial update)

Partially update a reservation. Only provided fields will be updated. This is the recommended method for most updates.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts  **Common use cases:** - Update special requests - Change guest count - Modify arrival time - Add notes 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class UpdateReservationExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ReservationsApi(httpClient, config, httpClientHandler);
            var reservationId = "reservationId_example";  // Guid | 
            var body = {"specialRequests":"Late check-in at 10 PM","guestCount":{"adults":2,"children":1}};  // Object | 
            var ifMatch = "ifMatch_example";  // string | ETag for optimistic locking (optional) 

            try
            {
                // Update reservation (partial update)
                Reservation result = apiInstance.UpdateReservation(reservationId, body, ifMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ReservationsApi.UpdateReservation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateReservationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update reservation (partial update)
    ApiResponse<Reservation> response = apiInstance.UpdateReservationWithHttpInfo(reservationId, body, ifMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ReservationsApi.UpdateReservationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **reservationId** | **Guid** |  |  |
| **body** | **Object** |  |  |
| **ifMatch** | **string** | ETag for optimistic locking | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

