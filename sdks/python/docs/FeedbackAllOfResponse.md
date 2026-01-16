# FeedbackAllOfResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responded_by** | **UUID** |  | [optional] 
**responded_at** | **datetime** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.feedback_all_of_response import FeedbackAllOfResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FeedbackAllOfResponse from a JSON string
feedback_all_of_response_instance = FeedbackAllOfResponse.from_json(json)
# print the JSON string representation of the object
print(FeedbackAllOfResponse.to_json())

# convert the object into a dict
feedback_all_of_response_dict = feedback_all_of_response_instance.to_dict()
# create an instance of FeedbackAllOfResponse from a dict
feedback_all_of_response_from_dict = FeedbackAllOfResponse.from_dict(feedback_all_of_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


