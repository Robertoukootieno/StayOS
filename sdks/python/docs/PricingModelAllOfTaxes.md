# PricingModelAllOfTaxes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**rate** | **float** |  | [optional] 
**is_included** | **bool** | Whether tax is included in displayed rate | [optional] [default to False]

## Example

```python
from stayos_api_client.models.pricing_model_all_of_taxes import PricingModelAllOfTaxes

# TODO update the JSON string below
json = "{}"
# create an instance of PricingModelAllOfTaxes from a JSON string
pricing_model_all_of_taxes_instance = PricingModelAllOfTaxes.from_json(json)
# print the JSON string representation of the object
print(PricingModelAllOfTaxes.to_json())

# convert the object into a dict
pricing_model_all_of_taxes_dict = pricing_model_all_of_taxes_instance.to_dict()
# create an instance of PricingModelAllOfTaxes from a dict
pricing_model_all_of_taxes_from_dict = PricingModelAllOfTaxes.from_dict(pricing_model_all_of_taxes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


