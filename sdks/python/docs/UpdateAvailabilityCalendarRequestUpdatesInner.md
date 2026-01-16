# UpdateAvailabilityCalendarRequestUpdatesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** |  | [optional] 
**available** | **int** |  | [optional] 
**rate** | [**Money**](Money.md) |  | [optional] 
**restrictions** | **object** |  | [optional] 

## Example

```python
from stayos_api_client.models.update_availability_calendar_request_updates_inner import UpdateAvailabilityCalendarRequestUpdatesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAvailabilityCalendarRequestUpdatesInner from a JSON string
update_availability_calendar_request_updates_inner_instance = UpdateAvailabilityCalendarRequestUpdatesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateAvailabilityCalendarRequestUpdatesInner.to_json())

# convert the object into a dict
update_availability_calendar_request_updates_inner_dict = update_availability_calendar_request_updates_inner_instance.to_dict()
# create an instance of UpdateAvailabilityCalendarRequestUpdatesInner from a dict
update_availability_calendar_request_updates_inner_from_dict = UpdateAvailabilityCalendarRequestUpdatesInner.from_dict(update_availability_calendar_request_updates_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


