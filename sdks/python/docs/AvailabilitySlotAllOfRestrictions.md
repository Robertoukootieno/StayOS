# AvailabilitySlotAllOfRestrictions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed_to_arrival** | **bool** |  | [optional] [default to False]
**closed_to_departure** | **bool** |  | [optional] [default to False]
**minimum_stay** | **int** |  | [optional] 
**maximum_stay** | **int** |  | [optional] 

## Example

```python
from stayos_api_client.models.availability_slot_all_of_restrictions import AvailabilitySlotAllOfRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilitySlotAllOfRestrictions from a JSON string
availability_slot_all_of_restrictions_instance = AvailabilitySlotAllOfRestrictions.from_json(json)
# print the JSON string representation of the object
print(AvailabilitySlotAllOfRestrictions.to_json())

# convert the object into a dict
availability_slot_all_of_restrictions_dict = availability_slot_all_of_restrictions_instance.to_dict()
# create an instance of AvailabilitySlotAllOfRestrictions from a dict
availability_slot_all_of_restrictions_from_dict = AvailabilitySlotAllOfRestrictions.from_dict(availability_slot_all_of_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


