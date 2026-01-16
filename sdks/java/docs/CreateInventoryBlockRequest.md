

# CreateInventoryBlockRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**propertyId** | **UUID** |  |  |
|**unitTypeId** | **UUID** |  |  [optional] |
|**startDate** | **LocalDate** |  |  |
|**endDate** | **LocalDate** |  |  |
|**quantity** | **Integer** |  |  |
|**reason** | [**ReasonEnum**](#ReasonEnum) |  |  |
|**notes** | **String** |  |  [optional] |



## Enum: ReasonEnum

| Name | Value |
|---- | -----|
| MAINTENANCE | &quot;MAINTENANCE&quot; |
| GROUP_BLOCK | &quot;GROUP_BLOCK&quot; |
| OWNER_USE | &quot;OWNER_USE&quot; |
| OTHER | &quot;OTHER&quot; |



