

# ServiceRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**requestId** | **UUID** |  |  [readonly] |
|**propertyId** | **UUID** |  |  |
|**stayId** | **UUID** |  |  [optional] |
|**guestId** | **UUID** |  |  [optional] |
|**inventoryUnitId** | **UUID** |  |  [optional] |
|**category** | [**CategoryEnum**](#CategoryEnum) |  |  |
|**priority** | [**PriorityEnum**](#PriorityEnum) |  |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**title** | **String** |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**requestedBy** | [**RequestedByEnum**](#RequestedByEnum) |  |  [optional] |
|**assignedTo** | **UUID** |  |  [optional] |
|**acknowledgedAt** | **OffsetDateTime** |  |  [optional] |
|**completedAt** | **OffsetDateTime** |  |  [optional] |
|**guestFeedback** | [**ServiceRequestAllOfGuestFeedback**](ServiceRequestAllOfGuestFeedback.md) |  |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: CategoryEnum

| Name | Value |
|---- | -----|
| HOUSEKEEPING | &quot;HOUSEKEEPING&quot; |
| ROOM_SERVICE | &quot;ROOM_SERVICE&quot; |
| CONCIERGE | &quot;CONCIERGE&quot; |
| MAINTENANCE | &quot;MAINTENANCE&quot; |
| AMENITY | &quot;AMENITY&quot; |
| TRANSPORTATION | &quot;TRANSPORTATION&quot; |
| OTHER | &quot;OTHER&quot; |



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
| SUBMITTED | &quot;SUBMITTED&quot; |
| ACKNOWLEDGED | &quot;ACKNOWLEDGED&quot; |
| ASSIGNED | &quot;ASSIGNED&quot; |
| IN_PROGRESS | &quot;IN_PROGRESS&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| CANCELLED | &quot;CANCELLED&quot; |



## Enum: RequestedByEnum

| Name | Value |
|---- | -----|
| GUEST | &quot;GUEST&quot; |
| STAFF | &quot;STAFF&quot; |



