# OpenapiClient::StaffShift

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **shift_id** | **String** |  | [readonly] |
| **staff_id** | **String** |  |  |
| **property_id** | **String** |  |  |
| **shift_date** | **Date** |  |  |
| **start_time** | **String** |  |  |
| **end_time** | **String** |  |  |
| **role** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **clock_in_time** | **Time** |  | [optional] |
| **clock_out_time** | **Time** |  | [optional] |
| **breaks** | [**Array&lt;StaffShiftAllOfBreaks&gt;**](StaffShiftAllOfBreaks.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::StaffShift.new(
  shift_id: null,
  staff_id: null,
  property_id: null,
  shift_date: null,
  start_time: 09:00:00,
  end_time: 17:00:00,
  role: FRONT_DESK,
  status: SCHEDULED,
  clock_in_time: null,
  clock_out_time: null,
  breaks: null
)
```

