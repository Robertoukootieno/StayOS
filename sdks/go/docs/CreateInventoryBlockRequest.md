# CreateInventoryBlockRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PropertyId** | **string** |  | 
**UnitTypeId** | Pointer to **string** |  | [optional] 
**StartDate** | **string** |  | 
**EndDate** | **string** |  | 
**Quantity** | **int32** |  | 
**Reason** | **string** |  | 
**Notes** | Pointer to **string** |  | [optional] 

## Methods

### NewCreateInventoryBlockRequest

`func NewCreateInventoryBlockRequest(propertyId string, startDate string, endDate string, quantity int32, reason string, ) *CreateInventoryBlockRequest`

NewCreateInventoryBlockRequest instantiates a new CreateInventoryBlockRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateInventoryBlockRequestWithDefaults

`func NewCreateInventoryBlockRequestWithDefaults() *CreateInventoryBlockRequest`

NewCreateInventoryBlockRequestWithDefaults instantiates a new CreateInventoryBlockRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPropertyId

`func (o *CreateInventoryBlockRequest) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *CreateInventoryBlockRequest) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *CreateInventoryBlockRequest) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetUnitTypeId

`func (o *CreateInventoryBlockRequest) GetUnitTypeId() string`

GetUnitTypeId returns the UnitTypeId field if non-nil, zero value otherwise.

### GetUnitTypeIdOk

`func (o *CreateInventoryBlockRequest) GetUnitTypeIdOk() (*string, bool)`

GetUnitTypeIdOk returns a tuple with the UnitTypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitTypeId

`func (o *CreateInventoryBlockRequest) SetUnitTypeId(v string)`

SetUnitTypeId sets UnitTypeId field to given value.

### HasUnitTypeId

`func (o *CreateInventoryBlockRequest) HasUnitTypeId() bool`

HasUnitTypeId returns a boolean if a field has been set.

### GetStartDate

`func (o *CreateInventoryBlockRequest) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *CreateInventoryBlockRequest) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *CreateInventoryBlockRequest) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.


### GetEndDate

`func (o *CreateInventoryBlockRequest) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *CreateInventoryBlockRequest) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *CreateInventoryBlockRequest) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.


### GetQuantity

`func (o *CreateInventoryBlockRequest) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *CreateInventoryBlockRequest) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *CreateInventoryBlockRequest) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.


### GetReason

`func (o *CreateInventoryBlockRequest) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *CreateInventoryBlockRequest) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *CreateInventoryBlockRequest) SetReason(v string)`

SetReason sets Reason field to given value.


### GetNotes

`func (o *CreateInventoryBlockRequest) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *CreateInventoryBlockRequest) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *CreateInventoryBlockRequest) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *CreateInventoryBlockRequest) HasNotes() bool`

HasNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


