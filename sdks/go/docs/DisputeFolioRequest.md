# DisputeFolioRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reason** | **string** |  | 
**Amount** | Pointer to [**Money**](Money.md) |  | [optional] 
**LineItemIds** | Pointer to **[]string** |  | [optional] 

## Methods

### NewDisputeFolioRequest

`func NewDisputeFolioRequest(reason string, ) *DisputeFolioRequest`

NewDisputeFolioRequest instantiates a new DisputeFolioRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisputeFolioRequestWithDefaults

`func NewDisputeFolioRequestWithDefaults() *DisputeFolioRequest`

NewDisputeFolioRequestWithDefaults instantiates a new DisputeFolioRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReason

`func (o *DisputeFolioRequest) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *DisputeFolioRequest) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *DisputeFolioRequest) SetReason(v string)`

SetReason sets Reason field to given value.


### GetAmount

`func (o *DisputeFolioRequest) GetAmount() Money`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *DisputeFolioRequest) GetAmountOk() (*Money, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *DisputeFolioRequest) SetAmount(v Money)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *DisputeFolioRequest) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetLineItemIds

`func (o *DisputeFolioRequest) GetLineItemIds() []string`

GetLineItemIds returns the LineItemIds field if non-nil, zero value otherwise.

### GetLineItemIdsOk

`func (o *DisputeFolioRequest) GetLineItemIdsOk() (*[]string, bool)`

GetLineItemIdsOk returns a tuple with the LineItemIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineItemIds

`func (o *DisputeFolioRequest) SetLineItemIds(v []string)`

SetLineItemIds sets LineItemIds field to given value.

### HasLineItemIds

`func (o *DisputeFolioRequest) HasLineItemIds() bool`

HasLineItemIds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


