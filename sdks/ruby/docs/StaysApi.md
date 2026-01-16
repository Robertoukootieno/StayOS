# OpenapiClient::StaysApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**add_stay_charge**](StaysApi.md#add_stay_charge) | **POST** /stays/{stayId}/charges | Add incidental charge |
| [**checkout_stay**](StaysApi.md#checkout_stay) | **POST** /stays/{stayId}/checkout | Check-out guest |
| [**create_stay**](StaysApi.md#create_stay) | **POST** /stays | Create stay (check-in) |
| [**deactivate_key_card**](StaysApi.md#deactivate_key_card) | **DELETE** /stays/{stayId}/key-cards/{cardId} | Deactivate key card |
| [**extend_stay**](StaysApi.md#extend_stay) | **POST** /stays/{stayId}/extend | Extend stay |
| [**get_stay**](StaysApi.md#get_stay) | **GET** /stays/{stayId} | Get stay details |
| [**issue_key_card**](StaysApi.md#issue_key_card) | **POST** /stays/{stayId}/key-cards | Issue key card |
| [**list_stays**](StaysApi.md#list_stays) | **GET** /stays | List active stays |
| [**replace_stay**](StaysApi.md#replace_stay) | **PUT** /stays/{stayId} | Replace stay (full update) |
| [**update_stay**](StaysApi.md#update_stay) | **PATCH** /stays/{stayId} | Update stay (partial update) |


## add_stay_charge

> <LineItem> add_stay_charge(stay_id, line_item)

Add incidental charge

Add an incidental charge to the stay

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

api_instance = OpenapiClient::StaysApi.new
stay_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
line_item = OpenapiClient::LineItem.new({line_item_id: 'line_item_id_example', description: 'Room charge - Night 1', category: 'ROOM', amount: OpenapiClient::Model0.new({amount: '125.50', currency: 'USD'})}) # LineItem | 

begin
  # Add incidental charge
  result = api_instance.add_stay_charge(stay_id, line_item)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->add_stay_charge: #{e}"
end
```

#### Using the add_stay_charge_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<LineItem>, Integer, Hash)> add_stay_charge_with_http_info(stay_id, line_item)

```ruby
begin
  # Add incidental charge
  data, status_code, headers = api_instance.add_stay_charge_with_http_info(stay_id, line_item)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <LineItem>
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->add_stay_charge_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stay_id** | **String** |  |  |
| **line_item** | [**LineItem**](LineItem.md) |  |  |

### Return type

[**LineItem**](LineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## checkout_stay

> <Stay> checkout_stay(stay_id, opts)

Check-out guest

Process guest checkout

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

api_instance = OpenapiClient::StaysApi.new
stay_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  checkout_stay_request: OpenapiClient::CheckoutStayRequest.new # CheckoutStayRequest | 
}

begin
  # Check-out guest
  result = api_instance.checkout_stay(stay_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->checkout_stay: #{e}"
end
```

#### Using the checkout_stay_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Stay>, Integer, Hash)> checkout_stay_with_http_info(stay_id, opts)

```ruby
begin
  # Check-out guest
  data, status_code, headers = api_instance.checkout_stay_with_http_info(stay_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Stay>
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->checkout_stay_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stay_id** | **String** |  |  |
| **checkout_stay_request** | [**CheckoutStayRequest**](CheckoutStayRequest.md) |  | [optional] |

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## create_stay

> <Stay> create_stay(stay)

Create stay (check-in)

Create a new stay when guest checks in

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

api_instance = OpenapiClient::StaysApi.new
stay = OpenapiClient::Stay.new({stay_id: 'aa0e8400-e29b-41d4-a716-446655440000', reservation_id: '550e8400-e29b-41d4-a716-446655440000', property_id: '660e8400-e29b-41d4-a716-446655440000', inventory_unit_id: '770e8400-e29b-41d4-a716-446655440000', guest_id: '880e8400-e29b-41d4-a716-446655440000', check_in_date: Time.parse('2025-12-25T15:30:00Z'), expected_check_out_date: Date.parse('2025-12-28'), status: 'CHECKED_IN'}) # Stay | 

begin
  # Create stay (check-in)
  result = api_instance.create_stay(stay)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->create_stay: #{e}"
end
```

#### Using the create_stay_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Stay>, Integer, Hash)> create_stay_with_http_info(stay)

```ruby
begin
  # Create stay (check-in)
  data, status_code, headers = api_instance.create_stay_with_http_info(stay)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Stay>
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->create_stay_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stay** | [**Stay**](Stay.md) |  |  |

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## deactivate_key_card

> deactivate_key_card(stay_id, card_id)

Deactivate key card

Deactivate a key card

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

api_instance = OpenapiClient::StaysApi.new
stay_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
card_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Deactivate key card
  api_instance.deactivate_key_card(stay_id, card_id)
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->deactivate_key_card: #{e}"
end
```

#### Using the deactivate_key_card_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> deactivate_key_card_with_http_info(stay_id, card_id)

```ruby
begin
  # Deactivate key card
  data, status_code, headers = api_instance.deactivate_key_card_with_http_info(stay_id, card_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->deactivate_key_card_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stay_id** | **String** |  |  |
| **card_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json


## extend_stay

> <Stay> extend_stay(stay_id, extend_stay_request)

Extend stay

Extend guest stay to a new checkout date

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

api_instance = OpenapiClient::StaysApi.new
stay_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
extend_stay_request = OpenapiClient::ExtendStayRequest.new({new_check_out_date: Date.today}) # ExtendStayRequest | 

begin
  # Extend stay
  result = api_instance.extend_stay(stay_id, extend_stay_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->extend_stay: #{e}"
end
```

#### Using the extend_stay_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Stay>, Integer, Hash)> extend_stay_with_http_info(stay_id, extend_stay_request)

```ruby
begin
  # Extend stay
  data, status_code, headers = api_instance.extend_stay_with_http_info(stay_id, extend_stay_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Stay>
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->extend_stay_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stay_id** | **String** |  |  |
| **extend_stay_request** | [**ExtendStayRequest**](ExtendStayRequest.md) |  |  |

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## get_stay

> <Stay> get_stay(stay_id)

Get stay details

Retrieve details of a specific stay

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

api_instance = OpenapiClient::StaysApi.new
stay_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get stay details
  result = api_instance.get_stay(stay_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->get_stay: #{e}"
end
```

#### Using the get_stay_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Stay>, Integer, Hash)> get_stay_with_http_info(stay_id)

```ruby
begin
  # Get stay details
  data, status_code, headers = api_instance.get_stay_with_http_info(stay_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Stay>
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->get_stay_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stay_id** | **String** |  |  |

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## issue_key_card

> <KeyCard> issue_key_card(stay_id, opts)

Issue key card

Issue a new key card for the stay

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

api_instance = OpenapiClient::StaysApi.new
stay_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  key_card: OpenapiClient::KeyCard.new({card_id: 'card_id_example', card_number: 'KC-12345678', status: 'ACTIVE'}) # KeyCard | 
}

begin
  # Issue key card
  result = api_instance.issue_key_card(stay_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->issue_key_card: #{e}"
end
```

#### Using the issue_key_card_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<KeyCard>, Integer, Hash)> issue_key_card_with_http_info(stay_id, opts)

```ruby
begin
  # Issue key card
  data, status_code, headers = api_instance.issue_key_card_with_http_info(stay_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <KeyCard>
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->issue_key_card_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stay_id** | **String** |  |  |
| **key_card** | [**KeyCard**](KeyCard.md) |  | [optional] |

### Return type

[**KeyCard**](KeyCard.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## list_stays

> <ListStays200Response> list_stays(opts)

List active stays

Retrieve all active guest stays

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

api_instance = OpenapiClient::StaysApi.new
opts = {
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example', # String | Cursor for pagination (opaque token)
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  status: 'CHECKED_IN' # String | 
}

begin
  # List active stays
  result = api_instance.list_stays(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->list_stays: #{e}"
end
```

#### Using the list_stays_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListStays200Response>, Integer, Hash)> list_stays_with_http_info(opts)

```ruby
begin
  # List active stays
  data, status_code, headers = api_instance.list_stays_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListStays200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->list_stays_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |
| **property_id** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |

### Return type

[**ListStays200Response**](ListStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## replace_stay

> <Stay> replace_stay(stay_id, stay, opts)

Replace stay (full update)

Replace stay with complete new details

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

api_instance = OpenapiClient::StaysApi.new
stay_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
stay = OpenapiClient::Stay.new({stay_id: 'aa0e8400-e29b-41d4-a716-446655440000', reservation_id: '550e8400-e29b-41d4-a716-446655440000', property_id: '660e8400-e29b-41d4-a716-446655440000', inventory_unit_id: '770e8400-e29b-41d4-a716-446655440000', guest_id: '880e8400-e29b-41d4-a716-446655440000', check_in_date: Time.parse('2025-12-25T15:30:00Z'), expected_check_out_date: Date.parse('2025-12-28'), status: 'CHECKED_IN'}) # Stay | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace stay (full update)
  result = api_instance.replace_stay(stay_id, stay, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->replace_stay: #{e}"
end
```

#### Using the replace_stay_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Stay>, Integer, Hash)> replace_stay_with_http_info(stay_id, stay, opts)

```ruby
begin
  # Replace stay (full update)
  data, status_code, headers = api_instance.replace_stay_with_http_info(stay_id, stay, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Stay>
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->replace_stay_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stay_id** | **String** |  |  |
| **stay** | [**Stay**](Stay.md) |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_stay

> <Stay> update_stay(stay_id, body, opts)

Update stay (partial update)

Update specific fields of a stay

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

api_instance = OpenapiClient::StaysApi.new
stay_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update stay (partial update)
  result = api_instance.update_stay(stay_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->update_stay: #{e}"
end
```

#### Using the update_stay_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Stay>, Integer, Hash)> update_stay_with_http_info(stay_id, body, opts)

```ruby
begin
  # Update stay (partial update)
  data, status_code, headers = api_instance.update_stay_with_http_info(stay_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Stay>
rescue OpenapiClient::ApiError => e
  puts "Error when calling StaysApi->update_stay_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stay_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

