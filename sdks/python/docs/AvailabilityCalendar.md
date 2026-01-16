# AvailabilityCalendar


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_unit_id** | **UUID** |  | 
**date_range** | [**AvailabilityCalendarAllOfDateRange**](AvailabilityCalendarAllOfDateRange.md) |  | 
**slots** | [**List[Model0]**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.availability_calendar import AvailabilityCalendar

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityCalendar from a JSON string
availability_calendar_instance = AvailabilityCalendar.from_json(json)
# print the JSON string representation of the object
print(AvailabilityCalendar.to_json())

# convert the object into a dict
availability_calendar_dict = availability_calendar_instance.to_dict()
# create an instance of AvailabilityCalendar from a dict
availability_calendar_from_dict = AvailabilityCalendar.from_dict(availability_calendar_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


