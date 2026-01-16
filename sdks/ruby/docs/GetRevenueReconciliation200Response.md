# OpenapiClient::GetRevenueReconciliation200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date** | **Date** |  | [optional] |
| **total_revenue** | [**Money**](Money.md) |  | [optional] |
| **total_payments** | [**Money**](Money.md) |  | [optional] |
| **variance** | [**Money**](Money.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::GetRevenueReconciliation200Response.new(
  date: null,
  total_revenue: null,
  total_payments: null,
  variance: null
)
```

