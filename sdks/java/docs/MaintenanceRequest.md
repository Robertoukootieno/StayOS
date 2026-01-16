

# MaintenanceRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**requestId** | **UUID** |  |  [readonly] |
|**propertyId** | **UUID** |  |  |
|**inventoryUnitId** | **UUID** | Specific room/unit (if applicable) |  [optional] |
|**category** | [**CategoryEnum**](#CategoryEnum) |  |  |
|**priority** | [**PriorityEnum**](#PriorityEnum) |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**title** | **String** |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**reportedBy** | **UUID** |  |  [optional] |
|**assignedTo** | **UUID** | Technician ID |  [optional] |
|**scheduledFor** | **OffsetDateTime** |  |  [optional] |
|**completedAt** | **OffsetDateTime** |  |  [optional] |
|**verifiedAt** | **OffsetDateTime** |  |  [optional] |
|**estimatedCost** | [**Model0**](Model0.md) |  |  [optional] |
|**actualCost** | [**Model0**](Model0.md) |  |  [optional] |
|**workLog** | [**List&lt;MaintenanceRequestAllOfWorkLog&gt;**](MaintenanceRequestAllOfWorkLog.md) |  |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: CategoryEnum

| Name | Value |
|---- | -----|
| PLUMBING | &quot;PLUMBING&quot; |
| ELECTRICAL | &quot;ELECTRICAL&quot; |
| HVAC | &quot;HVAC&quot; |
| APPLIANCE | &quot;APPLIANCE&quot; |
| STRUCTURAL | &quot;STRUCTURAL&quot; |
| SAFETY | &quot;SAFETY&quot; |
| OTHER | &quot;OTHER&quot; |



## Enum: PriorityEnum

| Name | Value |
|---- | -----|
| LOW | &quot;LOW&quot; |
| MEDIUM | &quot;MEDIUM&quot; |
| HIGH | &quot;HIGH&quot; |
| EMERGENCY | &quot;EMERGENCY&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| SUBMITTED | &quot;SUBMITTED&quot; |
| ASSIGNED | &quot;ASSIGNED&quot; |
| IN_PROGRESS | &quot;IN_PROGRESS&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| VERIFIED | &quot;VERIFIED&quot; |
| CANCELLED | &quot;CANCELLED&quot; |



