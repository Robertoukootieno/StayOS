# InvoicePurchaseOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InvoiceNumber** | **string** |  | 
**Amount** | [**Money**](Money.md) |  | 
**InvoiceDate** | Pointer to **string** |  | [optional] 

## Methods

### NewInvoicePurchaseOrderRequest

`func NewInvoicePurchaseOrderRequest(invoiceNumber string, amount Money, ) *InvoicePurchaseOrderRequest`

NewInvoicePurchaseOrderRequest instantiates a new InvoicePurchaseOrderRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvoicePurchaseOrderRequestWithDefaults

`func NewInvoicePurchaseOrderRequestWithDefaults() *InvoicePurchaseOrderRequest`

NewInvoicePurchaseOrderRequestWithDefaults instantiates a new InvoicePurchaseOrderRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInvoiceNumber

`func (o *InvoicePurchaseOrderRequest) GetInvoiceNumber() string`

GetInvoiceNumber returns the InvoiceNumber field if non-nil, zero value otherwise.

### GetInvoiceNumberOk

`func (o *InvoicePurchaseOrderRequest) GetInvoiceNumberOk() (*string, bool)`

GetInvoiceNumberOk returns a tuple with the InvoiceNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNumber

`func (o *InvoicePurchaseOrderRequest) SetInvoiceNumber(v string)`

SetInvoiceNumber sets InvoiceNumber field to given value.


### GetAmount

`func (o *InvoicePurchaseOrderRequest) GetAmount() Money`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *InvoicePurchaseOrderRequest) GetAmountOk() (*Money, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *InvoicePurchaseOrderRequest) SetAmount(v Money)`

SetAmount sets Amount field to given value.


### GetInvoiceDate

`func (o *InvoicePurchaseOrderRequest) GetInvoiceDate() string`

GetInvoiceDate returns the InvoiceDate field if non-nil, zero value otherwise.

### GetInvoiceDateOk

`func (o *InvoicePurchaseOrderRequest) GetInvoiceDateOk() (*string, bool)`

GetInvoiceDateOk returns a tuple with the InvoiceDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceDate

`func (o *InvoicePurchaseOrderRequest) SetInvoiceDate(v string)`

SetInvoiceDate sets InvoiceDate field to given value.

### HasInvoiceDate

`func (o *InvoicePurchaseOrderRequest) HasInvoiceDate() bool`

HasInvoiceDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


