# Feedback


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedback_id** | **UUID** |  | [readonly] 
**guest_id** | **UUID** |  | 
**stay_id** | **UUID** | Associated stay (if applicable) | [optional] 
**property_id** | **UUID** |  | [optional] 
**type** | **str** |  | 
**category** | **str** |  | [optional] 
**rating** | **int** | Overall rating (1-5 stars) | 
**subject** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**status** | **str** |  | 
**priority** | **str** |  | [optional] [default to 'MEDIUM']
**response** | [**FeedbackAllOfResponse**](FeedbackAllOfResponse.md) |  | [optional] 
**service_recovery** | [**FeedbackAllOfServiceRecovery**](FeedbackAllOfServiceRecovery.md) |  | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.feedback import Feedback

# TODO update the JSON string below
json = "{}"
# create an instance of Feedback from a JSON string
feedback_instance = Feedback.from_json(json)
# print the JSON string representation of the object
print(Feedback.to_json())

# convert the object into a dict
feedback_dict = feedback_instance.to_dict()
# create an instance of Feedback from a dict
feedback_from_dict = Feedback.from_dict(feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


