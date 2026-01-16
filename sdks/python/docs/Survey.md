# Survey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**survey_id** | **UUID** |  | [readonly] 
**stay_id** | **UUID** |  | 
**guest_id** | **UUID** |  | 
**overall_rating** | **int** |  | [optional] 
**nps_score** | **int** | Net Promoter Score (0-10) | [optional] 
**ratings** | [**SurveyAllOfRatings**](SurveyAllOfRatings.md) |  | [optional] 
**comments** | **str** |  | [optional] 
**would_recommend** | **bool** |  | [optional] 
**completed_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from stayos_api_client.models.survey import Survey

# TODO update the JSON string below
json = "{}"
# create an instance of Survey from a JSON string
survey_instance = Survey.from_json(json)
# print the JSON string representation of the object
print(Survey.to_json())

# convert the object into a dict
survey_dict = survey_instance.to_dict()
# create an instance of Survey from a dict
survey_from_dict = Survey.from_dict(survey_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


