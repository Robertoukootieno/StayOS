# Reservation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reservation_id** | **UUID** |  | [readonly] 
**property_id** | **UUID** |  | 
**guest_id** | **UUID** |  | 
**check_in_date** | **date** |  | 
**check_out_date** | **date** |  | 
**status** | **str** |  | 
**guest_count** | [**ReservationAllOfGuestCount**](ReservationAllOfGuestCount.md) |  | [optional] 
**special_requests** | **str** |  | [optional] 
**total_amount** | [**Model0**](Model0.md) |  | [optional] 
**cancellation_policy** | [**Model0**](Model0.md) |  | [optional] 
**created_at** | **datetime** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**version** | **int** | Version for optimistic locking | [optional] [readonly] 

## Example

```python
from stayos_api_client.models.reservation import Reservation

# TODO update the JSON string below
json = "{}"
# create an instance of Reservation from a JSON string
reservation_instance = Reservation.from_json(json)
# print the JSON string representation of the object
print(Reservation.to_json())

# convert the object into a dict
reservation_dict = reservation_instance.to_dict()
# create an instance of Reservation from a dict
reservation_from_dict = Reservation.from_dict(reservation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


