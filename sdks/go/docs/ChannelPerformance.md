# ChannelPerformance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelId** | **string** |  | 
**StartDate** | **string** |  | 
**EndDate** | **string** |  | 
**Bookings** | Pointer to **int32** | Total bookings | [optional] 
**Revenue** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Commission** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**NetRevenue** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**AverageBookingValue** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**CancellationRate** | Pointer to **float32** | Percentage | [optional] 
**ConversionRate** | Pointer to **float32** | Percentage | [optional] 

## Methods

### NewChannelPerformance

`func NewChannelPerformance(channelId string, startDate string, endDate string, ) *ChannelPerformance`

NewChannelPerformance instantiates a new ChannelPerformance object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelPerformanceWithDefaults

`func NewChannelPerformanceWithDefaults() *ChannelPerformance`

NewChannelPerformanceWithDefaults instantiates a new ChannelPerformance object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelId

`func (o *ChannelPerformance) GetChannelId() string`

GetChannelId returns the ChannelId field if non-nil, zero value otherwise.

### GetChannelIdOk

`func (o *ChannelPerformance) GetChannelIdOk() (*string, bool)`

GetChannelIdOk returns a tuple with the ChannelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelId

`func (o *ChannelPerformance) SetChannelId(v string)`

SetChannelId sets ChannelId field to given value.


### GetStartDate

`func (o *ChannelPerformance) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ChannelPerformance) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ChannelPerformance) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.


### GetEndDate

`func (o *ChannelPerformance) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ChannelPerformance) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ChannelPerformance) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.


### GetBookings

`func (o *ChannelPerformance) GetBookings() int32`

GetBookings returns the Bookings field if non-nil, zero value otherwise.

### GetBookingsOk

`func (o *ChannelPerformance) GetBookingsOk() (*int32, bool)`

GetBookingsOk returns a tuple with the Bookings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookings

`func (o *ChannelPerformance) SetBookings(v int32)`

SetBookings sets Bookings field to given value.

### HasBookings

`func (o *ChannelPerformance) HasBookings() bool`

HasBookings returns a boolean if a field has been set.

### GetRevenue

`func (o *ChannelPerformance) GetRevenue() Model0`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *ChannelPerformance) GetRevenueOk() (*Model0, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *ChannelPerformance) SetRevenue(v Model0)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *ChannelPerformance) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetCommission

`func (o *ChannelPerformance) GetCommission() Model0`

GetCommission returns the Commission field if non-nil, zero value otherwise.

### GetCommissionOk

`func (o *ChannelPerformance) GetCommissionOk() (*Model0, bool)`

GetCommissionOk returns a tuple with the Commission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommission

`func (o *ChannelPerformance) SetCommission(v Model0)`

SetCommission sets Commission field to given value.

### HasCommission

`func (o *ChannelPerformance) HasCommission() bool`

HasCommission returns a boolean if a field has been set.

### GetNetRevenue

`func (o *ChannelPerformance) GetNetRevenue() Model0`

GetNetRevenue returns the NetRevenue field if non-nil, zero value otherwise.

### GetNetRevenueOk

`func (o *ChannelPerformance) GetNetRevenueOk() (*Model0, bool)`

GetNetRevenueOk returns a tuple with the NetRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNetRevenue

`func (o *ChannelPerformance) SetNetRevenue(v Model0)`

SetNetRevenue sets NetRevenue field to given value.

### HasNetRevenue

`func (o *ChannelPerformance) HasNetRevenue() bool`

HasNetRevenue returns a boolean if a field has been set.

### GetAverageBookingValue

`func (o *ChannelPerformance) GetAverageBookingValue() Model0`

GetAverageBookingValue returns the AverageBookingValue field if non-nil, zero value otherwise.

### GetAverageBookingValueOk

`func (o *ChannelPerformance) GetAverageBookingValueOk() (*Model0, bool)`

GetAverageBookingValueOk returns a tuple with the AverageBookingValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageBookingValue

`func (o *ChannelPerformance) SetAverageBookingValue(v Model0)`

SetAverageBookingValue sets AverageBookingValue field to given value.

### HasAverageBookingValue

`func (o *ChannelPerformance) HasAverageBookingValue() bool`

HasAverageBookingValue returns a boolean if a field has been set.

### GetCancellationRate

`func (o *ChannelPerformance) GetCancellationRate() float32`

GetCancellationRate returns the CancellationRate field if non-nil, zero value otherwise.

### GetCancellationRateOk

`func (o *ChannelPerformance) GetCancellationRateOk() (*float32, bool)`

GetCancellationRateOk returns a tuple with the CancellationRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationRate

`func (o *ChannelPerformance) SetCancellationRate(v float32)`

SetCancellationRate sets CancellationRate field to given value.

### HasCancellationRate

`func (o *ChannelPerformance) HasCancellationRate() bool`

HasCancellationRate returns a boolean if a field has been set.

### GetConversionRate

`func (o *ChannelPerformance) GetConversionRate() float32`

GetConversionRate returns the ConversionRate field if non-nil, zero value otherwise.

### GetConversionRateOk

`func (o *ChannelPerformance) GetConversionRateOk() (*float32, bool)`

GetConversionRateOk returns a tuple with the ConversionRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionRate

`func (o *ChannelPerformance) SetConversionRate(v float32)`

SetConversionRate sets ConversionRate field to given value.

### HasConversionRate

`func (o *ChannelPerformance) HasConversionRate() bool`

HasConversionRate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


