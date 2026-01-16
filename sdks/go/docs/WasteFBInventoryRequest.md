# WasteFBInventoryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Quantity** | **float32** |  | 
**Reason** | **string** |  | 
**Notes** | Pointer to **string** |  | [optional] 

## Methods

### NewWasteFBInventoryRequest

`func NewWasteFBInventoryRequest(quantity float32, reason string, ) *WasteFBInventoryRequest`

NewWasteFBInventoryRequest instantiates a new WasteFBInventoryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWasteFBInventoryRequestWithDefaults

`func NewWasteFBInventoryRequestWithDefaults() *WasteFBInventoryRequest`

NewWasteFBInventoryRequestWithDefaults instantiates a new WasteFBInventoryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuantity

`func (o *WasteFBInventoryRequest) GetQuantity() float32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *WasteFBInventoryRequest) GetQuantityOk() (*float32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *WasteFBInventoryRequest) SetQuantity(v float32)`

SetQuantity sets Quantity field to given value.


### GetReason

`func (o *WasteFBInventoryRequest) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *WasteFBInventoryRequest) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *WasteFBInventoryRequest) SetReason(v string)`

SetReason sets Reason field to given value.


### GetNotes

`func (o *WasteFBInventoryRequest) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *WasteFBInventoryRequest) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *WasteFBInventoryRequest) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *WasteFBInventoryRequest) HasNotes() bool`

HasNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


