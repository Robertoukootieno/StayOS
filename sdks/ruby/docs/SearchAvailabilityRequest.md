# OpenapiClient::SearchAvailabilityRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** | Filter by specific property (optional) | [optional] |
| **check_in_date** | **Date** |  |  |
| **check_out_date** | **Date** |  |  |
| **occupancy** | [**SearchAvailabilityRequestOccupancy**](SearchAvailabilityRequestOccupancy.md) |  |  |
| **unit_type_id** | **String** | Filter by unit type | [optional] |
| **rate_strategy_id** | **String** | Filter by rate strategy | [optional] |
| **filters** | [**SearchAvailabilityRequestFilters**](SearchAvailabilityRequestFilters.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SearchAvailabilityRequest.new(
  property_id: null,
  check_in_date: 2025-12-20,
  check_out_date: 2025-12-25,
  occupancy: null,
  unit_type_id: null,
  rate_strategy_id: null,
  filters: null
)
```

