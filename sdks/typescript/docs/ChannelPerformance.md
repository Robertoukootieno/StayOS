# ChannelPerformance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelId** | **string** |  | [default to undefined]
**startDate** | **string** |  | [default to undefined]
**endDate** | **string** |  | [default to undefined]
**bookings** | **number** | Total bookings | [optional] [default to undefined]
**revenue** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**commission** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**netRevenue** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**averageBookingValue** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**cancellationRate** | **number** | Percentage | [optional] [default to undefined]
**conversionRate** | **number** | Percentage | [optional] [default to undefined]

## Example

```typescript
import { ChannelPerformance } from '@stayos/api-client';

const instance: ChannelPerformance = {
    channelId,
    startDate,
    endDate,
    bookings,
    revenue,
    commission,
    netRevenue,
    averageBookingValue,
    cancellationRate,
    conversionRate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
