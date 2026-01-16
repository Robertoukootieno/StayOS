# OpenapiClient::WebhookAllOfRetryPolicy

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **max_retries** | **Integer** |  | [optional][default to 3] |
| **retry_delay** | **Integer** | Delay between retries in seconds | [optional][default to 60] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::WebhookAllOfRetryPolicy.new(
  max_retries: null,
  retry_delay: null
)
```

