# StayOS.ApiClient.Model.Folio

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioId** | **Guid** |  | [readonly] 
**PropertyId** | **Guid** |  | 
**GuestId** | **Guid** |  | 
**StayId** | **Guid** |  | [optional] 
**ReservationId** | **Guid** |  | [optional] 
**FolioNumber** | **string** | Human-readable folio number | [optional] [readonly] 
**Status** | **string** |  | 
**LineItems** | [**List&lt;Model0&gt;**](Model0.md) |  | [optional] 
**Subtotal** | [**FolioAllOfSubtotal**](FolioAllOfSubtotal.md) |  | [optional] 
**Taxes** | [**FolioAllOfTaxes**](FolioAllOfTaxes.md) |  | [optional] 
**Fees** | [**FolioAllOfFees**](FolioAllOfFees.md) |  | [optional] 
**Total** | [**FolioAllOfTotal**](FolioAllOfTotal.md) |  | [optional] 
**Balance** | [**FolioAllOfBalance**](FolioAllOfBalance.md) |  | [optional] 
**Payments** | [**List&lt;Model0&gt;**](Model0.md) |  | [optional] 
**ClosedAt** | **DateTime** |  | [optional] [readonly] 
**Metadata** | [**Model0**](Model0.md) |  | [optional] 
**Links** | [**FolioAllOfLinks**](FolioAllOfLinks.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

