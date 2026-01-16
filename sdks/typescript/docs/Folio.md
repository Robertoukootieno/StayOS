# Folio


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folioId** | **string** |  | [readonly] [default to undefined]
**propertyId** | **string** |  | [default to undefined]
**guestId** | **string** |  | [default to undefined]
**stayId** | **string** |  | [optional] [default to undefined]
**reservationId** | **string** |  | [optional] [default to undefined]
**folioNumber** | **string** | Human-readable folio number | [optional] [readonly] [default to undefined]
**status** | **string** |  | [default to undefined]
**lineItems** | [**Array&lt;Model0&gt;**](Model0.md) |  | [optional] [default to undefined]
**subtotal** | [**FolioAllOfSubtotal**](FolioAllOfSubtotal.md) |  | [optional] [default to undefined]
**taxes** | [**FolioAllOfTaxes**](FolioAllOfTaxes.md) |  | [optional] [default to undefined]
**fees** | [**FolioAllOfFees**](FolioAllOfFees.md) |  | [optional] [default to undefined]
**total** | [**FolioAllOfTotal**](FolioAllOfTotal.md) |  | [optional] [default to undefined]
**balance** | [**FolioAllOfBalance**](FolioAllOfBalance.md) |  | [optional] [default to undefined]
**payments** | [**Array&lt;Model0&gt;**](Model0.md) |  | [optional] [default to undefined]
**closedAt** | **string** |  | [optional] [readonly] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**links** | [**FolioAllOfLinks**](FolioAllOfLinks.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Folio } from '@stayos/api-client';

const instance: Folio = {
    folioId,
    propertyId,
    guestId,
    stayId,
    reservationId,
    folioNumber,
    status,
    lineItems,
    subtotal,
    taxes,
    fees,
    total,
    balance,
    payments,
    closedAt,
    metadata,
    links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
