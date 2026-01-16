# # HousekeepingTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_id** | **string** |  | [readonly]
**property_id** | **string** |  |
**inventory_unit_id** | **string** | Room/unit to clean |
**task_type** | **string** |  |
**priority** | **string** |  | [optional] [default to 'NORMAL']
**status** | **string** |  |
**assigned_to** | **string** | Staff member ID | [optional]
**scheduled_for** | **\DateTime** |  | [optional]
**started_at** | **\DateTime** |  | [optional]
**completed_at** | **\DateTime** |  | [optional]
**verified_at** | **\DateTime** |  | [optional]
**verified_by** | **string** |  | [optional]
**notes** | **string** |  | [optional]
**issues** | **string[]** | Issues found during cleaning | [optional]
**metadata** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
