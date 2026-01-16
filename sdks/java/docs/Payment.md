

# Payment


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**paymentId** | **UUID** |  |  [readonly] |
|**folioId** | **UUID** |  |  [optional] |
|**amount** | [**Model0**](Model0.md) |  |  |
|**method** | [**MethodEnum**](#MethodEnum) |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**transactionId** | **String** | External payment processor transaction ID |  [optional] |
|**cardDetails** | [**PaymentAllOfCardDetails**](PaymentAllOfCardDetails.md) |  |  [optional] |
|**processedAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**refunds** | [**List&lt;PaymentAllOfRefunds&gt;**](PaymentAllOfRefunds.md) |  |  [optional] |
|**receiptUrl** | **URI** |  |  [optional] [readonly] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: MethodEnum

| Name | Value |
|---- | -----|
| CREDIT_CARD | &quot;CREDIT_CARD&quot; |
| DEBIT_CARD | &quot;DEBIT_CARD&quot; |
| CASH | &quot;CASH&quot; |
| BANK_TRANSFER | &quot;BANK_TRANSFER&quot; |
| DIGITAL_WALLET | &quot;DIGITAL_WALLET&quot; |
| CHECK | &quot;CHECK&quot; |
| VOUCHER | &quot;VOUCHER&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| AUTHORIZED | &quot;AUTHORIZED&quot; |
| CAPTURED | &quot;CAPTURED&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| FAILED | &quot;FAILED&quot; |
| REFUNDED | &quot;REFUNDED&quot; |
| PARTIALLY_REFUNDED | &quot;PARTIALLY_REFUNDED&quot; |



