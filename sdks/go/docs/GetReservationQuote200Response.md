# GetReservationQuote200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QuoteId** | Pointer to **string** |  | [optional] 
**TotalAmount** | Pointer to [**Money**](Money.md) |  | [optional] 
**Breakdown** | Pointer to **[]map[string]interface{}** |  | [optional] 
**CancellationPolicy** | Pointer to [**CancellationPolicy**](CancellationPolicy.md) |  | [optional] 
**ValidUntil** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewGetReservationQuote200Response

`func NewGetReservationQuote200Response() *GetReservationQuote200Response`

NewGetReservationQuote200Response instantiates a new GetReservationQuote200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetReservationQuote200ResponseWithDefaults

`func NewGetReservationQuote200ResponseWithDefaults() *GetReservationQuote200Response`

NewGetReservationQuote200ResponseWithDefaults instantiates a new GetReservationQuote200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuoteId

`func (o *GetReservationQuote200Response) GetQuoteId() string`

GetQuoteId returns the QuoteId field if non-nil, zero value otherwise.

### GetQuoteIdOk

`func (o *GetReservationQuote200Response) GetQuoteIdOk() (*string, bool)`

GetQuoteIdOk returns a tuple with the QuoteId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuoteId

`func (o *GetReservationQuote200Response) SetQuoteId(v string)`

SetQuoteId sets QuoteId field to given value.

### HasQuoteId

`func (o *GetReservationQuote200Response) HasQuoteId() bool`

HasQuoteId returns a boolean if a field has been set.

### GetTotalAmount

`func (o *GetReservationQuote200Response) GetTotalAmount() Money`

GetTotalAmount returns the TotalAmount field if non-nil, zero value otherwise.

### GetTotalAmountOk

`func (o *GetReservationQuote200Response) GetTotalAmountOk() (*Money, bool)`

GetTotalAmountOk returns a tuple with the TotalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmount

`func (o *GetReservationQuote200Response) SetTotalAmount(v Money)`

SetTotalAmount sets TotalAmount field to given value.

### HasTotalAmount

`func (o *GetReservationQuote200Response) HasTotalAmount() bool`

HasTotalAmount returns a boolean if a field has been set.

### GetBreakdown

`func (o *GetReservationQuote200Response) GetBreakdown() []map[string]interface{}`

GetBreakdown returns the Breakdown field if non-nil, zero value otherwise.

### GetBreakdownOk

`func (o *GetReservationQuote200Response) GetBreakdownOk() (*[]map[string]interface{}, bool)`

GetBreakdownOk returns a tuple with the Breakdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBreakdown

`func (o *GetReservationQuote200Response) SetBreakdown(v []map[string]interface{})`

SetBreakdown sets Breakdown field to given value.

### HasBreakdown

`func (o *GetReservationQuote200Response) HasBreakdown() bool`

HasBreakdown returns a boolean if a field has been set.

### GetCancellationPolicy

`func (o *GetReservationQuote200Response) GetCancellationPolicy() CancellationPolicy`

GetCancellationPolicy returns the CancellationPolicy field if non-nil, zero value otherwise.

### GetCancellationPolicyOk

`func (o *GetReservationQuote200Response) GetCancellationPolicyOk() (*CancellationPolicy, bool)`

GetCancellationPolicyOk returns a tuple with the CancellationPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationPolicy

`func (o *GetReservationQuote200Response) SetCancellationPolicy(v CancellationPolicy)`

SetCancellationPolicy sets CancellationPolicy field to given value.

### HasCancellationPolicy

`func (o *GetReservationQuote200Response) HasCancellationPolicy() bool`

HasCancellationPolicy returns a boolean if a field has been set.

### GetValidUntil

`func (o *GetReservationQuote200Response) GetValidUntil() time.Time`

GetValidUntil returns the ValidUntil field if non-nil, zero value otherwise.

### GetValidUntilOk

`func (o *GetReservationQuote200Response) GetValidUntilOk() (*time.Time, bool)`

GetValidUntilOk returns a tuple with the ValidUntil field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidUntil

`func (o *GetReservationQuote200Response) SetValidUntil(v time.Time)`

SetValidUntil sets ValidUntil field to given value.

### HasValidUntil

`func (o *GetReservationQuote200Response) HasValidUntil() bool`

HasValidUntil returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


