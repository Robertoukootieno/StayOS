# StayOS.ApiClient.Model.InventoryUnit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InventoryUnitId** | **Guid** |  | [optional] [readonly] 
**PropertyId** | **Guid** |  | 
**UnitNumber** | **string** | Human-readable unit identifier | 
**UnitTypeId** | **Guid** | Reference to unit type classification | 
**UnitType** | [**Model0**](Model0.md) |  | [optional] 
**Floor** | **int** |  | [optional] 
**PhysicalStatus** | **string** |  | [optional] [default to PhysicalStatusEnum.OPERATIONAL]
**OperationalStatus** | **string** |  | [optional] [default to OperationalStatusEnum.AVAILABLE]
**Accessibility** | [**Model0**](Model0.md) |  | [optional] 
**LastMaintenanceDate** | **DateTime** |  | [optional] 
**NextScheduledMaintenance** | **DateTime** |  | [optional] 
**Metadata** | [**Model0**](Model0.md) |  | [optional] 
**Links** | [**InventoryUnitAllOfLinks**](InventoryUnitAllOfLinks.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

