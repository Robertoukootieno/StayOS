# Folio

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioId** | **string** |  | [readonly] 
**PropertyId** | **string** |  | 
**GuestId** | **string** |  | 
**StayId** | Pointer to **string** |  | [optional] 
**ReservationId** | Pointer to **string** |  | [optional] 
**FolioNumber** | Pointer to **string** | Human-readable folio number | [optional] [readonly] 
**Status** | **string** |  | 
**LineItems** | Pointer to [**[]Model0**](Model0.md) |  | [optional] 
**Subtotal** | Pointer to [**FolioAllOfSubtotal**](FolioAllOfSubtotal.md) |  | [optional] 
**Taxes** | Pointer to [**FolioAllOfTaxes**](FolioAllOfTaxes.md) |  | [optional] 
**Fees** | Pointer to [**FolioAllOfFees**](FolioAllOfFees.md) |  | [optional] 
**Total** | Pointer to [**FolioAllOfTotal**](FolioAllOfTotal.md) |  | [optional] 
**Balance** | Pointer to [**FolioAllOfBalance**](FolioAllOfBalance.md) |  | [optional] 
**Payments** | Pointer to [**[]Model0**](Model0.md) |  | [optional] 
**ClosedAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Links** | Pointer to [**FolioAllOfLinks**](FolioAllOfLinks.md) |  | [optional] 

## Methods

### NewFolio

`func NewFolio(folioId string, propertyId string, guestId string, status string, ) *Folio`

NewFolio instantiates a new Folio object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioWithDefaults

`func NewFolioWithDefaults() *Folio`

NewFolioWithDefaults instantiates a new Folio object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioId

`func (o *Folio) GetFolioId() string`

GetFolioId returns the FolioId field if non-nil, zero value otherwise.

### GetFolioIdOk

`func (o *Folio) GetFolioIdOk() (*string, bool)`

GetFolioIdOk returns a tuple with the FolioId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioId

`func (o *Folio) SetFolioId(v string)`

SetFolioId sets FolioId field to given value.


### GetPropertyId

`func (o *Folio) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *Folio) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *Folio) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetGuestId

`func (o *Folio) GetGuestId() string`

GetGuestId returns the GuestId field if non-nil, zero value otherwise.

### GetGuestIdOk

`func (o *Folio) GetGuestIdOk() (*string, bool)`

GetGuestIdOk returns a tuple with the GuestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestId

`func (o *Folio) SetGuestId(v string)`

SetGuestId sets GuestId field to given value.


### GetStayId

`func (o *Folio) GetStayId() string`

GetStayId returns the StayId field if non-nil, zero value otherwise.

### GetStayIdOk

`func (o *Folio) GetStayIdOk() (*string, bool)`

GetStayIdOk returns a tuple with the StayId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayId

`func (o *Folio) SetStayId(v string)`

SetStayId sets StayId field to given value.

### HasStayId

`func (o *Folio) HasStayId() bool`

HasStayId returns a boolean if a field has been set.

### GetReservationId

`func (o *Folio) GetReservationId() string`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *Folio) GetReservationIdOk() (*string, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *Folio) SetReservationId(v string)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *Folio) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetFolioNumber

`func (o *Folio) GetFolioNumber() string`

GetFolioNumber returns the FolioNumber field if non-nil, zero value otherwise.

### GetFolioNumberOk

`func (o *Folio) GetFolioNumberOk() (*string, bool)`

GetFolioNumberOk returns a tuple with the FolioNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNumber

`func (o *Folio) SetFolioNumber(v string)`

SetFolioNumber sets FolioNumber field to given value.

### HasFolioNumber

`func (o *Folio) HasFolioNumber() bool`

HasFolioNumber returns a boolean if a field has been set.

### GetStatus

`func (o *Folio) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Folio) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Folio) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetLineItems

`func (o *Folio) GetLineItems() []Model0`

GetLineItems returns the LineItems field if non-nil, zero value otherwise.

### GetLineItemsOk

`func (o *Folio) GetLineItemsOk() (*[]Model0, bool)`

GetLineItemsOk returns a tuple with the LineItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineItems

`func (o *Folio) SetLineItems(v []Model0)`

SetLineItems sets LineItems field to given value.

### HasLineItems

`func (o *Folio) HasLineItems() bool`

HasLineItems returns a boolean if a field has been set.

### GetSubtotal

`func (o *Folio) GetSubtotal() FolioAllOfSubtotal`

GetSubtotal returns the Subtotal field if non-nil, zero value otherwise.

### GetSubtotalOk

`func (o *Folio) GetSubtotalOk() (*FolioAllOfSubtotal, bool)`

GetSubtotalOk returns a tuple with the Subtotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtotal

`func (o *Folio) SetSubtotal(v FolioAllOfSubtotal)`

SetSubtotal sets Subtotal field to given value.

### HasSubtotal

`func (o *Folio) HasSubtotal() bool`

HasSubtotal returns a boolean if a field has been set.

### GetTaxes

`func (o *Folio) GetTaxes() FolioAllOfTaxes`

GetTaxes returns the Taxes field if non-nil, zero value otherwise.

### GetTaxesOk

`func (o *Folio) GetTaxesOk() (*FolioAllOfTaxes, bool)`

GetTaxesOk returns a tuple with the Taxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxes

`func (o *Folio) SetTaxes(v FolioAllOfTaxes)`

SetTaxes sets Taxes field to given value.

### HasTaxes

`func (o *Folio) HasTaxes() bool`

HasTaxes returns a boolean if a field has been set.

### GetFees

`func (o *Folio) GetFees() FolioAllOfFees`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *Folio) GetFeesOk() (*FolioAllOfFees, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *Folio) SetFees(v FolioAllOfFees)`

SetFees sets Fees field to given value.

### HasFees

`func (o *Folio) HasFees() bool`

HasFees returns a boolean if a field has been set.

### GetTotal

`func (o *Folio) GetTotal() FolioAllOfTotal`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *Folio) GetTotalOk() (*FolioAllOfTotal, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *Folio) SetTotal(v FolioAllOfTotal)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *Folio) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetBalance

`func (o *Folio) GetBalance() FolioAllOfBalance`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *Folio) GetBalanceOk() (*FolioAllOfBalance, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *Folio) SetBalance(v FolioAllOfBalance)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *Folio) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetPayments

`func (o *Folio) GetPayments() []Model0`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *Folio) GetPaymentsOk() (*[]Model0, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *Folio) SetPayments(v []Model0)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *Folio) HasPayments() bool`

HasPayments returns a boolean if a field has been set.

### GetClosedAt

`func (o *Folio) GetClosedAt() time.Time`

GetClosedAt returns the ClosedAt field if non-nil, zero value otherwise.

### GetClosedAtOk

`func (o *Folio) GetClosedAtOk() (*time.Time, bool)`

GetClosedAtOk returns a tuple with the ClosedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClosedAt

`func (o *Folio) SetClosedAt(v time.Time)`

SetClosedAt sets ClosedAt field to given value.

### HasClosedAt

`func (o *Folio) HasClosedAt() bool`

HasClosedAt returns a boolean if a field has been set.

### GetMetadata

`func (o *Folio) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Folio) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Folio) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Folio) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetLinks

`func (o *Folio) GetLinks() FolioAllOfLinks`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Folio) GetLinksOk() (*FolioAllOfLinks, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Folio) SetLinks(v FolioAllOfLinks)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Folio) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


