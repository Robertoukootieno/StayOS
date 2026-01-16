# OpenapiClient::ChannelPerformance

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel_id** | **String** |  |  |
| **start_date** | **Date** |  |  |
| **end_date** | **Date** |  |  |
| **bookings** | **Integer** | Total bookings | [optional] |
| **revenue** | [**Model0**](Model0.md) |  | [optional] |
| **commission** | [**Model0**](Model0.md) |  | [optional] |
| **net_revenue** | [**Model0**](Model0.md) |  | [optional] |
| **average_booking_value** | [**Model0**](Model0.md) |  | [optional] |
| **cancellation_rate** | **Float** | Percentage | [optional] |
| **conversion_rate** | **Float** | Percentage | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ChannelPerformance.new(
  channel_id: null,
  start_date: null,
  end_date: null,
  bookings: null,
  revenue: null,
  commission: null,
  net_revenue: null,
  average_booking_value: null,
  cancellation_rate: null,
  conversion_rate: null
)
```

