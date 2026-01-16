# OpenapiClient::ComplianceReport

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **report_id** | **String** |  | [readonly] |
| **type** | **String** |  |  |
| **property_id** | **String** |  |  |
| **start_date** | **Date** |  |  |
| **end_date** | **Date** |  |  |
| **status** | **String** |  | [optional] |
| **file_url** | **String** |  | [optional][readonly] |
| **submitted_to** | **String** | Authority/agency submitted to | [optional] |
| **submitted_at** | **Time** |  | [optional] |
| **generated_at** | **Time** |  | [optional][readonly] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ComplianceReport.new(
  report_id: null,
  type: GUEST_REGISTRY,
  property_id: null,
  start_date: null,
  end_date: null,
  status: COMPLETED,
  file_url: null,
  submitted_to: null,
  submitted_at: null,
  generated_at: null,
  metadata: null
)
```

