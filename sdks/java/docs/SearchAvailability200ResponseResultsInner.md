

# SearchAvailability200ResponseResultsInner


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**inventoryUnitId** | **UUID** |  |  [optional] |
|**unitType** | [**UnitType**](UnitType.md) |  |  [optional] |
|**property** | [**Property**](Property.md) |  |  [optional] |
|**rateStrategy** | [**RateStrategy**](RateStrategy.md) |  |  [optional] |
|**totalPrice** | [**Money**](Money.md) |  |  [optional] |
|**priceBreakdown** | [**List&lt;SearchAvailability200ResponseResultsInnerPriceBreakdownInner&gt;**](SearchAvailability200ResponseResultsInnerPriceBreakdownInner.md) |  |  [optional] |
|**availability** | [**AvailabilityEnum**](#AvailabilityEnum) |  |  [optional] |
|**cancellationPolicy** | [**CancellationPolicy**](CancellationPolicy.md) |  |  [optional] |



## Enum: AvailabilityEnum

| Name | Value |
|---- | -----|
| AVAILABLE | &quot;AVAILABLE&quot; |
| LIMITED | &quot;LIMITED&quot; |
| LAST_ROOM | &quot;LAST_ROOM&quot; |



