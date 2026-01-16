# ChannelMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelId** | **string** |  | 
**PropertyId** | **string** |  | 
**UnitTypeMappings** | Pointer to [**[]ChannelMappingAllOfUnitTypeMappings**](ChannelMappingAllOfUnitTypeMappings.md) |  | [optional] 
**RateStrategyMappings** | Pointer to [**[]ChannelMappingAllOfRateStrategyMappings**](ChannelMappingAllOfRateStrategyMappings.md) |  | [optional] 

## Methods

### NewChannelMapping

`func NewChannelMapping(channelId string, propertyId string, ) *ChannelMapping`

NewChannelMapping instantiates a new ChannelMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelMappingWithDefaults

`func NewChannelMappingWithDefaults() *ChannelMapping`

NewChannelMappingWithDefaults instantiates a new ChannelMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelId

`func (o *ChannelMapping) GetChannelId() string`

GetChannelId returns the ChannelId field if non-nil, zero value otherwise.

### GetChannelIdOk

`func (o *ChannelMapping) GetChannelIdOk() (*string, bool)`

GetChannelIdOk returns a tuple with the ChannelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelId

`func (o *ChannelMapping) SetChannelId(v string)`

SetChannelId sets ChannelId field to given value.


### GetPropertyId

`func (o *ChannelMapping) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *ChannelMapping) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *ChannelMapping) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetUnitTypeMappings

`func (o *ChannelMapping) GetUnitTypeMappings() []ChannelMappingAllOfUnitTypeMappings`

GetUnitTypeMappings returns the UnitTypeMappings field if non-nil, zero value otherwise.

### GetUnitTypeMappingsOk

`func (o *ChannelMapping) GetUnitTypeMappingsOk() (*[]ChannelMappingAllOfUnitTypeMappings, bool)`

GetUnitTypeMappingsOk returns a tuple with the UnitTypeMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitTypeMappings

`func (o *ChannelMapping) SetUnitTypeMappings(v []ChannelMappingAllOfUnitTypeMappings)`

SetUnitTypeMappings sets UnitTypeMappings field to given value.

### HasUnitTypeMappings

`func (o *ChannelMapping) HasUnitTypeMappings() bool`

HasUnitTypeMappings returns a boolean if a field has been set.

### GetRateStrategyMappings

`func (o *ChannelMapping) GetRateStrategyMappings() []ChannelMappingAllOfRateStrategyMappings`

GetRateStrategyMappings returns the RateStrategyMappings field if non-nil, zero value otherwise.

### GetRateStrategyMappingsOk

`func (o *ChannelMapping) GetRateStrategyMappingsOk() (*[]ChannelMappingAllOfRateStrategyMappings, bool)`

GetRateStrategyMappingsOk returns a tuple with the RateStrategyMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateStrategyMappings

`func (o *ChannelMapping) SetRateStrategyMappings(v []ChannelMappingAllOfRateStrategyMappings)`

SetRateStrategyMappings sets RateStrategyMappings field to given value.

### HasRateStrategyMappings

`func (o *ChannelMapping) HasRateStrategyMappings() bool`

HasRateStrategyMappings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


