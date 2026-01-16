# OpenapiClient::DisputeFolioRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reason** | **String** |  |  |
| **amount** | [**Money**](Money.md) |  | [optional] |
| **line_item_ids** | **Array&lt;String&gt;** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::DisputeFolioRequest.new(
  reason: null,
  amount: null,
  line_item_ids: null
)
```

