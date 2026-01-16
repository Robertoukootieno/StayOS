# CancellationPolicyAllOfPenaltySchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hours_before_check_in** | **int** |  | [optional] 
**penalty_type** | **str** |  | [optional] 
**penalty_value** | **float** |  | [optional] 
**description** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.cancellation_policy_all_of_penalty_schedule import CancellationPolicyAllOfPenaltySchedule

# TODO update the JSON string below
json = "{}"
# create an instance of CancellationPolicyAllOfPenaltySchedule from a JSON string
cancellation_policy_all_of_penalty_schedule_instance = CancellationPolicyAllOfPenaltySchedule.from_json(json)
# print the JSON string representation of the object
print(CancellationPolicyAllOfPenaltySchedule.to_json())

# convert the object into a dict
cancellation_policy_all_of_penalty_schedule_dict = cancellation_policy_all_of_penalty_schedule_instance.to_dict()
# create an instance of CancellationPolicyAllOfPenaltySchedule from a dict
cancellation_policy_all_of_penalty_schedule_from_dict = CancellationPolicyAllOfPenaltySchedule.from_dict(cancellation_policy_all_of_penalty_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


