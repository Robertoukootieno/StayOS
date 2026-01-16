# CloseIncidentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resolution** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.close_incident_request import CloseIncidentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CloseIncidentRequest from a JSON string
close_incident_request_instance = CloseIncidentRequest.from_json(json)
# print the JSON string representation of the object
print(CloseIncidentRequest.to_json())

# convert the object into a dict
close_incident_request_dict = close_incident_request_instance.to_dict()
# create an instance of CloseIncidentRequest from a dict
close_incident_request_from_dict = CloseIncidentRequest.from_dict(close_incident_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


