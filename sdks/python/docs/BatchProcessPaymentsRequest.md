# BatchProcessPaymentsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payments** | [**List[BatchProcessPaymentsRequestPaymentsInner]**](BatchProcessPaymentsRequestPaymentsInner.md) |  | 

## Example

```python
from stayos_api_client.models.batch_process_payments_request import BatchProcessPaymentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchProcessPaymentsRequest from a JSON string
batch_process_payments_request_instance = BatchProcessPaymentsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchProcessPaymentsRequest.to_json())

# convert the object into a dict
batch_process_payments_request_dict = batch_process_payments_request_instance.to_dict()
# create an instance of BatchProcessPaymentsRequest from a dict
batch_process_payments_request_from_dict = BatchProcessPaymentsRequest.from_dict(batch_process_payments_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


