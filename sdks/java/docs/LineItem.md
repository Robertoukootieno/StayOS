

# LineItem


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**lineItemId** | **UUID** |  |  [readonly] |
|**description** | **String** |  |  |
|**category** | [**CategoryEnum**](#CategoryEnum) |  |  |
|**amount** | [**Model0**](Model0.md) |  |  |
|**quantity** | **Integer** |  |  [optional] |
|**unitPrice** | [**Model0**](Model0.md) |  |  [optional] |
|**date** | **LocalDate** |  |  [optional] |
|**isVoided** | **Boolean** |  |  [optional] [readonly] |
|**voidedAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**voidedBy** | **UUID** |  |  [optional] [readonly] |
|**voidReason** | **String** |  |  [optional] |



## Enum: CategoryEnum

| Name | Value |
|---- | -----|
| ROOM | &quot;ROOM&quot; |
| TAX | &quot;TAX&quot; |
| FEE | &quot;FEE&quot; |
| FOOD_BEVERAGE | &quot;FOOD_BEVERAGE&quot; |
| MINIBAR | &quot;MINIBAR&quot; |
| LAUNDRY | &quot;LAUNDRY&quot; |
| PARKING | &quot;PARKING&quot; |
| PHONE | &quot;PHONE&quot; |
| INTERNET | &quot;INTERNET&quot; |
| SPA | &quot;SPA&quot; |
| OTHER | &quot;OTHER&quot; |



