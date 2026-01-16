# RateStrategy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rateStrategyId** | **string** |  | [optional] [readonly] [default to undefined]
**propertyId** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**strategyType** | **string** |  | [default to undefined]
**isActive** | **boolean** |  | [optional] [default to true]
**applicability** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**pricingModel** | [**Model0**](Model0.md) |  | [default to undefined]
**cancellationTerms** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**channelDistribution** | [**Array&lt;Model0&gt;**](Model0.md) |  | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**links** | [**RateStrategyAllOfLinks**](RateStrategyAllOfLinks.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RateStrategy } from '@stayos/api-client';

const instance: RateStrategy = {
    rateStrategyId,
    propertyId,
    name,
    description,
    strategyType,
    isActive,
    applicability,
    pricingModel,
    cancellationTerms,
    channelDistribution,
    metadata,
    links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
