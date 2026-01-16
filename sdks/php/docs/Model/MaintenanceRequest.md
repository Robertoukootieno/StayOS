# # MaintenanceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **string** |  | [readonly]
**property_id** | **string** |  |
**inventory_unit_id** | **string** | Specific room/unit (if applicable) | [optional]
**category** | **string** |  |
**priority** | **string** |  |
**status** | **string** |  |
**title** | **string** |  | [optional]
**description** | **string** |  | [optional]
**reported_by** | **string** |  | [optional]
**assigned_to** | **string** | Technician ID | [optional]
**scheduled_for** | **\DateTime** |  | [optional]
**completed_at** | **\DateTime** |  | [optional]
**verified_at** | **\DateTime** |  | [optional]
**estimated_cost** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]
**actual_cost** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]
**work_log** | [**\OpenAPI\Client\Model\MaintenanceRequestAllOfWorkLog[]**](MaintenanceRequestAllOfWorkLog.md) |  | [optional]
**metadata** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
