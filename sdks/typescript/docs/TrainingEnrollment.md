# TrainingEnrollment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enrollmentId** | **string** |  | [readonly] [default to undefined]
**moduleId** | **string** |  | [default to undefined]
**staffId** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**enrolledAt** | **string** |  | [optional] [readonly] [default to undefined]
**startedAt** | **string** |  | [optional] [default to undefined]
**completedAt** | **string** |  | [optional] [default to undefined]
**expiresAt** | **string** |  | [optional] [default to undefined]
**assessmentScore** | **number** |  | [optional] [default to undefined]
**attempts** | **number** | Number of assessment attempts | [optional] [default to undefined]
**certificateUrl** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { TrainingEnrollment } from '@stayos/api-client';

const instance: TrainingEnrollment = {
    enrollmentId,
    moduleId,
    staffId,
    status,
    enrolledAt,
    startedAt,
    completedAt,
    expiresAt,
    assessmentScore,
    attempts,
    certificateUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
