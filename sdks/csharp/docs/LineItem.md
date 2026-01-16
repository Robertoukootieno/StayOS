# StayOS.ApiClient.Model.LineItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LineItemId** | **Guid** |  | [readonly] 
**Description** | **string** |  | 
**Category** | **string** |  | 
**Amount** | [**Model0**](Model0.md) |  | 
**Quantity** | **int** |  | [optional] [default to 1]
**UnitPrice** | [**Model0**](Model0.md) |  | [optional] 
**Date** | **DateTime** |  | [optional] 
**IsVoided** | **bool** |  | [optional] [readonly] [default to false]
**VoidedAt** | **DateTime** |  | [optional] [readonly] 
**VoidedBy** | **Guid** |  | [optional] [readonly] 
**VoidReason** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

