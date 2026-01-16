# PricingModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BaseRates** | [**[]PricingModelAllOfBaseRates**](PricingModelAllOfBaseRates.md) | Base rates per unit type | 
**OccupancyPricing** | Pointer to [**PricingModelAllOfOccupancyPricing**](PricingModelAllOfOccupancyPricing.md) |  | [optional] 
**SeasonalAdjustments** | Pointer to [**[]PricingModelAllOfSeasonalAdjustments**](PricingModelAllOfSeasonalAdjustments.md) |  | [optional] 
**LengthOfStayDiscounts** | Pointer to [**[]PricingModelAllOfLengthOfStayDiscounts**](PricingModelAllOfLengthOfStayDiscounts.md) |  | [optional] 
**Taxes** | Pointer to [**[]PricingModelAllOfTaxes**](PricingModelAllOfTaxes.md) |  | [optional] 
**Fees** | Pointer to [**[]PricingModelAllOfFees**](PricingModelAllOfFees.md) |  | [optional] 

## Methods

### NewPricingModel

`func NewPricingModel(baseRates []PricingModelAllOfBaseRates, ) *PricingModel`

NewPricingModel instantiates a new PricingModel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPricingModelWithDefaults

`func NewPricingModelWithDefaults() *PricingModel`

NewPricingModelWithDefaults instantiates a new PricingModel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBaseRates

`func (o *PricingModel) GetBaseRates() []PricingModelAllOfBaseRates`

GetBaseRates returns the BaseRates field if non-nil, zero value otherwise.

### GetBaseRatesOk

`func (o *PricingModel) GetBaseRatesOk() (*[]PricingModelAllOfBaseRates, bool)`

GetBaseRatesOk returns a tuple with the BaseRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseRates

`func (o *PricingModel) SetBaseRates(v []PricingModelAllOfBaseRates)`

SetBaseRates sets BaseRates field to given value.


### GetOccupancyPricing

`func (o *PricingModel) GetOccupancyPricing() PricingModelAllOfOccupancyPricing`

GetOccupancyPricing returns the OccupancyPricing field if non-nil, zero value otherwise.

### GetOccupancyPricingOk

`func (o *PricingModel) GetOccupancyPricingOk() (*PricingModelAllOfOccupancyPricing, bool)`

GetOccupancyPricingOk returns a tuple with the OccupancyPricing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccupancyPricing

`func (o *PricingModel) SetOccupancyPricing(v PricingModelAllOfOccupancyPricing)`

SetOccupancyPricing sets OccupancyPricing field to given value.

### HasOccupancyPricing

`func (o *PricingModel) HasOccupancyPricing() bool`

HasOccupancyPricing returns a boolean if a field has been set.

### GetSeasonalAdjustments

`func (o *PricingModel) GetSeasonalAdjustments() []PricingModelAllOfSeasonalAdjustments`

GetSeasonalAdjustments returns the SeasonalAdjustments field if non-nil, zero value otherwise.

### GetSeasonalAdjustmentsOk

`func (o *PricingModel) GetSeasonalAdjustmentsOk() (*[]PricingModelAllOfSeasonalAdjustments, bool)`

GetSeasonalAdjustmentsOk returns a tuple with the SeasonalAdjustments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeasonalAdjustments

`func (o *PricingModel) SetSeasonalAdjustments(v []PricingModelAllOfSeasonalAdjustments)`

SetSeasonalAdjustments sets SeasonalAdjustments field to given value.

### HasSeasonalAdjustments

`func (o *PricingModel) HasSeasonalAdjustments() bool`

HasSeasonalAdjustments returns a boolean if a field has been set.

### GetLengthOfStayDiscounts

`func (o *PricingModel) GetLengthOfStayDiscounts() []PricingModelAllOfLengthOfStayDiscounts`

GetLengthOfStayDiscounts returns the LengthOfStayDiscounts field if non-nil, zero value otherwise.

### GetLengthOfStayDiscountsOk

`func (o *PricingModel) GetLengthOfStayDiscountsOk() (*[]PricingModelAllOfLengthOfStayDiscounts, bool)`

GetLengthOfStayDiscountsOk returns a tuple with the LengthOfStayDiscounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLengthOfStayDiscounts

`func (o *PricingModel) SetLengthOfStayDiscounts(v []PricingModelAllOfLengthOfStayDiscounts)`

SetLengthOfStayDiscounts sets LengthOfStayDiscounts field to given value.

### HasLengthOfStayDiscounts

`func (o *PricingModel) HasLengthOfStayDiscounts() bool`

HasLengthOfStayDiscounts returns a boolean if a field has been set.

### GetTaxes

`func (o *PricingModel) GetTaxes() []PricingModelAllOfTaxes`

GetTaxes returns the Taxes field if non-nil, zero value otherwise.

### GetTaxesOk

`func (o *PricingModel) GetTaxesOk() (*[]PricingModelAllOfTaxes, bool)`

GetTaxesOk returns a tuple with the Taxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxes

`func (o *PricingModel) SetTaxes(v []PricingModelAllOfTaxes)`

SetTaxes sets Taxes field to given value.

### HasTaxes

`func (o *PricingModel) HasTaxes() bool`

HasTaxes returns a boolean if a field has been set.

### GetFees

`func (o *PricingModel) GetFees() []PricingModelAllOfFees`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *PricingModel) GetFeesOk() (*[]PricingModelAllOfFees, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *PricingModel) SetFees(v []PricingModelAllOfFees)`

SetFees sets Fees field to given value.

### HasFees

`func (o *PricingModel) HasFees() bool`

HasFees returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


