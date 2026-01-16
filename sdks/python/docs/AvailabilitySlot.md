# AvailabilitySlot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** |  | 
**status** | **str** |  | 
**restrictions** | [**AvailabilitySlotAllOfRestrictions**](AvailabilitySlotAllOfRestrictions.md) |  | [optional] 
**allocations** | [**List[AvailabilitySlotAllOfAllocations]**](AvailabilitySlotAllOfAllocations.md) | Channel-specific allocations | [optional] 
**rate** | [**Model0**](Model0.md) | Rate for this date (if applicable) | [optional] 
**notes** | **str** | Internal notes for this date | [optional] 

## Example

```python
from stayos_api_client.models.availability_slot import AvailabilitySlot

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilitySlot from a JSON string
availability_slot_instance = AvailabilitySlot.from_json(json)
# print the JSON string representation of the object
print(AvailabilitySlot.to_json())

# convert the object into a dict
availability_slot_dict = availability_slot_instance.to_dict()
# create an instance of AvailabilitySlot from a dict
availability_slot_from_dict = AvailabilitySlot.from_dict(availability_slot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


