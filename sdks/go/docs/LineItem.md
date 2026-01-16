# LineItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LineItemId** | **string** |  | [readonly] 
**Description** | **string** |  | 
**Category** | **string** |  | 
**Amount** | [**Model0**](Model0.md) |  | 
**Quantity** | Pointer to **int32** |  | [optional] [default to 1]
**UnitPrice** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Date** | Pointer to **string** |  | [optional] 
**IsVoided** | Pointer to **bool** |  | [optional] [readonly] [default to false]
**VoidedAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**VoidedBy** | Pointer to **string** |  | [optional] [readonly] 
**VoidReason** | Pointer to **string** |  | [optional] 

## Methods

### NewLineItem

`func NewLineItem(lineItemId string, description string, category string, amount Model0, ) *LineItem`

NewLineItem instantiates a new LineItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLineItemWithDefaults

`func NewLineItemWithDefaults() *LineItem`

NewLineItemWithDefaults instantiates a new LineItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLineItemId

`func (o *LineItem) GetLineItemId() string`

GetLineItemId returns the LineItemId field if non-nil, zero value otherwise.

### GetLineItemIdOk

`func (o *LineItem) GetLineItemIdOk() (*string, bool)`

GetLineItemIdOk returns a tuple with the LineItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineItemId

`func (o *LineItem) SetLineItemId(v string)`

SetLineItemId sets LineItemId field to given value.


### GetDescription

`func (o *LineItem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *LineItem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *LineItem) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetCategory

`func (o *LineItem) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *LineItem) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *LineItem) SetCategory(v string)`

SetCategory sets Category field to given value.


### GetAmount

`func (o *LineItem) GetAmount() Model0`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *LineItem) GetAmountOk() (*Model0, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *LineItem) SetAmount(v Model0)`

SetAmount sets Amount field to given value.


### GetQuantity

`func (o *LineItem) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *LineItem) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *LineItem) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *LineItem) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetUnitPrice

`func (o *LineItem) GetUnitPrice() Model0`

GetUnitPrice returns the UnitPrice field if non-nil, zero value otherwise.

### GetUnitPriceOk

`func (o *LineItem) GetUnitPriceOk() (*Model0, bool)`

GetUnitPriceOk returns a tuple with the UnitPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitPrice

`func (o *LineItem) SetUnitPrice(v Model0)`

SetUnitPrice sets UnitPrice field to given value.

### HasUnitPrice

`func (o *LineItem) HasUnitPrice() bool`

HasUnitPrice returns a boolean if a field has been set.

### GetDate

`func (o *LineItem) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *LineItem) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *LineItem) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *LineItem) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetIsVoided

`func (o *LineItem) GetIsVoided() bool`

GetIsVoided returns the IsVoided field if non-nil, zero value otherwise.

### GetIsVoidedOk

`func (o *LineItem) GetIsVoidedOk() (*bool, bool)`

GetIsVoidedOk returns a tuple with the IsVoided field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVoided

`func (o *LineItem) SetIsVoided(v bool)`

SetIsVoided sets IsVoided field to given value.

### HasIsVoided

`func (o *LineItem) HasIsVoided() bool`

HasIsVoided returns a boolean if a field has been set.

### GetVoidedAt

`func (o *LineItem) GetVoidedAt() time.Time`

GetVoidedAt returns the VoidedAt field if non-nil, zero value otherwise.

### GetVoidedAtOk

`func (o *LineItem) GetVoidedAtOk() (*time.Time, bool)`

GetVoidedAtOk returns a tuple with the VoidedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoidedAt

`func (o *LineItem) SetVoidedAt(v time.Time)`

SetVoidedAt sets VoidedAt field to given value.

### HasVoidedAt

`func (o *LineItem) HasVoidedAt() bool`

HasVoidedAt returns a boolean if a field has been set.

### GetVoidedBy

`func (o *LineItem) GetVoidedBy() string`

GetVoidedBy returns the VoidedBy field if non-nil, zero value otherwise.

### GetVoidedByOk

`func (o *LineItem) GetVoidedByOk() (*string, bool)`

GetVoidedByOk returns a tuple with the VoidedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoidedBy

`func (o *LineItem) SetVoidedBy(v string)`

SetVoidedBy sets VoidedBy field to given value.

### HasVoidedBy

`func (o *LineItem) HasVoidedBy() bool`

HasVoidedBy returns a boolean if a field has been set.

### GetVoidReason

`func (o *LineItem) GetVoidReason() string`

GetVoidReason returns the VoidReason field if non-nil, zero value otherwise.

### GetVoidReasonOk

`func (o *LineItem) GetVoidReasonOk() (*string, bool)`

GetVoidReasonOk returns a tuple with the VoidReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoidReason

`func (o *LineItem) SetVoidReason(v string)`

SetVoidReason sets VoidReason field to given value.

### HasVoidReason

`func (o *LineItem) HasVoidReason() bool`

HasVoidReason returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


