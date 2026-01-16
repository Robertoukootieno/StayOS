# AssignHousekeepingTaskRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_to** | **UUID** | Staff member ID | 

## Example

```python
from stayos_api_client.models.assign_housekeeping_task_request import AssignHousekeepingTaskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssignHousekeepingTaskRequest from a JSON string
assign_housekeeping_task_request_instance = AssignHousekeepingTaskRequest.from_json(json)
# print the JSON string representation of the object
print(AssignHousekeepingTaskRequest.to_json())

# convert the object into a dict
assign_housekeeping_task_request_dict = assign_housekeeping_task_request_instance.to_dict()
# create an instance of AssignHousekeepingTaskRequest from a dict
assign_housekeeping_task_request_from_dict = AssignHousekeepingTaskRequest.from_dict(assign_housekeeping_task_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


