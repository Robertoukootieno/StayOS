# StayOS.ApiClient.Model.PurchaseOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PoId** | **Guid** |  | [readonly] 
**PoNumber** | **string** | Human-readable PO number | [optional] [readonly] 
**PropertyId** | **Guid** |  | 
**SupplierId** | **Guid** |  | 
**Status** | **string** |  | 
**Items** | [**List&lt;PurchaseOrderAllOfItems&gt;**](PurchaseOrderAllOfItems.md) |  | [optional] 
**Subtotal** | [**PurchaseOrderAllOfSubtotal**](PurchaseOrderAllOfSubtotal.md) |  | [optional] 
**Tax** | [**PurchaseOrderAllOfTax**](PurchaseOrderAllOfTax.md) |  | [optional] 
**Total** | [**PurchaseOrderAllOfTotal**](PurchaseOrderAllOfTotal.md) |  | [optional] 
**DeliveryAddress** | [**Model0**](Model0.md) |  | [optional] 
**RequestedDeliveryDate** | **DateTime** |  | [optional] 
**ActualDeliveryDate** | **DateTime** |  | [optional] 
**ApprovedBy** | **Guid** |  | [optional] 
**ApprovedAt** | **DateTime** |  | [optional] 
**SubmittedAt** | **DateTime** |  | [optional] 
**Notes** | **string** |  | [optional] 
**Metadata** | [**Model0**](Model0.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

