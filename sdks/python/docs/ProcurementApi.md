# stayos_api_client.ProcurementApi

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve_purchase_order**](ProcurementApi.md#approve_purchase_order) | **POST** /procurement/purchase-orders/{poId}/approve | Approve purchase order
[**create_purchase_order**](ProcurementApi.md#create_purchase_order) | **POST** /procurement/purchase-orders | Create purchase order
[**create_supplier**](ProcurementApi.md#create_supplier) | **POST** /procurement/suppliers | Create supplier
[**get_supplier**](ProcurementApi.md#get_supplier) | **GET** /procurement/suppliers/{supplierId} | Get supplier details
[**get_supplier_performance**](ProcurementApi.md#get_supplier_performance) | **GET** /procurement/suppliers/{supplierId}/performance | Get supplier performance
[**invoice_purchase_order**](ProcurementApi.md#invoice_purchase_order) | **POST** /procurement/purchase-orders/{poId}/invoice | Record invoice for purchase order
[**list_purchase_orders**](ProcurementApi.md#list_purchase_orders) | **GET** /procurement/purchase-orders | List purchase orders
[**list_suppliers**](ProcurementApi.md#list_suppliers) | **GET** /procurement/suppliers | List suppliers
[**receive_purchase_order**](ProcurementApi.md#receive_purchase_order) | **POST** /procurement/purchase-orders/{poId}/receive | Receive purchase order
[**replace_purchase_order**](ProcurementApi.md#replace_purchase_order) | **PUT** /procurement/purchase-orders/{poId} | Replace purchase order (full update)
[**replace_supplier**](ProcurementApi.md#replace_supplier) | **PUT** /procurement/suppliers/{supplierId} | Replace supplier (full update)
[**submit_purchase_order**](ProcurementApi.md#submit_purchase_order) | **POST** /procurement/purchase-orders/{poId}/submit | Submit purchase order
[**update_purchase_order**](ProcurementApi.md#update_purchase_order) | **PATCH** /procurement/purchase-orders/{poId} | Update purchase order (partial update)
[**update_supplier**](ProcurementApi.md#update_supplier) | **PATCH** /procurement/suppliers/{supplierId} | Update supplier (partial update)


# **approve_purchase_order**
> PurchaseOrder approve_purchase_order(po_id, approve_purchase_order_request=approve_purchase_order_request)

Approve purchase order

Approve a purchase order for processing

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.approve_purchase_order_request import ApprovePurchaseOrderRequest
from stayos_api_client.models.purchase_order import PurchaseOrder
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
    api_instance = stayos_api_client.ProcurementApi(api_client)
    po_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    approve_purchase_order_request = stayos_api_client.ApprovePurchaseOrderRequest() # ApprovePurchaseOrderRequest |  (optional)

    try:
        # Approve purchase order
        api_response = await api_instance.approve_purchase_order(po_id, approve_purchase_order_request=approve_purchase_order_request)
        print("The response of ProcurementApi->approve_purchase_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcurementApi->approve_purchase_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **po_id** | **UUID**|  | 
 **approve_purchase_order_request** | [**ApprovePurchaseOrderRequest**](ApprovePurchaseOrderRequest.md)|  | [optional] 

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Purchase order approved |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_purchase_order**
> object create_purchase_order(body)

Create purchase order

Create a new purchase order for supplies, equipment, or services

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
    api_instance = stayos_api_client.ProcurementApi(api_client)
    body = None # object | 

    try:
        # Create purchase order
        api_response = await api_instance.create_purchase_order(body)
        print("The response of ProcurementApi->create_purchase_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcurementApi->create_purchase_order: %s\n" % e)
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
**201** | Purchase order created |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_supplier**
> Supplier create_supplier(supplier)

Create supplier

Create a new supplier

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.supplier import Supplier
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
    api_instance = stayos_api_client.ProcurementApi(api_client)
    supplier = stayos_api_client.Supplier() # Supplier | 

    try:
        # Create supplier
        api_response = await api_instance.create_supplier(supplier)
        print("The response of ProcurementApi->create_supplier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcurementApi->create_supplier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [**Supplier**](Supplier.md)|  | 

### Return type

[**Supplier**](Supplier.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Supplier created |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_supplier**
> Supplier get_supplier(supplier_id)

Get supplier details

Retrieve details of a specific supplier

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.supplier import Supplier
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
    api_instance = stayos_api_client.ProcurementApi(api_client)
    supplier_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get supplier details
        api_response = await api_instance.get_supplier(supplier_id)
        print("The response of ProcurementApi->get_supplier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcurementApi->get_supplier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier_id** | **UUID**|  | 

### Return type

[**Supplier**](Supplier.md)

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

# **get_supplier_performance**
> SupplierPerformance get_supplier_performance(supplier_id, start_date=start_date, end_date=end_date)

Get supplier performance

Get performance metrics for a supplier

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.supplier_performance import SupplierPerformance
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
    api_instance = stayos_api_client.ProcurementApi(api_client)
    supplier_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    start_date = '2013-10-20' # date |  (optional)
    end_date = '2013-10-20' # date |  (optional)

    try:
        # Get supplier performance
        api_response = await api_instance.get_supplier_performance(supplier_id, start_date=start_date, end_date=end_date)
        print("The response of ProcurementApi->get_supplier_performance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcurementApi->get_supplier_performance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier_id** | **UUID**|  | 
 **start_date** | **date**|  | [optional] 
 **end_date** | **date**|  | [optional] 

### Return type

[**SupplierPerformance**](SupplierPerformance.md)

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

# **invoice_purchase_order**
> PurchaseOrder invoice_purchase_order(po_id, invoice_purchase_order_request)

Record invoice for purchase order

Record supplier invoice for purchase order

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.invoice_purchase_order_request import InvoicePurchaseOrderRequest
from stayos_api_client.models.purchase_order import PurchaseOrder
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
    api_instance = stayos_api_client.ProcurementApi(api_client)
    po_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    invoice_purchase_order_request = stayos_api_client.InvoicePurchaseOrderRequest() # InvoicePurchaseOrderRequest | 

    try:
        # Record invoice for purchase order
        api_response = await api_instance.invoice_purchase_order(po_id, invoice_purchase_order_request)
        print("The response of ProcurementApi->invoice_purchase_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcurementApi->invoice_purchase_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **po_id** | **UUID**|  | 
 **invoice_purchase_order_request** | [**InvoicePurchaseOrderRequest**](InvoicePurchaseOrderRequest.md)|  | 

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invoice recorded |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_purchase_orders**
> GetGuestStays200Response list_purchase_orders(property_id=property_id, status=status, page_size=page_size, cursor=cursor)

List purchase orders

List all purchase orders with filtering by supplier, status, property, and date range

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
    api_instance = stayos_api_client.ProcurementApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    status = 'status_example' # str |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List purchase orders
        api_response = await api_instance.list_purchase_orders(property_id=property_id, status=status, page_size=page_size, cursor=cursor)
        print("The response of ProcurementApi->list_purchase_orders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcurementApi->list_purchase_orders: %s\n" % e)
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

# **list_suppliers**
> ListSuppliers200Response list_suppliers(status=status, category=category, page_size=page_size, cursor=cursor)

List suppliers

List all suppliers with filtering and search

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_suppliers200_response import ListSuppliers200Response
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
    api_instance = stayos_api_client.ProcurementApi(api_client)
    status = 'status_example' # str |  (optional)
    category = 'category_example' # str |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List suppliers
        api_response = await api_instance.list_suppliers(status=status, category=category, page_size=page_size, cursor=cursor)
        print("The response of ProcurementApi->list_suppliers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcurementApi->list_suppliers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **str**|  | [optional] 
 **category** | **str**|  | [optional] 
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 

### Return type

[**ListSuppliers200Response**](ListSuppliers200Response.md)

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

# **receive_purchase_order**
> PurchaseOrder receive_purchase_order(po_id, receive_purchase_order_request)

Receive purchase order

Record receipt of goods from purchase order

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.purchase_order import PurchaseOrder
from stayos_api_client.models.receive_purchase_order_request import ReceivePurchaseOrderRequest
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
    api_instance = stayos_api_client.ProcurementApi(api_client)
    po_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    receive_purchase_order_request = stayos_api_client.ReceivePurchaseOrderRequest() # ReceivePurchaseOrderRequest | 

    try:
        # Receive purchase order
        api_response = await api_instance.receive_purchase_order(po_id, receive_purchase_order_request)
        print("The response of ProcurementApi->receive_purchase_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcurementApi->receive_purchase_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **po_id** | **UUID**|  | 
 **receive_purchase_order_request** | [**ReceivePurchaseOrderRequest**](ReceivePurchaseOrderRequest.md)|  | 

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Receipt recorded |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_purchase_order**
> object replace_purchase_order(po_id, body, if_match=if_match)

Replace purchase order (full update)

Replace purchase order with complete new details including items, quantities, and delivery information

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
    api_instance = stayos_api_client.ProcurementApi(api_client)
    po_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = None # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace purchase order (full update)
        api_response = await api_instance.replace_purchase_order(po_id, body, if_match=if_match)
        print("The response of ProcurementApi->replace_purchase_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcurementApi->replace_purchase_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **po_id** | **UUID**|  | 
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

# **replace_supplier**
> object replace_supplier(supplier_id, body, if_match=if_match)

Replace supplier (full update)

Replace supplier information with complete new details including contact, terms, and product catalog

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
    api_instance = stayos_api_client.ProcurementApi(api_client)
    supplier_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = None # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace supplier (full update)
        api_response = await api_instance.replace_supplier(supplier_id, body, if_match=if_match)
        print("The response of ProcurementApi->replace_supplier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcurementApi->replace_supplier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier_id** | **UUID**|  | 
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

# **submit_purchase_order**
> PurchaseOrder submit_purchase_order(po_id)

Submit purchase order

Submit a purchase order to supplier

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.purchase_order import PurchaseOrder
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
    api_instance = stayos_api_client.ProcurementApi(api_client)
    po_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Submit purchase order
        api_response = await api_instance.submit_purchase_order(po_id)
        print("The response of ProcurementApi->submit_purchase_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcurementApi->submit_purchase_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **po_id** | **UUID**|  | 

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Purchase order submitted |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_purchase_order**
> object update_purchase_order(po_id, body, if_match=if_match)

Update purchase order (partial update)

Partially update purchase order to modify status, quantities, or delivery details
**Common use cases:** | Update specific fields of a purchase order.
**Common use cases:** - Update delivery date - Change PO status - Add notes - Modify payment terms

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
    api_instance = stayos_api_client.ProcurementApi(api_client)
    po_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = {"expectedDeliveryDate":"2025-12-25","status":"APPROVED","notes":"Urgent - expedite delivery"} # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update purchase order (partial update)
        api_response = await api_instance.update_purchase_order(po_id, body, if_match=if_match)
        print("The response of ProcurementApi->update_purchase_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcurementApi->update_purchase_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **po_id** | **UUID**|  | 
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

# **update_supplier**
> object update_supplier(supplier_id, body, if_match=if_match)

Update supplier (partial update)

Partially update supplier information to modify contact details, terms, or status
**Common use cases:** | Update specific fields of a supplier.
**Common use cases:** - Update contact information - Change payment terms - Modify supplier status - Update rating

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
    api_instance = stayos_api_client.ProcurementApi(api_client)
    supplier_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = {"contactEmail":"newsales@supplier.com","paymentTerms":"NET_30","rating":4.5} # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update supplier (partial update)
        api_response = await api_instance.update_supplier(supplier_id, body, if_match=if_match)
        print("The response of ProcurementApi->update_supplier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcurementApi->update_supplier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier_id** | **UUID**|  | 
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

