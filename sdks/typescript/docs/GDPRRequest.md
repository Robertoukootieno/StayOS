# GDPRRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **string** |  | [readonly] [default to undefined]
**guestId** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**requestedAt** | **string** |  | [optional] [readonly] [default to undefined]
**completedAt** | **string** |  | [optional] [default to undefined]
**dataPackageUrl** | **string** | URL to download exported data | [optional] [default to undefined]
**notes** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GDPRRequest } from '@stayos/api-client';

const instance: GDPRRequest = {
    requestId,
    guestId,
    type,
    status,
    requestedAt,
    completedAt,
    dataPackageUrl,
    notes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
