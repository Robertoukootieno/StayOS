

# GuestProfile


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**guestId** | **UUID** |  |  [readonly] |
|**firstName** | **String** |  |  |
|**lastName** | **String** |  |  |
|**email** | **String** |  |  |
|**phone** | **String** |  |  [optional] |
|**dateOfBirth** | **LocalDate** |  |  [optional] |
|**nationality** | **String** |  |  [optional] |
|**address** | [**GuestProfileAllOfAddress**](GuestProfileAllOfAddress.md) |  |  [optional] |
|**loyaltyTier** | [**LoyaltyTierEnum**](#LoyaltyTierEnum) |  |  [optional] |
|**preferences** | **Object** | Guest preferences |  [optional] |
|**createdAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**updatedAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**version** | **Integer** | Version for optimistic locking |  [optional] [readonly] |



## Enum: LoyaltyTierEnum

| Name | Value |
|---- | -----|
| NONE | &quot;NONE&quot; |
| SILVER | &quot;SILVER&quot; |
| GOLD | &quot;GOLD&quot; |
| PLATINUM | &quot;PLATINUM&quot; |



