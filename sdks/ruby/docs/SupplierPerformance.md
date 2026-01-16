# OpenapiClient::SupplierPerformance

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **supplier_id** | **String** |  |  |
| **start_date** | **Date** |  |  |
| **end_date** | **Date** |  |  |
| **total_orders** | **Integer** |  | [optional] |
| **total_spend** | [**Model0**](Model0.md) |  | [optional] |
| **on_time_delivery_rate** | **Float** | Percentage | [optional] |
| **quality_rating** | **Float** |  | [optional] |
| **average_lead_time** | **Integer** | Average lead time in days | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SupplierPerformance.new(
  supplier_id: null,
  start_date: null,
  end_date: null,
  total_orders: null,
  total_spend: null,
  on_time_delivery_rate: null,
  quality_rating: null,
  average_lead_time: null
)
```

