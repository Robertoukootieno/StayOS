# MaintenanceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **UUID** |  | [readonly] 
**property_id** | **UUID** |  | 
**inventory_unit_id** | **UUID** | Specific room/unit (if applicable) | [optional] 
**category** | **str** |  | 
**priority** | **str** |  | 
**status** | **str** |  | 
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**reported_by** | **UUID** |  | [optional] 
**assigned_to** | **UUID** | Technician ID | [optional] 
**scheduled_for** | **datetime** |  | [optional] 
**completed_at** | **datetime** |  | [optional] 
**verified_at** | **datetime** |  | [optional] 
**estimated_cost** | [**Model0**](Model0.md) |  | [optional] 
**actual_cost** | [**Model0**](Model0.md) |  | [optional] 
**work_log** | [**List[MaintenanceRequestAllOfWorkLog]**](MaintenanceRequestAllOfWorkLog.md) |  | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.maintenance_request import MaintenanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MaintenanceRequest from a JSON string
maintenance_request_instance = MaintenanceRequest.from_json(json)
# print the JSON string representation of the object
print(MaintenanceRequest.to_json())

# convert the object into a dict
maintenance_request_dict = maintenance_request_instance.to_dict()
# create an instance of MaintenanceRequest from a dict
maintenance_request_from_dict = MaintenanceRequest.from_dict(maintenance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


