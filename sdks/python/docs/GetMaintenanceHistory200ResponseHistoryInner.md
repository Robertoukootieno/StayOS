# GetMaintenanceHistory200ResponseHistoryInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **datetime** |  | [optional] 
**action** | **str** |  | [optional] 
**performed_by** | **UUID** |  | [optional] 
**notes** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.get_maintenance_history200_response_history_inner import GetMaintenanceHistory200ResponseHistoryInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetMaintenanceHistory200ResponseHistoryInner from a JSON string
get_maintenance_history200_response_history_inner_instance = GetMaintenanceHistory200ResponseHistoryInner.from_json(json)
# print the JSON string representation of the object
print(GetMaintenanceHistory200ResponseHistoryInner.to_json())

# convert the object into a dict
get_maintenance_history200_response_history_inner_dict = get_maintenance_history200_response_history_inner_instance.to_dict()
# create an instance of GetMaintenanceHistory200ResponseHistoryInner from a dict
get_maintenance_history200_response_history_inner_from_dict = GetMaintenanceHistory200ResponseHistoryInner.from_dict(get_maintenance_history200_response_history_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


