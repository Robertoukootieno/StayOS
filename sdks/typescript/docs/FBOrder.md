# FBOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **string** |  | [readonly] [default to undefined]
**propertyId** | **string** |  | [default to undefined]
**stayId** | **string** |  | [optional] [default to undefined]
**guestId** | **string** |  | [optional] [default to undefined]
**inventoryUnitId** | **string** | Room number for room service | [optional] [default to undefined]
**orderType** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**items** | [**Array&lt;FBOrderAllOfItems&gt;**](FBOrderAllOfItems.md) |  | [optional] [default to undefined]
**subtotal** | [**FBOrderAllOfSubtotal**](FBOrderAllOfSubtotal.md) |  | [optional] [default to undefined]
**tax** | [**FBOrderAllOfTax**](FBOrderAllOfTax.md) |  | [optional] [default to undefined]
**serviceCharge** | [**FBOrderAllOfServiceCharge**](FBOrderAllOfServiceCharge.md) |  | [optional] [default to undefined]
**total** | [**FBOrderAllOfTotal**](FBOrderAllOfTotal.md) |  | [optional] [default to undefined]
**specialInstructions** | **string** |  | [optional] [default to undefined]
**deliveryTime** | **string** |  | [optional] [default to undefined]
**servedAt** | **string** |  | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FBOrder } from '@stayos/api-client';

const instance: FBOrder = {
    orderId,
    propertyId,
    stayId,
    guestId,
    inventoryUnitId,
    orderType,
    status,
    items,
    subtotal,
    tax,
    serviceCharge,
    total,
    specialInstructions,
    deliveryTime,
    servedAt,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
