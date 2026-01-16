# OpenapiClient::TrainingModule

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **module_id** | **String** |  | [readonly] |
| **title** | **String** |  |  |
| **description** | **String** |  | [optional] |
| **category** | **String** |  |  |
| **duration** | **Integer** | Duration in minutes |  |
| **content** | [**TrainingModuleAllOfContent**](TrainingModuleAllOfContent.md) |  | [optional] |
| **assessment_required** | **Boolean** |  | [optional][default to false] |
| **passing_score** | **Integer** | Minimum score to pass (percentage) | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::TrainingModule.new(
  module_id: null,
  title: Fire Safety Training,
  description: null,
  category: SAFETY,
  duration: 60,
  content: null,
  assessment_required: null,
  passing_score: null,
  metadata: null
)
```

