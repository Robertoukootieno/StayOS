# StayOS.ApiClient.Model.HousekeepingTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskId** | **Guid** |  | [readonly] 
**PropertyId** | **Guid** |  | 
**InventoryUnitId** | **Guid** | Room/unit to clean | 
**TaskType** | **string** |  | 
**Priority** | **string** |  | [optional] [default to PriorityEnum.NORMAL]
**Status** | **string** |  | 
**AssignedTo** | **Guid** | Staff member ID | [optional] 
**ScheduledFor** | **DateTime** |  | [optional] 
**StartedAt** | **DateTime** |  | [optional] 
**CompletedAt** | **DateTime** |  | [optional] 
**VerifiedAt** | **DateTime** |  | [optional] 
**VerifiedBy** | **Guid** |  | [optional] 
**Notes** | **string** |  | [optional] 
**Issues** | **List&lt;string&gt;** | Issues found during cleaning | [optional] 
**Metadata** | [**Model0**](Model0.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

