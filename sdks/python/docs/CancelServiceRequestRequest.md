# CancelServiceRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.cancel_service_request_request import CancelServiceRequestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CancelServiceRequestRequest from a JSON string
cancel_service_request_request_instance = CancelServiceRequestRequest.from_json(json)
# print the JSON string representation of the object
print(CancelServiceRequestRequest.to_json())

# convert the object into a dict
cancel_service_request_request_dict = cancel_service_request_request_instance.to_dict()
# create an instance of CancelServiceRequestRequest from a dict
cancel_service_request_request_from_dict = CancelServiceRequestRequest.from_dict(cancel_service_request_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


