# GetCleaningSchedule200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** |  | [optional] 
**tasks** | [**List[HousekeepingTask]**](HousekeepingTask.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.get_cleaning_schedule200_response import GetCleaningSchedule200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetCleaningSchedule200Response from a JSON string
get_cleaning_schedule200_response_instance = GetCleaningSchedule200Response.from_json(json)
# print the JSON string representation of the object
print(GetCleaningSchedule200Response.to_json())

# convert the object into a dict
get_cleaning_schedule200_response_dict = get_cleaning_schedule200_response_instance.to_dict()
# create an instance of GetCleaningSchedule200Response from a dict
get_cleaning_schedule200_response_from_dict = GetCleaningSchedule200Response.from_dict(get_cleaning_schedule200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


