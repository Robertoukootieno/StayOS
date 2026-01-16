# FolioAllOfTaxes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **string** | Decimal amount (always 2 decimal places) | 
**Currency** | **string** | ISO 4217 currency code | 

## Methods

### NewFolioAllOfTaxes

`func NewFolioAllOfTaxes(amount string, currency string, ) *FolioAllOfTaxes`

NewFolioAllOfTaxes instantiates a new FolioAllOfTaxes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioAllOfTaxesWithDefaults

`func NewFolioAllOfTaxesWithDefaults() *FolioAllOfTaxes`

NewFolioAllOfTaxesWithDefaults instantiates a new FolioAllOfTaxes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *FolioAllOfTaxes) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *FolioAllOfTaxes) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *FolioAllOfTaxes) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *FolioAllOfTaxes) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *FolioAllOfTaxes) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *FolioAllOfTaxes) SetCurrency(v string)`

SetCurrency sets Currency field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


