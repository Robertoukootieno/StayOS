# OpenapiClient::FBInventoryItem

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **inventory_item_id** | **String** |  | [readonly] |
| **name** | **String** |  |  |
| **category** | **String** |  | [optional] |
| **unit** | **String** |  |  |
| **current_stock** | **Float** |  |  |
| **minimum_stock** | **Float** |  | [optional] |
| **maximum_stock** | **Float** |  | [optional] |
| **reorder_point** | **Float** |  | [optional] |
| **unit_cost** | [**Model0**](Model0.md) |  | [optional] |
| **supplier** | **String** |  | [optional] |
| **last_restocked** | **Time** |  | [optional] |
| **expiry_date** | **Date** |  | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::FBInventoryItem.new(
  inventory_item_id: null,
  name: Tomatoes,
  category: PRODUCE,
  unit: KG,
  current_stock: null,
  minimum_stock: null,
  maximum_stock: null,
  reorder_point: null,
  unit_cost: null,
  supplier: null,
  last_restocked: null,
  expiry_date: null,
  metadata: null
)
```

