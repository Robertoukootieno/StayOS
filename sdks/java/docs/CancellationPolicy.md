

# CancellationPolicy


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**refundability** | [**RefundabilityEnum**](#RefundabilityEnum) |  |  |
|**freeCancellationHours** | **Integer** | Hours before check-in for free cancellation |  [optional] |
|**penaltySchedule** | [**List&lt;CancellationPolicyAllOfPenaltySchedule&gt;**](CancellationPolicyAllOfPenaltySchedule.md) |  |  [optional] |



## Enum: RefundabilityEnum

| Name | Value |
|---- | -----|
| FULLY_REFUNDABLE | &quot;FULLY_REFUNDABLE&quot; |
| PARTIALLY_REFUNDABLE | &quot;PARTIALLY_REFUNDABLE&quot; |
| NON_REFUNDABLE | &quot;NON_REFUNDABLE&quot; |



