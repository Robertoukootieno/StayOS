# SearchAuditLogsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityType** | **string** |  | [optional] [default to undefined]
**entityId** | **string** |  | [optional] [default to undefined]
**actions** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**userIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**endDate** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SearchAuditLogsRequest } from '@stayos/api-client';

const instance: SearchAuditLogsRequest = {
    entityType,
    entityId,
    actions,
    userIds,
    startDate,
    endDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
