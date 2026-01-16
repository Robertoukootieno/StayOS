# OpenapiClient::RevenueReport

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **report_id** | **String** |  | [readonly] |
| **property_id** | **String** |  |  |
| **start_date** | **Date** |  |  |
| **end_date** | **Date** |  |  |
| **total_revenue** | [**Model0**](Model0.md) |  | [optional] |
| **revenue_by_category** | [**RevenueReportAllOfRevenueByCategory**](RevenueReportAllOfRevenueByCategory.md) |  | [optional] |
| **occupancy_rate** | **Float** | Percentage | [optional] |
| **average_daily_rate** | [**Model0**](Model0.md) |  | [optional] |
| **rev_par** | [**Model0**](Model0.md) | Revenue per available room | [optional] |
| **generated_at** | **Time** |  | [optional][readonly] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RevenueReport.new(
  report_id: null,
  property_id: null,
  start_date: null,
  end_date: null,
  total_revenue: null,
  revenue_by_category: null,
  occupancy_rate: null,
  average_daily_rate: null,
  rev_par: null,
  generated_at: null
)
```

