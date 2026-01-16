# UpdateAvailabilityCalendarRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PropertyId** | Pointer to **string** |  | [optional] 
**UnitTypeId** | Pointer to **string** |  | [optional] 
**Updates** | Pointer to [**[]UpdateAvailabilityCalendarRequestUpdatesInner**](UpdateAvailabilityCalendarRequestUpdatesInner.md) |  | [optional] 

## Methods

### NewUpdateAvailabilityCalendarRequest

`func NewUpdateAvailabilityCalendarRequest() *UpdateAvailabilityCalendarRequest`

NewUpdateAvailabilityCalendarRequest instantiates a new UpdateAvailabilityCalendarRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateAvailabilityCalendarRequestWithDefaults

`func NewUpdateAvailabilityCalendarRequestWithDefaults() *UpdateAvailabilityCalendarRequest`

NewUpdateAvailabilityCalendarRequestWithDefaults instantiates a new UpdateAvailabilityCalendarRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPropertyId

`func (o *UpdateAvailabilityCalendarRequest) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *UpdateAvailabilityCalendarRequest) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *UpdateAvailabilityCalendarRequest) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.

### HasPropertyId

`func (o *UpdateAvailabilityCalendarRequest) HasPropertyId() bool`

HasPropertyId returns a boolean if a field has been set.

### GetUnitTypeId

`func (o *UpdateAvailabilityCalendarRequest) GetUnitTypeId() string`

GetUnitTypeId returns the UnitTypeId field if non-nil, zero value otherwise.

### GetUnitTypeIdOk

`func (o *UpdateAvailabilityCalendarRequest) GetUnitTypeIdOk() (*string, bool)`

GetUnitTypeIdOk returns a tuple with the UnitTypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitTypeId

`func (o *UpdateAvailabilityCalendarRequest) SetUnitTypeId(v string)`

SetUnitTypeId sets UnitTypeId field to given value.

### HasUnitTypeId

`func (o *UpdateAvailabilityCalendarRequest) HasUnitTypeId() bool`

HasUnitTypeId returns a boolean if a field has been set.

### GetUpdates

`func (o *UpdateAvailabilityCalendarRequest) GetUpdates() []UpdateAvailabilityCalendarRequestUpdatesInner`

GetUpdates returns the Updates field if non-nil, zero value otherwise.

### GetUpdatesOk

`func (o *UpdateAvailabilityCalendarRequest) GetUpdatesOk() (*[]UpdateAvailabilityCalendarRequestUpdatesInner, bool)`

GetUpdatesOk returns a tuple with the Updates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdates

`func (o *UpdateAvailabilityCalendarRequest) SetUpdates(v []UpdateAvailabilityCalendarRequestUpdatesInner)`

SetUpdates sets Updates field to given value.

### HasUpdates

`func (o *UpdateAvailabilityCalendarRequest) HasUpdates() bool`

HasUpdates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


