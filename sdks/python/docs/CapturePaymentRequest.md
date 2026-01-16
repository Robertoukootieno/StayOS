# CapturePaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.capture_payment_request import CapturePaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CapturePaymentRequest from a JSON string
capture_payment_request_instance = CapturePaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CapturePaymentRequest.to_json())

# convert the object into a dict
capture_payment_request_dict = capture_payment_request_instance.to_dict()
# create an instance of CapturePaymentRequest from a dict
capture_payment_request_from_dict = CapturePaymentRequest.from_dict(capture_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


