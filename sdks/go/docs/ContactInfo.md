# ContactInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** |  | 
**Phone** | Pointer to **string** | E.164 format phone number | [optional] 
**AlternatePhone** | Pointer to **string** |  | [optional] 
**PreferredContactMethod** | Pointer to **string** |  | [optional] [default to "EMAIL"]

## Methods

### NewContactInfo

`func NewContactInfo(email string, ) *ContactInfo`

NewContactInfo instantiates a new ContactInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContactInfoWithDefaults

`func NewContactInfoWithDefaults() *ContactInfo`

NewContactInfoWithDefaults instantiates a new ContactInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *ContactInfo) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ContactInfo) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ContactInfo) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetPhone

`func (o *ContactInfo) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *ContactInfo) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *ContactInfo) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *ContactInfo) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetAlternatePhone

`func (o *ContactInfo) GetAlternatePhone() string`

GetAlternatePhone returns the AlternatePhone field if non-nil, zero value otherwise.

### GetAlternatePhoneOk

`func (o *ContactInfo) GetAlternatePhoneOk() (*string, bool)`

GetAlternatePhoneOk returns a tuple with the AlternatePhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternatePhone

`func (o *ContactInfo) SetAlternatePhone(v string)`

SetAlternatePhone sets AlternatePhone field to given value.

### HasAlternatePhone

`func (o *ContactInfo) HasAlternatePhone() bool`

HasAlternatePhone returns a boolean if a field has been set.

### GetPreferredContactMethod

`func (o *ContactInfo) GetPreferredContactMethod() string`

GetPreferredContactMethod returns the PreferredContactMethod field if non-nil, zero value otherwise.

### GetPreferredContactMethodOk

`func (o *ContactInfo) GetPreferredContactMethodOk() (*string, bool)`

GetPreferredContactMethodOk returns a tuple with the PreferredContactMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferredContactMethod

`func (o *ContactInfo) SetPreferredContactMethod(v string)`

SetPreferredContactMethod sets PreferredContactMethod field to given value.

### HasPreferredContactMethod

`func (o *ContactInfo) HasPreferredContactMethod() bool`

HasPreferredContactMethod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


