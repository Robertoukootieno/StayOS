# SearchAvailabilityRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PropertyId** | Pointer to **string** | Filter by specific property (optional) | [optional] 
**CheckInDate** | **string** |  | 
**CheckOutDate** | **string** |  | 
**Occupancy** | [**SearchAvailabilityRequestOccupancy**](SearchAvailabilityRequestOccupancy.md) |  | 
**UnitTypeId** | Pointer to **string** | Filter by unit type | [optional] 
**RateStrategyId** | Pointer to **string** | Filter by rate strategy | [optional] 
**Filters** | Pointer to [**SearchAvailabilityRequestFilters**](SearchAvailabilityRequestFilters.md) |  | [optional] 

## Methods

### NewSearchAvailabilityRequest

`func NewSearchAvailabilityRequest(checkInDate string, checkOutDate string, occupancy SearchAvailabilityRequestOccupancy, ) *SearchAvailabilityRequest`

NewSearchAvailabilityRequest instantiates a new SearchAvailabilityRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchAvailabilityRequestWithDefaults

`func NewSearchAvailabilityRequestWithDefaults() *SearchAvailabilityRequest`

NewSearchAvailabilityRequestWithDefaults instantiates a new SearchAvailabilityRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPropertyId

`func (o *SearchAvailabilityRequest) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *SearchAvailabilityRequest) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *SearchAvailabilityRequest) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.

### HasPropertyId

`func (o *SearchAvailabilityRequest) HasPropertyId() bool`

HasPropertyId returns a boolean if a field has been set.

### GetCheckInDate

`func (o *SearchAvailabilityRequest) GetCheckInDate() string`

GetCheckInDate returns the CheckInDate field if non-nil, zero value otherwise.

### GetCheckInDateOk

`func (o *SearchAvailabilityRequest) GetCheckInDateOk() (*string, bool)`

GetCheckInDateOk returns a tuple with the CheckInDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckInDate

`func (o *SearchAvailabilityRequest) SetCheckInDate(v string)`

SetCheckInDate sets CheckInDate field to given value.


### GetCheckOutDate

`func (o *SearchAvailabilityRequest) GetCheckOutDate() string`

GetCheckOutDate returns the CheckOutDate field if non-nil, zero value otherwise.

### GetCheckOutDateOk

`func (o *SearchAvailabilityRequest) GetCheckOutDateOk() (*string, bool)`

GetCheckOutDateOk returns a tuple with the CheckOutDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckOutDate

`func (o *SearchAvailabilityRequest) SetCheckOutDate(v string)`

SetCheckOutDate sets CheckOutDate field to given value.


### GetOccupancy

`func (o *SearchAvailabilityRequest) GetOccupancy() SearchAvailabilityRequestOccupancy`

GetOccupancy returns the Occupancy field if non-nil, zero value otherwise.

### GetOccupancyOk

`func (o *SearchAvailabilityRequest) GetOccupancyOk() (*SearchAvailabilityRequestOccupancy, bool)`

GetOccupancyOk returns a tuple with the Occupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccupancy

`func (o *SearchAvailabilityRequest) SetOccupancy(v SearchAvailabilityRequestOccupancy)`

SetOccupancy sets Occupancy field to given value.


### GetUnitTypeId

`func (o *SearchAvailabilityRequest) GetUnitTypeId() string`

GetUnitTypeId returns the UnitTypeId field if non-nil, zero value otherwise.

### GetUnitTypeIdOk

`func (o *SearchAvailabilityRequest) GetUnitTypeIdOk() (*string, bool)`

GetUnitTypeIdOk returns a tuple with the UnitTypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitTypeId

`func (o *SearchAvailabilityRequest) SetUnitTypeId(v string)`

SetUnitTypeId sets UnitTypeId field to given value.

### HasUnitTypeId

`func (o *SearchAvailabilityRequest) HasUnitTypeId() bool`

HasUnitTypeId returns a boolean if a field has been set.

### GetRateStrategyId

`func (o *SearchAvailabilityRequest) GetRateStrategyId() string`

GetRateStrategyId returns the RateStrategyId field if non-nil, zero value otherwise.

### GetRateStrategyIdOk

`func (o *SearchAvailabilityRequest) GetRateStrategyIdOk() (*string, bool)`

GetRateStrategyIdOk returns a tuple with the RateStrategyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateStrategyId

`func (o *SearchAvailabilityRequest) SetRateStrategyId(v string)`

SetRateStrategyId sets RateStrategyId field to given value.

### HasRateStrategyId

`func (o *SearchAvailabilityRequest) HasRateStrategyId() bool`

HasRateStrategyId returns a boolean if a field has been set.

### GetFilters

`func (o *SearchAvailabilityRequest) GetFilters() SearchAvailabilityRequestFilters`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *SearchAvailabilityRequest) GetFiltersOk() (*SearchAvailabilityRequestFilters, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *SearchAvailabilityRequest) SetFilters(v SearchAvailabilityRequestFilters)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *SearchAvailabilityRequest) HasFilters() bool`

HasFilters returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


