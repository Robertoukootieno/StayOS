# OpenapiClient::FeedbackApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_feedback**](FeedbackApi.md#get_feedback) | **GET** /feedback/{feedbackId} | Get feedback details |
| [**get_nps_metrics**](FeedbackApi.md#get_nps_metrics) | **GET** /feedback/nps | Get NPS metrics |
| [**get_post_stay_survey**](FeedbackApi.md#get_post_stay_survey) | **GET** /feedback/surveys/{stayId} | Get post-stay survey |
| [**initiate_service_recovery**](FeedbackApi.md#initiate_service_recovery) | **POST** /feedback/{feedbackId}/service-recovery | Initiate service recovery |
| [**list_feedback**](FeedbackApi.md#list_feedback) | **GET** /feedback | List guest feedback |
| [**list_reviews**](FeedbackApi.md#list_reviews) | **GET** /feedback/reviews | List third-party reviews |
| [**respond_to_feedback**](FeedbackApi.md#respond_to_feedback) | **POST** /feedback/{feedbackId}/respond | Respond to feedback |
| [**respond_to_review**](FeedbackApi.md#respond_to_review) | **POST** /feedback/reviews/{reviewId}/respond | Respond to review |
| [**submit_feedback**](FeedbackApi.md#submit_feedback) | **POST** /feedback | Submit feedback |
| [**submit_survey_response**](FeedbackApi.md#submit_survey_response) | **POST** /feedback/surveys/{stayId} | Submit survey response |


## get_feedback

> <Feedback> get_feedback(feedback_id)

Get feedback details

Retrieve details of specific feedback

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::FeedbackApi.new
feedback_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get feedback details
  result = api_instance.get_feedback(feedback_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->get_feedback: #{e}"
end
```

#### Using the get_feedback_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Feedback>, Integer, Hash)> get_feedback_with_http_info(feedback_id)

```ruby
begin
  # Get feedback details
  data, status_code, headers = api_instance.get_feedback_with_http_info(feedback_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Feedback>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->get_feedback_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **feedback_id** | **String** |  |  |

### Return type

[**Feedback**](Feedback.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_nps_metrics

> <GetNPSMetrics200Response> get_nps_metrics(opts)

Get NPS metrics

Get Net Promoter Score metrics and trends

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::FeedbackApi.new
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  start_date: Date.parse('2013-10-20'), # Date | 
  end_date: Date.parse('2013-10-20') # Date | 
}

begin
  # Get NPS metrics
  result = api_instance.get_nps_metrics(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->get_nps_metrics: #{e}"
end
```

#### Using the get_nps_metrics_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetNPSMetrics200Response>, Integer, Hash)> get_nps_metrics_with_http_info(opts)

```ruby
begin
  # Get NPS metrics
  data, status_code, headers = api_instance.get_nps_metrics_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetNPSMetrics200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->get_nps_metrics_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  | [optional] |
| **start_date** | **Date** |  | [optional] |
| **end_date** | **Date** |  | [optional] |

### Return type

[**GetNPSMetrics200Response**](GetNPSMetrics200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_post_stay_survey

> <Survey> get_post_stay_survey(stay_id)

Get post-stay survey

Retrieve post-stay survey for a stay

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::FeedbackApi.new
stay_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get post-stay survey
  result = api_instance.get_post_stay_survey(stay_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->get_post_stay_survey: #{e}"
end
```

#### Using the get_post_stay_survey_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Survey>, Integer, Hash)> get_post_stay_survey_with_http_info(stay_id)

```ruby
begin
  # Get post-stay survey
  data, status_code, headers = api_instance.get_post_stay_survey_with_http_info(stay_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Survey>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->get_post_stay_survey_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stay_id** | **String** |  |  |

### Return type

[**Survey**](Survey.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## initiate_service_recovery

> <Feedback> initiate_service_recovery(feedback_id, initiate_service_recovery_request)

Initiate service recovery

Initiate service recovery actions for feedback

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::FeedbackApi.new
feedback_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
initiate_service_recovery_request = OpenapiClient::InitiateServiceRecoveryRequest.new # InitiateServiceRecoveryRequest | 

begin
  # Initiate service recovery
  result = api_instance.initiate_service_recovery(feedback_id, initiate_service_recovery_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->initiate_service_recovery: #{e}"
end
```

#### Using the initiate_service_recovery_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Feedback>, Integer, Hash)> initiate_service_recovery_with_http_info(feedback_id, initiate_service_recovery_request)

```ruby
begin
  # Initiate service recovery
  data, status_code, headers = api_instance.initiate_service_recovery_with_http_info(feedback_id, initiate_service_recovery_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Feedback>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->initiate_service_recovery_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **feedback_id** | **String** |  |  |
| **initiate_service_recovery_request** | [**InitiateServiceRecoveryRequest**](InitiateServiceRecoveryRequest.md) |  |  |

### Return type

[**Feedback**](Feedback.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## list_feedback

> <ListFeedback200Response> list_feedback(opts)

List guest feedback

Retrieve all guest feedback

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::FeedbackApi.new
opts = {
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example', # String | Cursor for pagination (opaque token)
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  type: 'COMPLAINT', # String | 
  status: 'SUBMITTED' # String | 
}

begin
  # List guest feedback
  result = api_instance.list_feedback(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->list_feedback: #{e}"
end
```

#### Using the list_feedback_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListFeedback200Response>, Integer, Hash)> list_feedback_with_http_info(opts)

```ruby
begin
  # List guest feedback
  data, status_code, headers = api_instance.list_feedback_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListFeedback200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->list_feedback_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |
| **property_id** | **String** |  | [optional] |
| **type** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |

### Return type

[**ListFeedback200Response**](ListFeedback200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_reviews

> <ListReviews200Response> list_reviews(opts)

List third-party reviews

Retrieve third-party reviews from OTAs and review sites

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::FeedbackApi.new
opts = {
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example', # String | Cursor for pagination (opaque token)
  source: 'GOOGLE' # String | 
}

begin
  # List third-party reviews
  result = api_instance.list_reviews(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->list_reviews: #{e}"
end
```

#### Using the list_reviews_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListReviews200Response>, Integer, Hash)> list_reviews_with_http_info(opts)

```ruby
begin
  # List third-party reviews
  data, status_code, headers = api_instance.list_reviews_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListReviews200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->list_reviews_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |
| **source** | **String** |  | [optional] |

### Return type

[**ListReviews200Response**](ListReviews200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## respond_to_feedback

> <Feedback> respond_to_feedback(feedback_id, respond_to_feedback_request)

Respond to feedback

Add a response to guest feedback

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::FeedbackApi.new
feedback_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
respond_to_feedback_request = OpenapiClient::RespondToFeedbackRequest.new({message: 'message_example'}) # RespondToFeedbackRequest | 

begin
  # Respond to feedback
  result = api_instance.respond_to_feedback(feedback_id, respond_to_feedback_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->respond_to_feedback: #{e}"
end
```

#### Using the respond_to_feedback_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Feedback>, Integer, Hash)> respond_to_feedback_with_http_info(feedback_id, respond_to_feedback_request)

```ruby
begin
  # Respond to feedback
  data, status_code, headers = api_instance.respond_to_feedback_with_http_info(feedback_id, respond_to_feedback_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Feedback>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->respond_to_feedback_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **feedback_id** | **String** |  |  |
| **respond_to_feedback_request** | [**RespondToFeedbackRequest**](RespondToFeedbackRequest.md) |  |  |

### Return type

[**Feedback**](Feedback.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## respond_to_review

> <Review> respond_to_review(review_id, respond_to_feedback_request)

Respond to review

Add a response to a third-party review

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::FeedbackApi.new
review_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
respond_to_feedback_request = OpenapiClient::RespondToFeedbackRequest.new({message: 'message_example'}) # RespondToFeedbackRequest | 

begin
  # Respond to review
  result = api_instance.respond_to_review(review_id, respond_to_feedback_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->respond_to_review: #{e}"
end
```

#### Using the respond_to_review_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Review>, Integer, Hash)> respond_to_review_with_http_info(review_id, respond_to_feedback_request)

```ruby
begin
  # Respond to review
  data, status_code, headers = api_instance.respond_to_review_with_http_info(review_id, respond_to_feedback_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Review>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->respond_to_review_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **review_id** | **String** |  |  |
| **respond_to_feedback_request** | [**RespondToFeedbackRequest**](RespondToFeedbackRequest.md) |  |  |

### Return type

[**Review**](Review.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## submit_feedback

> <Feedback> submit_feedback(feedback)

Submit feedback

Submit guest feedback

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::FeedbackApi.new
feedback = OpenapiClient::Feedback.new({feedback_id: 'feedback_id_example', guest_id: 'guest_id_example', type: 'COMPLAINT', rating: 3, status: 'SUBMITTED'}) # Feedback | 

begin
  # Submit feedback
  result = api_instance.submit_feedback(feedback)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->submit_feedback: #{e}"
end
```

#### Using the submit_feedback_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Feedback>, Integer, Hash)> submit_feedback_with_http_info(feedback)

```ruby
begin
  # Submit feedback
  data, status_code, headers = api_instance.submit_feedback_with_http_info(feedback)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Feedback>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->submit_feedback_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **feedback** | [**Feedback**](Feedback.md) |  |  |

### Return type

[**Feedback**](Feedback.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## submit_survey_response

> <Survey> submit_survey_response(stay_id, survey)

Submit survey response

Submit post-stay survey response

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::FeedbackApi.new
stay_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
survey = OpenapiClient::Survey.new({survey_id: 'survey_id_example', stay_id: 'stay_id_example', guest_id: 'guest_id_example'}) # Survey | 

begin
  # Submit survey response
  result = api_instance.submit_survey_response(stay_id, survey)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->submit_survey_response: #{e}"
end
```

#### Using the submit_survey_response_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Survey>, Integer, Hash)> submit_survey_response_with_http_info(stay_id, survey)

```ruby
begin
  # Submit survey response
  data, status_code, headers = api_instance.submit_survey_response_with_http_info(stay_id, survey)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Survey>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FeedbackApi->submit_survey_response_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stay_id** | **String** |  |  |
| **survey** | [**Survey**](Survey.md) |  |  |

### Return type

[**Survey**](Survey.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

