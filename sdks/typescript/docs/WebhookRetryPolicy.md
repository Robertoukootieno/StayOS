# WebhookRetryPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxRetries** | **number** |  | [optional] [default to 3]
**retryDelay** | **number** | Delay between retries in seconds | [optional] [default to 60]

## Example

```typescript
import { WebhookRetryPolicy } from '@stayos/api-client';

const instance: WebhookRetryPolicy = {
    maxRetries,
    retryDelay,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
