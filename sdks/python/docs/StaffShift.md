# StaffShift


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shift_id** | **UUID** |  | [readonly] 
**staff_id** | **UUID** |  | 
**property_id** | **UUID** |  | 
**shift_date** | **date** |  | 
**start_time** | **str** |  | 
**end_time** | **str** |  | 
**role** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**clock_in_time** | **datetime** |  | [optional] 
**clock_out_time** | **datetime** |  | [optional] 
**breaks** | [**List[StaffShiftAllOfBreaks]**](StaffShiftAllOfBreaks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.staff_shift import StaffShift

# TODO update the JSON string below
json = "{}"
# create an instance of StaffShift from a JSON string
staff_shift_instance = StaffShift.from_json(json)
# print the JSON string representation of the object
print(StaffShift.to_json())

# convert the object into a dict
staff_shift_dict = staff_shift_instance.to_dict()
# create an instance of StaffShift from a dict
staff_shift_from_dict = StaffShift.from_dict(staff_shift_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


