# CancellationPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refundability** | **str** |  | 
**free_cancellation_hours** | **int** | Hours before check-in for free cancellation | [optional] 
**penalty_schedule** | [**List[CancellationPolicyAllOfPenaltySchedule]**](CancellationPolicyAllOfPenaltySchedule.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.cancellation_policy import CancellationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of CancellationPolicy from a JSON string
cancellation_policy_instance = CancellationPolicy.from_json(json)
# print the JSON string representation of the object
print(CancellationPolicy.to_json())

# convert the object into a dict
cancellation_policy_dict = cancellation_policy_instance.to_dict()
# create an instance of CancellationPolicy from a dict
cancellation_policy_from_dict = CancellationPolicy.from_dict(cancellation_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


