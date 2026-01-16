# AssignServiceRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_to** | **UUID** |  | 

## Example

```python
from stayos_api_client.models.assign_service_request_request import AssignServiceRequestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssignServiceRequestRequest from a JSON string
assign_service_request_request_instance = AssignServiceRequestRequest.from_json(json)
# print the JSON string representation of the object
print(AssignServiceRequestRequest.to_json())

# convert the object into a dict
assign_service_request_request_dict = assign_service_request_request_instance.to_dict()
# create an instance of AssignServiceRequestRequest from a dict
assign_service_request_request_from_dict = AssignServiceRequestRequest.from_dict(assign_service_request_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


