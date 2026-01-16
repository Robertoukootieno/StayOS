# OpenAPI\Client\FeedbackApi



All URIs are relative to https://api.stayos.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getFeedback()**](FeedbackApi.md#getFeedback) | **GET** /feedback/{feedbackId} | Get feedback details |
| [**getNPSMetrics()**](FeedbackApi.md#getNPSMetrics) | **GET** /feedback/nps | Get NPS metrics |
| [**getPostStaySurvey()**](FeedbackApi.md#getPostStaySurvey) | **GET** /feedback/surveys/{stayId} | Get post-stay survey |
| [**initiateServiceRecovery()**](FeedbackApi.md#initiateServiceRecovery) | **POST** /feedback/{feedbackId}/service-recovery | Initiate service recovery |
| [**listFeedback()**](FeedbackApi.md#listFeedback) | **GET** /feedback | List guest feedback |
| [**listReviews()**](FeedbackApi.md#listReviews) | **GET** /feedback/reviews | List third-party reviews |
| [**respondToFeedback()**](FeedbackApi.md#respondToFeedback) | **POST** /feedback/{feedbackId}/respond | Respond to feedback |
| [**respondToReview()**](FeedbackApi.md#respondToReview) | **POST** /feedback/reviews/{reviewId}/respond | Respond to review |
| [**submitFeedback()**](FeedbackApi.md#submitFeedback) | **POST** /feedback | Submit feedback |
| [**submitSurveyResponse()**](FeedbackApi.md#submitSurveyResponse) | **POST** /feedback/surveys/{stayId} | Submit survey response |


## `getFeedback()`

```php
getFeedback($feedback_id): \OpenAPI\Client\Model\Feedback
```

Get feedback details

Retrieve details of specific feedback

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FeedbackApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$feedback_id = 'feedback_id_example'; // string

try {
    $result = $apiInstance->getFeedback($feedback_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedbackApi->getFeedback: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **feedback_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\Feedback**](../Model/Feedback.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getNPSMetrics()`

```php
getNPSMetrics($property_id, $start_date, $end_date): \OpenAPI\Client\Model\GetNPSMetrics200Response
```

Get NPS metrics

Get Net Promoter Score metrics and trends

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FeedbackApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string
$start_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$end_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime

try {
    $result = $apiInstance->getNPSMetrics($property_id, $start_date, $end_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedbackApi->getNPSMetrics: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**|  | [optional] |
| **start_date** | **\DateTime**|  | [optional] |
| **end_date** | **\DateTime**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\GetNPSMetrics200Response**](../Model/GetNPSMetrics200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPostStaySurvey()`

```php
getPostStaySurvey($stay_id): \OpenAPI\Client\Model\Survey
```

Get post-stay survey

Retrieve post-stay survey for a stay

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FeedbackApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$stay_id = 'stay_id_example'; // string

try {
    $result = $apiInstance->getPostStaySurvey($stay_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedbackApi->getPostStaySurvey: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **stay_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\Survey**](../Model/Survey.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `initiateServiceRecovery()`

```php
initiateServiceRecovery($feedback_id, $initiate_service_recovery_request): \OpenAPI\Client\Model\Feedback
```

Initiate service recovery

Initiate service recovery actions for feedback

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FeedbackApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$feedback_id = 'feedback_id_example'; // string
$initiate_service_recovery_request = new \OpenAPI\Client\Model\InitiateServiceRecoveryRequest(); // \OpenAPI\Client\Model\InitiateServiceRecoveryRequest

try {
    $result = $apiInstance->initiateServiceRecovery($feedback_id, $initiate_service_recovery_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedbackApi->initiateServiceRecovery: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **feedback_id** | **string**|  | |
| **initiate_service_recovery_request** | [**\OpenAPI\Client\Model\InitiateServiceRecoveryRequest**](../Model/InitiateServiceRecoveryRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Feedback**](../Model/Feedback.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listFeedback()`

```php
listFeedback($page_size, $cursor, $property_id, $type, $status): \OpenAPI\Client\Model\ListFeedback200Response
```

List guest feedback

Retrieve all guest feedback

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FeedbackApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)
$property_id = 'property_id_example'; // string
$type = 'type_example'; // string
$status = 'status_example'; // string

try {
    $result = $apiInstance->listFeedback($page_size, $cursor, $property_id, $type, $status);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedbackApi->listFeedback: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |
| **property_id** | **string**|  | [optional] |
| **type** | **string**|  | [optional] |
| **status** | **string**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListFeedback200Response**](../Model/ListFeedback200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listReviews()`

```php
listReviews($page_size, $cursor, $source): \OpenAPI\Client\Model\ListReviews200Response
```

List third-party reviews

Retrieve third-party reviews from OTAs and review sites

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FeedbackApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)
$source = 'source_example'; // string

try {
    $result = $apiInstance->listReviews($page_size, $cursor, $source);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedbackApi->listReviews: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |
| **source** | **string**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListReviews200Response**](../Model/ListReviews200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `respondToFeedback()`

```php
respondToFeedback($feedback_id, $respond_to_feedback_request): \OpenAPI\Client\Model\Feedback
```

Respond to feedback

Add a response to guest feedback

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FeedbackApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$feedback_id = 'feedback_id_example'; // string
$respond_to_feedback_request = new \OpenAPI\Client\Model\RespondToFeedbackRequest(); // \OpenAPI\Client\Model\RespondToFeedbackRequest

try {
    $result = $apiInstance->respondToFeedback($feedback_id, $respond_to_feedback_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedbackApi->respondToFeedback: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **feedback_id** | **string**|  | |
| **respond_to_feedback_request** | [**\OpenAPI\Client\Model\RespondToFeedbackRequest**](../Model/RespondToFeedbackRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Feedback**](../Model/Feedback.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `respondToReview()`

```php
respondToReview($review_id, $respond_to_feedback_request): \OpenAPI\Client\Model\Review
```

Respond to review

Add a response to a third-party review

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FeedbackApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$review_id = 'review_id_example'; // string
$respond_to_feedback_request = new \OpenAPI\Client\Model\RespondToFeedbackRequest(); // \OpenAPI\Client\Model\RespondToFeedbackRequest

try {
    $result = $apiInstance->respondToReview($review_id, $respond_to_feedback_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedbackApi->respondToReview: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **review_id** | **string**|  | |
| **respond_to_feedback_request** | [**\OpenAPI\Client\Model\RespondToFeedbackRequest**](../Model/RespondToFeedbackRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Review**](../Model/Review.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `submitFeedback()`

```php
submitFeedback($feedback): \OpenAPI\Client\Model\Feedback
```

Submit feedback

Submit guest feedback

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FeedbackApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$feedback = new \OpenAPI\Client\Model\Feedback(); // \OpenAPI\Client\Model\Feedback

try {
    $result = $apiInstance->submitFeedback($feedback);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedbackApi->submitFeedback: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **feedback** | [**\OpenAPI\Client\Model\Feedback**](../Model/Feedback.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Feedback**](../Model/Feedback.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `submitSurveyResponse()`

```php
submitSurveyResponse($stay_id, $survey): \OpenAPI\Client\Model\Survey
```

Submit survey response

Submit post-stay survey response

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FeedbackApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$stay_id = 'stay_id_example'; // string
$survey = new \OpenAPI\Client\Model\Survey(); // \OpenAPI\Client\Model\Survey

try {
    $result = $apiInstance->submitSurveyResponse($stay_id, $survey);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeedbackApi->submitSurveyResponse: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **stay_id** | **string**|  | |
| **survey** | [**\OpenAPI\Client\Model\Survey**](../Model/Survey.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Survey**](../Model/Survey.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
