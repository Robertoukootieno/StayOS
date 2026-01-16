# StayOS.ApiClient.Api.PropertiesApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateProperty**](PropertiesApi.md#createproperty) | **POST** /properties | Create property |
| [**DeleteProperty**](PropertiesApi.md#deleteproperty) | **DELETE** /properties/{propertyId} | Delete property |
| [**GetProperty**](PropertiesApi.md#getproperty) | **GET** /properties/{propertyId} | Get property by ID |
| [**ListProperties**](PropertiesApi.md#listproperties) | **GET** /properties | List properties |
| [**ReplaceInventoryUnit**](PropertiesApi.md#replaceinventoryunit) | **PUT** /inventory-units/{unitId} | Replace inventory unit (full update) |
| [**ReplaceProperty**](PropertiesApi.md#replaceproperty) | **PUT** /properties/{propertyId} | Replace property (full update) |
| [**ReplaceRateStrategy**](PropertiesApi.md#replaceratestrategy) | **PUT** /rate-strategies/{strategyId} | Replace rate strategy (full update) |
| [**UpdateInventoryUnit**](PropertiesApi.md#updateinventoryunit) | **PATCH** /inventory-units/{unitId} | Update inventory unit (partial update) |
| [**UpdateProperty**](PropertiesApi.md#updateproperty) | **PATCH** /properties/{propertyId} | Update property (partial update) |
| [**UpdateRateStrategy**](PropertiesApi.md#updateratestrategy) | **PATCH** /rate-strategies/{strategyId} | Update rate strategy (partial update) |

<a id="createproperty"></a>
# **CreateProperty**
> Property CreateProperty (Property property, Guid? idempotencyKey = null)

Create property

Create a new property. This is typically an administrative operation.  **Authorization:** Requires `write:properties` or `admin:all` scope  **Idempotency:** Supports idempotency via `Idempotency-Key` header 

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
    public class CreatePropertyExample
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
            var apiInstance = new PropertiesApi(httpClient, config, httpClientHandler);
            var property = new Property(); // Property | 
            var idempotencyKey = "idempotencyKey_example";  // Guid? | Unique key for idempotent operations (UUID recommended) (optional) 

            try
            {
                // Create property
                Property result = apiInstance.CreateProperty(property, idempotencyKey);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PropertiesApi.CreateProperty: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreatePropertyWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create property
    ApiResponse<Property> response = apiInstance.CreatePropertyWithHttpInfo(property, idempotencyKey);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PropertiesApi.CreatePropertyWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **property** | [**Property**](Property.md) |  |  |
| **idempotencyKey** | **Guid?** | Unique key for idempotent operations (UUID recommended) | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteproperty"></a>
# **DeleteProperty**
> void DeleteProperty (Guid propertyId)

Delete property

Soft delete a property. Property status changes to CLOSED.  **Warning:** This operation cannot be undone. All future reservations will be cancelled. 

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
    public class DeletePropertyExample
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
            var apiInstance = new PropertiesApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid | Unique property identifier

            try
            {
                // Delete property
                apiInstance.DeleteProperty(propertyId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PropertiesApi.DeleteProperty: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeletePropertyWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete property
    apiInstance.DeletePropertyWithHttpInfo(propertyId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PropertiesApi.DeletePropertyWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid** | Unique property identifier |  |

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
| **204** | Successful operation with no content |  * X-Request-Id - Unique request identifier for tracing <br>  |
| **404** | Resource not found |  -  |
| **409** | Cannot delete property with active reservations |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getproperty"></a>
# **GetProperty**
> Property GetProperty (Guid propertyId, string expand = null, string ifNoneMatch = null)

Get property by ID

Retrieve detailed information about a specific property

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
    public class GetPropertyExample
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
            var apiInstance = new PropertiesApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid | Unique property identifier
            var expand = property,guest,rateStrategy;  // string | Comma-separated list of related resources to include (optional) 
            var ifNoneMatch = "ifNoneMatch_example";  // string | ETag for conditional requests (optional) 

            try
            {
                // Get property by ID
                Property result = apiInstance.GetProperty(propertyId, expand, ifNoneMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PropertiesApi.GetProperty: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetPropertyWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get property by ID
    ApiResponse<Property> response = apiInstance.GetPropertyWithHttpInfo(propertyId, expand, ifNoneMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PropertiesApi.GetPropertyWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid** | Unique property identifier |  |
| **expand** | **string** | Comma-separated list of related resources to include | [optional]  |
| **ifNoneMatch** | **string** | ETag for conditional requests | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listproperties"></a>
# **ListProperties**
> ListProperties200Response ListProperties (int? pageSize = null, string cursor = null, Guid? organizationId = null, string operationalStatus = null, string classification = null, string sortBy = null, string sortOrder = null, string expand = null)

List properties

Retrieve a paginated list of properties. Supports filtering, sorting, and field expansion.  **Authorization:** Requires `read:properties` scope  **Rate Limit:** 100 requests/minute 

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
    public class ListPropertiesExample
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
            var apiInstance = new PropertiesApi(httpClient, config, httpClientHandler);
            var pageSize = 20;  // int? | Number of items per page (max 100) (optional)  (default to 20)
            var cursor = "cursor_example";  // string | Cursor for pagination (opaque token) (optional) 
            var organizationId = "organizationId_example";  // Guid? | Filter by organization (optional) 
            var operationalStatus = "ACTIVE";  // string | Filter by operational status (optional) 
            var classification = "HOTEL";  // string | Filter by property classification (optional) 
            var sortBy = "sortBy_example";  // string | Field to sort by (optional) 
            var sortOrder = "asc";  // string | Sort order (optional)  (default to asc)
            var expand = property,guest,rateStrategy;  // string | Comma-separated list of related resources to include (optional) 

            try
            {
                // List properties
                ListProperties200Response result = apiInstance.ListProperties(pageSize, cursor, organizationId, operationalStatus, classification, sortBy, sortOrder, expand);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PropertiesApi.ListProperties: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListPropertiesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List properties
    ApiResponse<ListProperties200Response> response = apiInstance.ListPropertiesWithHttpInfo(pageSize, cursor, organizationId, operationalStatus, classification, sortBy, sortOrder, expand);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PropertiesApi.ListPropertiesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **pageSize** | **int?** | Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string** | Cursor for pagination (opaque token) | [optional]  |
| **organizationId** | **Guid?** | Filter by organization | [optional]  |
| **operationalStatus** | **string** | Filter by operational status | [optional]  |
| **classification** | **string** | Filter by property classification | [optional]  |
| **sortBy** | **string** | Field to sort by | [optional]  |
| **sortOrder** | **string** | Sort order | [optional] [default to asc] |
| **expand** | **string** | Comma-separated list of related resources to include | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="replaceinventoryunit"></a>
# **ReplaceInventoryUnit**
> Object ReplaceInventoryUnit (Guid unitId, Object body, string ifMatch = null)

Replace inventory unit (full update)

Replace inventory unit with complete new details including type, status, and physical attributes

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
    public class ReplaceInventoryUnitExample
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
            var apiInstance = new PropertiesApi(httpClient, config, httpClientHandler);
            var unitId = "unitId_example";  // Guid | 
            var body = null;  // Object | 
            var ifMatch = "ifMatch_example";  // string | ETag for optimistic locking (optional) 

            try
            {
                // Replace inventory unit (full update)
                Object result = apiInstance.ReplaceInventoryUnit(unitId, body, ifMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PropertiesApi.ReplaceInventoryUnit: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ReplaceInventoryUnitWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Replace inventory unit (full update)
    ApiResponse<Object> response = apiInstance.ReplaceInventoryUnitWithHttpInfo(unitId, body, ifMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PropertiesApi.ReplaceInventoryUnitWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **unitId** | **Guid** |  |  |
| **body** | **Object** |  |  |
| **ifMatch** | **string** | ETag for optimistic locking | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="replaceproperty"></a>
# **ReplaceProperty**
> Property ReplaceProperty (Guid propertyId, Property property, string ifMatch = null)

Replace property (full update)

Replace an existing property with a complete new representation. All fields must be provided. For partial updates, use PATCH instead.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts 

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
    public class ReplacePropertyExample
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
            var apiInstance = new PropertiesApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid | Unique property identifier
            var property = new Property(); // Property | 
            var ifMatch = "ifMatch_example";  // string | ETag for optimistic locking (optional) 

            try
            {
                // Replace property (full update)
                Property result = apiInstance.ReplaceProperty(propertyId, property, ifMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PropertiesApi.ReplaceProperty: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ReplacePropertyWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Replace property (full update)
    ApiResponse<Property> response = apiInstance.ReplacePropertyWithHttpInfo(propertyId, property, ifMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PropertiesApi.ReplacePropertyWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid** | Unique property identifier |  |
| **property** | [**Property**](Property.md) |  |  |
| **ifMatch** | **string** | ETag for optimistic locking | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="replaceratestrategy"></a>
# **ReplaceRateStrategy**
> RateStrategy ReplaceRateStrategy (Guid strategyId, RateStrategy rateStrategy, string ifMatch = null)

Replace rate strategy (full update)

Replace rate strategy with complete new pricing rules, restrictions, and yield management settings

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
    public class ReplaceRateStrategyExample
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
            var apiInstance = new PropertiesApi(httpClient, config, httpClientHandler);
            var strategyId = "strategyId_example";  // Guid | 
            var rateStrategy = new RateStrategy(); // RateStrategy | 
            var ifMatch = "ifMatch_example";  // string | ETag for optimistic locking (optional) 

            try
            {
                // Replace rate strategy (full update)
                RateStrategy result = apiInstance.ReplaceRateStrategy(strategyId, rateStrategy, ifMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PropertiesApi.ReplaceRateStrategy: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ReplaceRateStrategyWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Replace rate strategy (full update)
    ApiResponse<RateStrategy> response = apiInstance.ReplaceRateStrategyWithHttpInfo(strategyId, rateStrategy, ifMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PropertiesApi.ReplaceRateStrategyWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **strategyId** | **Guid** |  |  |
| **rateStrategy** | [**RateStrategy**](RateStrategy.md) |  |  |
| **ifMatch** | **string** | ETag for optimistic locking | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateinventoryunit"></a>
# **UpdateInventoryUnit**
> Object UpdateInventoryUnit (Guid unitId, Object body, string ifMatch = null)

Update inventory unit (partial update)

Update specific fields of an inventory unit.  **Common use cases:** - Change unit status (AVAILABLE → MAINTENANCE) - Update room features - Modify floor/location - Update amenities 

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
    public class UpdateInventoryUnitExample
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
            var apiInstance = new PropertiesApi(httpClient, config, httpClientHandler);
            var unitId = "unitId_example";  // Guid | 
            var body = {"status":"MAINTENANCE","maintenanceNotes":"AC repair scheduled"};  // Object | 
            var ifMatch = "ifMatch_example";  // string | ETag for optimistic locking (optional) 

            try
            {
                // Update inventory unit (partial update)
                Object result = apiInstance.UpdateInventoryUnit(unitId, body, ifMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PropertiesApi.UpdateInventoryUnit: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateInventoryUnitWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update inventory unit (partial update)
    ApiResponse<Object> response = apiInstance.UpdateInventoryUnitWithHttpInfo(unitId, body, ifMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PropertiesApi.UpdateInventoryUnitWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **unitId** | **Guid** |  |  |
| **body** | **Object** |  |  |
| **ifMatch** | **string** | ETag for optimistic locking | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateproperty"></a>
# **UpdateProperty**
> Property UpdateProperty (Guid propertyId, Object body, string ifMatch = null)

Update property (partial update)

Partially update a property. Only provided fields will be updated. This is the recommended method for most updates.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts  **Example:** Update only the property name and contact email: ```json {   \"name\": \"New Property Name\",   \"contactInfo\": {     \"email\": \"newemail@property.com\"   } } ``` 

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
    public class UpdatePropertyExample
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
            var apiInstance = new PropertiesApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid | Unique property identifier
            var body = {"name":"Updated Property Name","contactInfo":{"email":"newemail@example.com"}};  // Object | 
            var ifMatch = "ifMatch_example";  // string | ETag for optimistic locking (optional) 

            try
            {
                // Update property (partial update)
                Property result = apiInstance.UpdateProperty(propertyId, body, ifMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PropertiesApi.UpdateProperty: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdatePropertyWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update property (partial update)
    ApiResponse<Property> response = apiInstance.UpdatePropertyWithHttpInfo(propertyId, body, ifMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PropertiesApi.UpdatePropertyWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid** | Unique property identifier |  |
| **body** | **Object** |  |  |
| **ifMatch** | **string** | ETag for optimistic locking | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateratestrategy"></a>
# **UpdateRateStrategy**
> RateStrategy UpdateRateStrategy (Guid strategyId, Object body, string ifMatch = null)

Update rate strategy (partial update)

Update specific fields of a rate strategy.  **Common use cases:** - Adjust base rate - Update seasonal modifiers - Change minimum stay requirements - Modify cancellation policy 

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
    public class UpdateRateStrategyExample
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
            var apiInstance = new PropertiesApi(httpClient, config, httpClientHandler);
            var strategyId = "strategyId_example";  // Guid | 
            var body = {"baseRate":{"amount":199.99,"currency":"USD"},"minimumStay":2};  // Object | 
            var ifMatch = "ifMatch_example";  // string | ETag for optimistic locking (optional) 

            try
            {
                // Update rate strategy (partial update)
                RateStrategy result = apiInstance.UpdateRateStrategy(strategyId, body, ifMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PropertiesApi.UpdateRateStrategy: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateRateStrategyWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update rate strategy (partial update)
    ApiResponse<RateStrategy> response = apiInstance.UpdateRateStrategyWithHttpInfo(strategyId, body, ifMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PropertiesApi.UpdateRateStrategyWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **strategyId** | **Guid** |  |  |
| **body** | **Object** |  |  |
| **ifMatch** | **string** | ETag for optimistic locking | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

