# PaginatedResponseAllOfLinks

HATEOAS navigation links

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_self** | **str** |  | [optional] 
**next** | **str** |  | [optional] 
**prev** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.paginated_response_all_of_links import PaginatedResponseAllOfLinks

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedResponseAllOfLinks from a JSON string
paginated_response_all_of_links_instance = PaginatedResponseAllOfLinks.from_json(json)
# print the JSON string representation of the object
print(PaginatedResponseAllOfLinks.to_json())

# convert the object into a dict
paginated_response_all_of_links_dict = paginated_response_all_of_links_instance.to_dict()
# create an instance of PaginatedResponseAllOfLinks from a dict
paginated_response_all_of_links_from_dict = PaginatedResponseAllOfLinks.from_dict(paginated_response_all_of_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


