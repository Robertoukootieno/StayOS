# OpenapiClient::Stay

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stay_id** | **String** |  | [readonly] |
| **reservation_id** | **String** | Associated reservation |  |
| **property_id** | **String** |  |  |
| **inventory_unit_id** | **String** | Assigned room/unit |  |
| **guest_id** | **String** | Primary guest |  |
| **additional_guests** | **Array&lt;String&gt;** | Additional guest IDs | [optional] |
| **check_in_date** | **Time** | Actual check-in timestamp |  |
| **expected_check_out_date** | **Date** |  |  |
| **actual_check_out_date** | **Time** | Actual check-out timestamp | [optional] |
| **status** | **String** |  |  |
| **guest_count** | [**ReservationAllOfGuestCount**](ReservationAllOfGuestCount.md) |  | [optional] |
| **key_cards** | [**Array&lt;Model0&gt;**](Model0.md) |  | [optional] |
| **incidental_charges** | [**Array&lt;Model0&gt;**](Model0.md) |  | [optional] |
| **special_requests** | **String** |  | [optional] |
| **notes** | **String** | Internal staff notes | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |
| **links** | [**StayAllOfLinks**](StayAllOfLinks.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Stay.new(
  stay_id: aa0e8400-e29b-41d4-a716-446655440000,
  reservation_id: 550e8400-e29b-41d4-a716-446655440000,
  property_id: 660e8400-e29b-41d4-a716-446655440000,
  inventory_unit_id: 770e8400-e29b-41d4-a716-446655440000,
  guest_id: 880e8400-e29b-41d4-a716-446655440000,
  additional_guests: null,
  check_in_date: 2025-12-25T15:30:00Z,
  expected_check_out_date: 2025-12-28,
  actual_check_out_date: 2025-12-28T11:00:00Z,
  status: IN_HOUSE,
  guest_count: null,
  key_cards: null,
  incidental_charges: null,
  special_requests: Extra pillows, late checkout,
  notes: null,
  metadata: null,
  links: null
)
```

