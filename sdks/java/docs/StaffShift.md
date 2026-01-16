

# StaffShift


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**shiftId** | **UUID** |  |  [readonly] |
|**staffId** | **UUID** |  |  |
|**propertyId** | **UUID** |  |  |
|**shiftDate** | **LocalDate** |  |  |
|**startTime** | **String** |  |  |
|**endTime** | **String** |  |  |
|**role** | [**RoleEnum**](#RoleEnum) |  |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) |  |  [optional] |
|**clockInTime** | **OffsetDateTime** |  |  [optional] |
|**clockOutTime** | **OffsetDateTime** |  |  [optional] |
|**breaks** | [**List&lt;StaffShiftAllOfBreaks&gt;**](StaffShiftAllOfBreaks.md) |  |  [optional] |



## Enum: RoleEnum

| Name | Value |
|---- | -----|
| FRONT_DESK | &quot;FRONT_DESK&quot; |
| HOUSEKEEPING | &quot;HOUSEKEEPING&quot; |
| MAINTENANCE | &quot;MAINTENANCE&quot; |
| CONCIERGE | &quot;CONCIERGE&quot; |
| MANAGER | &quot;MANAGER&quot; |
| SECURITY | &quot;SECURITY&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| SCHEDULED | &quot;SCHEDULED&quot; |
| CLOCKED_IN | &quot;CLOCKED_IN&quot; |
| ON_BREAK | &quot;ON_BREAK&quot; |
| CLOCKED_OUT | &quot;CLOCKED_OUT&quot; |
| ABSENT | &quot;ABSENT&quot; |



