# OpenapiClient::CreateInventoryBlockRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  |  |
| **unit_type_id** | **String** |  | [optional] |
| **start_date** | **Date** |  |  |
| **end_date** | **Date** |  |  |
| **quantity** | **Integer** |  |  |
| **reason** | **String** |  |  |
| **notes** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::CreateInventoryBlockRequest.new(
  property_id: null,
  unit_type_id: null,
  start_date: null,
  end_date: null,
  quantity: null,
  reason: null,
  notes: null
)
```

