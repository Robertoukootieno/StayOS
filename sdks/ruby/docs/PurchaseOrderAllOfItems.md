# OpenapiClient::PurchaseOrderAllOfItems

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **quantity** | **Float** |  | [optional] |
| **unit** | **String** |  | [optional] |
| **unit_price** | [**Model0**](Model0.md) |  | [optional] |
| **total_price** | [**Model0**](Model0.md) |  | [optional] |
| **received_quantity** | **Float** |  | [optional][default to 0] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PurchaseOrderAllOfItems.new(
  item_id: null,
  description: null,
  quantity: null,
  unit: null,
  unit_price: null,
  total_price: null,
  received_quantity: null
)
```

