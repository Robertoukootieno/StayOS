# OpenapiClient::AuditLog

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **log_id** | **String** |  | [readonly] |
| **timestamp** | **Time** |  | [readonly] |
| **user_id** | **String** | User who performed the action | [optional] |
| **action** | **String** |  |  |
| **resource** | **String** | Resource type (e.g., reservation, guest, property) |  |
| **resource_id** | **String** |  | [optional] |
| **changes** | **Object** | JSON object showing what changed | [optional] |
| **ip_address** | **String** |  | [optional] |
| **user_agent** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **error_message** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::AuditLog.new(
  log_id: null,
  timestamp: null,
  user_id: null,
  action: UPDATE,
  resource: reservation,
  resource_id: null,
  changes: null,
  ip_address: 192.168.1.1,
  user_agent: null,
  status: SUCCESS,
  error_message: null
)
```

