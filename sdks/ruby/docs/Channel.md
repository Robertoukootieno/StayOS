# OpenapiClient::Channel

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel_id** | **String** |  | [readonly] |
| **property_id** | **String** |  |  |
| **channel_type** | **String** |  |  |
| **channel_name** | **String** |  | [optional] |
| **status** | **String** |  |  |
| **credentials** | [**ChannelAllOfCredentials**](ChannelAllOfCredentials.md) |  | [optional] |
| **configuration** | [**ChannelAllOfConfiguration**](ChannelAllOfConfiguration.md) |  | [optional] |
| **last_sync_at** | **Time** |  | [optional][readonly] |
| **sync_status** | **String** |  | [optional][readonly] |
| **error_message** | **String** |  | [optional][readonly] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |
| **links** | [**ChannelAllOfLinks**](ChannelAllOfLinks.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Channel.new(
  channel_id: null,
  property_id: null,
  channel_type: BOOKING_COM,
  channel_name: Booking.com,
  status: ACTIVE,
  credentials: null,
  configuration: null,
  last_sync_at: null,
  sync_status: null,
  error_message: null,
  metadata: null,
  links: null
)
```

