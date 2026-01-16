# OpenapiClient::ChannelDistribution

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel_id** | **String** |  |  |
| **channel_name** | **String** |  | [optional][readonly] |
| **is_enabled** | **Boolean** |  | [optional][default to true] |
| **markup** | [**ChannelDistributionAllOfMarkup**](ChannelDistributionAllOfMarkup.md) |  | [optional] |
| **commission** | [**ChannelDistributionAllOfCommission**](ChannelDistributionAllOfCommission.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ChannelDistribution.new(
  channel_id: aa0e8400-e29b-41d4-a716-446655440000,
  channel_name: Booking.com,
  is_enabled: null,
  markup: null,
  commission: null
)
```

