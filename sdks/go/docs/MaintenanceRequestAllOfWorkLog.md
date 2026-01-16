# MaintenanceRequestAllOfWorkLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Timestamp** | Pointer to **time.Time** |  | [optional] 
**Technician** | Pointer to **string** |  | [optional] 
**Action** | Pointer to **string** |  | [optional] 
**Notes** | Pointer to **string** |  | [optional] 

## Methods

### NewMaintenanceRequestAllOfWorkLog

`func NewMaintenanceRequestAllOfWorkLog() *MaintenanceRequestAllOfWorkLog`

NewMaintenanceRequestAllOfWorkLog instantiates a new MaintenanceRequestAllOfWorkLog object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMaintenanceRequestAllOfWorkLogWithDefaults

`func NewMaintenanceRequestAllOfWorkLogWithDefaults() *MaintenanceRequestAllOfWorkLog`

NewMaintenanceRequestAllOfWorkLogWithDefaults instantiates a new MaintenanceRequestAllOfWorkLog object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimestamp

`func (o *MaintenanceRequestAllOfWorkLog) GetTimestamp() time.Time`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *MaintenanceRequestAllOfWorkLog) GetTimestampOk() (*time.Time, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *MaintenanceRequestAllOfWorkLog) SetTimestamp(v time.Time)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *MaintenanceRequestAllOfWorkLog) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetTechnician

`func (o *MaintenanceRequestAllOfWorkLog) GetTechnician() string`

GetTechnician returns the Technician field if non-nil, zero value otherwise.

### GetTechnicianOk

`func (o *MaintenanceRequestAllOfWorkLog) GetTechnicianOk() (*string, bool)`

GetTechnicianOk returns a tuple with the Technician field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnician

`func (o *MaintenanceRequestAllOfWorkLog) SetTechnician(v string)`

SetTechnician sets Technician field to given value.

### HasTechnician

`func (o *MaintenanceRequestAllOfWorkLog) HasTechnician() bool`

HasTechnician returns a boolean if a field has been set.

### GetAction

`func (o *MaintenanceRequestAllOfWorkLog) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *MaintenanceRequestAllOfWorkLog) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *MaintenanceRequestAllOfWorkLog) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *MaintenanceRequestAllOfWorkLog) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetNotes

`func (o *MaintenanceRequestAllOfWorkLog) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *MaintenanceRequestAllOfWorkLog) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *MaintenanceRequestAllOfWorkLog) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *MaintenanceRequestAllOfWorkLog) HasNotes() bool`

HasNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


