# OpenapiClient::FoodBeverageApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**cancel_fb_order**](FoodBeverageApi.md#cancel_fb_order) | **POST** /fb/orders/{orderId}/cancel | Cancel F&amp;B order |
| [**confirm_fb_order**](FoodBeverageApi.md#confirm_fb_order) | **POST** /fb/orders/{orderId}/confirm | Confirm F&amp;B order |
| [**consume_fb_inventory**](FoodBeverageApi.md#consume_fb_inventory) | **POST** /fb/inventory/{itemId}/consume | Record consumption |
| [**count_fb_inventory**](FoodBeverageApi.md#count_fb_inventory) | **POST** /fb/inventory/count | Perform stock count |
| [**create_fb_inventory_item**](FoodBeverageApi.md#create_fb_inventory_item) | **POST** /fb/inventory | Create inventory item |
| [**create_fb_order**](FoodBeverageApi.md#create_fb_order) | **POST** /fb/orders | Create F&amp;B order |
| [**create_menu_item**](FoodBeverageApi.md#create_menu_item) | **POST** /fb/menu | Create menu item |
| [**get_fb_inventory_item**](FoodBeverageApi.md#get_fb_inventory_item) | **GET** /fb/inventory/{itemId} | Get inventory item details |
| [**get_menu_item**](FoodBeverageApi.md#get_menu_item) | **GET** /fb/menu/{itemId} | Get menu item details |
| [**list_fb_inventory**](FoodBeverageApi.md#list_fb_inventory) | **GET** /fb/inventory | List F&amp;B inventory items |
| [**list_fb_orders**](FoodBeverageApi.md#list_fb_orders) | **GET** /fb/orders | List F&amp;B orders |
| [**list_menu_items**](FoodBeverageApi.md#list_menu_items) | **GET** /fb/menu | List menu items |
| [**mark_fb_item_ready**](FoodBeverageApi.md#mark_fb_item_ready) | **POST** /fb/orders/{orderId}/items/{itemId}/ready | Mark item as ready |
| [**receive_fb_inventory**](FoodBeverageApi.md#receive_fb_inventory) | **POST** /fb/inventory/{itemId}/receive | Receive stock |
| [**replace_fb_order**](FoodBeverageApi.md#replace_fb_order) | **PUT** /fb/orders/{orderId} | Replace F&amp;B order (full update) |
| [**replace_menu_item**](FoodBeverageApi.md#replace_menu_item) | **PUT** /fb/menu/{itemId} | Replace menu item (full update) |
| [**serve_fb_order**](FoodBeverageApi.md#serve_fb_order) | **POST** /fb/orders/{orderId}/serve | Mark order as served |
| [**update_fb_inventory_item**](FoodBeverageApi.md#update_fb_inventory_item) | **PUT** /fb/inventory/{itemId} | Update inventory item |
| [**update_fb_order**](FoodBeverageApi.md#update_fb_order) | **PATCH** /fb/orders/{orderId} | Update F&amp;B order (partial update) |
| [**update_menu_item**](FoodBeverageApi.md#update_menu_item) | **PATCH** /fb/menu/{itemId} | Update menu item (partial update) |
| [**waste_fb_inventory**](FoodBeverageApi.md#waste_fb_inventory) | **POST** /fb/inventory/{itemId}/waste | Record waste |


## cancel_fb_order

> <FBOrder> cancel_fb_order(order_id, opts)

Cancel F&B order

Cancel an F&B order

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

api_instance = OpenapiClient::FoodBeverageApi.new
order_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  cancel_service_request_request: OpenapiClient::CancelServiceRequestRequest.new # CancelServiceRequestRequest | 
}

begin
  # Cancel F&B order
  result = api_instance.cancel_fb_order(order_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->cancel_fb_order: #{e}"
end
```

#### Using the cancel_fb_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<FBOrder>, Integer, Hash)> cancel_fb_order_with_http_info(order_id, opts)

```ruby
begin
  # Cancel F&B order
  data, status_code, headers = api_instance.cancel_fb_order_with_http_info(order_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FBOrder>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->cancel_fb_order_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **order_id** | **String** |  |  |
| **cancel_service_request_request** | [**CancelServiceRequestRequest**](CancelServiceRequestRequest.md) |  | [optional] |

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## confirm_fb_order

> <FBOrder> confirm_fb_order(order_id, opts)

Confirm F&B order

Confirm receipt and acceptance of an F&B order

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

api_instance = OpenapiClient::FoodBeverageApi.new
order_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  confirm_fb_order_request: OpenapiClient::ConfirmFBOrderRequest.new # ConfirmFBOrderRequest | 
}

begin
  # Confirm F&B order
  result = api_instance.confirm_fb_order(order_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->confirm_fb_order: #{e}"
end
```

#### Using the confirm_fb_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<FBOrder>, Integer, Hash)> confirm_fb_order_with_http_info(order_id, opts)

```ruby
begin
  # Confirm F&B order
  data, status_code, headers = api_instance.confirm_fb_order_with_http_info(order_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FBOrder>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->confirm_fb_order_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **order_id** | **String** |  |  |
| **confirm_fb_order_request** | [**ConfirmFBOrderRequest**](ConfirmFBOrderRequest.md) |  | [optional] |

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## consume_fb_inventory

> <FBInventoryItem> consume_fb_inventory(item_id, receive_fb_inventory_request)

Record consumption

Record inventory consumption

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

api_instance = OpenapiClient::FoodBeverageApi.new
item_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
receive_fb_inventory_request = OpenapiClient::ReceiveFBInventoryRequest.new({quantity: 3.56}) # ReceiveFBInventoryRequest | 

begin
  # Record consumption
  result = api_instance.consume_fb_inventory(item_id, receive_fb_inventory_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->consume_fb_inventory: #{e}"
end
```

#### Using the consume_fb_inventory_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<FBInventoryItem>, Integer, Hash)> consume_fb_inventory_with_http_info(item_id, receive_fb_inventory_request)

```ruby
begin
  # Record consumption
  data, status_code, headers = api_instance.consume_fb_inventory_with_http_info(item_id, receive_fb_inventory_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FBInventoryItem>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->consume_fb_inventory_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** |  |  |
| **receive_fb_inventory_request** | [**ReceiveFBInventoryRequest**](ReceiveFBInventoryRequest.md) |  |  |

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## count_fb_inventory

> <CountFBInventory200Response> count_fb_inventory(count_fb_inventory_request)

Perform stock count

Perform physical inventory stock count

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

api_instance = OpenapiClient::FoodBeverageApi.new
count_fb_inventory_request = OpenapiClient::CountFBInventoryRequest.new({counts: [OpenapiClient::CountFBInventoryRequestCountsInner.new({item_id: 'item_id_example', quantity: 3.56})]}) # CountFBInventoryRequest | 

begin
  # Perform stock count
  result = api_instance.count_fb_inventory(count_fb_inventory_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->count_fb_inventory: #{e}"
end
```

#### Using the count_fb_inventory_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CountFBInventory200Response>, Integer, Hash)> count_fb_inventory_with_http_info(count_fb_inventory_request)

```ruby
begin
  # Perform stock count
  data, status_code, headers = api_instance.count_fb_inventory_with_http_info(count_fb_inventory_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CountFBInventory200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->count_fb_inventory_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **count_fb_inventory_request** | [**CountFBInventoryRequest**](CountFBInventoryRequest.md) |  |  |

### Return type

[**CountFBInventory200Response**](CountFBInventory200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## create_fb_inventory_item

> <FBInventoryItem> create_fb_inventory_item(fb_inventory_item)

Create inventory item

Create a new F&B inventory item

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

api_instance = OpenapiClient::FoodBeverageApi.new
fb_inventory_item = OpenapiClient::FBInventoryItem.new({inventory_item_id: 'inventory_item_id_example', name: 'Tomatoes', unit: 'KG', current_stock: 3.56}) # FBInventoryItem | 

begin
  # Create inventory item
  result = api_instance.create_fb_inventory_item(fb_inventory_item)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->create_fb_inventory_item: #{e}"
end
```

#### Using the create_fb_inventory_item_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<FBInventoryItem>, Integer, Hash)> create_fb_inventory_item_with_http_info(fb_inventory_item)

```ruby
begin
  # Create inventory item
  data, status_code, headers = api_instance.create_fb_inventory_item_with_http_info(fb_inventory_item)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FBInventoryItem>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->create_fb_inventory_item_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fb_inventory_item** | [**FBInventoryItem**](FBInventoryItem.md) |  |  |

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## create_fb_order

> Object create_fb_order(body)

Create F&B order

Create a new F&B order for room service, restaurant, or bar service

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

api_instance = OpenapiClient::FoodBeverageApi.new
body = { ... } # Object | 

begin
  # Create F&B order
  result = api_instance.create_fb_order(body)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->create_fb_order: #{e}"
end
```

#### Using the create_fb_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_fb_order_with_http_info(body)

```ruby
begin
  # Create F&B order
  data, status_code, headers = api_instance.create_fb_order_with_http_info(body)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->create_fb_order_with_http_info: #{e}"
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


## create_menu_item

> <MenuItem> create_menu_item(menu_item)

Create menu item

Create a new menu item

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

api_instance = OpenapiClient::FoodBeverageApi.new
menu_item = OpenapiClient::MenuItem.new({item_id: 'item_id_example', name: 'Caesar Salad', category: 'APPETIZER', price: OpenapiClient::Model0.new({amount: '125.50', currency: 'USD'}), available: false}) # MenuItem | 

begin
  # Create menu item
  result = api_instance.create_menu_item(menu_item)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->create_menu_item: #{e}"
end
```

#### Using the create_menu_item_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MenuItem>, Integer, Hash)> create_menu_item_with_http_info(menu_item)

```ruby
begin
  # Create menu item
  data, status_code, headers = api_instance.create_menu_item_with_http_info(menu_item)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MenuItem>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->create_menu_item_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **menu_item** | [**MenuItem**](MenuItem.md) |  |  |

### Return type

[**MenuItem**](MenuItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## get_fb_inventory_item

> <FBInventoryItem> get_fb_inventory_item(item_id)

Get inventory item details

Retrieve details of a specific F&B inventory item

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

api_instance = OpenapiClient::FoodBeverageApi.new
item_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get inventory item details
  result = api_instance.get_fb_inventory_item(item_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->get_fb_inventory_item: #{e}"
end
```

#### Using the get_fb_inventory_item_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<FBInventoryItem>, Integer, Hash)> get_fb_inventory_item_with_http_info(item_id)

```ruby
begin
  # Get inventory item details
  data, status_code, headers = api_instance.get_fb_inventory_item_with_http_info(item_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FBInventoryItem>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->get_fb_inventory_item_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** |  |  |

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_menu_item

> <MenuItem> get_menu_item(item_id)

Get menu item details

Retrieve details of a specific menu item

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

api_instance = OpenapiClient::FoodBeverageApi.new
item_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get menu item details
  result = api_instance.get_menu_item(item_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->get_menu_item: #{e}"
end
```

#### Using the get_menu_item_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MenuItem>, Integer, Hash)> get_menu_item_with_http_info(item_id)

```ruby
begin
  # Get menu item details
  data, status_code, headers = api_instance.get_menu_item_with_http_info(item_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MenuItem>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->get_menu_item_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** |  |  |

### Return type

[**MenuItem**](MenuItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_fb_inventory

> <ListFBInventory200Response> list_fb_inventory(opts)

List F&B inventory items

List all F&B inventory items with stock levels

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

api_instance = OpenapiClient::FoodBeverageApi.new
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  low_stock: true, # Boolean | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List F&B inventory items
  result = api_instance.list_fb_inventory(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->list_fb_inventory: #{e}"
end
```

#### Using the list_fb_inventory_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListFBInventory200Response>, Integer, Hash)> list_fb_inventory_with_http_info(opts)

```ruby
begin
  # List F&B inventory items
  data, status_code, headers = api_instance.list_fb_inventory_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListFBInventory200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->list_fb_inventory_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  | [optional] |
| **low_stock** | **Boolean** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**ListFBInventory200Response**](ListFBInventory200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_fb_orders

> <GetGuestStays200Response> list_fb_orders(opts)

List F&B orders

List all food & beverage orders with filtering by property, venue, status, and date range

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

api_instance = OpenapiClient::FoodBeverageApi.new
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  status: 'status_example', # String | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List F&B orders
  result = api_instance.list_fb_orders(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->list_fb_orders: #{e}"
end
```

#### Using the list_fb_orders_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetGuestStays200Response>, Integer, Hash)> list_fb_orders_with_http_info(opts)

```ruby
begin
  # List F&B orders
  data, status_code, headers = api_instance.list_fb_orders_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetGuestStays200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->list_fb_orders_with_http_info: #{e}"
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


## list_menu_items

> <ListMenuItems200Response> list_menu_items(opts)

List menu items

List all menu items with filtering by venue and availability

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

api_instance = OpenapiClient::FoodBeverageApi.new
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  venue: 'venue_example', # String | 
  is_available: true, # Boolean | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List menu items
  result = api_instance.list_menu_items(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->list_menu_items: #{e}"
end
```

#### Using the list_menu_items_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListMenuItems200Response>, Integer, Hash)> list_menu_items_with_http_info(opts)

```ruby
begin
  # List menu items
  data, status_code, headers = api_instance.list_menu_items_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListMenuItems200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->list_menu_items_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  | [optional] |
| **venue** | **String** |  | [optional] |
| **is_available** | **Boolean** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**ListMenuItems200Response**](ListMenuItems200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## mark_fb_item_ready

> <FBOrder> mark_fb_item_ready(order_id, item_id)

Mark item as ready

Mark an order item as ready for delivery

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

api_instance = OpenapiClient::FoodBeverageApi.new
order_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
item_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Mark item as ready
  result = api_instance.mark_fb_item_ready(order_id, item_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->mark_fb_item_ready: #{e}"
end
```

#### Using the mark_fb_item_ready_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<FBOrder>, Integer, Hash)> mark_fb_item_ready_with_http_info(order_id, item_id)

```ruby
begin
  # Mark item as ready
  data, status_code, headers = api_instance.mark_fb_item_ready_with_http_info(order_id, item_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FBOrder>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->mark_fb_item_ready_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **order_id** | **String** |  |  |
| **item_id** | **String** |  |  |

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## receive_fb_inventory

> <FBInventoryItem> receive_fb_inventory(item_id, receive_fb_inventory_request)

Receive stock

Record receipt of inventory stock

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

api_instance = OpenapiClient::FoodBeverageApi.new
item_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
receive_fb_inventory_request = OpenapiClient::ReceiveFBInventoryRequest.new({quantity: 3.56}) # ReceiveFBInventoryRequest | 

begin
  # Receive stock
  result = api_instance.receive_fb_inventory(item_id, receive_fb_inventory_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->receive_fb_inventory: #{e}"
end
```

#### Using the receive_fb_inventory_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<FBInventoryItem>, Integer, Hash)> receive_fb_inventory_with_http_info(item_id, receive_fb_inventory_request)

```ruby
begin
  # Receive stock
  data, status_code, headers = api_instance.receive_fb_inventory_with_http_info(item_id, receive_fb_inventory_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FBInventoryItem>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->receive_fb_inventory_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** |  |  |
| **receive_fb_inventory_request** | [**ReceiveFBInventoryRequest**](ReceiveFBInventoryRequest.md) |  |  |

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## replace_fb_order

> Object replace_fb_order(order_id, body, opts)

Replace F&B order (full update)

Replace F&B order with complete new order details including items, pricing, and delivery information

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

api_instance = OpenapiClient::FoodBeverageApi.new
order_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace F&B order (full update)
  result = api_instance.replace_fb_order(order_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->replace_fb_order: #{e}"
end
```

#### Using the replace_fb_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> replace_fb_order_with_http_info(order_id, body, opts)

```ruby
begin
  # Replace F&B order (full update)
  data, status_code, headers = api_instance.replace_fb_order_with_http_info(order_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->replace_fb_order_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **order_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## replace_menu_item

> Object replace_menu_item(item_id, body, opts)

Replace menu item (full update)

Replace menu item with complete new details including pricing, ingredients, and availability

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

api_instance = OpenapiClient::FoodBeverageApi.new
item_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace menu item (full update)
  result = api_instance.replace_menu_item(item_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->replace_menu_item: #{e}"
end
```

#### Using the replace_menu_item_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> replace_menu_item_with_http_info(item_id, body, opts)

```ruby
begin
  # Replace menu item (full update)
  data, status_code, headers = api_instance.replace_menu_item_with_http_info(item_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->replace_menu_item_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## serve_fb_order

> <FBOrder> serve_fb_order(order_id, opts)

Mark order as served

Mark an order as delivered/served to guest

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

api_instance = OpenapiClient::FoodBeverageApi.new
order_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  serve_fb_order_request: OpenapiClient::ServeFBOrderRequest.new # ServeFBOrderRequest | 
}

begin
  # Mark order as served
  result = api_instance.serve_fb_order(order_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->serve_fb_order: #{e}"
end
```

#### Using the serve_fb_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<FBOrder>, Integer, Hash)> serve_fb_order_with_http_info(order_id, opts)

```ruby
begin
  # Mark order as served
  data, status_code, headers = api_instance.serve_fb_order_with_http_info(order_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FBOrder>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->serve_fb_order_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **order_id** | **String** |  |  |
| **serve_fb_order_request** | [**ServeFBOrderRequest**](ServeFBOrderRequest.md) |  | [optional] |

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_fb_inventory_item

> <FBInventoryItem> update_fb_inventory_item(item_id, fb_inventory_item)

Update inventory item

Update F&B inventory item details

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

api_instance = OpenapiClient::FoodBeverageApi.new
item_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
fb_inventory_item = OpenapiClient::FBInventoryItem.new({inventory_item_id: 'inventory_item_id_example', name: 'Tomatoes', unit: 'KG', current_stock: 3.56}) # FBInventoryItem | 

begin
  # Update inventory item
  result = api_instance.update_fb_inventory_item(item_id, fb_inventory_item)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->update_fb_inventory_item: #{e}"
end
```

#### Using the update_fb_inventory_item_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<FBInventoryItem>, Integer, Hash)> update_fb_inventory_item_with_http_info(item_id, fb_inventory_item)

```ruby
begin
  # Update inventory item
  data, status_code, headers = api_instance.update_fb_inventory_item_with_http_info(item_id, fb_inventory_item)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FBInventoryItem>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->update_fb_inventory_item_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** |  |  |
| **fb_inventory_item** | [**FBInventoryItem**](FBInventoryItem.md) |  |  |

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_fb_order

> Object update_fb_order(order_id, body, opts)

Update F&B order (partial update)

Partially update F&B order to modify status, add items, or update delivery details **Common use cases:** | Update specific fields of an F&B order. **Common use cases:** - Update order status - Modify delivery time - Add special instructions - Change order items

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

api_instance = OpenapiClient::FoodBeverageApi.new
order_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update F&B order (partial update)
  result = api_instance.update_fb_order(order_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->update_fb_order: #{e}"
end
```

#### Using the update_fb_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_fb_order_with_http_info(order_id, body, opts)

```ruby
begin
  # Update F&B order (partial update)
  data, status_code, headers = api_instance.update_fb_order_with_http_info(order_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->update_fb_order_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **order_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_menu_item

> Object update_menu_item(item_id, body, opts)

Update menu item (partial update)

Partially update menu item to modify pricing, availability, or description **Common use cases:** | Update specific fields of a menu item. **Common use cases:** - Update price - Change availability - Modify description - Update dietary information

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

api_instance = OpenapiClient::FoodBeverageApi.new
item_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update menu item (partial update)
  result = api_instance.update_menu_item(item_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->update_menu_item: #{e}"
end
```

#### Using the update_menu_item_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_menu_item_with_http_info(item_id, body, opts)

```ruby
begin
  # Update menu item (partial update)
  data, status_code, headers = api_instance.update_menu_item_with_http_info(item_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->update_menu_item_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## waste_fb_inventory

> <FBInventoryItem> waste_fb_inventory(item_id, waste_fb_inventory_request)

Record waste

Record inventory waste

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

api_instance = OpenapiClient::FoodBeverageApi.new
item_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
waste_fb_inventory_request = OpenapiClient::WasteFBInventoryRequest.new({quantity: 3.56, reason: 'reason_example'}) # WasteFBInventoryRequest | 

begin
  # Record waste
  result = api_instance.waste_fb_inventory(item_id, waste_fb_inventory_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->waste_fb_inventory: #{e}"
end
```

#### Using the waste_fb_inventory_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<FBInventoryItem>, Integer, Hash)> waste_fb_inventory_with_http_info(item_id, waste_fb_inventory_request)

```ruby
begin
  # Record waste
  data, status_code, headers = api_instance.waste_fb_inventory_with_http_info(item_id, waste_fb_inventory_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FBInventoryItem>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FoodBeverageApi->waste_fb_inventory_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** |  |  |
| **waste_fb_inventory_request** | [**WasteFBInventoryRequest**](WasteFBInventoryRequest.md) |  |  |

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

