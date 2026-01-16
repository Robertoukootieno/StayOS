# GetReservationQuote200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quoteId** | **string** |  | [optional] [default to undefined]
**totalAmount** | [**Money**](Money.md) |  | [optional] [default to undefined]
**breakdown** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**cancellationPolicy** | [**CancellationPolicy**](CancellationPolicy.md) |  | [optional] [default to undefined]
**validUntil** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetReservationQuote200Response } from '@stayos/api-client';

const instance: GetReservationQuote200Response = {
    quoteId,
    totalAmount,
    breakdown,
    cancellationPolicy,
    validUntil,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
