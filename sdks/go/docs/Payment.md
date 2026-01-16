# Payment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PaymentId** | **string** |  | [readonly] 
**FolioId** | Pointer to **string** |  | [optional] 
**Amount** | [**Model0**](Model0.md) |  | 
**Method** | **string** |  | 
**Status** | **string** |  | 
**TransactionId** | Pointer to **string** | External payment processor transaction ID | [optional] 
**CardDetails** | Pointer to [**PaymentAllOfCardDetails**](PaymentAllOfCardDetails.md) |  | [optional] 
**ProcessedAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**Refunds** | Pointer to [**[]PaymentAllOfRefunds**](PaymentAllOfRefunds.md) |  | [optional] 
**ReceiptUrl** | Pointer to **string** |  | [optional] [readonly] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewPayment

`func NewPayment(paymentId string, amount Model0, method string, status string, ) *Payment`

NewPayment instantiates a new Payment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentWithDefaults

`func NewPaymentWithDefaults() *Payment`

NewPaymentWithDefaults instantiates a new Payment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPaymentId

`func (o *Payment) GetPaymentId() string`

GetPaymentId returns the PaymentId field if non-nil, zero value otherwise.

### GetPaymentIdOk

`func (o *Payment) GetPaymentIdOk() (*string, bool)`

GetPaymentIdOk returns a tuple with the PaymentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentId

`func (o *Payment) SetPaymentId(v string)`

SetPaymentId sets PaymentId field to given value.


### GetFolioId

`func (o *Payment) GetFolioId() string`

GetFolioId returns the FolioId field if non-nil, zero value otherwise.

### GetFolioIdOk

`func (o *Payment) GetFolioIdOk() (*string, bool)`

GetFolioIdOk returns a tuple with the FolioId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioId

`func (o *Payment) SetFolioId(v string)`

SetFolioId sets FolioId field to given value.

### HasFolioId

`func (o *Payment) HasFolioId() bool`

HasFolioId returns a boolean if a field has been set.

### GetAmount

`func (o *Payment) GetAmount() Model0`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *Payment) GetAmountOk() (*Model0, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *Payment) SetAmount(v Model0)`

SetAmount sets Amount field to given value.


### GetMethod

`func (o *Payment) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *Payment) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *Payment) SetMethod(v string)`

SetMethod sets Method field to given value.


### GetStatus

`func (o *Payment) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Payment) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Payment) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetTransactionId

`func (o *Payment) GetTransactionId() string`

GetTransactionId returns the TransactionId field if non-nil, zero value otherwise.

### GetTransactionIdOk

`func (o *Payment) GetTransactionIdOk() (*string, bool)`

GetTransactionIdOk returns a tuple with the TransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionId

`func (o *Payment) SetTransactionId(v string)`

SetTransactionId sets TransactionId field to given value.

### HasTransactionId

`func (o *Payment) HasTransactionId() bool`

HasTransactionId returns a boolean if a field has been set.

### GetCardDetails

`func (o *Payment) GetCardDetails() PaymentAllOfCardDetails`

GetCardDetails returns the CardDetails field if non-nil, zero value otherwise.

### GetCardDetailsOk

`func (o *Payment) GetCardDetailsOk() (*PaymentAllOfCardDetails, bool)`

GetCardDetailsOk returns a tuple with the CardDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardDetails

`func (o *Payment) SetCardDetails(v PaymentAllOfCardDetails)`

SetCardDetails sets CardDetails field to given value.

### HasCardDetails

`func (o *Payment) HasCardDetails() bool`

HasCardDetails returns a boolean if a field has been set.

### GetProcessedAt

`func (o *Payment) GetProcessedAt() time.Time`

GetProcessedAt returns the ProcessedAt field if non-nil, zero value otherwise.

### GetProcessedAtOk

`func (o *Payment) GetProcessedAtOk() (*time.Time, bool)`

GetProcessedAtOk returns a tuple with the ProcessedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessedAt

`func (o *Payment) SetProcessedAt(v time.Time)`

SetProcessedAt sets ProcessedAt field to given value.

### HasProcessedAt

`func (o *Payment) HasProcessedAt() bool`

HasProcessedAt returns a boolean if a field has been set.

### GetRefunds

`func (o *Payment) GetRefunds() []PaymentAllOfRefunds`

GetRefunds returns the Refunds field if non-nil, zero value otherwise.

### GetRefundsOk

`func (o *Payment) GetRefundsOk() (*[]PaymentAllOfRefunds, bool)`

GetRefundsOk returns a tuple with the Refunds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefunds

`func (o *Payment) SetRefunds(v []PaymentAllOfRefunds)`

SetRefunds sets Refunds field to given value.

### HasRefunds

`func (o *Payment) HasRefunds() bool`

HasRefunds returns a boolean if a field has been set.

### GetReceiptUrl

`func (o *Payment) GetReceiptUrl() string`

GetReceiptUrl returns the ReceiptUrl field if non-nil, zero value otherwise.

### GetReceiptUrlOk

`func (o *Payment) GetReceiptUrlOk() (*string, bool)`

GetReceiptUrlOk returns a tuple with the ReceiptUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptUrl

`func (o *Payment) SetReceiptUrl(v string)`

SetReceiptUrl sets ReceiptUrl field to given value.

### HasReceiptUrl

`func (o *Payment) HasReceiptUrl() bool`

HasReceiptUrl returns a boolean if a field has been set.

### GetMetadata

`func (o *Payment) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Payment) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Payment) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Payment) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


