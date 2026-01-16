# OpenapiClient::PricingModelAllOfLengthOfStayDiscounts

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **minimum_nights** | **Integer** |  | [optional] |
| **discount_type** | **String** |  | [optional] |
| **discount_value** | **Float** |  | [optional] |
| **description** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PricingModelAllOfLengthOfStayDiscounts.new(
  minimum_nights: 7,
  discount_type: null,
  discount_value: 15,
  description: 15% off for 7+ night stays
)
```

