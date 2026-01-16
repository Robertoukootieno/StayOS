# ChannelDistribution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelId** | **string** |  | 
**ChannelName** | Pointer to **string** |  | [optional] [readonly] 
**IsEnabled** | Pointer to **bool** |  | [optional] [default to true]
**Markup** | Pointer to [**ChannelDistributionAllOfMarkup**](ChannelDistributionAllOfMarkup.md) |  | [optional] 
**Commission** | Pointer to [**ChannelDistributionAllOfCommission**](ChannelDistributionAllOfCommission.md) |  | [optional] 

## Methods

### NewChannelDistribution

`func NewChannelDistribution(channelId string, ) *ChannelDistribution`

NewChannelDistribution instantiates a new ChannelDistribution object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelDistributionWithDefaults

`func NewChannelDistributionWithDefaults() *ChannelDistribution`

NewChannelDistributionWithDefaults instantiates a new ChannelDistribution object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelId

`func (o *ChannelDistribution) GetChannelId() string`

GetChannelId returns the ChannelId field if non-nil, zero value otherwise.

### GetChannelIdOk

`func (o *ChannelDistribution) GetChannelIdOk() (*string, bool)`

GetChannelIdOk returns a tuple with the ChannelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelId

`func (o *ChannelDistribution) SetChannelId(v string)`

SetChannelId sets ChannelId field to given value.


### GetChannelName

`func (o *ChannelDistribution) GetChannelName() string`

GetChannelName returns the ChannelName field if non-nil, zero value otherwise.

### GetChannelNameOk

`func (o *ChannelDistribution) GetChannelNameOk() (*string, bool)`

GetChannelNameOk returns a tuple with the ChannelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelName

`func (o *ChannelDistribution) SetChannelName(v string)`

SetChannelName sets ChannelName field to given value.

### HasChannelName

`func (o *ChannelDistribution) HasChannelName() bool`

HasChannelName returns a boolean if a field has been set.

### GetIsEnabled

`func (o *ChannelDistribution) GetIsEnabled() bool`

GetIsEnabled returns the IsEnabled field if non-nil, zero value otherwise.

### GetIsEnabledOk

`func (o *ChannelDistribution) GetIsEnabledOk() (*bool, bool)`

GetIsEnabledOk returns a tuple with the IsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEnabled

`func (o *ChannelDistribution) SetIsEnabled(v bool)`

SetIsEnabled sets IsEnabled field to given value.

### HasIsEnabled

`func (o *ChannelDistribution) HasIsEnabled() bool`

HasIsEnabled returns a boolean if a field has been set.

### GetMarkup

`func (o *ChannelDistribution) GetMarkup() ChannelDistributionAllOfMarkup`

GetMarkup returns the Markup field if non-nil, zero value otherwise.

### GetMarkupOk

`func (o *ChannelDistribution) GetMarkupOk() (*ChannelDistributionAllOfMarkup, bool)`

GetMarkupOk returns a tuple with the Markup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkup

`func (o *ChannelDistribution) SetMarkup(v ChannelDistributionAllOfMarkup)`

SetMarkup sets Markup field to given value.

### HasMarkup

`func (o *ChannelDistribution) HasMarkup() bool`

HasMarkup returns a boolean if a field has been set.

### GetCommission

`func (o *ChannelDistribution) GetCommission() ChannelDistributionAllOfCommission`

GetCommission returns the Commission field if non-nil, zero value otherwise.

### GetCommissionOk

`func (o *ChannelDistribution) GetCommissionOk() (*ChannelDistributionAllOfCommission, bool)`

GetCommissionOk returns a tuple with the Commission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommission

`func (o *ChannelDistribution) SetCommission(v ChannelDistributionAllOfCommission)`

SetCommission sets Commission field to given value.

### HasCommission

`func (o *ChannelDistribution) HasCommission() bool`

HasCommission returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


