# WebhookDelivery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deliveryId** | **string** |  | [readonly] [default to undefined]
**webhookId** | **string** |  | [default to undefined]
**event** | **string** |  | [default to undefined]
**payload** | **any** | Event payload | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**httpStatus** | **number** | HTTP response status code | [optional] [default to undefined]
**responseBody** | **string** |  | [optional] [default to undefined]
**attempts** | **number** | Number of delivery attempts | [optional] [default to undefined]
**deliveredAt** | **string** |  | [optional] [readonly] [default to undefined]
**nextRetryAt** | **string** |  | [optional] [default to undefined]
**errorMessage** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { WebhookDelivery } from '@stayos/api-client';

const instance: WebhookDelivery = {
    deliveryId,
    webhookId,
    event,
    payload,
    status,
    httpStatus,
    responseBody,
    attempts,
    deliveredAt,
    nextRetryAt,
    errorMessage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
