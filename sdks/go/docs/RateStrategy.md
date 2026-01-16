# RateStrategy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateStrategyId** | Pointer to **string** |  | [optional] [readonly] 
**PropertyId** | **string** |  | 
**Name** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**StrategyType** | **string** |  | 
**IsActive** | Pointer to **bool** |  | [optional] [default to true]
**Applicability** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**PricingModel** | [**Model0**](Model0.md) |  | 
**CancellationTerms** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**ChannelDistribution** | Pointer to [**[]Model0**](Model0.md) |  | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Links** | Pointer to [**RateStrategyAllOfLinks**](RateStrategyAllOfLinks.md) |  | [optional] 

## Methods

### NewRateStrategy

`func NewRateStrategy(propertyId string, name string, strategyType string, pricingModel Model0, ) *RateStrategy`

NewRateStrategy instantiates a new RateStrategy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateStrategyWithDefaults

`func NewRateStrategyWithDefaults() *RateStrategy`

NewRateStrategyWithDefaults instantiates a new RateStrategy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateStrategyId

`func (o *RateStrategy) GetRateStrategyId() string`

GetRateStrategyId returns the RateStrategyId field if non-nil, zero value otherwise.

### GetRateStrategyIdOk

`func (o *RateStrategy) GetRateStrategyIdOk() (*string, bool)`

GetRateStrategyIdOk returns a tuple with the RateStrategyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateStrategyId

`func (o *RateStrategy) SetRateStrategyId(v string)`

SetRateStrategyId sets RateStrategyId field to given value.

### HasRateStrategyId

`func (o *RateStrategy) HasRateStrategyId() bool`

HasRateStrategyId returns a boolean if a field has been set.

### GetPropertyId

`func (o *RateStrategy) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *RateStrategy) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *RateStrategy) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetName

`func (o *RateStrategy) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RateStrategy) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RateStrategy) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *RateStrategy) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RateStrategy) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RateStrategy) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RateStrategy) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetStrategyType

`func (o *RateStrategy) GetStrategyType() string`

GetStrategyType returns the StrategyType field if non-nil, zero value otherwise.

### GetStrategyTypeOk

`func (o *RateStrategy) GetStrategyTypeOk() (*string, bool)`

GetStrategyTypeOk returns a tuple with the StrategyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrategyType

`func (o *RateStrategy) SetStrategyType(v string)`

SetStrategyType sets StrategyType field to given value.


### GetIsActive

`func (o *RateStrategy) GetIsActive() bool`

GetIsActive returns the IsActive field if non-nil, zero value otherwise.

### GetIsActiveOk

`func (o *RateStrategy) GetIsActiveOk() (*bool, bool)`

GetIsActiveOk returns a tuple with the IsActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsActive

`func (o *RateStrategy) SetIsActive(v bool)`

SetIsActive sets IsActive field to given value.

### HasIsActive

`func (o *RateStrategy) HasIsActive() bool`

HasIsActive returns a boolean if a field has been set.

### GetApplicability

`func (o *RateStrategy) GetApplicability() Model0`

GetApplicability returns the Applicability field if non-nil, zero value otherwise.

### GetApplicabilityOk

`func (o *RateStrategy) GetApplicabilityOk() (*Model0, bool)`

GetApplicabilityOk returns a tuple with the Applicability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicability

`func (o *RateStrategy) SetApplicability(v Model0)`

SetApplicability sets Applicability field to given value.

### HasApplicability

`func (o *RateStrategy) HasApplicability() bool`

HasApplicability returns a boolean if a field has been set.

### GetPricingModel

`func (o *RateStrategy) GetPricingModel() Model0`

GetPricingModel returns the PricingModel field if non-nil, zero value otherwise.

### GetPricingModelOk

`func (o *RateStrategy) GetPricingModelOk() (*Model0, bool)`

GetPricingModelOk returns a tuple with the PricingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPricingModel

`func (o *RateStrategy) SetPricingModel(v Model0)`

SetPricingModel sets PricingModel field to given value.


### GetCancellationTerms

`func (o *RateStrategy) GetCancellationTerms() Model0`

GetCancellationTerms returns the CancellationTerms field if non-nil, zero value otherwise.

### GetCancellationTermsOk

`func (o *RateStrategy) GetCancellationTermsOk() (*Model0, bool)`

GetCancellationTermsOk returns a tuple with the CancellationTerms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationTerms

`func (o *RateStrategy) SetCancellationTerms(v Model0)`

SetCancellationTerms sets CancellationTerms field to given value.

### HasCancellationTerms

`func (o *RateStrategy) HasCancellationTerms() bool`

HasCancellationTerms returns a boolean if a field has been set.

### GetChannelDistribution

`func (o *RateStrategy) GetChannelDistribution() []Model0`

GetChannelDistribution returns the ChannelDistribution field if non-nil, zero value otherwise.

### GetChannelDistributionOk

`func (o *RateStrategy) GetChannelDistributionOk() (*[]Model0, bool)`

GetChannelDistributionOk returns a tuple with the ChannelDistribution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelDistribution

`func (o *RateStrategy) SetChannelDistribution(v []Model0)`

SetChannelDistribution sets ChannelDistribution field to given value.

### HasChannelDistribution

`func (o *RateStrategy) HasChannelDistribution() bool`

HasChannelDistribution returns a boolean if a field has been set.

### GetMetadata

`func (o *RateStrategy) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *RateStrategy) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *RateStrategy) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *RateStrategy) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetLinks

`func (o *RateStrategy) GetLinks() RateStrategyAllOfLinks`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateStrategy) GetLinksOk() (*RateStrategyAllOfLinks, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateStrategy) SetLinks(v RateStrategyAllOfLinks)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateStrategy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


