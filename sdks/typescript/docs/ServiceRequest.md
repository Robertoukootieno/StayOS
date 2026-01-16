# ServiceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **string** |  | [readonly] [default to undefined]
**propertyId** | **string** |  | [default to undefined]
**stayId** | **string** |  | [optional] [default to undefined]
**guestId** | **string** |  | [optional] [default to undefined]
**inventoryUnitId** | **string** |  | [optional] [default to undefined]
**category** | **string** |  | [default to undefined]
**priority** | **string** |  | [optional] [default to Priority_NORMAL]
**status** | **string** |  | [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**requestedBy** | **string** |  | [optional] [default to RequestedBy_GUEST]
**assignedTo** | **string** |  | [optional] [default to undefined]
**acknowledgedAt** | **string** |  | [optional] [default to undefined]
**completedAt** | **string** |  | [optional] [default to undefined]
**guestFeedback** | [**ServiceRequestAllOfGuestFeedback**](ServiceRequestAllOfGuestFeedback.md) |  | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ServiceRequest } from '@stayos/api-client';

const instance: ServiceRequest = {
    requestId,
    propertyId,
    stayId,
    guestId,
    inventoryUnitId,
    category,
    priority,
    status,
    title,
    description,
    requestedBy,
    assignedTo,
    acknowledgedAt,
    completedAt,
    guestFeedback,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
