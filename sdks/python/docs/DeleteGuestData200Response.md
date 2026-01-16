# DeleteGuestData200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **UUID** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.delete_guest_data200_response import DeleteGuestData200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteGuestData200Response from a JSON string
delete_guest_data200_response_instance = DeleteGuestData200Response.from_json(json)
# print the JSON string representation of the object
print(DeleteGuestData200Response.to_json())

# convert the object into a dict
delete_guest_data200_response_dict = delete_guest_data200_response_instance.to_dict()
# create an instance of DeleteGuestData200Response from a dict
delete_guest_data200_response_from_dict = DeleteGuestData200Response.from_dict(delete_guest_data200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


