# OpenapiClient::WebhooksApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_webhook**](WebhooksApi.md#create_webhook) | **POST** /webhooks | Create webhook |
| [**delete_webhook**](WebhooksApi.md#delete_webhook) | **DELETE** /webhooks/{webhookId} | Delete webhook |
| [**get_webhook**](WebhooksApi.md#get_webhook) | **GET** /webhooks/{webhookId} | Get webhook details |
| [**get_webhook_deliveries**](WebhooksApi.md#get_webhook_deliveries) | **GET** /webhooks/{webhookId}/deliveries | Get webhook deliveries |
| [**list_webhooks**](WebhooksApi.md#list_webhooks) | **GET** /webhooks | List webhooks |
| [**replace_webhook**](WebhooksApi.md#replace_webhook) | **PUT** /webhooks/{webhookId} | Replace webhook configuration (full update) |
| [**test_webhook**](WebhooksApi.md#test_webhook) | **POST** /webhooks/{webhookId}/test | Test webhook |
| [**update_webhook**](WebhooksApi.md#update_webhook) | **PATCH** /webhooks/{webhookId} | Update webhook configuration (partial update) |


## create_webhook

> Object create_webhook(create_webhook_request)

Create webhook

Create a new webhook subscription for real-time event notifications

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

api_instance = OpenapiClient::WebhooksApi.new
create_webhook_request = OpenapiClient::CreateWebhookRequest.new({url: 'url_example', events: ['events_example']}) # CreateWebhookRequest | 

begin
  # Create webhook
  result = api_instance.create_webhook(create_webhook_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->create_webhook: #{e}"
end
```

#### Using the create_webhook_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_webhook_with_http_info(create_webhook_request)

```ruby
begin
  # Create webhook
  data, status_code, headers = api_instance.create_webhook_with_http_info(create_webhook_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->create_webhook_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_webhook_request** | [**CreateWebhookRequest**](CreateWebhookRequest.md) |  |  |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## delete_webhook

> delete_webhook(webhook_id)

Delete webhook

Delete a webhook subscription

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

api_instance = OpenapiClient::WebhooksApi.new
webhook_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Delete webhook
  api_instance.delete_webhook(webhook_id)
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->delete_webhook: #{e}"
end
```

#### Using the delete_webhook_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_webhook_with_http_info(webhook_id)

```ruby
begin
  # Delete webhook
  data, status_code, headers = api_instance.delete_webhook_with_http_info(webhook_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->delete_webhook_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json


## get_webhook

> <Webhook> get_webhook(webhook_id)

Get webhook details

Retrieve details of a specific webhook

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

api_instance = OpenapiClient::WebhooksApi.new
webhook_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get webhook details
  result = api_instance.get_webhook(webhook_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->get_webhook: #{e}"
end
```

#### Using the get_webhook_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Webhook>, Integer, Hash)> get_webhook_with_http_info(webhook_id)

```ruby
begin
  # Get webhook details
  data, status_code, headers = api_instance.get_webhook_with_http_info(webhook_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Webhook>
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->get_webhook_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_id** | **String** |  |  |

### Return type

[**Webhook**](Webhook.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_webhook_deliveries

> <GetWebhookDeliveries200Response> get_webhook_deliveries(webhook_id, opts)

Get webhook deliveries

Retrieve delivery history for a webhook

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

api_instance = OpenapiClient::WebhooksApi.new
webhook_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  status: 'SUCCESS', # String | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # Get webhook deliveries
  result = api_instance.get_webhook_deliveries(webhook_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->get_webhook_deliveries: #{e}"
end
```

#### Using the get_webhook_deliveries_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetWebhookDeliveries200Response>, Integer, Hash)> get_webhook_deliveries_with_http_info(webhook_id, opts)

```ruby
begin
  # Get webhook deliveries
  data, status_code, headers = api_instance.get_webhook_deliveries_with_http_info(webhook_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetWebhookDeliveries200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->get_webhook_deliveries_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_id** | **String** |  |  |
| **status** | **String** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**GetWebhookDeliveries200Response**](GetWebhookDeliveries200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_webhooks

> <GetGuestStays200Response> list_webhooks(opts)

List webhooks

List all configured webhooks with subscription details and delivery status

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

api_instance = OpenapiClient::WebhooksApi.new
opts = {
  enabled: true, # Boolean | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List webhooks
  result = api_instance.list_webhooks(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->list_webhooks: #{e}"
end
```

#### Using the list_webhooks_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetGuestStays200Response>, Integer, Hash)> list_webhooks_with_http_info(opts)

```ruby
begin
  # List webhooks
  data, status_code, headers = api_instance.list_webhooks_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetGuestStays200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->list_webhooks_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **enabled** | **Boolean** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## replace_webhook

> Object replace_webhook(webhook_id, body, opts)

Replace webhook configuration (full update)

Replace webhook configuration with complete new settings including URL, events, and authentication

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

api_instance = OpenapiClient::WebhooksApi.new
webhook_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace webhook configuration (full update)
  result = api_instance.replace_webhook(webhook_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->replace_webhook: #{e}"
end
```

#### Using the replace_webhook_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> replace_webhook_with_http_info(webhook_id, body, opts)

```ruby
begin
  # Replace webhook configuration (full update)
  data, status_code, headers = api_instance.replace_webhook_with_http_info(webhook_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->replace_webhook_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## test_webhook

> <TestWebhook200Response> test_webhook(webhook_id)

Test webhook

Send a test event to the webhook endpoint

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

api_instance = OpenapiClient::WebhooksApi.new
webhook_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Test webhook
  result = api_instance.test_webhook(webhook_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->test_webhook: #{e}"
end
```

#### Using the test_webhook_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<TestWebhook200Response>, Integer, Hash)> test_webhook_with_http_info(webhook_id)

```ruby
begin
  # Test webhook
  data, status_code, headers = api_instance.test_webhook_with_http_info(webhook_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TestWebhook200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->test_webhook_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_id** | **String** |  |  |

### Return type

[**TestWebhook200Response**](TestWebhook200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## update_webhook

> Object update_webhook(webhook_id, body, opts)

Update webhook configuration (partial update)

Update specific fields of a webhook configuration.  **Common use cases:** - Update webhook URL - Change event subscriptions - Modify retry settings - Update authentication 

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

api_instance = OpenapiClient::WebhooksApi.new
webhook_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update webhook configuration (partial update)
  result = api_instance.update_webhook(webhook_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->update_webhook: #{e}"
end
```

#### Using the update_webhook_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_webhook_with_http_info(webhook_id, body, opts)

```ruby
begin
  # Update webhook configuration (partial update)
  data, status_code, headers = api_instance.update_webhook_with_http_info(webhook_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling WebhooksApi->update_webhook_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

