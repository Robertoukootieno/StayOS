

# Supplier


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**supplierId** | **UUID** |  |  [readonly] |
|**name** | **String** |  |  |
|**category** | [**CategoryEnum**](#CategoryEnum) |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**contactInfo** | [**Model0**](Model0.md) |  |  [optional] |
|**address** | [**Model0**](Model0.md) |  |  [optional] |
|**paymentTerms** | **String** |  |  [optional] |
|**taxId** | **String** | Tax identification number |  [optional] |
|**bankDetails** | [**SupplierAllOfBankDetails**](SupplierAllOfBankDetails.md) |  |  [optional] |
|**rating** | **Float** | Supplier performance rating |  [optional] |
|**notes** | **String** |  |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: CategoryEnum

| Name | Value |
|---- | -----|
| FOOD_BEVERAGE | &quot;FOOD_BEVERAGE&quot; |
| LINEN | &quot;LINEN&quot; |
| CLEANING_SUPPLIES | &quot;CLEANING_SUPPLIES&quot; |
| MAINTENANCE | &quot;MAINTENANCE&quot; |
| FURNITURE | &quot;FURNITURE&quot; |
| TECHNOLOGY | &quot;TECHNOLOGY&quot; |
| UTILITIES | &quot;UTILITIES&quot; |
| OTHER | &quot;OTHER&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| INACTIVE | &quot;INACTIVE&quot; |
| SUSPENDED | &quot;SUSPENDED&quot; |



