# OpenapiClient::Survey

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **survey_id** | **String** |  | [readonly] |
| **stay_id** | **String** |  |  |
| **guest_id** | **String** |  |  |
| **overall_rating** | **Integer** |  | [optional] |
| **nps_score** | **Integer** | Net Promoter Score (0-10) | [optional] |
| **ratings** | [**SurveyAllOfRatings**](SurveyAllOfRatings.md) |  | [optional] |
| **comments** | **String** |  | [optional] |
| **would_recommend** | **Boolean** |  | [optional] |
| **completed_at** | **Time** |  | [optional][readonly] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Survey.new(
  survey_id: null,
  stay_id: null,
  guest_id: null,
  overall_rating: null,
  nps_score: null,
  ratings: null,
  comments: null,
  would_recommend: null,
  completed_at: null
)
```

