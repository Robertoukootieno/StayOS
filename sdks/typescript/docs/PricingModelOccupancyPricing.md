# PricingModelOccupancyPricing

Per-person pricing adjustments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** |  | [optional] [default to false]
**baseOccupancy** | **number** |  | [optional] [default to undefined]
**additionalGuestCharge** | [**Money**](Money.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PricingModelOccupancyPricing } from '@stayos/api-client';

const instance: PricingModelOccupancyPricing = {
    enabled,
    baseOccupancy,
    additionalGuestCharge,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
