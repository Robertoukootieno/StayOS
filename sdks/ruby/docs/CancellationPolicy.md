# OpenapiClient::CancellationPolicy

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **refundability** | **String** |  |  |
| **free_cancellation_hours** | **Integer** | Hours before check-in for free cancellation | [optional] |
| **penalty_schedule** | [**Array&lt;CancellationPolicyAllOfPenaltySchedule&gt;**](CancellationPolicyAllOfPenaltySchedule.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::CancellationPolicy.new(
  refundability: FULLY_REFUNDABLE,
  free_cancellation_hours: 24,
  penalty_schedule: null
)
```

