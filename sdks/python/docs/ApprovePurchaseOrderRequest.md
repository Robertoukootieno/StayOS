# ApprovePurchaseOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_by** | **UUID** |  | [optional] 
**notes** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.approve_purchase_order_request import ApprovePurchaseOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApprovePurchaseOrderRequest from a JSON string
approve_purchase_order_request_instance = ApprovePurchaseOrderRequest.from_json(json)
# print the JSON string representation of the object
print(ApprovePurchaseOrderRequest.to_json())

# convert the object into a dict
approve_purchase_order_request_dict = approve_purchase_order_request_instance.to_dict()
# create an instance of ApprovePurchaseOrderRequest from a dict
approve_purchase_order_request_from_dict = ApprovePurchaseOrderRequest.from_dict(approve_purchase_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


