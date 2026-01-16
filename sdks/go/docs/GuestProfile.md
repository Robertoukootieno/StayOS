# GuestProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestId** | **string** |  | [readonly] 
**FirstName** | **string** |  | 
**LastName** | **string** |  | 
**Email** | **string** |  | 
**Phone** | Pointer to **string** |  | [optional] 
**DateOfBirth** | Pointer to **string** |  | [optional] 
**Nationality** | Pointer to **string** |  | [optional] 
**Address** | Pointer to [**GuestProfileAllOfAddress**](GuestProfileAllOfAddress.md) |  | [optional] 
**LoyaltyTier** | Pointer to **string** |  | [optional] 
**Preferences** | Pointer to **interface{}** | Guest preferences | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**Version** | Pointer to **int32** | Version for optimistic locking | [optional] [readonly] 

## Methods

### NewGuestProfile

`func NewGuestProfile(guestId string, firstName string, lastName string, email string, ) *GuestProfile`

NewGuestProfile instantiates a new GuestProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestProfileWithDefaults

`func NewGuestProfileWithDefaults() *GuestProfile`

NewGuestProfileWithDefaults instantiates a new GuestProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestId

`func (o *GuestProfile) GetGuestId() string`

GetGuestId returns the GuestId field if non-nil, zero value otherwise.

### GetGuestIdOk

`func (o *GuestProfile) GetGuestIdOk() (*string, bool)`

GetGuestIdOk returns a tuple with the GuestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestId

`func (o *GuestProfile) SetGuestId(v string)`

SetGuestId sets GuestId field to given value.


### GetFirstName

`func (o *GuestProfile) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *GuestProfile) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *GuestProfile) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### GetLastName

`func (o *GuestProfile) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *GuestProfile) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *GuestProfile) SetLastName(v string)`

SetLastName sets LastName field to given value.


### GetEmail

`func (o *GuestProfile) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *GuestProfile) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *GuestProfile) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetPhone

`func (o *GuestProfile) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *GuestProfile) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *GuestProfile) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *GuestProfile) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetDateOfBirth

`func (o *GuestProfile) GetDateOfBirth() string`

GetDateOfBirth returns the DateOfBirth field if non-nil, zero value otherwise.

### GetDateOfBirthOk

`func (o *GuestProfile) GetDateOfBirthOk() (*string, bool)`

GetDateOfBirthOk returns a tuple with the DateOfBirth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateOfBirth

`func (o *GuestProfile) SetDateOfBirth(v string)`

SetDateOfBirth sets DateOfBirth field to given value.

### HasDateOfBirth

`func (o *GuestProfile) HasDateOfBirth() bool`

HasDateOfBirth returns a boolean if a field has been set.

### GetNationality

`func (o *GuestProfile) GetNationality() string`

GetNationality returns the Nationality field if non-nil, zero value otherwise.

### GetNationalityOk

`func (o *GuestProfile) GetNationalityOk() (*string, bool)`

GetNationalityOk returns a tuple with the Nationality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationality

`func (o *GuestProfile) SetNationality(v string)`

SetNationality sets Nationality field to given value.

### HasNationality

`func (o *GuestProfile) HasNationality() bool`

HasNationality returns a boolean if a field has been set.

### GetAddress

`func (o *GuestProfile) GetAddress() GuestProfileAllOfAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *GuestProfile) GetAddressOk() (*GuestProfileAllOfAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *GuestProfile) SetAddress(v GuestProfileAllOfAddress)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *GuestProfile) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetLoyaltyTier

`func (o *GuestProfile) GetLoyaltyTier() string`

GetLoyaltyTier returns the LoyaltyTier field if non-nil, zero value otherwise.

### GetLoyaltyTierOk

`func (o *GuestProfile) GetLoyaltyTierOk() (*string, bool)`

GetLoyaltyTierOk returns a tuple with the LoyaltyTier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoyaltyTier

`func (o *GuestProfile) SetLoyaltyTier(v string)`

SetLoyaltyTier sets LoyaltyTier field to given value.

### HasLoyaltyTier

`func (o *GuestProfile) HasLoyaltyTier() bool`

HasLoyaltyTier returns a boolean if a field has been set.

### GetPreferences

`func (o *GuestProfile) GetPreferences() interface{}`

GetPreferences returns the Preferences field if non-nil, zero value otherwise.

### GetPreferencesOk

`func (o *GuestProfile) GetPreferencesOk() (*interface{}, bool)`

GetPreferencesOk returns a tuple with the Preferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferences

`func (o *GuestProfile) SetPreferences(v interface{})`

SetPreferences sets Preferences field to given value.

### HasPreferences

`func (o *GuestProfile) HasPreferences() bool`

HasPreferences returns a boolean if a field has been set.

### SetPreferencesNil

`func (o *GuestProfile) SetPreferencesNil(b bool)`

 SetPreferencesNil sets the value for Preferences to be an explicit nil

### UnsetPreferences
`func (o *GuestProfile) UnsetPreferences()`

UnsetPreferences ensures that no value is present for Preferences, not even an explicit nil
### GetCreatedAt

`func (o *GuestProfile) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GuestProfile) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GuestProfile) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *GuestProfile) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *GuestProfile) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *GuestProfile) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *GuestProfile) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *GuestProfile) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetVersion

`func (o *GuestProfile) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *GuestProfile) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *GuestProfile) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *GuestProfile) HasVersion() bool`

HasVersion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


