# StayOS.ApiClient.Model.ServiceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **Guid** |  | [readonly] 
**PropertyId** | **Guid** |  | 
**StayId** | **Guid** |  | [optional] 
**GuestId** | **Guid** |  | [optional] 
**InventoryUnitId** | **Guid** |  | [optional] 
**Category** | **string** |  | 
**Priority** | **string** |  | [optional] [default to PriorityEnum.NORMAL]
**Status** | **string** |  | 
**Title** | **string** |  | [optional] 
**Description** | **string** |  | [optional] 
**RequestedBy** | **string** |  | [optional] [default to RequestedByEnum.GUEST]
**AssignedTo** | **Guid** |  | [optional] 
**AcknowledgedAt** | **DateTime** |  | [optional] 
**CompletedAt** | **DateTime** |  | [optional] 
**GuestFeedback** | [**ServiceRequestAllOfGuestFeedback**](ServiceRequestAllOfGuestFeedback.md) |  | [optional] 
**Metadata** | [**Model0**](Model0.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

