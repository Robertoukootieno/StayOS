# AuditMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | Creation timestamp (ISO 8601) | [optional] [default to undefined]
**createdBy** | **string** | User ID who created the resource | [optional] [default to undefined]
**updatedAt** | **string** | Last update timestamp | [optional] [default to undefined]
**updatedBy** | **string** | User ID who last updated the resource | [optional] [default to undefined]
**version** | **number** | Version number for optimistic locking | [optional] [default to undefined]

## Example

```typescript
import { AuditMetadata } from '@stayos/api-client';

const instance: AuditMetadata = {
    createdAt,
    createdBy,
    updatedAt,
    updatedBy,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
