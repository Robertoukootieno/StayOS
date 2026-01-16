# SyncChannelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sync_type** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.sync_channel_request import SyncChannelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SyncChannelRequest from a JSON string
sync_channel_request_instance = SyncChannelRequest.from_json(json)
# print the JSON string representation of the object
print(SyncChannelRequest.to_json())

# convert the object into a dict
sync_channel_request_dict = sync_channel_request_instance.to_dict()
# create an instance of SyncChannelRequest from a dict
sync_channel_request_from_dict = SyncChannelRequest.from_dict(sync_channel_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


