# ListIncidents200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Incident]**](Incident.md) |  | 
**pagination** | [**PaginatedResponseAllOfPagination**](PaginatedResponseAllOfPagination.md) |  | 
**links** | [**PaginatedResponseAllOfLinks**](PaginatedResponseAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.list_incidents200_response import ListIncidents200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListIncidents200Response from a JSON string
list_incidents200_response_instance = ListIncidents200Response.from_json(json)
# print the JSON string representation of the object
print(ListIncidents200Response.to_json())

# convert the object into a dict
list_incidents200_response_dict = list_incidents200_response_instance.to_dict()
# create an instance of ListIncidents200Response from a dict
list_incidents200_response_from_dict = ListIncidents200Response.from_dict(list_incidents200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


