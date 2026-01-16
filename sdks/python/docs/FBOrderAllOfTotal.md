# FBOrderAllOfTotal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | Decimal amount (always 2 decimal places) | 
**currency** | **str** | ISO 4217 currency code | 

## Example

```python
from stayos_api_client.models.fb_order_all_of_total import FBOrderAllOfTotal

# TODO update the JSON string below
json = "{}"
# create an instance of FBOrderAllOfTotal from a JSON string
fb_order_all_of_total_instance = FBOrderAllOfTotal.from_json(json)
# print the JSON string representation of the object
print(FBOrderAllOfTotal.to_json())

# convert the object into a dict
fb_order_all_of_total_dict = fb_order_all_of_total_instance.to_dict()
# create an instance of FBOrderAllOfTotal from a dict
fb_order_all_of_total_from_dict = FBOrderAllOfTotal.from_dict(fb_order_all_of_total_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


