# GetTaxReport200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalTax** | Pointer to [**Money**](Money.md) |  | [optional] 
**Breakdown** | Pointer to **[]map[string]interface{}** |  | [optional] 

## Methods

### NewGetTaxReport200Response

`func NewGetTaxReport200Response() *GetTaxReport200Response`

NewGetTaxReport200Response instantiates a new GetTaxReport200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetTaxReport200ResponseWithDefaults

`func NewGetTaxReport200ResponseWithDefaults() *GetTaxReport200Response`

NewGetTaxReport200ResponseWithDefaults instantiates a new GetTaxReport200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalTax

`func (o *GetTaxReport200Response) GetTotalTax() Money`

GetTotalTax returns the TotalTax field if non-nil, zero value otherwise.

### GetTotalTaxOk

`func (o *GetTaxReport200Response) GetTotalTaxOk() (*Money, bool)`

GetTotalTaxOk returns a tuple with the TotalTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalTax

`func (o *GetTaxReport200Response) SetTotalTax(v Money)`

SetTotalTax sets TotalTax field to given value.

### HasTotalTax

`func (o *GetTaxReport200Response) HasTotalTax() bool`

HasTotalTax returns a boolean if a field has been set.

### GetBreakdown

`func (o *GetTaxReport200Response) GetBreakdown() []map[string]interface{}`

GetBreakdown returns the Breakdown field if non-nil, zero value otherwise.

### GetBreakdownOk

`func (o *GetTaxReport200Response) GetBreakdownOk() (*[]map[string]interface{}, bool)`

GetBreakdownOk returns a tuple with the Breakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBreakdown

`func (o *GetTaxReport200Response) SetBreakdown(v []map[string]interface{})`

SetBreakdown sets Breakdown field to given value.

### HasBreakdown

`func (o *GetTaxReport200Response) HasBreakdown() bool`

HasBreakdown returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


