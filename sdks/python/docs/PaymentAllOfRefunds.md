# PaymentAllOfRefunds


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refund_id** | **UUID** |  | [optional] 
**amount** | [**Model0**](Model0.md) |  | [optional] 
**reason** | **str** |  | [optional] 
**refunded_at** | **datetime** |  | [optional] 

## Example

```python
from stayos_api_client.models.payment_all_of_refunds import PaymentAllOfRefunds

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentAllOfRefunds from a JSON string
payment_all_of_refunds_instance = PaymentAllOfRefunds.from_json(json)
# print the JSON string representation of the object
print(PaymentAllOfRefunds.to_json())

# convert the object into a dict
payment_all_of_refunds_dict = payment_all_of_refunds_instance.to_dict()
# create an instance of PaymentAllOfRefunds from a dict
payment_all_of_refunds_from_dict = PaymentAllOfRefunds.from_dict(payment_all_of_refunds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


