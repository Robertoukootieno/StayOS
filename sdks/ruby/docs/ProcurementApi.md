# OpenapiClient::ProcurementApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**approve_purchase_order**](ProcurementApi.md#approve_purchase_order) | **POST** /procurement/purchase-orders/{poId}/approve | Approve purchase order |
| [**create_purchase_order**](ProcurementApi.md#create_purchase_order) | **POST** /procurement/purchase-orders | Create purchase order |
| [**create_supplier**](ProcurementApi.md#create_supplier) | **POST** /procurement/suppliers | Create supplier |
| [**get_supplier**](ProcurementApi.md#get_supplier) | **GET** /procurement/suppliers/{supplierId} | Get supplier details |
| [**get_supplier_performance**](ProcurementApi.md#get_supplier_performance) | **GET** /procurement/suppliers/{supplierId}/performance | Get supplier performance |
| [**invoice_purchase_order**](ProcurementApi.md#invoice_purchase_order) | **POST** /procurement/purchase-orders/{poId}/invoice | Record invoice for purchase order |
| [**list_purchase_orders**](ProcurementApi.md#list_purchase_orders) | **GET** /procurement/purchase-orders | List purchase orders |
| [**list_suppliers**](ProcurementApi.md#list_suppliers) | **GET** /procurement/suppliers | List suppliers |
| [**receive_purchase_order**](ProcurementApi.md#receive_purchase_order) | **POST** /procurement/purchase-orders/{poId}/receive | Receive purchase order |
| [**replace_purchase_order**](ProcurementApi.md#replace_purchase_order) | **PUT** /procurement/purchase-orders/{poId} | Replace purchase order (full update) |
| [**replace_supplier**](ProcurementApi.md#replace_supplier) | **PUT** /procurement/suppliers/{supplierId} | Replace supplier (full update) |
| [**submit_purchase_order**](ProcurementApi.md#submit_purchase_order) | **POST** /procurement/purchase-orders/{poId}/submit | Submit purchase order |
| [**update_purchase_order**](ProcurementApi.md#update_purchase_order) | **PATCH** /procurement/purchase-orders/{poId} | Update purchase order (partial update) |
| [**update_supplier**](ProcurementApi.md#update_supplier) | **PATCH** /procurement/suppliers/{supplierId} | Update supplier (partial update) |


## approve_purchase_order

> <PurchaseOrder> approve_purchase_order(po_id, opts)

Approve purchase order

Approve a purchase order for processing

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ProcurementApi.new
po_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  approve_purchase_order_request: OpenapiClient::ApprovePurchaseOrderRequest.new # ApprovePurchaseOrderRequest | 
}

begin
  # Approve purchase order
  result = api_instance.approve_purchase_order(po_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->approve_purchase_order: #{e}"
end
```

#### Using the approve_purchase_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PurchaseOrder>, Integer, Hash)> approve_purchase_order_with_http_info(po_id, opts)

```ruby
begin
  # Approve purchase order
  data, status_code, headers = api_instance.approve_purchase_order_with_http_info(po_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PurchaseOrder>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->approve_purchase_order_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **po_id** | **String** |  |  |
| **approve_purchase_order_request** | [**ApprovePurchaseOrderRequest**](ApprovePurchaseOrderRequest.md) |  | [optional] |

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## create_purchase_order

> Object create_purchase_order(body)

Create purchase order

Create a new purchase order for supplies, equipment, or services

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ProcurementApi.new
body = { ... } # Object | 

begin
  # Create purchase order
  result = api_instance.create_purchase_order(body)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->create_purchase_order: #{e}"
end
```

#### Using the create_purchase_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_purchase_order_with_http_info(body)

```ruby
begin
  # Create purchase order
  data, status_code, headers = api_instance.create_purchase_order_with_http_info(body)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->create_purchase_order_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **body** | **Object** |  |  |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## create_supplier

> <Supplier> create_supplier(supplier)

Create supplier

Create a new supplier

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ProcurementApi.new
supplier = OpenapiClient::Supplier.new({supplier_id: 'supplier_id_example', name: 'ABC Food Distributors', category: 'FOOD_BEVERAGE', status: 'ACTIVE'}) # Supplier | 

begin
  # Create supplier
  result = api_instance.create_supplier(supplier)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->create_supplier: #{e}"
end
```

#### Using the create_supplier_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Supplier>, Integer, Hash)> create_supplier_with_http_info(supplier)

```ruby
begin
  # Create supplier
  data, status_code, headers = api_instance.create_supplier_with_http_info(supplier)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Supplier>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->create_supplier_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **supplier** | [**Supplier**](Supplier.md) |  |  |

### Return type

[**Supplier**](Supplier.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## get_supplier

> <Supplier> get_supplier(supplier_id)

Get supplier details

Retrieve details of a specific supplier

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ProcurementApi.new
supplier_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get supplier details
  result = api_instance.get_supplier(supplier_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->get_supplier: #{e}"
end
```

#### Using the get_supplier_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Supplier>, Integer, Hash)> get_supplier_with_http_info(supplier_id)

```ruby
begin
  # Get supplier details
  data, status_code, headers = api_instance.get_supplier_with_http_info(supplier_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Supplier>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->get_supplier_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **supplier_id** | **String** |  |  |

### Return type

[**Supplier**](Supplier.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_supplier_performance

> <SupplierPerformance> get_supplier_performance(supplier_id, opts)

Get supplier performance

Get performance metrics for a supplier

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ProcurementApi.new
supplier_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  start_date: Date.parse('2013-10-20'), # Date | 
  end_date: Date.parse('2013-10-20') # Date | 
}

begin
  # Get supplier performance
  result = api_instance.get_supplier_performance(supplier_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->get_supplier_performance: #{e}"
end
```

#### Using the get_supplier_performance_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SupplierPerformance>, Integer, Hash)> get_supplier_performance_with_http_info(supplier_id, opts)

```ruby
begin
  # Get supplier performance
  data, status_code, headers = api_instance.get_supplier_performance_with_http_info(supplier_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SupplierPerformance>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->get_supplier_performance_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **supplier_id** | **String** |  |  |
| **start_date** | **Date** |  | [optional] |
| **end_date** | **Date** |  | [optional] |

### Return type

[**SupplierPerformance**](SupplierPerformance.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## invoice_purchase_order

> <PurchaseOrder> invoice_purchase_order(po_id, invoice_purchase_order_request)

Record invoice for purchase order

Record supplier invoice for purchase order

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ProcurementApi.new
po_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
invoice_purchase_order_request = OpenapiClient::InvoicePurchaseOrderRequest.new({invoice_number: 'invoice_number_example', amount: OpenapiClient::Money.new({amount: '125.50', currency: 'USD'})}) # InvoicePurchaseOrderRequest | 

begin
  # Record invoice for purchase order
  result = api_instance.invoice_purchase_order(po_id, invoice_purchase_order_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->invoice_purchase_order: #{e}"
end
```

#### Using the invoice_purchase_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PurchaseOrder>, Integer, Hash)> invoice_purchase_order_with_http_info(po_id, invoice_purchase_order_request)

```ruby
begin
  # Record invoice for purchase order
  data, status_code, headers = api_instance.invoice_purchase_order_with_http_info(po_id, invoice_purchase_order_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PurchaseOrder>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->invoice_purchase_order_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **po_id** | **String** |  |  |
| **invoice_purchase_order_request** | [**InvoicePurchaseOrderRequest**](InvoicePurchaseOrderRequest.md) |  |  |

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## list_purchase_orders

> <GetGuestStays200Response> list_purchase_orders(opts)

List purchase orders

List all purchase orders with filtering by supplier, status, property, and date range

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ProcurementApi.new
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  status: 'status_example', # String | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List purchase orders
  result = api_instance.list_purchase_orders(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->list_purchase_orders: #{e}"
end
```

#### Using the list_purchase_orders_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetGuestStays200Response>, Integer, Hash)> list_purchase_orders_with_http_info(opts)

```ruby
begin
  # List purchase orders
  data, status_code, headers = api_instance.list_purchase_orders_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetGuestStays200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->list_purchase_orders_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_suppliers

> <ListSuppliers200Response> list_suppliers(opts)

List suppliers

List all suppliers with filtering and search

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ProcurementApi.new
opts = {
  status: 'ACTIVE', # String | 
  category: 'category_example', # String | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List suppliers
  result = api_instance.list_suppliers(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->list_suppliers: #{e}"
end
```

#### Using the list_suppliers_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListSuppliers200Response>, Integer, Hash)> list_suppliers_with_http_info(opts)

```ruby
begin
  # List suppliers
  data, status_code, headers = api_instance.list_suppliers_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListSuppliers200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->list_suppliers_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** |  | [optional] |
| **category** | **String** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**ListSuppliers200Response**](ListSuppliers200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## receive_purchase_order

> <PurchaseOrder> receive_purchase_order(po_id, receive_purchase_order_request)

Receive purchase order

Record receipt of goods from purchase order

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ProcurementApi.new
po_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
receive_purchase_order_request = OpenapiClient::ReceivePurchaseOrderRequest.new # ReceivePurchaseOrderRequest | 

begin
  # Receive purchase order
  result = api_instance.receive_purchase_order(po_id, receive_purchase_order_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->receive_purchase_order: #{e}"
end
```

#### Using the receive_purchase_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PurchaseOrder>, Integer, Hash)> receive_purchase_order_with_http_info(po_id, receive_purchase_order_request)

```ruby
begin
  # Receive purchase order
  data, status_code, headers = api_instance.receive_purchase_order_with_http_info(po_id, receive_purchase_order_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PurchaseOrder>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->receive_purchase_order_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **po_id** | **String** |  |  |
| **receive_purchase_order_request** | [**ReceivePurchaseOrderRequest**](ReceivePurchaseOrderRequest.md) |  |  |

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## replace_purchase_order

> Object replace_purchase_order(po_id, body, opts)

Replace purchase order (full update)

Replace purchase order with complete new details including items, quantities, and delivery information

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ProcurementApi.new
po_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace purchase order (full update)
  result = api_instance.replace_purchase_order(po_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->replace_purchase_order: #{e}"
end
```

#### Using the replace_purchase_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> replace_purchase_order_with_http_info(po_id, body, opts)

```ruby
begin
  # Replace purchase order (full update)
  data, status_code, headers = api_instance.replace_purchase_order_with_http_info(po_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->replace_purchase_order_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **po_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## replace_supplier

> Object replace_supplier(supplier_id, body, opts)

Replace supplier (full update)

Replace supplier information with complete new details including contact, terms, and product catalog

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ProcurementApi.new
supplier_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace supplier (full update)
  result = api_instance.replace_supplier(supplier_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->replace_supplier: #{e}"
end
```

#### Using the replace_supplier_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> replace_supplier_with_http_info(supplier_id, body, opts)

```ruby
begin
  # Replace supplier (full update)
  data, status_code, headers = api_instance.replace_supplier_with_http_info(supplier_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->replace_supplier_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **supplier_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## submit_purchase_order

> <PurchaseOrder> submit_purchase_order(po_id)

Submit purchase order

Submit a purchase order to supplier

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ProcurementApi.new
po_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Submit purchase order
  result = api_instance.submit_purchase_order(po_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->submit_purchase_order: #{e}"
end
```

#### Using the submit_purchase_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PurchaseOrder>, Integer, Hash)> submit_purchase_order_with_http_info(po_id)

```ruby
begin
  # Submit purchase order
  data, status_code, headers = api_instance.submit_purchase_order_with_http_info(po_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PurchaseOrder>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->submit_purchase_order_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **po_id** | **String** |  |  |

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## update_purchase_order

> Object update_purchase_order(po_id, body, opts)

Update purchase order (partial update)

Partially update purchase order to modify status, quantities, or delivery details **Common use cases:** | Update specific fields of a purchase order. **Common use cases:** - Update delivery date - Change PO status - Add notes - Modify payment terms

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ProcurementApi.new
po_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update purchase order (partial update)
  result = api_instance.update_purchase_order(po_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->update_purchase_order: #{e}"
end
```

#### Using the update_purchase_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_purchase_order_with_http_info(po_id, body, opts)

```ruby
begin
  # Update purchase order (partial update)
  data, status_code, headers = api_instance.update_purchase_order_with_http_info(po_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->update_purchase_order_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **po_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_supplier

> Object update_supplier(supplier_id, body, opts)

Update supplier (partial update)

Partially update supplier information to modify contact details, terms, or status **Common use cases:** | Update specific fields of a supplier. **Common use cases:** - Update contact information - Change payment terms - Modify supplier status - Update rating

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ProcurementApi.new
supplier_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update supplier (partial update)
  result = api_instance.update_supplier(supplier_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->update_supplier: #{e}"
end
```

#### Using the update_supplier_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_supplier_with_http_info(supplier_id, body, opts)

```ruby
begin
  # Update supplier (partial update)
  data, status_code, headers = api_instance.update_supplier_with_http_info(supplier_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling ProcurementApi->update_supplier_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **supplier_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

