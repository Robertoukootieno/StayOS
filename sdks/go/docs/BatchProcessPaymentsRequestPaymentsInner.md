# BatchProcessPaymentsRequestPaymentsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioId** | Pointer to **string** |  | [optional] 
**Amount** | Pointer to [**Money**](Money.md) |  | [optional] 
**PaymentMethod** | Pointer to **string** |  | [optional] 

## Methods

### NewBatchProcessPaymentsRequestPaymentsInner

`func NewBatchProcessPaymentsRequestPaymentsInner() *BatchProcessPaymentsRequestPaymentsInner`

NewBatchProcessPaymentsRequestPaymentsInner instantiates a new BatchProcessPaymentsRequestPaymentsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatchProcessPaymentsRequestPaymentsInnerWithDefaults

`func NewBatchProcessPaymentsRequestPaymentsInnerWithDefaults() *BatchProcessPaymentsRequestPaymentsInner`

NewBatchProcessPaymentsRequestPaymentsInnerWithDefaults instantiates a new BatchProcessPaymentsRequestPaymentsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioId

`func (o *BatchProcessPaymentsRequestPaymentsInner) GetFolioId() string`

GetFolioId returns the FolioId field if non-nil, zero value otherwise.

### GetFolioIdOk

`func (o *BatchProcessPaymentsRequestPaymentsInner) GetFolioIdOk() (*string, bool)`

GetFolioIdOk returns a tuple with the FolioId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioId

`func (o *BatchProcessPaymentsRequestPaymentsInner) SetFolioId(v string)`

SetFolioId sets FolioId field to given value.

### HasFolioId

`func (o *BatchProcessPaymentsRequestPaymentsInner) HasFolioId() bool`

HasFolioId returns a boolean if a field has been set.

### GetAmount

`func (o *BatchProcessPaymentsRequestPaymentsInner) GetAmount() Money`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *BatchProcessPaymentsRequestPaymentsInner) GetAmountOk() (*Money, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *BatchProcessPaymentsRequestPaymentsInner) SetAmount(v Money)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *BatchProcessPaymentsRequestPaymentsInner) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *BatchProcessPaymentsRequestPaymentsInner) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *BatchProcessPaymentsRequestPaymentsInner) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *BatchProcessPaymentsRequestPaymentsInner) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *BatchProcessPaymentsRequestPaymentsInner) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


