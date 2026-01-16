# OpenapiClient::SearchAvailability200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **search_id** | **String** | Unique search identifier for tracking | [optional] |
| **search_criteria** | **Object** | Echo of search criteria | [optional] |
| **results** | [**Array&lt;SearchAvailability200ResponseResultsInner&gt;**](SearchAvailability200ResponseResultsInner.md) |  | [optional] |
| **metadata** | [**SearchAvailability200ResponseMetadata**](SearchAvailability200ResponseMetadata.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SearchAvailability200Response.new(
  search_id: null,
  search_criteria: null,
  results: null,
  metadata: null
)
```

