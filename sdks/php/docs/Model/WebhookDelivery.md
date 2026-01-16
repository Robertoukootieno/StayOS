# # WebhookDelivery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_id** | **string** |  | [readonly]
**webhook_id** | **string** |  |
**event** | **string** |  |
**payload** | **mixed** | Event payload | [optional]
**status** | **string** |  |
**http_status** | **int** | HTTP response status code | [optional]
**response_body** | **string** |  | [optional]
**attempts** | **int** | Number of delivery attempts | [optional]
**delivered_at** | **\DateTime** |  | [optional] [readonly]
**next_retry_at** | **\DateTime** |  | [optional]
**error_message** | **string** |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
