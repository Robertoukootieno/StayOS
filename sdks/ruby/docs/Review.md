# OpenapiClient::Review

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **review_id** | **String** |  | [readonly] |
| **source** | **String** |  |  |
| **external_id** | **String** | Review ID from external platform | [optional] |
| **guest_name** | **String** |  | [optional] |
| **rating** | **Float** |  |  |
| **title** | **String** |  | [optional] |
| **content** | **String** |  | [optional] |
| **review_date** | **Date** |  | [optional] |
| **response** | [**ReviewAllOfResponse**](ReviewAllOfResponse.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Review.new(
  review_id: null,
  source: GOOGLE,
  external_id: null,
  guest_name: John D.,
  rating: 4.5,
  title: null,
  content: null,
  review_date: null,
  response: null
)
```

