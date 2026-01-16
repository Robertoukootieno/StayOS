# AvailabilitySlotAllOfAllocations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **UUID** |  | [optional] 
**channel_name** | **str** |  | [optional] 
**allocated** | **int** | Units allocated to this channel | [optional] 
**sold** | **int** | Units sold through this channel | [optional] 

## Example

```python
from stayos_api_client.models.availability_slot_all_of_allocations import AvailabilitySlotAllOfAllocations

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilitySlotAllOfAllocations from a JSON string
availability_slot_all_of_allocations_instance = AvailabilitySlotAllOfAllocations.from_json(json)
# print the JSON string representation of the object
print(AvailabilitySlotAllOfAllocations.to_json())

# convert the object into a dict
availability_slot_all_of_allocations_dict = availability_slot_all_of_allocations_instance.to_dict()
# create an instance of AvailabilitySlotAllOfAllocations from a dict
availability_slot_all_of_allocations_from_dict = AvailabilitySlotAllOfAllocations.from_dict(availability_slot_all_of_allocations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


