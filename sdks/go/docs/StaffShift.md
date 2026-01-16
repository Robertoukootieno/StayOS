# StaffShift

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShiftId** | **string** |  | [readonly] 
**StaffId** | **string** |  | 
**PropertyId** | **string** |  | 
**ShiftDate** | **string** |  | 
**StartTime** | **string** |  | 
**EndTime** | **string** |  | 
**Role** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**ClockInTime** | Pointer to **time.Time** |  | [optional] 
**ClockOutTime** | Pointer to **time.Time** |  | [optional] 
**Breaks** | Pointer to [**[]StaffShiftAllOfBreaks**](StaffShiftAllOfBreaks.md) |  | [optional] 

## Methods

### NewStaffShift

`func NewStaffShift(shiftId string, staffId string, propertyId string, shiftDate string, startTime string, endTime string, ) *StaffShift`

NewStaffShift instantiates a new StaffShift object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStaffShiftWithDefaults

`func NewStaffShiftWithDefaults() *StaffShift`

NewStaffShiftWithDefaults instantiates a new StaffShift object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetShiftId

`func (o *StaffShift) GetShiftId() string`

GetShiftId returns the ShiftId field if non-nil, zero value otherwise.

### GetShiftIdOk

`func (o *StaffShift) GetShiftIdOk() (*string, bool)`

GetShiftIdOk returns a tuple with the ShiftId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShiftId

`func (o *StaffShift) SetShiftId(v string)`

SetShiftId sets ShiftId field to given value.


### GetStaffId

`func (o *StaffShift) GetStaffId() string`

GetStaffId returns the StaffId field if non-nil, zero value otherwise.

### GetStaffIdOk

`func (o *StaffShift) GetStaffIdOk() (*string, bool)`

GetStaffIdOk returns a tuple with the StaffId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStaffId

`func (o *StaffShift) SetStaffId(v string)`

SetStaffId sets StaffId field to given value.


### GetPropertyId

`func (o *StaffShift) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *StaffShift) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *StaffShift) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetShiftDate

`func (o *StaffShift) GetShiftDate() string`

GetShiftDate returns the ShiftDate field if non-nil, zero value otherwise.

### GetShiftDateOk

`func (o *StaffShift) GetShiftDateOk() (*string, bool)`

GetShiftDateOk returns a tuple with the ShiftDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShiftDate

`func (o *StaffShift) SetShiftDate(v string)`

SetShiftDate sets ShiftDate field to given value.


### GetStartTime

`func (o *StaffShift) GetStartTime() string`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *StaffShift) GetStartTimeOk() (*string, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *StaffShift) SetStartTime(v string)`

SetStartTime sets StartTime field to given value.


### GetEndTime

`func (o *StaffShift) GetEndTime() string`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *StaffShift) GetEndTimeOk() (*string, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *StaffShift) SetEndTime(v string)`

SetEndTime sets EndTime field to given value.


### GetRole

`func (o *StaffShift) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *StaffShift) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *StaffShift) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *StaffShift) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetStatus

`func (o *StaffShift) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *StaffShift) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *StaffShift) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *StaffShift) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetClockInTime

`func (o *StaffShift) GetClockInTime() time.Time`

GetClockInTime returns the ClockInTime field if non-nil, zero value otherwise.

### GetClockInTimeOk

`func (o *StaffShift) GetClockInTimeOk() (*time.Time, bool)`

GetClockInTimeOk returns a tuple with the ClockInTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClockInTime

`func (o *StaffShift) SetClockInTime(v time.Time)`

SetClockInTime sets ClockInTime field to given value.

### HasClockInTime

`func (o *StaffShift) HasClockInTime() bool`

HasClockInTime returns a boolean if a field has been set.

### GetClockOutTime

`func (o *StaffShift) GetClockOutTime() time.Time`

GetClockOutTime returns the ClockOutTime field if non-nil, zero value otherwise.

### GetClockOutTimeOk

`func (o *StaffShift) GetClockOutTimeOk() (*time.Time, bool)`

GetClockOutTimeOk returns a tuple with the ClockOutTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClockOutTime

`func (o *StaffShift) SetClockOutTime(v time.Time)`

SetClockOutTime sets ClockOutTime field to given value.

### HasClockOutTime

`func (o *StaffShift) HasClockOutTime() bool`

HasClockOutTime returns a boolean if a field has been set.

### GetBreaks

`func (o *StaffShift) GetBreaks() []StaffShiftAllOfBreaks`

GetBreaks returns the Breaks field if non-nil, zero value otherwise.

### GetBreaksOk

`func (o *StaffShift) GetBreaksOk() (*[]StaffShiftAllOfBreaks, bool)`

GetBreaksOk returns a tuple with the Breaks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBreaks

`func (o *StaffShift) SetBreaks(v []StaffShiftAllOfBreaks)`

SetBreaks sets Breaks field to given value.

### HasBreaks

`func (o *StaffShift) HasBreaks() bool`

HasBreaks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


