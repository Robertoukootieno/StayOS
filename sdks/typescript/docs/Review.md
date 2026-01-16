# Review


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviewId** | **string** |  | [readonly] [default to undefined]
**source** | **string** |  | [default to undefined]
**externalId** | **string** | Review ID from external platform | [optional] [default to undefined]
**guestName** | **string** |  | [optional] [default to undefined]
**rating** | **number** |  | [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**content** | **string** |  | [optional] [default to undefined]
**reviewDate** | **string** |  | [optional] [default to undefined]
**response** | [**ReviewAllOfResponse**](ReviewAllOfResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Review } from '@stayos/api-client';

const instance: Review = {
    reviewId,
    source,
    externalId,
    guestName,
    rating,
    title,
    content,
    reviewDate,
    response,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
