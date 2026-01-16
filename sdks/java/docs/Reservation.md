

# Reservation


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**reservationId** | **UUID** |  |  [readonly] |
|**propertyId** | **UUID** |  |  |
|**guestId** | **UUID** |  |  |
|**checkInDate** | **LocalDate** |  |  |
|**checkOutDate** | **LocalDate** |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**guestCount** | [**ReservationAllOfGuestCount**](ReservationAllOfGuestCount.md) |  |  [optional] |
|**specialRequests** | **String** |  |  [optional] |
|**totalAmount** | [**Model0**](Model0.md) |  |  [optional] |
|**cancellationPolicy** | [**Model0**](Model0.md) |  |  [optional] |
|**createdAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**updatedAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**version** | **Integer** | Version for optimistic locking |  [optional] [readonly] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| CONFIRMED | &quot;CONFIRMED&quot; |
| CHECKED_IN | &quot;CHECKED_IN&quot; |
| CHECKED_OUT | &quot;CHECKED_OUT&quot; |
| CANCELLED | &quot;CANCELLED&quot; |
| NO_SHOW | &quot;NO_SHOW&quot; |



