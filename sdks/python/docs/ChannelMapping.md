# ChannelMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **UUID** |  | 
**property_id** | **UUID** |  | 
**unit_type_mappings** | [**List[ChannelMappingAllOfUnitTypeMappings]**](ChannelMappingAllOfUnitTypeMappings.md) |  | [optional] 
**rate_strategy_mappings** | [**List[ChannelMappingAllOfRateStrategyMappings]**](ChannelMappingAllOfRateStrategyMappings.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.channel_mapping import ChannelMapping

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelMapping from a JSON string
channel_mapping_instance = ChannelMapping.from_json(json)
# print the JSON string representation of the object
print(ChannelMapping.to_json())

# convert the object into a dict
channel_mapping_dict = channel_mapping_instance.to_dict()
# create an instance of ChannelMapping from a dict
channel_mapping_from_dict = ChannelMapping.from_dict(channel_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


