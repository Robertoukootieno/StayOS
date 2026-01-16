# OpenapiClient::ProblemDetails

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** | URI reference identifying the problem type |  |
| **title** | **String** | Short, human-readable summary |  |
| **status** | **Integer** | HTTP status code |  |
| **detail** | **String** | Human-readable explanation | [optional] |
| **instance** | **String** | URI reference identifying the specific occurrence | [optional] |
| **trace_id** | **String** | Unique identifier for tracing | [optional] |
| **errors** | [**Array&lt;ProblemDetailsAllOfErrors&gt;**](ProblemDetailsAllOfErrors.md) | Detailed validation errors | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ProblemDetails.new(
  type: https://api.stayos.com/errors/validation-error,
  title: Validation Failed,
  status: 400,
  detail: One or more validation errors occurred,
  instance: https://api.stayos.com/v1/reservations,
  trace_id: null,
  errors: null
)
```

