# MaintenanceRequestAllOfWorkLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **datetime** |  | [optional] 
**technician** | **UUID** |  | [optional] 
**action** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.maintenance_request_all_of_work_log import MaintenanceRequestAllOfWorkLog

# TODO update the JSON string below
json = "{}"
# create an instance of MaintenanceRequestAllOfWorkLog from a JSON string
maintenance_request_all_of_work_log_instance = MaintenanceRequestAllOfWorkLog.from_json(json)
# print the JSON string representation of the object
print(MaintenanceRequestAllOfWorkLog.to_json())

# convert the object into a dict
maintenance_request_all_of_work_log_dict = maintenance_request_all_of_work_log_instance.to_dict()
# create an instance of MaintenanceRequestAllOfWorkLog from a dict
maintenance_request_all_of_work_log_from_dict = MaintenanceRequestAllOfWorkLog.from_dict(maintenance_request_all_of_work_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


