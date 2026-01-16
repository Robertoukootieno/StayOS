# AvailabilitySlot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | **string** |  | 
**Status** | **string** |  | 
**Restrictions** | Pointer to [**AvailabilitySlotAllOfRestrictions**](AvailabilitySlotAllOfRestrictions.md) |  | [optional] 
**Allocations** | Pointer to [**[]AvailabilitySlotAllOfAllocations**](AvailabilitySlotAllOfAllocations.md) | Channel-specific allocations | [optional] 
**Rate** | Pointer to [**Model0**](Model0.md) | Rate for this date (if applicable) | [optional] 
**Notes** | Pointer to **string** | Internal notes for this date | [optional] 

## Methods

### NewAvailabilitySlot

`func NewAvailabilitySlot(date string, status string, ) *AvailabilitySlot`

NewAvailabilitySlot instantiates a new AvailabilitySlot object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAvailabilitySlotWithDefaults

`func NewAvailabilitySlotWithDefaults() *AvailabilitySlot`

NewAvailabilitySlotWithDefaults instantiates a new AvailabilitySlot object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *AvailabilitySlot) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *AvailabilitySlot) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *AvailabilitySlot) SetDate(v string)`

SetDate sets Date field to given value.


### GetStatus

`func (o *AvailabilitySlot) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AvailabilitySlot) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AvailabilitySlot) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetRestrictions

`func (o *AvailabilitySlot) GetRestrictions() AvailabilitySlotAllOfRestrictions`

GetRestrictions returns the Restrictions field if non-nil, zero value otherwise.

### GetRestrictionsOk

`func (o *AvailabilitySlot) GetRestrictionsOk() (*AvailabilitySlotAllOfRestrictions, bool)`

GetRestrictionsOk returns a tuple with the Restrictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictions

`func (o *AvailabilitySlot) SetRestrictions(v AvailabilitySlotAllOfRestrictions)`

SetRestrictions sets Restrictions field to given value.

### HasRestrictions

`func (o *AvailabilitySlot) HasRestrictions() bool`

HasRestrictions returns a boolean if a field has been set.

### GetAllocations

`func (o *AvailabilitySlot) GetAllocations() []AvailabilitySlotAllOfAllocations`

GetAllocations returns the Allocations field if non-nil, zero value otherwise.

### GetAllocationsOk

`func (o *AvailabilitySlot) GetAllocationsOk() (*[]AvailabilitySlotAllOfAllocations, bool)`

GetAllocationsOk returns a tuple with the Allocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllocations

`func (o *AvailabilitySlot) SetAllocations(v []AvailabilitySlotAllOfAllocations)`

SetAllocations sets Allocations field to given value.

### HasAllocations

`func (o *AvailabilitySlot) HasAllocations() bool`

HasAllocations returns a boolean if a field has been set.

### GetRate

`func (o *AvailabilitySlot) GetRate() Model0`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *AvailabilitySlot) GetRateOk() (*Model0, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *AvailabilitySlot) SetRate(v Model0)`

SetRate sets Rate field to given value.

### HasRate

`func (o *AvailabilitySlot) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetNotes

`func (o *AvailabilitySlot) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *AvailabilitySlot) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *AvailabilitySlot) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *AvailabilitySlot) HasNotes() bool`

HasNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


