# GetGuestLoyalty200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tier** | **str** |  | [optional] 
**points** | **int** |  | [optional] 
**lifetime_points** | **int** |  | [optional] 
**next_tier_points** | **int** |  | [optional] 

## Example

```python
from stayos_api_client.models.get_guest_loyalty200_response import GetGuestLoyalty200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetGuestLoyalty200Response from a JSON string
get_guest_loyalty200_response_instance = GetGuestLoyalty200Response.from_json(json)
# print the JSON string representation of the object
print(GetGuestLoyalty200Response.to_json())

# convert the object into a dict
get_guest_loyalty200_response_dict = get_guest_loyalty200_response_instance.to_dict()
# create an instance of GetGuestLoyalty200Response from a dict
get_guest_loyalty200_response_from_dict = GetGuestLoyalty200Response.from_dict(get_guest_loyalty200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


