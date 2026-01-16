# SearchAvailabilityRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_id** | **UUID** | Filter by specific property (optional) | [optional] 
**check_in_date** | **date** |  | 
**check_out_date** | **date** |  | 
**occupancy** | [**SearchAvailabilityRequestOccupancy**](SearchAvailabilityRequestOccupancy.md) |  | 
**unit_type_id** | **UUID** | Filter by unit type | [optional] 
**rate_strategy_id** | **UUID** | Filter by rate strategy | [optional] 
**filters** | [**SearchAvailabilityRequestFilters**](SearchAvailabilityRequestFilters.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.search_availability_request import SearchAvailabilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAvailabilityRequest from a JSON string
search_availability_request_instance = SearchAvailabilityRequest.from_json(json)
# print the JSON string representation of the object
print(SearchAvailabilityRequest.to_json())

# convert the object into a dict
search_availability_request_dict = search_availability_request_instance.to_dict()
# create an instance of SearchAvailabilityRequest from a dict
search_availability_request_from_dict = SearchAvailabilityRequest.from_dict(search_availability_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


