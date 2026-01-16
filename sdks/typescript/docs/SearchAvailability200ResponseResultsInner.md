# SearchAvailability200ResponseResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventoryUnitId** | **string** |  | [optional] [default to undefined]
**unitType** | [**UnitType**](UnitType.md) |  | [optional] [default to undefined]
**property** | [**Property**](Property.md) |  | [optional] [default to undefined]
**rateStrategy** | [**RateStrategy**](RateStrategy.md) |  | [optional] [default to undefined]
**totalPrice** | [**Money**](Money.md) |  | [optional] [default to undefined]
**priceBreakdown** | [**Array&lt;SearchAvailability200ResponseResultsInnerPriceBreakdownInner&gt;**](SearchAvailability200ResponseResultsInnerPriceBreakdownInner.md) |  | [optional] [default to undefined]
**availability** | **string** |  | [optional] [default to undefined]
**cancellationPolicy** | [**CancellationPolicy**](CancellationPolicy.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SearchAvailability200ResponseResultsInner } from '@stayos/api-client';

const instance: SearchAvailability200ResponseResultsInner = {
    inventoryUnitId,
    unitType,
    property,
    rateStrategy,
    totalPrice,
    priceBreakdown,
    availability,
    cancellationPolicy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
