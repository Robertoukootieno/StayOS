# OpenapiClient::SystemApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_system_health**](SystemApi.md#get_system_health) | **GET** /system/health | Health check |
| [**get_system_metrics**](SystemApi.md#get_system_metrics) | **GET** /system/metrics | Get system metrics |
| [**get_system_status**](SystemApi.md#get_system_status) | **GET** /system/status | Get system status |


## get_system_health

> <GetSystemHealth200Response> get_system_health

Health check

Check system health status

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::SystemApi.new

begin
  # Health check
  result = api_instance.get_system_health
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SystemApi->get_system_health: #{e}"
end
```

#### Using the get_system_health_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetSystemHealth200Response>, Integer, Hash)> get_system_health_with_http_info

```ruby
begin
  # Health check
  data, status_code, headers = api_instance.get_system_health_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetSystemHealth200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SystemApi->get_system_health_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetSystemHealth200Response**](GetSystemHealth200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_system_metrics

> <GetSystemMetrics200Response> get_system_metrics(opts)

Get system metrics

Retrieve system performance metrics

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

api_instance = OpenapiClient::SystemApi.new
opts = {
  metric: 'metric_example', # String | 
  start_time: Time.parse('2013-10-20T19:20:30+01:00'), # Time | 
  end_time: Time.parse('2013-10-20T19:20:30+01:00') # Time | 
}

begin
  # Get system metrics
  result = api_instance.get_system_metrics(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SystemApi->get_system_metrics: #{e}"
end
```

#### Using the get_system_metrics_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetSystemMetrics200Response>, Integer, Hash)> get_system_metrics_with_http_info(opts)

```ruby
begin
  # Get system metrics
  data, status_code, headers = api_instance.get_system_metrics_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetSystemMetrics200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SystemApi->get_system_metrics_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **metric** | **String** |  | [optional] |
| **start_time** | **Time** |  | [optional] |
| **end_time** | **Time** |  | [optional] |

### Return type

[**GetSystemMetrics200Response**](GetSystemMetrics200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_system_status

> <GetSystemStatus200Response> get_system_status

Get system status

Get overall system status and component health

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::SystemApi.new

begin
  # Get system status
  result = api_instance.get_system_status
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SystemApi->get_system_status: #{e}"
end
```

#### Using the get_system_status_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetSystemStatus200Response>, Integer, Hash)> get_system_status_with_http_info

```ruby
begin
  # Get system status
  data, status_code, headers = api_instance.get_system_status_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetSystemStatus200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SystemApi->get_system_status_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetSystemStatus200Response**](GetSystemStatus200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

