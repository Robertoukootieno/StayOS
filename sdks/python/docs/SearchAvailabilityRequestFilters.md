# SearchAvailabilityRequestFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_price** | [**Money**](Money.md) |  | [optional] 
**max_price** | [**Money**](Money.md) |  | [optional] 
**amenities** | **List[str]** |  | [optional] 
**accessibility** | **bool** | Require wheelchair accessible units | [optional] 

## Example

```python
from stayos_api_client.models.search_availability_request_filters import SearchAvailabilityRequestFilters

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAvailabilityRequestFilters from a JSON string
search_availability_request_filters_instance = SearchAvailabilityRequestFilters.from_json(json)
# print the JSON string representation of the object
print(SearchAvailabilityRequestFilters.to_json())

# convert the object into a dict
search_availability_request_filters_dict = search_availability_request_filters_instance.to_dict()
# create an instance of SearchAvailabilityRequestFilters from a dict
search_availability_request_filters_from_dict = SearchAvailabilityRequestFilters.from_dict(search_availability_request_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


