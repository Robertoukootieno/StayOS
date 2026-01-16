

# MenuItem


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**itemId** | **UUID** |  |  [readonly] |
|**name** | **String** |  |  |
|**description** | **String** |  |  [optional] |
|**category** | [**CategoryEnum**](#CategoryEnum) |  |  |
|**price** | [**Model0**](Model0.md) |  |  |
|**available** | **Boolean** |  |  |
|**dietary** | [**List&lt;DietaryEnum&gt;**](#List&lt;DietaryEnum&gt;) |  |  [optional] |
|**allergens** | **List&lt;String&gt;** |  |  [optional] |
|**preparationTime** | **Integer** | Preparation time in minutes |  [optional] |
|**imageUrl** | **URI** |  |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: CategoryEnum

| Name | Value |
|---- | -----|
| APPETIZER | &quot;APPETIZER&quot; |
| MAIN_COURSE | &quot;MAIN_COURSE&quot; |
| DESSERT | &quot;DESSERT&quot; |
| BEVERAGE | &quot;BEVERAGE&quot; |
| ALCOHOL | &quot;ALCOHOL&quot; |
| BREAKFAST | &quot;BREAKFAST&quot; |
| SNACK | &quot;SNACK&quot; |



## Enum: List&lt;DietaryEnum&gt;

| Name | Value |
|---- | -----|
| VEGETARIAN | &quot;VEGETARIAN&quot; |
| VEGAN | &quot;VEGAN&quot; |
| GLUTEN_FREE | &quot;GLUTEN_FREE&quot; |
| DAIRY_FREE | &quot;DAIRY_FREE&quot; |
| NUT_FREE | &quot;NUT_FREE&quot; |
| HALAL | &quot;HALAL&quot; |
| KOSHER | &quot;KOSHER&quot; |



