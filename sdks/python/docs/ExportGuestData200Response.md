# ExportGuestData200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_id** | **UUID** |  | [optional] 
**download_url** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.export_guest_data200_response import ExportGuestData200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ExportGuestData200Response from a JSON string
export_guest_data200_response_instance = ExportGuestData200Response.from_json(json)
# print the JSON string representation of the object
print(ExportGuestData200Response.to_json())

# convert the object into a dict
export_guest_data200_response_dict = export_guest_data200_response_instance.to_dict()
# create an instance of ExportGuestData200Response from a dict
export_guest_data200_response_from_dict = ExportGuestData200Response.from_dict(export_guest_data200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


