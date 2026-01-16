# OpenapiClient::ServiceRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  | [readonly] |
| **property_id** | **String** |  |  |
| **stay_id** | **String** |  | [optional] |
| **guest_id** | **String** |  | [optional] |
| **inventory_unit_id** | **String** |  | [optional] |
| **category** | **String** |  |  |
| **priority** | **String** |  | [optional][default to &#39;NORMAL&#39;] |
| **status** | **String** |  |  |
| **title** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **requested_by** | **String** |  | [optional][default to &#39;GUEST&#39;] |
| **assigned_to** | **String** |  | [optional] |
| **acknowledged_at** | **Time** |  | [optional] |
| **completed_at** | **Time** |  | [optional] |
| **guest_feedback** | [**ServiceRequestAllOfGuestFeedback**](ServiceRequestAllOfGuestFeedback.md) |  | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ServiceRequest.new(
  request_id: null,
  property_id: null,
  stay_id: null,
  guest_id: null,
  inventory_unit_id: null,
  category: ROOM_SERVICE,
  priority: null,
  status: SUBMITTED,
  title: Extra towels needed,
  description: null,
  requested_by: null,
  assigned_to: null,
  acknowledged_at: null,
  completed_at: null,
  guest_feedback: null,
  metadata: null
)
```

