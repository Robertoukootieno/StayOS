# PricingModelAllOfLengthOfStayDiscounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minimum_nights** | **int** |  | [optional] 
**discount_type** | **str** |  | [optional] 
**discount_value** | **float** |  | [optional] 
**description** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.pricing_model_all_of_length_of_stay_discounts import PricingModelAllOfLengthOfStayDiscounts

# TODO update the JSON string below
json = "{}"
# create an instance of PricingModelAllOfLengthOfStayDiscounts from a JSON string
pricing_model_all_of_length_of_stay_discounts_instance = PricingModelAllOfLengthOfStayDiscounts.from_json(json)
# print the JSON string representation of the object
print(PricingModelAllOfLengthOfStayDiscounts.to_json())

# convert the object into a dict
pricing_model_all_of_length_of_stay_discounts_dict = pricing_model_all_of_length_of_stay_discounts_instance.to_dict()
# create an instance of PricingModelAllOfLengthOfStayDiscounts from a dict
pricing_model_all_of_length_of_stay_discounts_from_dict = PricingModelAllOfLengthOfStayDiscounts.from_dict(pricing_model_all_of_length_of_stay_discounts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


