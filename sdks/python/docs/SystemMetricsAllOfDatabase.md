# SystemMetricsAllOfDatabase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connections** | **int** |  | [optional] 
**query_time** | **float** | Average query time in milliseconds | [optional] 

## Example

```python
from stayos_api_client.models.system_metrics_all_of_database import SystemMetricsAllOfDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of SystemMetricsAllOfDatabase from a JSON string
system_metrics_all_of_database_instance = SystemMetricsAllOfDatabase.from_json(json)
# print the JSON string representation of the object
print(SystemMetricsAllOfDatabase.to_json())

# convert the object into a dict
system_metrics_all_of_database_dict = system_metrics_all_of_database_instance.to_dict()
# create an instance of SystemMetricsAllOfDatabase from a dict
system_metrics_all_of_database_from_dict = SystemMetricsAllOfDatabase.from_dict(system_metrics_all_of_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


