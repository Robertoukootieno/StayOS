

# HousekeepingTask


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**taskId** | **UUID** |  |  [readonly] |
|**propertyId** | **UUID** |  |  |
|**inventoryUnitId** | **UUID** | Room/unit to clean |  |
|**taskType** | [**TaskTypeEnum**](#TaskTypeEnum) |  |  |
|**priority** | [**PriorityEnum**](#PriorityEnum) |  |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**assignedTo** | **UUID** | Staff member ID |  [optional] |
|**scheduledFor** | **OffsetDateTime** |  |  [optional] |
|**startedAt** | **OffsetDateTime** |  |  [optional] |
|**completedAt** | **OffsetDateTime** |  |  [optional] |
|**verifiedAt** | **OffsetDateTime** |  |  [optional] |
|**verifiedBy** | **UUID** |  |  [optional] |
|**notes** | **String** |  |  [optional] |
|**issues** | **List&lt;String&gt;** | Issues found during cleaning |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: TaskTypeEnum

| Name | Value |
|---- | -----|
| CHECKOUT_CLEAN | &quot;CHECKOUT_CLEAN&quot; |
| STAY_OVER | &quot;STAY_OVER&quot; |
| DEEP_CLEAN | &quot;DEEP_CLEAN&quot; |
| TURNDOWN | &quot;TURNDOWN&quot; |
| INSPECTION | &quot;INSPECTION&quot; |



## Enum: PriorityEnum

| Name | Value |
|---- | -----|
| LOW | &quot;LOW&quot; |
| NORMAL | &quot;NORMAL&quot; |
| HIGH | &quot;HIGH&quot; |
| URGENT | &quot;URGENT&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| ASSIGNED | &quot;ASSIGNED&quot; |
| IN_PROGRESS | &quot;IN_PROGRESS&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| VERIFIED | &quot;VERIFIED&quot; |
| FAILED | &quot;FAILED&quot; |



