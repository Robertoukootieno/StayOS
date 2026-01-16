# StayOS.ApiClient.Api.AvailabilityApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateInventoryBlock**](AvailabilityApi.md#createinventoryblock) | **POST** /availability/block | Block inventory |
| [**DeleteInventoryBlock**](AvailabilityApi.md#deleteinventoryblock) | **DELETE** /availability/block/{blockId} | Remove inventory block |
| [**GetAvailabilityCalendar**](AvailabilityApi.md#getavailabilitycalendar) | **GET** /availability/calendar | Get availability calendar |
| [**SearchAvailability**](AvailabilityApi.md#searchavailability) | **POST** /availability/search | Search availability |
| [**UpdateAvailabilityCalendar**](AvailabilityApi.md#updateavailabilitycalendar) | **PUT** /availability/calendar | Update availability calendar (bulk) |

<a id="createinventoryblock"></a>
# **CreateInventoryBlock**
> CreateInventoryBlock201Response CreateInventoryBlock (CreateInventoryBlockRequest createInventoryBlockRequest)

Block inventory

Create an inventory block (for groups, maintenance, etc.)

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
    public class CreateInventoryBlockExample
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
            var apiInstance = new AvailabilityApi(httpClient, config, httpClientHandler);
            var createInventoryBlockRequest = new CreateInventoryBlockRequest(); // CreateInventoryBlockRequest | 

            try
            {
                // Block inventory
                CreateInventoryBlock201Response result = apiInstance.CreateInventoryBlock(createInventoryBlockRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AvailabilityApi.CreateInventoryBlock: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateInventoryBlockWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Block inventory
    ApiResponse<CreateInventoryBlock201Response> response = apiInstance.CreateInventoryBlockWithHttpInfo(createInventoryBlockRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AvailabilityApi.CreateInventoryBlockWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createInventoryBlockRequest** | [**CreateInventoryBlockRequest**](CreateInventoryBlockRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteinventoryblock"></a>
# **DeleteInventoryBlock**
> void DeleteInventoryBlock (Guid blockId)

Remove inventory block

Remove an existing inventory block

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
    public class DeleteInventoryBlockExample
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
            var apiInstance = new AvailabilityApi(httpClient, config, httpClientHandler);
            var blockId = "blockId_example";  // Guid | 

            try
            {
                // Remove inventory block
                apiInstance.DeleteInventoryBlock(blockId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AvailabilityApi.DeleteInventoryBlock: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteInventoryBlockWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove inventory block
    apiInstance.DeleteInventoryBlockWithHttpInfo(blockId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AvailabilityApi.DeleteInventoryBlockWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **blockId** | **Guid** |  |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getavailabilitycalendar"></a>
# **GetAvailabilityCalendar**
> AvailabilityCalendar GetAvailabilityCalendar (Guid propertyId, DateTime startDate, DateTime endDate, Guid? unitTypeId = null)

Get availability calendar

Retrieve availability calendar for specified date range

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
    public class GetAvailabilityCalendarExample
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
            var apiInstance = new AvailabilityApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid | 
            var startDate = DateTime.Parse("2013-10-20");  // DateTime | 
            var endDate = DateTime.Parse("2013-10-20");  // DateTime | 
            var unitTypeId = "unitTypeId_example";  // Guid? |  (optional) 

            try
            {
                // Get availability calendar
                AvailabilityCalendar result = apiInstance.GetAvailabilityCalendar(propertyId, startDate, endDate, unitTypeId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AvailabilityApi.GetAvailabilityCalendar: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAvailabilityCalendarWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get availability calendar
    ApiResponse<AvailabilityCalendar> response = apiInstance.GetAvailabilityCalendarWithHttpInfo(propertyId, startDate, endDate, unitTypeId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AvailabilityApi.GetAvailabilityCalendarWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid** |  |  |
| **startDate** | **DateTime** |  |  |
| **endDate** | **DateTime** |  |  |
| **unitTypeId** | **Guid?** |  | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="searchavailability"></a>
# **SearchAvailability**
> SearchAvailability200Response SearchAvailability (SearchAvailabilityRequest searchAvailabilityRequest)

Search availability

Search for available inventory across properties based on criteria.  This is the primary endpoint for booking engines and search interfaces.  **Performance:** Optimized for sub-200ms response time  **Caching:** Results cached for 5 minutes 

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
    public class SearchAvailabilityExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure Bearer token for authorization: BearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new AvailabilityApi(httpClient, config, httpClientHandler);
            var searchAvailabilityRequest = new SearchAvailabilityRequest(); // SearchAvailabilityRequest | 

            try
            {
                // Search availability
                SearchAvailability200Response result = apiInstance.SearchAvailability(searchAvailabilityRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AvailabilityApi.SearchAvailability: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SearchAvailabilityWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Search availability
    ApiResponse<SearchAvailability200Response> response = apiInstance.SearchAvailabilityWithHttpInfo(searchAvailabilityRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AvailabilityApi.SearchAvailabilityWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **searchAvailabilityRequest** | [**SearchAvailabilityRequest**](SearchAvailabilityRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateavailabilitycalendar"></a>
# **UpdateAvailabilityCalendar**
> UpdateAvailabilityCalendar200Response UpdateAvailabilityCalendar (UpdateAvailabilityCalendarRequest updateAvailabilityCalendarRequest)

Update availability calendar (bulk)

Bulk update availability for multiple dates

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
    public class UpdateAvailabilityCalendarExample
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
            var apiInstance = new AvailabilityApi(httpClient, config, httpClientHandler);
            var updateAvailabilityCalendarRequest = new UpdateAvailabilityCalendarRequest(); // UpdateAvailabilityCalendarRequest | 

            try
            {
                // Update availability calendar (bulk)
                UpdateAvailabilityCalendar200Response result = apiInstance.UpdateAvailabilityCalendar(updateAvailabilityCalendarRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AvailabilityApi.UpdateAvailabilityCalendar: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateAvailabilityCalendarWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update availability calendar (bulk)
    ApiResponse<UpdateAvailabilityCalendar200Response> response = apiInstance.UpdateAvailabilityCalendarWithHttpInfo(updateAvailabilityCalendarRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AvailabilityApi.UpdateAvailabilityCalendarWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **updateAvailabilityCalendarRequest** | [**UpdateAvailabilityCalendarRequest**](UpdateAvailabilityCalendarRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

