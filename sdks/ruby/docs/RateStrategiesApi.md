# OpenapiClient::RateStrategiesApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_rate_strategy**](RateStrategiesApi.md#create_rate_strategy) | **POST** /properties/{propertyId}/rate-strategies | Create rate strategy |
| [**list_rate_strategies**](RateStrategiesApi.md#list_rate_strategies) | **GET** /properties/{propertyId}/rate-strategies | List rate strategies |


## create_rate_strategy

> <RateStrategy> create_rate_strategy(property_id, rate_strategy)

Create rate strategy

Create a new pricing strategy for the property

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

api_instance = OpenapiClient::RateStrategiesApi.new
property_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | Unique property identifier
rate_strategy = OpenapiClient::RateStrategy.new({property_id: '550e8400-e29b-41d4-a716-446655440000', name: 'Standard Flexible Rate', strategy_type: 'STANDARD', pricing_model: OpenapiClient::Model0.new({amount: '125.50', currency: 'USD'})}) # RateStrategy | 

begin
  # Create rate strategy
  result = api_instance.create_rate_strategy(property_id, rate_strategy)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling RateStrategiesApi->create_rate_strategy: #{e}"
end
```

#### Using the create_rate_strategy_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<RateStrategy>, Integer, Hash)> create_rate_strategy_with_http_info(property_id, rate_strategy)

```ruby
begin
  # Create rate strategy
  data, status_code, headers = api_instance.create_rate_strategy_with_http_info(property_id, rate_strategy)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <RateStrategy>
rescue OpenapiClient::ApiError => e
  puts "Error when calling RateStrategiesApi->create_rate_strategy_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** | Unique property identifier |  |
| **rate_strategy** | [**RateStrategy**](RateStrategy.md) |  |  |

### Return type

[**RateStrategy**](RateStrategy.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## list_rate_strategies

> <ListRateStrategies200Response> list_rate_strategies(property_id, opts)

List rate strategies

Retrieve all rate strategies for a property

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

api_instance = OpenapiClient::RateStrategiesApi.new
property_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | Unique property identifier
opts = {
  page_size: 56, # Integer | Number of items per page (max 100)
  strategy_type: 'STANDARD', # String | Filter by strategy type
  is_active: true # Boolean | Filter by active status
}

begin
  # List rate strategies
  result = api_instance.list_rate_strategies(property_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling RateStrategiesApi->list_rate_strategies: #{e}"
end
```

#### Using the list_rate_strategies_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListRateStrategies200Response>, Integer, Hash)> list_rate_strategies_with_http_info(property_id, opts)

```ruby
begin
  # List rate strategies
  data, status_code, headers = api_instance.list_rate_strategies_with_http_info(property_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListRateStrategies200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling RateStrategiesApi->list_rate_strategies_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** | Unique property identifier |  |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **strategy_type** | **String** | Filter by strategy type | [optional] |
| **is_active** | **Boolean** | Filter by active status | [optional] |

### Return type

[**ListRateStrategies200Response**](ListRateStrategies200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

