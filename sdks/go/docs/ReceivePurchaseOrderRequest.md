# ReceivePurchaseOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReceivedItems** | Pointer to [**[]ReceivePurchaseOrderRequestReceivedItemsInner**](ReceivePurchaseOrderRequestReceivedItemsInner.md) |  | [optional] 
**ReceivedBy** | Pointer to **string** |  | [optional] 
**Notes** | Pointer to **string** |  | [optional] 

## Methods

### NewReceivePurchaseOrderRequest

`func NewReceivePurchaseOrderRequest() *ReceivePurchaseOrderRequest`

NewReceivePurchaseOrderRequest instantiates a new ReceivePurchaseOrderRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReceivePurchaseOrderRequestWithDefaults

`func NewReceivePurchaseOrderRequestWithDefaults() *ReceivePurchaseOrderRequest`

NewReceivePurchaseOrderRequestWithDefaults instantiates a new ReceivePurchaseOrderRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReceivedItems

`func (o *ReceivePurchaseOrderRequest) GetReceivedItems() []ReceivePurchaseOrderRequestReceivedItemsInner`

GetReceivedItems returns the ReceivedItems field if non-nil, zero value otherwise.

### GetReceivedItemsOk

`func (o *ReceivePurchaseOrderRequest) GetReceivedItemsOk() (*[]ReceivePurchaseOrderRequestReceivedItemsInner, bool)`

GetReceivedItemsOk returns a tuple with the ReceivedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceivedItems

`func (o *ReceivePurchaseOrderRequest) SetReceivedItems(v []ReceivePurchaseOrderRequestReceivedItemsInner)`

SetReceivedItems sets ReceivedItems field to given value.

### HasReceivedItems

`func (o *ReceivePurchaseOrderRequest) HasReceivedItems() bool`

HasReceivedItems returns a boolean if a field has been set.

### GetReceivedBy

`func (o *ReceivePurchaseOrderRequest) GetReceivedBy() string`

GetReceivedBy returns the ReceivedBy field if non-nil, zero value otherwise.

### GetReceivedByOk

`func (o *ReceivePurchaseOrderRequest) GetReceivedByOk() (*string, bool)`

GetReceivedByOk returns a tuple with the ReceivedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceivedBy

`func (o *ReceivePurchaseOrderRequest) SetReceivedBy(v string)`

SetReceivedBy sets ReceivedBy field to given value.

### HasReceivedBy

`func (o *ReceivePurchaseOrderRequest) HasReceivedBy() bool`

HasReceivedBy returns a boolean if a field has been set.

### GetNotes

`func (o *ReceivePurchaseOrderRequest) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *ReceivePurchaseOrderRequest) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *ReceivePurchaseOrderRequest) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *ReceivePurchaseOrderRequest) HasNotes() bool`

HasNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


