# ChannelAllOfConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_accept_bookings** | **bool** |  | [optional] [default to False]
**sync_inventory** | **bool** |  | [optional] [default to True]
**sync_rates** | **bool** |  | [optional] [default to True]
**sync_restrictions** | **bool** |  | [optional] [default to True]

## Example

```python
from stayos_api_client.models.channel_all_of_configuration import ChannelAllOfConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelAllOfConfiguration from a JSON string
channel_all_of_configuration_instance = ChannelAllOfConfiguration.from_json(json)
# print the JSON string representation of the object
print(ChannelAllOfConfiguration.to_json())

# convert the object into a dict
channel_all_of_configuration_dict = channel_all_of_configuration_instance.to_dict()
# create an instance of ChannelAllOfConfiguration from a dict
channel_all_of_configuration_from_dict = ChannelAllOfConfiguration.from_dict(channel_all_of_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


