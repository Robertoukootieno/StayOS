# FeedbackApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getFeedback**](#getfeedback) | **GET** /feedback/{feedbackId} | Get feedback details|
|[**getNPSMetrics**](#getnpsmetrics) | **GET** /feedback/nps | Get NPS metrics|
|[**getPostStaySurvey**](#getpoststaysurvey) | **GET** /feedback/surveys/{stayId} | Get post-stay survey|
|[**initiateServiceRecovery**](#initiateservicerecovery) | **POST** /feedback/{feedbackId}/service-recovery | Initiate service recovery|
|[**listFeedback**](#listfeedback) | **GET** /feedback | List guest feedback|
|[**listReviews**](#listreviews) | **GET** /feedback/reviews | List third-party reviews|
|[**respondToFeedback**](#respondtofeedback) | **POST** /feedback/{feedbackId}/respond | Respond to feedback|
|[**respondToReview**](#respondtoreview) | **POST** /feedback/reviews/{reviewId}/respond | Respond to review|
|[**submitFeedback**](#submitfeedback) | **POST** /feedback | Submit feedback|
|[**submitSurveyResponse**](#submitsurveyresponse) | **POST** /feedback/surveys/{stayId} | Submit survey response|

# **getFeedback**
> Feedback getFeedback()

Retrieve details of specific feedback

### Example

```typescript
import {
    FeedbackApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FeedbackApi(configuration);

let feedbackId: string; // (default to undefined)

const { status, data } = await apiInstance.getFeedback(
    feedbackId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **feedbackId** | [**string**] |  | defaults to undefined|


### Return type

**Feedback**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNPSMetrics**
> GetNPSMetrics200Response getNPSMetrics()

Get Net Promoter Score metrics and trends

### Example

```typescript
import {
    FeedbackApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FeedbackApi(configuration);

let propertyId: string; // (optional) (default to undefined)
let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getNPSMetrics(
    propertyId,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetNPSMetrics200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPostStaySurvey**
> Survey getPostStaySurvey()

Retrieve post-stay survey for a stay

### Example

```typescript
import {
    FeedbackApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FeedbackApi(configuration);

let stayId: string; // (default to undefined)

const { status, data } = await apiInstance.getPostStaySurvey(
    stayId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stayId** | [**string**] |  | defaults to undefined|


### Return type

**Survey**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiateServiceRecovery**
> Feedback initiateServiceRecovery(initiateServiceRecoveryRequest)

Initiate service recovery actions for feedback

### Example

```typescript
import {
    FeedbackApi,
    Configuration,
    InitiateServiceRecoveryRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FeedbackApi(configuration);

let feedbackId: string; // (default to undefined)
let initiateServiceRecoveryRequest: InitiateServiceRecoveryRequest; //

const { status, data } = await apiInstance.initiateServiceRecovery(
    feedbackId,
    initiateServiceRecoveryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initiateServiceRecoveryRequest** | **InitiateServiceRecoveryRequest**|  | |
| **feedbackId** | [**string**] |  | defaults to undefined|


### Return type

**Feedback**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Service recovery initiated |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listFeedback**
> ListFeedback200Response listFeedback()

Retrieve all guest feedback

### Example

```typescript
import {
    FeedbackApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FeedbackApi(configuration);

let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)
let propertyId: string; // (optional) (default to undefined)
let type: 'COMPLAINT' | 'COMPLIMENT' | 'SUGGESTION' | 'GENERAL'; // (optional) (default to undefined)
let status: 'SUBMITTED' | 'ACKNOWLEDGED' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED'; // (optional) (default to undefined)

const { status, data } = await apiInstance.listFeedback(
    pageSize,
    cursor,
    propertyId,
    type,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **type** | [**&#39;COMPLAINT&#39; | &#39;COMPLIMENT&#39; | &#39;SUGGESTION&#39; | &#39;GENERAL&#39;**]**Array<&#39;COMPLAINT&#39; &#124; &#39;COMPLIMENT&#39; &#124; &#39;SUGGESTION&#39; &#124; &#39;GENERAL&#39;>** |  | (optional) defaults to undefined|
| **status** | [**&#39;SUBMITTED&#39; | &#39;ACKNOWLEDGED&#39; | &#39;IN_PROGRESS&#39; | &#39;RESOLVED&#39; | &#39;CLOSED&#39;**]**Array<&#39;SUBMITTED&#39; &#124; &#39;ACKNOWLEDGED&#39; &#124; &#39;IN_PROGRESS&#39; &#124; &#39;RESOLVED&#39; &#124; &#39;CLOSED&#39;>** |  | (optional) defaults to undefined|


### Return type

**ListFeedback200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listReviews**
> ListReviews200Response listReviews()

Retrieve third-party reviews from OTAs and review sites

### Example

```typescript
import {
    FeedbackApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FeedbackApi(configuration);

let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)
let source: 'GOOGLE' | 'TRIPADVISOR' | 'BOOKING_COM' | 'EXPEDIA' | 'AIRBNB'; // (optional) (default to undefined)

const { status, data } = await apiInstance.listReviews(
    pageSize,
    cursor,
    source
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|
| **source** | [**&#39;GOOGLE&#39; | &#39;TRIPADVISOR&#39; | &#39;BOOKING_COM&#39; | &#39;EXPEDIA&#39; | &#39;AIRBNB&#39;**]**Array<&#39;GOOGLE&#39; &#124; &#39;TRIPADVISOR&#39; &#124; &#39;BOOKING_COM&#39; &#124; &#39;EXPEDIA&#39; &#124; &#39;AIRBNB&#39;>** |  | (optional) defaults to undefined|


### Return type

**ListReviews200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **respondToFeedback**
> Feedback respondToFeedback(respondToFeedbackRequest)

Add a response to guest feedback

### Example

```typescript
import {
    FeedbackApi,
    Configuration,
    RespondToFeedbackRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FeedbackApi(configuration);

let feedbackId: string; // (default to undefined)
let respondToFeedbackRequest: RespondToFeedbackRequest; //

const { status, data } = await apiInstance.respondToFeedback(
    feedbackId,
    respondToFeedbackRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **respondToFeedbackRequest** | **RespondToFeedbackRequest**|  | |
| **feedbackId** | [**string**] |  | defaults to undefined|


### Return type

**Feedback**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Response added |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **respondToReview**
> Review respondToReview(respondToFeedbackRequest)

Add a response to a third-party review

### Example

```typescript
import {
    FeedbackApi,
    Configuration,
    RespondToFeedbackRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FeedbackApi(configuration);

let reviewId: string; // (default to undefined)
let respondToFeedbackRequest: RespondToFeedbackRequest; //

const { status, data } = await apiInstance.respondToReview(
    reviewId,
    respondToFeedbackRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **respondToFeedbackRequest** | **RespondToFeedbackRequest**|  | |
| **reviewId** | [**string**] |  | defaults to undefined|


### Return type

**Review**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Response added |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitFeedback**
> Feedback submitFeedback(feedback)

Submit guest feedback

### Example

```typescript
import {
    FeedbackApi,
    Configuration,
    Feedback
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FeedbackApi(configuration);

let feedback: Feedback; //

const { status, data } = await apiInstance.submitFeedback(
    feedback
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **feedback** | **Feedback**|  | |


### Return type

**Feedback**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Feedback submitted |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitSurveyResponse**
> Survey submitSurveyResponse(survey)

Submit post-stay survey response

### Example

```typescript
import {
    FeedbackApi,
    Configuration,
    Survey
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new FeedbackApi(configuration);

let stayId: string; // (default to undefined)
let survey: Survey; //

const { status, data } = await apiInstance.submitSurveyResponse(
    stayId,
    survey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **survey** | **Survey**|  | |
| **stayId** | [**string**] |  | defaults to undefined|


### Return type

**Survey**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Survey submitted |  -  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

