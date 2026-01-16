# SearchAvailabilityRequestOccupancy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Adults** | **int32** |  | 
**Children** | Pointer to **int32** |  | [optional] 
**ChildAges** | Pointer to **[]int32** |  | [optional] 

## Methods

### NewSearchAvailabilityRequestOccupancy

`func NewSearchAvailabilityRequestOccupancy(adults int32, ) *SearchAvailabilityRequestOccupancy`

NewSearchAvailabilityRequestOccupancy instantiates a new SearchAvailabilityRequestOccupancy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchAvailabilityRequestOccupancyWithDefaults

`func NewSearchAvailabilityRequestOccupancyWithDefaults() *SearchAvailabilityRequestOccupancy`

NewSearchAvailabilityRequestOccupancyWithDefaults instantiates a new SearchAvailabilityRequestOccupancy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdults

`func (o *SearchAvailabilityRequestOccupancy) GetAdults() int32`

GetAdults returns the Adults field if non-nil, zero value otherwise.

### GetAdultsOk

`func (o *SearchAvailabilityRequestOccupancy) GetAdultsOk() (*int32, bool)`

GetAdultsOk returns a tuple with the Adults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdults

`func (o *SearchAvailabilityRequestOccupancy) SetAdults(v int32)`

SetAdults sets Adults field to given value.


### GetChildren

`func (o *SearchAvailabilityRequestOccupancy) GetChildren() int32`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *SearchAvailabilityRequestOccupancy) GetChildrenOk() (*int32, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *SearchAvailabilityRequestOccupancy) SetChildren(v int32)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *SearchAvailabilityRequestOccupancy) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### GetChildAges

`func (o *SearchAvailabilityRequestOccupancy) GetChildAges() []int32`

GetChildAges returns the ChildAges field if non-nil, zero value otherwise.

### GetChildAgesOk

`func (o *SearchAvailabilityRequestOccupancy) GetChildAgesOk() (*[]int32, bool)`

GetChildAgesOk returns a tuple with the ChildAges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildAges

`func (o *SearchAvailabilityRequestOccupancy) SetChildAges(v []int32)`

SetChildAges sets ChildAges field to given value.

### HasChildAges

`func (o *SearchAvailabilityRequestOccupancy) HasChildAges() bool`

HasChildAges returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


