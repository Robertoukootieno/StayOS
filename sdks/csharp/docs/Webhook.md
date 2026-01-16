# StayOS.ApiClient.Model.Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WebhookId** | **Guid** |  | [readonly] 
**Url** | **string** | Webhook endpoint URL | 
**Events** | **List&lt;Webhook.EventsEnum&gt;** | Events to subscribe to | 
**Status** | **string** |  | 
**Secret** | **string** | Secret for signature verification | [optional] 
**Headers** | **Dictionary&lt;string, string&gt;** | Custom headers to include in webhook requests | [optional] 
**RetryPolicy** | [**WebhookAllOfRetryPolicy**](WebhookAllOfRetryPolicy.md) |  | [optional] 
**LastDeliveryAt** | **DateTime** |  | [optional] [readonly] 
**LastDeliveryStatus** | **string** |  | [optional] [readonly] 
**Metadata** | [**Model0**](Model0.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

