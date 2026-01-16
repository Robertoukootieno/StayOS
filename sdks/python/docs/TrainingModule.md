# TrainingModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**module_id** | **UUID** |  | [readonly] 
**title** | **str** |  | 
**description** | **str** |  | [optional] 
**category** | **str** |  | 
**duration** | **int** | Duration in minutes | 
**content** | [**TrainingModuleAllOfContent**](TrainingModuleAllOfContent.md) |  | [optional] 
**assessment_required** | **bool** |  | [optional] [default to False]
**passing_score** | **int** | Minimum score to pass (percentage) | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.training_module import TrainingModule

# TODO update the JSON string below
json = "{}"
# create an instance of TrainingModule from a JSON string
training_module_instance = TrainingModule.from_json(json)
# print the JSON string representation of the object
print(TrainingModule.to_json())

# convert the object into a dict
training_module_dict = training_module_instance.to_dict()
# create an instance of TrainingModule from a dict
training_module_from_dict = TrainingModule.from_dict(training_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


