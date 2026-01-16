# RespondToFeedbackRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 

## Example

```python
from stayos_api_client.models.respond_to_feedback_request import RespondToFeedbackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RespondToFeedbackRequest from a JSON string
respond_to_feedback_request_instance = RespondToFeedbackRequest.from_json(json)
# print the JSON string representation of the object
print(RespondToFeedbackRequest.to_json())

# convert the object into a dict
respond_to_feedback_request_dict = respond_to_feedback_request_instance.to_dict()
# create an instance of RespondToFeedbackRequest from a dict
respond_to_feedback_request_from_dict = RespondToFeedbackRequest.from_dict(respond_to_feedback_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


