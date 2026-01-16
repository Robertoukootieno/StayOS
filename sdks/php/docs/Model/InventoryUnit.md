# # InventoryUnit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_unit_id** | **string** |  | [optional] [readonly]
**property_id** | **string** |  |
**unit_number** | **string** | Human-readable unit identifier |
**unit_type_id** | **string** | Reference to unit type classification |
**unit_type** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]
**floor** | **int** |  | [optional]
**physical_status** | **string** |  | [optional] [default to 'OPERATIONAL']
**operational_status** | **string** |  | [optional] [default to 'AVAILABLE']
**accessibility** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]
**last_maintenance_date** | **\DateTime** |  | [optional]
**next_scheduled_maintenance** | **\DateTime** |  | [optional]
**metadata** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]
**links** | [**\OpenAPI\Client\Model\InventoryUnitAllOfLinks**](InventoryUnitAllOfLinks.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
