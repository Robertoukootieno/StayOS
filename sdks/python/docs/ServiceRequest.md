# ServiceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **UUID** |  | [readonly] 
**property_id** | **UUID** |  | 
**stay_id** | **UUID** |  | [optional] 
**guest_id** | **UUID** |  | [optional] 
**inventory_unit_id** | **UUID** |  | [optional] 
**category** | **str** |  | 
**priority** | **str** |  | [optional] [default to 'NORMAL']
**status** | **str** |  | 
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**requested_by** | **str** |  | [optional] [default to 'GUEST']
**assigned_to** | **UUID** |  | [optional] 
**acknowledged_at** | **datetime** |  | [optional] 
**completed_at** | **datetime** |  | [optional] 
**guest_feedback** | [**ServiceRequestAllOfGuestFeedback**](ServiceRequestAllOfGuestFeedback.md) |  | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.service_request import ServiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceRequest from a JSON string
service_request_instance = ServiceRequest.from_json(json)
# print the JSON string representation of the object
print(ServiceRequest.to_json())

# convert the object into a dict
service_request_dict = service_request_instance.to_dict()
# create an instance of ServiceRequest from a dict
service_request_from_dict = ServiceRequest.from_dict(service_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


