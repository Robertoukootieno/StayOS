# ExportGuestDataRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guest_id** | **UUID** |  | 

## Example

```python
from stayos_api_client.models.export_guest_data_request import ExportGuestDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportGuestDataRequest from a JSON string
export_guest_data_request_instance = ExportGuestDataRequest.from_json(json)
# print the JSON string representation of the object
print(ExportGuestDataRequest.to_json())

# convert the object into a dict
export_guest_data_request_dict = export_guest_data_request_instance.to_dict()
# create an instance of ExportGuestDataRequest from a dict
export_guest_data_request_from_dict = ExportGuestDataRequest.from_dict(export_guest_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


