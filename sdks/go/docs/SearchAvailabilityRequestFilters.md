# SearchAvailabilityRequestFilters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MinPrice** | Pointer to [**Money**](Money.md) |  | [optional] 
**MaxPrice** | Pointer to [**Money**](Money.md) |  | [optional] 
**Amenities** | Pointer to **[]string** |  | [optional] 
**Accessibility** | Pointer to **bool** | Require wheelchair accessible units | [optional] 

## Methods

### NewSearchAvailabilityRequestFilters

`func NewSearchAvailabilityRequestFilters() *SearchAvailabilityRequestFilters`

NewSearchAvailabilityRequestFilters instantiates a new SearchAvailabilityRequestFilters object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchAvailabilityRequestFiltersWithDefaults

`func NewSearchAvailabilityRequestFiltersWithDefaults() *SearchAvailabilityRequestFilters`

NewSearchAvailabilityRequestFiltersWithDefaults instantiates a new SearchAvailabilityRequestFilters object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMinPrice

`func (o *SearchAvailabilityRequestFilters) GetMinPrice() Money`

GetMinPrice returns the MinPrice field if non-nil, zero value otherwise.

### GetMinPriceOk

`func (o *SearchAvailabilityRequestFilters) GetMinPriceOk() (*Money, bool)`

GetMinPriceOk returns a tuple with the MinPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinPrice

`func (o *SearchAvailabilityRequestFilters) SetMinPrice(v Money)`

SetMinPrice sets MinPrice field to given value.

### HasMinPrice

`func (o *SearchAvailabilityRequestFilters) HasMinPrice() bool`

HasMinPrice returns a boolean if a field has been set.

### GetMaxPrice

`func (o *SearchAvailabilityRequestFilters) GetMaxPrice() Money`

GetMaxPrice returns the MaxPrice field if non-nil, zero value otherwise.

### GetMaxPriceOk

`func (o *SearchAvailabilityRequestFilters) GetMaxPriceOk() (*Money, bool)`

GetMaxPriceOk returns a tuple with the MaxPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxPrice

`func (o *SearchAvailabilityRequestFilters) SetMaxPrice(v Money)`

SetMaxPrice sets MaxPrice field to given value.

### HasMaxPrice

`func (o *SearchAvailabilityRequestFilters) HasMaxPrice() bool`

HasMaxPrice returns a boolean if a field has been set.

### GetAmenities

`func (o *SearchAvailabilityRequestFilters) GetAmenities() []string`

GetAmenities returns the Amenities field if non-nil, zero value otherwise.

### GetAmenitiesOk

`func (o *SearchAvailabilityRequestFilters) GetAmenitiesOk() (*[]string, bool)`

GetAmenitiesOk returns a tuple with the Amenities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmenities

`func (o *SearchAvailabilityRequestFilters) SetAmenities(v []string)`

SetAmenities sets Amenities field to given value.

### HasAmenities

`func (o *SearchAvailabilityRequestFilters) HasAmenities() bool`

HasAmenities returns a boolean if a field has been set.

### GetAccessibility

`func (o *SearchAvailabilityRequestFilters) GetAccessibility() bool`

GetAccessibility returns the Accessibility field if non-nil, zero value otherwise.

### GetAccessibilityOk

`func (o *SearchAvailabilityRequestFilters) GetAccessibilityOk() (*bool, bool)`

GetAccessibilityOk returns a tuple with the Accessibility field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessibility

`func (o *SearchAvailabilityRequestFilters) SetAccessibility(v bool)`

SetAccessibility sets Accessibility field to given value.

### HasAccessibility

`func (o *SearchAvailabilityRequestFilters) HasAccessibility() bool`

HasAccessibility returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


