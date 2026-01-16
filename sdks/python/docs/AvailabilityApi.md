# stayos_api_client.AvailabilityApi

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_inventory_block**](AvailabilityApi.md#create_inventory_block) | **POST** /availability/block | Block inventory
[**delete_inventory_block**](AvailabilityApi.md#delete_inventory_block) | **DELETE** /availability/block/{blockId} | Remove inventory block
[**get_availability_calendar**](AvailabilityApi.md#get_availability_calendar) | **GET** /availability/calendar | Get availability calendar
[**search_availability**](AvailabilityApi.md#search_availability) | **POST** /availability/search | Search availability
[**update_availability_calendar**](AvailabilityApi.md#update_availability_calendar) | **PUT** /availability/calendar | Update availability calendar (bulk)


# **create_inventory_block**
> CreateInventoryBlock201Response create_inventory_block(create_inventory_block_request)

Block inventory

Create an inventory block (for groups, maintenance, etc.)

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.create_inventory_block201_response import CreateInventoryBlock201Response
from stayos_api_client.models.create_inventory_block_request import CreateInventoryBlockRequest
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
    api_instance = stayos_api_client.AvailabilityApi(api_client)
    create_inventory_block_request = stayos_api_client.CreateInventoryBlockRequest() # CreateInventoryBlockRequest | 

    try:
        # Block inventory
        api_response = await api_instance.create_inventory_block(create_inventory_block_request)
        print("The response of AvailabilityApi->create_inventory_block:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailabilityApi->create_inventory_block: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_inventory_block_request** | [**CreateInventoryBlockRequest**](CreateInventoryBlockRequest.md)|  | 

### Return type

[**CreateInventoryBlock201Response**](CreateInventoryBlock201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Block created |  * Location - URL of created reservation <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_inventory_block**
> delete_inventory_block(block_id)

Remove inventory block

Remove an existing inventory block

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
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
    api_instance = stayos_api_client.AvailabilityApi(api_client)
    block_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Remove inventory block
        await api_instance.delete_inventory_block(block_id)
    except Exception as e:
        print("Exception when calling AvailabilityApi->delete_inventory_block: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **block_id** | **UUID**|  | 

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
**204** | Block removed successfully |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_availability_calendar**
> AvailabilityCalendar get_availability_calendar(property_id, start_date, end_date, unit_type_id=unit_type_id)

Get availability calendar

Retrieve availability calendar for specified date range

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.availability_calendar import AvailabilityCalendar
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
    api_instance = stayos_api_client.AvailabilityApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    start_date = '2013-10-20' # date | 
    end_date = '2013-10-20' # date | 
    unit_type_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)

    try:
        # Get availability calendar
        api_response = await api_instance.get_availability_calendar(property_id, start_date, end_date, unit_type_id=unit_type_id)
        print("The response of AvailabilityApi->get_availability_calendar:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailabilityApi->get_availability_calendar: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**|  | 
 **start_date** | **date**|  | 
 **end_date** | **date**|  | 
 **unit_type_id** | **UUID**|  | [optional] 

### Return type

[**AvailabilityCalendar**](AvailabilityCalendar.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_availability**
> SearchAvailability200Response search_availability(search_availability_request)

Search availability

Search for available inventory across properties based on criteria.

This is the primary endpoint for booking engines and search interfaces.

**Performance:** Optimized for sub-200ms response time

**Caching:** Results cached for 5 minutes


### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):
* Bearer (JWT) Authentication (BearerAuth):

```python
import stayos_api_client
from stayos_api_client.models.search_availability200_response import SearchAvailability200Response
from stayos_api_client.models.search_availability_request import SearchAvailabilityRequest
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

# Configure Bearer authorization (JWT): BearerAuth
configuration = stayos_api_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.AvailabilityApi(api_client)
    search_availability_request = stayos_api_client.SearchAvailabilityRequest() # SearchAvailabilityRequest | 

    try:
        # Search availability
        api_response = await api_instance.search_availability(search_availability_request)
        print("The response of AvailabilityApi->search_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailabilityApi->search_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_availability_request** | [**SearchAvailabilityRequest**](SearchAvailabilityRequest.md)|  | 

### Return type

[**SearchAvailability200Response**](SearchAvailability200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available inventory found |  -  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_availability_calendar**
> UpdateAvailabilityCalendar200Response update_availability_calendar(update_availability_calendar_request)

Update availability calendar (bulk)

Bulk update availability for multiple dates

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.update_availability_calendar200_response import UpdateAvailabilityCalendar200Response
from stayos_api_client.models.update_availability_calendar_request import UpdateAvailabilityCalendarRequest
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
    api_instance = stayos_api_client.AvailabilityApi(api_client)
    update_availability_calendar_request = stayos_api_client.UpdateAvailabilityCalendarRequest() # UpdateAvailabilityCalendarRequest | 

    try:
        # Update availability calendar (bulk)
        api_response = await api_instance.update_availability_calendar(update_availability_calendar_request)
        print("The response of AvailabilityApi->update_availability_calendar:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailabilityApi->update_availability_calendar: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_availability_calendar_request** | [**UpdateAvailabilityCalendarRequest**](UpdateAvailabilityCalendarRequest.md)|  | 

### Return type

[**UpdateAvailabilityCalendar200Response**](UpdateAvailabilityCalendar200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated |  -  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

