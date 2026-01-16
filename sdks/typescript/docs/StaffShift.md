# StaffShift


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shiftId** | **string** |  | [readonly] [default to undefined]
**staffId** | **string** |  | [default to undefined]
**propertyId** | **string** |  | [default to undefined]
**shiftDate** | **string** |  | [default to undefined]
**startTime** | **string** |  | [default to undefined]
**endTime** | **string** |  | [default to undefined]
**role** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**clockInTime** | **string** |  | [optional] [default to undefined]
**clockOutTime** | **string** |  | [optional] [default to undefined]
**breaks** | [**Array&lt;StaffShiftAllOfBreaks&gt;**](StaffShiftAllOfBreaks.md) |  | [optional] [default to undefined]

## Example

```typescript
import { StaffShift } from '@stayos/api-client';

const instance: StaffShift = {
    shiftId,
    staffId,
    propertyId,
    shiftDate,
    startTime,
    endTime,
    role,
    status,
    clockInTime,
    clockOutTime,
    breaks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
