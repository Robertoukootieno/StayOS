# # Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook_id** | **string** |  | [readonly]
**url** | **string** | Webhook endpoint URL |
**events** | **string[]** | Events to subscribe to |
**status** | **string** |  |
**secret** | **string** | Secret for signature verification | [optional]
**headers** | **array<string,string>** | Custom headers to include in webhook requests | [optional]
**retry_policy** | [**\OpenAPI\Client\Model\WebhookAllOfRetryPolicy**](WebhookAllOfRetryPolicy.md) |  | [optional]
**last_delivery_at** | **\DateTime** |  | [optional] [readonly]
**last_delivery_status** | **string** |  | [optional] [readonly]
**metadata** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
