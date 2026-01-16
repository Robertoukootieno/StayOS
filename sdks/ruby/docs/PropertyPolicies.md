# OpenapiClient::PropertyPolicies

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_in_time** | **String** | Default check-in time (HH:mm) | [optional] |
| **check_out_time** | **String** | Default check-out time (HH:mm) | [optional] |
| **late_checkout_fee** | [**Model0**](Model0.md) |  | [optional] |
| **cancellation_policy** | [**Model0**](Model0.md) |  | [optional] |
| **child_policy** | [**PropertyPoliciesAllOfChildPolicy**](PropertyPoliciesAllOfChildPolicy.md) |  | [optional] |
| **pet_policy** | [**PropertyPoliciesAllOfPetPolicy**](PropertyPoliciesAllOfPetPolicy.md) |  | [optional] |
| **smoking_policy** | **String** |  | [optional][default to &#39;NON_SMOKING&#39;] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PropertyPolicies.new(
  check_in_time: 15:00,
  check_out_time: 11:00,
  late_checkout_fee: null,
  cancellation_policy: null,
  child_policy: null,
  pet_policy: null,
  smoking_policy: null
)
```

