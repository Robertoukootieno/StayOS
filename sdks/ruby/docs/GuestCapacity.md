# OpenapiClient::GuestCapacity

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **max_adults** | **Integer** |  |  |
| **max_children** | **Integer** |  | [optional] |
| **max_occupancy** | **Integer** | Total maximum occupancy | [optional] |
| **extra_bed_available** | **Boolean** |  | [optional][default to false] |
| **extra_bed_charge** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::GuestCapacity.new(
  max_adults: 2,
  max_children: 1,
  max_occupancy: 3,
  extra_bed_available: null,
  extra_bed_charge: null
)
```

