# InitiateServiceRecoveryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** |  | [optional] 
**compensation** | [**Money**](Money.md) |  | [optional] 
**notes** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.initiate_service_recovery_request import InitiateServiceRecoveryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InitiateServiceRecoveryRequest from a JSON string
initiate_service_recovery_request_instance = InitiateServiceRecoveryRequest.from_json(json)
# print the JSON string representation of the object
print(InitiateServiceRecoveryRequest.to_json())

# convert the object into a dict
initiate_service_recovery_request_dict = initiate_service_recovery_request_instance.to_dict()
# create an instance of InitiateServiceRecoveryRequest from a dict
initiate_service_recovery_request_from_dict = InitiateServiceRecoveryRequest.from_dict(initiate_service_recovery_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


