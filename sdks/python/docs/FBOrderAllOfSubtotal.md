# FBOrderAllOfSubtotal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | Decimal amount (always 2 decimal places) | 
**currency** | **str** | ISO 4217 currency code | 

## Example

```python
from stayos_api_client.models.fb_order_all_of_subtotal import FBOrderAllOfSubtotal

# TODO update the JSON string below
json = "{}"
# create an instance of FBOrderAllOfSubtotal from a JSON string
fb_order_all_of_subtotal_instance = FBOrderAllOfSubtotal.from_json(json)
# print the JSON string representation of the object
print(FBOrderAllOfSubtotal.to_json())

# convert the object into a dict
fb_order_all_of_subtotal_dict = fb_order_all_of_subtotal_instance.to_dict()
# create an instance of FBOrderAllOfSubtotal from a dict
fb_order_all_of_subtotal_from_dict = FBOrderAllOfSubtotal.from_dict(fb_order_all_of_subtotal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


