# IncidentAllOfPersonsInvolved


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**role** | **str** |  | [optional] 
**contact_info** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.incident_all_of_persons_involved import IncidentAllOfPersonsInvolved

# TODO update the JSON string below
json = "{}"
# create an instance of IncidentAllOfPersonsInvolved from a JSON string
incident_all_of_persons_involved_instance = IncidentAllOfPersonsInvolved.from_json(json)
# print the JSON string representation of the object
print(IncidentAllOfPersonsInvolved.to_json())

# convert the object into a dict
incident_all_of_persons_involved_dict = incident_all_of_persons_involved_instance.to_dict()
# create an instance of IncidentAllOfPersonsInvolved from a dict
incident_all_of_persons_involved_from_dict = IncidentAllOfPersonsInvolved.from_dict(incident_all_of_persons_involved_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


