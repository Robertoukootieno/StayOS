# KeyCard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CardId** | **string** |  | [readonly] 
**CardNumber** | **string** | Physical card number | 
**Status** | **string** |  | 
**IssuedAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**ExpiresAt** | Pointer to **time.Time** | Card expiration | [optional] 
**AccessLevel** | Pointer to **string** |  | [optional] [default to "ROOM_ONLY"]

## Methods

### NewKeyCard

`func NewKeyCard(cardId string, cardNumber string, status string, ) *KeyCard`

NewKeyCard instantiates a new KeyCard object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKeyCardWithDefaults

`func NewKeyCardWithDefaults() *KeyCard`

NewKeyCardWithDefaults instantiates a new KeyCard object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCardId

`func (o *KeyCard) GetCardId() string`

GetCardId returns the CardId field if non-nil, zero value otherwise.

### GetCardIdOk

`func (o *KeyCard) GetCardIdOk() (*string, bool)`

GetCardIdOk returns a tuple with the CardId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardId

`func (o *KeyCard) SetCardId(v string)`

SetCardId sets CardId field to given value.


### GetCardNumber

`func (o *KeyCard) GetCardNumber() string`

GetCardNumber returns the CardNumber field if non-nil, zero value otherwise.

### GetCardNumberOk

`func (o *KeyCard) GetCardNumberOk() (*string, bool)`

GetCardNumberOk returns a tuple with the CardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumber

`func (o *KeyCard) SetCardNumber(v string)`

SetCardNumber sets CardNumber field to given value.


### GetStatus

`func (o *KeyCard) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *KeyCard) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *KeyCard) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetIssuedAt

`func (o *KeyCard) GetIssuedAt() time.Time`

GetIssuedAt returns the IssuedAt field if non-nil, zero value otherwise.

### GetIssuedAtOk

`func (o *KeyCard) GetIssuedAtOk() (*time.Time, bool)`

GetIssuedAtOk returns a tuple with the IssuedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuedAt

`func (o *KeyCard) SetIssuedAt(v time.Time)`

SetIssuedAt sets IssuedAt field to given value.

### HasIssuedAt

`func (o *KeyCard) HasIssuedAt() bool`

HasIssuedAt returns a boolean if a field has been set.

### GetExpiresAt

`func (o *KeyCard) GetExpiresAt() time.Time`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *KeyCard) GetExpiresAtOk() (*time.Time, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *KeyCard) SetExpiresAt(v time.Time)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *KeyCard) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### GetAccessLevel

`func (o *KeyCard) GetAccessLevel() string`

GetAccessLevel returns the AccessLevel field if non-nil, zero value otherwise.

### GetAccessLevelOk

`func (o *KeyCard) GetAccessLevelOk() (*string, bool)`

GetAccessLevelOk returns a tuple with the AccessLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessLevel

`func (o *KeyCard) SetAccessLevel(v string)`

SetAccessLevel sets AccessLevel field to given value.

### HasAccessLevel

`func (o *KeyCard) HasAccessLevel() bool`

HasAccessLevel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


