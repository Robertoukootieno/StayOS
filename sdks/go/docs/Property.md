# Property

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PropertyId** | Pointer to **string** | Unique property identifier | [optional] [readonly] 
**OrganizationId** | Pointer to **string** | Parent organization identifier | [optional] 
**Name** | **string** | Property name | 
**Classification** | **string** | Property classification | 
**StarRating** | Pointer to **float32** | Star rating (0-5) | [optional] 
**Location** | [**Model0**](Model0.md) |  | 
**Coordinates** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Timezone** | **string** | IANA timezone identifier (immutable) | 
**OperationalStatus** | Pointer to **string** | Current operational status | [optional] [default to "ACTIVE"]
**Policies** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Amenities** | Pointer to **[]string** | Property-level amenities | [optional] 
**Certifications** | Pointer to [**[]Model0**](Model0.md) |  | [optional] 
**ContactInfo** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Links** | Pointer to [**PropertyAllOfLinks**](PropertyAllOfLinks.md) |  | [optional] 

## Methods

### NewProperty

`func NewProperty(name string, classification string, location Model0, timezone string, ) *Property`

NewProperty instantiates a new Property object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPropertyWithDefaults

`func NewPropertyWithDefaults() *Property`

NewPropertyWithDefaults instantiates a new Property object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPropertyId

`func (o *Property) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *Property) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *Property) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.

### HasPropertyId

`func (o *Property) HasPropertyId() bool`

HasPropertyId returns a boolean if a field has been set.

### GetOrganizationId

`func (o *Property) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *Property) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *Property) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *Property) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetName

`func (o *Property) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Property) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Property) SetName(v string)`

SetName sets Name field to given value.


### GetClassification

`func (o *Property) GetClassification() string`

GetClassification returns the Classification field if non-nil, zero value otherwise.

### GetClassificationOk

`func (o *Property) GetClassificationOk() (*string, bool)`

GetClassificationOk returns a tuple with the Classification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassification

`func (o *Property) SetClassification(v string)`

SetClassification sets Classification field to given value.


### GetStarRating

`func (o *Property) GetStarRating() float32`

GetStarRating returns the StarRating field if non-nil, zero value otherwise.

### GetStarRatingOk

`func (o *Property) GetStarRatingOk() (*float32, bool)`

GetStarRatingOk returns a tuple with the StarRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStarRating

`func (o *Property) SetStarRating(v float32)`

SetStarRating sets StarRating field to given value.

### HasStarRating

`func (o *Property) HasStarRating() bool`

HasStarRating returns a boolean if a field has been set.

### GetLocation

`func (o *Property) GetLocation() Model0`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *Property) GetLocationOk() (*Model0, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *Property) SetLocation(v Model0)`

SetLocation sets Location field to given value.


### GetCoordinates

`func (o *Property) GetCoordinates() Model0`

GetCoordinates returns the Coordinates field if non-nil, zero value otherwise.

### GetCoordinatesOk

`func (o *Property) GetCoordinatesOk() (*Model0, bool)`

GetCoordinatesOk returns a tuple with the Coordinates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCoordinates

`func (o *Property) SetCoordinates(v Model0)`

SetCoordinates sets Coordinates field to given value.

### HasCoordinates

`func (o *Property) HasCoordinates() bool`

HasCoordinates returns a boolean if a field has been set.

### GetTimezone

`func (o *Property) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *Property) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *Property) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.


### GetOperationalStatus

`func (o *Property) GetOperationalStatus() string`

GetOperationalStatus returns the OperationalStatus field if non-nil, zero value otherwise.

### GetOperationalStatusOk

`func (o *Property) GetOperationalStatusOk() (*string, bool)`

GetOperationalStatusOk returns a tuple with the OperationalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationalStatus

`func (o *Property) SetOperationalStatus(v string)`

SetOperationalStatus sets OperationalStatus field to given value.

### HasOperationalStatus

`func (o *Property) HasOperationalStatus() bool`

HasOperationalStatus returns a boolean if a field has been set.

### GetPolicies

`func (o *Property) GetPolicies() Model0`

GetPolicies returns the Policies field if non-nil, zero value otherwise.

### GetPoliciesOk

`func (o *Property) GetPoliciesOk() (*Model0, bool)`

GetPoliciesOk returns a tuple with the Policies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicies

`func (o *Property) SetPolicies(v Model0)`

SetPolicies sets Policies field to given value.

### HasPolicies

`func (o *Property) HasPolicies() bool`

HasPolicies returns a boolean if a field has been set.

### GetAmenities

`func (o *Property) GetAmenities() []string`

GetAmenities returns the Amenities field if non-nil, zero value otherwise.

### GetAmenitiesOk

`func (o *Property) GetAmenitiesOk() (*[]string, bool)`

GetAmenitiesOk returns a tuple with the Amenities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmenities

`func (o *Property) SetAmenities(v []string)`

SetAmenities sets Amenities field to given value.

### HasAmenities

`func (o *Property) HasAmenities() bool`

HasAmenities returns a boolean if a field has been set.

### GetCertifications

`func (o *Property) GetCertifications() []Model0`

GetCertifications returns the Certifications field if non-nil, zero value otherwise.

### GetCertificationsOk

`func (o *Property) GetCertificationsOk() (*[]Model0, bool)`

GetCertificationsOk returns a tuple with the Certifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertifications

`func (o *Property) SetCertifications(v []Model0)`

SetCertifications sets Certifications field to given value.

### HasCertifications

`func (o *Property) HasCertifications() bool`

HasCertifications returns a boolean if a field has been set.

### GetContactInfo

`func (o *Property) GetContactInfo() Model0`

GetContactInfo returns the ContactInfo field if non-nil, zero value otherwise.

### GetContactInfoOk

`func (o *Property) GetContactInfoOk() (*Model0, bool)`

GetContactInfoOk returns a tuple with the ContactInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactInfo

`func (o *Property) SetContactInfo(v Model0)`

SetContactInfo sets ContactInfo field to given value.

### HasContactInfo

`func (o *Property) HasContactInfo() bool`

HasContactInfo returns a boolean if a field has been set.

### GetMetadata

`func (o *Property) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Property) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Property) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Property) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetLinks

`func (o *Property) GetLinks() PropertyAllOfLinks`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Property) GetLinksOk() (*PropertyAllOfLinks, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Property) SetLinks(v PropertyAllOfLinks)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Property) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


