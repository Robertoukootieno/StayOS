# OpenapiClient::ApplicabilityRules

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **valid_date_range** | [**ApplicabilityRulesAllOfValidDateRange**](ApplicabilityRulesAllOfValidDateRange.md) |  | [optional] |
| **days_of_week** | **Array&lt;String&gt;** |  | [optional] |
| **minimum_stay_duration** | **Integer** | Minimum nights required | [optional] |
| **maximum_stay_duration** | **Integer** | Maximum nights allowed | [optional] |
| **advance_booking_window** | [**ApplicabilityRulesAllOfAdvanceBookingWindow**](ApplicabilityRulesAllOfAdvanceBookingWindow.md) |  | [optional] |
| **blackout_dates** | **Array&lt;Date&gt;** | Dates when rate is not available | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ApplicabilityRules.new(
  valid_date_range: null,
  days_of_week: [MONDAY, TUESDAY, WEDNESDAY, THURSDAY],
  minimum_stay_duration: 2,
  maximum_stay_duration: 14,
  advance_booking_window: null,
  blackout_dates: [2025-12-24, 2025-12-25, 2025-12-31]
)
```

