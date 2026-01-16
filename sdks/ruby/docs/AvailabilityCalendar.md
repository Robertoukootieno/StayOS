# OpenapiClient::AvailabilityCalendar

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **inventory_unit_id** | **String** |  |  |
| **date_range** | [**AvailabilityCalendarAllOfDateRange**](AvailabilityCalendarAllOfDateRange.md) |  |  |
| **slots** | [**Array&lt;Model0&gt;**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::AvailabilityCalendar.new(
  inventory_unit_id: 770e8400-e29b-41d4-a716-446655440000,
  date_range: null,
  slots: null
)
```

