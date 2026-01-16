# PurchaseOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**poId** | **string** |  | [readonly] [default to undefined]
**poNumber** | **string** | Human-readable PO number | [optional] [readonly] [default to undefined]
**propertyId** | **string** |  | [default to undefined]
**supplierId** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**items** | [**Array&lt;PurchaseOrderAllOfItems&gt;**](PurchaseOrderAllOfItems.md) |  | [optional] [default to undefined]
**subtotal** | [**PurchaseOrderAllOfSubtotal**](PurchaseOrderAllOfSubtotal.md) |  | [optional] [default to undefined]
**tax** | [**PurchaseOrderAllOfTax**](PurchaseOrderAllOfTax.md) |  | [optional] [default to undefined]
**total** | [**PurchaseOrderAllOfTotal**](PurchaseOrderAllOfTotal.md) |  | [optional] [default to undefined]
**deliveryAddress** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**requestedDeliveryDate** | **string** |  | [optional] [default to undefined]
**actualDeliveryDate** | **string** |  | [optional] [default to undefined]
**approvedBy** | **string** |  | [optional] [default to undefined]
**approvedAt** | **string** |  | [optional] [default to undefined]
**submittedAt** | **string** |  | [optional] [default to undefined]
**notes** | **string** |  | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PurchaseOrder } from '@stayos/api-client';

const instance: PurchaseOrder = {
    poId,
    poNumber,
    propertyId,
    supplierId,
    status,
    items,
    subtotal,
    tax,
    total,
    deliveryAddress,
    requestedDeliveryDate,
    actualDeliveryDate,
    approvedBy,
    approvedAt,
    submittedAt,
    notes,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
