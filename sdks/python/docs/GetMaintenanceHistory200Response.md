# GetMaintenanceHistory200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **UUID** |  | [optional] 
**history** | [**List[GetMaintenanceHistory200ResponseHistoryInner]**](GetMaintenanceHistory200ResponseHistoryInner.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.get_maintenance_history200_response import GetMaintenanceHistory200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetMaintenanceHistory200Response from a JSON string
get_maintenance_history200_response_instance = GetMaintenanceHistory200Response.from_json(json)
# print the JSON string representation of the object
print(GetMaintenanceHistory200Response.to_json())

# convert the object into a dict
get_maintenance_history200_response_dict = get_maintenance_history200_response_instance.to_dict()
# create an instance of GetMaintenanceHistory200Response from a dict
get_maintenance_history200_response_from_dict = GetMaintenanceHistory200Response.from_dict(get_maintenance_history200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


