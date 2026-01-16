# SupplierPerformance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supplierId** | **string** |  | [default to undefined]
**startDate** | **string** |  | [default to undefined]
**endDate** | **string** |  | [default to undefined]
**totalOrders** | **number** |  | [optional] [default to undefined]
**totalSpend** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**onTimeDeliveryRate** | **number** | Percentage | [optional] [default to undefined]
**qualityRating** | **number** |  | [optional] [default to undefined]
**averageLeadTime** | **number** | Average lead time in days | [optional] [default to undefined]

## Example

```typescript
import { SupplierPerformance } from '@stayos/api-client';

const instance: SupplierPerformance = {
    supplierId,
    startDate,
    endDate,
    totalOrders,
    totalSpend,
    onTimeDeliveryRate,
    qualityRating,
    averageLeadTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
