# PricingModelAllOfFees


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**amount** | [**Model0**](Model0.md) |  | [optional] 
**is_optional** | **bool** |  | [optional] [default to False]

## Example

```python
from stayos_api_client.models.pricing_model_all_of_fees import PricingModelAllOfFees

# TODO update the JSON string below
json = "{}"
# create an instance of PricingModelAllOfFees from a JSON string
pricing_model_all_of_fees_instance = PricingModelAllOfFees.from_json(json)
# print the JSON string representation of the object
print(PricingModelAllOfFees.to_json())

# convert the object into a dict
pricing_model_all_of_fees_dict = pricing_model_all_of_fees_instance.to_dict()
# create an instance of PricingModelAllOfFees from a dict
pricing_model_all_of_fees_from_dict = PricingModelAllOfFees.from_dict(pricing_model_all_of_fees_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


