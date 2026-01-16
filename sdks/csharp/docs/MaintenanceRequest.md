# StayOS.ApiClient.Model.MaintenanceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **Guid** |  | [readonly] 
**PropertyId** | **Guid** |  | 
**InventoryUnitId** | **Guid** | Specific room/unit (if applicable) | [optional] 
**Category** | **string** |  | 
**Priority** | **string** |  | 
**Status** | **string** |  | 
**Title** | **string** |  | [optional] 
**Description** | **string** |  | [optional] 
**ReportedBy** | **Guid** |  | [optional] 
**AssignedTo** | **Guid** | Technician ID | [optional] 
**ScheduledFor** | **DateTime** |  | [optional] 
**CompletedAt** | **DateTime** |  | [optional] 
**VerifiedAt** | **DateTime** |  | [optional] 
**EstimatedCost** | [**Model0**](Model0.md) |  | [optional] 
**ActualCost** | [**Model0**](Model0.md) |  | [optional] 
**WorkLog** | [**List&lt;MaintenanceRequestAllOfWorkLog&gt;**](MaintenanceRequestAllOfWorkLog.md) |  | [optional] 
**Metadata** | [**Model0**](Model0.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

