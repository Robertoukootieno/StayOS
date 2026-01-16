# Channel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelId** | **string** |  | [readonly] 
**PropertyId** | **string** |  | 
**ChannelType** | **string** |  | 
**ChannelName** | Pointer to **string** |  | [optional] 
**Status** | **string** |  | 
**Credentials** | Pointer to [**ChannelAllOfCredentials**](ChannelAllOfCredentials.md) |  | [optional] 
**Configuration** | Pointer to [**ChannelAllOfConfiguration**](ChannelAllOfConfiguration.md) |  | [optional] 
**LastSyncAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**SyncStatus** | Pointer to **string** |  | [optional] [readonly] 
**ErrorMessage** | Pointer to **string** |  | [optional] [readonly] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Links** | Pointer to [**ChannelAllOfLinks**](ChannelAllOfLinks.md) |  | [optional] 

## Methods

### NewChannel

`func NewChannel(channelId string, propertyId string, channelType string, status string, ) *Channel`

NewChannel instantiates a new Channel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelWithDefaults

`func NewChannelWithDefaults() *Channel`

NewChannelWithDefaults instantiates a new Channel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelId

`func (o *Channel) GetChannelId() string`

GetChannelId returns the ChannelId field if non-nil, zero value otherwise.

### GetChannelIdOk

`func (o *Channel) GetChannelIdOk() (*string, bool)`

GetChannelIdOk returns a tuple with the ChannelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelId

`func (o *Channel) SetChannelId(v string)`

SetChannelId sets ChannelId field to given value.


### GetPropertyId

`func (o *Channel) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *Channel) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *Channel) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetChannelType

`func (o *Channel) GetChannelType() string`

GetChannelType returns the ChannelType field if non-nil, zero value otherwise.

### GetChannelTypeOk

`func (o *Channel) GetChannelTypeOk() (*string, bool)`

GetChannelTypeOk returns a tuple with the ChannelType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelType

`func (o *Channel) SetChannelType(v string)`

SetChannelType sets ChannelType field to given value.


### GetChannelName

`func (o *Channel) GetChannelName() string`

GetChannelName returns the ChannelName field if non-nil, zero value otherwise.

### GetChannelNameOk

`func (o *Channel) GetChannelNameOk() (*string, bool)`

GetChannelNameOk returns a tuple with the ChannelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelName

`func (o *Channel) SetChannelName(v string)`

SetChannelName sets ChannelName field to given value.

### HasChannelName

`func (o *Channel) HasChannelName() bool`

HasChannelName returns a boolean if a field has been set.

### GetStatus

`func (o *Channel) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Channel) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Channel) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetCredentials

`func (o *Channel) GetCredentials() ChannelAllOfCredentials`

GetCredentials returns the Credentials field if non-nil, zero value otherwise.

### GetCredentialsOk

`func (o *Channel) GetCredentialsOk() (*ChannelAllOfCredentials, bool)`

GetCredentialsOk returns a tuple with the Credentials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentials

`func (o *Channel) SetCredentials(v ChannelAllOfCredentials)`

SetCredentials sets Credentials field to given value.

### HasCredentials

`func (o *Channel) HasCredentials() bool`

HasCredentials returns a boolean if a field has been set.

### GetConfiguration

`func (o *Channel) GetConfiguration() ChannelAllOfConfiguration`

GetConfiguration returns the Configuration field if non-nil, zero value otherwise.

### GetConfigurationOk

`func (o *Channel) GetConfigurationOk() (*ChannelAllOfConfiguration, bool)`

GetConfigurationOk returns a tuple with the Configuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfiguration

`func (o *Channel) SetConfiguration(v ChannelAllOfConfiguration)`

SetConfiguration sets Configuration field to given value.

### HasConfiguration

`func (o *Channel) HasConfiguration() bool`

HasConfiguration returns a boolean if a field has been set.

### GetLastSyncAt

`func (o *Channel) GetLastSyncAt() time.Time`

GetLastSyncAt returns the LastSyncAt field if non-nil, zero value otherwise.

### GetLastSyncAtOk

`func (o *Channel) GetLastSyncAtOk() (*time.Time, bool)`

GetLastSyncAtOk returns a tuple with the LastSyncAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSyncAt

`func (o *Channel) SetLastSyncAt(v time.Time)`

SetLastSyncAt sets LastSyncAt field to given value.

### HasLastSyncAt

`func (o *Channel) HasLastSyncAt() bool`

HasLastSyncAt returns a boolean if a field has been set.

### GetSyncStatus

`func (o *Channel) GetSyncStatus() string`

GetSyncStatus returns the SyncStatus field if non-nil, zero value otherwise.

### GetSyncStatusOk

`func (o *Channel) GetSyncStatusOk() (*string, bool)`

GetSyncStatusOk returns a tuple with the SyncStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncStatus

`func (o *Channel) SetSyncStatus(v string)`

SetSyncStatus sets SyncStatus field to given value.

### HasSyncStatus

`func (o *Channel) HasSyncStatus() bool`

HasSyncStatus returns a boolean if a field has been set.

### GetErrorMessage

`func (o *Channel) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *Channel) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *Channel) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *Channel) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### GetMetadata

`func (o *Channel) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Channel) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Channel) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Channel) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetLinks

`func (o *Channel) GetLinks() ChannelAllOfLinks`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Channel) GetLinksOk() (*ChannelAllOfLinks, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Channel) SetLinks(v ChannelAllOfLinks)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Channel) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


