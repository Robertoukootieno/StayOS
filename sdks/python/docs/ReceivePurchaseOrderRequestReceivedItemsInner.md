# ReceivePurchaseOrderRequestReceivedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **str** |  | [optional] 
**quantity_received** | **int** |  | [optional] 

## Example

```python
from stayos_api_client.models.receive_purchase_order_request_received_items_inner import ReceivePurchaseOrderRequestReceivedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivePurchaseOrderRequestReceivedItemsInner from a JSON string
receive_purchase_order_request_received_items_inner_instance = ReceivePurchaseOrderRequestReceivedItemsInner.from_json(json)
# print the JSON string representation of the object
print(ReceivePurchaseOrderRequestReceivedItemsInner.to_json())

# convert the object into a dict
receive_purchase_order_request_received_items_inner_dict = receive_purchase_order_request_received_items_inner_instance.to_dict()
# create an instance of ReceivePurchaseOrderRequestReceivedItemsInner from a dict
receive_purchase_order_request_received_items_inner_from_dict = ReceivePurchaseOrderRequestReceivedItemsInner.from_dict(receive_purchase_order_request_received_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


