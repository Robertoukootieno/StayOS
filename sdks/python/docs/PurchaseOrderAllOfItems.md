# PurchaseOrderAllOfItems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **UUID** |  | [optional] 
**description** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 
**unit** | **str** |  | [optional] 
**unit_price** | [**Model0**](Model0.md) |  | [optional] 
**total_price** | [**Model0**](Model0.md) |  | [optional] 
**received_quantity** | **float** |  | [optional] [default to 0]

## Example

```python
from stayos_api_client.models.purchase_order_all_of_items import PurchaseOrderAllOfItems

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseOrderAllOfItems from a JSON string
purchase_order_all_of_items_instance = PurchaseOrderAllOfItems.from_json(json)
# print the JSON string representation of the object
print(PurchaseOrderAllOfItems.to_json())

# convert the object into a dict
purchase_order_all_of_items_dict = purchase_order_all_of_items_instance.to_dict()
# create an instance of PurchaseOrderAllOfItems from a dict
purchase_order_all_of_items_from_dict = PurchaseOrderAllOfItems.from_dict(purchase_order_all_of_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


