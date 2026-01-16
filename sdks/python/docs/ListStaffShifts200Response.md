# ListStaffShifts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[StaffShift]**](StaffShift.md) |  | 
**pagination** | [**PaginatedResponseAllOfPagination**](PaginatedResponseAllOfPagination.md) |  | 
**links** | [**PaginatedResponseAllOfLinks**](PaginatedResponseAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.list_staff_shifts200_response import ListStaffShifts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListStaffShifts200Response from a JSON string
list_staff_shifts200_response_instance = ListStaffShifts200Response.from_json(json)
# print the JSON string representation of the object
print(ListStaffShifts200Response.to_json())

# convert the object into a dict
list_staff_shifts200_response_dict = list_staff_shifts200_response_instance.to_dict()
# create an instance of ListStaffShifts200Response from a dict
list_staff_shifts200_response_from_dict = ListStaffShifts200Response.from_dict(list_staff_shifts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


