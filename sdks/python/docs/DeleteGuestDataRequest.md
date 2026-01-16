# DeleteGuestDataRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guest_id** | **UUID** |  | 
**confirmation** | **bool** |  | [optional] 

## Example

```python
from stayos_api_client.models.delete_guest_data_request import DeleteGuestDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteGuestDataRequest from a JSON string
delete_guest_data_request_instance = DeleteGuestDataRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteGuestDataRequest.to_json())

# convert the object into a dict
delete_guest_data_request_dict = delete_guest_data_request_instance.to_dict()
# create an instance of DeleteGuestDataRequest from a dict
delete_guest_data_request_from_dict = DeleteGuestDataRequest.from_dict(delete_guest_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


