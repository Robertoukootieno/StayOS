# Stay

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StayId** | **string** |  | [readonly] 
**ReservationId** | **string** | Associated reservation | 
**PropertyId** | **string** |  | 
**InventoryUnitId** | **string** | Assigned room/unit | 
**GuestId** | **string** | Primary guest | 
**AdditionalGuests** | Pointer to **[]string** | Additional guest IDs | [optional] 
**CheckInDate** | **time.Time** | Actual check-in timestamp | 
**ExpectedCheckOutDate** | **string** |  | 
**ActualCheckOutDate** | Pointer to **time.Time** | Actual check-out timestamp | [optional] 
**Status** | **string** |  | 
**GuestCount** | Pointer to [**ReservationAllOfGuestCount**](ReservationAllOfGuestCount.md) |  | [optional] 
**KeyCards** | Pointer to [**[]Model0**](Model0.md) |  | [optional] 
**IncidentalCharges** | Pointer to [**[]Model0**](Model0.md) |  | [optional] 
**SpecialRequests** | Pointer to **string** |  | [optional] 
**Notes** | Pointer to **string** | Internal staff notes | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Links** | Pointer to [**StayAllOfLinks**](StayAllOfLinks.md) |  | [optional] 

## Methods

### NewStay

`func NewStay(stayId string, reservationId string, propertyId string, inventoryUnitId string, guestId string, checkInDate time.Time, expectedCheckOutDate string, status string, ) *Stay`

NewStay instantiates a new Stay object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStayWithDefaults

`func NewStayWithDefaults() *Stay`

NewStayWithDefaults instantiates a new Stay object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStayId

`func (o *Stay) GetStayId() string`

GetStayId returns the StayId field if non-nil, zero value otherwise.

### GetStayIdOk

`func (o *Stay) GetStayIdOk() (*string, bool)`

GetStayIdOk returns a tuple with the StayId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayId

`func (o *Stay) SetStayId(v string)`

SetStayId sets StayId field to given value.


### GetReservationId

`func (o *Stay) GetReservationId() string`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *Stay) GetReservationIdOk() (*string, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *Stay) SetReservationId(v string)`

SetReservationId sets ReservationId field to given value.


### GetPropertyId

`func (o *Stay) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *Stay) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *Stay) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetInventoryUnitId

`func (o *Stay) GetInventoryUnitId() string`

GetInventoryUnitId returns the InventoryUnitId field if non-nil, zero value otherwise.

### GetInventoryUnitIdOk

`func (o *Stay) GetInventoryUnitIdOk() (*string, bool)`

GetInventoryUnitIdOk returns a tuple with the InventoryUnitId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryUnitId

`func (o *Stay) SetInventoryUnitId(v string)`

SetInventoryUnitId sets InventoryUnitId field to given value.


### GetGuestId

`func (o *Stay) GetGuestId() string`

GetGuestId returns the GuestId field if non-nil, zero value otherwise.

### GetGuestIdOk

`func (o *Stay) GetGuestIdOk() (*string, bool)`

GetGuestIdOk returns a tuple with the GuestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestId

`func (o *Stay) SetGuestId(v string)`

SetGuestId sets GuestId field to given value.


### GetAdditionalGuests

`func (o *Stay) GetAdditionalGuests() []string`

GetAdditionalGuests returns the AdditionalGuests field if non-nil, zero value otherwise.

### GetAdditionalGuestsOk

`func (o *Stay) GetAdditionalGuestsOk() (*[]string, bool)`

GetAdditionalGuestsOk returns a tuple with the AdditionalGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalGuests

`func (o *Stay) SetAdditionalGuests(v []string)`

SetAdditionalGuests sets AdditionalGuests field to given value.

### HasAdditionalGuests

`func (o *Stay) HasAdditionalGuests() bool`

HasAdditionalGuests returns a boolean if a field has been set.

### GetCheckInDate

`func (o *Stay) GetCheckInDate() time.Time`

GetCheckInDate returns the CheckInDate field if non-nil, zero value otherwise.

### GetCheckInDateOk

`func (o *Stay) GetCheckInDateOk() (*time.Time, bool)`

GetCheckInDateOk returns a tuple with the CheckInDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckInDate

`func (o *Stay) SetCheckInDate(v time.Time)`

SetCheckInDate sets CheckInDate field to given value.


### GetExpectedCheckOutDate

`func (o *Stay) GetExpectedCheckOutDate() string`

GetExpectedCheckOutDate returns the ExpectedCheckOutDate field if non-nil, zero value otherwise.

### GetExpectedCheckOutDateOk

`func (o *Stay) GetExpectedCheckOutDateOk() (*string, bool)`

GetExpectedCheckOutDateOk returns a tuple with the ExpectedCheckOutDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedCheckOutDate

`func (o *Stay) SetExpectedCheckOutDate(v string)`

SetExpectedCheckOutDate sets ExpectedCheckOutDate field to given value.


### GetActualCheckOutDate

`func (o *Stay) GetActualCheckOutDate() time.Time`

GetActualCheckOutDate returns the ActualCheckOutDate field if non-nil, zero value otherwise.

### GetActualCheckOutDateOk

`func (o *Stay) GetActualCheckOutDateOk() (*time.Time, bool)`

GetActualCheckOutDateOk returns a tuple with the ActualCheckOutDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualCheckOutDate

`func (o *Stay) SetActualCheckOutDate(v time.Time)`

SetActualCheckOutDate sets ActualCheckOutDate field to given value.

### HasActualCheckOutDate

`func (o *Stay) HasActualCheckOutDate() bool`

HasActualCheckOutDate returns a boolean if a field has been set.

### GetStatus

`func (o *Stay) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Stay) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Stay) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetGuestCount

`func (o *Stay) GetGuestCount() ReservationAllOfGuestCount`

GetGuestCount returns the GuestCount field if non-nil, zero value otherwise.

### GetGuestCountOk

`func (o *Stay) GetGuestCountOk() (*ReservationAllOfGuestCount, bool)`

GetGuestCountOk returns a tuple with the GuestCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestCount

`func (o *Stay) SetGuestCount(v ReservationAllOfGuestCount)`

SetGuestCount sets GuestCount field to given value.

### HasGuestCount

`func (o *Stay) HasGuestCount() bool`

HasGuestCount returns a boolean if a field has been set.

### GetKeyCards

`func (o *Stay) GetKeyCards() []Model0`

GetKeyCards returns the KeyCards field if non-nil, zero value otherwise.

### GetKeyCardsOk

`func (o *Stay) GetKeyCardsOk() (*[]Model0, bool)`

GetKeyCardsOk returns a tuple with the KeyCards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyCards

`func (o *Stay) SetKeyCards(v []Model0)`

SetKeyCards sets KeyCards field to given value.

### HasKeyCards

`func (o *Stay) HasKeyCards() bool`

HasKeyCards returns a boolean if a field has been set.

### GetIncidentalCharges

`func (o *Stay) GetIncidentalCharges() []Model0`

GetIncidentalCharges returns the IncidentalCharges field if non-nil, zero value otherwise.

### GetIncidentalChargesOk

`func (o *Stay) GetIncidentalChargesOk() (*[]Model0, bool)`

GetIncidentalChargesOk returns a tuple with the IncidentalCharges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidentalCharges

`func (o *Stay) SetIncidentalCharges(v []Model0)`

SetIncidentalCharges sets IncidentalCharges field to given value.

### HasIncidentalCharges

`func (o *Stay) HasIncidentalCharges() bool`

HasIncidentalCharges returns a boolean if a field has been set.

### GetSpecialRequests

`func (o *Stay) GetSpecialRequests() string`

GetSpecialRequests returns the SpecialRequests field if non-nil, zero value otherwise.

### GetSpecialRequestsOk

`func (o *Stay) GetSpecialRequestsOk() (*string, bool)`

GetSpecialRequestsOk returns a tuple with the SpecialRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecialRequests

`func (o *Stay) SetSpecialRequests(v string)`

SetSpecialRequests sets SpecialRequests field to given value.

### HasSpecialRequests

`func (o *Stay) HasSpecialRequests() bool`

HasSpecialRequests returns a boolean if a field has been set.

### GetNotes

`func (o *Stay) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *Stay) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *Stay) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *Stay) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetMetadata

`func (o *Stay) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Stay) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Stay) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Stay) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetLinks

`func (o *Stay) GetLinks() StayAllOfLinks`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Stay) GetLinksOk() (*StayAllOfLinks, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Stay) SetLinks(v StayAllOfLinks)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Stay) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


