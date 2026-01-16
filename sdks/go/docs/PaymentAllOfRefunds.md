# PaymentAllOfRefunds

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RefundId** | Pointer to **string** |  | [optional] 
**Amount** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Reason** | Pointer to **string** |  | [optional] 
**RefundedAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewPaymentAllOfRefunds

`func NewPaymentAllOfRefunds() *PaymentAllOfRefunds`

NewPaymentAllOfRefunds instantiates a new PaymentAllOfRefunds object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentAllOfRefundsWithDefaults

`func NewPaymentAllOfRefundsWithDefaults() *PaymentAllOfRefunds`

NewPaymentAllOfRefundsWithDefaults instantiates a new PaymentAllOfRefunds object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRefundId

`func (o *PaymentAllOfRefunds) GetRefundId() string`

GetRefundId returns the RefundId field if non-nil, zero value otherwise.

### GetRefundIdOk

`func (o *PaymentAllOfRefunds) GetRefundIdOk() (*string, bool)`

GetRefundIdOk returns a tuple with the RefundId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundId

`func (o *PaymentAllOfRefunds) SetRefundId(v string)`

SetRefundId sets RefundId field to given value.

### HasRefundId

`func (o *PaymentAllOfRefunds) HasRefundId() bool`

HasRefundId returns a boolean if a field has been set.

### GetAmount

`func (o *PaymentAllOfRefunds) GetAmount() Model0`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PaymentAllOfRefunds) GetAmountOk() (*Model0, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PaymentAllOfRefunds) SetAmount(v Model0)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PaymentAllOfRefunds) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetReason

`func (o *PaymentAllOfRefunds) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *PaymentAllOfRefunds) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *PaymentAllOfRefunds) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *PaymentAllOfRefunds) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetRefundedAt

`func (o *PaymentAllOfRefunds) GetRefundedAt() time.Time`

GetRefundedAt returns the RefundedAt field if non-nil, zero value otherwise.

### GetRefundedAtOk

`func (o *PaymentAllOfRefunds) GetRefundedAtOk() (*time.Time, bool)`

GetRefundedAtOk returns a tuple with the RefundedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundedAt

`func (o *PaymentAllOfRefunds) SetRefundedAt(v time.Time)`

SetRefundedAt sets RefundedAt field to given value.

### HasRefundedAt

`func (o *PaymentAllOfRefunds) HasRefundedAt() bool`

HasRefundedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


