# stayos_api_client.RateStrategiesApi

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_rate_strategy**](RateStrategiesApi.md#create_rate_strategy) | **POST** /properties/{propertyId}/rate-strategies | Create rate strategy
[**list_rate_strategies**](RateStrategiesApi.md#list_rate_strategies) | **GET** /properties/{propertyId}/rate-strategies | List rate strategies


# **create_rate_strategy**
> RateStrategy create_rate_strategy(property_id, rate_strategy)

Create rate strategy

Create a new pricing strategy for the property

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.rate_strategy import RateStrategy
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
    api_instance = stayos_api_client.RateStrategiesApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Unique property identifier
    rate_strategy = stayos_api_client.RateStrategy() # RateStrategy | 

    try:
        # Create rate strategy
        api_response = await api_instance.create_rate_strategy(property_id, rate_strategy)
        print("The response of RateStrategiesApi->create_rate_strategy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RateStrategiesApi->create_rate_strategy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**| Unique property identifier | 
 **rate_strategy** | [**RateStrategy**](RateStrategy.md)|  | 

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
**201** | Rate strategy created successfully |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_rate_strategies**
> ListRateStrategies200Response list_rate_strategies(property_id, page_size=page_size, strategy_type=strategy_type, is_active=is_active)

List rate strategies

Retrieve all rate strategies for a property

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_rate_strategies200_response import ListRateStrategies200Response
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
    api_instance = stayos_api_client.RateStrategiesApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Unique property identifier
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    strategy_type = 'strategy_type_example' # str | Filter by strategy type (optional)
    is_active = True # bool | Filter by active status (optional)

    try:
        # List rate strategies
        api_response = await api_instance.list_rate_strategies(property_id, page_size=page_size, strategy_type=strategy_type, is_active=is_active)
        print("The response of RateStrategiesApi->list_rate_strategies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RateStrategiesApi->list_rate_strategies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**| Unique property identifier | 
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **strategy_type** | **str**| Filter by strategy type | [optional] 
 **is_active** | **bool**| Filter by active status | [optional] 

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
**200** | Successful response |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

