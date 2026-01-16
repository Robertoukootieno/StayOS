# GDPRRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **string** |  | [readonly] 
**GuestId** | **string** |  | 
**Type** | **string** |  | 
**Status** | Pointer to **string** |  | [optional] 
**RequestedAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**CompletedAt** | Pointer to **time.Time** |  | [optional] 
**DataPackageUrl** | Pointer to **string** | URL to download exported data | [optional] 
**Notes** | Pointer to **string** |  | [optional] 

## Methods

### NewGDPRRequest

`func NewGDPRRequest(requestId string, guestId string, type_ string, ) *GDPRRequest`

NewGDPRRequest instantiates a new GDPRRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGDPRRequestWithDefaults

`func NewGDPRRequestWithDefaults() *GDPRRequest`

NewGDPRRequestWithDefaults instantiates a new GDPRRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *GDPRRequest) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *GDPRRequest) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *GDPRRequest) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.


### GetGuestId

`func (o *GDPRRequest) GetGuestId() string`

GetGuestId returns the GuestId field if non-nil, zero value otherwise.

### GetGuestIdOk

`func (o *GDPRRequest) GetGuestIdOk() (*string, bool)`

GetGuestIdOk returns a tuple with the GuestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestId

`func (o *GDPRRequest) SetGuestId(v string)`

SetGuestId sets GuestId field to given value.


### GetType

`func (o *GDPRRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *GDPRRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *GDPRRequest) SetType(v string)`

SetType sets Type field to given value.


### GetStatus

`func (o *GDPRRequest) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GDPRRequest) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GDPRRequest) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GDPRRequest) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetRequestedAt

`func (o *GDPRRequest) GetRequestedAt() time.Time`

GetRequestedAt returns the RequestedAt field if non-nil, zero value otherwise.

### GetRequestedAtOk

`func (o *GDPRRequest) GetRequestedAtOk() (*time.Time, bool)`

GetRequestedAtOk returns a tuple with the RequestedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedAt

`func (o *GDPRRequest) SetRequestedAt(v time.Time)`

SetRequestedAt sets RequestedAt field to given value.

### HasRequestedAt

`func (o *GDPRRequest) HasRequestedAt() bool`

HasRequestedAt returns a boolean if a field has been set.

### GetCompletedAt

`func (o *GDPRRequest) GetCompletedAt() time.Time`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *GDPRRequest) GetCompletedAtOk() (*time.Time, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *GDPRRequest) SetCompletedAt(v time.Time)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *GDPRRequest) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.

### GetDataPackageUrl

`func (o *GDPRRequest) GetDataPackageUrl() string`

GetDataPackageUrl returns the DataPackageUrl field if non-nil, zero value otherwise.

### GetDataPackageUrlOk

`func (o *GDPRRequest) GetDataPackageUrlOk() (*string, bool)`

GetDataPackageUrlOk returns a tuple with the DataPackageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataPackageUrl

`func (o *GDPRRequest) SetDataPackageUrl(v string)`

SetDataPackageUrl sets DataPackageUrl field to given value.

### HasDataPackageUrl

`func (o *GDPRRequest) HasDataPackageUrl() bool`

HasDataPackageUrl returns a boolean if a field has been set.

### GetNotes

`func (o *GDPRRequest) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *GDPRRequest) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *GDPRRequest) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *GDPRRequest) HasNotes() bool`

HasNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


