# StayOS.ApiClient.Model.Feedback

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FeedbackId** | **Guid** |  | [readonly] 
**GuestId** | **Guid** |  | 
**StayId** | **Guid** | Associated stay (if applicable) | [optional] 
**PropertyId** | **Guid** |  | [optional] 
**Type** | **string** |  | 
**Category** | **string** |  | [optional] 
**Rating** | **int** | Overall rating (1-5 stars) | 
**Subject** | **string** |  | [optional] 
**Description** | **string** |  | [optional] 
**Status** | **string** |  | 
**Priority** | **string** |  | [optional] [default to PriorityEnum.MEDIUM]
**Response** | [**FeedbackAllOfResponse**](FeedbackAllOfResponse.md) |  | [optional] 
**ServiceRecovery** | [**FeedbackAllOfServiceRecovery**](FeedbackAllOfServiceRecovery.md) |  | [optional] 
**Metadata** | [**Model0**](Model0.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

