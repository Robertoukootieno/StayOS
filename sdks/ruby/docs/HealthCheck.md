# OpenapiClient::HealthCheck

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** |  |  |
| **timestamp** | **Time** |  | [optional][readonly] |
| **version** | **String** |  | [optional] |
| **services** | [**HealthCheckAllOfServices**](HealthCheckAllOfServices.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::HealthCheck.new(
  status: HEALTHY,
  timestamp: null,
  version: 2.0.0,
  services: null
)
```

