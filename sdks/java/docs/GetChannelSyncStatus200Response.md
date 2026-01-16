

# GetChannelSyncStatus200Response


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**lastSync** | **OffsetDateTime** |  |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) |  |  [optional] |
|**errors** | **List&lt;String&gt;** |  |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| SYNCED | &quot;SYNCED&quot; |
| SYNCING | &quot;SYNCING&quot; |
| ERROR | &quot;ERROR&quot; |
| NEVER_SYNCED | &quot;NEVER_SYNCED&quot; |



