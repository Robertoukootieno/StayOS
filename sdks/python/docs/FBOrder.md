# FBOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **UUID** |  | [readonly] 
**property_id** | **UUID** |  | 
**stay_id** | **UUID** |  | [optional] 
**guest_id** | **UUID** |  | [optional] 
**inventory_unit_id** | **UUID** | Room number for room service | [optional] 
**order_type** | **str** |  | 
**status** | **str** |  | 
**items** | [**List[FBOrderAllOfItems]**](FBOrderAllOfItems.md) |  | [optional] 
**subtotal** | [**FBOrderAllOfSubtotal**](FBOrderAllOfSubtotal.md) |  | [optional] 
**tax** | [**FBOrderAllOfTax**](FBOrderAllOfTax.md) |  | [optional] 
**service_charge** | [**FBOrderAllOfServiceCharge**](FBOrderAllOfServiceCharge.md) |  | [optional] 
**total** | [**FBOrderAllOfTotal**](FBOrderAllOfTotal.md) |  | [optional] 
**special_instructions** | **str** |  | [optional] 
**delivery_time** | **datetime** |  | [optional] 
**served_at** | **datetime** |  | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.fb_order import FBOrder

# TODO update the JSON string below
json = "{}"
# create an instance of FBOrder from a JSON string
fb_order_instance = FBOrder.from_json(json)
# print the JSON string representation of the object
print(FBOrder.to_json())

# convert the object into a dict
fb_order_dict = fb_order_instance.to_dict()
# create an instance of FBOrder from a dict
fb_order_from_dict = FBOrder.from_dict(fb_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


