# OpenapiClient::SearchAvailability200ResponseResultsInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **inventory_unit_id** | **String** |  | [optional] |
| **unit_type** | [**UnitType**](UnitType.md) |  | [optional] |
| **property** | [**Property**](Property.md) |  | [optional] |
| **rate_strategy** | [**RateStrategy**](RateStrategy.md) |  | [optional] |
| **total_price** | [**Money**](Money.md) |  | [optional] |
| **price_breakdown** | [**Array&lt;SearchAvailability200ResponseResultsInnerPriceBreakdownInner&gt;**](SearchAvailability200ResponseResultsInnerPriceBreakdownInner.md) |  | [optional] |
| **availability** | **String** |  | [optional] |
| **cancellation_policy** | [**CancellationPolicy**](CancellationPolicy.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SearchAvailability200ResponseResultsInner.new(
  inventory_unit_id: null,
  unit_type: null,
  property: null,
  rate_strategy: null,
  total_price: null,
  price_breakdown: null,
  availability: null,
  cancellation_policy: null
)
```

