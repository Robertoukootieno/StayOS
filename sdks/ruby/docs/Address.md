# OpenapiClient::Address

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **street** | **String** |  | [optional] |
| **street2** | **String** | Apartment, suite, etc. | [optional] |
| **city** | **String** |  | [optional] |
| **state** | **String** | State/Province/Region | [optional] |
| **postal_code** | **String** |  | [optional] |
| **country** | **String** | ISO 3166-1 alpha-2 country code |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Address.new(
  street: 123 Main Street,
  street2: Suite 100,
  city: San Francisco,
  state: CA,
  postal_code: 94102,
  country: US
)
```

