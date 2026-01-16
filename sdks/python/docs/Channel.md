# Channel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **UUID** |  | [readonly] 
**property_id** | **UUID** |  | 
**channel_type** | **str** |  | 
**channel_name** | **str** |  | [optional] 
**status** | **str** |  | 
**credentials** | [**ChannelAllOfCredentials**](ChannelAllOfCredentials.md) |  | [optional] 
**configuration** | [**ChannelAllOfConfiguration**](ChannelAllOfConfiguration.md) |  | [optional] 
**last_sync_at** | **datetime** |  | [optional] [readonly] 
**sync_status** | **str** |  | [optional] [readonly] 
**error_message** | **str** |  | [optional] [readonly] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 
**links** | [**ChannelAllOfLinks**](ChannelAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.channel import Channel

# TODO update the JSON string below
json = "{}"
# create an instance of Channel from a JSON string
channel_instance = Channel.from_json(json)
# print the JSON string representation of the object
print(Channel.to_json())

# convert the object into a dict
channel_dict = channel_instance.to_dict()
# create an instance of Channel from a dict
channel_from_dict = Channel.from_dict(channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


