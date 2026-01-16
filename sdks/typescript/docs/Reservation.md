# Reservation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reservationId** | **string** |  | [readonly] [default to undefined]
**propertyId** | **string** |  | [default to undefined]
**guestId** | **string** |  | [default to undefined]
**checkInDate** | **string** |  | [default to undefined]
**checkOutDate** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**guestCount** | [**ReservationAllOfGuestCount**](ReservationAllOfGuestCount.md) |  | [optional] [default to undefined]
**specialRequests** | **string** |  | [optional] [default to undefined]
**totalAmount** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**cancellationPolicy** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [readonly] [default to undefined]
**updatedAt** | **string** |  | [optional] [readonly] [default to undefined]
**version** | **number** | Version for optimistic locking | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Reservation } from '@stayos/api-client';

const instance: Reservation = {
    reservationId,
    propertyId,
    guestId,
    checkInDate,
    checkOutDate,
    status,
    guestCount,
    specialRequests,
    totalAmount,
    cancellationPolicy,
    createdAt,
    updatedAt,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
