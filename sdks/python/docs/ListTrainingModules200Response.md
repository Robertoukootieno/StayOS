# ListTrainingModules200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[TrainingModule]**](TrainingModule.md) |  | 
**pagination** | [**PaginatedResponseAllOfPagination**](PaginatedResponseAllOfPagination.md) |  | 
**links** | [**PaginatedResponseAllOfLinks**](PaginatedResponseAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.list_training_modules200_response import ListTrainingModules200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListTrainingModules200Response from a JSON string
list_training_modules200_response_instance = ListTrainingModules200Response.from_json(json)
# print the JSON string representation of the object
print(ListTrainingModules200Response.to_json())

# convert the object into a dict
list_training_modules200_response_dict = list_training_modules200_response_instance.to_dict()
# create an instance of ListTrainingModules200Response from a dict
list_training_modules200_response_from_dict = ListTrainingModules200Response.from_dict(list_training_modules200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


