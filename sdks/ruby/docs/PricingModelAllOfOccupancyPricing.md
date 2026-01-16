# OpenapiClient::PricingModelAllOfOccupancyPricing

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **enabled** | **Boolean** |  | [optional][default to false] |
| **base_occupancy** | **Integer** |  | [optional] |
| **additional_guest_charge** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PricingModelAllOfOccupancyPricing.new(
  enabled: null,
  base_occupancy: 2,
  additional_guest_charge: null
)
```

