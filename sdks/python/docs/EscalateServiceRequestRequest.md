# EscalateServiceRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** |  | 

## Example

```python
from stayos_api_client.models.escalate_service_request_request import EscalateServiceRequestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EscalateServiceRequestRequest from a JSON string
escalate_service_request_request_instance = EscalateServiceRequestRequest.from_json(json)
# print the JSON string representation of the object
print(EscalateServiceRequestRequest.to_json())

# convert the object into a dict
escalate_service_request_request_dict = escalate_service_request_request_instance.to_dict()
# create an instance of EscalateServiceRequestRequest from a dict
escalate_service_request_request_from_dict = EscalateServiceRequestRequest.from_dict(escalate_service_request_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


