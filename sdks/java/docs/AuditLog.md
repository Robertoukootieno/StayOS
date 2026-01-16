

# AuditLog


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**logId** | **UUID** |  |  [readonly] |
|**timestamp** | **OffsetDateTime** |  |  [readonly] |
|**userId** | **UUID** | User who performed the action |  [optional] |
|**action** | [**ActionEnum**](#ActionEnum) |  |  |
|**resource** | **String** | Resource type (e.g., reservation, guest, property) |  |
|**resourceId** | **UUID** |  |  [optional] |
|**changes** | **Object** | JSON object showing what changed |  [optional] |
|**ipAddress** | **String** |  |  [optional] |
|**userAgent** | **String** |  |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) |  |  [optional] |
|**errorMessage** | **String** |  |  [optional] |



## Enum: ActionEnum

| Name | Value |
|---- | -----|
| CREATE | &quot;CREATE&quot; |
| READ | &quot;READ&quot; |
| UPDATE | &quot;UPDATE&quot; |
| DELETE | &quot;DELETE&quot; |
| LOGIN | &quot;LOGIN&quot; |
| LOGOUT | &quot;LOGOUT&quot; |
| EXPORT | &quot;EXPORT&quot; |
| IMPORT | &quot;IMPORT&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| SUCCESS | &quot;SUCCESS&quot; |
| FAILURE | &quot;FAILURE&quot; |



