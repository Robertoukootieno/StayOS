# OpenapiClient::PricingModel

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **base_rates** | [**Array&lt;PricingModelAllOfBaseRates&gt;**](PricingModelAllOfBaseRates.md) | Base rates per unit type |  |
| **occupancy_pricing** | [**PricingModelAllOfOccupancyPricing**](PricingModelAllOfOccupancyPricing.md) |  | [optional] |
| **seasonal_adjustments** | [**Array&lt;PricingModelAllOfSeasonalAdjustments&gt;**](PricingModelAllOfSeasonalAdjustments.md) |  | [optional] |
| **length_of_stay_discounts** | [**Array&lt;PricingModelAllOfLengthOfStayDiscounts&gt;**](PricingModelAllOfLengthOfStayDiscounts.md) |  | [optional] |
| **taxes** | [**Array&lt;PricingModelAllOfTaxes&gt;**](PricingModelAllOfTaxes.md) |  | [optional] |
| **fees** | [**Array&lt;PricingModelAllOfFees&gt;**](PricingModelAllOfFees.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PricingModel.new(
  base_rates: null,
  occupancy_pricing: null,
  seasonal_adjustments: null,
  length_of_stay_discounts: null,
  taxes: null,
  fees: null
)
```

