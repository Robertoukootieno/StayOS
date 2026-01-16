# ChannelAllOfCredentials


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** |  | [optional] 
**api_secret** | **str** |  | [optional] 
**hotel_id** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.channel_all_of_credentials import ChannelAllOfCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelAllOfCredentials from a JSON string
channel_all_of_credentials_instance = ChannelAllOfCredentials.from_json(json)
# print the JSON string representation of the object
print(ChannelAllOfCredentials.to_json())

# convert the object into a dict
channel_all_of_credentials_dict = channel_all_of_credentials_instance.to_dict()
# create an instance of ChannelAllOfCredentials from a dict
channel_all_of_credentials_from_dict = ChannelAllOfCredentials.from_dict(channel_all_of_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


