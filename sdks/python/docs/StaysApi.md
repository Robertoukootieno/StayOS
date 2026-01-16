# stayos_api_client.StaysApi

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_stay_charge**](StaysApi.md#add_stay_charge) | **POST** /stays/{stayId}/charges | Add incidental charge
[**checkout_stay**](StaysApi.md#checkout_stay) | **POST** /stays/{stayId}/checkout | Check-out guest
[**create_stay**](StaysApi.md#create_stay) | **POST** /stays | Create stay (check-in)
[**deactivate_key_card**](StaysApi.md#deactivate_key_card) | **DELETE** /stays/{stayId}/key-cards/{cardId} | Deactivate key card
[**extend_stay**](StaysApi.md#extend_stay) | **POST** /stays/{stayId}/extend | Extend stay
[**get_stay**](StaysApi.md#get_stay) | **GET** /stays/{stayId} | Get stay details
[**issue_key_card**](StaysApi.md#issue_key_card) | **POST** /stays/{stayId}/key-cards | Issue key card
[**list_stays**](StaysApi.md#list_stays) | **GET** /stays | List active stays
[**replace_stay**](StaysApi.md#replace_stay) | **PUT** /stays/{stayId} | Replace stay (full update)
[**update_stay**](StaysApi.md#update_stay) | **PATCH** /stays/{stayId} | Update stay (partial update)


# **add_stay_charge**
> LineItem add_stay_charge(stay_id, line_item)

Add incidental charge

Add an incidental charge to the stay

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.line_item import LineItem
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
    api_instance = stayos_api_client.StaysApi(api_client)
    stay_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    line_item = stayos_api_client.LineItem() # LineItem | 

    try:
        # Add incidental charge
        api_response = await api_instance.add_stay_charge(stay_id, line_item)
        print("The response of StaysApi->add_stay_charge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaysApi->add_stay_charge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stay_id** | **UUID**|  | 
 **line_item** | [**LineItem**](LineItem.md)|  | 

### Return type

[**LineItem**](LineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Charge added |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkout_stay**
> Stay checkout_stay(stay_id, checkout_stay_request=checkout_stay_request)

Check-out guest

Process guest checkout

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.checkout_stay_request import CheckoutStayRequest
from stayos_api_client.models.stay import Stay
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
    api_instance = stayos_api_client.StaysApi(api_client)
    stay_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    checkout_stay_request = stayos_api_client.CheckoutStayRequest() # CheckoutStayRequest |  (optional)

    try:
        # Check-out guest
        api_response = await api_instance.checkout_stay(stay_id, checkout_stay_request=checkout_stay_request)
        print("The response of StaysApi->checkout_stay:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaysApi->checkout_stay: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stay_id** | **UUID**|  | 
 **checkout_stay_request** | [**CheckoutStayRequest**](CheckoutStayRequest.md)|  | [optional] 

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Checkout successful |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_stay**
> Stay create_stay(stay)

Create stay (check-in)

Create a new stay when guest checks in

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.stay import Stay
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
    api_instance = stayos_api_client.StaysApi(api_client)
    stay = stayos_api_client.Stay() # Stay | 

    try:
        # Create stay (check-in)
        api_response = await api_instance.create_stay(stay)
        print("The response of StaysApi->create_stay:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaysApi->create_stay: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stay** | [**Stay**](Stay.md)|  | 

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Stay created |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivate_key_card**
> deactivate_key_card(stay_id, card_id)

Deactivate key card

Deactivate a key card

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
    api_instance = stayos_api_client.StaysApi(api_client)
    stay_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    card_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Deactivate key card
        await api_instance.deactivate_key_card(stay_id, card_id)
    except Exception as e:
        print("Exception when calling StaysApi->deactivate_key_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stay_id** | **UUID**|  | 
 **card_id** | **UUID**|  | 

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
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extend_stay**
> Stay extend_stay(stay_id, extend_stay_request)

Extend stay

Extend guest stay to a new checkout date

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.extend_stay_request import ExtendStayRequest
from stayos_api_client.models.stay import Stay
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
    api_instance = stayos_api_client.StaysApi(api_client)
    stay_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    extend_stay_request = stayos_api_client.ExtendStayRequest() # ExtendStayRequest | 

    try:
        # Extend stay
        api_response = await api_instance.extend_stay(stay_id, extend_stay_request)
        print("The response of StaysApi->extend_stay:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaysApi->extend_stay: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stay_id** | **UUID**|  | 
 **extend_stay_request** | [**ExtendStayRequest**](ExtendStayRequest.md)|  | 

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Stay extended |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_stay**
> Stay get_stay(stay_id)

Get stay details

Retrieve details of a specific stay

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.stay import Stay
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
    api_instance = stayos_api_client.StaysApi(api_client)
    stay_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get stay details
        api_response = await api_instance.get_stay(stay_id)
        print("The response of StaysApi->get_stay:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaysApi->get_stay: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stay_id** | **UUID**|  | 

### Return type

[**Stay**](Stay.md)

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

# **issue_key_card**
> KeyCard issue_key_card(stay_id, key_card=key_card)

Issue key card

Issue a new key card for the stay

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.key_card import KeyCard
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
    api_instance = stayos_api_client.StaysApi(api_client)
    stay_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    key_card = stayos_api_client.KeyCard() # KeyCard |  (optional)

    try:
        # Issue key card
        api_response = await api_instance.issue_key_card(stay_id, key_card=key_card)
        print("The response of StaysApi->issue_key_card:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaysApi->issue_key_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stay_id** | **UUID**|  | 
 **key_card** | [**KeyCard**](KeyCard.md)|  | [optional] 

### Return type

[**KeyCard**](KeyCard.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Key card issued |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_stays**
> ListStays200Response list_stays(page_size=page_size, cursor=cursor, property_id=property_id, status=status)

List active stays

Retrieve all active guest stays

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_stays200_response import ListStays200Response
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
    api_instance = stayos_api_client.StaysApi(api_client)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    status = 'status_example' # str |  (optional)

    try:
        # List active stays
        api_response = await api_instance.list_stays(page_size=page_size, cursor=cursor, property_id=property_id, status=status)
        print("The response of StaysApi->list_stays:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaysApi->list_stays: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 
 **property_id** | **UUID**|  | [optional] 
 **status** | **str**|  | [optional] 

### Return type

[**ListStays200Response**](ListStays200Response.md)

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

# **replace_stay**
> Stay replace_stay(stay_id, stay, if_match=if_match)

Replace stay (full update)

Replace stay with complete new details

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.stay import Stay
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
    api_instance = stayos_api_client.StaysApi(api_client)
    stay_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    stay = stayos_api_client.Stay() # Stay | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace stay (full update)
        api_response = await api_instance.replace_stay(stay_id, stay, if_match=if_match)
        print("The response of StaysApi->replace_stay:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaysApi->replace_stay: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stay_id** | **UUID**|  | 
 **stay** | [**Stay**](Stay.md)|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

### Return type

[**Stay**](Stay.md)

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

# **update_stay**
> Stay update_stay(stay_id, body, if_match=if_match)

Update stay (partial update)

Update specific fields of a stay

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.stay import Stay
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
    api_instance = stayos_api_client.StaysApi(api_client)
    stay_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = None # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update stay (partial update)
        api_response = await api_instance.update_stay(stay_id, body, if_match=if_match)
        print("The response of StaysApi->update_stay:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaysApi->update_stay: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stay_id** | **UUID**|  | 
 **body** | **object**|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

### Return type

[**Stay**](Stay.md)

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

