# GetReservationQuoteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PropertyId** | **string** |  | 
**UnitTypeId** | **string** |  | 
**CheckInDate** | **string** |  | 
**CheckOutDate** | **string** |  | 
**GuestCount** | [**GetReservationQuoteRequestGuestCount**](GetReservationQuoteRequestGuestCount.md) |  | 
**RateStrategyId** | Pointer to **string** |  | [optional] 
**PromoCode** | Pointer to **string** |  | [optional] 

## Methods

### NewGetReservationQuoteRequest

`func NewGetReservationQuoteRequest(propertyId string, unitTypeId string, checkInDate string, checkOutDate string, guestCount GetReservationQuoteRequestGuestCount, ) *GetReservationQuoteRequest`

NewGetReservationQuoteRequest instantiates a new GetReservationQuoteRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetReservationQuoteRequestWithDefaults

`func NewGetReservationQuoteRequestWithDefaults() *GetReservationQuoteRequest`

NewGetReservationQuoteRequestWithDefaults instantiates a new GetReservationQuoteRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPropertyId

`func (o *GetReservationQuoteRequest) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *GetReservationQuoteRequest) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *GetReservationQuoteRequest) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetUnitTypeId

`func (o *GetReservationQuoteRequest) GetUnitTypeId() string`

GetUnitTypeId returns the UnitTypeId field if non-nil, zero value otherwise.

### GetUnitTypeIdOk

`func (o *GetReservationQuoteRequest) GetUnitTypeIdOk() (*string, bool)`

GetUnitTypeIdOk returns a tuple with the UnitTypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitTypeId

`func (o *GetReservationQuoteRequest) SetUnitTypeId(v string)`

SetUnitTypeId sets UnitTypeId field to given value.


### GetCheckInDate

`func (o *GetReservationQuoteRequest) GetCheckInDate() string`

GetCheckInDate returns the CheckInDate field if non-nil, zero value otherwise.

### GetCheckInDateOk

`func (o *GetReservationQuoteRequest) GetCheckInDateOk() (*string, bool)`

GetCheckInDateOk returns a tuple with the CheckInDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckInDate

`func (o *GetReservationQuoteRequest) SetCheckInDate(v string)`

SetCheckInDate sets CheckInDate field to given value.


### GetCheckOutDate

`func (o *GetReservationQuoteRequest) GetCheckOutDate() string`

GetCheckOutDate returns the CheckOutDate field if non-nil, zero value otherwise.

### GetCheckOutDateOk

`func (o *GetReservationQuoteRequest) GetCheckOutDateOk() (*string, bool)`

GetCheckOutDateOk returns a tuple with the CheckOutDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckOutDate

`func (o *GetReservationQuoteRequest) SetCheckOutDate(v string)`

SetCheckOutDate sets CheckOutDate field to given value.


### GetGuestCount

`func (o *GetReservationQuoteRequest) GetGuestCount() GetReservationQuoteRequestGuestCount`

GetGuestCount returns the GuestCount field if non-nil, zero value otherwise.

### GetGuestCountOk

`func (o *GetReservationQuoteRequest) GetGuestCountOk() (*GetReservationQuoteRequestGuestCount, bool)`

GetGuestCountOk returns a tuple with the GuestCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestCount

`func (o *GetReservationQuoteRequest) SetGuestCount(v GetReservationQuoteRequestGuestCount)`

SetGuestCount sets GuestCount field to given value.


### GetRateStrategyId

`func (o *GetReservationQuoteRequest) GetRateStrategyId() string`

GetRateStrategyId returns the RateStrategyId field if non-nil, zero value otherwise.

### GetRateStrategyIdOk

`func (o *GetReservationQuoteRequest) GetRateStrategyIdOk() (*string, bool)`

GetRateStrategyIdOk returns a tuple with the RateStrategyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateStrategyId

`func (o *GetReservationQuoteRequest) SetRateStrategyId(v string)`

SetRateStrategyId sets RateStrategyId field to given value.

### HasRateStrategyId

`func (o *GetReservationQuoteRequest) HasRateStrategyId() bool`

HasRateStrategyId returns a boolean if a field has been set.

### GetPromoCode

`func (o *GetReservationQuoteRequest) GetPromoCode() string`

GetPromoCode returns the PromoCode field if non-nil, zero value otherwise.

### GetPromoCodeOk

`func (o *GetReservationQuoteRequest) GetPromoCodeOk() (*string, bool)`

GetPromoCodeOk returns a tuple with the PromoCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromoCode

`func (o *GetReservationQuoteRequest) SetPromoCode(v string)`

SetPromoCode sets PromoCode field to given value.

### HasPromoCode

`func (o *GetReservationQuoteRequest) HasPromoCode() bool`

HasPromoCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


