# IncidentAllOfWitnesses


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**contact_info** | **str** |  | [optional] 
**statement** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.incident_all_of_witnesses import IncidentAllOfWitnesses

# TODO update the JSON string below
json = "{}"
# create an instance of IncidentAllOfWitnesses from a JSON string
incident_all_of_witnesses_instance = IncidentAllOfWitnesses.from_json(json)
# print the JSON string representation of the object
print(IncidentAllOfWitnesses.to_json())

# convert the object into a dict
incident_all_of_witnesses_dict = incident_all_of_witnesses_instance.to_dict()
# create an instance of IncidentAllOfWitnesses from a dict
incident_all_of_witnesses_from_dict = IncidentAllOfWitnesses.from_dict(incident_all_of_witnesses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


