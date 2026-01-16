# # ServiceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **string** |  | [readonly]
**property_id** | **string** |  |
**stay_id** | **string** |  | [optional]
**guest_id** | **string** |  | [optional]
**inventory_unit_id** | **string** |  | [optional]
**category** | **string** |  |
**priority** | **string** |  | [optional] [default to 'NORMAL']
**status** | **string** |  |
**title** | **string** |  | [optional]
**description** | **string** |  | [optional]
**requested_by** | **string** |  | [optional] [default to 'GUEST']
**assigned_to** | **string** |  | [optional]
**acknowledged_at** | **\DateTime** |  | [optional]
**completed_at** | **\DateTime** |  | [optional]
**guest_feedback** | [**\OpenAPI\Client\Model\ServiceRequestAllOfGuestFeedback**](ServiceRequestAllOfGuestFeedback.md) |  | [optional]
**metadata** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
