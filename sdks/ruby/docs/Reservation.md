# OpenapiClient::Reservation

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reservation_id** | **String** |  | [readonly] |
| **property_id** | **String** |  |  |
| **guest_id** | **String** |  |  |
| **check_in_date** | **Date** |  |  |
| **check_out_date** | **Date** |  |  |
| **status** | **String** |  |  |
| **guest_count** | [**ReservationAllOfGuestCount**](ReservationAllOfGuestCount.md) |  | [optional] |
| **special_requests** | **String** |  | [optional] |
| **total_amount** | [**Model0**](Model0.md) |  | [optional] |
| **cancellation_policy** | [**Model0**](Model0.md) |  | [optional] |
| **created_at** | **Time** |  | [optional][readonly] |
| **updated_at** | **Time** |  | [optional][readonly] |
| **version** | **Integer** | Version for optimistic locking | [optional][readonly] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Reservation.new(
  reservation_id: null,
  property_id: null,
  guest_id: null,
  check_in_date: 2025-12-25,
  check_out_date: 2025-12-28,
  status: CONFIRMED,
  guest_count: null,
  special_requests: Late check-in at 10 PM,
  total_amount: null,
  cancellation_policy: null,
  created_at: null,
  updated_at: null,
  version: null
)
```

