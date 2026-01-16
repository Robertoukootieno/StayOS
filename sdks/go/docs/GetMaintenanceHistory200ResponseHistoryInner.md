# GetMaintenanceHistory200ResponseHistoryInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Timestamp** | Pointer to **time.Time** |  | [optional] 
**Action** | Pointer to **string** |  | [optional] 
**PerformedBy** | Pointer to **string** |  | [optional] 
**Notes** | Pointer to **string** |  | [optional] 

## Methods

### NewGetMaintenanceHistory200ResponseHistoryInner

`func NewGetMaintenanceHistory200ResponseHistoryInner() *GetMaintenanceHistory200ResponseHistoryInner`

NewGetMaintenanceHistory200ResponseHistoryInner instantiates a new GetMaintenanceHistory200ResponseHistoryInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetMaintenanceHistory200ResponseHistoryInnerWithDefaults

`func NewGetMaintenanceHistory200ResponseHistoryInnerWithDefaults() *GetMaintenanceHistory200ResponseHistoryInner`

NewGetMaintenanceHistory200ResponseHistoryInnerWithDefaults instantiates a new GetMaintenanceHistory200ResponseHistoryInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimestamp

`func (o *GetMaintenanceHistory200ResponseHistoryInner) GetTimestamp() time.Time`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *GetMaintenanceHistory200ResponseHistoryInner) GetTimestampOk() (*time.Time, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *GetMaintenanceHistory200ResponseHistoryInner) SetTimestamp(v time.Time)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *GetMaintenanceHistory200ResponseHistoryInner) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetAction

`func (o *GetMaintenanceHistory200ResponseHistoryInner) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *GetMaintenanceHistory200ResponseHistoryInner) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *GetMaintenanceHistory200ResponseHistoryInner) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *GetMaintenanceHistory200ResponseHistoryInner) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetPerformedBy

`func (o *GetMaintenanceHistory200ResponseHistoryInner) GetPerformedBy() string`

GetPerformedBy returns the PerformedBy field if non-nil, zero value otherwise.

### GetPerformedByOk

`func (o *GetMaintenanceHistory200ResponseHistoryInner) GetPerformedByOk() (*string, bool)`

GetPerformedByOk returns a tuple with the PerformedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerformedBy

`func (o *GetMaintenanceHistory200ResponseHistoryInner) SetPerformedBy(v string)`

SetPerformedBy sets PerformedBy field to given value.

### HasPerformedBy

`func (o *GetMaintenanceHistory200ResponseHistoryInner) HasPerformedBy() bool`

HasPerformedBy returns a boolean if a field has been set.

### GetNotes

`func (o *GetMaintenanceHistory200ResponseHistoryInner) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *GetMaintenanceHistory200ResponseHistoryInner) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *GetMaintenanceHistory200ResponseHistoryInner) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *GetMaintenanceHistory200ResponseHistoryInner) HasNotes() bool`

HasNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


