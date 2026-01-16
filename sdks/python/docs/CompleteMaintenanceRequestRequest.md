# CompleteMaintenanceRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | **str** |  | [optional] 
**parts_used** | [**List[CompleteMaintenanceRequestRequestPartsUsedInner]**](CompleteMaintenanceRequestRequestPartsUsedInner.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.complete_maintenance_request_request import CompleteMaintenanceRequestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteMaintenanceRequestRequest from a JSON string
complete_maintenance_request_request_instance = CompleteMaintenanceRequestRequest.from_json(json)
# print the JSON string representation of the object
print(CompleteMaintenanceRequestRequest.to_json())

# convert the object into a dict
complete_maintenance_request_request_dict = complete_maintenance_request_request_instance.to_dict()
# create an instance of CompleteMaintenanceRequestRequest from a dict
complete_maintenance_request_request_from_dict = CompleteMaintenanceRequestRequest.from_dict(complete_maintenance_request_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


