# GetReservationHistory200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **datetime** |  | [optional] 
**action** | **str** |  | [optional] 
**changed_by** | **str** |  | [optional] 
**changes** | **object** |  | [optional] 

## Example

```python
from stayos_api_client.models.get_reservation_history200_response_inner import GetReservationHistory200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetReservationHistory200ResponseInner from a JSON string
get_reservation_history200_response_inner_instance = GetReservationHistory200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetReservationHistory200ResponseInner.to_json())

# convert the object into a dict
get_reservation_history200_response_inner_dict = get_reservation_history200_response_inner_instance.to_dict()
# create an instance of GetReservationHistory200ResponseInner from a dict
get_reservation_history200_response_inner_from_dict = GetReservationHistory200ResponseInner.from_dict(get_reservation_history200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


