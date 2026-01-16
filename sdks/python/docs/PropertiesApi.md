# stayos_api_client.PropertiesApi

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_property**](PropertiesApi.md#create_property) | **POST** /properties | Create property
[**delete_property**](PropertiesApi.md#delete_property) | **DELETE** /properties/{propertyId} | Delete property
[**get_property**](PropertiesApi.md#get_property) | **GET** /properties/{propertyId} | Get property by ID
[**list_properties**](PropertiesApi.md#list_properties) | **GET** /properties | List properties
[**replace_inventory_unit**](PropertiesApi.md#replace_inventory_unit) | **PUT** /inventory-units/{unitId} | Replace inventory unit (full update)
[**replace_property**](PropertiesApi.md#replace_property) | **PUT** /properties/{propertyId} | Replace property (full update)
[**replace_rate_strategy**](PropertiesApi.md#replace_rate_strategy) | **PUT** /rate-strategies/{strategyId} | Replace rate strategy (full update)
[**update_inventory_unit**](PropertiesApi.md#update_inventory_unit) | **PATCH** /inventory-units/{unitId} | Update inventory unit (partial update)
[**update_property**](PropertiesApi.md#update_property) | **PATCH** /properties/{propertyId} | Update property (partial update)
[**update_rate_strategy**](PropertiesApi.md#update_rate_strategy) | **PATCH** /rate-strategies/{strategyId} | Update rate strategy (partial update)


# **create_property**
> ModelProperty create_property(model_property, idempotency_key=idempotency_key)

Create property

Create a new property. This is typically an administrative operation.

**Authorization:** Requires `write:properties` or `admin:all` scope

**Idempotency:** Supports idempotency via `Idempotency-Key` header


### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.model_property import ModelProperty
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
    api_instance = stayos_api_client.PropertiesApi(api_client)
    model_property = {"name":"Grand Plaza Hotel","classification":"HOTEL","starRating":4.5,"location":{"street":"123 Main Street","city":"San Francisco","state":"CA","postalCode":"94102","country":"US"},"coordinates":{"latitude":37.7749,"longitude":-122.4194},"timezone":"America/Los_Angeles","policies":{"checkInTime":"15:00","checkOutTime":"11:00","cancellationPolicy":{"refundability":"FULLY_REFUNDABLE","freeCancellationHours":24}},"amenities":["WIFI","PARKING","POOL","GYM"],"contactInfo":{"email":"info@grandplaza.com","phone":"+14155551234"}} # ModelProperty | 
    idempotency_key = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Unique key for idempotent operations (UUID recommended) (optional)

    try:
        # Create property
        api_response = await api_instance.create_property(model_property, idempotency_key=idempotency_key)
        print("The response of PropertiesApi->create_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertiesApi->create_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_property** | [**ModelProperty**](ModelProperty.md)|  | 
 **idempotency_key** | **UUID**| Unique key for idempotent operations (UUID recommended) | [optional] 

### Return type

[**ModelProperty**](ModelProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Property created successfully |  * Location -  <br>  * X-Request-Id - Unique request identifier for tracing <br>  |
**400** | Bad request - validation error |  -  |
**401** | Unauthorized - authentication required |  -  |
**403** | Forbidden - insufficient permissions |  -  |
**409** | Conflict - resource state conflict |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_property**
> delete_property(property_id)

Delete property

Soft delete a property. Property status changes to CLOSED.

**Warning:** This operation cannot be undone. All future reservations will be cancelled.


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
    api_instance = stayos_api_client.PropertiesApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Unique property identifier

    try:
        # Delete property
        await api_instance.delete_property(property_id)
    except Exception as e:
        print("Exception when calling PropertiesApi->delete_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**| Unique property identifier | 

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
**204** | Successful operation with no content |  * X-Request-Id - Unique request identifier for tracing <br>  |
**404** | Resource not found |  -  |
**409** | Cannot delete property with active reservations |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_property**
> ModelProperty get_property(property_id, expand=expand, if_none_match=if_none_match)

Get property by ID

Retrieve detailed information about a specific property

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):
* Bearer (JWT) Authentication (BearerAuth):

```python
import stayos_api_client
from stayos_api_client.models.model_property import ModelProperty
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
    api_instance = stayos_api_client.PropertiesApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Unique property identifier
    expand = 'property,guest,rateStrategy' # str | Comma-separated list of related resources to include (optional)
    if_none_match = 'if_none_match_example' # str | ETag for conditional requests (optional)

    try:
        # Get property by ID
        api_response = await api_instance.get_property(property_id, expand=expand, if_none_match=if_none_match)
        print("The response of PropertiesApi->get_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertiesApi->get_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**| Unique property identifier | 
 **expand** | **str**| Comma-separated list of related resources to include | [optional] 
 **if_none_match** | **str**| ETag for conditional requests | [optional] 

### Return type

[**ModelProperty**](ModelProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * ETag -  <br>  * X-Request-Id - Unique request identifier for tracing <br>  |
**304** | Not Modified (cached version is current) |  -  |
**401** | Unauthorized - authentication required |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_properties**
> ListProperties200Response list_properties(page_size=page_size, cursor=cursor, organization_id=organization_id, operational_status=operational_status, classification=classification, sort_by=sort_by, sort_order=sort_order, expand=expand)

List properties

Retrieve a paginated list of properties. Supports filtering, sorting, and field expansion.

**Authorization:** Requires `read:properties` scope

**Rate Limit:** 100 requests/minute


### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):
* Bearer (JWT) Authentication (BearerAuth):

```python
import stayos_api_client
from stayos_api_client.models.list_properties200_response import ListProperties200Response
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
    api_instance = stayos_api_client.PropertiesApi(api_client)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)
    organization_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Filter by organization (optional)
    operational_status = 'operational_status_example' # str | Filter by operational status (optional)
    classification = 'classification_example' # str | Filter by property classification (optional)
    sort_by = 'sort_by_example' # str | Field to sort by (optional)
    sort_order = asc # str | Sort order (optional) (default to asc)
    expand = 'property,guest,rateStrategy' # str | Comma-separated list of related resources to include (optional)

    try:
        # List properties
        api_response = await api_instance.list_properties(page_size=page_size, cursor=cursor, organization_id=organization_id, operational_status=operational_status, classification=classification, sort_by=sort_by, sort_order=sort_order, expand=expand)
        print("The response of PropertiesApi->list_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertiesApi->list_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 
 **organization_id** | **UUID**| Filter by organization | [optional] 
 **operational_status** | **str**| Filter by operational status | [optional] 
 **classification** | **str**| Filter by property classification | [optional] 
 **sort_by** | **str**| Field to sort by | [optional] 
 **sort_order** | **str**| Sort order | [optional] [default to asc]
 **expand** | **str**| Comma-separated list of related resources to include | [optional] 

### Return type

[**ListProperties200Response**](ListProperties200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Request-Id - Unique request identifier for tracing <br>  |
**400** | Bad request - validation error |  -  |
**401** | Unauthorized - authentication required |  -  |
**429** | Too many requests - rate limit exceeded |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset - Unix timestamp when rate limit resets <br>  * Retry-After - Seconds until rate limit resets <br>  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_inventory_unit**
> object replace_inventory_unit(unit_id, body, if_match=if_match)

Replace inventory unit (full update)

Replace inventory unit with complete new details including type, status, and physical attributes

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
    api_instance = stayos_api_client.PropertiesApi(api_client)
    unit_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = None # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace inventory unit (full update)
        api_response = await api_instance.replace_inventory_unit(unit_id, body, if_match=if_match)
        print("The response of PropertiesApi->replace_inventory_unit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertiesApi->replace_inventory_unit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unit_id** | **UUID**|  | 
 **body** | **object**|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

### Return type

**object**

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

# **replace_property**
> ModelProperty replace_property(property_id, model_property, if_match=if_match)

Replace property (full update)

Replace an existing property with a complete new representation.
All fields must be provided. For partial updates, use PATCH instead.

**Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts


### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.model_property import ModelProperty
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
    api_instance = stayos_api_client.PropertiesApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Unique property identifier
    model_property = stayos_api_client.ModelProperty() # ModelProperty | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace property (full update)
        api_response = await api_instance.replace_property(property_id, model_property, if_match=if_match)
        print("The response of PropertiesApi->replace_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertiesApi->replace_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**| Unique property identifier | 
 **model_property** | [**ModelProperty**](ModelProperty.md)|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

### Return type

[**ModelProperty**](ModelProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully replaced |  * ETag -  <br>  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**412** | Precondition failed - optimistic locking failure |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_rate_strategy**
> RateStrategy replace_rate_strategy(strategy_id, rate_strategy, if_match=if_match)

Replace rate strategy (full update)

Replace rate strategy with complete new pricing rules, restrictions, and yield management settings

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
    api_instance = stayos_api_client.PropertiesApi(api_client)
    strategy_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    rate_strategy = stayos_api_client.RateStrategy() # RateStrategy | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace rate strategy (full update)
        api_response = await api_instance.replace_rate_strategy(strategy_id, rate_strategy, if_match=if_match)
        print("The response of PropertiesApi->replace_rate_strategy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertiesApi->replace_rate_strategy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **strategy_id** | **UUID**|  | 
 **rate_strategy** | [**RateStrategy**](RateStrategy.md)|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

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
**200** | Successfully replaced |  * ETag -  <br>  |
**404** | Resource not found |  -  |
**412** | Precondition failed - optimistic locking failure |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_inventory_unit**
> object update_inventory_unit(unit_id, body, if_match=if_match)

Update inventory unit (partial update)

Update specific fields of an inventory unit.

**Common use cases:**
- Change unit status (AVAILABLE → MAINTENANCE)
- Update room features
- Modify floor/location
- Update amenities


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
    api_instance = stayos_api_client.PropertiesApi(api_client)
    unit_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = {"status":"MAINTENANCE","maintenanceNotes":"AC repair scheduled"} # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update inventory unit (partial update)
        api_response = await api_instance.update_inventory_unit(unit_id, body, if_match=if_match)
        print("The response of PropertiesApi->update_inventory_unit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertiesApi->update_inventory_unit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unit_id** | **UUID**|  | 
 **body** | **object**|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

### Return type

**object**

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

# **update_property**
> ModelProperty update_property(property_id, body, if_match=if_match)

Update property (partial update)

Partially update a property. Only provided fields will be updated.
This is the recommended method for most updates.

**Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts

**Example:** Update only the property name and contact email:
```json
{
  "name": "New Property Name",
  "contactInfo": {
    "email": "newemail@property.com"
  }
}
```


### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.model_property import ModelProperty
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
    api_instance = stayos_api_client.PropertiesApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Unique property identifier
    body = {"name":"Updated Property Name","contactInfo":{"email":"newemail@example.com"}} # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update property (partial update)
        api_response = await api_instance.update_property(property_id, body, if_match=if_match)
        print("The response of PropertiesApi->update_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertiesApi->update_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**| Unique property identifier | 
 **body** | **object**|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

### Return type

[**ModelProperty**](ModelProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated |  * ETag -  <br>  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**412** | Precondition failed - optimistic locking failure |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_rate_strategy**
> RateStrategy update_rate_strategy(strategy_id, body, if_match=if_match)

Update rate strategy (partial update)

Update specific fields of a rate strategy.

**Common use cases:**
- Adjust base rate
- Update seasonal modifiers
- Change minimum stay requirements
- Modify cancellation policy


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
    api_instance = stayos_api_client.PropertiesApi(api_client)
    strategy_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = {"baseRate":{"amount":199.99,"currency":"USD"},"minimumStay":2} # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update rate strategy (partial update)
        api_response = await api_instance.update_rate_strategy(strategy_id, body, if_match=if_match)
        print("The response of PropertiesApi->update_rate_strategy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertiesApi->update_rate_strategy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **strategy_id** | **UUID**|  | 
 **body** | **object**|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

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
**200** | Successfully updated |  * ETag -  <br>  |
**404** | Resource not found |  -  |
**412** | Precondition failed - optimistic locking failure |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

