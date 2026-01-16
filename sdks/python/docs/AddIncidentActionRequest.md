# AddIncidentActionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | 
**assigned_to** | **UUID** |  | [optional] 

## Example

```python
from stayos_api_client.models.add_incident_action_request import AddIncidentActionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddIncidentActionRequest from a JSON string
add_incident_action_request_instance = AddIncidentActionRequest.from_json(json)
# print the JSON string representation of the object
print(AddIncidentActionRequest.to_json())

# convert the object into a dict
add_incident_action_request_dict = add_incident_action_request_instance.to_dict()
# create an instance of AddIncidentActionRequest from a dict
add_incident_action_request_from_dict = AddIncidentActionRequest.from_dict(add_incident_action_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


