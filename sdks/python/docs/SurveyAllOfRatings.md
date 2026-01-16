# SurveyAllOfRatings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cleanliness** | **int** |  | [optional] 
**comfort** | **int** |  | [optional] 
**staff** | **int** |  | [optional] 
**amenities** | **int** |  | [optional] 
**value_for_money** | **int** |  | [optional] 

## Example

```python
from stayos_api_client.models.survey_all_of_ratings import SurveyAllOfRatings

# TODO update the JSON string below
json = "{}"
# create an instance of SurveyAllOfRatings from a JSON string
survey_all_of_ratings_instance = SurveyAllOfRatings.from_json(json)
# print the JSON string representation of the object
print(SurveyAllOfRatings.to_json())

# convert the object into a dict
survey_all_of_ratings_dict = survey_all_of_ratings_instance.to_dict()
# create an instance of SurveyAllOfRatings from a dict
survey_all_of_ratings_from_dict = SurveyAllOfRatings.from_dict(survey_all_of_ratings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


