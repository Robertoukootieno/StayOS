# BatchProcessPaymentsRequestPaymentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folio_id** | **UUID** |  | [optional] 
**amount** | [**Money**](Money.md) |  | [optional] 
**payment_method** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.batch_process_payments_request_payments_inner import BatchProcessPaymentsRequestPaymentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BatchProcessPaymentsRequestPaymentsInner from a JSON string
batch_process_payments_request_payments_inner_instance = BatchProcessPaymentsRequestPaymentsInner.from_json(json)
# print the JSON string representation of the object
print(BatchProcessPaymentsRequestPaymentsInner.to_json())

# convert the object into a dict
batch_process_payments_request_payments_inner_dict = batch_process_payments_request_payments_inner_instance.to_dict()
# create an instance of BatchProcessPaymentsRequestPaymentsInner from a dict
batch_process_payments_request_payments_inner_from_dict = BatchProcessPaymentsRequestPaymentsInner.from_dict(batch_process_payments_request_payments_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


