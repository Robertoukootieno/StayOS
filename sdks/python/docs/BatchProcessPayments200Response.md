# BatchProcessPayments200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**successful** | [**List[Payment]**](Payment.md) |  | [optional] 
**failed** | **List[object]** |  | [optional] 

## Example

```python
from stayos_api_client.models.batch_process_payments200_response import BatchProcessPayments200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BatchProcessPayments200Response from a JSON string
batch_process_payments200_response_instance = BatchProcessPayments200Response.from_json(json)
# print the JSON string representation of the object
print(BatchProcessPayments200Response.to_json())

# convert the object into a dict
batch_process_payments200_response_dict = batch_process_payments200_response_instance.to_dict()
# create an instance of BatchProcessPayments200Response from a dict
batch_process_payments200_response_from_dict = BatchProcessPayments200Response.from_dict(batch_process_payments200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


