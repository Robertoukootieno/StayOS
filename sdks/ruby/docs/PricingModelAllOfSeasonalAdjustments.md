# OpenapiClient::PricingModelAllOfSeasonalAdjustments

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  | [optional] |
| **start_date** | **Date** |  | [optional] |
| **end_date** | **Date** |  | [optional] |
| **adjustment_type** | **String** |  | [optional] |
| **adjustment_value** | **Float** |  | [optional] |
| **description** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PricingModelAllOfSeasonalAdjustments.new(
  name: Summer Peak,
  start_date: null,
  end_date: null,
  adjustment_type: null,
  adjustment_value: 20,
  description: null
)
```

