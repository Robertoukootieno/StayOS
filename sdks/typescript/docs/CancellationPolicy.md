# CancellationPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refundability** | **string** |  | [default to undefined]
**freeCancellationHours** | **number** | Hours before check-in for free cancellation | [optional] [default to undefined]
**penaltySchedule** | [**Array&lt;CancellationPolicyAllOfPenaltySchedule&gt;**](CancellationPolicyAllOfPenaltySchedule.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CancellationPolicy } from '@stayos/api-client';

const instance: CancellationPolicy = {
    refundability,
    freeCancellationHours,
    penaltySchedule,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
