# # Reservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reservation_id** | **string** |  | [readonly]
**property_id** | **string** |  |
**guest_id** | **string** |  |
**check_in_date** | **\DateTime** |  |
**check_out_date** | **\DateTime** |  |
**status** | **string** |  |
**guest_count** | [**\OpenAPI\Client\Model\ReservationAllOfGuestCount**](ReservationAllOfGuestCount.md) |  | [optional]
**special_requests** | **string** |  | [optional]
**total_amount** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]
**cancellation_policy** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]
**created_at** | **\DateTime** |  | [optional] [readonly]
**updated_at** | **\DateTime** |  | [optional] [readonly]
**version** | **int** | Version for optimistic locking | [optional] [readonly]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
