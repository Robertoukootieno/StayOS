# PricingModelAllOfSeasonalAdjustments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**start_date** | **date** |  | [optional] 
**end_date** | **date** |  | [optional] 
**adjustment_type** | **str** |  | [optional] 
**adjustment_value** | **float** |  | [optional] 
**description** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.pricing_model_all_of_seasonal_adjustments import PricingModelAllOfSeasonalAdjustments

# TODO update the JSON string below
json = "{}"
# create an instance of PricingModelAllOfSeasonalAdjustments from a JSON string
pricing_model_all_of_seasonal_adjustments_instance = PricingModelAllOfSeasonalAdjustments.from_json(json)
# print the JSON string representation of the object
print(PricingModelAllOfSeasonalAdjustments.to_json())

# convert the object into a dict
pricing_model_all_of_seasonal_adjustments_dict = pricing_model_all_of_seasonal_adjustments_instance.to_dict()
# create an instance of PricingModelAllOfSeasonalAdjustments from a dict
pricing_model_all_of_seasonal_adjustments_from_dict = PricingModelAllOfSeasonalAdjustments.from_dict(pricing_model_all_of_seasonal_adjustments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


