# ReceivePurchaseOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**received_items** | [**List[ReceivePurchaseOrderRequestReceivedItemsInner]**](ReceivePurchaseOrderRequestReceivedItemsInner.md) |  | [optional] 
**received_by** | **UUID** |  | [optional] 
**notes** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.receive_purchase_order_request import ReceivePurchaseOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivePurchaseOrderRequest from a JSON string
receive_purchase_order_request_instance = ReceivePurchaseOrderRequest.from_json(json)
# print the JSON string representation of the object
print(ReceivePurchaseOrderRequest.to_json())

# convert the object into a dict
receive_purchase_order_request_dict = receive_purchase_order_request_instance.to_dict()
# create an instance of ReceivePurchaseOrderRequest from a dict
receive_purchase_order_request_from_dict = ReceivePurchaseOrderRequest.from_dict(receive_purchase_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


