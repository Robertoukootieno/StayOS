# stayos_api_client.FeedbackApi

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_feedback**](FeedbackApi.md#get_feedback) | **GET** /feedback/{feedbackId} | Get feedback details
[**get_nps_metrics**](FeedbackApi.md#get_nps_metrics) | **GET** /feedback/nps | Get NPS metrics
[**get_post_stay_survey**](FeedbackApi.md#get_post_stay_survey) | **GET** /feedback/surveys/{stayId} | Get post-stay survey
[**initiate_service_recovery**](FeedbackApi.md#initiate_service_recovery) | **POST** /feedback/{feedbackId}/service-recovery | Initiate service recovery
[**list_feedback**](FeedbackApi.md#list_feedback) | **GET** /feedback | List guest feedback
[**list_reviews**](FeedbackApi.md#list_reviews) | **GET** /feedback/reviews | List third-party reviews
[**respond_to_feedback**](FeedbackApi.md#respond_to_feedback) | **POST** /feedback/{feedbackId}/respond | Respond to feedback
[**respond_to_review**](FeedbackApi.md#respond_to_review) | **POST** /feedback/reviews/{reviewId}/respond | Respond to review
[**submit_feedback**](FeedbackApi.md#submit_feedback) | **POST** /feedback | Submit feedback
[**submit_survey_response**](FeedbackApi.md#submit_survey_response) | **POST** /feedback/surveys/{stayId} | Submit survey response


# **get_feedback**
> Feedback get_feedback(feedback_id)

Get feedback details

Retrieve details of specific feedback

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.feedback import Feedback
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.FeedbackApi(api_client)
    feedback_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get feedback details
        api_response = await api_instance.get_feedback(feedback_id)
        print("The response of FeedbackApi->get_feedback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->get_feedback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedback_id** | **UUID**|  | 

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
**200** | Successful response |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_nps_metrics**
> GetNPSMetrics200Response get_nps_metrics(property_id=property_id, start_date=start_date, end_date=end_date)

Get NPS metrics

Get Net Promoter Score metrics and trends

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.get_nps_metrics200_response import GetNPSMetrics200Response
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.FeedbackApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    start_date = '2013-10-20' # date |  (optional)
    end_date = '2013-10-20' # date |  (optional)

    try:
        # Get NPS metrics
        api_response = await api_instance.get_nps_metrics(property_id=property_id, start_date=start_date, end_date=end_date)
        print("The response of FeedbackApi->get_nps_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->get_nps_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**|  | [optional] 
 **start_date** | **date**|  | [optional] 
 **end_date** | **date**|  | [optional] 

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
**200** | Successful response |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_post_stay_survey**
> Survey get_post_stay_survey(stay_id)

Get post-stay survey

Retrieve post-stay survey for a stay

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.survey import Survey
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.FeedbackApi(api_client)
    stay_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get post-stay survey
        api_response = await api_instance.get_post_stay_survey(stay_id)
        print("The response of FeedbackApi->get_post_stay_survey:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->get_post_stay_survey: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stay_id** | **UUID**|  | 

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
**200** | Successful response |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiate_service_recovery**
> Feedback initiate_service_recovery(feedback_id, initiate_service_recovery_request)

Initiate service recovery

Initiate service recovery actions for feedback

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.feedback import Feedback
from stayos_api_client.models.initiate_service_recovery_request import InitiateServiceRecoveryRequest
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.FeedbackApi(api_client)
    feedback_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    initiate_service_recovery_request = stayos_api_client.InitiateServiceRecoveryRequest() # InitiateServiceRecoveryRequest | 

    try:
        # Initiate service recovery
        api_response = await api_instance.initiate_service_recovery(feedback_id, initiate_service_recovery_request)
        print("The response of FeedbackApi->initiate_service_recovery:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->initiate_service_recovery: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedback_id** | **UUID**|  | 
 **initiate_service_recovery_request** | [**InitiateServiceRecoveryRequest**](InitiateServiceRecoveryRequest.md)|  | 

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
**200** | Service recovery initiated |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_feedback**
> ListFeedback200Response list_feedback(page_size=page_size, cursor=cursor, property_id=property_id, type=type, status=status)

List guest feedback

Retrieve all guest feedback

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_feedback200_response import ListFeedback200Response
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.FeedbackApi(api_client)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    type = 'type_example' # str |  (optional)
    status = 'status_example' # str |  (optional)

    try:
        # List guest feedback
        api_response = await api_instance.list_feedback(page_size=page_size, cursor=cursor, property_id=property_id, type=type, status=status)
        print("The response of FeedbackApi->list_feedback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->list_feedback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 
 **property_id** | **UUID**|  | [optional] 
 **type** | **str**|  | [optional] 
 **status** | **str**|  | [optional] 

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
**200** | Successful response |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_reviews**
> ListReviews200Response list_reviews(page_size=page_size, cursor=cursor, source=source)

List third-party reviews

Retrieve third-party reviews from OTAs and review sites

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_reviews200_response import ListReviews200Response
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.FeedbackApi(api_client)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)
    source = 'source_example' # str |  (optional)

    try:
        # List third-party reviews
        api_response = await api_instance.list_reviews(page_size=page_size, cursor=cursor, source=source)
        print("The response of FeedbackApi->list_reviews:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->list_reviews: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 
 **source** | **str**|  | [optional] 

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
**200** | Successful response |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **respond_to_feedback**
> Feedback respond_to_feedback(feedback_id, respond_to_feedback_request)

Respond to feedback

Add a response to guest feedback

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.feedback import Feedback
from stayos_api_client.models.respond_to_feedback_request import RespondToFeedbackRequest
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.FeedbackApi(api_client)
    feedback_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    respond_to_feedback_request = stayos_api_client.RespondToFeedbackRequest() # RespondToFeedbackRequest | 

    try:
        # Respond to feedback
        api_response = await api_instance.respond_to_feedback(feedback_id, respond_to_feedback_request)
        print("The response of FeedbackApi->respond_to_feedback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->respond_to_feedback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedback_id** | **UUID**|  | 
 **respond_to_feedback_request** | [**RespondToFeedbackRequest**](RespondToFeedbackRequest.md)|  | 

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
**200** | Response added |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **respond_to_review**
> Review respond_to_review(review_id, respond_to_feedback_request)

Respond to review

Add a response to a third-party review

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.respond_to_feedback_request import RespondToFeedbackRequest
from stayos_api_client.models.review import Review
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.FeedbackApi(api_client)
    review_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    respond_to_feedback_request = stayos_api_client.RespondToFeedbackRequest() # RespondToFeedbackRequest | 

    try:
        # Respond to review
        api_response = await api_instance.respond_to_review(review_id, respond_to_feedback_request)
        print("The response of FeedbackApi->respond_to_review:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->respond_to_review: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **review_id** | **UUID**|  | 
 **respond_to_feedback_request** | [**RespondToFeedbackRequest**](RespondToFeedbackRequest.md)|  | 

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
**200** | Response added |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_feedback**
> Feedback submit_feedback(feedback)

Submit feedback

Submit guest feedback

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.feedback import Feedback
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.FeedbackApi(api_client)
    feedback = stayos_api_client.Feedback() # Feedback | 

    try:
        # Submit feedback
        api_response = await api_instance.submit_feedback(feedback)
        print("The response of FeedbackApi->submit_feedback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->submit_feedback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedback** | [**Feedback**](Feedback.md)|  | 

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
**201** | Feedback submitted |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_survey_response**
> Survey submit_survey_response(stay_id, survey)

Submit survey response

Submit post-stay survey response

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.survey import Survey
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.FeedbackApi(api_client)
    stay_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    survey = stayos_api_client.Survey() # Survey | 

    try:
        # Submit survey response
        api_response = await api_instance.submit_survey_response(stay_id, survey)
        print("The response of FeedbackApi->submit_survey_response:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->submit_survey_response: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stay_id** | **UUID**|  | 
 **survey** | [**Survey**](Survey.md)|  | 

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
**201** | Survey submitted |  -  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

