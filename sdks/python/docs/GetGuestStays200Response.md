# GetGuestStays200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List[object]** |  | 
**pagination** | [**PaginatedResponseAllOfPagination**](PaginatedResponseAllOfPagination.md) |  | 
**links** | [**PaginatedResponseAllOfLinks**](PaginatedResponseAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.get_guest_stays200_response import GetGuestStays200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetGuestStays200Response from a JSON string
get_guest_stays200_response_instance = GetGuestStays200Response.from_json(json)
# print the JSON string representation of the object
print(GetGuestStays200Response.to_json())

# convert the object into a dict
get_guest_stays200_response_dict = get_guest_stays200_response_instance.to_dict()
# create an instance of GetGuestStays200Response from a dict
get_guest_stays200_response_from_dict = GetGuestStays200Response.from_dict(get_guest_stays200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


