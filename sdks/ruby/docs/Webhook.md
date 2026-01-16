# OpenapiClient::Webhook

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_id** | **String** |  | [readonly] |
| **url** | **String** | Webhook endpoint URL |  |
| **events** | **Array&lt;String&gt;** | Events to subscribe to |  |
| **status** | **String** |  |  |
| **secret** | **String** | Secret for signature verification | [optional] |
| **headers** | **Hash&lt;String, String&gt;** | Custom headers to include in webhook requests | [optional] |
| **retry_policy** | [**WebhookAllOfRetryPolicy**](WebhookAllOfRetryPolicy.md) |  | [optional] |
| **last_delivery_at** | **Time** |  | [optional][readonly] |
| **last_delivery_status** | **String** |  | [optional][readonly] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Webhook.new(
  webhook_id: null,
  url: https://example.com/webhooks/stayos,
  events: null,
  status: ACTIVE,
  secret: null,
  headers: null,
  retry_policy: null,
  last_delivery_at: null,
  last_delivery_status: null,
  metadata: null
)
```

