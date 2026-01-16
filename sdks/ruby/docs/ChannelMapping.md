# OpenapiClient::ChannelMapping

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **channel_id** | **String** |  |  |
| **property_id** | **String** |  |  |
| **unit_type_mappings** | [**Array&lt;ChannelMappingAllOfUnitTypeMappings&gt;**](ChannelMappingAllOfUnitTypeMappings.md) |  | [optional] |
| **rate_strategy_mappings** | [**Array&lt;ChannelMappingAllOfRateStrategyMappings&gt;**](ChannelMappingAllOfRateStrategyMappings.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ChannelMapping.new(
  channel_id: null,
  property_id: null,
  unit_type_mappings: null,
  rate_strategy_mappings: null
)
```

