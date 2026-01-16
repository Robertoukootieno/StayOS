# MaintenanceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **string** |  | [readonly] [default to undefined]
**propertyId** | **string** |  | [default to undefined]
**inventoryUnitId** | **string** | Specific room/unit (if applicable) | [optional] [default to undefined]
**category** | **string** |  | [default to undefined]
**priority** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**reportedBy** | **string** |  | [optional] [default to undefined]
**assignedTo** | **string** | Technician ID | [optional] [default to undefined]
**scheduledFor** | **string** |  | [optional] [default to undefined]
**completedAt** | **string** |  | [optional] [default to undefined]
**verifiedAt** | **string** |  | [optional] [default to undefined]
**estimatedCost** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**actualCost** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**workLog** | [**Array&lt;MaintenanceRequestAllOfWorkLog&gt;**](MaintenanceRequestAllOfWorkLog.md) |  | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MaintenanceRequest } from '@stayos/api-client';

const instance: MaintenanceRequest = {
    requestId,
    propertyId,
    inventoryUnitId,
    category,
    priority,
    status,
    title,
    description,
    reportedBy,
    assignedTo,
    scheduledFor,
    completedAt,
    verifiedAt,
    estimatedCost,
    actualCost,
    workLog,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
