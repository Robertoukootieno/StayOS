# FBOrderAllOfServiceCharge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | Decimal amount (always 2 decimal places) | 
**currency** | **str** | ISO 4217 currency code | 

## Example

```python
from stayos_api_client.models.fb_order_all_of_service_charge import FBOrderAllOfServiceCharge

# TODO update the JSON string below
json = "{}"
# create an instance of FBOrderAllOfServiceCharge from a JSON string
fb_order_all_of_service_charge_instance = FBOrderAllOfServiceCharge.from_json(json)
# print the JSON string representation of the object
print(FBOrderAllOfServiceCharge.to_json())

# convert the object into a dict
fb_order_all_of_service_charge_dict = fb_order_all_of_service_charge_instance.to_dict()
# create an instance of FBOrderAllOfServiceCharge from a dict
fb_order_all_of_service_charge_from_dict = FBOrderAllOfServiceCharge.from_dict(fb_order_all_of_service_charge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


