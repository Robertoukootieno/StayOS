# PurchaseOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**po_id** | **UUID** |  | [readonly] 
**po_number** | **str** | Human-readable PO number | [optional] [readonly] 
**property_id** | **UUID** |  | 
**supplier_id** | **UUID** |  | 
**status** | **str** |  | 
**items** | [**List[PurchaseOrderAllOfItems]**](PurchaseOrderAllOfItems.md) |  | [optional] 
**subtotal** | [**PurchaseOrderAllOfSubtotal**](PurchaseOrderAllOfSubtotal.md) |  | [optional] 
**tax** | [**PurchaseOrderAllOfTax**](PurchaseOrderAllOfTax.md) |  | [optional] 
**total** | [**PurchaseOrderAllOfTotal**](PurchaseOrderAllOfTotal.md) |  | [optional] 
**delivery_address** | [**Model0**](Model0.md) |  | [optional] 
**requested_delivery_date** | **date** |  | [optional] 
**actual_delivery_date** | **date** |  | [optional] 
**approved_by** | **UUID** |  | [optional] 
**approved_at** | **datetime** |  | [optional] 
**submitted_at** | **datetime** |  | [optional] 
**notes** | **str** |  | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.purchase_order import PurchaseOrder

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseOrder from a JSON string
purchase_order_instance = PurchaseOrder.from_json(json)
# print the JSON string representation of the object
print(PurchaseOrder.to_json())

# convert the object into a dict
purchase_order_dict = purchase_order_instance.to_dict()
# create an instance of PurchaseOrder from a dict
purchase_order_from_dict = PurchaseOrder.from_dict(purchase_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


