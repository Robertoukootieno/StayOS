# OpenapiClient::InvoicePurchaseOrderRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **invoice_number** | **String** |  |  |
| **amount** | [**Money**](Money.md) |  |  |
| **invoice_date** | **Date** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::InvoicePurchaseOrderRequest.new(
  invoice_number: null,
  amount: null,
  invoice_date: null
)
```

