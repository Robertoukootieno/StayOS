

# Channel


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**channelId** | **UUID** |  |  [readonly] |
|**propertyId** | **UUID** |  |  |
|**channelType** | [**ChannelTypeEnum**](#ChannelTypeEnum) |  |  |
|**channelName** | **String** |  |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**credentials** | [**ChannelAllOfCredentials**](ChannelAllOfCredentials.md) |  |  [optional] |
|**_configuration** | [**ChannelAllOfConfiguration**](ChannelAllOfConfiguration.md) |  |  [optional] |
|**lastSyncAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**syncStatus** | [**SyncStatusEnum**](#SyncStatusEnum) |  |  [optional] [readonly] |
|**errorMessage** | **String** |  |  [optional] [readonly] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |
|**links** | [**ChannelAllOfLinks**](ChannelAllOfLinks.md) |  |  [optional] |



## Enum: ChannelTypeEnum

| Name | Value |
|---- | -----|
| BOOKING_COM | &quot;BOOKING_COM&quot; |
| EXPEDIA | &quot;EXPEDIA&quot; |
| AIRBNB | &quot;AIRBNB&quot; |
| AGODA | &quot;AGODA&quot; |
| HOTELS_COM | &quot;HOTELS_COM&quot; |
| DIRECT_BOOKING | &quot;DIRECT_BOOKING&quot; |
| GDS | &quot;GDS&quot; |
| OTHER | &quot;OTHER&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| INACTIVE | &quot;INACTIVE&quot; |
| SUSPENDED | &quot;SUSPENDED&quot; |
| ERROR | &quot;ERROR&quot; |



## Enum: SyncStatusEnum

| Name | Value |
|---- | -----|
| SYNCED | &quot;SYNCED&quot; |
| SYNCING | &quot;SYNCING&quot; |
| ERROR | &quot;ERROR&quot; |
| NEVER_SYNCED | &quot;NEVER_SYNCED&quot; |



