# PricingModelAllOfBaseRates


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit_type_id** | **UUID** |  | 
**rate** | [**Model0**](Model0.md) |  | 

## Example

```python
from stayos_api_client.models.pricing_model_all_of_base_rates import PricingModelAllOfBaseRates

# TODO update the JSON string below
json = "{}"
# create an instance of PricingModelAllOfBaseRates from a JSON string
pricing_model_all_of_base_rates_instance = PricingModelAllOfBaseRates.from_json(json)
# print the JSON string representation of the object
print(PricingModelAllOfBaseRates.to_json())

# convert the object into a dict
pricing_model_all_of_base_rates_dict = pricing_model_all_of_base_rates_instance.to_dict()
# create an instance of PricingModelAllOfBaseRates from a dict
pricing_model_all_of_base_rates_from_dict = PricingModelAllOfBaseRates.from_dict(pricing_model_all_of_base_rates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


