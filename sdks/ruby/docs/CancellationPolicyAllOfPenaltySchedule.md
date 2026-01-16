# OpenapiClient::CancellationPolicyAllOfPenaltySchedule

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **hours_before_check_in** | **Integer** |  | [optional] |
| **penalty_type** | **String** |  | [optional] |
| **penalty_value** | **Float** |  | [optional] |
| **description** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::CancellationPolicyAllOfPenaltySchedule.new(
  hours_before_check_in: 24,
  penalty_type: null,
  penalty_value: 50,
  description: 50% charge if cancelled within 24 hours
)
```

