# FBOrderAllOfItems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**menu_item_id** | **UUID** |  | [optional] 
**name** | **str** |  | [optional] 
**quantity** | **int** |  | [optional] 
**unit_price** | [**Model0**](Model0.md) |  | [optional] 
**special_instructions** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.fb_order_all_of_items import FBOrderAllOfItems

# TODO update the JSON string below
json = "{}"
# create an instance of FBOrderAllOfItems from a JSON string
fb_order_all_of_items_instance = FBOrderAllOfItems.from_json(json)
# print the JSON string representation of the object
print(FBOrderAllOfItems.to_json())

# convert the object into a dict
fb_order_all_of_items_dict = fb_order_all_of_items_instance.to_dict()
# create an instance of FBOrderAllOfItems from a dict
fb_order_all_of_items_from_dict = FBOrderAllOfItems.from_dict(fb_order_all_of_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


