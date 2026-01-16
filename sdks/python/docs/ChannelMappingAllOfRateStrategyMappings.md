# ChannelMappingAllOfRateStrategyMappings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**internal_rate_strategy_id** | **UUID** |  | [optional] 
**channel_rate_plan_id** | **str** |  | [optional] 
**channel_rate_plan_name** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.channel_mapping_all_of_rate_strategy_mappings import ChannelMappingAllOfRateStrategyMappings

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelMappingAllOfRateStrategyMappings from a JSON string
channel_mapping_all_of_rate_strategy_mappings_instance = ChannelMappingAllOfRateStrategyMappings.from_json(json)
# print the JSON string representation of the object
print(ChannelMappingAllOfRateStrategyMappings.to_json())

# convert the object into a dict
channel_mapping_all_of_rate_strategy_mappings_dict = channel_mapping_all_of_rate_strategy_mappings_instance.to_dict()
# create an instance of ChannelMappingAllOfRateStrategyMappings from a dict
channel_mapping_all_of_rate_strategy_mappings_from_dict = ChannelMappingAllOfRateStrategyMappings.from_dict(channel_mapping_all_of_rate_strategy_mappings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


