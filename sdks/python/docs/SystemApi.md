# stayos_api_client.SystemApi

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_system_health**](SystemApi.md#get_system_health) | **GET** /system/health | Health check
[**get_system_metrics**](SystemApi.md#get_system_metrics) | **GET** /system/metrics | Get system metrics
[**get_system_status**](SystemApi.md#get_system_status) | **GET** /system/status | Get system status


# **get_system_health**
> GetSystemHealth200Response get_system_health()

Health check

Check system health status

### Example


```python
import stayos_api_client
from stayos_api_client.models.get_system_health200_response import GetSystemHealth200Response
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)


# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.SystemApi(api_client)

    try:
        # Health check
        api_response = await api_instance.get_system_health()
        print("The response of SystemApi->get_system_health:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemApi->get_system_health: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetSystemHealth200Response**](GetSystemHealth200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | System is healthy |  -  |
**503** | System is unhealthy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_system_metrics**
> GetSystemMetrics200Response get_system_metrics(metric=metric, start_time=start_time, end_time=end_time)

Get system metrics

Retrieve system performance metrics

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.get_system_metrics200_response import GetSystemMetrics200Response
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
    api_instance = stayos_api_client.SystemApi(api_client)
    metric = 'metric_example' # str |  (optional)
    start_time = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime |  (optional)

    try:
        # Get system metrics
        api_response = await api_instance.get_system_metrics(metric=metric, start_time=start_time, end_time=end_time)
        print("The response of SystemApi->get_system_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemApi->get_system_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metric** | **str**|  | [optional] 
 **start_time** | **datetime**|  | [optional] 
 **end_time** | **datetime**|  | [optional] 

### Return type

[**GetSystemMetrics200Response**](GetSystemMetrics200Response.md)

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

# **get_system_status**
> GetSystemStatus200Response get_system_status()

Get system status

Get overall system status and component health

### Example


```python
import stayos_api_client
from stayos_api_client.models.get_system_status200_response import GetSystemStatus200Response
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)


# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.SystemApi(api_client)

    try:
        # Get system status
        api_response = await api_instance.get_system_status()
        print("The response of SystemApi->get_system_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemApi->get_system_status: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetSystemStatus200Response**](GetSystemStatus200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

