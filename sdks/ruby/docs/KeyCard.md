# OpenapiClient::KeyCard

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_id** | **String** |  | [readonly] |
| **card_number** | **String** | Physical card number |  |
| **status** | **String** |  |  |
| **issued_at** | **Time** |  | [optional][readonly] |
| **expires_at** | **Time** | Card expiration | [optional] |
| **access_level** | **String** |  | [optional][default to &#39;ROOM_ONLY&#39;] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::KeyCard.new(
  card_id: null,
  card_number: KC-12345678,
  status: ACTIVE,
  issued_at: null,
  expires_at: null,
  access_level: null
)
```

