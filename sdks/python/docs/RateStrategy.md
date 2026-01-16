# RateStrategy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_strategy_id** | **UUID** |  | [optional] [readonly] 
**property_id** | **UUID** |  | 
**name** | **str** |  | 
**description** | **str** |  | [optional] 
**strategy_type** | **str** |  | 
**is_active** | **bool** |  | [optional] [default to True]
**applicability** | [**Model0**](Model0.md) |  | [optional] 
**pricing_model** | [**Model0**](Model0.md) |  | 
**cancellation_terms** | [**Model0**](Model0.md) |  | [optional] 
**channel_distribution** | [**List[Model0]**](Model0.md) |  | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 
**links** | [**RateStrategyAllOfLinks**](RateStrategyAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.rate_strategy import RateStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of RateStrategy from a JSON string
rate_strategy_instance = RateStrategy.from_json(json)
# print the JSON string representation of the object
print(RateStrategy.to_json())

# convert the object into a dict
rate_strategy_dict = rate_strategy_instance.to_dict()
# create an instance of RateStrategy from a dict
rate_strategy_from_dict = RateStrategy.from_dict(rate_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


