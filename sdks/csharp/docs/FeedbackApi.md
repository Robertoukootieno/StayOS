# StayOS.ApiClient.Api.FeedbackApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetFeedback**](FeedbackApi.md#getfeedback) | **GET** /feedback/{feedbackId} | Get feedback details |
| [**GetNPSMetrics**](FeedbackApi.md#getnpsmetrics) | **GET** /feedback/nps | Get NPS metrics |
| [**GetPostStaySurvey**](FeedbackApi.md#getpoststaysurvey) | **GET** /feedback/surveys/{stayId} | Get post-stay survey |
| [**InitiateServiceRecovery**](FeedbackApi.md#initiateservicerecovery) | **POST** /feedback/{feedbackId}/service-recovery | Initiate service recovery |
| [**ListFeedback**](FeedbackApi.md#listfeedback) | **GET** /feedback | List guest feedback |
| [**ListReviews**](FeedbackApi.md#listreviews) | **GET** /feedback/reviews | List third-party reviews |
| [**RespondToFeedback**](FeedbackApi.md#respondtofeedback) | **POST** /feedback/{feedbackId}/respond | Respond to feedback |
| [**RespondToReview**](FeedbackApi.md#respondtoreview) | **POST** /feedback/reviews/{reviewId}/respond | Respond to review |
| [**SubmitFeedback**](FeedbackApi.md#submitfeedback) | **POST** /feedback | Submit feedback |
| [**SubmitSurveyResponse**](FeedbackApi.md#submitsurveyresponse) | **POST** /feedback/surveys/{stayId} | Submit survey response |

<a id="getfeedback"></a>
# **GetFeedback**
> Feedback GetFeedback (Guid feedbackId)

Get feedback details

Retrieve details of specific feedback

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
    public class GetFeedbackExample
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
            var apiInstance = new FeedbackApi(httpClient, config, httpClientHandler);
            var feedbackId = "feedbackId_example";  // Guid | 

            try
            {
                // Get feedback details
                Feedback result = apiInstance.GetFeedback(feedbackId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FeedbackApi.GetFeedback: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetFeedbackWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get feedback details
    ApiResponse<Feedback> response = apiInstance.GetFeedbackWithHttpInfo(feedbackId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FeedbackApi.GetFeedbackWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **feedbackId** | **Guid** |  |  |

### Return type

[**Feedback**](Feedback.md)

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

<a id="getnpsmetrics"></a>
# **GetNPSMetrics**
> GetNPSMetrics200Response GetNPSMetrics (Guid? propertyId = null, DateTime? startDate = null, DateTime? endDate = null)

Get NPS metrics

Get Net Promoter Score metrics and trends

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
    public class GetNPSMetricsExample
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
            var apiInstance = new FeedbackApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid? |  (optional) 
            var startDate = DateTime.Parse("2013-10-20");  // DateTime? |  (optional) 
            var endDate = DateTime.Parse("2013-10-20");  // DateTime? |  (optional) 

            try
            {
                // Get NPS metrics
                GetNPSMetrics200Response result = apiInstance.GetNPSMetrics(propertyId, startDate, endDate);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FeedbackApi.GetNPSMetrics: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetNPSMetricsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get NPS metrics
    ApiResponse<GetNPSMetrics200Response> response = apiInstance.GetNPSMetricsWithHttpInfo(propertyId, startDate, endDate);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FeedbackApi.GetNPSMetricsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid?** |  | [optional]  |
| **startDate** | **DateTime?** |  | [optional]  |
| **endDate** | **DateTime?** |  | [optional]  |

### Return type

[**GetNPSMetrics200Response**](GetNPSMetrics200Response.md)

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

<a id="getpoststaysurvey"></a>
# **GetPostStaySurvey**
> Survey GetPostStaySurvey (Guid stayId)

Get post-stay survey

Retrieve post-stay survey for a stay

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
    public class GetPostStaySurveyExample
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
            var apiInstance = new FeedbackApi(httpClient, config, httpClientHandler);
            var stayId = "stayId_example";  // Guid | 

            try
            {
                // Get post-stay survey
                Survey result = apiInstance.GetPostStaySurvey(stayId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FeedbackApi.GetPostStaySurvey: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetPostStaySurveyWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get post-stay survey
    ApiResponse<Survey> response = apiInstance.GetPostStaySurveyWithHttpInfo(stayId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FeedbackApi.GetPostStaySurveyWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **stayId** | **Guid** |  |  |

### Return type

[**Survey**](Survey.md)

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

<a id="initiateservicerecovery"></a>
# **InitiateServiceRecovery**
> Feedback InitiateServiceRecovery (Guid feedbackId, InitiateServiceRecoveryRequest initiateServiceRecoveryRequest)

Initiate service recovery

Initiate service recovery actions for feedback

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
    public class InitiateServiceRecoveryExample
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
            var apiInstance = new FeedbackApi(httpClient, config, httpClientHandler);
            var feedbackId = "feedbackId_example";  // Guid | 
            var initiateServiceRecoveryRequest = new InitiateServiceRecoveryRequest(); // InitiateServiceRecoveryRequest | 

            try
            {
                // Initiate service recovery
                Feedback result = apiInstance.InitiateServiceRecovery(feedbackId, initiateServiceRecoveryRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FeedbackApi.InitiateServiceRecovery: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the InitiateServiceRecoveryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Initiate service recovery
    ApiResponse<Feedback> response = apiInstance.InitiateServiceRecoveryWithHttpInfo(feedbackId, initiateServiceRecoveryRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FeedbackApi.InitiateServiceRecoveryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **feedbackId** | **Guid** |  |  |
| **initiateServiceRecoveryRequest** | [**InitiateServiceRecoveryRequest**](InitiateServiceRecoveryRequest.md) |  |  |

### Return type

[**Feedback**](Feedback.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Service recovery initiated |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listfeedback"></a>
# **ListFeedback**
> ListFeedback200Response ListFeedback (int? pageSize = null, string cursor = null, Guid? propertyId = null, string type = null, string status = null)

List guest feedback

Retrieve all guest feedback

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
    public class ListFeedbackExample
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
            var apiInstance = new FeedbackApi(httpClient, config, httpClientHandler);
            var pageSize = 20;  // int? | Number of items per page (max 100) (optional)  (default to 20)
            var cursor = "cursor_example";  // string | Cursor for pagination (opaque token) (optional) 
            var propertyId = "propertyId_example";  // Guid? |  (optional) 
            var type = "COMPLAINT";  // string |  (optional) 
            var status = "SUBMITTED";  // string |  (optional) 

            try
            {
                // List guest feedback
                ListFeedback200Response result = apiInstance.ListFeedback(pageSize, cursor, propertyId, type, status);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FeedbackApi.ListFeedback: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListFeedbackWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List guest feedback
    ApiResponse<ListFeedback200Response> response = apiInstance.ListFeedbackWithHttpInfo(pageSize, cursor, propertyId, type, status);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FeedbackApi.ListFeedbackWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **pageSize** | **int?** | Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string** | Cursor for pagination (opaque token) | [optional]  |
| **propertyId** | **Guid?** |  | [optional]  |
| **type** | **string** |  | [optional]  |
| **status** | **string** |  | [optional]  |

### Return type

[**ListFeedback200Response**](ListFeedback200Response.md)

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

<a id="listreviews"></a>
# **ListReviews**
> ListReviews200Response ListReviews (int? pageSize = null, string cursor = null, string source = null)

List third-party reviews

Retrieve third-party reviews from OTAs and review sites

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
    public class ListReviewsExample
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
            var apiInstance = new FeedbackApi(httpClient, config, httpClientHandler);
            var pageSize = 20;  // int? | Number of items per page (max 100) (optional)  (default to 20)
            var cursor = "cursor_example";  // string | Cursor for pagination (opaque token) (optional) 
            var source = "GOOGLE";  // string |  (optional) 

            try
            {
                // List third-party reviews
                ListReviews200Response result = apiInstance.ListReviews(pageSize, cursor, source);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FeedbackApi.ListReviews: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListReviewsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List third-party reviews
    ApiResponse<ListReviews200Response> response = apiInstance.ListReviewsWithHttpInfo(pageSize, cursor, source);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FeedbackApi.ListReviewsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **pageSize** | **int?** | Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string** | Cursor for pagination (opaque token) | [optional]  |
| **source** | **string** |  | [optional]  |

### Return type

[**ListReviews200Response**](ListReviews200Response.md)

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

<a id="respondtofeedback"></a>
# **RespondToFeedback**
> Feedback RespondToFeedback (Guid feedbackId, RespondToFeedbackRequest respondToFeedbackRequest)

Respond to feedback

Add a response to guest feedback

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
    public class RespondToFeedbackExample
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
            var apiInstance = new FeedbackApi(httpClient, config, httpClientHandler);
            var feedbackId = "feedbackId_example";  // Guid | 
            var respondToFeedbackRequest = new RespondToFeedbackRequest(); // RespondToFeedbackRequest | 

            try
            {
                // Respond to feedback
                Feedback result = apiInstance.RespondToFeedback(feedbackId, respondToFeedbackRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FeedbackApi.RespondToFeedback: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RespondToFeedbackWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Respond to feedback
    ApiResponse<Feedback> response = apiInstance.RespondToFeedbackWithHttpInfo(feedbackId, respondToFeedbackRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FeedbackApi.RespondToFeedbackWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **feedbackId** | **Guid** |  |  |
| **respondToFeedbackRequest** | [**RespondToFeedbackRequest**](RespondToFeedbackRequest.md) |  |  |

### Return type

[**Feedback**](Feedback.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Response added |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="respondtoreview"></a>
# **RespondToReview**
> Review RespondToReview (Guid reviewId, RespondToFeedbackRequest respondToFeedbackRequest)

Respond to review

Add a response to a third-party review

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
    public class RespondToReviewExample
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
            var apiInstance = new FeedbackApi(httpClient, config, httpClientHandler);
            var reviewId = "reviewId_example";  // Guid | 
            var respondToFeedbackRequest = new RespondToFeedbackRequest(); // RespondToFeedbackRequest | 

            try
            {
                // Respond to review
                Review result = apiInstance.RespondToReview(reviewId, respondToFeedbackRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FeedbackApi.RespondToReview: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RespondToReviewWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Respond to review
    ApiResponse<Review> response = apiInstance.RespondToReviewWithHttpInfo(reviewId, respondToFeedbackRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FeedbackApi.RespondToReviewWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **reviewId** | **Guid** |  |  |
| **respondToFeedbackRequest** | [**RespondToFeedbackRequest**](RespondToFeedbackRequest.md) |  |  |

### Return type

[**Review**](Review.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Response added |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="submitfeedback"></a>
# **SubmitFeedback**
> Feedback SubmitFeedback (Feedback feedback)

Submit feedback

Submit guest feedback

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
    public class SubmitFeedbackExample
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
            var apiInstance = new FeedbackApi(httpClient, config, httpClientHandler);
            var feedback = new Feedback(); // Feedback | 

            try
            {
                // Submit feedback
                Feedback result = apiInstance.SubmitFeedback(feedback);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FeedbackApi.SubmitFeedback: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SubmitFeedbackWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Submit feedback
    ApiResponse<Feedback> response = apiInstance.SubmitFeedbackWithHttpInfo(feedback);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FeedbackApi.SubmitFeedbackWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **feedback** | [**Feedback**](Feedback.md) |  |  |

### Return type

[**Feedback**](Feedback.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Feedback submitted |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="submitsurveyresponse"></a>
# **SubmitSurveyResponse**
> Survey SubmitSurveyResponse (Guid stayId, Survey survey)

Submit survey response

Submit post-stay survey response

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
    public class SubmitSurveyResponseExample
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
            var apiInstance = new FeedbackApi(httpClient, config, httpClientHandler);
            var stayId = "stayId_example";  // Guid | 
            var survey = new Survey(); // Survey | 

            try
            {
                // Submit survey response
                Survey result = apiInstance.SubmitSurveyResponse(stayId, survey);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FeedbackApi.SubmitSurveyResponse: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SubmitSurveyResponseWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Submit survey response
    ApiResponse<Survey> response = apiInstance.SubmitSurveyResponseWithHttpInfo(stayId, survey);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FeedbackApi.SubmitSurveyResponseWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **stayId** | **Guid** |  |  |
| **survey** | [**Survey**](Survey.md) |  |  |

### Return type

[**Survey**](Survey.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Survey submitted |  -  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

