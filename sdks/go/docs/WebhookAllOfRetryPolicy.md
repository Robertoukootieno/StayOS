# WebhookAllOfRetryPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxRetries** | Pointer to **int32** |  | [optional] [default to 3]
**RetryDelay** | Pointer to **int32** | Delay between retries in seconds | [optional] [default to 60]

## Methods

### NewWebhookAllOfRetryPolicy

`func NewWebhookAllOfRetryPolicy() *WebhookAllOfRetryPolicy`

NewWebhookAllOfRetryPolicy instantiates a new WebhookAllOfRetryPolicy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWebhookAllOfRetryPolicyWithDefaults

`func NewWebhookAllOfRetryPolicyWithDefaults() *WebhookAllOfRetryPolicy`

NewWebhookAllOfRetryPolicyWithDefaults instantiates a new WebhookAllOfRetryPolicy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMaxRetries

`func (o *WebhookAllOfRetryPolicy) GetMaxRetries() int32`

GetMaxRetries returns the MaxRetries field if non-nil, zero value otherwise.

### GetMaxRetriesOk

`func (o *WebhookAllOfRetryPolicy) GetMaxRetriesOk() (*int32, bool)`

GetMaxRetriesOk returns a tuple with the MaxRetries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxRetries

`func (o *WebhookAllOfRetryPolicy) SetMaxRetries(v int32)`

SetMaxRetries sets MaxRetries field to given value.

### HasMaxRetries

`func (o *WebhookAllOfRetryPolicy) HasMaxRetries() bool`

HasMaxRetries returns a boolean if a field has been set.

### GetRetryDelay

`func (o *WebhookAllOfRetryPolicy) GetRetryDelay() int32`

GetRetryDelay returns the RetryDelay field if non-nil, zero value otherwise.

### GetRetryDelayOk

`func (o *WebhookAllOfRetryPolicy) GetRetryDelayOk() (*int32, bool)`

GetRetryDelayOk returns a tuple with the RetryDelay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryDelay

`func (o *WebhookAllOfRetryPolicy) SetRetryDelay(v int32)`

SetRetryDelay sets RetryDelay field to given value.

### HasRetryDelay

`func (o *WebhookAllOfRetryPolicy) HasRetryDelay() bool`

HasRetryDelay returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


