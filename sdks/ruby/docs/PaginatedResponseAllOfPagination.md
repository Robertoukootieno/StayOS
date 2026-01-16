# OpenapiClient::PaginatedResponseAllOfPagination

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_size** | **Integer** | Number of items in current page |  |
| **cursor** | **String** | Cursor for next page (null if no more pages) | [optional] |
| **has_more** | **Boolean** | Whether more pages are available |  |
| **total_count** | **Integer** | Total number of items (optional, expensive to compute) | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PaginatedResponseAllOfPagination.new(
  page_size: 20,
  cursor: eyJpZCI6MTIzNDU2fQ&#x3D;&#x3D;,
  has_more: true,
  total_count: 150
)
```

