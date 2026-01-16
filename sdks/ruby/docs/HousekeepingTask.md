# OpenapiClient::HousekeepingTask

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **task_id** | **String** |  | [readonly] |
| **property_id** | **String** |  |  |
| **inventory_unit_id** | **String** | Room/unit to clean |  |
| **task_type** | **String** |  |  |
| **priority** | **String** |  | [optional][default to &#39;NORMAL&#39;] |
| **status** | **String** |  |  |
| **assigned_to** | **String** | Staff member ID | [optional] |
| **scheduled_for** | **Time** |  | [optional] |
| **started_at** | **Time** |  | [optional] |
| **completed_at** | **Time** |  | [optional] |
| **verified_at** | **Time** |  | [optional] |
| **verified_by** | **String** |  | [optional] |
| **notes** | **String** |  | [optional] |
| **issues** | **Array&lt;String&gt;** | Issues found during cleaning | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::HousekeepingTask.new(
  task_id: null,
  property_id: null,
  inventory_unit_id: null,
  task_type: CHECKOUT_CLEAN,
  priority: null,
  status: PENDING,
  assigned_to: null,
  scheduled_for: null,
  started_at: null,
  completed_at: null,
  verified_at: null,
  verified_by: null,
  notes: null,
  issues: null,
  metadata: null
)
```

