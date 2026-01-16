# StayOS.ApiClient.Api.BillingApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddFolioAdjustment**](BillingApi.md#addfolioadjustment) | **POST** /folios/{folioId}/adjustments | Add adjustment to folio |
| [**AddFolioCharge**](BillingApi.md#addfoliocharge) | **POST** /folios/{folioId}/charges | Add charge to folio |
| [**AddFolioLineItem**](BillingApi.md#addfoliolineitem) | **POST** /folios/{folioId}/line-items | Add line item to folio |
| [**BatchProcessPayments**](BillingApi.md#batchprocesspayments) | **POST** /payments/batch | Batch payment processing |
| [**CapturePayment**](BillingApi.md#capturepayment) | **POST** /payments/{paymentId}/capture | Capture payment |
| [**CloseFolio**](BillingApi.md#closefolio) | **POST** /folios/{folioId}/close | Close folio |
| [**CreateFolio**](BillingApi.md#createfolio) | **POST** /folios | Create folio |
| [**CreatePayment**](BillingApi.md#createpayment) | **POST** /payments | Process payment |
| [**DisputeFolio**](BillingApi.md#disputefolio) | **POST** /folios/{folioId}/dispute | Dispute folio |
| [**GetFolio**](BillingApi.md#getfolio) | **GET** /folios/{folioId} | Get folio details |
| [**GetFolioPDF**](BillingApi.md#getfoliopdf) | **GET** /folios/{folioId}/pdf | Download folio PDF |
| [**GetPayment**](BillingApi.md#getpayment) | **GET** /payments/{paymentId} | Get payment details |
| [**GetPaymentReceipt**](BillingApi.md#getpaymentreceipt) | **GET** /payments/{paymentId}/receipt | Get payment receipt |
| [**GetRevenueReconciliation**](BillingApi.md#getrevenuereconciliation) | **GET** /revenue/reconciliation | Get revenue reconciliation |
| [**GetRevenueReports**](BillingApi.md#getrevenuereports) | **GET** /revenue/reports | Get revenue reports |
| [**ListFolios**](BillingApi.md#listfolios) | **GET** /folios | List folios |
| [**ListPayments**](BillingApi.md#listpayments) | **GET** /payments | List payments |
| [**RefundPayment**](BillingApi.md#refundpayment) | **POST** /payments/{paymentId}/refund | Refund payment |
| [**RemoveFolioLineItem**](BillingApi.md#removefoliolineitem) | **DELETE** /folios/{folioId}/line-items/{itemId} | Remove line item from folio |
| [**ReopenFolio**](BillingApi.md#reopenfolio) | **POST** /folios/{folioId}/reopen | Reopen folio |

<a id="addfolioadjustment"></a>
# **AddFolioAdjustment**
> LineItem AddFolioAdjustment (Guid folioId, AddFolioAdjustmentRequest addFolioAdjustmentRequest)

Add adjustment to folio

Add an adjustment (discount, comp, etc.) to a folio

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
    public class AddFolioAdjustmentExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var folioId = "folioId_example";  // Guid | 
            var addFolioAdjustmentRequest = new AddFolioAdjustmentRequest(); // AddFolioAdjustmentRequest | 

            try
            {
                // Add adjustment to folio
                LineItem result = apiInstance.AddFolioAdjustment(folioId, addFolioAdjustmentRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.AddFolioAdjustment: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddFolioAdjustmentWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Add adjustment to folio
    ApiResponse<LineItem> response = apiInstance.AddFolioAdjustmentWithHttpInfo(folioId, addFolioAdjustmentRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.AddFolioAdjustmentWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **folioId** | **Guid** |  |  |
| **addFolioAdjustmentRequest** | [**AddFolioAdjustmentRequest**](AddFolioAdjustmentRequest.md) |  |  |

### Return type

[**LineItem**](LineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Adjustment added |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="addfoliocharge"></a>
# **AddFolioCharge**
> Object AddFolioCharge (Guid folioId, AddFolioChargeRequest addFolioChargeRequest)

Add charge to folio

Add a new charge to a guest folio for services, amenities, or incidentals

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
    public class AddFolioChargeExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var folioId = "folioId_example";  // Guid | 
            var addFolioChargeRequest = new AddFolioChargeRequest(); // AddFolioChargeRequest | 

            try
            {
                // Add charge to folio
                Object result = apiInstance.AddFolioCharge(folioId, addFolioChargeRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.AddFolioCharge: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddFolioChargeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Add charge to folio
    ApiResponse<Object> response = apiInstance.AddFolioChargeWithHttpInfo(folioId, addFolioChargeRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.AddFolioChargeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **folioId** | **Guid** |  |  |
| **addFolioChargeRequest** | [**AddFolioChargeRequest**](AddFolioChargeRequest.md) |  |  |

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
| **201** | Charge added |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="addfoliolineitem"></a>
# **AddFolioLineItem**
> LineItem AddFolioLineItem (Guid folioId, LineItem lineItem)

Add line item to folio

Add a line item to a folio

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
    public class AddFolioLineItemExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var folioId = "folioId_example";  // Guid | 
            var lineItem = new LineItem(); // LineItem | 

            try
            {
                // Add line item to folio
                LineItem result = apiInstance.AddFolioLineItem(folioId, lineItem);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.AddFolioLineItem: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddFolioLineItemWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Add line item to folio
    ApiResponse<LineItem> response = apiInstance.AddFolioLineItemWithHttpInfo(folioId, lineItem);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.AddFolioLineItemWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **folioId** | **Guid** |  |  |
| **lineItem** | [**LineItem**](LineItem.md) |  |  |

### Return type

[**LineItem**](LineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Line item added |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="batchprocesspayments"></a>
# **BatchProcessPayments**
> BatchProcessPayments200Response BatchProcessPayments (BatchProcessPaymentsRequest batchProcessPaymentsRequest)

Batch payment processing

Process multiple payments in a single batch

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
    public class BatchProcessPaymentsExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var batchProcessPaymentsRequest = new BatchProcessPaymentsRequest(); // BatchProcessPaymentsRequest | 

            try
            {
                // Batch payment processing
                BatchProcessPayments200Response result = apiInstance.BatchProcessPayments(batchProcessPaymentsRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.BatchProcessPayments: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the BatchProcessPaymentsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Batch payment processing
    ApiResponse<BatchProcessPayments200Response> response = apiInstance.BatchProcessPaymentsWithHttpInfo(batchProcessPaymentsRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.BatchProcessPaymentsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **batchProcessPaymentsRequest** | [**BatchProcessPaymentsRequest**](BatchProcessPaymentsRequest.md) |  |  |

### Return type

[**BatchProcessPayments200Response**](BatchProcessPayments200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Batch processed |  -  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="capturepayment"></a>
# **CapturePayment**
> Payment CapturePayment (Guid paymentId, CapturePaymentRequest capturePaymentRequest = null)

Capture payment

Capture a pre-authorized payment

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
    public class CapturePaymentExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var paymentId = "paymentId_example";  // Guid | 
            var capturePaymentRequest = new CapturePaymentRequest(); // CapturePaymentRequest |  (optional) 

            try
            {
                // Capture payment
                Payment result = apiInstance.CapturePayment(paymentId, capturePaymentRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.CapturePayment: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CapturePaymentWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Capture payment
    ApiResponse<Payment> response = apiInstance.CapturePaymentWithHttpInfo(paymentId, capturePaymentRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.CapturePaymentWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **paymentId** | **Guid** |  |  |
| **capturePaymentRequest** | [**CapturePaymentRequest**](CapturePaymentRequest.md) |  | [optional]  |

### Return type

[**Payment**](Payment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Payment captured |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="closefolio"></a>
# **CloseFolio**
> Folio CloseFolio (Guid folioId)

Close folio

Close a folio after final settlement

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
    public class CloseFolioExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var folioId = "folioId_example";  // Guid | 

            try
            {
                // Close folio
                Folio result = apiInstance.CloseFolio(folioId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.CloseFolio: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CloseFolioWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Close folio
    ApiResponse<Folio> response = apiInstance.CloseFolioWithHttpInfo(folioId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.CloseFolioWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **folioId** | **Guid** |  |  |

### Return type

[**Folio**](Folio.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Folio closed |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createfolio"></a>
# **CreateFolio**
> Object CreateFolio (Object body)

Create folio

Create a new guest folio for billing and charge management during a stay

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
    public class CreateFolioExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var body = null;  // Object | 

            try
            {
                // Create folio
                Object result = apiInstance.CreateFolio(body);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.CreateFolio: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateFolioWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create folio
    ApiResponse<Object> response = apiInstance.CreateFolioWithHttpInfo(body);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.CreateFolioWithHttpInfo: " + e.Message);
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
| **201** | Folio created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createpayment"></a>
# **CreatePayment**
> Object CreatePayment (CreatePaymentRequest createPaymentRequest)

Process payment

Process a new payment for a folio using credit card, cash, or other payment methods

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
    public class CreatePaymentExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var createPaymentRequest = new CreatePaymentRequest(); // CreatePaymentRequest | 

            try
            {
                // Process payment
                Object result = apiInstance.CreatePayment(createPaymentRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.CreatePayment: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreatePaymentWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Process payment
    ApiResponse<Object> response = apiInstance.CreatePaymentWithHttpInfo(createPaymentRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.CreatePaymentWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createPaymentRequest** | [**CreatePaymentRequest**](CreatePaymentRequest.md) |  |  |

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
| **201** | Payment processed |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="disputefolio"></a>
# **DisputeFolio**
> Folio DisputeFolio (Guid folioId, DisputeFolioRequest disputeFolioRequest)

Dispute folio

Create a dispute for a folio

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
    public class DisputeFolioExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var folioId = "folioId_example";  // Guid | 
            var disputeFolioRequest = new DisputeFolioRequest(); // DisputeFolioRequest | 

            try
            {
                // Dispute folio
                Folio result = apiInstance.DisputeFolio(folioId, disputeFolioRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.DisputeFolio: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DisputeFolioWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Dispute folio
    ApiResponse<Folio> response = apiInstance.DisputeFolioWithHttpInfo(folioId, disputeFolioRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.DisputeFolioWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **folioId** | **Guid** |  |  |
| **disputeFolioRequest** | [**DisputeFolioRequest**](DisputeFolioRequest.md) |  |  |

### Return type

[**Folio**](Folio.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Dispute created |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getfolio"></a>
# **GetFolio**
> Object GetFolio (Guid folioId)

Get folio details

Retrieve complete folio details including all charges, payments, adjustments, and current balance

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
    public class GetFolioExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var folioId = "folioId_example";  // Guid | 

            try
            {
                // Get folio details
                Object result = apiInstance.GetFolio(folioId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.GetFolio: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetFolioWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get folio details
    ApiResponse<Object> response = apiInstance.GetFolioWithHttpInfo(folioId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.GetFolioWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **folioId** | **Guid** |  |  |

### Return type

**Object**

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

<a id="getfoliopdf"></a>
# **GetFolioPDF**
> FileParameter GetFolioPDF (Guid folioId)

Download folio PDF

Download folio as PDF document

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
    public class GetFolioPDFExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var folioId = "folioId_example";  // Guid | 

            try
            {
                // Download folio PDF
                FileParameter result = apiInstance.GetFolioPDF(folioId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.GetFolioPDF: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetFolioPDFWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Download folio PDF
    ApiResponse<FileParameter> response = apiInstance.GetFolioPDFWithHttpInfo(folioId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.GetFolioPDFWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **folioId** | **Guid** |  |  |

### Return type

[**FileParameter**](FileParameter.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | PDF document |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getpayment"></a>
# **GetPayment**
> Object GetPayment (Guid paymentId)

Get payment details

Retrieve complete payment details including amount, method, status, and transaction information

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
    public class GetPaymentExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var paymentId = "paymentId_example";  // Guid | 

            try
            {
                // Get payment details
                Object result = apiInstance.GetPayment(paymentId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.GetPayment: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetPaymentWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get payment details
    ApiResponse<Object> response = apiInstance.GetPaymentWithHttpInfo(paymentId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.GetPaymentWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **paymentId** | **Guid** |  |  |

### Return type

**Object**

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

<a id="getpaymentreceipt"></a>
# **GetPaymentReceipt**
> FileParameter GetPaymentReceipt (Guid paymentId)

Get payment receipt

Retrieve payment receipt

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
    public class GetPaymentReceiptExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var paymentId = "paymentId_example";  // Guid | 

            try
            {
                // Get payment receipt
                FileParameter result = apiInstance.GetPaymentReceipt(paymentId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.GetPaymentReceipt: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetPaymentReceiptWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get payment receipt
    ApiResponse<FileParameter> response = apiInstance.GetPaymentReceiptWithHttpInfo(paymentId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.GetPaymentReceiptWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **paymentId** | **Guid** |  |  |

### Return type

[**FileParameter**](FileParameter.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getrevenuereconciliation"></a>
# **GetRevenueReconciliation**
> GetRevenueReconciliation200Response GetRevenueReconciliation (DateTime date, Guid? propertyId = null)

Get revenue reconciliation

Retrieve revenue reconciliation data

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
    public class GetRevenueReconciliationExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var date = DateTime.Parse("2013-10-20");  // DateTime | 
            var propertyId = "propertyId_example";  // Guid? |  (optional) 

            try
            {
                // Get revenue reconciliation
                GetRevenueReconciliation200Response result = apiInstance.GetRevenueReconciliation(date, propertyId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.GetRevenueReconciliation: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetRevenueReconciliationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get revenue reconciliation
    ApiResponse<GetRevenueReconciliation200Response> response = apiInstance.GetRevenueReconciliationWithHttpInfo(date, propertyId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.GetRevenueReconciliationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **date** | **DateTime** |  |  |
| **propertyId** | **Guid?** |  | [optional]  |

### Return type

[**GetRevenueReconciliation200Response**](GetRevenueReconciliation200Response.md)

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

<a id="getrevenuereports"></a>
# **GetRevenueReports**
> RevenueReport GetRevenueReports (DateTime startDate, DateTime endDate, Guid? propertyId = null, string groupBy = null)

Get revenue reports

Retrieve revenue reports with various breakdowns

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
    public class GetRevenueReportsExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var startDate = DateTime.Parse("2013-10-20");  // DateTime | 
            var endDate = DateTime.Parse("2013-10-20");  // DateTime | 
            var propertyId = "propertyId_example";  // Guid? |  (optional) 
            var groupBy = "DAY";  // string |  (optional) 

            try
            {
                // Get revenue reports
                RevenueReport result = apiInstance.GetRevenueReports(startDate, endDate, propertyId, groupBy);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.GetRevenueReports: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetRevenueReportsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get revenue reports
    ApiResponse<RevenueReport> response = apiInstance.GetRevenueReportsWithHttpInfo(startDate, endDate, propertyId, groupBy);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.GetRevenueReportsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **startDate** | **DateTime** |  |  |
| **endDate** | **DateTime** |  |  |
| **propertyId** | **Guid?** |  | [optional]  |
| **groupBy** | **string** |  | [optional]  |

### Return type

[**RevenueReport**](RevenueReport.md)

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

<a id="listfolios"></a>
# **ListFolios**
> GetGuestStays200Response ListFolios (Guid? propertyId = null, Guid? guestId = null, string status = null, int? pageSize = null, string cursor = null)

List folios

List all guest folios with filtering by property, guest, status, and date range

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
    public class ListFoliosExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid? |  (optional) 
            var guestId = "guestId_example";  // Guid? |  (optional) 
            var status = "OPEN";  // string |  (optional) 
            var pageSize = 20;  // int? | Number of items per page (max 100) (optional)  (default to 20)
            var cursor = "cursor_example";  // string | Cursor for pagination (opaque token) (optional) 

            try
            {
                // List folios
                GetGuestStays200Response result = apiInstance.ListFolios(propertyId, guestId, status, pageSize, cursor);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.ListFolios: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListFoliosWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List folios
    ApiResponse<GetGuestStays200Response> response = apiInstance.ListFoliosWithHttpInfo(propertyId, guestId, status, pageSize, cursor);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.ListFoliosWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid?** |  | [optional]  |
| **guestId** | **Guid?** |  | [optional]  |
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

<a id="listpayments"></a>
# **ListPayments**
> ListPayments200Response ListPayments (Guid? folioId = null, string status = null, int? pageSize = null, string cursor = null)

List payments

List all payments with filtering options

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
    public class ListPaymentsExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var folioId = "folioId_example";  // Guid? |  (optional) 
            var status = "PENDING";  // string |  (optional) 
            var pageSize = 20;  // int? | Number of items per page (max 100) (optional)  (default to 20)
            var cursor = "cursor_example";  // string | Cursor for pagination (opaque token) (optional) 

            try
            {
                // List payments
                ListPayments200Response result = apiInstance.ListPayments(folioId, status, pageSize, cursor);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.ListPayments: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListPaymentsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List payments
    ApiResponse<ListPayments200Response> response = apiInstance.ListPaymentsWithHttpInfo(folioId, status, pageSize, cursor);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.ListPaymentsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **folioId** | **Guid?** |  | [optional]  |
| **status** | **string** |  | [optional]  |
| **pageSize** | **int?** | Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string** | Cursor for pagination (opaque token) | [optional]  |

### Return type

[**ListPayments200Response**](ListPayments200Response.md)

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

<a id="refundpayment"></a>
# **RefundPayment**
> Payment RefundPayment (Guid paymentId, RefundPaymentRequest refundPaymentRequest)

Refund payment

Process a refund for a payment

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
    public class RefundPaymentExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var paymentId = "paymentId_example";  // Guid | 
            var refundPaymentRequest = new RefundPaymentRequest(); // RefundPaymentRequest | 

            try
            {
                // Refund payment
                Payment result = apiInstance.RefundPayment(paymentId, refundPaymentRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.RefundPayment: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RefundPaymentWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Refund payment
    ApiResponse<Payment> response = apiInstance.RefundPaymentWithHttpInfo(paymentId, refundPaymentRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.RefundPaymentWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **paymentId** | **Guid** |  |  |
| **refundPaymentRequest** | [**RefundPaymentRequest**](RefundPaymentRequest.md) |  |  |

### Return type

[**Payment**](Payment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Refund processed |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="removefoliolineitem"></a>
# **RemoveFolioLineItem**
> void RemoveFolioLineItem (Guid folioId, Guid itemId)

Remove line item from folio

Remove a line item from a folio

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
    public class RemoveFolioLineItemExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var folioId = "folioId_example";  // Guid | 
            var itemId = "itemId_example";  // Guid | 

            try
            {
                // Remove line item from folio
                apiInstance.RemoveFolioLineItem(folioId, itemId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.RemoveFolioLineItem: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveFolioLineItemWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove line item from folio
    apiInstance.RemoveFolioLineItemWithHttpInfo(folioId, itemId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.RemoveFolioLineItemWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **folioId** | **Guid** |  |  |
| **itemId** | **Guid** |  |  |

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
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="reopenfolio"></a>
# **ReopenFolio**
> Folio ReopenFolio (Guid folioId, CancelServiceRequestRequest cancelServiceRequestRequest = null)

Reopen folio

Reopen a closed folio for additional charges

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
    public class ReopenFolioExample
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
            var apiInstance = new BillingApi(httpClient, config, httpClientHandler);
            var folioId = "folioId_example";  // Guid | 
            var cancelServiceRequestRequest = new CancelServiceRequestRequest(); // CancelServiceRequestRequest |  (optional) 

            try
            {
                // Reopen folio
                Folio result = apiInstance.ReopenFolio(folioId, cancelServiceRequestRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BillingApi.ReopenFolio: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ReopenFolioWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Reopen folio
    ApiResponse<Folio> response = apiInstance.ReopenFolioWithHttpInfo(folioId, cancelServiceRequestRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BillingApi.ReopenFolioWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **folioId** | **Guid** |  |  |
| **cancelServiceRequestRequest** | [**CancelServiceRequestRequest**](CancelServiceRequestRequest.md) |  | [optional]  |

### Return type

[**Folio**](Folio.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Folio reopened |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

