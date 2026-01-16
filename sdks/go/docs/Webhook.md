# Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WebhookId** | **string** |  | [readonly] 
**Url** | **string** | Webhook endpoint URL | 
**Events** | **[]string** | Events to subscribe to | 
**Status** | **string** |  | 
**Secret** | Pointer to **string** | Secret for signature verification | [optional] 
**Headers** | Pointer to **map[string]string** | Custom headers to include in webhook requests | [optional] 
**RetryPolicy** | Pointer to [**WebhookAllOfRetryPolicy**](WebhookAllOfRetryPolicy.md) |  | [optional] 
**LastDeliveryAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**LastDeliveryStatus** | Pointer to **string** |  | [optional] [readonly] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewWebhook

`func NewWebhook(webhookId string, url string, events []string, status string, ) *Webhook`

NewWebhook instantiates a new Webhook object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWebhookWithDefaults

`func NewWebhookWithDefaults() *Webhook`

NewWebhookWithDefaults instantiates a new Webhook object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWebhookId

`func (o *Webhook) GetWebhookId() string`

GetWebhookId returns the WebhookId field if non-nil, zero value otherwise.

### GetWebhookIdOk

`func (o *Webhook) GetWebhookIdOk() (*string, bool)`

GetWebhookIdOk returns a tuple with the WebhookId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebhookId

`func (o *Webhook) SetWebhookId(v string)`

SetWebhookId sets WebhookId field to given value.


### GetUrl

`func (o *Webhook) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *Webhook) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *Webhook) SetUrl(v string)`

SetUrl sets Url field to given value.


### GetEvents

`func (o *Webhook) GetEvents() []string`

GetEvents returns the Events field if non-nil, zero value otherwise.

### GetEventsOk

`func (o *Webhook) GetEventsOk() (*[]string, bool)`

GetEventsOk returns a tuple with the Events field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvents

`func (o *Webhook) SetEvents(v []string)`

SetEvents sets Events field to given value.


### GetStatus

`func (o *Webhook) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Webhook) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Webhook) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetSecret

`func (o *Webhook) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *Webhook) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *Webhook) SetSecret(v string)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *Webhook) HasSecret() bool`

HasSecret returns a boolean if a field has been set.

### GetHeaders

`func (o *Webhook) GetHeaders() map[string]string`

GetHeaders returns the Headers field if non-nil, zero value otherwise.

### GetHeadersOk

`func (o *Webhook) GetHeadersOk() (*map[string]string, bool)`

GetHeadersOk returns a tuple with the Headers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaders

`func (o *Webhook) SetHeaders(v map[string]string)`

SetHeaders sets Headers field to given value.

### HasHeaders

`func (o *Webhook) HasHeaders() bool`

HasHeaders returns a boolean if a field has been set.

### GetRetryPolicy

`func (o *Webhook) GetRetryPolicy() WebhookAllOfRetryPolicy`

GetRetryPolicy returns the RetryPolicy field if non-nil, zero value otherwise.

### GetRetryPolicyOk

`func (o *Webhook) GetRetryPolicyOk() (*WebhookAllOfRetryPolicy, bool)`

GetRetryPolicyOk returns a tuple with the RetryPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryPolicy

`func (o *Webhook) SetRetryPolicy(v WebhookAllOfRetryPolicy)`

SetRetryPolicy sets RetryPolicy field to given value.

### HasRetryPolicy

`func (o *Webhook) HasRetryPolicy() bool`

HasRetryPolicy returns a boolean if a field has been set.

### GetLastDeliveryAt

`func (o *Webhook) GetLastDeliveryAt() time.Time`

GetLastDeliveryAt returns the LastDeliveryAt field if non-nil, zero value otherwise.

### GetLastDeliveryAtOk

`func (o *Webhook) GetLastDeliveryAtOk() (*time.Time, bool)`

GetLastDeliveryAtOk returns a tuple with the LastDeliveryAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastDeliveryAt

`func (o *Webhook) SetLastDeliveryAt(v time.Time)`

SetLastDeliveryAt sets LastDeliveryAt field to given value.

### HasLastDeliveryAt

`func (o *Webhook) HasLastDeliveryAt() bool`

HasLastDeliveryAt returns a boolean if a field has been set.

### GetLastDeliveryStatus

`func (o *Webhook) GetLastDeliveryStatus() string`

GetLastDeliveryStatus returns the LastDeliveryStatus field if non-nil, zero value otherwise.

### GetLastDeliveryStatusOk

`func (o *Webhook) GetLastDeliveryStatusOk() (*string, bool)`

GetLastDeliveryStatusOk returns a tuple with the LastDeliveryStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastDeliveryStatus

`func (o *Webhook) SetLastDeliveryStatus(v string)`

SetLastDeliveryStatus sets LastDeliveryStatus field to given value.

### HasLastDeliveryStatus

`func (o *Webhook) HasLastDeliveryStatus() bool`

HasLastDeliveryStatus returns a boolean if a field has been set.

### GetMetadata

`func (o *Webhook) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Webhook) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Webhook) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Webhook) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


