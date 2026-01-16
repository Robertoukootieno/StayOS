# AuditLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logId** | **string** |  | [readonly] [default to undefined]
**timestamp** | **string** |  | [readonly] [default to undefined]
**userId** | **string** | User who performed the action | [optional] [default to undefined]
**action** | **string** |  | [default to undefined]
**resource** | **string** | Resource type (e.g., reservation, guest, property) | [default to undefined]
**resourceId** | **string** |  | [optional] [default to undefined]
**changes** | **any** | JSON object showing what changed | [optional] [default to undefined]
**ipAddress** | **string** |  | [optional] [default to undefined]
**userAgent** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**errorMessage** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AuditLog } from '@stayos/api-client';

const instance: AuditLog = {
    logId,
    timestamp,
    userId,
    action,
    resource,
    resourceId,
    changes,
    ipAddress,
    userAgent,
    status,
    errorMessage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
