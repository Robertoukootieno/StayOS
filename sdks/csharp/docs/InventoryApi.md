# StayOS.ApiClient.Api.InventoryApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateInventoryUnit**](InventoryApi.md#createinventoryunit) | **POST** /properties/{propertyId}/inventory-units | Create inventory unit |
| [**CreateUnitType**](InventoryApi.md#createunittype) | **POST** /properties/{propertyId}/unit-types | Create unit type |
| [**GetUnitType**](InventoryApi.md#getunittype) | **GET** /unit-types/{unitTypeId} | Get unit type details |
| [**ListInventoryUnits**](InventoryApi.md#listinventoryunits) | **GET** /properties/{propertyId}/inventory-units | List inventory units for property |
| [**ListUnitTypes**](InventoryApi.md#listunittypes) | **GET** /properties/{propertyId}/unit-types | List unit types |
| [**ReplaceUnitType**](InventoryApi.md#replaceunittype) | **PUT** /unit-types/{unitTypeId} | Replace unit type (full update) |
| [**UpdateUnitType**](InventoryApi.md#updateunittype) | **PATCH** /unit-types/{unitTypeId} | Update unit type (partial update) |

<a id="createinventoryunit"></a>
# **CreateInventoryUnit**
> InventoryUnit CreateInventoryUnit (Guid propertyId, InventoryUnit inventoryUnit, Guid? idempotencyKey = null)

Create inventory unit

Add a new inventory unit to the property

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
    public class CreateInventoryUnitExample
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
            var apiInstance = new InventoryApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid | Unique property identifier
            var inventoryUnit = new InventoryUnit(); // InventoryUnit | 
            var idempotencyKey = "idempotencyKey_example";  // Guid? | Unique key for idempotent operations (UUID recommended) (optional) 

            try
            {
                // Create inventory unit
                InventoryUnit result = apiInstance.CreateInventoryUnit(propertyId, inventoryUnit, idempotencyKey);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling InventoryApi.CreateInventoryUnit: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateInventoryUnitWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create inventory unit
    ApiResponse<InventoryUnit> response = apiInstance.CreateInventoryUnitWithHttpInfo(propertyId, inventoryUnit, idempotencyKey);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InventoryApi.CreateInventoryUnitWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid** | Unique property identifier |  |
| **inventoryUnit** | [**InventoryUnit**](InventoryUnit.md) |  |  |
| **idempotencyKey** | **Guid?** | Unique key for idempotent operations (UUID recommended) | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createunittype"></a>
# **CreateUnitType**
> UnitType CreateUnitType (Guid propertyId, UnitType unitType)

Create unit type

Create a new unit type for a property

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
    public class CreateUnitTypeExample
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
            var apiInstance = new InventoryApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid | Unique property identifier
            var unitType = new UnitType(); // UnitType | 

            try
            {
                // Create unit type
                UnitType result = apiInstance.CreateUnitType(propertyId, unitType);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling InventoryApi.CreateUnitType: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateUnitTypeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create unit type
    ApiResponse<UnitType> response = apiInstance.CreateUnitTypeWithHttpInfo(propertyId, unitType);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InventoryApi.CreateUnitTypeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid** | Unique property identifier |  |
| **unitType** | [**UnitType**](UnitType.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getunittype"></a>
# **GetUnitType**
> UnitType GetUnitType (Guid unitTypeId)

Get unit type details

Retrieve details of a specific unit type

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
    public class GetUnitTypeExample
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
            var apiInstance = new InventoryApi(httpClient, config, httpClientHandler);
            var unitTypeId = "unitTypeId_example";  // Guid | 

            try
            {
                // Get unit type details
                UnitType result = apiInstance.GetUnitType(unitTypeId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling InventoryApi.GetUnitType: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetUnitTypeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get unit type details
    ApiResponse<UnitType> response = apiInstance.GetUnitTypeWithHttpInfo(unitTypeId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InventoryApi.GetUnitTypeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **unitTypeId** | **Guid** |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listinventoryunits"></a>
# **ListInventoryUnits**
> ListInventoryUnits200Response ListInventoryUnits (Guid propertyId, int? pageSize = null, string cursor = null, Guid? unitTypeId = null, string operationalStatus = null, int? floor = null)

List inventory units for property

Retrieve all inventory units (rooms, beds, suites) for a property

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
    public class ListInventoryUnitsExample
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
            var apiInstance = new InventoryApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid | Unique property identifier
            var pageSize = 20;  // int? | Number of items per page (max 100) (optional)  (default to 20)
            var cursor = "cursor_example";  // string | Cursor for pagination (opaque token) (optional) 
            var unitTypeId = "unitTypeId_example";  // Guid? | Filter by unit type (optional) 
            var operationalStatus = "AVAILABLE";  // string | Filter by operational status (optional) 
            var floor = 56;  // int? | Filter by floor number (optional) 

            try
            {
                // List inventory units for property
                ListInventoryUnits200Response result = apiInstance.ListInventoryUnits(propertyId, pageSize, cursor, unitTypeId, operationalStatus, floor);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling InventoryApi.ListInventoryUnits: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListInventoryUnitsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List inventory units for property
    ApiResponse<ListInventoryUnits200Response> response = apiInstance.ListInventoryUnitsWithHttpInfo(propertyId, pageSize, cursor, unitTypeId, operationalStatus, floor);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InventoryApi.ListInventoryUnitsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid** | Unique property identifier |  |
| **pageSize** | **int?** | Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string** | Cursor for pagination (opaque token) | [optional]  |
| **unitTypeId** | **Guid?** | Filter by unit type | [optional]  |
| **operationalStatus** | **string** | Filter by operational status | [optional]  |
| **floor** | **int?** | Filter by floor number | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listunittypes"></a>
# **ListUnitTypes**
> ListUnitTypes200Response ListUnitTypes (Guid propertyId, int? pageSize = null, string cursor = null)

List unit types

Retrieve all unit types for a property

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
    public class ListUnitTypesExample
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
            var apiInstance = new InventoryApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid | Unique property identifier
            var pageSize = 20;  // int? | Number of items per page (max 100) (optional)  (default to 20)
            var cursor = "cursor_example";  // string | Cursor for pagination (opaque token) (optional) 

            try
            {
                // List unit types
                ListUnitTypes200Response result = apiInstance.ListUnitTypes(propertyId, pageSize, cursor);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling InventoryApi.ListUnitTypes: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListUnitTypesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List unit types
    ApiResponse<ListUnitTypes200Response> response = apiInstance.ListUnitTypesWithHttpInfo(propertyId, pageSize, cursor);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InventoryApi.ListUnitTypesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid** | Unique property identifier |  |
| **pageSize** | **int?** | Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string** | Cursor for pagination (opaque token) | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="replaceunittype"></a>
# **ReplaceUnitType**
> UnitType ReplaceUnitType (Guid unitTypeId, UnitType unitType, string ifMatch = null)

Replace unit type (full update)

Replace unit type with complete new details

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
    public class ReplaceUnitTypeExample
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
            var apiInstance = new InventoryApi(httpClient, config, httpClientHandler);
            var unitTypeId = "unitTypeId_example";  // Guid | 
            var unitType = new UnitType(); // UnitType | 
            var ifMatch = "ifMatch_example";  // string | ETag for optimistic locking (optional) 

            try
            {
                // Replace unit type (full update)
                UnitType result = apiInstance.ReplaceUnitType(unitTypeId, unitType, ifMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling InventoryApi.ReplaceUnitType: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ReplaceUnitTypeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Replace unit type (full update)
    ApiResponse<UnitType> response = apiInstance.ReplaceUnitTypeWithHttpInfo(unitTypeId, unitType, ifMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InventoryApi.ReplaceUnitTypeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **unitTypeId** | **Guid** |  |  |
| **unitType** | [**UnitType**](UnitType.md) |  |  |
| **ifMatch** | **string** | ETag for optimistic locking | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateunittype"></a>
# **UpdateUnitType**
> UnitType UpdateUnitType (Guid unitTypeId, Object body, string ifMatch = null)

Update unit type (partial update)

Update specific fields of a unit type

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
    public class UpdateUnitTypeExample
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
            var apiInstance = new InventoryApi(httpClient, config, httpClientHandler);
            var unitTypeId = "unitTypeId_example";  // Guid | 
            var body = null;  // Object | 
            var ifMatch = "ifMatch_example";  // string | ETag for optimistic locking (optional) 

            try
            {
                // Update unit type (partial update)
                UnitType result = apiInstance.UpdateUnitType(unitTypeId, body, ifMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling InventoryApi.UpdateUnitType: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateUnitTypeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update unit type (partial update)
    ApiResponse<UnitType> response = apiInstance.UpdateUnitTypeWithHttpInfo(unitTypeId, body, ifMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InventoryApi.UpdateUnitTypeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **unitTypeId** | **Guid** |  |  |
| **body** | **Object** |  |  |
| **ifMatch** | **string** | ETag for optimistic locking | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

