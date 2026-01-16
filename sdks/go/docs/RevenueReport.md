# RevenueReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportId** | **string** |  | [readonly] 
**PropertyId** | **string** |  | 
**StartDate** | **string** |  | 
**EndDate** | **string** |  | 
**TotalRevenue** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**RevenueByCategory** | Pointer to [**RevenueReportAllOfRevenueByCategory**](RevenueReportAllOfRevenueByCategory.md) |  | [optional] 
**OccupancyRate** | Pointer to **float32** | Percentage | [optional] 
**AverageDailyRate** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**RevPAR** | Pointer to [**Model0**](Model0.md) | Revenue per available room | [optional] 
**GeneratedAt** | Pointer to **time.Time** |  | [optional] [readonly] 

## Methods

### NewRevenueReport

`func NewRevenueReport(reportId string, propertyId string, startDate string, endDate string, ) *RevenueReport`

NewRevenueReport instantiates a new RevenueReport object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueReportWithDefaults

`func NewRevenueReportWithDefaults() *RevenueReport`

NewRevenueReportWithDefaults instantiates a new RevenueReport object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReportId

`func (o *RevenueReport) GetReportId() string`

GetReportId returns the ReportId field if non-nil, zero value otherwise.

### GetReportIdOk

`func (o *RevenueReport) GetReportIdOk() (*string, bool)`

GetReportIdOk returns a tuple with the ReportId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportId

`func (o *RevenueReport) SetReportId(v string)`

SetReportId sets ReportId field to given value.


### GetPropertyId

`func (o *RevenueReport) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *RevenueReport) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *RevenueReport) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetStartDate

`func (o *RevenueReport) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *RevenueReport) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *RevenueReport) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.


### GetEndDate

`func (o *RevenueReport) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *RevenueReport) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *RevenueReport) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.


### GetTotalRevenue

`func (o *RevenueReport) GetTotalRevenue() Model0`

GetTotalRevenue returns the TotalRevenue field if non-nil, zero value otherwise.

### GetTotalRevenueOk

`func (o *RevenueReport) GetTotalRevenueOk() (*Model0, bool)`

GetTotalRevenueOk returns a tuple with the TotalRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRevenue

`func (o *RevenueReport) SetTotalRevenue(v Model0)`

SetTotalRevenue sets TotalRevenue field to given value.

### HasTotalRevenue

`func (o *RevenueReport) HasTotalRevenue() bool`

HasTotalRevenue returns a boolean if a field has been set.

### GetRevenueByCategory

`func (o *RevenueReport) GetRevenueByCategory() RevenueReportAllOfRevenueByCategory`

GetRevenueByCategory returns the RevenueByCategory field if non-nil, zero value otherwise.

### GetRevenueByCategoryOk

`func (o *RevenueReport) GetRevenueByCategoryOk() (*RevenueReportAllOfRevenueByCategory, bool)`

GetRevenueByCategoryOk returns a tuple with the RevenueByCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueByCategory

`func (o *RevenueReport) SetRevenueByCategory(v RevenueReportAllOfRevenueByCategory)`

SetRevenueByCategory sets RevenueByCategory field to given value.

### HasRevenueByCategory

`func (o *RevenueReport) HasRevenueByCategory() bool`

HasRevenueByCategory returns a boolean if a field has been set.

### GetOccupancyRate

`func (o *RevenueReport) GetOccupancyRate() float32`

GetOccupancyRate returns the OccupancyRate field if non-nil, zero value otherwise.

### GetOccupancyRateOk

`func (o *RevenueReport) GetOccupancyRateOk() (*float32, bool)`

GetOccupancyRateOk returns a tuple with the OccupancyRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccupancyRate

`func (o *RevenueReport) SetOccupancyRate(v float32)`

SetOccupancyRate sets OccupancyRate field to given value.

### HasOccupancyRate

`func (o *RevenueReport) HasOccupancyRate() bool`

HasOccupancyRate returns a boolean if a field has been set.

### GetAverageDailyRate

`func (o *RevenueReport) GetAverageDailyRate() Model0`

GetAverageDailyRate returns the AverageDailyRate field if non-nil, zero value otherwise.

### GetAverageDailyRateOk

`func (o *RevenueReport) GetAverageDailyRateOk() (*Model0, bool)`

GetAverageDailyRateOk returns a tuple with the AverageDailyRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageDailyRate

`func (o *RevenueReport) SetAverageDailyRate(v Model0)`

SetAverageDailyRate sets AverageDailyRate field to given value.

### HasAverageDailyRate

`func (o *RevenueReport) HasAverageDailyRate() bool`

HasAverageDailyRate returns a boolean if a field has been set.

### GetRevPAR

`func (o *RevenueReport) GetRevPAR() Model0`

GetRevPAR returns the RevPAR field if non-nil, zero value otherwise.

### GetRevPAROk

`func (o *RevenueReport) GetRevPAROk() (*Model0, bool)`

GetRevPAROk returns a tuple with the RevPAR field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevPAR

`func (o *RevenueReport) SetRevPAR(v Model0)`

SetRevPAR sets RevPAR field to given value.

### HasRevPAR

`func (o *RevenueReport) HasRevPAR() bool`

HasRevPAR returns a boolean if a field has been set.

### GetGeneratedAt

`func (o *RevenueReport) GetGeneratedAt() time.Time`

GetGeneratedAt returns the GeneratedAt field if non-nil, zero value otherwise.

### GetGeneratedAtOk

`func (o *RevenueReport) GetGeneratedAtOk() (*time.Time, bool)`

GetGeneratedAtOk returns a tuple with the GeneratedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedAt

`func (o *RevenueReport) SetGeneratedAt(v time.Time)`

SetGeneratedAt sets GeneratedAt field to given value.

### HasGeneratedAt

`func (o *RevenueReport) HasGeneratedAt() bool`

HasGeneratedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


