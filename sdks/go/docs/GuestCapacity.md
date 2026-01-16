# GuestCapacity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxAdults** | **int32** |  | 
**MaxChildren** | Pointer to **int32** |  | [optional] 
**MaxOccupancy** | Pointer to **int32** | Total maximum occupancy | [optional] 
**ExtraBedAvailable** | Pointer to **bool** |  | [optional] [default to false]
**ExtraBedCharge** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewGuestCapacity

`func NewGuestCapacity(maxAdults int32, ) *GuestCapacity`

NewGuestCapacity instantiates a new GuestCapacity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestCapacityWithDefaults

`func NewGuestCapacityWithDefaults() *GuestCapacity`

NewGuestCapacityWithDefaults instantiates a new GuestCapacity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMaxAdults

`func (o *GuestCapacity) GetMaxAdults() int32`

GetMaxAdults returns the MaxAdults field if non-nil, zero value otherwise.

### GetMaxAdultsOk

`func (o *GuestCapacity) GetMaxAdultsOk() (*int32, bool)`

GetMaxAdultsOk returns a tuple with the MaxAdults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxAdults

`func (o *GuestCapacity) SetMaxAdults(v int32)`

SetMaxAdults sets MaxAdults field to given value.


### GetMaxChildren

`func (o *GuestCapacity) GetMaxChildren() int32`

GetMaxChildren returns the MaxChildren field if non-nil, zero value otherwise.

### GetMaxChildrenOk

`func (o *GuestCapacity) GetMaxChildrenOk() (*int32, bool)`

GetMaxChildrenOk returns a tuple with the MaxChildren field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxChildren

`func (o *GuestCapacity) SetMaxChildren(v int32)`

SetMaxChildren sets MaxChildren field to given value.

### HasMaxChildren

`func (o *GuestCapacity) HasMaxChildren() bool`

HasMaxChildren returns a boolean if a field has been set.

### GetMaxOccupancy

`func (o *GuestCapacity) GetMaxOccupancy() int32`

GetMaxOccupancy returns the MaxOccupancy field if non-nil, zero value otherwise.

### GetMaxOccupancyOk

`func (o *GuestCapacity) GetMaxOccupancyOk() (*int32, bool)`

GetMaxOccupancyOk returns a tuple with the MaxOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxOccupancy

`func (o *GuestCapacity) SetMaxOccupancy(v int32)`

SetMaxOccupancy sets MaxOccupancy field to given value.

### HasMaxOccupancy

`func (o *GuestCapacity) HasMaxOccupancy() bool`

HasMaxOccupancy returns a boolean if a field has been set.

### GetExtraBedAvailable

`func (o *GuestCapacity) GetExtraBedAvailable() bool`

GetExtraBedAvailable returns the ExtraBedAvailable field if non-nil, zero value otherwise.

### GetExtraBedAvailableOk

`func (o *GuestCapacity) GetExtraBedAvailableOk() (*bool, bool)`

GetExtraBedAvailableOk returns a tuple with the ExtraBedAvailable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraBedAvailable

`func (o *GuestCapacity) SetExtraBedAvailable(v bool)`

SetExtraBedAvailable sets ExtraBedAvailable field to given value.

### HasExtraBedAvailable

`func (o *GuestCapacity) HasExtraBedAvailable() bool`

HasExtraBedAvailable returns a boolean if a field has been set.

### GetExtraBedCharge

`func (o *GuestCapacity) GetExtraBedCharge() Model0`

GetExtraBedCharge returns the ExtraBedCharge field if non-nil, zero value otherwise.

### GetExtraBedChargeOk

`func (o *GuestCapacity) GetExtraBedChargeOk() (*Model0, bool)`

GetExtraBedChargeOk returns a tuple with the ExtraBedCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraBedCharge

`func (o *GuestCapacity) SetExtraBedCharge(v Model0)`

SetExtraBedCharge sets ExtraBedCharge field to given value.

### HasExtraBedCharge

`func (o *GuestCapacity) HasExtraBedCharge() bool`

HasExtraBedCharge returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


