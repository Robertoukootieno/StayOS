# Stay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stay_id** | **UUID** |  | [readonly] 
**reservation_id** | **UUID** | Associated reservation | 
**property_id** | **UUID** |  | 
**inventory_unit_id** | **UUID** | Assigned room/unit | 
**guest_id** | **UUID** | Primary guest | 
**additional_guests** | **List[UUID]** | Additional guest IDs | [optional] 
**check_in_date** | **datetime** | Actual check-in timestamp | 
**expected_check_out_date** | **date** |  | 
**actual_check_out_date** | **datetime** | Actual check-out timestamp | [optional] 
**status** | **str** |  | 
**guest_count** | [**ReservationAllOfGuestCount**](ReservationAllOfGuestCount.md) |  | [optional] 
**key_cards** | [**List[Model0]**](Model0.md) |  | [optional] 
**incidental_charges** | [**List[Model0]**](Model0.md) |  | [optional] 
**special_requests** | **str** |  | [optional] 
**notes** | **str** | Internal staff notes | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 
**links** | [**StayAllOfLinks**](StayAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.stay import Stay

# TODO update the JSON string below
json = "{}"
# create an instance of Stay from a JSON string
stay_instance = Stay.from_json(json)
# print the JSON string representation of the object
print(Stay.to_json())

# convert the object into a dict
stay_dict = stay_instance.to_dict()
# create an instance of Stay from a dict
stay_from_dict = Stay.from_dict(stay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


