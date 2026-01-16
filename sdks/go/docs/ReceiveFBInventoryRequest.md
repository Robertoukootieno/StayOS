# ReceiveFBInventoryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Quantity** | **float32** |  | 
**Notes** | Pointer to **string** |  | [optional] 

## Methods

### NewReceiveFBInventoryRequest

`func NewReceiveFBInventoryRequest(quantity float32, ) *ReceiveFBInventoryRequest`

NewReceiveFBInventoryRequest instantiates a new ReceiveFBInventoryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReceiveFBInventoryRequestWithDefaults

`func NewReceiveFBInventoryRequestWithDefaults() *ReceiveFBInventoryRequest`

NewReceiveFBInventoryRequestWithDefaults instantiates a new ReceiveFBInventoryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuantity

`func (o *ReceiveFBInventoryRequest) GetQuantity() float32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ReceiveFBInventoryRequest) GetQuantityOk() (*float32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ReceiveFBInventoryRequest) SetQuantity(v float32)`

SetQuantity sets Quantity field to given value.


### GetNotes

`func (o *ReceiveFBInventoryRequest) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *ReceiveFBInventoryRequest) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *ReceiveFBInventoryRequest) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *ReceiveFBInventoryRequest) HasNotes() bool`

HasNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


