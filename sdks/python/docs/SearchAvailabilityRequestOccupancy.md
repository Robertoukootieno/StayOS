# SearchAvailabilityRequestOccupancy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adults** | **int** |  | 
**children** | **int** |  | [optional] 
**child_ages** | **List[int]** |  | [optional] 

## Example

```python
from stayos_api_client.models.search_availability_request_occupancy import SearchAvailabilityRequestOccupancy

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAvailabilityRequestOccupancy from a JSON string
search_availability_request_occupancy_instance = SearchAvailabilityRequestOccupancy.from_json(json)
# print the JSON string representation of the object
print(SearchAvailabilityRequestOccupancy.to_json())

# convert the object into a dict
search_availability_request_occupancy_dict = search_availability_request_occupancy_instance.to_dict()
# create an instance of SearchAvailabilityRequestOccupancy from a dict
search_availability_request_occupancy_from_dict = SearchAvailabilityRequestOccupancy.from_dict(search_availability_request_occupancy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


