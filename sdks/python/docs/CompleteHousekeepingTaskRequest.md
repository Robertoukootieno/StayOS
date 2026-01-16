# CompleteHousekeepingTaskRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | **str** |  | [optional] 
**issues** | **List[str]** |  | [optional] 

## Example

```python
from stayos_api_client.models.complete_housekeeping_task_request import CompleteHousekeepingTaskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteHousekeepingTaskRequest from a JSON string
complete_housekeeping_task_request_instance = CompleteHousekeepingTaskRequest.from_json(json)
# print the JSON string representation of the object
print(CompleteHousekeepingTaskRequest.to_json())

# convert the object into a dict
complete_housekeeping_task_request_dict = complete_housekeeping_task_request_instance.to_dict()
# create an instance of CompleteHousekeepingTaskRequest from a dict
complete_housekeeping_task_request_from_dict = CompleteHousekeepingTaskRequest.from_dict(complete_housekeeping_task_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


