# ApplicabilityRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ValidDateRange** | Pointer to [**ApplicabilityRulesAllOfValidDateRange**](ApplicabilityRulesAllOfValidDateRange.md) |  | [optional] 
**DaysOfWeek** | Pointer to **[]string** |  | [optional] 
**MinimumStayDuration** | Pointer to **int32** | Minimum nights required | [optional] 
**MaximumStayDuration** | Pointer to **int32** | Maximum nights allowed | [optional] 
**AdvanceBookingWindow** | Pointer to [**ApplicabilityRulesAllOfAdvanceBookingWindow**](ApplicabilityRulesAllOfAdvanceBookingWindow.md) |  | [optional] 
**BlackoutDates** | Pointer to **[]string** | Dates when rate is not available | [optional] 

## Methods

### NewApplicabilityRules

`func NewApplicabilityRules() *ApplicabilityRules`

NewApplicabilityRules instantiates a new ApplicabilityRules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicabilityRulesWithDefaults

`func NewApplicabilityRulesWithDefaults() *ApplicabilityRules`

NewApplicabilityRulesWithDefaults instantiates a new ApplicabilityRules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValidDateRange

`func (o *ApplicabilityRules) GetValidDateRange() ApplicabilityRulesAllOfValidDateRange`

GetValidDateRange returns the ValidDateRange field if non-nil, zero value otherwise.

### GetValidDateRangeOk

`func (o *ApplicabilityRules) GetValidDateRangeOk() (*ApplicabilityRulesAllOfValidDateRange, bool)`

GetValidDateRangeOk returns a tuple with the ValidDateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidDateRange

`func (o *ApplicabilityRules) SetValidDateRange(v ApplicabilityRulesAllOfValidDateRange)`

SetValidDateRange sets ValidDateRange field to given value.

### HasValidDateRange

`func (o *ApplicabilityRules) HasValidDateRange() bool`

HasValidDateRange returns a boolean if a field has been set.

### GetDaysOfWeek

`func (o *ApplicabilityRules) GetDaysOfWeek() []string`

GetDaysOfWeek returns the DaysOfWeek field if non-nil, zero value otherwise.

### GetDaysOfWeekOk

`func (o *ApplicabilityRules) GetDaysOfWeekOk() (*[]string, bool)`

GetDaysOfWeekOk returns a tuple with the DaysOfWeek field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysOfWeek

`func (o *ApplicabilityRules) SetDaysOfWeek(v []string)`

SetDaysOfWeek sets DaysOfWeek field to given value.

### HasDaysOfWeek

`func (o *ApplicabilityRules) HasDaysOfWeek() bool`

HasDaysOfWeek returns a boolean if a field has been set.

### GetMinimumStayDuration

`func (o *ApplicabilityRules) GetMinimumStayDuration() int32`

GetMinimumStayDuration returns the MinimumStayDuration field if non-nil, zero value otherwise.

### GetMinimumStayDurationOk

`func (o *ApplicabilityRules) GetMinimumStayDurationOk() (*int32, bool)`

GetMinimumStayDurationOk returns a tuple with the MinimumStayDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumStayDuration

`func (o *ApplicabilityRules) SetMinimumStayDuration(v int32)`

SetMinimumStayDuration sets MinimumStayDuration field to given value.

### HasMinimumStayDuration

`func (o *ApplicabilityRules) HasMinimumStayDuration() bool`

HasMinimumStayDuration returns a boolean if a field has been set.

### GetMaximumStayDuration

`func (o *ApplicabilityRules) GetMaximumStayDuration() int32`

GetMaximumStayDuration returns the MaximumStayDuration field if non-nil, zero value otherwise.

### GetMaximumStayDurationOk

`func (o *ApplicabilityRules) GetMaximumStayDurationOk() (*int32, bool)`

GetMaximumStayDurationOk returns a tuple with the MaximumStayDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumStayDuration

`func (o *ApplicabilityRules) SetMaximumStayDuration(v int32)`

SetMaximumStayDuration sets MaximumStayDuration field to given value.

### HasMaximumStayDuration

`func (o *ApplicabilityRules) HasMaximumStayDuration() bool`

HasMaximumStayDuration returns a boolean if a field has been set.

### GetAdvanceBookingWindow

`func (o *ApplicabilityRules) GetAdvanceBookingWindow() ApplicabilityRulesAllOfAdvanceBookingWindow`

GetAdvanceBookingWindow returns the AdvanceBookingWindow field if non-nil, zero value otherwise.

### GetAdvanceBookingWindowOk

`func (o *ApplicabilityRules) GetAdvanceBookingWindowOk() (*ApplicabilityRulesAllOfAdvanceBookingWindow, bool)`

GetAdvanceBookingWindowOk returns a tuple with the AdvanceBookingWindow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvanceBookingWindow

`func (o *ApplicabilityRules) SetAdvanceBookingWindow(v ApplicabilityRulesAllOfAdvanceBookingWindow)`

SetAdvanceBookingWindow sets AdvanceBookingWindow field to given value.

### HasAdvanceBookingWindow

`func (o *ApplicabilityRules) HasAdvanceBookingWindow() bool`

HasAdvanceBookingWindow returns a boolean if a field has been set.

### GetBlackoutDates

`func (o *ApplicabilityRules) GetBlackoutDates() []string`

GetBlackoutDates returns the BlackoutDates field if non-nil, zero value otherwise.

### GetBlackoutDatesOk

`func (o *ApplicabilityRules) GetBlackoutDatesOk() (*[]string, bool)`

GetBlackoutDatesOk returns a tuple with the BlackoutDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlackoutDates

`func (o *ApplicabilityRules) SetBlackoutDates(v []string)`

SetBlackoutDates sets BlackoutDates field to given value.

### HasBlackoutDates

`func (o *ApplicabilityRules) HasBlackoutDates() bool`

HasBlackoutDates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


