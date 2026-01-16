# OpenapiClient::ChannelsApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_channel**](ChannelsApi.md#create_channel) | **POST** /channels | Create channel integration |
| [**delete_channel**](ChannelsApi.md#delete_channel) | **DELETE** /channels/{channelId} | Disconnect channel |
| [**get_channel_mappings**](ChannelsApi.md#get_channel_mappings) | **GET** /channels/{channelId}/mappings | Get channel mappings |
| [**get_channel_performance**](ChannelsApi.md#get_channel_performance) | **GET** /channels/{channelId}/performance | Get channel performance |
| [**get_channel_sync_status**](ChannelsApi.md#get_channel_sync_status) | **GET** /channels/{channelId}/sync-status | Get sync status |
| [**list_channels**](ChannelsApi.md#list_channels) | **GET** /channels | List channel integrations |
| [**replace_channel**](ChannelsApi.md#replace_channel) | **PUT** /channels/{channelId} | Replace channel configuration (full update) |
| [**sync_channel**](ChannelsApi.md#sync_channel) | **POST** /channels/{channelId}/sync | Sync channel data |
| [**test_channel_connection**](ChannelsApi.md#test_channel_connection) | **POST** /channels/{channelId}/test | Test channel connection |
| [**update_channel**](ChannelsApi.md#update_channel) | **PATCH** /channels/{channelId} | Update channel configuration (partial update) |
| [**update_channel_mappings**](ChannelsApi.md#update_channel_mappings) | **PUT** /channels/{channelId}/mappings | Update channel mappings |


## create_channel

> Object create_channel(body)

Create channel integration

Create a new channel manager integration for OTA distribution (Booking.com, Expedia, etc.)

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

api_instance = OpenapiClient::ChannelsApi.new
body = { ... } # Object | 

begin
  # Create channel integration
  result = api_instance.create_channel(body)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->create_channel: #{e}"
end
```

#### Using the create_channel_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_channel_with_http_info(body)

```ruby
begin
  # Create channel integration
  data, status_code, headers = api_instance.create_channel_with_http_info(body)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->create_channel_with_http_info: #{e}"
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


## delete_channel

> delete_channel(channel_id)

Disconnect channel

Disconnect and remove a channel integration

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

api_instance = OpenapiClient::ChannelsApi.new
channel_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Disconnect channel
  api_instance.delete_channel(channel_id)
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->delete_channel: #{e}"
end
```

#### Using the delete_channel_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_channel_with_http_info(channel_id)

```ruby
begin
  # Disconnect channel
  data, status_code, headers = api_instance.delete_channel_with_http_info(channel_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->delete_channel_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json


## get_channel_mappings

> <ChannelMapping> get_channel_mappings(channel_id)

Get channel mappings

Get property/room type mappings for the channel

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

api_instance = OpenapiClient::ChannelsApi.new
channel_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get channel mappings
  result = api_instance.get_channel_mappings(channel_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->get_channel_mappings: #{e}"
end
```

#### Using the get_channel_mappings_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ChannelMapping>, Integer, Hash)> get_channel_mappings_with_http_info(channel_id)

```ruby
begin
  # Get channel mappings
  data, status_code, headers = api_instance.get_channel_mappings_with_http_info(channel_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ChannelMapping>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->get_channel_mappings_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel_id** | **String** |  |  |

### Return type

[**ChannelMapping**](ChannelMapping.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_channel_performance

> <ChannelPerformance> get_channel_performance(channel_id, opts)

Get channel performance

Get performance metrics for the channel

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

api_instance = OpenapiClient::ChannelsApi.new
channel_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  start_date: Date.parse('2013-10-20'), # Date | 
  end_date: Date.parse('2013-10-20') # Date | 
}

begin
  # Get channel performance
  result = api_instance.get_channel_performance(channel_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->get_channel_performance: #{e}"
end
```

#### Using the get_channel_performance_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ChannelPerformance>, Integer, Hash)> get_channel_performance_with_http_info(channel_id, opts)

```ruby
begin
  # Get channel performance
  data, status_code, headers = api_instance.get_channel_performance_with_http_info(channel_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ChannelPerformance>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->get_channel_performance_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel_id** | **String** |  |  |
| **start_date** | **Date** |  | [optional] |
| **end_date** | **Date** |  | [optional] |

### Return type

[**ChannelPerformance**](ChannelPerformance.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_channel_sync_status

> <GetChannelSyncStatus200Response> get_channel_sync_status(channel_id)

Get sync status

Get the status of channel synchronization

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

api_instance = OpenapiClient::ChannelsApi.new
channel_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get sync status
  result = api_instance.get_channel_sync_status(channel_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->get_channel_sync_status: #{e}"
end
```

#### Using the get_channel_sync_status_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetChannelSyncStatus200Response>, Integer, Hash)> get_channel_sync_status_with_http_info(channel_id)

```ruby
begin
  # Get sync status
  data, status_code, headers = api_instance.get_channel_sync_status_with_http_info(channel_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetChannelSyncStatus200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->get_channel_sync_status_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel_id** | **String** |  |  |

### Return type

[**GetChannelSyncStatus200Response**](GetChannelSyncStatus200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_channels

> <GetGuestStays200Response> list_channels(opts)

List channel integrations

List all configured channel manager integrations with connection status and sync settings

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

api_instance = OpenapiClient::ChannelsApi.new
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  is_active: true, # Boolean | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List channel integrations
  result = api_instance.list_channels(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->list_channels: #{e}"
end
```

#### Using the list_channels_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetGuestStays200Response>, Integer, Hash)> list_channels_with_http_info(opts)

```ruby
begin
  # List channel integrations
  data, status_code, headers = api_instance.list_channels_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetGuestStays200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->list_channels_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  | [optional] |
| **is_active** | **Boolean** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## replace_channel

> Object replace_channel(channel_id, body, opts)

Replace channel configuration (full update)

Replace channel configuration with complete new settings including credentials, mappings, and sync preferences

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

api_instance = OpenapiClient::ChannelsApi.new
channel_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace channel configuration (full update)
  result = api_instance.replace_channel(channel_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->replace_channel: #{e}"
end
```

#### Using the replace_channel_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> replace_channel_with_http_info(channel_id, body, opts)

```ruby
begin
  # Replace channel configuration (full update)
  data, status_code, headers = api_instance.replace_channel_with_http_info(channel_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->replace_channel_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## sync_channel

> <SyncChannel202Response> sync_channel(channel_id, opts)

Sync channel data

Trigger a manual sync with the channel

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

api_instance = OpenapiClient::ChannelsApi.new
channel_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  sync_channel_request: OpenapiClient::SyncChannelRequest.new # SyncChannelRequest | 
}

begin
  # Sync channel data
  result = api_instance.sync_channel(channel_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->sync_channel: #{e}"
end
```

#### Using the sync_channel_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SyncChannel202Response>, Integer, Hash)> sync_channel_with_http_info(channel_id, opts)

```ruby
begin
  # Sync channel data
  data, status_code, headers = api_instance.sync_channel_with_http_info(channel_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SyncChannel202Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->sync_channel_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel_id** | **String** |  |  |
| **sync_channel_request** | [**SyncChannelRequest**](SyncChannelRequest.md) |  | [optional] |

### Return type

[**SyncChannel202Response**](SyncChannel202Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## test_channel_connection

> <TestChannelConnection200Response> test_channel_connection(channel_id)

Test channel connection

Test the connection to a channel integration

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

api_instance = OpenapiClient::ChannelsApi.new
channel_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Test channel connection
  result = api_instance.test_channel_connection(channel_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->test_channel_connection: #{e}"
end
```

#### Using the test_channel_connection_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<TestChannelConnection200Response>, Integer, Hash)> test_channel_connection_with_http_info(channel_id)

```ruby
begin
  # Test channel connection
  data, status_code, headers = api_instance.test_channel_connection_with_http_info(channel_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TestChannelConnection200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->test_channel_connection_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel_id** | **String** |  |  |

### Return type

[**TestChannelConnection200Response**](TestChannelConnection200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## update_channel

> Object update_channel(channel_id, body, opts)

Update channel configuration (partial update)

Update specific channel configuration fields.  **Common use cases:** - Update API credentials - Change sync settings - Modify rate markup - Update availability settings 

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

api_instance = OpenapiClient::ChannelsApi.new
channel_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update channel configuration (partial update)
  result = api_instance.update_channel(channel_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->update_channel: #{e}"
end
```

#### Using the update_channel_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_channel_with_http_info(channel_id, body, opts)

```ruby
begin
  # Update channel configuration (partial update)
  data, status_code, headers = api_instance.update_channel_with_http_info(channel_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->update_channel_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_channel_mappings

> <ChannelMapping> update_channel_mappings(channel_id, channel_mapping)

Update channel mappings

Update property/room type mappings for the channel

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

api_instance = OpenapiClient::ChannelsApi.new
channel_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
channel_mapping = OpenapiClient::ChannelMapping.new({channel_id: 'channel_id_example', property_id: 'property_id_example'}) # ChannelMapping | 

begin
  # Update channel mappings
  result = api_instance.update_channel_mappings(channel_id, channel_mapping)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->update_channel_mappings: #{e}"
end
```

#### Using the update_channel_mappings_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ChannelMapping>, Integer, Hash)> update_channel_mappings_with_http_info(channel_id, channel_mapping)

```ruby
begin
  # Update channel mappings
  data, status_code, headers = api_instance.update_channel_mappings_with_http_info(channel_id, channel_mapping)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ChannelMapping>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ChannelsApi->update_channel_mappings_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel_id** | **String** |  |  |
| **channel_mapping** | [**ChannelMapping**](ChannelMapping.md) |  |  |

### Return type

[**ChannelMapping**](ChannelMapping.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

