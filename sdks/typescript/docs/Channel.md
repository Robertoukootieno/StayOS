# Channel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelId** | **string** |  | [readonly] [default to undefined]
**propertyId** | **string** |  | [default to undefined]
**channelType** | **string** |  | [default to undefined]
**channelName** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**credentials** | [**ChannelAllOfCredentials**](ChannelAllOfCredentials.md) |  | [optional] [default to undefined]
**configuration** | [**ChannelAllOfConfiguration**](ChannelAllOfConfiguration.md) |  | [optional] [default to undefined]
**lastSyncAt** | **string** |  | [optional] [readonly] [default to undefined]
**syncStatus** | **string** |  | [optional] [readonly] [default to undefined]
**errorMessage** | **string** |  | [optional] [readonly] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**links** | [**ChannelAllOfLinks**](ChannelAllOfLinks.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Channel } from '@stayos/api-client';

const instance: Channel = {
    channelId,
    propertyId,
    channelType,
    channelName,
    status,
    credentials,
    configuration,
    lastSyncAt,
    syncStatus,
    errorMessage,
    metadata,
    links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
