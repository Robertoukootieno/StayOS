# OpenapiClient::PaymentAllOfRefunds

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **refund_id** | **String** |  | [optional] |
| **amount** | [**Model0**](Model0.md) |  | [optional] |
| **reason** | **String** |  | [optional] |
| **refunded_at** | **Time** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PaymentAllOfRefunds.new(
  refund_id: null,
  amount: null,
  reason: null,
  refunded_at: null
)
```

