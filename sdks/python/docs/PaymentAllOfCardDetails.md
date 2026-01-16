# PaymentAllOfCardDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last4** | **str** |  | [optional] 
**brand** | **str** |  | [optional] 
**expiry_month** | **int** |  | [optional] 
**expiry_year** | **int** |  | [optional] 

## Example

```python
from stayos_api_client.models.payment_all_of_card_details import PaymentAllOfCardDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentAllOfCardDetails from a JSON string
payment_all_of_card_details_instance = PaymentAllOfCardDetails.from_json(json)
# print the JSON string representation of the object
print(PaymentAllOfCardDetails.to_json())

# convert the object into a dict
payment_all_of_card_details_dict = payment_all_of_card_details_instance.to_dict()
# create an instance of PaymentAllOfCardDetails from a dict
payment_all_of_card_details_from_dict = PaymentAllOfCardDetails.from_dict(payment_all_of_card_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


