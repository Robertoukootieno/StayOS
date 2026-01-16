

# FBInventoryItem


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**inventoryItemId** | **UUID** |  |  [readonly] |
|**name** | **String** |  |  |
|**category** | [**CategoryEnum**](#CategoryEnum) |  |  [optional] |
|**unit** | [**UnitEnum**](#UnitEnum) |  |  |
|**currentStock** | **Float** |  |  |
|**minimumStock** | **Float** |  |  [optional] |
|**maximumStock** | **Float** |  |  [optional] |
|**reorderPoint** | **Float** |  |  [optional] |
|**unitCost** | [**Model0**](Model0.md) |  |  [optional] |
|**supplier** | **String** |  |  [optional] |
|**lastRestocked** | **OffsetDateTime** |  |  [optional] |
|**expiryDate** | **LocalDate** |  |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: CategoryEnum

| Name | Value |
|---- | -----|
| PRODUCE | &quot;PRODUCE&quot; |
| MEAT | &quot;MEAT&quot; |
| DAIRY | &quot;DAIRY&quot; |
| BEVERAGE | &quot;BEVERAGE&quot; |
| DRY_GOODS | &quot;DRY_GOODS&quot; |
| ALCOHOL | &quot;ALCOHOL&quot; |
| SUPPLIES | &quot;SUPPLIES&quot; |



## Enum: UnitEnum

| Name | Value |
|---- | -----|
| KG | &quot;KG&quot; |
| LB | &quot;LB&quot; |
| L | &quot;L&quot; |
| GAL | &quot;GAL&quot; |
| UNIT | &quot;UNIT&quot; |



