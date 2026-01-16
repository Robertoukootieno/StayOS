# OpenapiClient::AvailabilitySlotAllOfRestrictions

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **closed_to_arrival** | **Boolean** |  | [optional][default to false] |
| **closed_to_departure** | **Boolean** |  | [optional][default to false] |
| **minimum_stay** | **Integer** |  | [optional] |
| **maximum_stay** | **Integer** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::AvailabilitySlotAllOfRestrictions.new(
  closed_to_arrival: null,
  closed_to_departure: null,
  minimum_stay: null,
  maximum_stay: null
)
```

