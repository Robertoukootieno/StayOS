# PurchaseOrderAllOfTax

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **string** | Decimal amount (always 2 decimal places) | 
**Currency** | **string** | ISO 4217 currency code | 

## Methods

### NewPurchaseOrderAllOfTax

`func NewPurchaseOrderAllOfTax(amount string, currency string, ) *PurchaseOrderAllOfTax`

NewPurchaseOrderAllOfTax instantiates a new PurchaseOrderAllOfTax object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPurchaseOrderAllOfTaxWithDefaults

`func NewPurchaseOrderAllOfTaxWithDefaults() *PurchaseOrderAllOfTax`

NewPurchaseOrderAllOfTaxWithDefaults instantiates a new PurchaseOrderAllOfTax object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *PurchaseOrderAllOfTax) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PurchaseOrderAllOfTax) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PurchaseOrderAllOfTax) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *PurchaseOrderAllOfTax) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PurchaseOrderAllOfTax) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PurchaseOrderAllOfTax) SetCurrency(v string)`

SetCurrency sets Currency field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


