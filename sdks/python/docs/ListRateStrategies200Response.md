# ListRateStrategies200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[RateStrategy]**](RateStrategy.md) |  | 
**pagination** | [**PaginatedResponseAllOfPagination**](PaginatedResponseAllOfPagination.md) |  | 
**links** | [**PaginatedResponseAllOfLinks**](PaginatedResponseAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.list_rate_strategies200_response import ListRateStrategies200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListRateStrategies200Response from a JSON string
list_rate_strategies200_response_instance = ListRateStrategies200Response.from_json(json)
# print the JSON string representation of the object
print(ListRateStrategies200Response.to_json())

# convert the object into a dict
list_rate_strategies200_response_dict = list_rate_strategies200_response_instance.to_dict()
# create an instance of ListRateStrategies200Response from a dict
list_rate_strategies200_response_from_dict = ListRateStrategies200Response.from_dict(list_rate_strategies200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


