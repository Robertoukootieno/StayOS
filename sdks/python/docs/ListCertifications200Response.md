# ListCertifications200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PropertyCertification]**](PropertyCertification.md) |  | 
**pagination** | [**PaginatedResponseAllOfPagination**](PaginatedResponseAllOfPagination.md) |  | 
**links** | [**PaginatedResponseAllOfLinks**](PaginatedResponseAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.list_certifications200_response import ListCertifications200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListCertifications200Response from a JSON string
list_certifications200_response_instance = ListCertifications200Response.from_json(json)
# print the JSON string representation of the object
print(ListCertifications200Response.to_json())

# convert the object into a dict
list_certifications200_response_dict = list_certifications200_response_instance.to_dict()
# create an instance of ListCertifications200Response from a dict
list_certifications200_response_from_dict = ListCertifications200Response.from_dict(list_certifications200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


