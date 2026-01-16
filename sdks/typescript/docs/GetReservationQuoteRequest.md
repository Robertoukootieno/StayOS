# GetReservationQuoteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**propertyId** | **string** |  | [default to undefined]
**unitTypeId** | **string** |  | [default to undefined]
**checkInDate** | **string** |  | [default to undefined]
**checkOutDate** | **string** |  | [default to undefined]
**guestCount** | [**GetReservationQuoteRequestGuestCount**](GetReservationQuoteRequestGuestCount.md) |  | [default to undefined]
**rateStrategyId** | **string** |  | [optional] [default to undefined]
**promoCode** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetReservationQuoteRequest } from '@stayos/api-client';

const instance: GetReservationQuoteRequest = {
    propertyId,
    unitTypeId,
    checkInDate,
    checkOutDate,
    guestCount,
    rateStrategyId,
    promoCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
