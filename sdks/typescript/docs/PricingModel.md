# PricingModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseRates** | [**Array&lt;PricingModelAllOfBaseRates&gt;**](PricingModelAllOfBaseRates.md) | Base rates per unit type | [default to undefined]
**occupancyPricing** | [**PricingModelAllOfOccupancyPricing**](PricingModelAllOfOccupancyPricing.md) |  | [optional] [default to undefined]
**seasonalAdjustments** | [**Array&lt;PricingModelAllOfSeasonalAdjustments&gt;**](PricingModelAllOfSeasonalAdjustments.md) |  | [optional] [default to undefined]
**lengthOfStayDiscounts** | [**Array&lt;PricingModelAllOfLengthOfStayDiscounts&gt;**](PricingModelAllOfLengthOfStayDiscounts.md) |  | [optional] [default to undefined]
**taxes** | [**Array&lt;PricingModelAllOfTaxes&gt;**](PricingModelAllOfTaxes.md) |  | [optional] [default to undefined]
**fees** | [**Array&lt;PricingModelAllOfFees&gt;**](PricingModelAllOfFees.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PricingModel } from '@stayos/api-client';

const instance: PricingModel = {
    baseRates,
    occupancyPricing,
    seasonalAdjustments,
    lengthOfStayDiscounts,
    taxes,
    fees,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
