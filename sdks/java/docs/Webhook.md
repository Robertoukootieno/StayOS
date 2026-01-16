

# Webhook


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**webhookId** | **UUID** |  |  [readonly] |
|**url** | **URI** | Webhook endpoint URL |  |
|**events** | [**List&lt;EventsEnum&gt;**](#List&lt;EventsEnum&gt;) | Events to subscribe to |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**secret** | **String** | Secret for signature verification |  [optional] |
|**headers** | **Map&lt;String, String&gt;** | Custom headers to include in webhook requests |  [optional] |
|**retryPolicy** | [**WebhookAllOfRetryPolicy**](WebhookAllOfRetryPolicy.md) |  |  [optional] |
|**lastDeliveryAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**lastDeliveryStatus** | [**LastDeliveryStatusEnum**](#LastDeliveryStatusEnum) |  |  [optional] [readonly] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: List&lt;EventsEnum&gt;

| Name | Value |
|---- | -----|
| RESERVATION_CREATED | &quot;reservation.created&quot; |
| RESERVATION_UPDATED | &quot;reservation.updated&quot; |
| RESERVATION_CANCELLED | &quot;reservation.cancelled&quot; |
| GUEST_CREATED | &quot;guest.created&quot; |
| GUEST_UPDATED | &quot;guest.updated&quot; |
| STAY_CHECKED_IN | &quot;stay.checked_in&quot; |
| STAY_CHECKED_OUT | &quot;stay.checked_out&quot; |
| PAYMENT_COMPLETED | &quot;payment.completed&quot; |
| PAYMENT_FAILED | &quot;payment.failed&quot; |
| FOLIO_CLOSED | &quot;folio.closed&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| INACTIVE | &quot;INACTIVE&quot; |
| SUSPENDED | &quot;SUSPENDED&quot; |



## Enum: LastDeliveryStatusEnum

| Name | Value |
|---- | -----|
| SUCCESS | &quot;SUCCESS&quot; |
| FAILURE | &quot;FAILURE&quot; |



