# OpenapiClient::SystemMetrics

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **timestamp** | **Time** |  | [readonly] |
| **requests** | [**SystemMetricsAllOfRequests**](SystemMetricsAllOfRequests.md) |  | [optional] |
| **database** | [**SystemMetricsAllOfDatabase**](SystemMetricsAllOfDatabase.md) |  | [optional] |
| **cache** | [**SystemMetricsAllOfCache**](SystemMetricsAllOfCache.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SystemMetrics.new(
  timestamp: null,
  requests: null,
  database: null,
  cache: null
)
```

