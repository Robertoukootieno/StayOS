# StayOS.ApiClient.Model.AuditLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LogId** | **Guid** |  | [readonly] 
**Timestamp** | **DateTime** |  | [readonly] 
**UserId** | **Guid** | User who performed the action | [optional] 
**Action** | **string** |  | 
**Resource** | **string** | Resource type (e.g., reservation, guest, property) | 
**ResourceId** | **Guid** |  | [optional] 
**Changes** | **Object** | JSON object showing what changed | [optional] 
**IpAddress** | **string** |  | [optional] 
**UserAgent** | **string** |  | [optional] 
**Status** | **string** |  | [optional] 
**ErrorMessage** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

