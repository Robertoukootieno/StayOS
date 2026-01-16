# StayOS.ApiClient.Model.FBOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderId** | **Guid** |  | [readonly] 
**PropertyId** | **Guid** |  | 
**StayId** | **Guid** |  | [optional] 
**GuestId** | **Guid** |  | [optional] 
**InventoryUnitId** | **Guid** | Room number for room service | [optional] 
**OrderType** | **string** |  | 
**Status** | **string** |  | 
**Items** | [**List&lt;FBOrderAllOfItems&gt;**](FBOrderAllOfItems.md) |  | [optional] 
**Subtotal** | [**FBOrderAllOfSubtotal**](FBOrderAllOfSubtotal.md) |  | [optional] 
**Tax** | [**FBOrderAllOfTax**](FBOrderAllOfTax.md) |  | [optional] 
**ServiceCharge** | [**FBOrderAllOfServiceCharge**](FBOrderAllOfServiceCharge.md) |  | [optional] 
**Total** | [**FBOrderAllOfTotal**](FBOrderAllOfTotal.md) |  | [optional] 
**SpecialInstructions** | **string** |  | [optional] 
**DeliveryTime** | **DateTime** |  | [optional] 
**ServedAt** | **DateTime** |  | [optional] 
**Metadata** | [**Model0**](Model0.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

