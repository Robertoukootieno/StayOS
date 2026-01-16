# OpenapiClient::GetReservationQuoteRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  |  |
| **unit_type_id** | **String** |  |  |
| **check_in_date** | **Date** |  |  |
| **check_out_date** | **Date** |  |  |
| **guest_count** | [**GetReservationQuoteRequestGuestCount**](GetReservationQuoteRequestGuestCount.md) |  |  |
| **rate_strategy_id** | **String** |  | [optional] |
| **promo_code** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::GetReservationQuoteRequest.new(
  property_id: null,
  unit_type_id: null,
  check_in_date: null,
  check_out_date: null,
  guest_count: null,
  rate_strategy_id: null,
  promo_code: null
)
```

