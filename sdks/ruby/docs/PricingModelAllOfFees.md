# OpenapiClient::PricingModelAllOfFees

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  | [optional] |
| **type** | **String** |  | [optional] |
| **amount** | [**Model0**](Model0.md) |  | [optional] |
| **is_optional** | **Boolean** |  | [optional][default to false] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PricingModelAllOfFees.new(
  name: Resort Fee,
  type: null,
  amount: null,
  is_optional: null
)
```

