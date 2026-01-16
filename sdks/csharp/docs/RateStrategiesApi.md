# StayOS.ApiClient.Api.RateStrategiesApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateRateStrategy**](RateStrategiesApi.md#createratestrategy) | **POST** /properties/{propertyId}/rate-strategies | Create rate strategy |
| [**ListRateStrategies**](RateStrategiesApi.md#listratestrategies) | **GET** /properties/{propertyId}/rate-strategies | List rate strategies |

<a id="createratestrategy"></a>
# **CreateRateStrategy**
> RateStrategy CreateRateStrategy (Guid propertyId, RateStrategy rateStrategy)

Create rate strategy

Create a new pricing strategy for the property

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
    public class CreateRateStrategyExample
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
            var apiInstance = new RateStrategiesApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid | Unique property identifier
            var rateStrategy = new RateStrategy(); // RateStrategy | 

            try
            {
                // Create rate strategy
                RateStrategy result = apiInstance.CreateRateStrategy(propertyId, rateStrategy);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RateStrategiesApi.CreateRateStrategy: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateRateStrategyWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create rate strategy
    ApiResponse<RateStrategy> response = apiInstance.CreateRateStrategyWithHttpInfo(propertyId, rateStrategy);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling RateStrategiesApi.CreateRateStrategyWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid** | Unique property identifier |  |
| **rateStrategy** | [**RateStrategy**](RateStrategy.md) |  |  |

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
| **201** | Rate strategy created successfully |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listratestrategies"></a>
# **ListRateStrategies**
> ListRateStrategies200Response ListRateStrategies (Guid propertyId, int? pageSize = null, string strategyType = null, bool? isActive = null)

List rate strategies

Retrieve all rate strategies for a property

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
    public class ListRateStrategiesExample
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
            var apiInstance = new RateStrategiesApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid | Unique property identifier
            var pageSize = 20;  // int? | Number of items per page (max 100) (optional)  (default to 20)
            var strategyType = "STANDARD";  // string | Filter by strategy type (optional) 
            var isActive = true;  // bool? | Filter by active status (optional) 

            try
            {
                // List rate strategies
                ListRateStrategies200Response result = apiInstance.ListRateStrategies(propertyId, pageSize, strategyType, isActive);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling RateStrategiesApi.ListRateStrategies: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListRateStrategiesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List rate strategies
    ApiResponse<ListRateStrategies200Response> response = apiInstance.ListRateStrategiesWithHttpInfo(propertyId, pageSize, strategyType, isActive);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling RateStrategiesApi.ListRateStrategiesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid** | Unique property identifier |  |
| **pageSize** | **int?** | Number of items per page (max 100) | [optional] [default to 20] |
| **strategyType** | **string** | Filter by strategy type | [optional]  |
| **isActive** | **bool?** | Filter by active status | [optional]  |

### Return type

[**ListRateStrategies200Response**](ListRateStrategies200Response.md)

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

