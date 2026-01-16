# # LineItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_id** | **string** |  | [readonly]
**description** | **string** |  |
**category** | **string** |  |
**amount** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  |
**quantity** | **int** |  | [optional] [default to 1]
**unit_price** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]
**date** | **\DateTime** |  | [optional]
**is_voided** | **bool** |  | [optional] [readonly] [default to false]
**voided_at** | **\DateTime** |  | [optional] [readonly]
**voided_by** | **string** |  | [optional] [readonly]
**void_reason** | **string** |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
