# OpenapiClient::PaginatedResponseAllOfLinks

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **_self** | **String** |  | [optional] |
| **_next** | **String** |  | [optional] |
| **prev** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PaginatedResponseAllOfLinks.new(
  _self: https://api.stayos.com/v1/reservations?pageSize&#x3D;20,
  _next: https://api.stayos.com/v1/reservations?pageSize&#x3D;20&amp;cursor&#x3D;eyJpZCI6MTIzNDU2fQ&#x3D;&#x3D;,
  prev: null
)
```

