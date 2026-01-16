# AddFolioAdjustmentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | [**Money**](Money.md) |  | 
**Reason** | **string** |  | 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewAddFolioAdjustmentRequest

`func NewAddFolioAdjustmentRequest(amount Money, reason string, ) *AddFolioAdjustmentRequest`

NewAddFolioAdjustmentRequest instantiates a new AddFolioAdjustmentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddFolioAdjustmentRequestWithDefaults

`func NewAddFolioAdjustmentRequestWithDefaults() *AddFolioAdjustmentRequest`

NewAddFolioAdjustmentRequestWithDefaults instantiates a new AddFolioAdjustmentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *AddFolioAdjustmentRequest) GetAmount() Money`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *AddFolioAdjustmentRequest) GetAmountOk() (*Money, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *AddFolioAdjustmentRequest) SetAmount(v Money)`

SetAmount sets Amount field to given value.


### GetReason

`func (o *AddFolioAdjustmentRequest) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *AddFolioAdjustmentRequest) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *AddFolioAdjustmentRequest) SetReason(v string)`

SetReason sets Reason field to given value.


### GetType

`func (o *AddFolioAdjustmentRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AddFolioAdjustmentRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AddFolioAdjustmentRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AddFolioAdjustmentRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


