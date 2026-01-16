# # FBOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **string** |  | [readonly]
**property_id** | **string** |  |
**stay_id** | **string** |  | [optional]
**guest_id** | **string** |  | [optional]
**inventory_unit_id** | **string** | Room number for room service | [optional]
**order_type** | **string** |  |
**status** | **string** |  |
**items** | [**\OpenAPI\Client\Model\FBOrderAllOfItems[]**](FBOrderAllOfItems.md) |  | [optional]
**subtotal** | [**\OpenAPI\Client\Model\FBOrderAllOfSubtotal**](FBOrderAllOfSubtotal.md) |  | [optional]
**tax** | [**\OpenAPI\Client\Model\FBOrderAllOfTax**](FBOrderAllOfTax.md) |  | [optional]
**service_charge** | [**\OpenAPI\Client\Model\FBOrderAllOfServiceCharge**](FBOrderAllOfServiceCharge.md) |  | [optional]
**total** | [**\OpenAPI\Client\Model\FBOrderAllOfTotal**](FBOrderAllOfTotal.md) |  | [optional]
**special_instructions** | **string** |  | [optional]
**delivery_time** | **\DateTime** |  | [optional]
**served_at** | **\DateTime** |  | [optional]
**metadata** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
