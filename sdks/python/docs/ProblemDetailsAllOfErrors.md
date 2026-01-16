# ProblemDetailsAllOfErrors


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** | Field name that failed validation | [optional] 
**code** | **str** | Machine-readable error code | [optional] 
**message** | **str** | Human-readable error message | [optional] 

## Example

```python
from stayos_api_client.models.problem_details_all_of_errors import ProblemDetailsAllOfErrors

# TODO update the JSON string below
json = "{}"
# create an instance of ProblemDetailsAllOfErrors from a JSON string
problem_details_all_of_errors_instance = ProblemDetailsAllOfErrors.from_json(json)
# print the JSON string representation of the object
print(ProblemDetailsAllOfErrors.to_json())

# convert the object into a dict
problem_details_all_of_errors_dict = problem_details_all_of_errors_instance.to_dict()
# create an instance of ProblemDetailsAllOfErrors from a dict
problem_details_all_of_errors_from_dict = ProblemDetailsAllOfErrors.from_dict(problem_details_all_of_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


