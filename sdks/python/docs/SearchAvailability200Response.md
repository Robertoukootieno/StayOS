# SearchAvailability200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search_id** | **UUID** | Unique search identifier for tracking | [optional] 
**search_criteria** | **object** | Echo of search criteria | [optional] 
**results** | [**List[SearchAvailability200ResponseResultsInner]**](SearchAvailability200ResponseResultsInner.md) |  | [optional] 
**metadata** | [**SearchAvailability200ResponseMetadata**](SearchAvailability200ResponseMetadata.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.search_availability200_response import SearchAvailability200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAvailability200Response from a JSON string
search_availability200_response_instance = SearchAvailability200Response.from_json(json)
# print the JSON string representation of the object
print(SearchAvailability200Response.to_json())

# convert the object into a dict
search_availability200_response_dict = search_availability200_response_instance.to_dict()
# create an instance of SearchAvailability200Response from a dict
search_availability200_response_from_dict = SearchAvailability200Response.from_dict(search_availability200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


