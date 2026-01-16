

# FBOrder


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**orderId** | **UUID** |  |  [readonly] |
|**propertyId** | **UUID** |  |  |
|**stayId** | **UUID** |  |  [optional] |
|**guestId** | **UUID** |  |  [optional] |
|**inventoryUnitId** | **UUID** | Room number for room service |  [optional] |
|**orderType** | [**OrderTypeEnum**](#OrderTypeEnum) |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**items** | [**List&lt;FBOrderAllOfItems&gt;**](FBOrderAllOfItems.md) |  |  [optional] |
|**subtotal** | [**FBOrderAllOfSubtotal**](FBOrderAllOfSubtotal.md) |  |  [optional] |
|**tax** | [**FBOrderAllOfTax**](FBOrderAllOfTax.md) |  |  [optional] |
|**serviceCharge** | [**FBOrderAllOfServiceCharge**](FBOrderAllOfServiceCharge.md) |  |  [optional] |
|**total** | [**FBOrderAllOfTotal**](FBOrderAllOfTotal.md) |  |  [optional] |
|**specialInstructions** | **String** |  |  [optional] |
|**deliveryTime** | **OffsetDateTime** |  |  [optional] |
|**servedAt** | **OffsetDateTime** |  |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: OrderTypeEnum

| Name | Value |
|---- | -----|
| ROOM_SERVICE | &quot;ROOM_SERVICE&quot; |
| RESTAURANT | &quot;RESTAURANT&quot; |
| BAR | &quot;BAR&quot; |
| BANQUET | &quot;BANQUET&quot; |
| MINIBAR | &quot;MINIBAR&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| CONFIRMED | &quot;CONFIRMED&quot; |
| PREPARING | &quot;PREPARING&quot; |
| READY | &quot;READY&quot; |
| SERVED | &quot;SERVED&quot; |
| CANCELLED | &quot;CANCELLED&quot; |



