# UpdateAvailabilityCalendarRequestUpdatesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** |  | [optional] 
**Available** | Pointer to **int32** |  | [optional] 
**Rate** | Pointer to [**Money**](Money.md) |  | [optional] 
**Restrictions** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewUpdateAvailabilityCalendarRequestUpdatesInner

`func NewUpdateAvailabilityCalendarRequestUpdatesInner() *UpdateAvailabilityCalendarRequestUpdatesInner`

NewUpdateAvailabilityCalendarRequestUpdatesInner instantiates a new UpdateAvailabilityCalendarRequestUpdatesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateAvailabilityCalendarRequestUpdatesInnerWithDefaults

`func NewUpdateAvailabilityCalendarRequestUpdatesInnerWithDefaults() *UpdateAvailabilityCalendarRequestUpdatesInner`

NewUpdateAvailabilityCalendarRequestUpdatesInnerWithDefaults instantiates a new UpdateAvailabilityCalendarRequestUpdatesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetAvailable

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) GetAvailable() int32`

GetAvailable returns the Available field if non-nil, zero value otherwise.

### GetAvailableOk

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) GetAvailableOk() (*int32, bool)`

GetAvailableOk returns a tuple with the Available field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailable

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) SetAvailable(v int32)`

SetAvailable sets Available field to given value.

### HasAvailable

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) HasAvailable() bool`

HasAvailable returns a boolean if a field has been set.

### GetRate

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) GetRate() Money`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) GetRateOk() (*Money, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) SetRate(v Money)`

SetRate sets Rate field to given value.

### HasRate

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetRestrictions

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) GetRestrictions() map[string]interface{}`

GetRestrictions returns the Restrictions field if non-nil, zero value otherwise.

### GetRestrictionsOk

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) GetRestrictionsOk() (*map[string]interface{}, bool)`

GetRestrictionsOk returns a tuple with the Restrictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictions

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) SetRestrictions(v map[string]interface{})`

SetRestrictions sets Restrictions field to given value.

### HasRestrictions

`func (o *UpdateAvailabilityCalendarRequestUpdatesInner) HasRestrictions() bool`

HasRestrictions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


