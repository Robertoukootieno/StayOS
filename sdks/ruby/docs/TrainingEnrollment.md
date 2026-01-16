# OpenapiClient::TrainingEnrollment

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **enrollment_id** | **String** |  | [readonly] |
| **module_id** | **String** |  |  |
| **staff_id** | **String** |  |  |
| **status** | **String** |  |  |
| **enrolled_at** | **Time** |  | [optional][readonly] |
| **started_at** | **Time** |  | [optional] |
| **completed_at** | **Time** |  | [optional] |
| **expires_at** | **Time** |  | [optional] |
| **assessment_score** | **Integer** |  | [optional] |
| **attempts** | **Integer** | Number of assessment attempts | [optional] |
| **certificate_url** | **String** |  | [optional][readonly] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::TrainingEnrollment.new(
  enrollment_id: null,
  module_id: null,
  staff_id: null,
  status: ENROLLED,
  enrolled_at: null,
  started_at: null,
  completed_at: null,
  expires_at: null,
  assessment_score: null,
  attempts: null,
  certificate_url: null
)
```

