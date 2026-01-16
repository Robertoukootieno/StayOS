# ProblemDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | URI reference identifying the problem type | [default to undefined]
**title** | **string** | Short, human-readable summary | [default to undefined]
**status** | **number** | HTTP status code | [default to undefined]
**detail** | **string** | Human-readable explanation | [optional] [default to undefined]
**instance** | **string** | URI reference identifying the specific occurrence | [optional] [default to undefined]
**traceId** | **string** | Unique identifier for tracing | [optional] [default to undefined]
**errors** | [**Array&lt;ProblemDetailsAllOfErrors&gt;**](ProblemDetailsAllOfErrors.md) | Detailed validation errors | [optional] [default to undefined]

## Example

```typescript
import { ProblemDetails } from '@stayos/api-client';

const instance: ProblemDetails = {
    type,
    title,
    status,
    detail,
    instance,
    traceId,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
