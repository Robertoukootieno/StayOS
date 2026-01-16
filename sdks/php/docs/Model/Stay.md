# # Stay

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stay_id** | **string** |  | [readonly]
**reservation_id** | **string** | Associated reservation |
**property_id** | **string** |  |
**inventory_unit_id** | **string** | Assigned room/unit |
**guest_id** | **string** | Primary guest |
**additional_guests** | **string[]** | Additional guest IDs | [optional]
**check_in_date** | **\DateTime** | Actual check-in timestamp |
**expected_check_out_date** | **\DateTime** |  |
**actual_check_out_date** | **\DateTime** | Actual check-out timestamp | [optional]
**status** | **string** |  |
**guest_count** | [**\OpenAPI\Client\Model\ReservationAllOfGuestCount**](ReservationAllOfGuestCount.md) |  | [optional]
**key_cards** | [**\OpenAPI\Client\Model\Model0[]**](Model0.md) |  | [optional]
**incidental_charges** | [**\OpenAPI\Client\Model\Model0[]**](Model0.md) |  | [optional]
**special_requests** | **string** |  | [optional]
**notes** | **string** | Internal staff notes | [optional]
**metadata** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]
**links** | [**\OpenAPI\Client\Model\StayAllOfLinks**](StayAllOfLinks.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
