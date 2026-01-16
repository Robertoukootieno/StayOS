# # Payment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **string** |  | [readonly]
**folio_id** | **string** |  | [optional]
**amount** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  |
**method** | **string** |  |
**status** | **string** |  |
**transaction_id** | **string** | External payment processor transaction ID | [optional]
**card_details** | [**\OpenAPI\Client\Model\PaymentAllOfCardDetails**](PaymentAllOfCardDetails.md) |  | [optional]
**processed_at** | **\DateTime** |  | [optional] [readonly]
**refunds** | [**\OpenAPI\Client\Model\PaymentAllOfRefunds[]**](PaymentAllOfRefunds.md) |  | [optional]
**receipt_url** | **string** |  | [optional] [readonly]
**metadata** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
