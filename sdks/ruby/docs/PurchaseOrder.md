# OpenapiClient::PurchaseOrder

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **po_id** | **String** |  | [readonly] |
| **po_number** | **String** | Human-readable PO number | [optional][readonly] |
| **property_id** | **String** |  |  |
| **supplier_id** | **String** |  |  |
| **status** | **String** |  |  |
| **items** | [**Array&lt;PurchaseOrderAllOfItems&gt;**](PurchaseOrderAllOfItems.md) |  | [optional] |
| **subtotal** | [**PurchaseOrderAllOfSubtotal**](PurchaseOrderAllOfSubtotal.md) |  | [optional] |
| **tax** | [**PurchaseOrderAllOfTax**](PurchaseOrderAllOfTax.md) |  | [optional] |
| **total** | [**PurchaseOrderAllOfTotal**](PurchaseOrderAllOfTotal.md) |  | [optional] |
| **delivery_address** | [**Model0**](Model0.md) |  | [optional] |
| **requested_delivery_date** | **Date** |  | [optional] |
| **actual_delivery_date** | **Date** |  | [optional] |
| **approved_by** | **String** |  | [optional] |
| **approved_at** | **Time** |  | [optional] |
| **submitted_at** | **Time** |  | [optional] |
| **notes** | **String** |  | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PurchaseOrder.new(
  po_id: null,
  po_number: PO-2025-001234,
  property_id: null,
  supplier_id: null,
  status: DRAFT,
  items: null,
  subtotal: null,
  tax: null,
  total: null,
  delivery_address: null,
  requested_delivery_date: null,
  actual_delivery_date: null,
  approved_by: null,
  approved_at: null,
  submitted_at: null,
  notes: null,
  metadata: null
)
```

