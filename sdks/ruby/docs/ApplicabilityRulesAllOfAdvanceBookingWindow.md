# OpenapiClient::ApplicabilityRulesAllOfAdvanceBookingWindow

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **minimum_days** | **Integer** | Minimum days before check-in | [optional] |
| **maximum_days** | **Integer** | Maximum days before check-in | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ApplicabilityRulesAllOfAdvanceBookingWindow.new(
  minimum_days: 0,
  maximum_days: 365
)
```

