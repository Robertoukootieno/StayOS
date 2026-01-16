# ConfirmFBOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimated_delivery** | **datetime** |  | [optional] 

## Example

```python
from stayos_api_client.models.confirm_fb_order_request import ConfirmFBOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConfirmFBOrderRequest from a JSON string
confirm_fb_order_request_instance = ConfirmFBOrderRequest.from_json(json)
# print the JSON string representation of the object
print(ConfirmFBOrderRequest.to_json())

# convert the object into a dict
confirm_fb_order_request_dict = confirm_fb_order_request_instance.to_dict()
# create an instance of ConfirmFBOrderRequest from a dict
confirm_fb_order_request_from_dict = ConfirmFBOrderRequest.from_dict(confirm_fb_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


