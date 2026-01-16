

# AvailabilitySlot


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**date** | **LocalDate** |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**restrictions** | [**AvailabilitySlotAllOfRestrictions**](AvailabilitySlotAllOfRestrictions.md) |  |  [optional] |
|**allocations** | [**List&lt;AvailabilitySlotAllOfAllocations&gt;**](AvailabilitySlotAllOfAllocations.md) | Channel-specific allocations |  [optional] |
|**rate** | [**Model0**](Model0.md) | Rate for this date (if applicable) |  [optional] |
|**notes** | **String** | Internal notes for this date |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| AVAILABLE | &quot;AVAILABLE&quot; |
| RESERVED | &quot;RESERVED&quot; |
| BLOCKED | &quot;BLOCKED&quot; |
| SOLD_OUT | &quot;SOLD_OUT&quot; |



