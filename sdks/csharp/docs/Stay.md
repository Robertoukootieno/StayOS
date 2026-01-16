# StayOS.ApiClient.Model.Stay

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StayId** | **Guid** |  | [readonly] 
**ReservationId** | **Guid** | Associated reservation | 
**PropertyId** | **Guid** |  | 
**InventoryUnitId** | **Guid** | Assigned room/unit | 
**GuestId** | **Guid** | Primary guest | 
**AdditionalGuests** | **List&lt;Guid&gt;** | Additional guest IDs | [optional] 
**CheckInDate** | **DateTime** | Actual check-in timestamp | 
**ExpectedCheckOutDate** | **DateTime** |  | 
**ActualCheckOutDate** | **DateTime** | Actual check-out timestamp | [optional] 
**Status** | **string** |  | 
**GuestCount** | [**ReservationAllOfGuestCount**](ReservationAllOfGuestCount.md) |  | [optional] 
**KeyCards** | [**List&lt;Model0&gt;**](Model0.md) |  | [optional] 
**IncidentalCharges** | [**List&lt;Model0&gt;**](Model0.md) |  | [optional] 
**SpecialRequests** | **string** |  | [optional] 
**Notes** | **string** | Internal staff notes | [optional] 
**Metadata** | [**Model0**](Model0.md) |  | [optional] 
**Links** | [**StayAllOfLinks**](StayAllOfLinks.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

