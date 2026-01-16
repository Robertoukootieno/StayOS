# Supplier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SupplierId** | **string** |  | [readonly] 
**Name** | **string** |  | 
**Category** | **string** |  | 
**Status** | **string** |  | 
**ContactInfo** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Address** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**PaymentTerms** | Pointer to **string** |  | [optional] 
**TaxId** | Pointer to **string** | Tax identification number | [optional] 
**BankDetails** | Pointer to [**SupplierAllOfBankDetails**](SupplierAllOfBankDetails.md) |  | [optional] 
**Rating** | Pointer to **float32** | Supplier performance rating | [optional] 
**Notes** | Pointer to **string** |  | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewSupplier

`func NewSupplier(supplierId string, name string, category string, status string, ) *Supplier`

NewSupplier instantiates a new Supplier object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSupplierWithDefaults

`func NewSupplierWithDefaults() *Supplier`

NewSupplierWithDefaults instantiates a new Supplier object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSupplierId

`func (o *Supplier) GetSupplierId() string`

GetSupplierId returns the SupplierId field if non-nil, zero value otherwise.

### GetSupplierIdOk

`func (o *Supplier) GetSupplierIdOk() (*string, bool)`

GetSupplierIdOk returns a tuple with the SupplierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupplierId

`func (o *Supplier) SetSupplierId(v string)`

SetSupplierId sets SupplierId field to given value.


### GetName

`func (o *Supplier) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Supplier) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Supplier) SetName(v string)`

SetName sets Name field to given value.


### GetCategory

`func (o *Supplier) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *Supplier) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *Supplier) SetCategory(v string)`

SetCategory sets Category field to given value.


### GetStatus

`func (o *Supplier) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Supplier) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Supplier) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetContactInfo

`func (o *Supplier) GetContactInfo() Model0`

GetContactInfo returns the ContactInfo field if non-nil, zero value otherwise.

### GetContactInfoOk

`func (o *Supplier) GetContactInfoOk() (*Model0, bool)`

GetContactInfoOk returns a tuple with the ContactInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactInfo

`func (o *Supplier) SetContactInfo(v Model0)`

SetContactInfo sets ContactInfo field to given value.

### HasContactInfo

`func (o *Supplier) HasContactInfo() bool`

HasContactInfo returns a boolean if a field has been set.

### GetAddress

`func (o *Supplier) GetAddress() Model0`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *Supplier) GetAddressOk() (*Model0, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *Supplier) SetAddress(v Model0)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *Supplier) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetPaymentTerms

`func (o *Supplier) GetPaymentTerms() string`

GetPaymentTerms returns the PaymentTerms field if non-nil, zero value otherwise.

### GetPaymentTermsOk

`func (o *Supplier) GetPaymentTermsOk() (*string, bool)`

GetPaymentTermsOk returns a tuple with the PaymentTerms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentTerms

`func (o *Supplier) SetPaymentTerms(v string)`

SetPaymentTerms sets PaymentTerms field to given value.

### HasPaymentTerms

`func (o *Supplier) HasPaymentTerms() bool`

HasPaymentTerms returns a boolean if a field has been set.

### GetTaxId

`func (o *Supplier) GetTaxId() string`

GetTaxId returns the TaxId field if non-nil, zero value otherwise.

### GetTaxIdOk

`func (o *Supplier) GetTaxIdOk() (*string, bool)`

GetTaxIdOk returns a tuple with the TaxId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxId

`func (o *Supplier) SetTaxId(v string)`

SetTaxId sets TaxId field to given value.

### HasTaxId

`func (o *Supplier) HasTaxId() bool`

HasTaxId returns a boolean if a field has been set.

### GetBankDetails

`func (o *Supplier) GetBankDetails() SupplierAllOfBankDetails`

GetBankDetails returns the BankDetails field if non-nil, zero value otherwise.

### GetBankDetailsOk

`func (o *Supplier) GetBankDetailsOk() (*SupplierAllOfBankDetails, bool)`

GetBankDetailsOk returns a tuple with the BankDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankDetails

`func (o *Supplier) SetBankDetails(v SupplierAllOfBankDetails)`

SetBankDetails sets BankDetails field to given value.

### HasBankDetails

`func (o *Supplier) HasBankDetails() bool`

HasBankDetails returns a boolean if a field has been set.

### GetRating

`func (o *Supplier) GetRating() float32`

GetRating returns the Rating field if non-nil, zero value otherwise.

### GetRatingOk

`func (o *Supplier) GetRatingOk() (*float32, bool)`

GetRatingOk returns a tuple with the Rating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRating

`func (o *Supplier) SetRating(v float32)`

SetRating sets Rating field to given value.

### HasRating

`func (o *Supplier) HasRating() bool`

HasRating returns a boolean if a field has been set.

### GetNotes

`func (o *Supplier) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *Supplier) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *Supplier) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *Supplier) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetMetadata

`func (o *Supplier) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Supplier) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Supplier) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Supplier) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


