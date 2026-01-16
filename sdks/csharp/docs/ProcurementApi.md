# StayOS.ApiClient.Api.ProcurementApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ApprovePurchaseOrder**](ProcurementApi.md#approvepurchaseorder) | **POST** /procurement/purchase-orders/{poId}/approve | Approve purchase order |
| [**CreatePurchaseOrder**](ProcurementApi.md#createpurchaseorder) | **POST** /procurement/purchase-orders | Create purchase order |
| [**CreateSupplier**](ProcurementApi.md#createsupplier) | **POST** /procurement/suppliers | Create supplier |
| [**GetSupplier**](ProcurementApi.md#getsupplier) | **GET** /procurement/suppliers/{supplierId} | Get supplier details |
| [**GetSupplierPerformance**](ProcurementApi.md#getsupplierperformance) | **GET** /procurement/suppliers/{supplierId}/performance | Get supplier performance |
| [**InvoicePurchaseOrder**](ProcurementApi.md#invoicepurchaseorder) | **POST** /procurement/purchase-orders/{poId}/invoice | Record invoice for purchase order |
| [**ListPurchaseOrders**](ProcurementApi.md#listpurchaseorders) | **GET** /procurement/purchase-orders | List purchase orders |
| [**ListSuppliers**](ProcurementApi.md#listsuppliers) | **GET** /procurement/suppliers | List suppliers |
| [**ReceivePurchaseOrder**](ProcurementApi.md#receivepurchaseorder) | **POST** /procurement/purchase-orders/{poId}/receive | Receive purchase order |
| [**ReplacePurchaseOrder**](ProcurementApi.md#replacepurchaseorder) | **PUT** /procurement/purchase-orders/{poId} | Replace purchase order (full update) |
| [**ReplaceSupplier**](ProcurementApi.md#replacesupplier) | **PUT** /procurement/suppliers/{supplierId} | Replace supplier (full update) |
| [**SubmitPurchaseOrder**](ProcurementApi.md#submitpurchaseorder) | **POST** /procurement/purchase-orders/{poId}/submit | Submit purchase order |
| [**UpdatePurchaseOrder**](ProcurementApi.md#updatepurchaseorder) | **PATCH** /procurement/purchase-orders/{poId} | Update purchase order (partial update) |
| [**UpdateSupplier**](ProcurementApi.md#updatesupplier) | **PATCH** /procurement/suppliers/{supplierId} | Update supplier (partial update) |

<a id="approvepurchaseorder"></a>
# **ApprovePurchaseOrder**
> PurchaseOrder ApprovePurchaseOrder (Guid poId, ApprovePurchaseOrderRequest approvePurchaseOrderRequest = null)

Approve purchase order

Approve a purchase order for processing

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
    public class ApprovePurchaseOrderExample
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
            var apiInstance = new ProcurementApi(httpClient, config, httpClientHandler);
            var poId = "poId_example";  // Guid | 
            var approvePurchaseOrderRequest = new ApprovePurchaseOrderRequest(); // ApprovePurchaseOrderRequest |  (optional) 

            try
            {
                // Approve purchase order
                PurchaseOrder result = apiInstance.ApprovePurchaseOrder(poId, approvePurchaseOrderRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProcurementApi.ApprovePurchaseOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ApprovePurchaseOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Approve purchase order
    ApiResponse<PurchaseOrder> response = apiInstance.ApprovePurchaseOrderWithHttpInfo(poId, approvePurchaseOrderRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProcurementApi.ApprovePurchaseOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **poId** | **Guid** |  |  |
| **approvePurchaseOrderRequest** | [**ApprovePurchaseOrderRequest**](ApprovePurchaseOrderRequest.md) |  | [optional]  |

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Purchase order approved |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createpurchaseorder"></a>
# **CreatePurchaseOrder**
> Object CreatePurchaseOrder (Object body)

Create purchase order

Create a new purchase order for supplies, equipment, or services

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
    public class CreatePurchaseOrderExample
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
            var apiInstance = new ProcurementApi(httpClient, config, httpClientHandler);
            var body = null;  // Object | 

            try
            {
                // Create purchase order
                Object result = apiInstance.CreatePurchaseOrder(body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProcurementApi.CreatePurchaseOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreatePurchaseOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create purchase order
    ApiResponse<Object> response = apiInstance.CreatePurchaseOrderWithHttpInfo(body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProcurementApi.CreatePurchaseOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **body** | **Object** |  |  |

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
| **201** | Purchase order created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createsupplier"></a>
# **CreateSupplier**
> Supplier CreateSupplier (Supplier supplier)

Create supplier

Create a new supplier

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
    public class CreateSupplierExample
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
            var apiInstance = new ProcurementApi(httpClient, config, httpClientHandler);
            var supplier = new Supplier(); // Supplier | 

            try
            {
                // Create supplier
                Supplier result = apiInstance.CreateSupplier(supplier);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProcurementApi.CreateSupplier: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateSupplierWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create supplier
    ApiResponse<Supplier> response = apiInstance.CreateSupplierWithHttpInfo(supplier);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProcurementApi.CreateSupplierWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **supplier** | [**Supplier**](Supplier.md) |  |  |

### Return type

[**Supplier**](Supplier.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Supplier created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getsupplier"></a>
# **GetSupplier**
> Supplier GetSupplier (Guid supplierId)

Get supplier details

Retrieve details of a specific supplier

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
    public class GetSupplierExample
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
            var apiInstance = new ProcurementApi(httpClient, config, httpClientHandler);
            var supplierId = "supplierId_example";  // Guid | 

            try
            {
                // Get supplier details
                Supplier result = apiInstance.GetSupplier(supplierId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProcurementApi.GetSupplier: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSupplierWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get supplier details
    ApiResponse<Supplier> response = apiInstance.GetSupplierWithHttpInfo(supplierId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProcurementApi.GetSupplierWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **supplierId** | **Guid** |  |  |

### Return type

[**Supplier**](Supplier.md)

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

<a id="getsupplierperformance"></a>
# **GetSupplierPerformance**
> SupplierPerformance GetSupplierPerformance (Guid supplierId, DateTime? startDate = null, DateTime? endDate = null)

Get supplier performance

Get performance metrics for a supplier

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
    public class GetSupplierPerformanceExample
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
            var apiInstance = new ProcurementApi(httpClient, config, httpClientHandler);
            var supplierId = "supplierId_example";  // Guid | 
            var startDate = DateTime.Parse("2013-10-20");  // DateTime? |  (optional) 
            var endDate = DateTime.Parse("2013-10-20");  // DateTime? |  (optional) 

            try
            {
                // Get supplier performance
                SupplierPerformance result = apiInstance.GetSupplierPerformance(supplierId, startDate, endDate);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProcurementApi.GetSupplierPerformance: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSupplierPerformanceWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get supplier performance
    ApiResponse<SupplierPerformance> response = apiInstance.GetSupplierPerformanceWithHttpInfo(supplierId, startDate, endDate);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProcurementApi.GetSupplierPerformanceWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **supplierId** | **Guid** |  |  |
| **startDate** | **DateTime?** |  | [optional]  |
| **endDate** | **DateTime?** |  | [optional]  |

### Return type

[**SupplierPerformance**](SupplierPerformance.md)

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

<a id="invoicepurchaseorder"></a>
# **InvoicePurchaseOrder**
> PurchaseOrder InvoicePurchaseOrder (Guid poId, InvoicePurchaseOrderRequest invoicePurchaseOrderRequest)

Record invoice for purchase order

Record supplier invoice for purchase order

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
    public class InvoicePurchaseOrderExample
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
            var apiInstance = new ProcurementApi(httpClient, config, httpClientHandler);
            var poId = "poId_example";  // Guid | 
            var invoicePurchaseOrderRequest = new InvoicePurchaseOrderRequest(); // InvoicePurchaseOrderRequest | 

            try
            {
                // Record invoice for purchase order
                PurchaseOrder result = apiInstance.InvoicePurchaseOrder(poId, invoicePurchaseOrderRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProcurementApi.InvoicePurchaseOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the InvoicePurchaseOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Record invoice for purchase order
    ApiResponse<PurchaseOrder> response = apiInstance.InvoicePurchaseOrderWithHttpInfo(poId, invoicePurchaseOrderRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProcurementApi.InvoicePurchaseOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **poId** | **Guid** |  |  |
| **invoicePurchaseOrderRequest** | [**InvoicePurchaseOrderRequest**](InvoicePurchaseOrderRequest.md) |  |  |

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Invoice recorded |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listpurchaseorders"></a>
# **ListPurchaseOrders**
> GetGuestStays200Response ListPurchaseOrders (Guid? propertyId = null, string status = null, int? pageSize = null, string cursor = null)

List purchase orders

List all purchase orders with filtering by supplier, status, property, and date range

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
    public class ListPurchaseOrdersExample
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
            var apiInstance = new ProcurementApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid? |  (optional) 
            var status = "status_example";  // string |  (optional) 
            var pageSize = 20;  // int? | Number of items per page (max 100) (optional)  (default to 20)
            var cursor = "cursor_example";  // string | Cursor for pagination (opaque token) (optional) 

            try
            {
                // List purchase orders
                GetGuestStays200Response result = apiInstance.ListPurchaseOrders(propertyId, status, pageSize, cursor);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProcurementApi.ListPurchaseOrders: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListPurchaseOrdersWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List purchase orders
    ApiResponse<GetGuestStays200Response> response = apiInstance.ListPurchaseOrdersWithHttpInfo(propertyId, status, pageSize, cursor);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProcurementApi.ListPurchaseOrdersWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid?** |  | [optional]  |
| **status** | **string** |  | [optional]  |
| **pageSize** | **int?** | Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string** | Cursor for pagination (opaque token) | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listsuppliers"></a>
# **ListSuppliers**
> ListSuppliers200Response ListSuppliers (string status = null, string category = null, int? pageSize = null, string cursor = null)

List suppliers

List all suppliers with filtering and search

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
    public class ListSuppliersExample
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
            var apiInstance = new ProcurementApi(httpClient, config, httpClientHandler);
            var status = "ACTIVE";  // string |  (optional) 
            var category = "category_example";  // string |  (optional) 
            var pageSize = 20;  // int? | Number of items per page (max 100) (optional)  (default to 20)
            var cursor = "cursor_example";  // string | Cursor for pagination (opaque token) (optional) 

            try
            {
                // List suppliers
                ListSuppliers200Response result = apiInstance.ListSuppliers(status, category, pageSize, cursor);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProcurementApi.ListSuppliers: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListSuppliersWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List suppliers
    ApiResponse<ListSuppliers200Response> response = apiInstance.ListSuppliersWithHttpInfo(status, category, pageSize, cursor);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProcurementApi.ListSuppliersWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **status** | **string** |  | [optional]  |
| **category** | **string** |  | [optional]  |
| **pageSize** | **int?** | Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string** | Cursor for pagination (opaque token) | [optional]  |

### Return type

[**ListSuppliers200Response**](ListSuppliers200Response.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="receivepurchaseorder"></a>
# **ReceivePurchaseOrder**
> PurchaseOrder ReceivePurchaseOrder (Guid poId, ReceivePurchaseOrderRequest receivePurchaseOrderRequest)

Receive purchase order

Record receipt of goods from purchase order

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
    public class ReceivePurchaseOrderExample
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
            var apiInstance = new ProcurementApi(httpClient, config, httpClientHandler);
            var poId = "poId_example";  // Guid | 
            var receivePurchaseOrderRequest = new ReceivePurchaseOrderRequest(); // ReceivePurchaseOrderRequest | 

            try
            {
                // Receive purchase order
                PurchaseOrder result = apiInstance.ReceivePurchaseOrder(poId, receivePurchaseOrderRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProcurementApi.ReceivePurchaseOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ReceivePurchaseOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Receive purchase order
    ApiResponse<PurchaseOrder> response = apiInstance.ReceivePurchaseOrderWithHttpInfo(poId, receivePurchaseOrderRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProcurementApi.ReceivePurchaseOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **poId** | **Guid** |  |  |
| **receivePurchaseOrderRequest** | [**ReceivePurchaseOrderRequest**](ReceivePurchaseOrderRequest.md) |  |  |

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Receipt recorded |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="replacepurchaseorder"></a>
# **ReplacePurchaseOrder**
> Object ReplacePurchaseOrder (Guid poId, Object body, string ifMatch = null)

Replace purchase order (full update)

Replace purchase order with complete new details including items, quantities, and delivery information

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
    public class ReplacePurchaseOrderExample
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
            var apiInstance = new ProcurementApi(httpClient, config, httpClientHandler);
            var poId = "poId_example";  // Guid | 
            var body = null;  // Object | 
            var ifMatch = "ifMatch_example";  // string | ETag for optimistic locking (optional) 

            try
            {
                // Replace purchase order (full update)
                Object result = apiInstance.ReplacePurchaseOrder(poId, body, ifMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProcurementApi.ReplacePurchaseOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ReplacePurchaseOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Replace purchase order (full update)
    ApiResponse<Object> response = apiInstance.ReplacePurchaseOrderWithHttpInfo(poId, body, ifMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProcurementApi.ReplacePurchaseOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **poId** | **Guid** |  |  |
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

<a id="replacesupplier"></a>
# **ReplaceSupplier**
> Object ReplaceSupplier (Guid supplierId, Object body, string ifMatch = null)

Replace supplier (full update)

Replace supplier information with complete new details including contact, terms, and product catalog

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
    public class ReplaceSupplierExample
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
            var apiInstance = new ProcurementApi(httpClient, config, httpClientHandler);
            var supplierId = "supplierId_example";  // Guid | 
            var body = null;  // Object | 
            var ifMatch = "ifMatch_example";  // string | ETag for optimistic locking (optional) 

            try
            {
                // Replace supplier (full update)
                Object result = apiInstance.ReplaceSupplier(supplierId, body, ifMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProcurementApi.ReplaceSupplier: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ReplaceSupplierWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Replace supplier (full update)
    ApiResponse<Object> response = apiInstance.ReplaceSupplierWithHttpInfo(supplierId, body, ifMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProcurementApi.ReplaceSupplierWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **supplierId** | **Guid** |  |  |
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

<a id="submitpurchaseorder"></a>
# **SubmitPurchaseOrder**
> PurchaseOrder SubmitPurchaseOrder (Guid poId)

Submit purchase order

Submit a purchase order to supplier

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
    public class SubmitPurchaseOrderExample
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
            var apiInstance = new ProcurementApi(httpClient, config, httpClientHandler);
            var poId = "poId_example";  // Guid | 

            try
            {
                // Submit purchase order
                PurchaseOrder result = apiInstance.SubmitPurchaseOrder(poId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProcurementApi.SubmitPurchaseOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SubmitPurchaseOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Submit purchase order
    ApiResponse<PurchaseOrder> response = apiInstance.SubmitPurchaseOrderWithHttpInfo(poId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProcurementApi.SubmitPurchaseOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **poId** | **Guid** |  |  |

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Purchase order submitted |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatepurchaseorder"></a>
# **UpdatePurchaseOrder**
> Object UpdatePurchaseOrder (Guid poId, Object body, string ifMatch = null)

Update purchase order (partial update)

Partially update purchase order to modify status, quantities, or delivery details **Common use cases:** | Update specific fields of a purchase order. **Common use cases:** - Update delivery date - Change PO status - Add notes - Modify payment terms

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
    public class UpdatePurchaseOrderExample
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
            var apiInstance = new ProcurementApi(httpClient, config, httpClientHandler);
            var poId = "poId_example";  // Guid | 
            var body = {"expectedDeliveryDate":"2025-12-25","status":"APPROVED","notes":"Urgent - expedite delivery"};  // Object | 
            var ifMatch = "ifMatch_example";  // string | ETag for optimistic locking (optional) 

            try
            {
                // Update purchase order (partial update)
                Object result = apiInstance.UpdatePurchaseOrder(poId, body, ifMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProcurementApi.UpdatePurchaseOrder: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdatePurchaseOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update purchase order (partial update)
    ApiResponse<Object> response = apiInstance.UpdatePurchaseOrderWithHttpInfo(poId, body, ifMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProcurementApi.UpdatePurchaseOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **poId** | **Guid** |  |  |
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

<a id="updatesupplier"></a>
# **UpdateSupplier**
> Object UpdateSupplier (Guid supplierId, Object body, string ifMatch = null)

Update supplier (partial update)

Partially update supplier information to modify contact details, terms, or status **Common use cases:** | Update specific fields of a supplier. **Common use cases:** - Update contact information - Change payment terms - Modify supplier status - Update rating

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
    public class UpdateSupplierExample
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
            var apiInstance = new ProcurementApi(httpClient, config, httpClientHandler);
            var supplierId = "supplierId_example";  // Guid | 
            var body = {"contactEmail":"newsales@supplier.com","paymentTerms":"NET_30","rating":4.5};  // Object | 
            var ifMatch = "ifMatch_example";  // string | ETag for optimistic locking (optional) 

            try
            {
                // Update supplier (partial update)
                Object result = apiInstance.UpdateSupplier(supplierId, body, ifMatch);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ProcurementApi.UpdateSupplier: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateSupplierWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update supplier (partial update)
    ApiResponse<Object> response = apiInstance.UpdateSupplierWithHttpInfo(supplierId, body, ifMatch);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ProcurementApi.UpdateSupplierWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **supplierId** | **Guid** |  |  |
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

