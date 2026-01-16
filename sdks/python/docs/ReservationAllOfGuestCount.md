# ReservationAllOfGuestCount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adults** | **int** |  | [optional] 
**children** | **int** |  | [optional] 

## Example

```python
from stayos_api_client.models.reservation_all_of_guest_count import ReservationAllOfGuestCount

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationAllOfGuestCount from a JSON string
reservation_all_of_guest_count_instance = ReservationAllOfGuestCount.from_json(json)
# print the JSON string representation of the object
print(ReservationAllOfGuestCount.to_json())

# convert the object into a dict
reservation_all_of_guest_count_dict = reservation_all_of_guest_count_instance.to_dict()
# create an instance of ReservationAllOfGuestCount from a dict
reservation_all_of_guest_count_from_dict = ReservationAllOfGuestCount.from_dict(reservation_all_of_guest_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


