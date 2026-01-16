# OpenapiClient::InventoryApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_inventory_unit**](InventoryApi.md#create_inventory_unit) | **POST** /properties/{propertyId}/inventory-units | Create inventory unit |
| [**create_unit_type**](InventoryApi.md#create_unit_type) | **POST** /properties/{propertyId}/unit-types | Create unit type |
| [**get_unit_type**](InventoryApi.md#get_unit_type) | **GET** /unit-types/{unitTypeId} | Get unit type details |
| [**list_inventory_units**](InventoryApi.md#list_inventory_units) | **GET** /properties/{propertyId}/inventory-units | List inventory units for property |
| [**list_unit_types**](InventoryApi.md#list_unit_types) | **GET** /properties/{propertyId}/unit-types | List unit types |
| [**replace_unit_type**](InventoryApi.md#replace_unit_type) | **PUT** /unit-types/{unitTypeId} | Replace unit type (full update) |
| [**update_unit_type**](InventoryApi.md#update_unit_type) | **PATCH** /unit-types/{unitTypeId} | Update unit type (partial update) |


## create_inventory_unit

> <InventoryUnit> create_inventory_unit(property_id, inventory_unit, opts)

Create inventory unit

Add a new inventory unit to the property

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

api_instance = OpenapiClient::InventoryApi.new
property_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | Unique property identifier
inventory_unit = OpenapiClient::InventoryUnit.new({property_id: '550e8400-e29b-41d4-a716-446655440000', unit_number: '101', unit_type_id: '880e8400-e29b-41d4-a716-446655440000'}) # InventoryUnit | 
opts = {
  idempotency_key: '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | Unique key for idempotent operations (UUID recommended)
}

begin
  # Create inventory unit
  result = api_instance.create_inventory_unit(property_id, inventory_unit, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling InventoryApi->create_inventory_unit: #{e}"
end
```

#### Using the create_inventory_unit_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<InventoryUnit>, Integer, Hash)> create_inventory_unit_with_http_info(property_id, inventory_unit, opts)

```ruby
begin
  # Create inventory unit
  data, status_code, headers = api_instance.create_inventory_unit_with_http_info(property_id, inventory_unit, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <InventoryUnit>
rescue OpenapiClient::ApiError => e
  puts "Error when calling InventoryApi->create_inventory_unit_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** | Unique property identifier |  |
| **inventory_unit** | [**InventoryUnit**](InventoryUnit.md) |  |  |
| **idempotency_key** | **String** | Unique key for idempotent operations (UUID recommended) | [optional] |

### Return type

[**InventoryUnit**](InventoryUnit.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## create_unit_type

> <UnitType> create_unit_type(property_id, unit_type)

Create unit type

Create a new unit type for a property

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

api_instance = OpenapiClient::InventoryApi.new
property_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | Unique property identifier
unit_type = OpenapiClient::UnitType.new({name: 'Deluxe King Room', capacity: OpenapiClient::Model0.new({amount: '125.50', currency: 'USD'})}) # UnitType | 

begin
  # Create unit type
  result = api_instance.create_unit_type(property_id, unit_type)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling InventoryApi->create_unit_type: #{e}"
end
```

#### Using the create_unit_type_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UnitType>, Integer, Hash)> create_unit_type_with_http_info(property_id, unit_type)

```ruby
begin
  # Create unit type
  data, status_code, headers = api_instance.create_unit_type_with_http_info(property_id, unit_type)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UnitType>
rescue OpenapiClient::ApiError => e
  puts "Error when calling InventoryApi->create_unit_type_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** | Unique property identifier |  |
| **unit_type** | [**UnitType**](UnitType.md) |  |  |

### Return type

[**UnitType**](UnitType.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## get_unit_type

> <UnitType> get_unit_type(unit_type_id)

Get unit type details

Retrieve details of a specific unit type

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

api_instance = OpenapiClient::InventoryApi.new
unit_type_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get unit type details
  result = api_instance.get_unit_type(unit_type_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling InventoryApi->get_unit_type: #{e}"
end
```

#### Using the get_unit_type_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UnitType>, Integer, Hash)> get_unit_type_with_http_info(unit_type_id)

```ruby
begin
  # Get unit type details
  data, status_code, headers = api_instance.get_unit_type_with_http_info(unit_type_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UnitType>
rescue OpenapiClient::ApiError => e
  puts "Error when calling InventoryApi->get_unit_type_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **unit_type_id** | **String** |  |  |

### Return type

[**UnitType**](UnitType.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_inventory_units

> <ListInventoryUnits200Response> list_inventory_units(property_id, opts)

List inventory units for property

Retrieve all inventory units (rooms, beds, suites) for a property

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

api_instance = OpenapiClient::InventoryApi.new
property_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | Unique property identifier
opts = {
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example', # String | Cursor for pagination (opaque token)
  unit_type_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | Filter by unit type
  operational_status: 'AVAILABLE', # String | Filter by operational status
  floor: 56 # Integer | Filter by floor number
}

begin
  # List inventory units for property
  result = api_instance.list_inventory_units(property_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling InventoryApi->list_inventory_units: #{e}"
end
```

#### Using the list_inventory_units_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListInventoryUnits200Response>, Integer, Hash)> list_inventory_units_with_http_info(property_id, opts)

```ruby
begin
  # List inventory units for property
  data, status_code, headers = api_instance.list_inventory_units_with_http_info(property_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListInventoryUnits200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling InventoryApi->list_inventory_units_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** | Unique property identifier |  |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |
| **unit_type_id** | **String** | Filter by unit type | [optional] |
| **operational_status** | **String** | Filter by operational status | [optional] |
| **floor** | **Integer** | Filter by floor number | [optional] |

### Return type

[**ListInventoryUnits200Response**](ListInventoryUnits200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_unit_types

> <ListUnitTypes200Response> list_unit_types(property_id, opts)

List unit types

Retrieve all unit types for a property

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

api_instance = OpenapiClient::InventoryApi.new
property_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | Unique property identifier
opts = {
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List unit types
  result = api_instance.list_unit_types(property_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling InventoryApi->list_unit_types: #{e}"
end
```

#### Using the list_unit_types_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListUnitTypes200Response>, Integer, Hash)> list_unit_types_with_http_info(property_id, opts)

```ruby
begin
  # List unit types
  data, status_code, headers = api_instance.list_unit_types_with_http_info(property_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListUnitTypes200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling InventoryApi->list_unit_types_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** | Unique property identifier |  |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**ListUnitTypes200Response**](ListUnitTypes200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## replace_unit_type

> <UnitType> replace_unit_type(unit_type_id, unit_type, opts)

Replace unit type (full update)

Replace unit type with complete new details

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

api_instance = OpenapiClient::InventoryApi.new
unit_type_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
unit_type = OpenapiClient::UnitType.new({name: 'Deluxe King Room', capacity: OpenapiClient::Model0.new({amount: '125.50', currency: 'USD'})}) # UnitType | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace unit type (full update)
  result = api_instance.replace_unit_type(unit_type_id, unit_type, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling InventoryApi->replace_unit_type: #{e}"
end
```

#### Using the replace_unit_type_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UnitType>, Integer, Hash)> replace_unit_type_with_http_info(unit_type_id, unit_type, opts)

```ruby
begin
  # Replace unit type (full update)
  data, status_code, headers = api_instance.replace_unit_type_with_http_info(unit_type_id, unit_type, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UnitType>
rescue OpenapiClient::ApiError => e
  puts "Error when calling InventoryApi->replace_unit_type_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **unit_type_id** | **String** |  |  |
| **unit_type** | [**UnitType**](UnitType.md) |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

[**UnitType**](UnitType.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_unit_type

> <UnitType> update_unit_type(unit_type_id, body, opts)

Update unit type (partial update)

Update specific fields of a unit type

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

api_instance = OpenapiClient::InventoryApi.new
unit_type_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update unit type (partial update)
  result = api_instance.update_unit_type(unit_type_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling InventoryApi->update_unit_type: #{e}"
end
```

#### Using the update_unit_type_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UnitType>, Integer, Hash)> update_unit_type_with_http_info(unit_type_id, body, opts)

```ruby
begin
  # Update unit type (partial update)
  data, status_code, headers = api_instance.update_unit_type_with_http_info(unit_type_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UnitType>
rescue OpenapiClient::ApiError => e
  puts "Error when calling InventoryApi->update_unit_type_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **unit_type_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

[**UnitType**](UnitType.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

