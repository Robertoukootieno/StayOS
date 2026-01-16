# MergeGuestsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_guest_id** | **UUID** |  | 
**secondary_guest_id** | **UUID** |  | 

## Example

```python
from stayos_api_client.models.merge_guests_request import MergeGuestsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MergeGuestsRequest from a JSON string
merge_guests_request_instance = MergeGuestsRequest.from_json(json)
# print the JSON string representation of the object
print(MergeGuestsRequest.to_json())

# convert the object into a dict
merge_guests_request_dict = merge_guests_request_instance.to_dict()
# create an instance of MergeGuestsRequest from a dict
merge_guests_request_from_dict = MergeGuestsRequest.from_dict(merge_guests_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


