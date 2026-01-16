# PricingModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_rates** | [**List[PricingModelAllOfBaseRates]**](PricingModelAllOfBaseRates.md) | Base rates per unit type | 
**occupancy_pricing** | [**PricingModelAllOfOccupancyPricing**](PricingModelAllOfOccupancyPricing.md) |  | [optional] 
**seasonal_adjustments** | [**List[PricingModelAllOfSeasonalAdjustments]**](PricingModelAllOfSeasonalAdjustments.md) |  | [optional] 
**length_of_stay_discounts** | [**List[PricingModelAllOfLengthOfStayDiscounts]**](PricingModelAllOfLengthOfStayDiscounts.md) |  | [optional] 
**taxes** | [**List[PricingModelAllOfTaxes]**](PricingModelAllOfTaxes.md) |  | [optional] 
**fees** | [**List[PricingModelAllOfFees]**](PricingModelAllOfFees.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.pricing_model import PricingModel

# TODO update the JSON string below
json = "{}"
# create an instance of PricingModel from a JSON string
pricing_model_instance = PricingModel.from_json(json)
# print the JSON string representation of the object
print(PricingModel.to_json())

# convert the object into a dict
pricing_model_dict = pricing_model_instance.to_dict()
# create an instance of PricingModel from a dict
pricing_model_from_dict = PricingModel.from_dict(pricing_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


