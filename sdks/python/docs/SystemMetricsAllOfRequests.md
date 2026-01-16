# SystemMetricsAllOfRequests


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | [optional] 
**successful** | **int** |  | [optional] 
**failed** | **int** |  | [optional] 
**average_response_time** | **float** | Average response time in milliseconds | [optional] 

## Example

```python
from stayos_api_client.models.system_metrics_all_of_requests import SystemMetricsAllOfRequests

# TODO update the JSON string below
json = "{}"
# create an instance of SystemMetricsAllOfRequests from a JSON string
system_metrics_all_of_requests_instance = SystemMetricsAllOfRequests.from_json(json)
# print the JSON string representation of the object
print(SystemMetricsAllOfRequests.to_json())

# convert the object into a dict
system_metrics_all_of_requests_dict = system_metrics_all_of_requests_instance.to_dict()
# create an instance of SystemMetricsAllOfRequests from a dict
system_metrics_all_of_requests_from_dict = SystemMetricsAllOfRequests.from_dict(system_metrics_all_of_requests_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


