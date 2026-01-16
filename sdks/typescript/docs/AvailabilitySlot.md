# AvailabilitySlot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**restrictions** | [**AvailabilitySlotAllOfRestrictions**](AvailabilitySlotAllOfRestrictions.md) |  | [optional] [default to undefined]
**allocations** | [**Array&lt;AvailabilitySlotAllOfAllocations&gt;**](AvailabilitySlotAllOfAllocations.md) | Channel-specific allocations | [optional] [default to undefined]
**rate** | [**Model0**](Model0.md) | Rate for this date (if applicable) | [optional] [default to undefined]
**notes** | **string** | Internal notes for this date | [optional] [default to undefined]

## Example

```typescript
import { AvailabilitySlot } from '@stayos/api-client';

const instance: AvailabilitySlot = {
    date,
    status,
    restrictions,
    allocations,
    rate,
    notes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
