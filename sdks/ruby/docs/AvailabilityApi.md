# OpenapiClient::AvailabilityApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_inventory_block**](AvailabilityApi.md#create_inventory_block) | **POST** /availability/block | Block inventory |
| [**delete_inventory_block**](AvailabilityApi.md#delete_inventory_block) | **DELETE** /availability/block/{blockId} | Remove inventory block |
| [**get_availability_calendar**](AvailabilityApi.md#get_availability_calendar) | **GET** /availability/calendar | Get availability calendar |
| [**search_availability**](AvailabilityApi.md#search_availability) | **POST** /availability/search | Search availability |
| [**update_availability_calendar**](AvailabilityApi.md#update_availability_calendar) | **PUT** /availability/calendar | Update availability calendar (bulk) |


## create_inventory_block

> <CreateInventoryBlock201Response> create_inventory_block(create_inventory_block_request)

Block inventory

Create an inventory block (for groups, maintenance, etc.)

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

api_instance = OpenapiClient::AvailabilityApi.new
create_inventory_block_request = OpenapiClient::CreateInventoryBlockRequest.new({property_id: 'property_id_example', start_date: Date.today, end_date: Date.today, quantity: 37, reason: 'MAINTENANCE'}) # CreateInventoryBlockRequest | 

begin
  # Block inventory
  result = api_instance.create_inventory_block(create_inventory_block_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AvailabilityApi->create_inventory_block: #{e}"
end
```

#### Using the create_inventory_block_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateInventoryBlock201Response>, Integer, Hash)> create_inventory_block_with_http_info(create_inventory_block_request)

```ruby
begin
  # Block inventory
  data, status_code, headers = api_instance.create_inventory_block_with_http_info(create_inventory_block_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateInventoryBlock201Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling AvailabilityApi->create_inventory_block_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_inventory_block_request** | [**CreateInventoryBlockRequest**](CreateInventoryBlockRequest.md) |  |  |

### Return type

[**CreateInventoryBlock201Response**](CreateInventoryBlock201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## delete_inventory_block

> delete_inventory_block(block_id)

Remove inventory block

Remove an existing inventory block

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

api_instance = OpenapiClient::AvailabilityApi.new
block_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Remove inventory block
  api_instance.delete_inventory_block(block_id)
rescue OpenapiClient::ApiError => e
  puts "Error when calling AvailabilityApi->delete_inventory_block: #{e}"
end
```

#### Using the delete_inventory_block_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_inventory_block_with_http_info(block_id)

```ruby
begin
  # Remove inventory block
  data, status_code, headers = api_instance.delete_inventory_block_with_http_info(block_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling AvailabilityApi->delete_inventory_block_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **block_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json


## get_availability_calendar

> <AvailabilityCalendar> get_availability_calendar(property_id, start_date, end_date, opts)

Get availability calendar

Retrieve availability calendar for specified date range

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

api_instance = OpenapiClient::AvailabilityApi.new
property_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
start_date = Date.parse('2013-10-20') # Date | 
end_date = Date.parse('2013-10-20') # Date | 
opts = {
  unit_type_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
}

begin
  # Get availability calendar
  result = api_instance.get_availability_calendar(property_id, start_date, end_date, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AvailabilityApi->get_availability_calendar: #{e}"
end
```

#### Using the get_availability_calendar_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<AvailabilityCalendar>, Integer, Hash)> get_availability_calendar_with_http_info(property_id, start_date, end_date, opts)

```ruby
begin
  # Get availability calendar
  data, status_code, headers = api_instance.get_availability_calendar_with_http_info(property_id, start_date, end_date, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AvailabilityCalendar>
rescue OpenapiClient::ApiError => e
  puts "Error when calling AvailabilityApi->get_availability_calendar_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  |  |
| **start_date** | **Date** |  |  |
| **end_date** | **Date** |  |  |
| **unit_type_id** | **String** |  | [optional] |

### Return type

[**AvailabilityCalendar**](AvailabilityCalendar.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## search_availability

> <SearchAvailability200Response> search_availability(search_availability_request)

Search availability

Search for available inventory across properties based on criteria.  This is the primary endpoint for booking engines and search interfaces.  **Performance:** Optimized for sub-200ms response time  **Caching:** Results cached for 5 minutes 

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

api_instance = OpenapiClient::AvailabilityApi.new
search_availability_request = OpenapiClient::SearchAvailabilityRequest.new({check_in_date: Date.parse('2025-12-20'), check_out_date: Date.parse('2025-12-25'), occupancy: OpenapiClient::SearchAvailabilityRequestOccupancy.new({adults: 2})}) # SearchAvailabilityRequest | 

begin
  # Search availability
  result = api_instance.search_availability(search_availability_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AvailabilityApi->search_availability: #{e}"
end
```

#### Using the search_availability_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SearchAvailability200Response>, Integer, Hash)> search_availability_with_http_info(search_availability_request)

```ruby
begin
  # Search availability
  data, status_code, headers = api_instance.search_availability_with_http_info(search_availability_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SearchAvailability200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling AvailabilityApi->search_availability_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **search_availability_request** | [**SearchAvailabilityRequest**](SearchAvailabilityRequest.md) |  |  |

### Return type

[**SearchAvailability200Response**](SearchAvailability200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_availability_calendar

> <UpdateAvailabilityCalendar200Response> update_availability_calendar(update_availability_calendar_request)

Update availability calendar (bulk)

Bulk update availability for multiple dates

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

api_instance = OpenapiClient::AvailabilityApi.new
update_availability_calendar_request = OpenapiClient::UpdateAvailabilityCalendarRequest.new # UpdateAvailabilityCalendarRequest | 

begin
  # Update availability calendar (bulk)
  result = api_instance.update_availability_calendar(update_availability_calendar_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AvailabilityApi->update_availability_calendar: #{e}"
end
```

#### Using the update_availability_calendar_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdateAvailabilityCalendar200Response>, Integer, Hash)> update_availability_calendar_with_http_info(update_availability_calendar_request)

```ruby
begin
  # Update availability calendar (bulk)
  data, status_code, headers = api_instance.update_availability_calendar_with_http_info(update_availability_calendar_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdateAvailabilityCalendar200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling AvailabilityApi->update_availability_calendar_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **update_availability_calendar_request** | [**UpdateAvailabilityCalendarRequest**](UpdateAvailabilityCalendarRequest.md) |  |  |

### Return type

[**UpdateAvailabilityCalendar200Response**](UpdateAvailabilityCalendar200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

