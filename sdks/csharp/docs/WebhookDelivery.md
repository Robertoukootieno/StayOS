# StayOS.ApiClient.Model.WebhookDelivery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DeliveryId** | **Guid** |  | [readonly] 
**WebhookId** | **Guid** |  | 
**Event** | **string** |  | 
**Payload** | **Object** | Event payload | [optional] 
**Status** | **string** |  | 
**HttpStatus** | **int** | HTTP response status code | [optional] 
**ResponseBody** | **string** |  | [optional] 
**Attempts** | **int** | Number of delivery attempts | [optional] 
**DeliveredAt** | **DateTime** |  | [optional] [readonly] 
**NextRetryAt** | **DateTime** |  | [optional] 
**ErrorMessage** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

