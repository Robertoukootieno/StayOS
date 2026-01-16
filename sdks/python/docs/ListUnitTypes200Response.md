# ListUnitTypes200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[UnitType]**](UnitType.md) |  | 
**pagination** | [**PaginatedResponseAllOfPagination**](PaginatedResponseAllOfPagination.md) |  | 
**links** | [**PaginatedResponseAllOfLinks**](PaginatedResponseAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.list_unit_types200_response import ListUnitTypes200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListUnitTypes200Response from a JSON string
list_unit_types200_response_instance = ListUnitTypes200Response.from_json(json)
# print the JSON string representation of the object
print(ListUnitTypes200Response.to_json())

# convert the object into a dict
list_unit_types200_response_dict = list_unit_types200_response_instance.to_dict()
# create an instance of ListUnitTypes200Response from a dict
list_unit_types200_response_from_dict = ListUnitTypes200Response.from_dict(list_unit_types200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


