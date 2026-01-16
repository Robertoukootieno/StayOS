# OpenapiClient::Payment

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_id** | **String** |  | [readonly] |
| **folio_id** | **String** |  | [optional] |
| **amount** | [**Model0**](Model0.md) |  |  |
| **method** | **String** |  |  |
| **status** | **String** |  |  |
| **transaction_id** | **String** | External payment processor transaction ID | [optional] |
| **card_details** | [**PaymentAllOfCardDetails**](PaymentAllOfCardDetails.md) |  | [optional] |
| **processed_at** | **Time** |  | [optional][readonly] |
| **refunds** | [**Array&lt;PaymentAllOfRefunds&gt;**](PaymentAllOfRefunds.md) |  | [optional] |
| **receipt_url** | **String** |  | [optional][readonly] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Payment.new(
  payment_id: null,
  folio_id: null,
  amount: null,
  method: CREDIT_CARD,
  status: COMPLETED,
  transaction_id: null,
  card_details: null,
  processed_at: null,
  refunds: null,
  receipt_url: null,
  metadata: null
)
```

