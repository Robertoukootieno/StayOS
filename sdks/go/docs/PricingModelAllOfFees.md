# PricingModelAllOfFees

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Amount** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**IsOptional** | Pointer to **bool** |  | [optional] [default to false]

## Methods

### NewPricingModelAllOfFees

`func NewPricingModelAllOfFees() *PricingModelAllOfFees`

NewPricingModelAllOfFees instantiates a new PricingModelAllOfFees object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPricingModelAllOfFeesWithDefaults

`func NewPricingModelAllOfFeesWithDefaults() *PricingModelAllOfFees`

NewPricingModelAllOfFeesWithDefaults instantiates a new PricingModelAllOfFees object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PricingModelAllOfFees) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PricingModelAllOfFees) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PricingModelAllOfFees) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PricingModelAllOfFees) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *PricingModelAllOfFees) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PricingModelAllOfFees) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PricingModelAllOfFees) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *PricingModelAllOfFees) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAmount

`func (o *PricingModelAllOfFees) GetAmount() Model0`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PricingModelAllOfFees) GetAmountOk() (*Model0, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PricingModelAllOfFees) SetAmount(v Model0)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PricingModelAllOfFees) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetIsOptional

`func (o *PricingModelAllOfFees) GetIsOptional() bool`

GetIsOptional returns the IsOptional field if non-nil, zero value otherwise.

### GetIsOptionalOk

`func (o *PricingModelAllOfFees) GetIsOptionalOk() (*bool, bool)`

GetIsOptionalOk returns a tuple with the IsOptional field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsOptional

`func (o *PricingModelAllOfFees) SetIsOptional(v bool)`

SetIsOptional sets IsOptional field to given value.

### HasIsOptional

`func (o *PricingModelAllOfFees) HasIsOptional() bool`

HasIsOptional returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


