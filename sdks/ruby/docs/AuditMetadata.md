# OpenapiClient::AuditMetadata

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | Creation timestamp (ISO 8601) | [optional] |
| **created_by** | **String** | User ID who created the resource | [optional] |
| **updated_at** | **Time** | Last update timestamp | [optional] |
| **updated_by** | **String** | User ID who last updated the resource | [optional] |
| **version** | **Integer** | Version number for optimistic locking | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::AuditMetadata.new(
  created_at: 2025-12-18T10:30:00Z,
  created_by: null,
  updated_at: 2025-12-18T14:45:00Z,
  updated_by: null,
  version: 3
)
```

