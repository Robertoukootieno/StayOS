# InvoicePurchaseOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice_number** | **str** |  | 
**amount** | [**Money**](Money.md) |  | 
**invoice_date** | **date** |  | [optional] 

## Example

```python
from stayos_api_client.models.invoice_purchase_order_request import InvoicePurchaseOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InvoicePurchaseOrderRequest from a JSON string
invoice_purchase_order_request_instance = InvoicePurchaseOrderRequest.from_json(json)
# print the JSON string representation of the object
print(InvoicePurchaseOrderRequest.to_json())

# convert the object into a dict
invoice_purchase_order_request_dict = invoice_purchase_order_request_instance.to_dict()
# create an instance of InvoicePurchaseOrderRequest from a dict
invoice_purchase_order_request_from_dict = InvoicePurchaseOrderRequest.from_dict(invoice_purchase_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


