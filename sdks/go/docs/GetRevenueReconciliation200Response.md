# GetRevenueReconciliation200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** |  | [optional] 
**TotalRevenue** | Pointer to [**Money**](Money.md) |  | [optional] 
**TotalPayments** | Pointer to [**Money**](Money.md) |  | [optional] 
**Variance** | Pointer to [**Money**](Money.md) |  | [optional] 

## Methods

### NewGetRevenueReconciliation200Response

`func NewGetRevenueReconciliation200Response() *GetRevenueReconciliation200Response`

NewGetRevenueReconciliation200Response instantiates a new GetRevenueReconciliation200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetRevenueReconciliation200ResponseWithDefaults

`func NewGetRevenueReconciliation200ResponseWithDefaults() *GetRevenueReconciliation200Response`

NewGetRevenueReconciliation200ResponseWithDefaults instantiates a new GetRevenueReconciliation200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *GetRevenueReconciliation200Response) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *GetRevenueReconciliation200Response) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *GetRevenueReconciliation200Response) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *GetRevenueReconciliation200Response) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetTotalRevenue

`func (o *GetRevenueReconciliation200Response) GetTotalRevenue() Money`

GetTotalRevenue returns the TotalRevenue field if non-nil, zero value otherwise.

### GetTotalRevenueOk

`func (o *GetRevenueReconciliation200Response) GetTotalRevenueOk() (*Money, bool)`

GetTotalRevenueOk returns a tuple with the TotalRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRevenue

`func (o *GetRevenueReconciliation200Response) SetTotalRevenue(v Money)`

SetTotalRevenue sets TotalRevenue field to given value.

### HasTotalRevenue

`func (o *GetRevenueReconciliation200Response) HasTotalRevenue() bool`

HasTotalRevenue returns a boolean if a field has been set.

### GetTotalPayments

`func (o *GetRevenueReconciliation200Response) GetTotalPayments() Money`

GetTotalPayments returns the TotalPayments field if non-nil, zero value otherwise.

### GetTotalPaymentsOk

`func (o *GetRevenueReconciliation200Response) GetTotalPaymentsOk() (*Money, bool)`

GetTotalPaymentsOk returns a tuple with the TotalPayments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPayments

`func (o *GetRevenueReconciliation200Response) SetTotalPayments(v Money)`

SetTotalPayments sets TotalPayments field to given value.

### HasTotalPayments

`func (o *GetRevenueReconciliation200Response) HasTotalPayments() bool`

HasTotalPayments returns a boolean if a field has been set.

### GetVariance

`func (o *GetRevenueReconciliation200Response) GetVariance() Money`

GetVariance returns the Variance field if non-nil, zero value otherwise.

### GetVarianceOk

`func (o *GetRevenueReconciliation200Response) GetVarianceOk() (*Money, bool)`

GetVarianceOk returns a tuple with the Variance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariance

`func (o *GetRevenueReconciliation200Response) SetVariance(v Money)`

SetVariance sets Variance field to given value.

### HasVariance

`func (o *GetRevenueReconciliation200Response) HasVariance() bool`

HasVariance returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


