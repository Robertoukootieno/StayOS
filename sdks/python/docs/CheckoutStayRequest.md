# CheckoutStayRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkout_time** | **datetime** |  | [optional] 
**notes** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.checkout_stay_request import CheckoutStayRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckoutStayRequest from a JSON string
checkout_stay_request_instance = CheckoutStayRequest.from_json(json)
# print the JSON string representation of the object
print(CheckoutStayRequest.to_json())

# convert the object into a dict
checkout_stay_request_dict = checkout_stay_request_instance.to_dict()
# create an instance of CheckoutStayRequest from a dict
checkout_stay_request_from_dict = CheckoutStayRequest.from_dict(checkout_stay_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


