# SyncChannel202Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sync_id** | **UUID** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.sync_channel202_response import SyncChannel202Response

# TODO update the JSON string below
json = "{}"
# create an instance of SyncChannel202Response from a JSON string
sync_channel202_response_instance = SyncChannel202Response.from_json(json)
# print the JSON string representation of the object
print(SyncChannel202Response.to_json())

# convert the object into a dict
sync_channel202_response_dict = sync_channel202_response_instance.to_dict()
# create an instance of SyncChannel202Response from a dict
sync_channel202_response_from_dict = SyncChannel202Response.from_dict(sync_channel202_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


