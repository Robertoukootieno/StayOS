# OpenapiClient::GuestProfile

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **guest_id** | **String** |  | [readonly] |
| **first_name** | **String** |  |  |
| **last_name** | **String** |  |  |
| **email** | **String** |  |  |
| **phone** | **String** |  | [optional] |
| **date_of_birth** | **Date** |  | [optional] |
| **nationality** | **String** |  | [optional] |
| **address** | [**GuestProfileAllOfAddress**](GuestProfileAllOfAddress.md) |  | [optional] |
| **loyalty_tier** | **String** |  | [optional] |
| **preferences** | **Object** | Guest preferences | [optional] |
| **created_at** | **Time** |  | [optional][readonly] |
| **updated_at** | **Time** |  | [optional][readonly] |
| **version** | **Integer** | Version for optimistic locking | [optional][readonly] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::GuestProfile.new(
  guest_id: null,
  first_name: John,
  last_name: Doe,
  email: john.doe@example.com,
  phone: +1234567890,
  date_of_birth: 1990-01-15,
  nationality: US,
  address: null,
  loyalty_tier: GOLD,
  preferences: null,
  created_at: null,
  updated_at: null,
  version: null
)
```

