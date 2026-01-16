# PropertyPolicies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckInTime** | Pointer to **string** | Default check-in time (HH:mm) | [optional] 
**CheckOutTime** | Pointer to **string** | Default check-out time (HH:mm) | [optional] 
**LateCheckoutFee** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**CancellationPolicy** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**ChildPolicy** | Pointer to [**PropertyPoliciesAllOfChildPolicy**](PropertyPoliciesAllOfChildPolicy.md) |  | [optional] 
**PetPolicy** | Pointer to [**PropertyPoliciesAllOfPetPolicy**](PropertyPoliciesAllOfPetPolicy.md) |  | [optional] 
**SmokingPolicy** | Pointer to **string** |  | [optional] [default to "NON_SMOKING"]

## Methods

### NewPropertyPolicies

`func NewPropertyPolicies() *PropertyPolicies`

NewPropertyPolicies instantiates a new PropertyPolicies object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPropertyPoliciesWithDefaults

`func NewPropertyPoliciesWithDefaults() *PropertyPolicies`

NewPropertyPoliciesWithDefaults instantiates a new PropertyPolicies object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckInTime

`func (o *PropertyPolicies) GetCheckInTime() string`

GetCheckInTime returns the CheckInTime field if non-nil, zero value otherwise.

### GetCheckInTimeOk

`func (o *PropertyPolicies) GetCheckInTimeOk() (*string, bool)`

GetCheckInTimeOk returns a tuple with the CheckInTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckInTime

`func (o *PropertyPolicies) SetCheckInTime(v string)`

SetCheckInTime sets CheckInTime field to given value.

### HasCheckInTime

`func (o *PropertyPolicies) HasCheckInTime() bool`

HasCheckInTime returns a boolean if a field has been set.

### GetCheckOutTime

`func (o *PropertyPolicies) GetCheckOutTime() string`

GetCheckOutTime returns the CheckOutTime field if non-nil, zero value otherwise.

### GetCheckOutTimeOk

`func (o *PropertyPolicies) GetCheckOutTimeOk() (*string, bool)`

GetCheckOutTimeOk returns a tuple with the CheckOutTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckOutTime

`func (o *PropertyPolicies) SetCheckOutTime(v string)`

SetCheckOutTime sets CheckOutTime field to given value.

### HasCheckOutTime

`func (o *PropertyPolicies) HasCheckOutTime() bool`

HasCheckOutTime returns a boolean if a field has been set.

### GetLateCheckoutFee

`func (o *PropertyPolicies) GetLateCheckoutFee() Model0`

GetLateCheckoutFee returns the LateCheckoutFee field if non-nil, zero value otherwise.

### GetLateCheckoutFeeOk

`func (o *PropertyPolicies) GetLateCheckoutFeeOk() (*Model0, bool)`

GetLateCheckoutFeeOk returns a tuple with the LateCheckoutFee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLateCheckoutFee

`func (o *PropertyPolicies) SetLateCheckoutFee(v Model0)`

SetLateCheckoutFee sets LateCheckoutFee field to given value.

### HasLateCheckoutFee

`func (o *PropertyPolicies) HasLateCheckoutFee() bool`

HasLateCheckoutFee returns a boolean if a field has been set.

### GetCancellationPolicy

`func (o *PropertyPolicies) GetCancellationPolicy() Model0`

GetCancellationPolicy returns the CancellationPolicy field if non-nil, zero value otherwise.

### GetCancellationPolicyOk

`func (o *PropertyPolicies) GetCancellationPolicyOk() (*Model0, bool)`

GetCancellationPolicyOk returns a tuple with the CancellationPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationPolicy

`func (o *PropertyPolicies) SetCancellationPolicy(v Model0)`

SetCancellationPolicy sets CancellationPolicy field to given value.

### HasCancellationPolicy

`func (o *PropertyPolicies) HasCancellationPolicy() bool`

HasCancellationPolicy returns a boolean if a field has been set.

### GetChildPolicy

`func (o *PropertyPolicies) GetChildPolicy() PropertyPoliciesAllOfChildPolicy`

GetChildPolicy returns the ChildPolicy field if non-nil, zero value otherwise.

### GetChildPolicyOk

`func (o *PropertyPolicies) GetChildPolicyOk() (*PropertyPoliciesAllOfChildPolicy, bool)`

GetChildPolicyOk returns a tuple with the ChildPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildPolicy

`func (o *PropertyPolicies) SetChildPolicy(v PropertyPoliciesAllOfChildPolicy)`

SetChildPolicy sets ChildPolicy field to given value.

### HasChildPolicy

`func (o *PropertyPolicies) HasChildPolicy() bool`

HasChildPolicy returns a boolean if a field has been set.

### GetPetPolicy

`func (o *PropertyPolicies) GetPetPolicy() PropertyPoliciesAllOfPetPolicy`

GetPetPolicy returns the PetPolicy field if non-nil, zero value otherwise.

### GetPetPolicyOk

`func (o *PropertyPolicies) GetPetPolicyOk() (*PropertyPoliciesAllOfPetPolicy, bool)`

GetPetPolicyOk returns a tuple with the PetPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPetPolicy

`func (o *PropertyPolicies) SetPetPolicy(v PropertyPoliciesAllOfPetPolicy)`

SetPetPolicy sets PetPolicy field to given value.

### HasPetPolicy

`func (o *PropertyPolicies) HasPetPolicy() bool`

HasPetPolicy returns a boolean if a field has been set.

### GetSmokingPolicy

`func (o *PropertyPolicies) GetSmokingPolicy() string`

GetSmokingPolicy returns the SmokingPolicy field if non-nil, zero value otherwise.

### GetSmokingPolicyOk

`func (o *PropertyPolicies) GetSmokingPolicyOk() (*string, bool)`

GetSmokingPolicyOk returns a tuple with the SmokingPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPolicy

`func (o *PropertyPolicies) SetSmokingPolicy(v string)`

SetSmokingPolicy sets SmokingPolicy field to given value.

### HasSmokingPolicy

`func (o *PropertyPolicies) HasSmokingPolicy() bool`

HasSmokingPolicy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


