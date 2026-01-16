# stayos_api_client.BillingApi

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_folio_adjustment**](BillingApi.md#add_folio_adjustment) | **POST** /folios/{folioId}/adjustments | Add adjustment to folio
[**add_folio_charge**](BillingApi.md#add_folio_charge) | **POST** /folios/{folioId}/charges | Add charge to folio
[**add_folio_line_item**](BillingApi.md#add_folio_line_item) | **POST** /folios/{folioId}/line-items | Add line item to folio
[**batch_process_payments**](BillingApi.md#batch_process_payments) | **POST** /payments/batch | Batch payment processing
[**capture_payment**](BillingApi.md#capture_payment) | **POST** /payments/{paymentId}/capture | Capture payment
[**close_folio**](BillingApi.md#close_folio) | **POST** /folios/{folioId}/close | Close folio
[**create_folio**](BillingApi.md#create_folio) | **POST** /folios | Create folio
[**create_payment**](BillingApi.md#create_payment) | **POST** /payments | Process payment
[**dispute_folio**](BillingApi.md#dispute_folio) | **POST** /folios/{folioId}/dispute | Dispute folio
[**get_folio**](BillingApi.md#get_folio) | **GET** /folios/{folioId} | Get folio details
[**get_folio_pdf**](BillingApi.md#get_folio_pdf) | **GET** /folios/{folioId}/pdf | Download folio PDF
[**get_payment**](BillingApi.md#get_payment) | **GET** /payments/{paymentId} | Get payment details
[**get_payment_receipt**](BillingApi.md#get_payment_receipt) | **GET** /payments/{paymentId}/receipt | Get payment receipt
[**get_revenue_reconciliation**](BillingApi.md#get_revenue_reconciliation) | **GET** /revenue/reconciliation | Get revenue reconciliation
[**get_revenue_reports**](BillingApi.md#get_revenue_reports) | **GET** /revenue/reports | Get revenue reports
[**list_folios**](BillingApi.md#list_folios) | **GET** /folios | List folios
[**list_payments**](BillingApi.md#list_payments) | **GET** /payments | List payments
[**refund_payment**](BillingApi.md#refund_payment) | **POST** /payments/{paymentId}/refund | Refund payment
[**remove_folio_line_item**](BillingApi.md#remove_folio_line_item) | **DELETE** /folios/{folioId}/line-items/{itemId} | Remove line item from folio
[**reopen_folio**](BillingApi.md#reopen_folio) | **POST** /folios/{folioId}/reopen | Reopen folio


# **add_folio_adjustment**
> LineItem add_folio_adjustment(folio_id, add_folio_adjustment_request)

Add adjustment to folio

Add an adjustment (discount, comp, etc.) to a folio

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.add_folio_adjustment_request import AddFolioAdjustmentRequest
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
    api_instance = stayos_api_client.BillingApi(api_client)
    folio_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    add_folio_adjustment_request = stayos_api_client.AddFolioAdjustmentRequest() # AddFolioAdjustmentRequest | 

    try:
        # Add adjustment to folio
        api_response = await api_instance.add_folio_adjustment(folio_id, add_folio_adjustment_request)
        print("The response of BillingApi->add_folio_adjustment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->add_folio_adjustment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folio_id** | **UUID**|  | 
 **add_folio_adjustment_request** | [**AddFolioAdjustmentRequest**](AddFolioAdjustmentRequest.md)|  | 

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
**201** | Adjustment added |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_folio_charge**
> object add_folio_charge(folio_id, add_folio_charge_request)

Add charge to folio

Add a new charge to a guest folio for services, amenities, or incidentals

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.add_folio_charge_request import AddFolioChargeRequest
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
    api_instance = stayos_api_client.BillingApi(api_client)
    folio_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    add_folio_charge_request = stayos_api_client.AddFolioChargeRequest() # AddFolioChargeRequest | 

    try:
        # Add charge to folio
        api_response = await api_instance.add_folio_charge(folio_id, add_folio_charge_request)
        print("The response of BillingApi->add_folio_charge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->add_folio_charge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folio_id** | **UUID**|  | 
 **add_folio_charge_request** | [**AddFolioChargeRequest**](AddFolioChargeRequest.md)|  | 

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
**201** | Charge added |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_folio_line_item**
> LineItem add_folio_line_item(folio_id, line_item)

Add line item to folio

Add a line item to a folio

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
    api_instance = stayos_api_client.BillingApi(api_client)
    folio_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    line_item = stayos_api_client.LineItem() # LineItem | 

    try:
        # Add line item to folio
        api_response = await api_instance.add_folio_line_item(folio_id, line_item)
        print("The response of BillingApi->add_folio_line_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->add_folio_line_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folio_id** | **UUID**|  | 
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
**201** | Line item added |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_process_payments**
> BatchProcessPayments200Response batch_process_payments(batch_process_payments_request)

Batch payment processing

Process multiple payments in a single batch

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.batch_process_payments200_response import BatchProcessPayments200Response
from stayos_api_client.models.batch_process_payments_request import BatchProcessPaymentsRequest
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
    api_instance = stayos_api_client.BillingApi(api_client)
    batch_process_payments_request = stayos_api_client.BatchProcessPaymentsRequest() # BatchProcessPaymentsRequest | 

    try:
        # Batch payment processing
        api_response = await api_instance.batch_process_payments(batch_process_payments_request)
        print("The response of BillingApi->batch_process_payments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->batch_process_payments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_process_payments_request** | [**BatchProcessPaymentsRequest**](BatchProcessPaymentsRequest.md)|  | 

### Return type

[**BatchProcessPayments200Response**](BatchProcessPayments200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Batch processed |  -  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **capture_payment**
> Payment capture_payment(payment_id, capture_payment_request=capture_payment_request)

Capture payment

Capture a pre-authorized payment

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.capture_payment_request import CapturePaymentRequest
from stayos_api_client.models.payment import Payment
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
    api_instance = stayos_api_client.BillingApi(api_client)
    payment_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    capture_payment_request = stayos_api_client.CapturePaymentRequest() # CapturePaymentRequest |  (optional)

    try:
        # Capture payment
        api_response = await api_instance.capture_payment(payment_id, capture_payment_request=capture_payment_request)
        print("The response of BillingApi->capture_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->capture_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_id** | **UUID**|  | 
 **capture_payment_request** | [**CapturePaymentRequest**](CapturePaymentRequest.md)|  | [optional] 

### Return type

[**Payment**](Payment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment captured |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **close_folio**
> Folio close_folio(folio_id)

Close folio

Close a folio after final settlement

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.folio import Folio
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
    api_instance = stayos_api_client.BillingApi(api_client)
    folio_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Close folio
        api_response = await api_instance.close_folio(folio_id)
        print("The response of BillingApi->close_folio:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->close_folio: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folio_id** | **UUID**|  | 

### Return type

[**Folio**](Folio.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Folio closed |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_folio**
> object create_folio(body)

Create folio

Create a new guest folio for billing and charge management during a stay

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
    api_instance = stayos_api_client.BillingApi(api_client)
    body = None # object | 

    try:
        # Create folio
        api_response = await api_instance.create_folio(body)
        print("The response of BillingApi->create_folio:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->create_folio: %s\n" % e)
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
**201** | Folio created |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_payment**
> object create_payment(create_payment_request)

Process payment

Process a new payment for a folio using credit card, cash, or other payment methods

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.create_payment_request import CreatePaymentRequest
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
    api_instance = stayos_api_client.BillingApi(api_client)
    create_payment_request = stayos_api_client.CreatePaymentRequest() # CreatePaymentRequest | 

    try:
        # Process payment
        api_response = await api_instance.create_payment(create_payment_request)
        print("The response of BillingApi->create_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->create_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_payment_request** | [**CreatePaymentRequest**](CreatePaymentRequest.md)|  | 

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
**201** | Payment processed |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dispute_folio**
> Folio dispute_folio(folio_id, dispute_folio_request)

Dispute folio

Create a dispute for a folio

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.dispute_folio_request import DisputeFolioRequest
from stayos_api_client.models.folio import Folio
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
    api_instance = stayos_api_client.BillingApi(api_client)
    folio_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    dispute_folio_request = stayos_api_client.DisputeFolioRequest() # DisputeFolioRequest | 

    try:
        # Dispute folio
        api_response = await api_instance.dispute_folio(folio_id, dispute_folio_request)
        print("The response of BillingApi->dispute_folio:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->dispute_folio: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folio_id** | **UUID**|  | 
 **dispute_folio_request** | [**DisputeFolioRequest**](DisputeFolioRequest.md)|  | 

### Return type

[**Folio**](Folio.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dispute created |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_folio**
> object get_folio(folio_id)

Get folio details

Retrieve complete folio details including all charges, payments, adjustments, and current balance

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
    api_instance = stayos_api_client.BillingApi(api_client)
    folio_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get folio details
        api_response = await api_instance.get_folio(folio_id)
        print("The response of BillingApi->get_folio:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->get_folio: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folio_id** | **UUID**|  | 

### Return type

**object**

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

# **get_folio_pdf**
> bytearray get_folio_pdf(folio_id)

Download folio PDF

Download folio as PDF document

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
    api_instance = stayos_api_client.BillingApi(api_client)
    folio_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Download folio PDF
        api_response = await api_instance.get_folio_pdf(folio_id)
        print("The response of BillingApi->get_folio_pdf:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->get_folio_pdf: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folio_id** | **UUID**|  | 

### Return type

**bytearray**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PDF document |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_payment**
> object get_payment(payment_id)

Get payment details

Retrieve complete payment details including amount, method, status, and transaction information

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
    api_instance = stayos_api_client.BillingApi(api_client)
    payment_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get payment details
        api_response = await api_instance.get_payment(payment_id)
        print("The response of BillingApi->get_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->get_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_id** | **UUID**|  | 

### Return type

**object**

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

# **get_payment_receipt**
> bytearray get_payment_receipt(payment_id)

Get payment receipt

Retrieve payment receipt

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
    api_instance = stayos_api_client.BillingApi(api_client)
    payment_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get payment receipt
        api_response = await api_instance.get_payment_receipt(payment_id)
        print("The response of BillingApi->get_payment_receipt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->get_payment_receipt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_id** | **UUID**|  | 

### Return type

**bytearray**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_revenue_reconciliation**
> GetRevenueReconciliation200Response get_revenue_reconciliation(var_date, property_id=property_id)

Get revenue reconciliation

Retrieve revenue reconciliation data

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.get_revenue_reconciliation200_response import GetRevenueReconciliation200Response
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
    api_instance = stayos_api_client.BillingApi(api_client)
    var_date = '2013-10-20' # date | 
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)

    try:
        # Get revenue reconciliation
        api_response = await api_instance.get_revenue_reconciliation(var_date, property_id=property_id)
        print("The response of BillingApi->get_revenue_reconciliation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->get_revenue_reconciliation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **date**|  | 
 **property_id** | **UUID**|  | [optional] 

### Return type

[**GetRevenueReconciliation200Response**](GetRevenueReconciliation200Response.md)

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

# **get_revenue_reports**
> RevenueReport get_revenue_reports(start_date, end_date, property_id=property_id, group_by=group_by)

Get revenue reports

Retrieve revenue reports with various breakdowns

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.revenue_report import RevenueReport
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
    api_instance = stayos_api_client.BillingApi(api_client)
    start_date = '2013-10-20' # date | 
    end_date = '2013-10-20' # date | 
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    group_by = 'group_by_example' # str |  (optional)

    try:
        # Get revenue reports
        api_response = await api_instance.get_revenue_reports(start_date, end_date, property_id=property_id, group_by=group_by)
        print("The response of BillingApi->get_revenue_reports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->get_revenue_reports: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **date**|  | 
 **end_date** | **date**|  | 
 **property_id** | **UUID**|  | [optional] 
 **group_by** | **str**|  | [optional] 

### Return type

[**RevenueReport**](RevenueReport.md)

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

# **list_folios**
> GetGuestStays200Response list_folios(property_id=property_id, guest_id=guest_id, status=status, page_size=page_size, cursor=cursor)

List folios

List all guest folios with filtering by property, guest, status, and date range

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
    api_instance = stayos_api_client.BillingApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    guest_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    status = 'status_example' # str |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List folios
        api_response = await api_instance.list_folios(property_id=property_id, guest_id=guest_id, status=status, page_size=page_size, cursor=cursor)
        print("The response of BillingApi->list_folios:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->list_folios: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**|  | [optional] 
 **guest_id** | **UUID**|  | [optional] 
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

# **list_payments**
> ListPayments200Response list_payments(folio_id=folio_id, status=status, page_size=page_size, cursor=cursor)

List payments

List all payments with filtering options

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_payments200_response import ListPayments200Response
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
    api_instance = stayos_api_client.BillingApi(api_client)
    folio_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    status = 'status_example' # str |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List payments
        api_response = await api_instance.list_payments(folio_id=folio_id, status=status, page_size=page_size, cursor=cursor)
        print("The response of BillingApi->list_payments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->list_payments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folio_id** | **UUID**|  | [optional] 
 **status** | **str**|  | [optional] 
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 

### Return type

[**ListPayments200Response**](ListPayments200Response.md)

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

# **refund_payment**
> Payment refund_payment(payment_id, refund_payment_request)

Refund payment

Process a refund for a payment

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.payment import Payment
from stayos_api_client.models.refund_payment_request import RefundPaymentRequest
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
    api_instance = stayos_api_client.BillingApi(api_client)
    payment_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    refund_payment_request = stayos_api_client.RefundPaymentRequest() # RefundPaymentRequest | 

    try:
        # Refund payment
        api_response = await api_instance.refund_payment(payment_id, refund_payment_request)
        print("The response of BillingApi->refund_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->refund_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_id** | **UUID**|  | 
 **refund_payment_request** | [**RefundPaymentRequest**](RefundPaymentRequest.md)|  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Refund processed |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_folio_line_item**
> remove_folio_line_item(folio_id, item_id)

Remove line item from folio

Remove a line item from a folio

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
    api_instance = stayos_api_client.BillingApi(api_client)
    folio_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    item_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Remove line item from folio
        await api_instance.remove_folio_line_item(folio_id, item_id)
    except Exception as e:
        print("Exception when calling BillingApi->remove_folio_line_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folio_id** | **UUID**|  | 
 **item_id** | **UUID**|  | 

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

# **reopen_folio**
> Folio reopen_folio(folio_id, cancel_service_request_request=cancel_service_request_request)

Reopen folio

Reopen a closed folio for additional charges

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.cancel_service_request_request import CancelServiceRequestRequest
from stayos_api_client.models.folio import Folio
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
    api_instance = stayos_api_client.BillingApi(api_client)
    folio_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    cancel_service_request_request = stayos_api_client.CancelServiceRequestRequest() # CancelServiceRequestRequest |  (optional)

    try:
        # Reopen folio
        api_response = await api_instance.reopen_folio(folio_id, cancel_service_request_request=cancel_service_request_request)
        print("The response of BillingApi->reopen_folio:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->reopen_folio: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folio_id** | **UUID**|  | 
 **cancel_service_request_request** | [**CancelServiceRequestRequest**](CancelServiceRequestRequest.md)|  | [optional] 

### Return type

[**Folio**](Folio.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Folio reopened |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

