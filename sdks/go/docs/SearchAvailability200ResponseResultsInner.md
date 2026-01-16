# SearchAvailability200ResponseResultsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InventoryUnitId** | Pointer to **string** |  | [optional] 
**UnitType** | Pointer to [**UnitType**](UnitType.md) |  | [optional] 
**Property** | Pointer to [**Property**](Property.md) |  | [optional] 
**RateStrategy** | Pointer to [**RateStrategy**](RateStrategy.md) |  | [optional] 
**TotalPrice** | Pointer to [**Money**](Money.md) |  | [optional] 
**PriceBreakdown** | Pointer to [**[]SearchAvailability200ResponseResultsInnerPriceBreakdownInner**](SearchAvailability200ResponseResultsInnerPriceBreakdownInner.md) |  | [optional] 
**Availability** | Pointer to **string** |  | [optional] 
**CancellationPolicy** | Pointer to [**CancellationPolicy**](CancellationPolicy.md) |  | [optional] 

## Methods

### NewSearchAvailability200ResponseResultsInner

`func NewSearchAvailability200ResponseResultsInner() *SearchAvailability200ResponseResultsInner`

NewSearchAvailability200ResponseResultsInner instantiates a new SearchAvailability200ResponseResultsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchAvailability200ResponseResultsInnerWithDefaults

`func NewSearchAvailability200ResponseResultsInnerWithDefaults() *SearchAvailability200ResponseResultsInner`

NewSearchAvailability200ResponseResultsInnerWithDefaults instantiates a new SearchAvailability200ResponseResultsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInventoryUnitId

`func (o *SearchAvailability200ResponseResultsInner) GetInventoryUnitId() string`

GetInventoryUnitId returns the InventoryUnitId field if non-nil, zero value otherwise.

### GetInventoryUnitIdOk

`func (o *SearchAvailability200ResponseResultsInner) GetInventoryUnitIdOk() (*string, bool)`

GetInventoryUnitIdOk returns a tuple with the InventoryUnitId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryUnitId

`func (o *SearchAvailability200ResponseResultsInner) SetInventoryUnitId(v string)`

SetInventoryUnitId sets InventoryUnitId field to given value.

### HasInventoryUnitId

`func (o *SearchAvailability200ResponseResultsInner) HasInventoryUnitId() bool`

HasInventoryUnitId returns a boolean if a field has been set.

### GetUnitType

`func (o *SearchAvailability200ResponseResultsInner) GetUnitType() UnitType`

GetUnitType returns the UnitType field if non-nil, zero value otherwise.

### GetUnitTypeOk

`func (o *SearchAvailability200ResponseResultsInner) GetUnitTypeOk() (*UnitType, bool)`

GetUnitTypeOk returns a tuple with the UnitType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitType

`func (o *SearchAvailability200ResponseResultsInner) SetUnitType(v UnitType)`

SetUnitType sets UnitType field to given value.

### HasUnitType

`func (o *SearchAvailability200ResponseResultsInner) HasUnitType() bool`

HasUnitType returns a boolean if a field has been set.

### GetProperty

`func (o *SearchAvailability200ResponseResultsInner) GetProperty() Property`

GetProperty returns the Property field if non-nil, zero value otherwise.

### GetPropertyOk

`func (o *SearchAvailability200ResponseResultsInner) GetPropertyOk() (*Property, bool)`

GetPropertyOk returns a tuple with the Property field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperty

`func (o *SearchAvailability200ResponseResultsInner) SetProperty(v Property)`

SetProperty sets Property field to given value.

### HasProperty

`func (o *SearchAvailability200ResponseResultsInner) HasProperty() bool`

HasProperty returns a boolean if a field has been set.

### GetRateStrategy

`func (o *SearchAvailability200ResponseResultsInner) GetRateStrategy() RateStrategy`

GetRateStrategy returns the RateStrategy field if non-nil, zero value otherwise.

### GetRateStrategyOk

`func (o *SearchAvailability200ResponseResultsInner) GetRateStrategyOk() (*RateStrategy, bool)`

GetRateStrategyOk returns a tuple with the RateStrategy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateStrategy

`func (o *SearchAvailability200ResponseResultsInner) SetRateStrategy(v RateStrategy)`

SetRateStrategy sets RateStrategy field to given value.

### HasRateStrategy

`func (o *SearchAvailability200ResponseResultsInner) HasRateStrategy() bool`

HasRateStrategy returns a boolean if a field has been set.

### GetTotalPrice

`func (o *SearchAvailability200ResponseResultsInner) GetTotalPrice() Money`

GetTotalPrice returns the TotalPrice field if non-nil, zero value otherwise.

### GetTotalPriceOk

`func (o *SearchAvailability200ResponseResultsInner) GetTotalPriceOk() (*Money, bool)`

GetTotalPriceOk returns a tuple with the TotalPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPrice

`func (o *SearchAvailability200ResponseResultsInner) SetTotalPrice(v Money)`

SetTotalPrice sets TotalPrice field to given value.

### HasTotalPrice

`func (o *SearchAvailability200ResponseResultsInner) HasTotalPrice() bool`

HasTotalPrice returns a boolean if a field has been set.

### GetPriceBreakdown

`func (o *SearchAvailability200ResponseResultsInner) GetPriceBreakdown() []SearchAvailability200ResponseResultsInnerPriceBreakdownInner`

GetPriceBreakdown returns the PriceBreakdown field if non-nil, zero value otherwise.

### GetPriceBreakdownOk

`func (o *SearchAvailability200ResponseResultsInner) GetPriceBreakdownOk() (*[]SearchAvailability200ResponseResultsInnerPriceBreakdownInner, bool)`

GetPriceBreakdownOk returns a tuple with the PriceBreakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceBreakdown

`func (o *SearchAvailability200ResponseResultsInner) SetPriceBreakdown(v []SearchAvailability200ResponseResultsInnerPriceBreakdownInner)`

SetPriceBreakdown sets PriceBreakdown field to given value.

### HasPriceBreakdown

`func (o *SearchAvailability200ResponseResultsInner) HasPriceBreakdown() bool`

HasPriceBreakdown returns a boolean if a field has been set.

### GetAvailability

`func (o *SearchAvailability200ResponseResultsInner) GetAvailability() string`

GetAvailability returns the Availability field if non-nil, zero value otherwise.

### GetAvailabilityOk

`func (o *SearchAvailability200ResponseResultsInner) GetAvailabilityOk() (*string, bool)`

GetAvailabilityOk returns a tuple with the Availability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailability

`func (o *SearchAvailability200ResponseResultsInner) SetAvailability(v string)`

SetAvailability sets Availability field to given value.

### HasAvailability

`func (o *SearchAvailability200ResponseResultsInner) HasAvailability() bool`

HasAvailability returns a boolean if a field has been set.

### GetCancellationPolicy

`func (o *SearchAvailability200ResponseResultsInner) GetCancellationPolicy() CancellationPolicy`

GetCancellationPolicy returns the CancellationPolicy field if non-nil, zero value otherwise.

### GetCancellationPolicyOk

`func (o *SearchAvailability200ResponseResultsInner) GetCancellationPolicyOk() (*CancellationPolicy, bool)`

GetCancellationPolicyOk returns a tuple with the CancellationPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationPolicy

`func (o *SearchAvailability200ResponseResultsInner) SetCancellationPolicy(v CancellationPolicy)`

SetCancellationPolicy sets CancellationPolicy field to given value.

### HasCancellationPolicy

`func (o *SearchAvailability200ResponseResultsInner) HasCancellationPolicy() bool`

HasCancellationPolicy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


