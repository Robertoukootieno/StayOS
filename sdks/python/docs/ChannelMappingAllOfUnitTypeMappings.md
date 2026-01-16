# ChannelMappingAllOfUnitTypeMappings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**internal_unit_type_id** | **UUID** |  | [optional] 
**channel_room_type_id** | **str** |  | [optional] 
**channel_room_type_name** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.channel_mapping_all_of_unit_type_mappings import ChannelMappingAllOfUnitTypeMappings

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelMappingAllOfUnitTypeMappings from a JSON string
channel_mapping_all_of_unit_type_mappings_instance = ChannelMappingAllOfUnitTypeMappings.from_json(json)
# print the JSON string representation of the object
print(ChannelMappingAllOfUnitTypeMappings.to_json())

# convert the object into a dict
channel_mapping_all_of_unit_type_mappings_dict = channel_mapping_all_of_unit_type_mappings_instance.to_dict()
# create an instance of ChannelMappingAllOfUnitTypeMappings from a dict
channel_mapping_all_of_unit_type_mappings_from_dict = ChannelMappingAllOfUnitTypeMappings.from_dict(channel_mapping_all_of_unit_type_mappings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


