# RefundPaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | [**Money**](Money.md) |  | 
**Reason** | Pointer to **string** |  | [optional] 

## Methods

### NewRefundPaymentRequest

`func NewRefundPaymentRequest(amount Money, ) *RefundPaymentRequest`

NewRefundPaymentRequest instantiates a new RefundPaymentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundPaymentRequestWithDefaults

`func NewRefundPaymentRequestWithDefaults() *RefundPaymentRequest`

NewRefundPaymentRequestWithDefaults instantiates a new RefundPaymentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *RefundPaymentRequest) GetAmount() Money`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *RefundPaymentRequest) GetAmountOk() (*Money, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *RefundPaymentRequest) SetAmount(v Money)`

SetAmount sets Amount field to given value.


### GetReason

`func (o *RefundPaymentRequest) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *RefundPaymentRequest) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *RefundPaymentRequest) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *RefundPaymentRequest) HasReason() bool`

HasReason returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


