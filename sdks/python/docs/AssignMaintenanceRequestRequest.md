# AssignMaintenanceRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_to** | **UUID** | Technician ID | 

## Example

```python
from stayos_api_client.models.assign_maintenance_request_request import AssignMaintenanceRequestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssignMaintenanceRequestRequest from a JSON string
assign_maintenance_request_request_instance = AssignMaintenanceRequestRequest.from_json(json)
# print the JSON string representation of the object
print(AssignMaintenanceRequestRequest.to_json())

# convert the object into a dict
assign_maintenance_request_request_dict = assign_maintenance_request_request_instance.to_dict()
# create an instance of AssignMaintenanceRequestRequest from a dict
assign_maintenance_request_request_from_dict = AssignMaintenanceRequestRequest.from_dict(assign_maintenance_request_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


