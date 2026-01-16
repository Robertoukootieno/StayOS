# Stay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stayId** | **string** |  | [readonly] [default to undefined]
**reservationId** | **string** | Associated reservation | [default to undefined]
**propertyId** | **string** |  | [default to undefined]
**inventoryUnitId** | **string** | Assigned room/unit | [default to undefined]
**guestId** | **string** | Primary guest | [default to undefined]
**additionalGuests** | **Array&lt;string&gt;** | Additional guest IDs | [optional] [default to undefined]
**checkInDate** | **string** | Actual check-in timestamp | [default to undefined]
**expectedCheckOutDate** | **string** |  | [default to undefined]
**actualCheckOutDate** | **string** | Actual check-out timestamp | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**guestCount** | [**ReservationAllOfGuestCount**](ReservationAllOfGuestCount.md) |  | [optional] [default to undefined]
**keyCards** | [**Array&lt;Model0&gt;**](Model0.md) |  | [optional] [default to undefined]
**incidentalCharges** | [**Array&lt;Model0&gt;**](Model0.md) |  | [optional] [default to undefined]
**specialRequests** | **string** |  | [optional] [default to undefined]
**notes** | **string** | Internal staff notes | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**links** | [**StayAllOfLinks**](StayAllOfLinks.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Stay } from '@stayos/api-client';

const instance: Stay = {
    stayId,
    reservationId,
    propertyId,
    inventoryUnitId,
    guestId,
    additionalGuests,
    checkInDate,
    expectedCheckOutDate,
    actualCheckOutDate,
    status,
    guestCount,
    keyCards,
    incidentalCharges,
    specialRequests,
    notes,
    metadata,
    links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
