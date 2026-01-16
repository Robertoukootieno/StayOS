# stayos_api_client.FoodBeverageApi

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_fb_order**](FoodBeverageApi.md#cancel_fb_order) | **POST** /fb/orders/{orderId}/cancel | Cancel F&amp;B order
[**confirm_fb_order**](FoodBeverageApi.md#confirm_fb_order) | **POST** /fb/orders/{orderId}/confirm | Confirm F&amp;B order
[**consume_fb_inventory**](FoodBeverageApi.md#consume_fb_inventory) | **POST** /fb/inventory/{itemId}/consume | Record consumption
[**count_fb_inventory**](FoodBeverageApi.md#count_fb_inventory) | **POST** /fb/inventory/count | Perform stock count
[**create_fb_inventory_item**](FoodBeverageApi.md#create_fb_inventory_item) | **POST** /fb/inventory | Create inventory item
[**create_fb_order**](FoodBeverageApi.md#create_fb_order) | **POST** /fb/orders | Create F&amp;B order
[**create_menu_item**](FoodBeverageApi.md#create_menu_item) | **POST** /fb/menu | Create menu item
[**get_fb_inventory_item**](FoodBeverageApi.md#get_fb_inventory_item) | **GET** /fb/inventory/{itemId} | Get inventory item details
[**get_menu_item**](FoodBeverageApi.md#get_menu_item) | **GET** /fb/menu/{itemId} | Get menu item details
[**list_fb_inventory**](FoodBeverageApi.md#list_fb_inventory) | **GET** /fb/inventory | List F&amp;B inventory items
[**list_fb_orders**](FoodBeverageApi.md#list_fb_orders) | **GET** /fb/orders | List F&amp;B orders
[**list_menu_items**](FoodBeverageApi.md#list_menu_items) | **GET** /fb/menu | List menu items
[**mark_fb_item_ready**](FoodBeverageApi.md#mark_fb_item_ready) | **POST** /fb/orders/{orderId}/items/{itemId}/ready | Mark item as ready
[**receive_fb_inventory**](FoodBeverageApi.md#receive_fb_inventory) | **POST** /fb/inventory/{itemId}/receive | Receive stock
[**replace_fb_order**](FoodBeverageApi.md#replace_fb_order) | **PUT** /fb/orders/{orderId} | Replace F&amp;B order (full update)
[**replace_menu_item**](FoodBeverageApi.md#replace_menu_item) | **PUT** /fb/menu/{itemId} | Replace menu item (full update)
[**serve_fb_order**](FoodBeverageApi.md#serve_fb_order) | **POST** /fb/orders/{orderId}/serve | Mark order as served
[**update_fb_inventory_item**](FoodBeverageApi.md#update_fb_inventory_item) | **PUT** /fb/inventory/{itemId} | Update inventory item
[**update_fb_order**](FoodBeverageApi.md#update_fb_order) | **PATCH** /fb/orders/{orderId} | Update F&amp;B order (partial update)
[**update_menu_item**](FoodBeverageApi.md#update_menu_item) | **PATCH** /fb/menu/{itemId} | Update menu item (partial update)
[**waste_fb_inventory**](FoodBeverageApi.md#waste_fb_inventory) | **POST** /fb/inventory/{itemId}/waste | Record waste


# **cancel_fb_order**
> FBOrder cancel_fb_order(order_id, cancel_service_request_request=cancel_service_request_request)

Cancel F&B order

Cancel an F&B order

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.cancel_service_request_request import CancelServiceRequestRequest
from stayos_api_client.models.fb_order import FBOrder
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    order_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    cancel_service_request_request = stayos_api_client.CancelServiceRequestRequest() # CancelServiceRequestRequest |  (optional)

    try:
        # Cancel F&B order
        api_response = await api_instance.cancel_fb_order(order_id, cancel_service_request_request=cancel_service_request_request)
        print("The response of FoodBeverageApi->cancel_fb_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->cancel_fb_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **UUID**|  | 
 **cancel_service_request_request** | [**CancelServiceRequestRequest**](CancelServiceRequestRequest.md)|  | [optional] 

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Order cancelled |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirm_fb_order**
> FBOrder confirm_fb_order(order_id, confirm_fb_order_request=confirm_fb_order_request)

Confirm F&B order

Confirm receipt and acceptance of an F&B order

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.confirm_fb_order_request import ConfirmFBOrderRequest
from stayos_api_client.models.fb_order import FBOrder
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    order_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    confirm_fb_order_request = stayos_api_client.ConfirmFBOrderRequest() # ConfirmFBOrderRequest |  (optional)

    try:
        # Confirm F&B order
        api_response = await api_instance.confirm_fb_order(order_id, confirm_fb_order_request=confirm_fb_order_request)
        print("The response of FoodBeverageApi->confirm_fb_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->confirm_fb_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **UUID**|  | 
 **confirm_fb_order_request** | [**ConfirmFBOrderRequest**](ConfirmFBOrderRequest.md)|  | [optional] 

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Order confirmed |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consume_fb_inventory**
> FBInventoryItem consume_fb_inventory(item_id, receive_fb_inventory_request)

Record consumption

Record inventory consumption

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.fb_inventory_item import FBInventoryItem
from stayos_api_client.models.receive_fb_inventory_request import ReceiveFBInventoryRequest
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    item_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    receive_fb_inventory_request = stayos_api_client.ReceiveFBInventoryRequest() # ReceiveFBInventoryRequest | 

    try:
        # Record consumption
        api_response = await api_instance.consume_fb_inventory(item_id, receive_fb_inventory_request)
        print("The response of FoodBeverageApi->consume_fb_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->consume_fb_inventory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **UUID**|  | 
 **receive_fb_inventory_request** | [**ReceiveFBInventoryRequest**](ReceiveFBInventoryRequest.md)|  | 

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Consumption recorded |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **count_fb_inventory**
> CountFBInventory200Response count_fb_inventory(count_fb_inventory_request)

Perform stock count

Perform physical inventory stock count

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.count_fb_inventory200_response import CountFBInventory200Response
from stayos_api_client.models.count_fb_inventory_request import CountFBInventoryRequest
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    count_fb_inventory_request = stayos_api_client.CountFBInventoryRequest() # CountFBInventoryRequest | 

    try:
        # Perform stock count
        api_response = await api_instance.count_fb_inventory(count_fb_inventory_request)
        print("The response of FoodBeverageApi->count_fb_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->count_fb_inventory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count_fb_inventory_request** | [**CountFBInventoryRequest**](CountFBInventoryRequest.md)|  | 

### Return type

[**CountFBInventory200Response**](CountFBInventory200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Stock count completed |  -  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_fb_inventory_item**
> FBInventoryItem create_fb_inventory_item(fb_inventory_item)

Create inventory item

Create a new F&B inventory item

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.fb_inventory_item import FBInventoryItem
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    fb_inventory_item = stayos_api_client.FBInventoryItem() # FBInventoryItem | 

    try:
        # Create inventory item
        api_response = await api_instance.create_fb_inventory_item(fb_inventory_item)
        print("The response of FoodBeverageApi->create_fb_inventory_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->create_fb_inventory_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fb_inventory_item** | [**FBInventoryItem**](FBInventoryItem.md)|  | 

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Inventory item created |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_fb_order**
> object create_fb_order(body)

Create F&B order

Create a new F&B order for room service, restaurant, or bar service

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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    body = None # object | 

    try:
        # Create F&B order
        api_response = await api_instance.create_fb_order(body)
        print("The response of FoodBeverageApi->create_fb_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->create_fb_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | 

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
**201** | Order created |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_menu_item**
> MenuItem create_menu_item(menu_item)

Create menu item

Create a new menu item

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.menu_item import MenuItem
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    menu_item = stayos_api_client.MenuItem() # MenuItem | 

    try:
        # Create menu item
        api_response = await api_instance.create_menu_item(menu_item)
        print("The response of FoodBeverageApi->create_menu_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->create_menu_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menu_item** | [**MenuItem**](MenuItem.md)|  | 

### Return type

[**MenuItem**](MenuItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Menu item created |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_fb_inventory_item**
> FBInventoryItem get_fb_inventory_item(item_id)

Get inventory item details

Retrieve details of a specific F&B inventory item

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.fb_inventory_item import FBInventoryItem
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    item_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get inventory item details
        api_response = await api_instance.get_fb_inventory_item(item_id)
        print("The response of FoodBeverageApi->get_fb_inventory_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->get_fb_inventory_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **UUID**|  | 

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

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

# **get_menu_item**
> MenuItem get_menu_item(item_id)

Get menu item details

Retrieve details of a specific menu item

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.menu_item import MenuItem
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    item_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get menu item details
        api_response = await api_instance.get_menu_item(item_id)
        print("The response of FoodBeverageApi->get_menu_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->get_menu_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **UUID**|  | 

### Return type

[**MenuItem**](MenuItem.md)

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

# **list_fb_inventory**
> ListFBInventory200Response list_fb_inventory(property_id=property_id, low_stock=low_stock, page_size=page_size, cursor=cursor)

List F&B inventory items

List all F&B inventory items with stock levels

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_fb_inventory200_response import ListFBInventory200Response
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    low_stock = True # bool |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List F&B inventory items
        api_response = await api_instance.list_fb_inventory(property_id=property_id, low_stock=low_stock, page_size=page_size, cursor=cursor)
        print("The response of FoodBeverageApi->list_fb_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->list_fb_inventory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**|  | [optional] 
 **low_stock** | **bool**|  | [optional] 
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 

### Return type

[**ListFBInventory200Response**](ListFBInventory200Response.md)

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

# **list_fb_orders**
> GetGuestStays200Response list_fb_orders(property_id=property_id, status=status, page_size=page_size, cursor=cursor)

List F&B orders

List all food & beverage orders with filtering by property, venue, status, and date range

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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    status = 'status_example' # str |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List F&B orders
        api_response = await api_instance.list_fb_orders(property_id=property_id, status=status, page_size=page_size, cursor=cursor)
        print("The response of FoodBeverageApi->list_fb_orders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->list_fb_orders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**|  | [optional] 
 **status** | **str**|  | [optional] 
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
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_menu_items**
> ListMenuItems200Response list_menu_items(property_id=property_id, venue=venue, is_available=is_available, page_size=page_size, cursor=cursor)

List menu items

List all menu items with filtering by venue and availability

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_menu_items200_response import ListMenuItems200Response
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    venue = 'venue_example' # str |  (optional)
    is_available = True # bool |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List menu items
        api_response = await api_instance.list_menu_items(property_id=property_id, venue=venue, is_available=is_available, page_size=page_size, cursor=cursor)
        print("The response of FoodBeverageApi->list_menu_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->list_menu_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**|  | [optional] 
 **venue** | **str**|  | [optional] 
 **is_available** | **bool**|  | [optional] 
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 

### Return type

[**ListMenuItems200Response**](ListMenuItems200Response.md)

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

# **mark_fb_item_ready**
> FBOrder mark_fb_item_ready(order_id, item_id)

Mark item as ready

Mark an order item as ready for delivery

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.fb_order import FBOrder
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    order_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    item_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Mark item as ready
        api_response = await api_instance.mark_fb_item_ready(order_id, item_id)
        print("The response of FoodBeverageApi->mark_fb_item_ready:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->mark_fb_item_ready: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **UUID**|  | 
 **item_id** | **UUID**|  | 

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item marked as ready |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **receive_fb_inventory**
> FBInventoryItem receive_fb_inventory(item_id, receive_fb_inventory_request)

Receive stock

Record receipt of inventory stock

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.fb_inventory_item import FBInventoryItem
from stayos_api_client.models.receive_fb_inventory_request import ReceiveFBInventoryRequest
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    item_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    receive_fb_inventory_request = stayos_api_client.ReceiveFBInventoryRequest() # ReceiveFBInventoryRequest | 

    try:
        # Receive stock
        api_response = await api_instance.receive_fb_inventory(item_id, receive_fb_inventory_request)
        print("The response of FoodBeverageApi->receive_fb_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->receive_fb_inventory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **UUID**|  | 
 **receive_fb_inventory_request** | [**ReceiveFBInventoryRequest**](ReceiveFBInventoryRequest.md)|  | 

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Stock received |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_fb_order**
> object replace_fb_order(order_id, body, if_match=if_match)

Replace F&B order (full update)

Replace F&B order with complete new order details including items, pricing, and delivery information

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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    order_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = None # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace F&B order (full update)
        api_response = await api_instance.replace_fb_order(order_id, body, if_match=if_match)
        print("The response of FoodBeverageApi->replace_fb_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->replace_fb_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **UUID**|  | 
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

# **replace_menu_item**
> object replace_menu_item(item_id, body, if_match=if_match)

Replace menu item (full update)

Replace menu item with complete new details including pricing, ingredients, and availability

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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    item_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = None # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace menu item (full update)
        api_response = await api_instance.replace_menu_item(item_id, body, if_match=if_match)
        print("The response of FoodBeverageApi->replace_menu_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->replace_menu_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **UUID**|  | 
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

# **serve_fb_order**
> FBOrder serve_fb_order(order_id, serve_fb_order_request=serve_fb_order_request)

Mark order as served

Mark an order as delivered/served to guest

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.fb_order import FBOrder
from stayos_api_client.models.serve_fb_order_request import ServeFBOrderRequest
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    order_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    serve_fb_order_request = stayos_api_client.ServeFBOrderRequest() # ServeFBOrderRequest |  (optional)

    try:
        # Mark order as served
        api_response = await api_instance.serve_fb_order(order_id, serve_fb_order_request=serve_fb_order_request)
        print("The response of FoodBeverageApi->serve_fb_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->serve_fb_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **UUID**|  | 
 **serve_fb_order_request** | [**ServeFBOrderRequest**](ServeFBOrderRequest.md)|  | [optional] 

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Order marked as served |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_fb_inventory_item**
> FBInventoryItem update_fb_inventory_item(item_id, fb_inventory_item)

Update inventory item

Update F&B inventory item details

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.fb_inventory_item import FBInventoryItem
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    item_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    fb_inventory_item = stayos_api_client.FBInventoryItem() # FBInventoryItem | 

    try:
        # Update inventory item
        api_response = await api_instance.update_fb_inventory_item(item_id, fb_inventory_item)
        print("The response of FoodBeverageApi->update_fb_inventory_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->update_fb_inventory_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **UUID**|  | 
 **fb_inventory_item** | [**FBInventoryItem**](FBInventoryItem.md)|  | 

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inventory item updated |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_fb_order**
> object update_fb_order(order_id, body, if_match=if_match)

Update F&B order (partial update)

Partially update F&B order to modify status, add items, or update delivery details
**Common use cases:** | Update specific fields of an F&B order.
**Common use cases:** - Update order status - Modify delivery time - Add special instructions - Change order items

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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    order_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = {"status":"PREPARING","estimatedDelivery":"2025-12-21T19:30:00Z","specialInstructions":"No nuts - allergy"} # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update F&B order (partial update)
        api_response = await api_instance.update_fb_order(order_id, body, if_match=if_match)
        print("The response of FoodBeverageApi->update_fb_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->update_fb_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **UUID**|  | 
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

# **update_menu_item**
> object update_menu_item(item_id, body, if_match=if_match)

Update menu item (partial update)

Partially update menu item to modify pricing, availability, or description
**Common use cases:** | Update specific fields of a menu item.
**Common use cases:** - Update price - Change availability - Modify description - Update dietary information

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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    item_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = {"price":{"amount":24.99,"currency":"USD"},"available":true} # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update menu item (partial update)
        api_response = await api_instance.update_menu_item(item_id, body, if_match=if_match)
        print("The response of FoodBeverageApi->update_menu_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->update_menu_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **UUID**|  | 
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

# **waste_fb_inventory**
> FBInventoryItem waste_fb_inventory(item_id, waste_fb_inventory_request)

Record waste

Record inventory waste

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.fb_inventory_item import FBInventoryItem
from stayos_api_client.models.waste_fb_inventory_request import WasteFBInventoryRequest
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
    api_instance = stayos_api_client.FoodBeverageApi(api_client)
    item_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    waste_fb_inventory_request = stayos_api_client.WasteFBInventoryRequest() # WasteFBInventoryRequest | 

    try:
        # Record waste
        api_response = await api_instance.waste_fb_inventory(item_id, waste_fb_inventory_request)
        print("The response of FoodBeverageApi->waste_fb_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoodBeverageApi->waste_fb_inventory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **UUID**|  | 
 **waste_fb_inventory_request** | [**WasteFBInventoryRequest**](WasteFBInventoryRequest.md)|  | 

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Waste recorded |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

