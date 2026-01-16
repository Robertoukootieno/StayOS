# GetNPSMetrics200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nps_score** | **float** |  | [optional] 
**promoters** | **int** |  | [optional] 
**passives** | **int** |  | [optional] 
**detractors** | **int** |  | [optional] 
**total_responses** | **int** |  | [optional] 
**trend** | **List[object]** |  | [optional] 

## Example

```python
from stayos_api_client.models.get_nps_metrics200_response import GetNPSMetrics200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNPSMetrics200Response from a JSON string
get_nps_metrics200_response_instance = GetNPSMetrics200Response.from_json(json)
# print the JSON string representation of the object
print(GetNPSMetrics200Response.to_json())

# convert the object into a dict
get_nps_metrics200_response_dict = get_nps_metrics200_response_instance.to_dict()
# create an instance of GetNPSMetrics200Response from a dict
get_nps_metrics200_response_from_dict = GetNPSMetrics200Response.from_dict(get_nps_metrics200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


