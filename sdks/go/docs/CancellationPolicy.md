# CancellationPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Refundability** | **string** |  | 
**FreeCancellationHours** | Pointer to **int32** | Hours before check-in for free cancellation | [optional] 
**PenaltySchedule** | Pointer to [**[]CancellationPolicyAllOfPenaltySchedule**](CancellationPolicyAllOfPenaltySchedule.md) |  | [optional] 

## Methods

### NewCancellationPolicy

`func NewCancellationPolicy(refundability string, ) *CancellationPolicy`

NewCancellationPolicy instantiates a new CancellationPolicy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancellationPolicyWithDefaults

`func NewCancellationPolicyWithDefaults() *CancellationPolicy`

NewCancellationPolicyWithDefaults instantiates a new CancellationPolicy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRefundability

`func (o *CancellationPolicy) GetRefundability() string`

GetRefundability returns the Refundability field if non-nil, zero value otherwise.

### GetRefundabilityOk

`func (o *CancellationPolicy) GetRefundabilityOk() (*string, bool)`

GetRefundabilityOk returns a tuple with the Refundability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundability

`func (o *CancellationPolicy) SetRefundability(v string)`

SetRefundability sets Refundability field to given value.


### GetFreeCancellationHours

`func (o *CancellationPolicy) GetFreeCancellationHours() int32`

GetFreeCancellationHours returns the FreeCancellationHours field if non-nil, zero value otherwise.

### GetFreeCancellationHoursOk

`func (o *CancellationPolicy) GetFreeCancellationHoursOk() (*int32, bool)`

GetFreeCancellationHoursOk returns a tuple with the FreeCancellationHours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFreeCancellationHours

`func (o *CancellationPolicy) SetFreeCancellationHours(v int32)`

SetFreeCancellationHours sets FreeCancellationHours field to given value.

### HasFreeCancellationHours

`func (o *CancellationPolicy) HasFreeCancellationHours() bool`

HasFreeCancellationHours returns a boolean if a field has been set.

### GetPenaltySchedule

`func (o *CancellationPolicy) GetPenaltySchedule() []CancellationPolicyAllOfPenaltySchedule`

GetPenaltySchedule returns the PenaltySchedule field if non-nil, zero value otherwise.

### GetPenaltyScheduleOk

`func (o *CancellationPolicy) GetPenaltyScheduleOk() (*[]CancellationPolicyAllOfPenaltySchedule, bool)`

GetPenaltyScheduleOk returns a tuple with the PenaltySchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPenaltySchedule

`func (o *CancellationPolicy) SetPenaltySchedule(v []CancellationPolicyAllOfPenaltySchedule)`

SetPenaltySchedule sets PenaltySchedule field to given value.

### HasPenaltySchedule

`func (o *CancellationPolicy) HasPenaltySchedule() bool`

HasPenaltySchedule returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


