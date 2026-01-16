

# RateStrategy


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**rateStrategyId** | **UUID** |  |  [optional] [readonly] |
|**propertyId** | **UUID** |  |  |
|**name** | **String** |  |  |
|**description** | **String** |  |  [optional] |
|**strategyType** | [**StrategyTypeEnum**](#StrategyTypeEnum) |  |  |
|**isActive** | **Boolean** |  |  [optional] |
|**applicability** | [**Model0**](Model0.md) |  |  [optional] |
|**pricingModel** | [**Model0**](Model0.md) |  |  |
|**cancellationTerms** | [**Model0**](Model0.md) |  |  [optional] |
|**channelDistribution** | [**List&lt;Model0&gt;**](Model0.md) |  |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |
|**links** | [**RateStrategyAllOfLinks**](RateStrategyAllOfLinks.md) |  |  [optional] |



## Enum: StrategyTypeEnum

| Name | Value |
|---- | -----|
| STANDARD | &quot;STANDARD&quot; |
| DYNAMIC | &quot;DYNAMIC&quot; |
| PROMOTIONAL | &quot;PROMOTIONAL&quot; |
| CORPORATE | &quot;CORPORATE&quot; |
| GROUP | &quot;GROUP&quot; |
| PACKAGE | &quot;PACKAGE&quot; |



