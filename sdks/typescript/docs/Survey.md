# Survey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**surveyId** | **string** |  | [readonly] [default to undefined]
**stayId** | **string** |  | [default to undefined]
**guestId** | **string** |  | [default to undefined]
**overallRating** | **number** |  | [optional] [default to undefined]
**npsScore** | **number** | Net Promoter Score (0-10) | [optional] [default to undefined]
**ratings** | [**SurveyAllOfRatings**](SurveyAllOfRatings.md) |  | [optional] [default to undefined]
**comments** | **string** |  | [optional] [default to undefined]
**wouldRecommend** | **boolean** |  | [optional] [default to undefined]
**completedAt** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Survey } from '@stayos/api-client';

const instance: Survey = {
    surveyId,
    stayId,
    guestId,
    overallRating,
    npsScore,
    ratings,
    comments,
    wouldRecommend,
    completedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
