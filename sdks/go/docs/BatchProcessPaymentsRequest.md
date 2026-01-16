# BatchProcessPaymentsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Payments** | [**[]BatchProcessPaymentsRequestPaymentsInner**](BatchProcessPaymentsRequestPaymentsInner.md) |  | 

## Methods

### NewBatchProcessPaymentsRequest

`func NewBatchProcessPaymentsRequest(payments []BatchProcessPaymentsRequestPaymentsInner, ) *BatchProcessPaymentsRequest`

NewBatchProcessPaymentsRequest instantiates a new BatchProcessPaymentsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatchProcessPaymentsRequestWithDefaults

`func NewBatchProcessPaymentsRequestWithDefaults() *BatchProcessPaymentsRequest`

NewBatchProcessPaymentsRequestWithDefaults instantiates a new BatchProcessPaymentsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPayments

`func (o *BatchProcessPaymentsRequest) GetPayments() []BatchProcessPaymentsRequestPaymentsInner`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *BatchProcessPaymentsRequest) GetPaymentsOk() (*[]BatchProcessPaymentsRequestPaymentsInner, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *BatchProcessPaymentsRequest) SetPayments(v []BatchProcessPaymentsRequestPaymentsInner)`

SetPayments sets Payments field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


