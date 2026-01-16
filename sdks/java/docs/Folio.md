

# Folio


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**folioId** | **UUID** |  |  [readonly] |
|**propertyId** | **UUID** |  |  |
|**guestId** | **UUID** |  |  |
|**stayId** | **UUID** |  |  [optional] |
|**reservationId** | **UUID** |  |  [optional] |
|**folioNumber** | **String** | Human-readable folio number |  [optional] [readonly] |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**lineItems** | [**List&lt;Model0&gt;**](Model0.md) |  |  [optional] |
|**subtotal** | [**FolioAllOfSubtotal**](FolioAllOfSubtotal.md) |  |  [optional] |
|**taxes** | [**FolioAllOfTaxes**](FolioAllOfTaxes.md) |  |  [optional] |
|**fees** | [**FolioAllOfFees**](FolioAllOfFees.md) |  |  [optional] |
|**total** | [**FolioAllOfTotal**](FolioAllOfTotal.md) |  |  [optional] |
|**balance** | [**FolioAllOfBalance**](FolioAllOfBalance.md) |  |  [optional] |
|**payments** | [**List&lt;Model0&gt;**](Model0.md) |  |  [optional] |
|**closedAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |
|**links** | [**FolioAllOfLinks**](FolioAllOfLinks.md) |  |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| OPEN | &quot;OPEN&quot; |
| CLOSED | &quot;CLOSED&quot; |
| DISPUTED | &quot;DISPUTED&quot; |
| VOID | &quot;VOID&quot; |



