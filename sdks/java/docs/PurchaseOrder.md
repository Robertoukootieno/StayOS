

# PurchaseOrder


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**poId** | **UUID** |  |  [readonly] |
|**poNumber** | **String** | Human-readable PO number |  [optional] [readonly] |
|**propertyId** | **UUID** |  |  |
|**supplierId** | **UUID** |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**items** | [**List&lt;PurchaseOrderAllOfItems&gt;**](PurchaseOrderAllOfItems.md) |  |  [optional] |
|**subtotal** | [**PurchaseOrderAllOfSubtotal**](PurchaseOrderAllOfSubtotal.md) |  |  [optional] |
|**tax** | [**PurchaseOrderAllOfTax**](PurchaseOrderAllOfTax.md) |  |  [optional] |
|**total** | [**PurchaseOrderAllOfTotal**](PurchaseOrderAllOfTotal.md) |  |  [optional] |
|**deliveryAddress** | [**Model0**](Model0.md) |  |  [optional] |
|**requestedDeliveryDate** | **LocalDate** |  |  [optional] |
|**actualDeliveryDate** | **LocalDate** |  |  [optional] |
|**approvedBy** | **UUID** |  |  [optional] |
|**approvedAt** | **OffsetDateTime** |  |  [optional] |
|**submittedAt** | **OffsetDateTime** |  |  [optional] |
|**notes** | **String** |  |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| DRAFT | &quot;DRAFT&quot; |
| PENDING_APPROVAL | &quot;PENDING_APPROVAL&quot; |
| APPROVED | &quot;APPROVED&quot; |
| SUBMITTED | &quot;SUBMITTED&quot; |
| PARTIALLY_RECEIVED | &quot;PARTIALLY_RECEIVED&quot; |
| RECEIVED | &quot;RECEIVED&quot; |
| INVOICED | &quot;INVOICED&quot; |
| PAID | &quot;PAID&quot; |
| CANCELLED | &quot;CANCELLED&quot; |



