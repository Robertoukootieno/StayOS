# IncidentAllOfCorrectiveActions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**taken_by** | **UUID** |  | [optional] 
**taken_at** | **datetime** |  | [optional] 

## Example

```python
from stayos_api_client.models.incident_all_of_corrective_actions import IncidentAllOfCorrectiveActions

# TODO update the JSON string below
json = "{}"
# create an instance of IncidentAllOfCorrectiveActions from a JSON string
incident_all_of_corrective_actions_instance = IncidentAllOfCorrectiveActions.from_json(json)
# print the JSON string representation of the object
print(IncidentAllOfCorrectiveActions.to_json())

# convert the object into a dict
incident_all_of_corrective_actions_dict = incident_all_of_corrective_actions_instance.to_dict()
# create an instance of IncidentAllOfCorrectiveActions from a dict
incident_all_of_corrective_actions_from_dict = IncidentAllOfCorrectiveActions.from_dict(incident_all_of_corrective_actions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


