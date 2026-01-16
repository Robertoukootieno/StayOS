# ChannelDistribution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelId** | **string** |  | [default to undefined]
**channelName** | **string** |  | [optional] [readonly] [default to undefined]
**isEnabled** | **boolean** |  | [optional] [default to true]
**markup** | [**ChannelDistributionAllOfMarkup**](ChannelDistributionAllOfMarkup.md) |  | [optional] [default to undefined]
**commission** | [**ChannelDistributionAllOfCommission**](ChannelDistributionAllOfCommission.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChannelDistribution } from '@stayos/api-client';

const instance: ChannelDistribution = {
    channelId,
    channelName,
    isEnabled,
    markup,
    commission,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
