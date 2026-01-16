# SupplierPerformance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SupplierId** | **string** |  | 
**StartDate** | **string** |  | 
**EndDate** | **string** |  | 
**TotalOrders** | Pointer to **int32** |  | [optional] 
**TotalSpend** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**OnTimeDeliveryRate** | Pointer to **float32** | Percentage | [optional] 
**QualityRating** | Pointer to **float32** |  | [optional] 
**AverageLeadTime** | Pointer to **int32** | Average lead time in days | [optional] 

## Methods

### NewSupplierPerformance

`func NewSupplierPerformance(supplierId string, startDate string, endDate string, ) *SupplierPerformance`

NewSupplierPerformance instantiates a new SupplierPerformance object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSupplierPerformanceWithDefaults

`func NewSupplierPerformanceWithDefaults() *SupplierPerformance`

NewSupplierPerformanceWithDefaults instantiates a new SupplierPerformance object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSupplierId

`func (o *SupplierPerformance) GetSupplierId() string`

GetSupplierId returns the SupplierId field if non-nil, zero value otherwise.

### GetSupplierIdOk

`func (o *SupplierPerformance) GetSupplierIdOk() (*string, bool)`

GetSupplierIdOk returns a tuple with the SupplierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupplierId

`func (o *SupplierPerformance) SetSupplierId(v string)`

SetSupplierId sets SupplierId field to given value.


### GetStartDate

`func (o *SupplierPerformance) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *SupplierPerformance) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *SupplierPerformance) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.


### GetEndDate

`func (o *SupplierPerformance) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *SupplierPerformance) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *SupplierPerformance) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.


### GetTotalOrders

`func (o *SupplierPerformance) GetTotalOrders() int32`

GetTotalOrders returns the TotalOrders field if non-nil, zero value otherwise.

### GetTotalOrdersOk

`func (o *SupplierPerformance) GetTotalOrdersOk() (*int32, bool)`

GetTotalOrdersOk returns a tuple with the TotalOrders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOrders

`func (o *SupplierPerformance) SetTotalOrders(v int32)`

SetTotalOrders sets TotalOrders field to given value.

### HasTotalOrders

`func (o *SupplierPerformance) HasTotalOrders() bool`

HasTotalOrders returns a boolean if a field has been set.

### GetTotalSpend

`func (o *SupplierPerformance) GetTotalSpend() Model0`

GetTotalSpend returns the TotalSpend field if non-nil, zero value otherwise.

### GetTotalSpendOk

`func (o *SupplierPerformance) GetTotalSpendOk() (*Model0, bool)`

GetTotalSpendOk returns a tuple with the TotalSpend field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSpend

`func (o *SupplierPerformance) SetTotalSpend(v Model0)`

SetTotalSpend sets TotalSpend field to given value.

### HasTotalSpend

`func (o *SupplierPerformance) HasTotalSpend() bool`

HasTotalSpend returns a boolean if a field has been set.

### GetOnTimeDeliveryRate

`func (o *SupplierPerformance) GetOnTimeDeliveryRate() float32`

GetOnTimeDeliveryRate returns the OnTimeDeliveryRate field if non-nil, zero value otherwise.

### GetOnTimeDeliveryRateOk

`func (o *SupplierPerformance) GetOnTimeDeliveryRateOk() (*float32, bool)`

GetOnTimeDeliveryRateOk returns a tuple with the OnTimeDeliveryRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnTimeDeliveryRate

`func (o *SupplierPerformance) SetOnTimeDeliveryRate(v float32)`

SetOnTimeDeliveryRate sets OnTimeDeliveryRate field to given value.

### HasOnTimeDeliveryRate

`func (o *SupplierPerformance) HasOnTimeDeliveryRate() bool`

HasOnTimeDeliveryRate returns a boolean if a field has been set.

### GetQualityRating

`func (o *SupplierPerformance) GetQualityRating() float32`

GetQualityRating returns the QualityRating field if non-nil, zero value otherwise.

### GetQualityRatingOk

`func (o *SupplierPerformance) GetQualityRatingOk() (*float32, bool)`

GetQualityRatingOk returns a tuple with the QualityRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQualityRating

`func (o *SupplierPerformance) SetQualityRating(v float32)`

SetQualityRating sets QualityRating field to given value.

### HasQualityRating

`func (o *SupplierPerformance) HasQualityRating() bool`

HasQualityRating returns a boolean if a field has been set.

### GetAverageLeadTime

`func (o *SupplierPerformance) GetAverageLeadTime() int32`

GetAverageLeadTime returns the AverageLeadTime field if non-nil, zero value otherwise.

### GetAverageLeadTimeOk

`func (o *SupplierPerformance) GetAverageLeadTimeOk() (*int32, bool)`

GetAverageLeadTimeOk returns a tuple with the AverageLeadTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageLeadTime

`func (o *SupplierPerformance) SetAverageLeadTime(v int32)`

SetAverageLeadTime sets AverageLeadTime field to given value.

### HasAverageLeadTime

`func (o *SupplierPerformance) HasAverageLeadTime() bool`

HasAverageLeadTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


