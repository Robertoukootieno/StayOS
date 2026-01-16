# OpenapiClient::Feedback

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **feedback_id** | **String** |  | [readonly] |
| **guest_id** | **String** |  |  |
| **stay_id** | **String** | Associated stay (if applicable) | [optional] |
| **property_id** | **String** |  | [optional] |
| **type** | **String** |  |  |
| **category** | **String** |  | [optional] |
| **rating** | **Integer** | Overall rating (1-5 stars) |  |
| **subject** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **status** | **String** |  |  |
| **priority** | **String** |  | [optional][default to &#39;MEDIUM&#39;] |
| **response** | [**FeedbackAllOfResponse**](FeedbackAllOfResponse.md) |  | [optional] |
| **service_recovery** | [**FeedbackAllOfServiceRecovery**](FeedbackAllOfServiceRecovery.md) |  | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Feedback.new(
  feedback_id: null,
  guest_id: null,
  stay_id: null,
  property_id: null,
  type: COMPLAINT,
  category: ROOM_CLEANLINESS,
  rating: 3,
  subject: Room not cleaned properly,
  description: The bathroom was not cleaned when we checked in,
  status: SUBMITTED,
  priority: null,
  response: null,
  service_recovery: null,
  metadata: null
)
```

