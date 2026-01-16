# GuestCapacity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_adults** | **int** |  | 
**max_children** | **int** |  | [optional] 
**max_occupancy** | **int** | Total maximum occupancy | [optional] 
**extra_bed_available** | **bool** |  | [optional] [default to False]
**extra_bed_charge** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.guest_capacity import GuestCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of GuestCapacity from a JSON string
guest_capacity_instance = GuestCapacity.from_json(json)
# print the JSON string representation of the object
print(GuestCapacity.to_json())

# convert the object into a dict
guest_capacity_dict = guest_capacity_instance.to_dict()
# create an instance of GuestCapacity from a dict
guest_capacity_from_dict = GuestCapacity.from_dict(guest_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


