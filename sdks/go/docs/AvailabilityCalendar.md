# AvailabilityCalendar

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InventoryUnitId** | **string** |  | 
**DateRange** | [**AvailabilityCalendarAllOfDateRange**](AvailabilityCalendarAllOfDateRange.md) |  | 
**Slots** | Pointer to [**[]Model0**](Model0.md) |  | [optional] 

## Methods

### NewAvailabilityCalendar

`func NewAvailabilityCalendar(inventoryUnitId string, dateRange AvailabilityCalendarAllOfDateRange, ) *AvailabilityCalendar`

NewAvailabilityCalendar instantiates a new AvailabilityCalendar object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAvailabilityCalendarWithDefaults

`func NewAvailabilityCalendarWithDefaults() *AvailabilityCalendar`

NewAvailabilityCalendarWithDefaults instantiates a new AvailabilityCalendar object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInventoryUnitId

`func (o *AvailabilityCalendar) GetInventoryUnitId() string`

GetInventoryUnitId returns the InventoryUnitId field if non-nil, zero value otherwise.

### GetInventoryUnitIdOk

`func (o *AvailabilityCalendar) GetInventoryUnitIdOk() (*string, bool)`

GetInventoryUnitIdOk returns a tuple with the InventoryUnitId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryUnitId

`func (o *AvailabilityCalendar) SetInventoryUnitId(v string)`

SetInventoryUnitId sets InventoryUnitId field to given value.


### GetDateRange

`func (o *AvailabilityCalendar) GetDateRange() AvailabilityCalendarAllOfDateRange`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *AvailabilityCalendar) GetDateRangeOk() (*AvailabilityCalendarAllOfDateRange, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *AvailabilityCalendar) SetDateRange(v AvailabilityCalendarAllOfDateRange)`

SetDateRange sets DateRange field to given value.


### GetSlots

`func (o *AvailabilityCalendar) GetSlots() []Model0`

GetSlots returns the Slots field if non-nil, zero value otherwise.

### GetSlotsOk

`func (o *AvailabilityCalendar) GetSlotsOk() (*[]Model0, bool)`

GetSlotsOk returns a tuple with the Slots field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlots

`func (o *AvailabilityCalendar) SetSlots(v []Model0)`

SetSlots sets Slots field to given value.

### HasSlots

`func (o *AvailabilityCalendar) HasSlots() bool`

HasSlots returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


