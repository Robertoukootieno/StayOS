# OpenapiClient::SearchAvailabilityRequestFilters

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **min_price** | [**Money**](Money.md) |  | [optional] |
| **max_price** | [**Money**](Money.md) |  | [optional] |
| **amenities** | **Array&lt;String&gt;** |  | [optional] |
| **accessibility** | **Boolean** | Require wheelchair accessible units | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SearchAvailabilityRequestFilters.new(
  min_price: null,
  max_price: null,
  amenities: [&quot;WIFI&quot;,&quot;PARKING&quot;],
  accessibility: null
)
```

