# OpenapiClient::FBOrderAllOfTotal

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **String** | Decimal amount (always 2 decimal places) |  |
| **currency** | **String** | ISO 4217 currency code |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::FBOrderAllOfTotal.new(
  amount: 125.50,
  currency: USD
)
```

