# Reservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | **string** |  | [readonly] 
**PropertyId** | **string** |  | 
**GuestId** | **string** |  | 
**CheckInDate** | **string** |  | 
**CheckOutDate** | **string** |  | 
**Status** | **string** |  | 
**GuestCount** | Pointer to [**ReservationAllOfGuestCount**](ReservationAllOfGuestCount.md) |  | [optional] 
**SpecialRequests** | Pointer to **string** |  | [optional] 
**TotalAmount** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**CancellationPolicy** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**Version** | Pointer to **int32** | Version for optimistic locking | [optional] [readonly] 

## Methods

### NewReservation

`func NewReservation(reservationId string, propertyId string, guestId string, checkInDate string, checkOutDate string, status string, ) *Reservation`

NewReservation instantiates a new Reservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationWithDefaults

`func NewReservationWithDefaults() *Reservation`

NewReservationWithDefaults instantiates a new Reservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationId

`func (o *Reservation) GetReservationId() string`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *Reservation) GetReservationIdOk() (*string, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *Reservation) SetReservationId(v string)`

SetReservationId sets ReservationId field to given value.


### GetPropertyId

`func (o *Reservation) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *Reservation) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *Reservation) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetGuestId

`func (o *Reservation) GetGuestId() string`

GetGuestId returns the GuestId field if non-nil, zero value otherwise.

### GetGuestIdOk

`func (o *Reservation) GetGuestIdOk() (*string, bool)`

GetGuestIdOk returns a tuple with the GuestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestId

`func (o *Reservation) SetGuestId(v string)`

SetGuestId sets GuestId field to given value.


### GetCheckInDate

`func (o *Reservation) GetCheckInDate() string`

GetCheckInDate returns the CheckInDate field if non-nil, zero value otherwise.

### GetCheckInDateOk

`func (o *Reservation) GetCheckInDateOk() (*string, bool)`

GetCheckInDateOk returns a tuple with the CheckInDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckInDate

`func (o *Reservation) SetCheckInDate(v string)`

SetCheckInDate sets CheckInDate field to given value.


### GetCheckOutDate

`func (o *Reservation) GetCheckOutDate() string`

GetCheckOutDate returns the CheckOutDate field if non-nil, zero value otherwise.

### GetCheckOutDateOk

`func (o *Reservation) GetCheckOutDateOk() (*string, bool)`

GetCheckOutDateOk returns a tuple with the CheckOutDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckOutDate

`func (o *Reservation) SetCheckOutDate(v string)`

SetCheckOutDate sets CheckOutDate field to given value.


### GetStatus

`func (o *Reservation) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Reservation) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Reservation) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetGuestCount

`func (o *Reservation) GetGuestCount() ReservationAllOfGuestCount`

GetGuestCount returns the GuestCount field if non-nil, zero value otherwise.

### GetGuestCountOk

`func (o *Reservation) GetGuestCountOk() (*ReservationAllOfGuestCount, bool)`

GetGuestCountOk returns a tuple with the GuestCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestCount

`func (o *Reservation) SetGuestCount(v ReservationAllOfGuestCount)`

SetGuestCount sets GuestCount field to given value.

### HasGuestCount

`func (o *Reservation) HasGuestCount() bool`

HasGuestCount returns a boolean if a field has been set.

### GetSpecialRequests

`func (o *Reservation) GetSpecialRequests() string`

GetSpecialRequests returns the SpecialRequests field if non-nil, zero value otherwise.

### GetSpecialRequestsOk

`func (o *Reservation) GetSpecialRequestsOk() (*string, bool)`

GetSpecialRequestsOk returns a tuple with the SpecialRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecialRequests

`func (o *Reservation) SetSpecialRequests(v string)`

SetSpecialRequests sets SpecialRequests field to given value.

### HasSpecialRequests

`func (o *Reservation) HasSpecialRequests() bool`

HasSpecialRequests returns a boolean if a field has been set.

### GetTotalAmount

`func (o *Reservation) GetTotalAmount() Model0`

GetTotalAmount returns the TotalAmount field if non-nil, zero value otherwise.

### GetTotalAmountOk

`func (o *Reservation) GetTotalAmountOk() (*Model0, bool)`

GetTotalAmountOk returns a tuple with the TotalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmount

`func (o *Reservation) SetTotalAmount(v Model0)`

SetTotalAmount sets TotalAmount field to given value.

### HasTotalAmount

`func (o *Reservation) HasTotalAmount() bool`

HasTotalAmount returns a boolean if a field has been set.

### GetCancellationPolicy

`func (o *Reservation) GetCancellationPolicy() Model0`

GetCancellationPolicy returns the CancellationPolicy field if non-nil, zero value otherwise.

### GetCancellationPolicyOk

`func (o *Reservation) GetCancellationPolicyOk() (*Model0, bool)`

GetCancellationPolicyOk returns a tuple with the CancellationPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationPolicy

`func (o *Reservation) SetCancellationPolicy(v Model0)`

SetCancellationPolicy sets CancellationPolicy field to given value.

### HasCancellationPolicy

`func (o *Reservation) HasCancellationPolicy() bool`

HasCancellationPolicy returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Reservation) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Reservation) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Reservation) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Reservation) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Reservation) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Reservation) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Reservation) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Reservation) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetVersion

`func (o *Reservation) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Reservation) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Reservation) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *Reservation) HasVersion() bool`

HasVersion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


