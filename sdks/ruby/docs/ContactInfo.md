# OpenapiClient::ContactInfo

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **email** | **String** |  |  |
| **phone** | **String** | E.164 format phone number | [optional] |
| **alternate_phone** | **String** |  | [optional] |
| **preferred_contact_method** | **String** |  | [optional][default to &#39;EMAIL&#39;] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ContactInfo.new(
  email: guest@example.com,
  phone: +14155551234,
  alternate_phone: +14155555678,
  preferred_contact_method: null
)
```

