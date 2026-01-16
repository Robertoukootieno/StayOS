# stayos_api_client.ReservationsApi

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_special_request**](ReservationsApi.md#add_special_request) | **POST** /reservations/{reservationId}/special-requests | Add special request to reservation
[**cancel_reservation**](ReservationsApi.md#cancel_reservation) | **POST** /reservations/{reservationId}/cancel | Cancel reservation
[**confirm_reservation**](ReservationsApi.md#confirm_reservation) | **POST** /reservations/{reservationId}/confirm | Confirm reservation
[**create_reservation**](ReservationsApi.md#create_reservation) | **POST** /reservations | Create reservation
[**get_reservation**](ReservationsApi.md#get_reservation) | **GET** /reservations/{reservationId} | Get reservation details
[**get_reservation_history**](ReservationsApi.md#get_reservation_history) | **GET** /reservations/{reservationId}/history | Get reservation modification history
[**get_reservation_quote**](ReservationsApi.md#get_reservation_quote) | **POST** /reservations/quote | Get pricing quote
[**mark_reservation_no_show**](ReservationsApi.md#mark_reservation_no_show) | **POST** /reservations/{reservationId}/no-show | Mark reservation as no-show
[**replace_reservation**](ReservationsApi.md#replace_reservation) | **PUT** /reservations/{reservationId} | Replace reservation (full update)
[**search_reservations**](ReservationsApi.md#search_reservations) | **GET** /reservations/search | Advanced reservation search
[**update_reservation**](ReservationsApi.md#update_reservation) | **PATCH** /reservations/{reservationId} | Update reservation (partial update)


# **add_special_request**
> Reservation add_special_request(reservation_id, add_special_request_request)

Add special request to reservation

Add a special request or note to an existing reservation

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.add_special_request_request import AddSpecialRequestRequest
from stayos_api_client.models.reservation import Reservation
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
    api_instance = stayos_api_client.ReservationsApi(api_client)
    reservation_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    add_special_request_request = stayos_api_client.AddSpecialRequestRequest() # AddSpecialRequestRequest | 

    try:
        # Add special request to reservation
        api_response = await api_instance.add_special_request(reservation_id, add_special_request_request)
        print("The response of ReservationsApi->add_special_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationsApi->add_special_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_id** | **UUID**|  | 
 **add_special_request_request** | [**AddSpecialRequestRequest**](AddSpecialRequestRequest.md)|  | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Special request added |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancel_reservation**
> Reservation cancel_reservation(reservation_id, cancel_reservation_request)

Cancel reservation

Cancel an existing reservation

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.cancel_reservation_request import CancelReservationRequest
from stayos_api_client.models.reservation import Reservation
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
    api_instance = stayos_api_client.ReservationsApi(api_client)
    reservation_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    cancel_reservation_request = stayos_api_client.CancelReservationRequest() # CancelReservationRequest | 

    try:
        # Cancel reservation
        api_response = await api_instance.cancel_reservation(reservation_id, cancel_reservation_request)
        print("The response of ReservationsApi->cancel_reservation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationsApi->cancel_reservation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_id** | **UUID**|  | 
 **cancel_reservation_request** | [**CancelReservationRequest**](CancelReservationRequest.md)|  | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reservation cancelled |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirm_reservation**
> Reservation confirm_reservation(reservation_id)

Confirm reservation

Confirm a pending reservation

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.reservation import Reservation
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
    api_instance = stayos_api_client.ReservationsApi(api_client)
    reservation_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Confirm reservation
        api_response = await api_instance.confirm_reservation(reservation_id)
        print("The response of ReservationsApi->confirm_reservation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationsApi->confirm_reservation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_id** | **UUID**|  | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reservation confirmed |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_reservation**
> Reservation create_reservation(reservation)

Create reservation

Create a new reservation

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.reservation import Reservation
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
    api_instance = stayos_api_client.ReservationsApi(api_client)
    reservation = stayos_api_client.Reservation() # Reservation | 

    try:
        # Create reservation
        api_response = await api_instance.create_reservation(reservation)
        print("The response of ReservationsApi->create_reservation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationsApi->create_reservation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation** | [**Reservation**](Reservation.md)|  | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Reservation created |  * Location - URL of created reservation <br>  * ETag -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_reservation**
> Reservation get_reservation(reservation_id)

Get reservation details

Retrieve complete details of a specific reservation including guest information, dates, pricing, and current status

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.reservation import Reservation
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
    api_instance = stayos_api_client.ReservationsApi(api_client)
    reservation_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get reservation details
        api_response = await api_instance.get_reservation(reservation_id)
        print("The response of ReservationsApi->get_reservation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationsApi->get_reservation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_id** | **UUID**|  | 

### Return type

[**Reservation**](Reservation.md)

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

# **get_reservation_history**
> List[GetReservationHistory200ResponseInner] get_reservation_history(reservation_id)

Get reservation modification history

Retrieve complete history of changes to a reservation

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.get_reservation_history200_response_inner import GetReservationHistory200ResponseInner
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
    api_instance = stayos_api_client.ReservationsApi(api_client)
    reservation_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get reservation modification history
        api_response = await api_instance.get_reservation_history(reservation_id)
        print("The response of ReservationsApi->get_reservation_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationsApi->get_reservation_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_id** | **UUID**|  | 

### Return type

[**List[GetReservationHistory200ResponseInner]**](GetReservationHistory200ResponseInner.md)

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

# **get_reservation_quote**
> GetReservationQuote200Response get_reservation_quote(get_reservation_quote_request)

Get pricing quote

Calculate pricing for a potential reservation without creating it

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.get_reservation_quote200_response import GetReservationQuote200Response
from stayos_api_client.models.get_reservation_quote_request import GetReservationQuoteRequest
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
    api_instance = stayos_api_client.ReservationsApi(api_client)
    get_reservation_quote_request = stayos_api_client.GetReservationQuoteRequest() # GetReservationQuoteRequest | 

    try:
        # Get pricing quote
        api_response = await api_instance.get_reservation_quote(get_reservation_quote_request)
        print("The response of ReservationsApi->get_reservation_quote:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationsApi->get_reservation_quote: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **get_reservation_quote_request** | [**GetReservationQuoteRequest**](GetReservationQuoteRequest.md)|  | 

### Return type

[**GetReservationQuote200Response**](GetReservationQuote200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quote generated successfully |  -  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mark_reservation_no_show**
> Reservation mark_reservation_no_show(reservation_id, mark_reservation_no_show_request=mark_reservation_no_show_request)

Mark reservation as no-show

Mark a reservation as no-show when guest doesn't arrive

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.mark_reservation_no_show_request import MarkReservationNoShowRequest
from stayos_api_client.models.reservation import Reservation
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
    api_instance = stayos_api_client.ReservationsApi(api_client)
    reservation_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    mark_reservation_no_show_request = stayos_api_client.MarkReservationNoShowRequest() # MarkReservationNoShowRequest |  (optional)

    try:
        # Mark reservation as no-show
        api_response = await api_instance.mark_reservation_no_show(reservation_id, mark_reservation_no_show_request=mark_reservation_no_show_request)
        print("The response of ReservationsApi->mark_reservation_no_show:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationsApi->mark_reservation_no_show: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_id** | **UUID**|  | 
 **mark_reservation_no_show_request** | [**MarkReservationNoShowRequest**](MarkReservationNoShowRequest.md)|  | [optional] 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Marked as no-show |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_reservation**
> Reservation replace_reservation(reservation_id, reservation, if_match=if_match)

Replace reservation (full update)

Replace an existing reservation with a complete new representation.
All fields must be provided. For partial updates, use PATCH instead.

**Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts


### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.reservation import Reservation
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
    api_instance = stayos_api_client.ReservationsApi(api_client)
    reservation_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    reservation = stayos_api_client.Reservation() # Reservation | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace reservation (full update)
        api_response = await api_instance.replace_reservation(reservation_id, reservation, if_match=if_match)
        print("The response of ReservationsApi->replace_reservation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationsApi->replace_reservation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_id** | **UUID**|  | 
 **reservation** | [**Reservation**](Reservation.md)|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

### Return type

[**Reservation**](Reservation.md)

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

# **search_reservations**
> SearchReservations200Response search_reservations(property_id=property_id, guest_name=guest_name, confirmation_number=confirmation_number, status=status, check_in_date=check_in_date, check_out_date=check_out_date, page_size=page_size, cursor=cursor)

Advanced reservation search

Search reservations with advanced filters

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.search_reservations200_response import SearchReservations200Response
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
    api_instance = stayos_api_client.ReservationsApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    guest_name = 'guest_name_example' # str |  (optional)
    confirmation_number = 'confirmation_number_example' # str |  (optional)
    status = 'status_example' # str |  (optional)
    check_in_date = '2013-10-20' # date |  (optional)
    check_out_date = '2013-10-20' # date |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # Advanced reservation search
        api_response = await api_instance.search_reservations(property_id=property_id, guest_name=guest_name, confirmation_number=confirmation_number, status=status, check_in_date=check_in_date, check_out_date=check_out_date, page_size=page_size, cursor=cursor)
        print("The response of ReservationsApi->search_reservations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationsApi->search_reservations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**|  | [optional] 
 **guest_name** | **str**|  | [optional] 
 **confirmation_number** | **str**|  | [optional] 
 **status** | **str**|  | [optional] 
 **check_in_date** | **date**|  | [optional] 
 **check_out_date** | **date**|  | [optional] 
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 

### Return type

[**SearchReservations200Response**](SearchReservations200Response.md)

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

# **update_reservation**
> Reservation update_reservation(reservation_id, body, if_match=if_match)

Update reservation (partial update)

Partially update a reservation. Only provided fields will be updated.
This is the recommended method for most updates.

**Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts

**Common use cases:**
- Update special requests
- Change guest count
- Modify arrival time
- Add notes


### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.reservation import Reservation
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
    api_instance = stayos_api_client.ReservationsApi(api_client)
    reservation_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = {"specialRequests":"Late check-in at 10 PM","guestCount":{"adults":2,"children":1}} # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update reservation (partial update)
        api_response = await api_instance.update_reservation(reservation_id, body, if_match=if_match)
        print("The response of ReservationsApi->update_reservation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReservationsApi->update_reservation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation_id** | **UUID**|  | 
 **body** | **object**|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

### Return type

[**Reservation**](Reservation.md)

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

