# OpenapiClient::WebhookDelivery

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **delivery_id** | **String** |  | [readonly] |
| **webhook_id** | **String** |  |  |
| **event** | **String** |  |  |
| **payload** | **Object** | Event payload | [optional] |
| **status** | **String** |  |  |
| **http_status** | **Integer** | HTTP response status code | [optional] |
| **response_body** | **String** |  | [optional] |
| **attempts** | **Integer** | Number of delivery attempts | [optional] |
| **delivered_at** | **Time** |  | [optional][readonly] |
| **next_retry_at** | **Time** |  | [optional] |
| **error_message** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::WebhookDelivery.new(
  delivery_id: null,
  webhook_id: null,
  event: reservation.created,
  payload: null,
  status: SUCCESS,
  http_status: 200,
  response_body: null,
  attempts: null,
  delivered_at: null,
  next_retry_at: null,
  error_message: null
)
```

