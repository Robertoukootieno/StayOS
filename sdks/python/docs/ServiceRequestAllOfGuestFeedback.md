# ServiceRequestAllOfGuestFeedback


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rating** | **int** |  | [optional] 
**comments** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.service_request_all_of_guest_feedback import ServiceRequestAllOfGuestFeedback

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceRequestAllOfGuestFeedback from a JSON string
service_request_all_of_guest_feedback_instance = ServiceRequestAllOfGuestFeedback.from_json(json)
# print the JSON string representation of the object
print(ServiceRequestAllOfGuestFeedback.to_json())

# convert the object into a dict
service_request_all_of_guest_feedback_dict = service_request_all_of_guest_feedback_instance.to_dict()
# create an instance of ServiceRequestAllOfGuestFeedback from a dict
service_request_all_of_guest_feedback_from_dict = ServiceRequestAllOfGuestFeedback.from_dict(service_request_all_of_guest_feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


