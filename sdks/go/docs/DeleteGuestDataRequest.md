# DeleteGuestDataRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestId** | **string** |  | 
**Confirmation** | Pointer to **bool** |  | [optional] 

## Methods

### NewDeleteGuestDataRequest

`func NewDeleteGuestDataRequest(guestId string, ) *DeleteGuestDataRequest`

NewDeleteGuestDataRequest instantiates a new DeleteGuestDataRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteGuestDataRequestWithDefaults

`func NewDeleteGuestDataRequestWithDefaults() *DeleteGuestDataRequest`

NewDeleteGuestDataRequestWithDefaults instantiates a new DeleteGuestDataRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestId

`func (o *DeleteGuestDataRequest) GetGuestId() string`

GetGuestId returns the GuestId field if non-nil, zero value otherwise.

### GetGuestIdOk

`func (o *DeleteGuestDataRequest) GetGuestIdOk() (*string, bool)`

GetGuestIdOk returns a tuple with the GuestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestId

`func (o *DeleteGuestDataRequest) SetGuestId(v string)`

SetGuestId sets GuestId field to given value.


### GetConfirmation

`func (o *DeleteGuestDataRequest) GetConfirmation() bool`

GetConfirmation returns the Confirmation field if non-nil, zero value otherwise.

### GetConfirmationOk

`func (o *DeleteGuestDataRequest) GetConfirmationOk() (*bool, bool)`

GetConfirmationOk returns a tuple with the Confirmation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmation

`func (o *DeleteGuestDataRequest) SetConfirmation(v bool)`

SetConfirmation sets Confirmation field to given value.

### HasConfirmation

`func (o *DeleteGuestDataRequest) HasConfirmation() bool`

HasConfirmation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


