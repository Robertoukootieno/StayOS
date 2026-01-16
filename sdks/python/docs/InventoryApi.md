# stayos_api_client.InventoryApi

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_inventory_unit**](InventoryApi.md#create_inventory_unit) | **POST** /properties/{propertyId}/inventory-units | Create inventory unit
[**create_unit_type**](InventoryApi.md#create_unit_type) | **POST** /properties/{propertyId}/unit-types | Create unit type
[**get_unit_type**](InventoryApi.md#get_unit_type) | **GET** /unit-types/{unitTypeId} | Get unit type details
[**list_inventory_units**](InventoryApi.md#list_inventory_units) | **GET** /properties/{propertyId}/inventory-units | List inventory units for property
[**list_unit_types**](InventoryApi.md#list_unit_types) | **GET** /properties/{propertyId}/unit-types | List unit types
[**replace_unit_type**](InventoryApi.md#replace_unit_type) | **PUT** /unit-types/{unitTypeId} | Replace unit type (full update)
[**update_unit_type**](InventoryApi.md#update_unit_type) | **PATCH** /unit-types/{unitTypeId} | Update unit type (partial update)


# **create_inventory_unit**
> InventoryUnit create_inventory_unit(property_id, inventory_unit, idempotency_key=idempotency_key)

Create inventory unit

Add a new inventory unit to the property

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.inventory_unit import InventoryUnit
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
    api_instance = stayos_api_client.InventoryApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Unique property identifier
    inventory_unit = {"propertyId":"550e8400-e29b-41d4-a716-446655440000","unitNumber":"101","unitTypeId":"880e8400-e29b-41d4-a716-446655440000","floor":1,"physicalStatus":"OPERATIONAL","operationalStatus":"AVAILABLE"} # InventoryUnit | 
    idempotency_key = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Unique key for idempotent operations (UUID recommended) (optional)

    try:
        # Create inventory unit
        api_response = await api_instance.create_inventory_unit(property_id, inventory_unit, idempotency_key=idempotency_key)
        print("The response of InventoryApi->create_inventory_unit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->create_inventory_unit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**| Unique property identifier | 
 **inventory_unit** | [**InventoryUnit**](InventoryUnit.md)|  | 
 **idempotency_key** | **UUID**| Unique key for idempotent operations (UUID recommended) | [optional] 

### Return type

[**InventoryUnit**](InventoryUnit.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Inventory unit created successfully |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**409** | Unit number already exists |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_unit_type**
> UnitType create_unit_type(property_id, unit_type)

Create unit type

Create a new unit type for a property

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.unit_type import UnitType
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
    api_instance = stayos_api_client.InventoryApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Unique property identifier
    unit_type = stayos_api_client.UnitType() # UnitType | 

    try:
        # Create unit type
        api_response = await api_instance.create_unit_type(property_id, unit_type)
        print("The response of InventoryApi->create_unit_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->create_unit_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**| Unique property identifier | 
 **unit_type** | [**UnitType**](UnitType.md)|  | 

### Return type

[**UnitType**](UnitType.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Unit type created |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_unit_type**
> UnitType get_unit_type(unit_type_id)

Get unit type details

Retrieve details of a specific unit type

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.unit_type import UnitType
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
    api_instance = stayos_api_client.InventoryApi(api_client)
    unit_type_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get unit type details
        api_response = await api_instance.get_unit_type(unit_type_id)
        print("The response of InventoryApi->get_unit_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->get_unit_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unit_type_id** | **UUID**|  | 

### Return type

[**UnitType**](UnitType.md)

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

# **list_inventory_units**
> ListInventoryUnits200Response list_inventory_units(property_id, page_size=page_size, cursor=cursor, unit_type_id=unit_type_id, operational_status=operational_status, floor=floor)

List inventory units for property

Retrieve all inventory units (rooms, beds, suites) for a property

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_inventory_units200_response import ListInventoryUnits200Response
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
    api_instance = stayos_api_client.InventoryApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Unique property identifier
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)
    unit_type_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Filter by unit type (optional)
    operational_status = 'operational_status_example' # str | Filter by operational status (optional)
    floor = 56 # int | Filter by floor number (optional)

    try:
        # List inventory units for property
        api_response = await api_instance.list_inventory_units(property_id, page_size=page_size, cursor=cursor, unit_type_id=unit_type_id, operational_status=operational_status, floor=floor)
        print("The response of InventoryApi->list_inventory_units:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->list_inventory_units: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**| Unique property identifier | 
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 
 **unit_type_id** | **UUID**| Filter by unit type | [optional] 
 **operational_status** | **str**| Filter by operational status | [optional] 
 **floor** | **int**| Filter by floor number | [optional] 

### Return type

[**ListInventoryUnits200Response**](ListInventoryUnits200Response.md)

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

# **list_unit_types**
> ListUnitTypes200Response list_unit_types(property_id, page_size=page_size, cursor=cursor)

List unit types

Retrieve all unit types for a property

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_unit_types200_response import ListUnitTypes200Response
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
    api_instance = stayos_api_client.InventoryApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Unique property identifier
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List unit types
        api_response = await api_instance.list_unit_types(property_id, page_size=page_size, cursor=cursor)
        print("The response of InventoryApi->list_unit_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->list_unit_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**| Unique property identifier | 
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 

### Return type

[**ListUnitTypes200Response**](ListUnitTypes200Response.md)

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

# **replace_unit_type**
> UnitType replace_unit_type(unit_type_id, unit_type, if_match=if_match)

Replace unit type (full update)

Replace unit type with complete new details

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.unit_type import UnitType
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
    api_instance = stayos_api_client.InventoryApi(api_client)
    unit_type_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    unit_type = stayos_api_client.UnitType() # UnitType | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace unit type (full update)
        api_response = await api_instance.replace_unit_type(unit_type_id, unit_type, if_match=if_match)
        print("The response of InventoryApi->replace_unit_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->replace_unit_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unit_type_id** | **UUID**|  | 
 **unit_type** | [**UnitType**](UnitType.md)|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

### Return type

[**UnitType**](UnitType.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully replaced |  * ETag -  <br>  |
**404** | Resource not found |  -  |
**412** | Precondition failed - optimistic locking failure |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_unit_type**
> UnitType update_unit_type(unit_type_id, body, if_match=if_match)

Update unit type (partial update)

Update specific fields of a unit type

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.unit_type import UnitType
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
    api_instance = stayos_api_client.InventoryApi(api_client)
    unit_type_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = None # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update unit type (partial update)
        api_response = await api_instance.update_unit_type(unit_type_id, body, if_match=if_match)
        print("The response of InventoryApi->update_unit_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InventoryApi->update_unit_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unit_type_id** | **UUID**|  | 
 **body** | **object**|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

### Return type

[**UnitType**](UnitType.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated |  * ETag -  <br>  |
**404** | Resource not found |  -  |
**412** | Precondition failed - optimistic locking failure |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

