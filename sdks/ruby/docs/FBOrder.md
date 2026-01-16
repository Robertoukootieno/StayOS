# OpenapiClient::FBOrder

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **order_id** | **String** |  | [readonly] |
| **property_id** | **String** |  |  |
| **stay_id** | **String** |  | [optional] |
| **guest_id** | **String** |  | [optional] |
| **inventory_unit_id** | **String** | Room number for room service | [optional] |
| **order_type** | **String** |  |  |
| **status** | **String** |  |  |
| **items** | [**Array&lt;FBOrderAllOfItems&gt;**](FBOrderAllOfItems.md) |  | [optional] |
| **subtotal** | [**FBOrderAllOfSubtotal**](FBOrderAllOfSubtotal.md) |  | [optional] |
| **tax** | [**FBOrderAllOfTax**](FBOrderAllOfTax.md) |  | [optional] |
| **service_charge** | [**FBOrderAllOfServiceCharge**](FBOrderAllOfServiceCharge.md) |  | [optional] |
| **total** | [**FBOrderAllOfTotal**](FBOrderAllOfTotal.md) |  | [optional] |
| **special_instructions** | **String** |  | [optional] |
| **delivery_time** | **Time** |  | [optional] |
| **served_at** | **Time** |  | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::FBOrder.new(
  order_id: null,
  property_id: null,
  stay_id: null,
  guest_id: null,
  inventory_unit_id: null,
  order_type: ROOM_SERVICE,
  status: PENDING,
  items: null,
  subtotal: null,
  tax: null,
  service_charge: null,
  total: null,
  special_instructions: null,
  delivery_time: null,
  served_at: null,
  metadata: null
)
```

