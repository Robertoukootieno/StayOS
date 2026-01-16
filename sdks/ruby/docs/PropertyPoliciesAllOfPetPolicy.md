# OpenapiClient::PropertyPoliciesAllOfPetPolicy

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pets_allowed** | **Boolean** |  | [optional][default to false] |
| **pet_fee** | [**Model0**](Model0.md) |  | [optional] |
| **pet_types** | **Array&lt;String&gt;** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PropertyPoliciesAllOfPetPolicy.new(
  pets_allowed: null,
  pet_fee: null,
  pet_types: null
)
```

