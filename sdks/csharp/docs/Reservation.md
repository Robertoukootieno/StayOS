# StayOS.ApiClient.Model.Reservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | **Guid** |  | [readonly] 
**PropertyId** | **Guid** |  | 
**GuestId** | **Guid** |  | 
**CheckInDate** | **DateTime** |  | 
**CheckOutDate** | **DateTime** |  | 
**Status** | **string** |  | 
**GuestCount** | [**ReservationAllOfGuestCount**](ReservationAllOfGuestCount.md) |  | [optional] 
**SpecialRequests** | **string** |  | [optional] 
**TotalAmount** | [**Model0**](Model0.md) |  | [optional] 
**CancellationPolicy** | [**Model0**](Model0.md) |  | [optional] 
**CreatedAt** | **DateTime** |  | [optional] [readonly] 
**UpdatedAt** | **DateTime** |  | [optional] [readonly] 
**VarVersion** | **int** | Version for optimistic locking | [optional] [readonly] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

