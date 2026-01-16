# HealthCheckAllOfServices


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** |  | [optional] 
**cache** | **str** |  | [optional] 
**message_queue** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.health_check_all_of_services import HealthCheckAllOfServices

# TODO update the JSON string below
json = "{}"
# create an instance of HealthCheckAllOfServices from a JSON string
health_check_all_of_services_instance = HealthCheckAllOfServices.from_json(json)
# print the JSON string representation of the object
print(HealthCheckAllOfServices.to_json())

# convert the object into a dict
health_check_all_of_services_dict = health_check_all_of_services_instance.to_dict()
# create an instance of HealthCheckAllOfServices from a dict
health_check_all_of_services_from_dict = HealthCheckAllOfServices.from_dict(health_check_all_of_services_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


