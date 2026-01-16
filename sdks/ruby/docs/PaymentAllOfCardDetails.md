# OpenapiClient::PaymentAllOfCardDetails

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **last4** | **String** |  | [optional] |
| **brand** | **String** |  | [optional] |
| **expiry_month** | **Integer** |  | [optional] |
| **expiry_year** | **Integer** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PaymentAllOfCardDetails.new(
  last4: 4242,
  brand: Visa,
  expiry_month: null,
  expiry_year: null
)
```

