# PricingModelAllOfOccupancyPricing

Per-person pricing adjustments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | [optional] [default to False]
**base_occupancy** | **int** |  | [optional] 
**additional_guest_charge** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.pricing_model_all_of_occupancy_pricing import PricingModelAllOfOccupancyPricing

# TODO update the JSON string below
json = "{}"
# create an instance of PricingModelAllOfOccupancyPricing from a JSON string
pricing_model_all_of_occupancy_pricing_instance = PricingModelAllOfOccupancyPricing.from_json(json)
# print the JSON string representation of the object
print(PricingModelAllOfOccupancyPricing.to_json())

# convert the object into a dict
pricing_model_all_of_occupancy_pricing_dict = pricing_model_all_of_occupancy_pricing_instance.to_dict()
# create an instance of PricingModelAllOfOccupancyPricing from a dict
pricing_model_all_of_occupancy_pricing_from_dict = PricingModelAllOfOccupancyPricing.from_dict(pricing_model_all_of_occupancy_pricing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


