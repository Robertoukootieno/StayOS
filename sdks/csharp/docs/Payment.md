# StayOS.ApiClient.Model.Payment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PaymentId** | **Guid** |  | [readonly] 
**FolioId** | **Guid** |  | [optional] 
**Amount** | [**Model0**](Model0.md) |  | 
**Method** | **string** |  | 
**Status** | **string** |  | 
**TransactionId** | **string** | External payment processor transaction ID | [optional] 
**CardDetails** | [**PaymentAllOfCardDetails**](PaymentAllOfCardDetails.md) |  | [optional] 
**ProcessedAt** | **DateTime** |  | [optional] [readonly] 
**Refunds** | [**List&lt;PaymentAllOfRefunds&gt;**](PaymentAllOfRefunds.md) |  | [optional] 
**ReceiptUrl** | **string** |  | [optional] [readonly] 
**Metadata** | [**Model0**](Model0.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

