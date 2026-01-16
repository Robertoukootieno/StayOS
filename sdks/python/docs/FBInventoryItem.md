# FBInventoryItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_item_id** | **UUID** |  | [readonly] 
**name** | **str** |  | 
**category** | **str** |  | [optional] 
**unit** | **str** |  | 
**current_stock** | **float** |  | 
**minimum_stock** | **float** |  | [optional] 
**maximum_stock** | **float** |  | [optional] 
**reorder_point** | **float** |  | [optional] 
**unit_cost** | [**Model0**](Model0.md) |  | [optional] 
**supplier** | **str** |  | [optional] 
**last_restocked** | **datetime** |  | [optional] 
**expiry_date** | **date** |  | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.fb_inventory_item import FBInventoryItem

# TODO update the JSON string below
json = "{}"
# create an instance of FBInventoryItem from a JSON string
fb_inventory_item_instance = FBInventoryItem.from_json(json)
# print the JSON string representation of the object
print(FBInventoryItem.to_json())

# convert the object into a dict
fb_inventory_item_dict = fb_inventory_item_instance.to_dict()
# create an instance of FBInventoryItem from a dict
fb_inventory_item_from_dict = FBInventoryItem.from_dict(fb_inventory_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


