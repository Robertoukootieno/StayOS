# Incident


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incident_id** | **UUID** |  | [readonly] 
**property_id** | **UUID** |  | 
**type** | **str** |  | 
**severity** | **str** |  | 
**status** | **str** |  | 
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**location** | **str** | Location within property | [optional] 
**reported_by** | **UUID** |  | [optional] 
**incident_date** | **datetime** |  | [optional] 
**persons_involved** | [**List[IncidentAllOfPersonsInvolved]**](IncidentAllOfPersonsInvolved.md) |  | [optional] 
**witnesses** | [**List[IncidentAllOfWitnesses]**](IncidentAllOfWitnesses.md) |  | [optional] 
**corrective_actions** | [**List[IncidentAllOfCorrectiveActions]**](IncidentAllOfCorrectiveActions.md) |  | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.incident import Incident

# TODO update the JSON string below
json = "{}"
# create an instance of Incident from a JSON string
incident_instance = Incident.from_json(json)
# print the JSON string representation of the object
print(Incident.to_json())

# convert the object into a dict
incident_dict = incident_instance.to_dict()
# create an instance of Incident from a dict
incident_from_dict = Incident.from_dict(incident_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


