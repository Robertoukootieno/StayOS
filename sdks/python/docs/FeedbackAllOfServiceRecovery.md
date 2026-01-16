# FeedbackAllOfServiceRecovery

Service recovery actions taken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** |  | [optional] 
**compensation** | [**Model0**](Model0.md) |  | [optional] 
**notes** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.feedback_all_of_service_recovery import FeedbackAllOfServiceRecovery

# TODO update the JSON string below
json = "{}"
# create an instance of FeedbackAllOfServiceRecovery from a JSON string
feedback_all_of_service_recovery_instance = FeedbackAllOfServiceRecovery.from_json(json)
# print the JSON string representation of the object
print(FeedbackAllOfServiceRecovery.to_json())

# convert the object into a dict
feedback_all_of_service_recovery_dict = feedback_all_of_service_recovery_instance.to_dict()
# create an instance of FeedbackAllOfServiceRecovery from a dict
feedback_all_of_service_recovery_from_dict = FeedbackAllOfServiceRecovery.from_dict(feedback_all_of_service_recovery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


