# OpenapiClient::PropertyPoliciesAllOfChildPolicy

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **children_allowed** | **Boolean** |  | [optional][default to true] |
| **free_child_age** | **Integer** | Maximum age for free child stay | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PropertyPoliciesAllOfChildPolicy.new(
  children_allowed: null,
  free_child_age: 12
)
```

