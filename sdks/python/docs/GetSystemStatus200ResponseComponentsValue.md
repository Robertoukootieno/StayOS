# GetSystemStatus200ResponseComponentsValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 
**last_check** | **datetime** |  | [optional] 

## Example

```python
from stayos_api_client.models.get_system_status200_response_components_value import GetSystemStatus200ResponseComponentsValue

# TODO update the JSON string below
json = "{}"
# create an instance of GetSystemStatus200ResponseComponentsValue from a JSON string
get_system_status200_response_components_value_instance = GetSystemStatus200ResponseComponentsValue.from_json(json)
# print the JSON string representation of the object
print(GetSystemStatus200ResponseComponentsValue.to_json())

# convert the object into a dict
get_system_status200_response_components_value_dict = get_system_status200_response_components_value_instance.to_dict()
# create an instance of GetSystemStatus200ResponseComponentsValue from a dict
get_system_status200_response_components_value_from_dict = GetSystemStatus200ResponseComponentsValue.from_dict(get_system_status200_response_components_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


