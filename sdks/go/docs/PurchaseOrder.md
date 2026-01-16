# PurchaseOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PoId** | **string** |  | [readonly] 
**PoNumber** | Pointer to **string** | Human-readable PO number | [optional] [readonly] 
**PropertyId** | **string** |  | 
**SupplierId** | **string** |  | 
**Status** | **string** |  | 
**Items** | Pointer to [**[]PurchaseOrderAllOfItems**](PurchaseOrderAllOfItems.md) |  | [optional] 
**Subtotal** | Pointer to [**PurchaseOrderAllOfSubtotal**](PurchaseOrderAllOfSubtotal.md) |  | [optional] 
**Tax** | Pointer to [**PurchaseOrderAllOfTax**](PurchaseOrderAllOfTax.md) |  | [optional] 
**Total** | Pointer to [**PurchaseOrderAllOfTotal**](PurchaseOrderAllOfTotal.md) |  | [optional] 
**DeliveryAddress** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**RequestedDeliveryDate** | Pointer to **string** |  | [optional] 
**ActualDeliveryDate** | Pointer to **string** |  | [optional] 
**ApprovedBy** | Pointer to **string** |  | [optional] 
**ApprovedAt** | Pointer to **time.Time** |  | [optional] 
**SubmittedAt** | Pointer to **time.Time** |  | [optional] 
**Notes** | Pointer to **string** |  | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewPurchaseOrder

`func NewPurchaseOrder(poId string, propertyId string, supplierId string, status string, ) *PurchaseOrder`

NewPurchaseOrder instantiates a new PurchaseOrder object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPurchaseOrderWithDefaults

`func NewPurchaseOrderWithDefaults() *PurchaseOrder`

NewPurchaseOrderWithDefaults instantiates a new PurchaseOrder object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPoId

`func (o *PurchaseOrder) GetPoId() string`

GetPoId returns the PoId field if non-nil, zero value otherwise.

### GetPoIdOk

`func (o *PurchaseOrder) GetPoIdOk() (*string, bool)`

GetPoIdOk returns a tuple with the PoId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoId

`func (o *PurchaseOrder) SetPoId(v string)`

SetPoId sets PoId field to given value.


### GetPoNumber

`func (o *PurchaseOrder) GetPoNumber() string`

GetPoNumber returns the PoNumber field if non-nil, zero value otherwise.

### GetPoNumberOk

`func (o *PurchaseOrder) GetPoNumberOk() (*string, bool)`

GetPoNumberOk returns a tuple with the PoNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoNumber

`func (o *PurchaseOrder) SetPoNumber(v string)`

SetPoNumber sets PoNumber field to given value.

### HasPoNumber

`func (o *PurchaseOrder) HasPoNumber() bool`

HasPoNumber returns a boolean if a field has been set.

### GetPropertyId

`func (o *PurchaseOrder) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *PurchaseOrder) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *PurchaseOrder) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetSupplierId

`func (o *PurchaseOrder) GetSupplierId() string`

GetSupplierId returns the SupplierId field if non-nil, zero value otherwise.

### GetSupplierIdOk

`func (o *PurchaseOrder) GetSupplierIdOk() (*string, bool)`

GetSupplierIdOk returns a tuple with the SupplierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupplierId

`func (o *PurchaseOrder) SetSupplierId(v string)`

SetSupplierId sets SupplierId field to given value.


### GetStatus

`func (o *PurchaseOrder) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PurchaseOrder) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PurchaseOrder) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetItems

`func (o *PurchaseOrder) GetItems() []PurchaseOrderAllOfItems`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *PurchaseOrder) GetItemsOk() (*[]PurchaseOrderAllOfItems, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *PurchaseOrder) SetItems(v []PurchaseOrderAllOfItems)`

SetItems sets Items field to given value.

### HasItems

`func (o *PurchaseOrder) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetSubtotal

`func (o *PurchaseOrder) GetSubtotal() PurchaseOrderAllOfSubtotal`

GetSubtotal returns the Subtotal field if non-nil, zero value otherwise.

### GetSubtotalOk

`func (o *PurchaseOrder) GetSubtotalOk() (*PurchaseOrderAllOfSubtotal, bool)`

GetSubtotalOk returns a tuple with the Subtotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtotal

`func (o *PurchaseOrder) SetSubtotal(v PurchaseOrderAllOfSubtotal)`

SetSubtotal sets Subtotal field to given value.

### HasSubtotal

`func (o *PurchaseOrder) HasSubtotal() bool`

HasSubtotal returns a boolean if a field has been set.

### GetTax

`func (o *PurchaseOrder) GetTax() PurchaseOrderAllOfTax`

GetTax returns the Tax field if non-nil, zero value otherwise.

### GetTaxOk

`func (o *PurchaseOrder) GetTaxOk() (*PurchaseOrderAllOfTax, bool)`

GetTaxOk returns a tuple with the Tax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTax

`func (o *PurchaseOrder) SetTax(v PurchaseOrderAllOfTax)`

SetTax sets Tax field to given value.

### HasTax

`func (o *PurchaseOrder) HasTax() bool`

HasTax returns a boolean if a field has been set.

### GetTotal

`func (o *PurchaseOrder) GetTotal() PurchaseOrderAllOfTotal`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *PurchaseOrder) GetTotalOk() (*PurchaseOrderAllOfTotal, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *PurchaseOrder) SetTotal(v PurchaseOrderAllOfTotal)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *PurchaseOrder) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetDeliveryAddress

`func (o *PurchaseOrder) GetDeliveryAddress() Model0`

GetDeliveryAddress returns the DeliveryAddress field if non-nil, zero value otherwise.

### GetDeliveryAddressOk

`func (o *PurchaseOrder) GetDeliveryAddressOk() (*Model0, bool)`

GetDeliveryAddressOk returns a tuple with the DeliveryAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryAddress

`func (o *PurchaseOrder) SetDeliveryAddress(v Model0)`

SetDeliveryAddress sets DeliveryAddress field to given value.

### HasDeliveryAddress

`func (o *PurchaseOrder) HasDeliveryAddress() bool`

HasDeliveryAddress returns a boolean if a field has been set.

### GetRequestedDeliveryDate

`func (o *PurchaseOrder) GetRequestedDeliveryDate() string`

GetRequestedDeliveryDate returns the RequestedDeliveryDate field if non-nil, zero value otherwise.

### GetRequestedDeliveryDateOk

`func (o *PurchaseOrder) GetRequestedDeliveryDateOk() (*string, bool)`

GetRequestedDeliveryDateOk returns a tuple with the RequestedDeliveryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedDeliveryDate

`func (o *PurchaseOrder) SetRequestedDeliveryDate(v string)`

SetRequestedDeliveryDate sets RequestedDeliveryDate field to given value.

### HasRequestedDeliveryDate

`func (o *PurchaseOrder) HasRequestedDeliveryDate() bool`

HasRequestedDeliveryDate returns a boolean if a field has been set.

### GetActualDeliveryDate

`func (o *PurchaseOrder) GetActualDeliveryDate() string`

GetActualDeliveryDate returns the ActualDeliveryDate field if non-nil, zero value otherwise.

### GetActualDeliveryDateOk

`func (o *PurchaseOrder) GetActualDeliveryDateOk() (*string, bool)`

GetActualDeliveryDateOk returns a tuple with the ActualDeliveryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualDeliveryDate

`func (o *PurchaseOrder) SetActualDeliveryDate(v string)`

SetActualDeliveryDate sets ActualDeliveryDate field to given value.

### HasActualDeliveryDate

`func (o *PurchaseOrder) HasActualDeliveryDate() bool`

HasActualDeliveryDate returns a boolean if a field has been set.

### GetApprovedBy

`func (o *PurchaseOrder) GetApprovedBy() string`

GetApprovedBy returns the ApprovedBy field if non-nil, zero value otherwise.

### GetApprovedByOk

`func (o *PurchaseOrder) GetApprovedByOk() (*string, bool)`

GetApprovedByOk returns a tuple with the ApprovedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedBy

`func (o *PurchaseOrder) SetApprovedBy(v string)`

SetApprovedBy sets ApprovedBy field to given value.

### HasApprovedBy

`func (o *PurchaseOrder) HasApprovedBy() bool`

HasApprovedBy returns a boolean if a field has been set.

### GetApprovedAt

`func (o *PurchaseOrder) GetApprovedAt() time.Time`

GetApprovedAt returns the ApprovedAt field if non-nil, zero value otherwise.

### GetApprovedAtOk

`func (o *PurchaseOrder) GetApprovedAtOk() (*time.Time, bool)`

GetApprovedAtOk returns a tuple with the ApprovedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedAt

`func (o *PurchaseOrder) SetApprovedAt(v time.Time)`

SetApprovedAt sets ApprovedAt field to given value.

### HasApprovedAt

`func (o *PurchaseOrder) HasApprovedAt() bool`

HasApprovedAt returns a boolean if a field has been set.

### GetSubmittedAt

`func (o *PurchaseOrder) GetSubmittedAt() time.Time`

GetSubmittedAt returns the SubmittedAt field if non-nil, zero value otherwise.

### GetSubmittedAtOk

`func (o *PurchaseOrder) GetSubmittedAtOk() (*time.Time, bool)`

GetSubmittedAtOk returns a tuple with the SubmittedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubmittedAt

`func (o *PurchaseOrder) SetSubmittedAt(v time.Time)`

SetSubmittedAt sets SubmittedAt field to given value.

### HasSubmittedAt

`func (o *PurchaseOrder) HasSubmittedAt() bool`

HasSubmittedAt returns a boolean if a field has been set.

### GetNotes

`func (o *PurchaseOrder) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *PurchaseOrder) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *PurchaseOrder) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *PurchaseOrder) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetMetadata

`func (o *PurchaseOrder) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PurchaseOrder) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PurchaseOrder) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *PurchaseOrder) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


