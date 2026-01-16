# Feedback


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedbackId** | **string** |  | [readonly] [default to undefined]
**guestId** | **string** |  | [default to undefined]
**stayId** | **string** | Associated stay (if applicable) | [optional] [default to undefined]
**propertyId** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**category** | **string** |  | [optional] [default to undefined]
**rating** | **number** | Overall rating (1-5 stars) | [default to undefined]
**subject** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**priority** | **string** |  | [optional] [default to Priority_MEDIUM]
**response** | [**FeedbackAllOfResponse**](FeedbackAllOfResponse.md) |  | [optional] [default to undefined]
**serviceRecovery** | [**FeedbackAllOfServiceRecovery**](FeedbackAllOfServiceRecovery.md) |  | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Feedback } from '@stayos/api-client';

const instance: Feedback = {
    feedbackId,
    guestId,
    stayId,
    propertyId,
    type,
    category,
    rating,
    subject,
    description,
    status,
    priority,
    response,
    serviceRecovery,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
