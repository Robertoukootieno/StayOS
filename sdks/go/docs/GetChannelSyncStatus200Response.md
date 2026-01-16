# GetChannelSyncStatus200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LastSync** | Pointer to **time.Time** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**Errors** | Pointer to **[]string** |  | [optional] 

## Methods

### NewGetChannelSyncStatus200Response

`func NewGetChannelSyncStatus200Response() *GetChannelSyncStatus200Response`

NewGetChannelSyncStatus200Response instantiates a new GetChannelSyncStatus200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetChannelSyncStatus200ResponseWithDefaults

`func NewGetChannelSyncStatus200ResponseWithDefaults() *GetChannelSyncStatus200Response`

NewGetChannelSyncStatus200ResponseWithDefaults instantiates a new GetChannelSyncStatus200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLastSync

`func (o *GetChannelSyncStatus200Response) GetLastSync() time.Time`

GetLastSync returns the LastSync field if non-nil, zero value otherwise.

### GetLastSyncOk

`func (o *GetChannelSyncStatus200Response) GetLastSyncOk() (*time.Time, bool)`

GetLastSyncOk returns a tuple with the LastSync field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSync

`func (o *GetChannelSyncStatus200Response) SetLastSync(v time.Time)`

SetLastSync sets LastSync field to given value.

### HasLastSync

`func (o *GetChannelSyncStatus200Response) HasLastSync() bool`

HasLastSync returns a boolean if a field has been set.

### GetStatus

`func (o *GetChannelSyncStatus200Response) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetChannelSyncStatus200Response) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetChannelSyncStatus200Response) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetChannelSyncStatus200Response) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetErrors

`func (o *GetChannelSyncStatus200Response) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *GetChannelSyncStatus200Response) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *GetChannelSyncStatus200Response) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *GetChannelSyncStatus200Response) HasErrors() bool`

HasErrors returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


