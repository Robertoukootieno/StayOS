# SystemMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **string** |  | [readonly] [default to undefined]
**requests** | [**SystemMetricsAllOfRequests**](SystemMetricsAllOfRequests.md) |  | [optional] [default to undefined]
**database** | [**SystemMetricsAllOfDatabase**](SystemMetricsAllOfDatabase.md) |  | [optional] [default to undefined]
**cache** | [**SystemMetricsAllOfCache**](SystemMetricsAllOfCache.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SystemMetrics } from '@stayos/api-client';

const instance: SystemMetrics = {
    timestamp,
    requests,
    database,
    cache,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
