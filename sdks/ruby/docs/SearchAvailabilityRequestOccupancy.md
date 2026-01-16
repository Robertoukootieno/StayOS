# OpenapiClient::SearchAvailabilityRequestOccupancy

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **adults** | **Integer** |  |  |
| **children** | **Integer** |  | [optional] |
| **child_ages** | **Array&lt;Integer&gt;** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SearchAvailabilityRequestOccupancy.new(
  adults: 2,
  children: 1,
  child_ages: [8]
)
```

