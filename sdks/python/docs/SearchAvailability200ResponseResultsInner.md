# SearchAvailability200ResponseResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_unit_id** | **UUID** |  | [optional] 
**unit_type** | [**UnitType**](UnitType.md) |  | [optional] 
**var_property** | [**ModelProperty**](ModelProperty.md) |  | [optional] 
**rate_strategy** | [**RateStrategy**](RateStrategy.md) |  | [optional] 
**total_price** | [**Money**](Money.md) |  | [optional] 
**price_breakdown** | [**List[SearchAvailability200ResponseResultsInnerPriceBreakdownInner]**](SearchAvailability200ResponseResultsInnerPriceBreakdownInner.md) |  | [optional] 
**availability** | **str** |  | [optional] 
**cancellation_policy** | [**CancellationPolicy**](CancellationPolicy.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.search_availability200_response_results_inner import SearchAvailability200ResponseResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAvailability200ResponseResultsInner from a JSON string
search_availability200_response_results_inner_instance = SearchAvailability200ResponseResultsInner.from_json(json)
# print the JSON string representation of the object
print(SearchAvailability200ResponseResultsInner.to_json())

# convert the object into a dict
search_availability200_response_results_inner_dict = search_availability200_response_results_inner_instance.to_dict()
# create an instance of SearchAvailability200ResponseResultsInner from a dict
search_availability200_response_results_inner_from_dict = SearchAvailability200ResponseResultsInner.from_dict(search_availability200_response_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


