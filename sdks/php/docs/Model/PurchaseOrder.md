# # PurchaseOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**po_id** | **string** |  | [readonly]
**po_number** | **string** | Human-readable PO number | [optional] [readonly]
**property_id** | **string** |  |
**supplier_id** | **string** |  |
**status** | **string** |  |
**items** | [**\OpenAPI\Client\Model\PurchaseOrderAllOfItems[]**](PurchaseOrderAllOfItems.md) |  | [optional]
**subtotal** | [**\OpenAPI\Client\Model\PurchaseOrderAllOfSubtotal**](PurchaseOrderAllOfSubtotal.md) |  | [optional]
**tax** | [**\OpenAPI\Client\Model\PurchaseOrderAllOfTax**](PurchaseOrderAllOfTax.md) |  | [optional]
**total** | [**\OpenAPI\Client\Model\PurchaseOrderAllOfTotal**](PurchaseOrderAllOfTotal.md) |  | [optional]
**delivery_address** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]
**requested_delivery_date** | **\DateTime** |  | [optional]
**actual_delivery_date** | **\DateTime** |  | [optional]
**approved_by** | **string** |  | [optional]
**approved_at** | **\DateTime** |  | [optional]
**submitted_at** | **\DateTime** |  | [optional]
**notes** | **string** |  | [optional]
**metadata** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
