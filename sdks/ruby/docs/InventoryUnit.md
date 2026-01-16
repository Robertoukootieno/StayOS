# OpenapiClient::InventoryUnit

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **inventory_unit_id** | **String** |  | [optional][readonly] |
| **property_id** | **String** |  |  |
| **unit_number** | **String** | Human-readable unit identifier |  |
| **unit_type_id** | **String** | Reference to unit type classification |  |
| **unit_type** | [**Model0**](Model0.md) |  | [optional] |
| **floor** | **Integer** |  | [optional] |
| **physical_status** | **String** |  | [optional][default to &#39;OPERATIONAL&#39;] |
| **operational_status** | **String** |  | [optional][default to &#39;AVAILABLE&#39;] |
| **accessibility** | [**Model0**](Model0.md) |  | [optional] |
| **last_maintenance_date** | **Date** |  | [optional] |
| **next_scheduled_maintenance** | **Date** |  | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |
| **links** | [**InventoryUnitAllOfLinks**](InventoryUnitAllOfLinks.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::InventoryUnit.new(
  inventory_unit_id: 770e8400-e29b-41d4-a716-446655440000,
  property_id: 550e8400-e29b-41d4-a716-446655440000,
  unit_number: 101,
  unit_type_id: 880e8400-e29b-41d4-a716-446655440000,
  unit_type: null,
  floor: 1,
  physical_status: null,
  operational_status: null,
  accessibility: null,
  last_maintenance_date: 2025-11-15,
  next_scheduled_maintenance: 2026-02-15,
  metadata: null,
  links: null
)
```

