

# GDPRRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**requestId** | **UUID** |  |  [readonly] |
|**guestId** | **UUID** |  |  |
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  [optional] |
|**requestedAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**completedAt** | **OffsetDateTime** |  |  [optional] |
|**dataPackageUrl** | **URI** | URL to download exported data |  [optional] |
|**notes** | **String** |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| DATA_EXPORT | &quot;DATA_EXPORT&quot; |
| DATA_DELETION | &quot;DATA_DELETION&quot; |
| DATA_CORRECTION | &quot;DATA_CORRECTION&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| SUBMITTED | &quot;SUBMITTED&quot; |
| PROCESSING | &quot;PROCESSING&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| REJECTED | &quot;REJECTED&quot; |



