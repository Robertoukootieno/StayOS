# stayos_api_client.GuestsApi

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_loyalty_points**](GuestsApi.md#add_loyalty_points) | **POST** /guests/{guestId}/loyalty/points | Add loyalty points
[**create_guest**](GuestsApi.md#create_guest) | **POST** /guests | Create guest profile
[**delete_guest**](GuestsApi.md#delete_guest) | **DELETE** /guests/{guestId} | Delete guest profile (GDPR)
[**get_guest**](GuestsApi.md#get_guest) | **GET** /guests/{guestId} | Get guest profile
[**get_guest_loyalty**](GuestsApi.md#get_guest_loyalty) | **GET** /guests/{guestId}/loyalty | Get guest loyalty status
[**get_guest_stays**](GuestsApi.md#get_guest_stays) | **GET** /guests/{guestId}/stays | Get guest stay history
[**list_guests**](GuestsApi.md#list_guests) | **GET** /guests | List guest profiles
[**merge_guests**](GuestsApi.md#merge_guests) | **POST** /guests/merge | Merge duplicate guest profiles
[**replace_guest**](GuestsApi.md#replace_guest) | **PUT** /guests/{guestId} | Replace guest profile (full update)
[**replace_guest_preferences**](GuestsApi.md#replace_guest_preferences) | **PUT** /guests/{guestId}/preferences | Replace guest preferences (full update)
[**search_guests**](GuestsApi.md#search_guests) | **POST** /guests/search | Search guests
[**update_guest**](GuestsApi.md#update_guest) | **PATCH** /guests/{guestId} | Update guest profile (partial update)
[**update_guest_preferences**](GuestsApi.md#update_guest_preferences) | **PATCH** /guests/{guestId}/preferences | Update guest preferences (partial update)
[**verify_guest**](GuestsApi.md#verify_guest) | **POST** /guests/{guestId}/verify | Verify guest identity


# **add_loyalty_points**
> AddLoyaltyPoints200Response add_loyalty_points(guest_id, add_loyalty_points_request)

Add loyalty points

Add loyalty points to guest account

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.add_loyalty_points200_response import AddLoyaltyPoints200Response
from stayos_api_client.models.add_loyalty_points_request import AddLoyaltyPointsRequest
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
    api_instance = stayos_api_client.GuestsApi(api_client)
    guest_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    add_loyalty_points_request = stayos_api_client.AddLoyaltyPointsRequest() # AddLoyaltyPointsRequest | 

    try:
        # Add loyalty points
        api_response = await api_instance.add_loyalty_points(guest_id, add_loyalty_points_request)
        print("The response of GuestsApi->add_loyalty_points:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestsApi->add_loyalty_points: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guest_id** | **UUID**|  | 
 **add_loyalty_points_request** | [**AddLoyaltyPointsRequest**](AddLoyaltyPointsRequest.md)|  | 

### Return type

[**AddLoyaltyPoints200Response**](AddLoyaltyPoints200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Points added successfully |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_guest**
> GuestProfile create_guest(guest_profile)

Create guest profile

Create a new guest profile

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.guest_profile import GuestProfile
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
    api_instance = stayos_api_client.GuestsApi(api_client)
    guest_profile = stayos_api_client.GuestProfile() # GuestProfile | 

    try:
        # Create guest profile
        api_response = await api_instance.create_guest(guest_profile)
        print("The response of GuestsApi->create_guest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestsApi->create_guest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guest_profile** | [**GuestProfile**](GuestProfile.md)|  | 

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Guest profile created |  * Location -  <br>  * ETag -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_guest**
> delete_guest(guest_id)

Delete guest profile (GDPR)

Delete guest profile per GDPR right to be forgotten

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
    api_instance = stayos_api_client.GuestsApi(api_client)
    guest_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete guest profile (GDPR)
        await api_instance.delete_guest(guest_id)
    except Exception as e:
        print("Exception when calling GuestsApi->delete_guest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guest_id** | **UUID**|  | 

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
**204** | Guest deleted |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_guest**
> GuestProfile get_guest(guest_id)

Get guest profile

Retrieve complete guest profile including personal information, contact details, preferences, and loyalty status

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.guest_profile import GuestProfile
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
    api_instance = stayos_api_client.GuestsApi(api_client)
    guest_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get guest profile
        api_response = await api_instance.get_guest(guest_id)
        print("The response of GuestsApi->get_guest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestsApi->get_guest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guest_id** | **UUID**|  | 

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * ETag -  <br>  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_guest_loyalty**
> GetGuestLoyalty200Response get_guest_loyalty(guest_id)

Get guest loyalty status

Retrieve loyalty program status and points

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.get_guest_loyalty200_response import GetGuestLoyalty200Response
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
    api_instance = stayos_api_client.GuestsApi(api_client)
    guest_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get guest loyalty status
        api_response = await api_instance.get_guest_loyalty(guest_id)
        print("The response of GuestsApi->get_guest_loyalty:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestsApi->get_guest_loyalty: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guest_id** | **UUID**|  | 

### Return type

[**GetGuestLoyalty200Response**](GetGuestLoyalty200Response.md)

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

# **get_guest_stays**
> GetGuestStays200Response get_guest_stays(guest_id, page_size=page_size, cursor=cursor)

Get guest stay history

Retrieve complete stay history for a guest

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.get_guest_stays200_response import GetGuestStays200Response
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
    api_instance = stayos_api_client.GuestsApi(api_client)
    guest_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # Get guest stay history
        api_response = await api_instance.get_guest_stays(guest_id, page_size=page_size, cursor=cursor)
        print("The response of GuestsApi->get_guest_stays:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestsApi->get_guest_stays: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guest_id** | **UUID**|  | 
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

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

# **list_guests**
> ListGuests200Response list_guests(page_size=page_size, cursor=cursor, search=search, loyalty_tier=loyalty_tier)

List guest profiles

Retrieve list of guest profiles

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_guests200_response import ListGuests200Response
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
    api_instance = stayos_api_client.GuestsApi(api_client)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)
    search = 'search_example' # str | Search by name or email (optional)
    loyalty_tier = 'loyalty_tier_example' # str |  (optional)

    try:
        # List guest profiles
        api_response = await api_instance.list_guests(page_size=page_size, cursor=cursor, search=search, loyalty_tier=loyalty_tier)
        print("The response of GuestsApi->list_guests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestsApi->list_guests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 
 **search** | **str**| Search by name or email | [optional] 
 **loyalty_tier** | **str**|  | [optional] 

### Return type

[**ListGuests200Response**](ListGuests200Response.md)

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

# **merge_guests**
> GuestProfile merge_guests(merge_guests_request)

Merge duplicate guest profiles

Merge two guest profiles into one

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.guest_profile import GuestProfile
from stayos_api_client.models.merge_guests_request import MergeGuestsRequest
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
    api_instance = stayos_api_client.GuestsApi(api_client)
    merge_guests_request = stayos_api_client.MergeGuestsRequest() # MergeGuestsRequest | 

    try:
        # Merge duplicate guest profiles
        api_response = await api_instance.merge_guests(merge_guests_request)
        print("The response of GuestsApi->merge_guests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestsApi->merge_guests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merge_guests_request** | [**MergeGuestsRequest**](MergeGuestsRequest.md)|  | 

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Profiles merged successfully |  -  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_guest**
> GuestProfile replace_guest(guest_id, guest_profile, if_match=if_match)

Replace guest profile (full update)

Replace an existing guest profile with a complete new representation.
All fields must be provided. For partial updates, use PATCH instead.

**Optimistic Locking:** Use `If-Match` header with ETag


### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.guest_profile import GuestProfile
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
    api_instance = stayos_api_client.GuestsApi(api_client)
    guest_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    guest_profile = stayos_api_client.GuestProfile() # GuestProfile | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace guest profile (full update)
        api_response = await api_instance.replace_guest(guest_id, guest_profile, if_match=if_match)
        print("The response of GuestsApi->replace_guest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestsApi->replace_guest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guest_id** | **UUID**|  | 
 **guest_profile** | [**GuestProfile**](GuestProfile.md)|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

### Return type

[**GuestProfile**](GuestProfile.md)

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

# **replace_guest_preferences**
> object replace_guest_preferences(guest_id, body, if_match=if_match)

Replace guest preferences (full update)

Replace all guest preferences with new settings including room preferences, dietary restrictions, and communication preferences

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
    api_instance = stayos_api_client.GuestsApi(api_client)
    guest_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = None # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace guest preferences (full update)
        api_response = await api_instance.replace_guest_preferences(guest_id, body, if_match=if_match)
        print("The response of GuestsApi->replace_guest_preferences:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestsApi->replace_guest_preferences: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guest_id** | **UUID**|  | 
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

# **search_guests**
> List[GuestProfile] search_guests(search_guests_request)

Search guests

Advanced guest search with multiple criteria

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.guest_profile import GuestProfile
from stayos_api_client.models.search_guests_request import SearchGuestsRequest
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
    api_instance = stayos_api_client.GuestsApi(api_client)
    search_guests_request = stayos_api_client.SearchGuestsRequest() # SearchGuestsRequest | 

    try:
        # Search guests
        api_response = await api_instance.search_guests(search_guests_request)
        print("The response of GuestsApi->search_guests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestsApi->search_guests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_guests_request** | [**SearchGuestsRequest**](SearchGuestsRequest.md)|  | 

### Return type

[**List[GuestProfile]**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_guest**
> GuestProfile update_guest(guest_id, body, if_match=if_match)

Update guest profile (partial update)

Partially update a guest profile. Only provided fields will be updated.
This is the recommended method for most updates.

**Optimistic Locking:** Use `If-Match` header with ETag

**Common use cases:**
- Update email or phone
- Change address
- Update preferences
- Modify loyalty tier


### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.guest_profile import GuestProfile
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
    api_instance = stayos_api_client.GuestsApi(api_client)
    guest_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = {"email":"newemail@example.com","phone":"+1234567890"} # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update guest profile (partial update)
        api_response = await api_instance.update_guest(guest_id, body, if_match=if_match)
        print("The response of GuestsApi->update_guest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestsApi->update_guest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guest_id** | **UUID**|  | 
 **body** | **object**|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

### Return type

[**GuestProfile**](GuestProfile.md)

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

# **update_guest_preferences**
> object update_guest_preferences(guest_id, body, if_match=if_match)

Update guest preferences (partial update)

Update specific guest preferences. Only provided preferences will be updated.

**Example:** Update room type preference only


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
    api_instance = stayos_api_client.GuestsApi(api_client)
    guest_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = {"roomType":"KING","floorPreference":"HIGH"} # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update guest preferences (partial update)
        api_response = await api_instance.update_guest_preferences(guest_id, body, if_match=if_match)
        print("The response of GuestsApi->update_guest_preferences:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestsApi->update_guest_preferences: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guest_id** | **UUID**|  | 
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

# **verify_guest**
> VerifyGuest200Response verify_guest(guest_id, verify_guest_request)

Verify guest identity

Verify guest identity for security purposes

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.verify_guest200_response import VerifyGuest200Response
from stayos_api_client.models.verify_guest_request import VerifyGuestRequest
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
    api_instance = stayos_api_client.GuestsApi(api_client)
    guest_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    verify_guest_request = stayos_api_client.VerifyGuestRequest() # VerifyGuestRequest | 

    try:
        # Verify guest identity
        api_response = await api_instance.verify_guest(guest_id, verify_guest_request)
        print("The response of GuestsApi->verify_guest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GuestsApi->verify_guest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guest_id** | **UUID**|  | 
 **verify_guest_request** | [**VerifyGuestRequest**](VerifyGuestRequest.md)|  | 

### Return type

[**VerifyGuest200Response**](VerifyGuest200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Verification successful |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

