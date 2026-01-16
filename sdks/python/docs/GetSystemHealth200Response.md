# GetSystemHealth200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 
**version** | **str** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
**services** | **object** |  | [optional] 

## Example

```python
from stayos_api_client.models.get_system_health200_response import GetSystemHealth200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetSystemHealth200Response from a JSON string
get_system_health200_response_instance = GetSystemHealth200Response.from_json(json)
# print the JSON string representation of the object
print(GetSystemHealth200Response.to_json())

# convert the object into a dict
get_system_health200_response_dict = get_system_health200_response_instance.to_dict()
# create an instance of GetSystemHealth200Response from a dict
get_system_health200_response_from_dict = GetSystemHealth200Response.from_dict(get_system_health200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


