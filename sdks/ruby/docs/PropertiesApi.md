# OpenapiClient::PropertiesApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_property**](PropertiesApi.md#create_property) | **POST** /properties | Create property |
| [**delete_property**](PropertiesApi.md#delete_property) | **DELETE** /properties/{propertyId} | Delete property |
| [**get_property**](PropertiesApi.md#get_property) | **GET** /properties/{propertyId} | Get property by ID |
| [**list_properties**](PropertiesApi.md#list_properties) | **GET** /properties | List properties |
| [**replace_inventory_unit**](PropertiesApi.md#replace_inventory_unit) | **PUT** /inventory-units/{unitId} | Replace inventory unit (full update) |
| [**replace_property**](PropertiesApi.md#replace_property) | **PUT** /properties/{propertyId} | Replace property (full update) |
| [**replace_rate_strategy**](PropertiesApi.md#replace_rate_strategy) | **PUT** /rate-strategies/{strategyId} | Replace rate strategy (full update) |
| [**update_inventory_unit**](PropertiesApi.md#update_inventory_unit) | **PATCH** /inventory-units/{unitId} | Update inventory unit (partial update) |
| [**update_property**](PropertiesApi.md#update_property) | **PATCH** /properties/{propertyId} | Update property (partial update) |
| [**update_rate_strategy**](PropertiesApi.md#update_rate_strategy) | **PATCH** /rate-strategies/{strategyId} | Update rate strategy (partial update) |


## create_property

> <Property> create_property(property, opts)

Create property

Create a new property. This is typically an administrative operation.  **Authorization:** Requires `write:properties` or `admin:all` scope  **Idempotency:** Supports idempotency via `Idempotency-Key` header 

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

api_instance = OpenapiClient::PropertiesApi.new
property = OpenapiClient::Property.new({name: 'Grand Plaza Hotel', classification: 'HOTEL', location: OpenapiClient::Model0.new({amount: '125.50', currency: 'USD'}), timezone: 'America/New_York'}) # Property | 
opts = {
  idempotency_key: '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | Unique key for idempotent operations (UUID recommended)
}

begin
  # Create property
  result = api_instance.create_property(property, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->create_property: #{e}"
end
```

#### Using the create_property_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Property>, Integer, Hash)> create_property_with_http_info(property, opts)

```ruby
begin
  # Create property
  data, status_code, headers = api_instance.create_property_with_http_info(property, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Property>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->create_property_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property** | [**Property**](Property.md) |  |  |
| **idempotency_key** | **String** | Unique key for idempotent operations (UUID recommended) | [optional] |

### Return type

[**Property**](Property.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## delete_property

> delete_property(property_id)

Delete property

Soft delete a property. Property status changes to CLOSED.  **Warning:** This operation cannot be undone. All future reservations will be cancelled. 

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

api_instance = OpenapiClient::PropertiesApi.new
property_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | Unique property identifier

begin
  # Delete property
  api_instance.delete_property(property_id)
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->delete_property: #{e}"
end
```

#### Using the delete_property_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_property_with_http_info(property_id)

```ruby
begin
  # Delete property
  data, status_code, headers = api_instance.delete_property_with_http_info(property_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->delete_property_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** | Unique property identifier |  |

### Return type

nil (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json


## get_property

> <Property> get_property(property_id, opts)

Get property by ID

Retrieve detailed information about a specific property

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

  # Configure Bearer authorization (JWT): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PropertiesApi.new
property_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | Unique property identifier
opts = {
  expand: 'property,guest,rateStrategy', # String | Comma-separated list of related resources to include
  if_none_match: 'if_none_match_example' # String | ETag for conditional requests
}

begin
  # Get property by ID
  result = api_instance.get_property(property_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->get_property: #{e}"
end
```

#### Using the get_property_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Property>, Integer, Hash)> get_property_with_http_info(property_id, opts)

```ruby
begin
  # Get property by ID
  data, status_code, headers = api_instance.get_property_with_http_info(property_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Property>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->get_property_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** | Unique property identifier |  |
| **expand** | **String** | Comma-separated list of related resources to include | [optional] |
| **if_none_match** | **String** | ETag for conditional requests | [optional] |

### Return type

[**Property**](Property.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_properties

> <ListProperties200Response> list_properties(opts)

List properties

Retrieve a paginated list of properties. Supports filtering, sorting, and field expansion.  **Authorization:** Requires `read:properties` scope  **Rate Limit:** 100 requests/minute 

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

  # Configure Bearer authorization (JWT): BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::PropertiesApi.new
opts = {
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example', # String | Cursor for pagination (opaque token)
  organization_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | Filter by organization
  operational_status: 'ACTIVE', # String | Filter by operational status
  classification: 'HOTEL', # String | Filter by property classification
  sort_by: 'sort_by_example', # String | Field to sort by
  sort_order: 'asc', # String | Sort order
  expand: 'property,guest,rateStrategy' # String | Comma-separated list of related resources to include
}

begin
  # List properties
  result = api_instance.list_properties(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->list_properties: #{e}"
end
```

#### Using the list_properties_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListProperties200Response>, Integer, Hash)> list_properties_with_http_info(opts)

```ruby
begin
  # List properties
  data, status_code, headers = api_instance.list_properties_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListProperties200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->list_properties_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |
| **organization_id** | **String** | Filter by organization | [optional] |
| **operational_status** | **String** | Filter by operational status | [optional] |
| **classification** | **String** | Filter by property classification | [optional] |
| **sort_by** | **String** | Field to sort by | [optional] |
| **sort_order** | **String** | Sort order | [optional][default to &#39;asc&#39;] |
| **expand** | **String** | Comma-separated list of related resources to include | [optional] |

### Return type

[**ListProperties200Response**](ListProperties200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## replace_inventory_unit

> Object replace_inventory_unit(unit_id, body, opts)

Replace inventory unit (full update)

Replace inventory unit with complete new details including type, status, and physical attributes

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

api_instance = OpenapiClient::PropertiesApi.new
unit_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace inventory unit (full update)
  result = api_instance.replace_inventory_unit(unit_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->replace_inventory_unit: #{e}"
end
```

#### Using the replace_inventory_unit_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> replace_inventory_unit_with_http_info(unit_id, body, opts)

```ruby
begin
  # Replace inventory unit (full update)
  data, status_code, headers = api_instance.replace_inventory_unit_with_http_info(unit_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->replace_inventory_unit_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **unit_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## replace_property

> <Property> replace_property(property_id, property, opts)

Replace property (full update)

Replace an existing property with a complete new representation. All fields must be provided. For partial updates, use PATCH instead.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts 

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

api_instance = OpenapiClient::PropertiesApi.new
property_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | Unique property identifier
property = OpenapiClient::Property.new({name: 'Grand Plaza Hotel', classification: 'HOTEL', location: OpenapiClient::Model0.new({amount: '125.50', currency: 'USD'}), timezone: 'America/New_York'}) # Property | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace property (full update)
  result = api_instance.replace_property(property_id, property, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->replace_property: #{e}"
end
```

#### Using the replace_property_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Property>, Integer, Hash)> replace_property_with_http_info(property_id, property, opts)

```ruby
begin
  # Replace property (full update)
  data, status_code, headers = api_instance.replace_property_with_http_info(property_id, property, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Property>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->replace_property_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** | Unique property identifier |  |
| **property** | [**Property**](Property.md) |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

[**Property**](Property.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## replace_rate_strategy

> <RateStrategy> replace_rate_strategy(strategy_id, rate_strategy, opts)

Replace rate strategy (full update)

Replace rate strategy with complete new pricing rules, restrictions, and yield management settings

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

api_instance = OpenapiClient::PropertiesApi.new
strategy_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
rate_strategy = OpenapiClient::RateStrategy.new({property_id: '550e8400-e29b-41d4-a716-446655440000', name: 'Standard Flexible Rate', strategy_type: 'STANDARD', pricing_model: OpenapiClient::Model0.new({amount: '125.50', currency: 'USD'})}) # RateStrategy | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace rate strategy (full update)
  result = api_instance.replace_rate_strategy(strategy_id, rate_strategy, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->replace_rate_strategy: #{e}"
end
```

#### Using the replace_rate_strategy_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<RateStrategy>, Integer, Hash)> replace_rate_strategy_with_http_info(strategy_id, rate_strategy, opts)

```ruby
begin
  # Replace rate strategy (full update)
  data, status_code, headers = api_instance.replace_rate_strategy_with_http_info(strategy_id, rate_strategy, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <RateStrategy>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->replace_rate_strategy_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **strategy_id** | **String** |  |  |
| **rate_strategy** | [**RateStrategy**](RateStrategy.md) |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

[**RateStrategy**](RateStrategy.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_inventory_unit

> Object update_inventory_unit(unit_id, body, opts)

Update inventory unit (partial update)

Update specific fields of an inventory unit.  **Common use cases:** - Change unit status (AVAILABLE → MAINTENANCE) - Update room features - Modify floor/location - Update amenities 

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

api_instance = OpenapiClient::PropertiesApi.new
unit_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update inventory unit (partial update)
  result = api_instance.update_inventory_unit(unit_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->update_inventory_unit: #{e}"
end
```

#### Using the update_inventory_unit_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_inventory_unit_with_http_info(unit_id, body, opts)

```ruby
begin
  # Update inventory unit (partial update)
  data, status_code, headers = api_instance.update_inventory_unit_with_http_info(unit_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->update_inventory_unit_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **unit_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_property

> <Property> update_property(property_id, body, opts)

Update property (partial update)

Partially update a property. Only provided fields will be updated. This is the recommended method for most updates.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts  **Example:** Update only the property name and contact email: ```json {   \"name\": \"New Property Name\",   \"contactInfo\": {     \"email\": \"newemail@property.com\"   } } ``` 

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

api_instance = OpenapiClient::PropertiesApi.new
property_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | Unique property identifier
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update property (partial update)
  result = api_instance.update_property(property_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->update_property: #{e}"
end
```

#### Using the update_property_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Property>, Integer, Hash)> update_property_with_http_info(property_id, body, opts)

```ruby
begin
  # Update property (partial update)
  data, status_code, headers = api_instance.update_property_with_http_info(property_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Property>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->update_property_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** | Unique property identifier |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

[**Property**](Property.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_rate_strategy

> <RateStrategy> update_rate_strategy(strategy_id, body, opts)

Update rate strategy (partial update)

Update specific fields of a rate strategy.  **Common use cases:** - Adjust base rate - Update seasonal modifiers - Change minimum stay requirements - Modify cancellation policy 

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

api_instance = OpenapiClient::PropertiesApi.new
strategy_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update rate strategy (partial update)
  result = api_instance.update_rate_strategy(strategy_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->update_rate_strategy: #{e}"
end
```

#### Using the update_rate_strategy_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<RateStrategy>, Integer, Hash)> update_rate_strategy_with_http_info(strategy_id, body, opts)

```ruby
begin
  # Update rate strategy (partial update)
  data, status_code, headers = api_instance.update_rate_strategy_with_http_info(strategy_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <RateStrategy>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PropertiesApi->update_rate_strategy_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **strategy_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

[**RateStrategy**](RateStrategy.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

