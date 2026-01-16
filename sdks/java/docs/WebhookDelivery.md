

# WebhookDelivery


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**deliveryId** | **UUID** |  |  [readonly] |
|**webhookId** | **UUID** |  |  |
|**event** | **String** |  |  |
|**payload** | **Object** | Event payload |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**httpStatus** | **Integer** | HTTP response status code |  [optional] |
|**responseBody** | **String** |  |  [optional] |
|**attempts** | **Integer** | Number of delivery attempts |  [optional] |
|**deliveredAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**nextRetryAt** | **OffsetDateTime** |  |  [optional] |
|**errorMessage** | **String** |  |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| SUCCESS | &quot;SUCCESS&quot; |
| FAILURE | &quot;FAILURE&quot; |
| RETRYING | &quot;RETRYING&quot; |



