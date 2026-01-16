# Payment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **UUID** |  | [readonly] 
**folio_id** | **UUID** |  | [optional] 
**amount** | [**Model0**](Model0.md) |  | 
**method** | **str** |  | 
**status** | **str** |  | 
**transaction_id** | **str** | External payment processor transaction ID | [optional] 
**card_details** | [**PaymentAllOfCardDetails**](PaymentAllOfCardDetails.md) |  | [optional] 
**processed_at** | **datetime** |  | [optional] [readonly] 
**refunds** | [**List[PaymentAllOfRefunds]**](PaymentAllOfRefunds.md) |  | [optional] 
**receipt_url** | **str** |  | [optional] [readonly] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.payment import Payment

# TODO update the JSON string below
json = "{}"
# create an instance of Payment from a JSON string
payment_instance = Payment.from_json(json)
# print the JSON string representation of the object
print(Payment.to_json())

# convert the object into a dict
payment_dict = payment_instance.to_dict()
# create an instance of Payment from a dict
payment_from_dict = Payment.from_dict(payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


