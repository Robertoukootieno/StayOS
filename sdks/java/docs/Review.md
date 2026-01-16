

# Review


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**reviewId** | **UUID** |  |  [readonly] |
|**source** | [**SourceEnum**](#SourceEnum) |  |  |
|**externalId** | **String** | Review ID from external platform |  [optional] |
|**guestName** | **String** |  |  [optional] |
|**rating** | **Float** |  |  |
|**title** | **String** |  |  [optional] |
|**content** | **String** |  |  [optional] |
|**reviewDate** | **LocalDate** |  |  [optional] |
|**response** | [**ReviewAllOfResponse**](ReviewAllOfResponse.md) |  |  [optional] |



## Enum: SourceEnum

| Name | Value |
|---- | -----|
| GOOGLE | &quot;GOOGLE&quot; |
| TRIPADVISOR | &quot;TRIPADVISOR&quot; |
| BOOKING_COM | &quot;BOOKING_COM&quot; |
| EXPEDIA | &quot;EXPEDIA&quot; |
| AIRBNB | &quot;AIRBNB&quot; |
| OTHER | &quot;OTHER&quot; |



