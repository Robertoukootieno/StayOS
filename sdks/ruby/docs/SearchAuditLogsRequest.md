# OpenapiClient::SearchAuditLogsRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **entity_type** | **String** |  | [optional] |
| **entity_id** | **String** |  | [optional] |
| **actions** | **Array&lt;String&gt;** |  | [optional] |
| **user_ids** | **Array&lt;String&gt;** |  | [optional] |
| **start_date** | **Time** |  | [optional] |
| **end_date** | **Time** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SearchAuditLogsRequest.new(
  entity_type: null,
  entity_id: null,
  actions: null,
  user_ids: null,
  start_date: null,
  end_date: null
)
```

