# OpenapiClient::RateStrategy

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **rate_strategy_id** | **String** |  | [optional][readonly] |
| **property_id** | **String** |  |  |
| **name** | **String** |  |  |
| **description** | **String** |  | [optional] |
| **strategy_type** | **String** |  |  |
| **is_active** | **Boolean** |  | [optional][default to true] |
| **applicability** | [**Model0**](Model0.md) |  | [optional] |
| **pricing_model** | [**Model0**](Model0.md) |  |  |
| **cancellation_terms** | [**Model0**](Model0.md) |  | [optional] |
| **channel_distribution** | [**Array&lt;Model0&gt;**](Model0.md) |  | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |
| **links** | [**RateStrategyAllOfLinks**](RateStrategyAllOfLinks.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RateStrategy.new(
  rate_strategy_id: 990e8400-e29b-41d4-a716-446655440000,
  property_id: 550e8400-e29b-41d4-a716-446655440000,
  name: Standard Flexible Rate,
  description: Fully refundable rate with flexible cancellation,
  strategy_type: STANDARD,
  is_active: null,
  applicability: null,
  pricing_model: null,
  cancellation_terms: null,
  channel_distribution: null,
  metadata: null,
  links: null
)
```

