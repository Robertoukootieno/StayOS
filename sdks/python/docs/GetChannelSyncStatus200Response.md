# GetChannelSyncStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_sync** | **datetime** |  | [optional] 
**status** | **str** |  | [optional] 
**errors** | **List[str]** |  | [optional] 

## Example

```python
from stayos_api_client.models.get_channel_sync_status200_response import GetChannelSyncStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetChannelSyncStatus200Response from a JSON string
get_channel_sync_status200_response_instance = GetChannelSyncStatus200Response.from_json(json)
# print the JSON string representation of the object
print(GetChannelSyncStatus200Response.to_json())

# convert the object into a dict
get_channel_sync_status200_response_dict = get_channel_sync_status200_response_instance.to_dict()
# create an instance of GetChannelSyncStatus200Response from a dict
get_channel_sync_status200_response_from_dict = GetChannelSyncStatus200Response.from_dict(get_channel_sync_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


