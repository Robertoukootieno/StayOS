# OpenapiClient::GetReservationQuote200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **quote_id** | **String** |  | [optional] |
| **total_amount** | [**Money**](Money.md) |  | [optional] |
| **breakdown** | **Array&lt;Object&gt;** |  | [optional] |
| **cancellation_policy** | [**CancellationPolicy**](CancellationPolicy.md) |  | [optional] |
| **valid_until** | **Time** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::GetReservationQuote200Response.new(
  quote_id: null,
  total_amount: null,
  breakdown: null,
  cancellation_policy: null,
  valid_until: null
)
```

