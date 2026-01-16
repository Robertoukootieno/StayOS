# SearchAvailability200ResponseMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_results** | **int** |  | [optional] 
**search_duration** | **int** | Search duration in milliseconds | [optional] 
**cache_hit** | **bool** |  | [optional] 

## Example

```python
from stayos_api_client.models.search_availability200_response_metadata import SearchAvailability200ResponseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAvailability200ResponseMetadata from a JSON string
search_availability200_response_metadata_instance = SearchAvailability200ResponseMetadata.from_json(json)
# print the JSON string representation of the object
print(SearchAvailability200ResponseMetadata.to_json())

# convert the object into a dict
search_availability200_response_metadata_dict = search_availability200_response_metadata_instance.to_dict()
# create an instance of SearchAvailability200ResponseMetadata from a dict
search_availability200_response_metadata_from_dict = SearchAvailability200ResponseMetadata.from_dict(search_availability200_response_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


