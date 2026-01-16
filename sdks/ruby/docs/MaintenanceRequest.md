# OpenapiClient::MaintenanceRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  | [readonly] |
| **property_id** | **String** |  |  |
| **inventory_unit_id** | **String** | Specific room/unit (if applicable) | [optional] |
| **category** | **String** |  |  |
| **priority** | **String** |  |  |
| **status** | **String** |  |  |
| **title** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **reported_by** | **String** |  | [optional] |
| **assigned_to** | **String** | Technician ID | [optional] |
| **scheduled_for** | **Time** |  | [optional] |
| **completed_at** | **Time** |  | [optional] |
| **verified_at** | **Time** |  | [optional] |
| **estimated_cost** | [**Model0**](Model0.md) |  | [optional] |
| **actual_cost** | [**Model0**](Model0.md) |  | [optional] |
| **work_log** | [**Array&lt;MaintenanceRequestAllOfWorkLog&gt;**](MaintenanceRequestAllOfWorkLog.md) |  | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::MaintenanceRequest.new(
  request_id: null,
  property_id: null,
  inventory_unit_id: null,
  category: PLUMBING,
  priority: HIGH,
  status: SUBMITTED,
  title: Leaking faucet in bathroom,
  description: null,
  reported_by: null,
  assigned_to: null,
  scheduled_for: null,
  completed_at: null,
  verified_at: null,
  estimated_cost: null,
  actual_cost: null,
  work_log: null,
  metadata: null
)
```

