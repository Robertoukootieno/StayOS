# GetStaffPerformance200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**staff_id** | **UUID** |  | [optional] 
**metrics** | **object** |  | [optional] 

## Example

```python
from stayos_api_client.models.get_staff_performance200_response import GetStaffPerformance200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetStaffPerformance200Response from a JSON string
get_staff_performance200_response_instance = GetStaffPerformance200Response.from_json(json)
# print the JSON string representation of the object
print(GetStaffPerformance200Response.to_json())

# convert the object into a dict
get_staff_performance200_response_dict = get_staff_performance200_response_instance.to_dict()
# create an instance of GetStaffPerformance200Response from a dict
get_staff_performance200_response_from_dict = GetStaffPerformance200Response.from_dict(get_staff_performance200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


