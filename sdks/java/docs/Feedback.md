

# Feedback


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**feedbackId** | **UUID** |  |  [readonly] |
|**guestId** | **UUID** |  |  |
|**stayId** | **UUID** | Associated stay (if applicable) |  [optional] |
|**propertyId** | **UUID** |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**category** | [**CategoryEnum**](#CategoryEnum) |  |  [optional] |
|**rating** | **Integer** | Overall rating (1-5 stars) |  |
|**subject** | **String** |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**priority** | [**PriorityEnum**](#PriorityEnum) |  |  [optional] |
|**response** | [**FeedbackAllOfResponse**](FeedbackAllOfResponse.md) |  |  [optional] |
|**serviceRecovery** | [**FeedbackAllOfServiceRecovery**](FeedbackAllOfServiceRecovery.md) |  |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| COMPLAINT | &quot;COMPLAINT&quot; |
| COMPLIMENT | &quot;COMPLIMENT&quot; |
| SUGGESTION | &quot;SUGGESTION&quot; |
| GENERAL | &quot;GENERAL&quot; |



## Enum: CategoryEnum

| Name | Value |
|---- | -----|
| ROOM_CLEANLINESS | &quot;ROOM_CLEANLINESS&quot; |
| STAFF_SERVICE | &quot;STAFF_SERVICE&quot; |
| AMENITIES | &quot;AMENITIES&quot; |
| FOOD_BEVERAGE | &quot;FOOD_BEVERAGE&quot; |
| NOISE | &quot;NOISE&quot; |
| MAINTENANCE | &quot;MAINTENANCE&quot; |
| BILLING | &quot;BILLING&quot; |
| OTHER | &quot;OTHER&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| SUBMITTED | &quot;SUBMITTED&quot; |
| ACKNOWLEDGED | &quot;ACKNOWLEDGED&quot; |
| IN_PROGRESS | &quot;IN_PROGRESS&quot; |
| RESOLVED | &quot;RESOLVED&quot; |
| CLOSED | &quot;CLOSED&quot; |



## Enum: PriorityEnum

| Name | Value |
|---- | -----|
| LOW | &quot;LOW&quot; |
| MEDIUM | &quot;MEDIUM&quot; |
| HIGH | &quot;HIGH&quot; |
| URGENT | &quot;URGENT&quot; |



