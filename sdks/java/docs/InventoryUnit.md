

# InventoryUnit


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**inventoryUnitId** | **UUID** |  |  [optional] [readonly] |
|**propertyId** | **UUID** |  |  |
|**unitNumber** | **String** | Human-readable unit identifier |  |
|**unitTypeId** | **UUID** | Reference to unit type classification |  |
|**unitType** | [**Model0**](Model0.md) |  |  [optional] |
|**floor** | **Integer** |  |  [optional] |
|**physicalStatus** | [**PhysicalStatusEnum**](#PhysicalStatusEnum) |  |  [optional] |
|**operationalStatus** | [**OperationalStatusEnum**](#OperationalStatusEnum) |  |  [optional] |
|**accessibility** | [**Model0**](Model0.md) |  |  [optional] |
|**lastMaintenanceDate** | **LocalDate** |  |  [optional] |
|**nextScheduledMaintenance** | **LocalDate** |  |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |
|**links** | [**InventoryUnitAllOfLinks**](InventoryUnitAllOfLinks.md) |  |  [optional] |



## Enum: PhysicalStatusEnum

| Name | Value |
|---- | -----|
| OPERATIONAL | &quot;OPERATIONAL&quot; |
| MAINTENANCE | &quot;MAINTENANCE&quot; |
| RENOVATION | &quot;RENOVATION&quot; |
| DECOMMISSIONED | &quot;DECOMMISSIONED&quot; |



## Enum: OperationalStatusEnum

| Name | Value |
|---- | -----|
| AVAILABLE | &quot;AVAILABLE&quot; |
| OCCUPIED | &quot;OCCUPIED&quot; |
| BLOCKED | &quot;BLOCKED&quot; |
| OUT_OF_SERVICE | &quot;OUT_OF_SERVICE&quot; |



