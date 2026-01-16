# PurchaseOrderItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemId** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**quantity** | **number** |  | [optional] [default to undefined]
**unit** | **string** |  | [optional] [default to undefined]
**unitPrice** | [**Money**](Money.md) |  | [optional] [default to undefined]
**totalPrice** | [**Money**](Money.md) |  | [optional] [default to undefined]
**receivedQuantity** | **number** |  | [optional] [default to 0]

## Example

```typescript
import { PurchaseOrderItemsInner } from '@stayos/api-client';

const instance: PurchaseOrderItemsInner = {
    itemId,
    description,
    quantity,
    unit,
    unitPrice,
    totalPrice,
    receivedQuantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
