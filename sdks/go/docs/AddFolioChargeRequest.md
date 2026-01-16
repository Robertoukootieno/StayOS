# AddFolioChargeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | [**Money**](Money.md) |  | 
**Description** | **string** |  | 
**Category** | Pointer to **string** |  | [optional] 

## Methods

### NewAddFolioChargeRequest

`func NewAddFolioChargeRequest(amount Money, description string, ) *AddFolioChargeRequest`

NewAddFolioChargeRequest instantiates a new AddFolioChargeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddFolioChargeRequestWithDefaults

`func NewAddFolioChargeRequestWithDefaults() *AddFolioChargeRequest`

NewAddFolioChargeRequestWithDefaults instantiates a new AddFolioChargeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *AddFolioChargeRequest) GetAmount() Money`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *AddFolioChargeRequest) GetAmountOk() (*Money, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *AddFolioChargeRequest) SetAmount(v Money)`

SetAmount sets Amount field to given value.


### GetDescription

`func (o *AddFolioChargeRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AddFolioChargeRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AddFolioChargeRequest) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetCategory

`func (o *AddFolioChargeRequest) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *AddFolioChargeRequest) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *AddFolioChargeRequest) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *AddFolioChargeRequest) HasCategory() bool`

HasCategory returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


