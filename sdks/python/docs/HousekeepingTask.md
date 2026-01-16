# HousekeepingTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_id** | **UUID** |  | [readonly] 
**property_id** | **UUID** |  | 
**inventory_unit_id** | **UUID** | Room/unit to clean | 
**task_type** | **str** |  | 
**priority** | **str** |  | [optional] [default to 'NORMAL']
**status** | **str** |  | 
**assigned_to** | **UUID** | Staff member ID | [optional] 
**scheduled_for** | **datetime** |  | [optional] 
**started_at** | **datetime** |  | [optional] 
**completed_at** | **datetime** |  | [optional] 
**verified_at** | **datetime** |  | [optional] 
**verified_by** | **UUID** |  | [optional] 
**notes** | **str** |  | [optional] 
**issues** | **List[str]** | Issues found during cleaning | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.housekeeping_task import HousekeepingTask

# TODO update the JSON string below
json = "{}"
# create an instance of HousekeepingTask from a JSON string
housekeeping_task_instance = HousekeepingTask.from_json(json)
# print the JSON string representation of the object
print(HousekeepingTask.to_json())

# convert the object into a dict
housekeeping_task_dict = housekeeping_task_instance.to_dict()
# create an instance of HousekeepingTask from a dict
housekeeping_task_from_dict = HousekeepingTask.from_dict(housekeeping_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


