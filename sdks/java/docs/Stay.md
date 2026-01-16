

# Stay


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**stayId** | **UUID** |  |  [readonly] |
|**reservationId** | **UUID** | Associated reservation |  |
|**propertyId** | **UUID** |  |  |
|**inventoryUnitId** | **UUID** | Assigned room/unit |  |
|**guestId** | **UUID** | Primary guest |  |
|**additionalGuests** | **List&lt;UUID&gt;** | Additional guest IDs |  [optional] |
|**checkInDate** | **OffsetDateTime** | Actual check-in timestamp |  |
|**expectedCheckOutDate** | **LocalDate** |  |  |
|**actualCheckOutDate** | **OffsetDateTime** | Actual check-out timestamp |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**guestCount** | [**ReservationAllOfGuestCount**](ReservationAllOfGuestCount.md) |  |  [optional] |
|**keyCards** | [**List&lt;Model0&gt;**](Model0.md) |  |  [optional] |
|**incidentalCharges** | [**List&lt;Model0&gt;**](Model0.md) |  |  [optional] |
|**specialRequests** | **String** |  |  [optional] |
|**notes** | **String** | Internal staff notes |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |
|**links** | [**StayAllOfLinks**](StayAllOfLinks.md) |  |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| CHECKED_IN | &quot;CHECKED_IN&quot; |
| IN_HOUSE | &quot;IN_HOUSE&quot; |
| CHECKED_OUT | &quot;CHECKED_OUT&quot; |
| EXTENDED | &quot;EXTENDED&quot; |



