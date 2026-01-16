# SearchAvailability200ResponseResultsInnerPriceBreakdownInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** |  | [optional] 
**nightly_rate** | [**Money**](Money.md) |  | [optional] 
**taxes** | [**List[SearchAvailability200ResponseResultsInnerPriceBreakdownInnerTaxesInner]**](SearchAvailability200ResponseResultsInnerPriceBreakdownInnerTaxesInner.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.search_availability200_response_results_inner_price_breakdown_inner import SearchAvailability200ResponseResultsInnerPriceBreakdownInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAvailability200ResponseResultsInnerPriceBreakdownInner from a JSON string
search_availability200_response_results_inner_price_breakdown_inner_instance = SearchAvailability200ResponseResultsInnerPriceBreakdownInner.from_json(json)
# print the JSON string representation of the object
print(SearchAvailability200ResponseResultsInnerPriceBreakdownInner.to_json())

# convert the object into a dict
search_availability200_response_results_inner_price_breakdown_inner_dict = search_availability200_response_results_inner_price_breakdown_inner_instance.to_dict()
# create an instance of SearchAvailability200ResponseResultsInnerPriceBreakdownInner from a dict
search_availability200_response_results_inner_price_breakdown_inner_from_dict = SearchAvailability200ResponseResultsInnerPriceBreakdownInner.from_dict(search_availability200_response_results_inner_price_breakdown_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


