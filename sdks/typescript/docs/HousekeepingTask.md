# HousekeepingTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **string** |  | [readonly] [default to undefined]
**propertyId** | **string** |  | [default to undefined]
**inventoryUnitId** | **string** | Room/unit to clean | [default to undefined]
**taskType** | **string** |  | [default to undefined]
**priority** | **string** |  | [optional] [default to Priority_NORMAL]
**status** | **string** |  | [default to undefined]
**assignedTo** | **string** | Staff member ID | [optional] [default to undefined]
**scheduledFor** | **string** |  | [optional] [default to undefined]
**startedAt** | **string** |  | [optional] [default to undefined]
**completedAt** | **string** |  | [optional] [default to undefined]
**verifiedAt** | **string** |  | [optional] [default to undefined]
**verifiedBy** | **string** |  | [optional] [default to undefined]
**notes** | **string** |  | [optional] [default to undefined]
**issues** | **Array&lt;string&gt;** | Issues found during cleaning | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]

## Example

```typescript
import { HousekeepingTask } from '@stayos/api-client';

const instance: HousekeepingTask = {
    taskId,
    propertyId,
    inventoryUnitId,
    taskType,
    priority,
    status,
    assignedTo,
    scheduledFor,
    startedAt,
    completedAt,
    verifiedAt,
    verifiedBy,
    notes,
    issues,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
