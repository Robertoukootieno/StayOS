# CancelReservationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.cancel_reservation_request import CancelReservationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CancelReservationRequest from a JSON string
cancel_reservation_request_instance = CancelReservationRequest.from_json(json)
# print the JSON string representation of the object
print(CancelReservationRequest.to_json())

# convert the object into a dict
cancel_reservation_request_dict = cancel_reservation_request_instance.to_dict()
# create an instance of CancelReservationRequest from a dict
cancel_reservation_request_from_dict = CancelReservationRequest.from_dict(cancel_reservation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


