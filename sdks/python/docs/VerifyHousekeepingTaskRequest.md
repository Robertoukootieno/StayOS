# VerifyHousekeepingTaskRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verified** | **bool** |  | [optional] 
**notes** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.verify_housekeeping_task_request import VerifyHousekeepingTaskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyHousekeepingTaskRequest from a JSON string
verify_housekeeping_task_request_instance = VerifyHousekeepingTaskRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyHousekeepingTaskRequest.to_json())

# convert the object into a dict
verify_housekeeping_task_request_dict = verify_housekeeping_task_request_instance.to_dict()
# create an instance of VerifyHousekeepingTaskRequest from a dict
verify_housekeeping_task_request_from_dict = VerifyHousekeepingTaskRequest.from_dict(verify_housekeeping_task_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


