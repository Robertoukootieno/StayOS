# InitiateServiceRecoveryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Actions** | Pointer to **[]string** |  | [optional] 
**Compensation** | Pointer to [**Money**](Money.md) |  | [optional] 
**Notes** | Pointer to **string** |  | [optional] 

## Methods

### NewInitiateServiceRecoveryRequest

`func NewInitiateServiceRecoveryRequest() *InitiateServiceRecoveryRequest`

NewInitiateServiceRecoveryRequest instantiates a new InitiateServiceRecoveryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInitiateServiceRecoveryRequestWithDefaults

`func NewInitiateServiceRecoveryRequestWithDefaults() *InitiateServiceRecoveryRequest`

NewInitiateServiceRecoveryRequestWithDefaults instantiates a new InitiateServiceRecoveryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActions

`func (o *InitiateServiceRecoveryRequest) GetActions() []string`

GetActions returns the Actions field if non-nil, zero value otherwise.

### GetActionsOk

`func (o *InitiateServiceRecoveryRequest) GetActionsOk() (*[]string, bool)`

GetActionsOk returns a tuple with the Actions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActions

`func (o *InitiateServiceRecoveryRequest) SetActions(v []string)`

SetActions sets Actions field to given value.

### HasActions

`func (o *InitiateServiceRecoveryRequest) HasActions() bool`

HasActions returns a boolean if a field has been set.

### GetCompensation

`func (o *InitiateServiceRecoveryRequest) GetCompensation() Money`

GetCompensation returns the Compensation field if non-nil, zero value otherwise.

### GetCompensationOk

`func (o *InitiateServiceRecoveryRequest) GetCompensationOk() (*Money, bool)`

GetCompensationOk returns a tuple with the Compensation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompensation

`func (o *InitiateServiceRecoveryRequest) SetCompensation(v Money)`

SetCompensation sets Compensation field to given value.

### HasCompensation

`func (o *InitiateServiceRecoveryRequest) HasCompensation() bool`

HasCompensation returns a boolean if a field has been set.

### GetNotes

`func (o *InitiateServiceRecoveryRequest) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *InitiateServiceRecoveryRequest) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *InitiateServiceRecoveryRequest) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *InitiateServiceRecoveryRequest) HasNotes() bool`

HasNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


