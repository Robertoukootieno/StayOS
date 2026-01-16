# RefundPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Money**](Money.md) |  | 
**reason** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.refund_payment_request import RefundPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RefundPaymentRequest from a JSON string
refund_payment_request_instance = RefundPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(RefundPaymentRequest.to_json())

# convert the object into a dict
refund_payment_request_dict = refund_payment_request_instance.to_dict()
# create an instance of RefundPaymentRequest from a dict
refund_payment_request_from_dict = RefundPaymentRequest.from_dict(refund_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


