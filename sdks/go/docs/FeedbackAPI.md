# \FeedbackAPI

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetFeedback**](FeedbackAPI.md#GetFeedback) | **Get** /feedback/{feedbackId} | Get feedback details
[**GetNPSMetrics**](FeedbackAPI.md#GetNPSMetrics) | **Get** /feedback/nps | Get NPS metrics
[**GetPostStaySurvey**](FeedbackAPI.md#GetPostStaySurvey) | **Get** /feedback/surveys/{stayId} | Get post-stay survey
[**InitiateServiceRecovery**](FeedbackAPI.md#InitiateServiceRecovery) | **Post** /feedback/{feedbackId}/service-recovery | Initiate service recovery
[**ListFeedback**](FeedbackAPI.md#ListFeedback) | **Get** /feedback | List guest feedback
[**ListReviews**](FeedbackAPI.md#ListReviews) | **Get** /feedback/reviews | List third-party reviews
[**RespondToFeedback**](FeedbackAPI.md#RespondToFeedback) | **Post** /feedback/{feedbackId}/respond | Respond to feedback
[**RespondToReview**](FeedbackAPI.md#RespondToReview) | **Post** /feedback/reviews/{reviewId}/respond | Respond to review
[**SubmitFeedback**](FeedbackAPI.md#SubmitFeedback) | **Post** /feedback | Submit feedback
[**SubmitSurveyResponse**](FeedbackAPI.md#SubmitSurveyResponse) | **Post** /feedback/surveys/{stayId} | Submit survey response



## GetFeedback

> Feedback GetFeedback(ctx, feedbackId).Execute()

Get feedback details



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	feedbackId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FeedbackAPI.GetFeedback(context.Background(), feedbackId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FeedbackAPI.GetFeedback``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetFeedback`: Feedback
	fmt.Fprintf(os.Stdout, "Response from `FeedbackAPI.GetFeedback`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**feedbackId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFeedbackRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Feedback**](Feedback.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetNPSMetrics

> GetNPSMetrics200Response GetNPSMetrics(ctx).PropertyId(propertyId).StartDate(startDate).EndDate(endDate).Execute()

Get NPS metrics



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	startDate := time.Now() // string |  (optional)
	endDate := time.Now() // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FeedbackAPI.GetNPSMetrics(context.Background()).PropertyId(propertyId).StartDate(startDate).EndDate(endDate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FeedbackAPI.GetNPSMetrics``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetNPSMetrics`: GetNPSMetrics200Response
	fmt.Fprintf(os.Stdout, "Response from `FeedbackAPI.GetNPSMetrics`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetNPSMetricsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyId** | **string** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 

### Return type

[**GetNPSMetrics200Response**](GetNPSMetrics200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPostStaySurvey

> Survey GetPostStaySurvey(ctx, stayId).Execute()

Get post-stay survey



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	stayId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FeedbackAPI.GetPostStaySurvey(context.Background(), stayId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FeedbackAPI.GetPostStaySurvey``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPostStaySurvey`: Survey
	fmt.Fprintf(os.Stdout, "Response from `FeedbackAPI.GetPostStaySurvey`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**stayId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPostStaySurveyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Survey**](Survey.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## InitiateServiceRecovery

> Feedback InitiateServiceRecovery(ctx, feedbackId).InitiateServiceRecoveryRequest(initiateServiceRecoveryRequest).Execute()

Initiate service recovery



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	feedbackId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	initiateServiceRecoveryRequest := *openapiclient.NewInitiateServiceRecoveryRequest() // InitiateServiceRecoveryRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FeedbackAPI.InitiateServiceRecovery(context.Background(), feedbackId).InitiateServiceRecoveryRequest(initiateServiceRecoveryRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FeedbackAPI.InitiateServiceRecovery``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `InitiateServiceRecovery`: Feedback
	fmt.Fprintf(os.Stdout, "Response from `FeedbackAPI.InitiateServiceRecovery`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**feedbackId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiInitiateServiceRecoveryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **initiateServiceRecoveryRequest** | [**InitiateServiceRecoveryRequest**](InitiateServiceRecoveryRequest.md) |  | 

### Return type

[**Feedback**](Feedback.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListFeedback

> ListFeedback200Response ListFeedback(ctx).PageSize(pageSize).Cursor(cursor).PropertyId(propertyId).Type_(type_).Status(status).Execute()

List guest feedback



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	type_ := "type__example" // string |  (optional)
	status := "status_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FeedbackAPI.ListFeedback(context.Background()).PageSize(pageSize).Cursor(cursor).PropertyId(propertyId).Type_(type_).Status(status).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FeedbackAPI.ListFeedback``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListFeedback`: ListFeedback200Response
	fmt.Fprintf(os.Stdout, "Response from `FeedbackAPI.ListFeedback`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListFeedbackRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 
 **propertyId** | **string** |  | 
 **type_** | **string** |  | 
 **status** | **string** |  | 

### Return type

[**ListFeedback200Response**](ListFeedback200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListReviews

> ListReviews200Response ListReviews(ctx).PageSize(pageSize).Cursor(cursor).Source(source).Execute()

List third-party reviews



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)
	source := "source_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FeedbackAPI.ListReviews(context.Background()).PageSize(pageSize).Cursor(cursor).Source(source).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FeedbackAPI.ListReviews``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListReviews`: ListReviews200Response
	fmt.Fprintf(os.Stdout, "Response from `FeedbackAPI.ListReviews`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListReviewsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 
 **source** | **string** |  | 

### Return type

[**ListReviews200Response**](ListReviews200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RespondToFeedback

> Feedback RespondToFeedback(ctx, feedbackId).RespondToFeedbackRequest(respondToFeedbackRequest).Execute()

Respond to feedback



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	feedbackId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	respondToFeedbackRequest := *openapiclient.NewRespondToFeedbackRequest("Message_example") // RespondToFeedbackRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FeedbackAPI.RespondToFeedback(context.Background(), feedbackId).RespondToFeedbackRequest(respondToFeedbackRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FeedbackAPI.RespondToFeedback``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RespondToFeedback`: Feedback
	fmt.Fprintf(os.Stdout, "Response from `FeedbackAPI.RespondToFeedback`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**feedbackId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRespondToFeedbackRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **respondToFeedbackRequest** | [**RespondToFeedbackRequest**](RespondToFeedbackRequest.md) |  | 

### Return type

[**Feedback**](Feedback.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RespondToReview

> Review RespondToReview(ctx, reviewId).RespondToFeedbackRequest(respondToFeedbackRequest).Execute()

Respond to review



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	reviewId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	respondToFeedbackRequest := *openapiclient.NewRespondToFeedbackRequest("Message_example") // RespondToFeedbackRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FeedbackAPI.RespondToReview(context.Background(), reviewId).RespondToFeedbackRequest(respondToFeedbackRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FeedbackAPI.RespondToReview``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RespondToReview`: Review
	fmt.Fprintf(os.Stdout, "Response from `FeedbackAPI.RespondToReview`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reviewId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRespondToReviewRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **respondToFeedbackRequest** | [**RespondToFeedbackRequest**](RespondToFeedbackRequest.md) |  | 

### Return type

[**Review**](Review.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitFeedback

> Feedback SubmitFeedback(ctx).Feedback(feedback).Execute()

Submit feedback



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	feedback := *openapiclient.NewFeedback("FeedbackId_example", "GuestId_example", "COMPLAINT", int32(3), "SUBMITTED") // Feedback | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FeedbackAPI.SubmitFeedback(context.Background()).Feedback(feedback).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FeedbackAPI.SubmitFeedback``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitFeedback`: Feedback
	fmt.Fprintf(os.Stdout, "Response from `FeedbackAPI.SubmitFeedback`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitFeedbackRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedback** | [**Feedback**](Feedback.md) |  | 

### Return type

[**Feedback**](Feedback.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitSurveyResponse

> Survey SubmitSurveyResponse(ctx, stayId).Survey(survey).Execute()

Submit survey response



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	stayId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	survey := *openapiclient.NewSurvey("SurveyId_example", "StayId_example", "GuestId_example") // Survey | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FeedbackAPI.SubmitSurveyResponse(context.Background(), stayId).Survey(survey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FeedbackAPI.SubmitSurveyResponse``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitSurveyResponse`: Survey
	fmt.Fprintf(os.Stdout, "Response from `FeedbackAPI.SubmitSurveyResponse`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**stayId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubmitSurveyResponseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **survey** | [**Survey**](Survey.md) |  | 

### Return type

[**Survey**](Survey.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

