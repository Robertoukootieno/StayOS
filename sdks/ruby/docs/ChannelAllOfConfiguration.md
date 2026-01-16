# OpenapiClient::ChannelAllOfConfiguration

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **auto_accept_bookings** | **Boolean** |  | [optional][default to false] |
| **sync_inventory** | **Boolean** |  | [optional][default to true] |
| **sync_rates** | **Boolean** |  | [optional][default to true] |
| **sync_restrictions** | **Boolean** |  | [optional][default to true] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ChannelAllOfConfiguration.new(
  auto_accept_bookings: null,
  sync_inventory: null,
  sync_rates: null,
  sync_restrictions: null
)
```

