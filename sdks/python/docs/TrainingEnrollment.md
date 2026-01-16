# TrainingEnrollment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enrollment_id** | **UUID** |  | [readonly] 
**module_id** | **UUID** |  | 
**staff_id** | **UUID** |  | 
**status** | **str** |  | 
**enrolled_at** | **datetime** |  | [optional] [readonly] 
**started_at** | **datetime** |  | [optional] 
**completed_at** | **datetime** |  | [optional] 
**expires_at** | **datetime** |  | [optional] 
**assessment_score** | **int** |  | [optional] 
**attempts** | **int** | Number of assessment attempts | [optional] 
**certificate_url** | **str** |  | [optional] [readonly] 

## Example

```python
from stayos_api_client.models.training_enrollment import TrainingEnrollment

# TODO update the JSON string below
json = "{}"
# create an instance of TrainingEnrollment from a JSON string
training_enrollment_instance = TrainingEnrollment.from_json(json)
# print the JSON string representation of the object
print(TrainingEnrollment.to_json())

# convert the object into a dict
training_enrollment_dict = training_enrollment_instance.to_dict()
# create an instance of TrainingEnrollment from a dict
training_enrollment_from_dict = TrainingEnrollment.from_dict(training_enrollment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


