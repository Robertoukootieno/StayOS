# OpenapiClient::LineItem

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **line_item_id** | **String** |  | [readonly] |
| **description** | **String** |  |  |
| **category** | **String** |  |  |
| **amount** | [**Model0**](Model0.md) |  |  |
| **quantity** | **Integer** |  | [optional][default to 1] |
| **unit_price** | [**Model0**](Model0.md) |  | [optional] |
| **date** | **Date** |  | [optional] |
| **is_voided** | **Boolean** |  | [optional][readonly][default to false] |
| **voided_at** | **Time** |  | [optional][readonly] |
| **voided_by** | **String** |  | [optional][readonly] |
| **void_reason** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::LineItem.new(
  line_item_id: null,
  description: Room charge - Night 1,
  category: ROOM,
  amount: null,
  quantity: null,
  unit_price: null,
  date: null,
  is_voided: null,
  voided_at: null,
  voided_by: null,
  void_reason: null
)
```

