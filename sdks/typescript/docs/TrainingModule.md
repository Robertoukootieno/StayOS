# TrainingModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**moduleId** | **string** |  | [readonly] [default to undefined]
**title** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**category** | **string** |  | [default to undefined]
**duration** | **number** | Duration in minutes | [default to undefined]
**content** | [**TrainingModuleAllOfContent**](TrainingModuleAllOfContent.md) |  | [optional] [default to undefined]
**assessmentRequired** | **boolean** |  | [optional] [default to false]
**passingScore** | **number** | Minimum score to pass (percentage) | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TrainingModule } from '@stayos/api-client';

const instance: TrainingModule = {
    moduleId,
    title,
    description,
    category,
    duration,
    content,
    assessmentRequired,
    passingScore,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
