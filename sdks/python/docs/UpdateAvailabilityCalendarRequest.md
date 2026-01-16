# UpdateAvailabilityCalendarRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_id** | **UUID** |  | [optional] 
**unit_type_id** | **UUID** |  | [optional] 
**updates** | [**List[UpdateAvailabilityCalendarRequestUpdatesInner]**](UpdateAvailabilityCalendarRequestUpdatesInner.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.update_availability_calendar_request import UpdateAvailabilityCalendarRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAvailabilityCalendarRequest from a JSON string
update_availability_calendar_request_instance = UpdateAvailabilityCalendarRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAvailabilityCalendarRequest.to_json())

# convert the object into a dict
update_availability_calendar_request_dict = update_availability_calendar_request_instance.to_dict()
# create an instance of UpdateAvailabilityCalendarRequest from a dict
update_availability_calendar_request_from_dict = UpdateAvailabilityCalendarRequest.from_dict(update_availability_calendar_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


