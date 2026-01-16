# AddIncidentActionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Action** | **string** |  | 
**AssignedTo** | Pointer to **string** |  | [optional] 

## Methods

### NewAddIncidentActionRequest

`func NewAddIncidentActionRequest(action string, ) *AddIncidentActionRequest`

NewAddIncidentActionRequest instantiates a new AddIncidentActionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddIncidentActionRequestWithDefaults

`func NewAddIncidentActionRequestWithDefaults() *AddIncidentActionRequest`

NewAddIncidentActionRequestWithDefaults instantiates a new AddIncidentActionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAction

`func (o *AddIncidentActionRequest) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *AddIncidentActionRequest) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *AddIncidentActionRequest) SetAction(v string)`

SetAction sets Action field to given value.


### GetAssignedTo

`func (o *AddIncidentActionRequest) GetAssignedTo() string`

GetAssignedTo returns the AssignedTo field if non-nil, zero value otherwise.

### GetAssignedToOk

`func (o *AddIncidentActionRequest) GetAssignedToOk() (*string, bool)`

GetAssignedToOk returns a tuple with the AssignedTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedTo

`func (o *AddIncidentActionRequest) SetAssignedTo(v string)`

SetAssignedTo sets AssignedTo field to given value.

### HasAssignedTo

`func (o *AddIncidentActionRequest) HasAssignedTo() bool`

HasAssignedTo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


