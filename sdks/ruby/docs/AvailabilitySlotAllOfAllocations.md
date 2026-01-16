# OpenapiClient::AvailabilitySlotAllOfAllocations

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel_id** | **String** |  | [optional] |
| **channel_name** | **String** |  | [optional] |
| **allocated** | **Integer** | Units allocated to this channel | [optional] |
| **sold** | **Integer** | Units sold through this channel | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::AvailabilitySlotAllOfAllocations.new(
  channel_id: null,
  channel_name: null,
  allocated: null,
  sold: null
)
```

