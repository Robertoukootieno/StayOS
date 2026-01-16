# Webhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhookId** | **string** |  | [readonly] [default to undefined]
**url** | **string** | Webhook endpoint URL | [default to undefined]
**events** | **Array&lt;string&gt;** | Events to subscribe to | [default to undefined]
**status** | **string** |  | [default to undefined]
**secret** | **string** | Secret for signature verification | [optional] [default to undefined]
**headers** | **{ [key: string]: string; }** | Custom headers to include in webhook requests | [optional] [default to undefined]
**retryPolicy** | [**WebhookAllOfRetryPolicy**](WebhookAllOfRetryPolicy.md) |  | [optional] [default to undefined]
**lastDeliveryAt** | **string** |  | [optional] [readonly] [default to undefined]
**lastDeliveryStatus** | **string** |  | [optional] [readonly] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Webhook } from '@stayos/api-client';

const instance: Webhook = {
    webhookId,
    url,
    events,
    status,
    secret,
    headers,
    retryPolicy,
    lastDeliveryAt,
    lastDeliveryStatus,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
