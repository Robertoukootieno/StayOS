# HealthCheck


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [default to undefined]
**timestamp** | **string** |  | [optional] [readonly] [default to undefined]
**version** | **string** |  | [optional] [default to undefined]
**services** | [**HealthCheckAllOfServices**](HealthCheckAllOfServices.md) |  | [optional] [default to undefined]

## Example

```typescript
import { HealthCheck } from '@stayos/api-client';

const instance: HealthCheck = {
    status,
    timestamp,
    version,
    services,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
