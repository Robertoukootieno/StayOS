# SystemMetricsAllOfCache


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hit_rate** | **float** | Cache hit rate percentage | [optional] 
**memory_usage** | **float** | Memory usage in MB | [optional] 

## Example

```python
from stayos_api_client.models.system_metrics_all_of_cache import SystemMetricsAllOfCache

# TODO update the JSON string below
json = "{}"
# create an instance of SystemMetricsAllOfCache from a JSON string
system_metrics_all_of_cache_instance = SystemMetricsAllOfCache.from_json(json)
# print the JSON string representation of the object
print(SystemMetricsAllOfCache.to_json())

# convert the object into a dict
system_metrics_all_of_cache_dict = system_metrics_all_of_cache_instance.to_dict()
# create an instance of SystemMetricsAllOfCache from a dict
system_metrics_all_of_cache_from_dict = SystemMetricsAllOfCache.from_dict(system_metrics_all_of_cache_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


