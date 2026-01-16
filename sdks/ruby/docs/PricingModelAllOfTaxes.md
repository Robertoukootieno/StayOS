# OpenapiClient::PricingModelAllOfTaxes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  | [optional] |
| **type** | **String** |  | [optional] |
| **rate** | **Float** |  | [optional] |
| **is_included** | **Boolean** | Whether tax is included in displayed rate | [optional][default to false] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PricingModelAllOfTaxes.new(
  name: City Tax,
  type: null,
  rate: 14,
  is_included: null
)
```

