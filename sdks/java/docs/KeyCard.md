

# KeyCard


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**cardId** | **UUID** |  |  [readonly] |
|**cardNumber** | **String** | Physical card number |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**issuedAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**expiresAt** | **OffsetDateTime** | Card expiration |  [optional] |
|**accessLevel** | [**AccessLevelEnum**](#AccessLevelEnum) |  |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| DEACTIVATED | &quot;DEACTIVATED&quot; |
| LOST | &quot;LOST&quot; |
| EXPIRED | &quot;EXPIRED&quot; |



## Enum: AccessLevelEnum

| Name | Value |
|---- | -----|
| ROOM_ONLY | &quot;ROOM_ONLY&quot; |
| ROOM_AND_AMENITIES | &quot;ROOM_AND_AMENITIES&quot; |
| FULL_ACCESS | &quot;FULL_ACCESS&quot; |



