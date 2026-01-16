# PropertyCertification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationId** | **string** |  | [readonly] 
**PropertyId** | **string** |  | 
**Type** | **string** |  | 
**Name** | Pointer to **string** |  | [optional] 
**CertificateNumber** | Pointer to **string** |  | [optional] 
**IssuingAuthority** | Pointer to **string** |  | [optional] 
**IssuedDate** | **string** |  | 
**ExpiryDate** | **string** |  | 
**Status** | Pointer to **string** |  | [optional] 
**DocumentUrl** | Pointer to **string** |  | [optional] 
**Notes** | Pointer to **string** |  | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewPropertyCertification

`func NewPropertyCertification(certificationId string, propertyId string, type_ string, issuedDate string, expiryDate string, ) *PropertyCertification`

NewPropertyCertification instantiates a new PropertyCertification object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPropertyCertificationWithDefaults

`func NewPropertyCertificationWithDefaults() *PropertyCertification`

NewPropertyCertificationWithDefaults instantiates a new PropertyCertification object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertificationId

`func (o *PropertyCertification) GetCertificationId() string`

GetCertificationId returns the CertificationId field if non-nil, zero value otherwise.

### GetCertificationIdOk

`func (o *PropertyCertification) GetCertificationIdOk() (*string, bool)`

GetCertificationIdOk returns a tuple with the CertificationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationId

`func (o *PropertyCertification) SetCertificationId(v string)`

SetCertificationId sets CertificationId field to given value.


### GetPropertyId

`func (o *PropertyCertification) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *PropertyCertification) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *PropertyCertification) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetType

`func (o *PropertyCertification) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PropertyCertification) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PropertyCertification) SetType(v string)`

SetType sets Type field to given value.


### GetName

`func (o *PropertyCertification) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PropertyCertification) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PropertyCertification) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PropertyCertification) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCertificateNumber

`func (o *PropertyCertification) GetCertificateNumber() string`

GetCertificateNumber returns the CertificateNumber field if non-nil, zero value otherwise.

### GetCertificateNumberOk

`func (o *PropertyCertification) GetCertificateNumberOk() (*string, bool)`

GetCertificateNumberOk returns a tuple with the CertificateNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateNumber

`func (o *PropertyCertification) SetCertificateNumber(v string)`

SetCertificateNumber sets CertificateNumber field to given value.

### HasCertificateNumber

`func (o *PropertyCertification) HasCertificateNumber() bool`

HasCertificateNumber returns a boolean if a field has been set.

### GetIssuingAuthority

`func (o *PropertyCertification) GetIssuingAuthority() string`

GetIssuingAuthority returns the IssuingAuthority field if non-nil, zero value otherwise.

### GetIssuingAuthorityOk

`func (o *PropertyCertification) GetIssuingAuthorityOk() (*string, bool)`

GetIssuingAuthorityOk returns a tuple with the IssuingAuthority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuingAuthority

`func (o *PropertyCertification) SetIssuingAuthority(v string)`

SetIssuingAuthority sets IssuingAuthority field to given value.

### HasIssuingAuthority

`func (o *PropertyCertification) HasIssuingAuthority() bool`

HasIssuingAuthority returns a boolean if a field has been set.

### GetIssuedDate

`func (o *PropertyCertification) GetIssuedDate() string`

GetIssuedDate returns the IssuedDate field if non-nil, zero value otherwise.

### GetIssuedDateOk

`func (o *PropertyCertification) GetIssuedDateOk() (*string, bool)`

GetIssuedDateOk returns a tuple with the IssuedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuedDate

`func (o *PropertyCertification) SetIssuedDate(v string)`

SetIssuedDate sets IssuedDate field to given value.


### GetExpiryDate

`func (o *PropertyCertification) GetExpiryDate() string`

GetExpiryDate returns the ExpiryDate field if non-nil, zero value otherwise.

### GetExpiryDateOk

`func (o *PropertyCertification) GetExpiryDateOk() (*string, bool)`

GetExpiryDateOk returns a tuple with the ExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryDate

`func (o *PropertyCertification) SetExpiryDate(v string)`

SetExpiryDate sets ExpiryDate field to given value.


### GetStatus

`func (o *PropertyCertification) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PropertyCertification) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PropertyCertification) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *PropertyCertification) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetDocumentUrl

`func (o *PropertyCertification) GetDocumentUrl() string`

GetDocumentUrl returns the DocumentUrl field if non-nil, zero value otherwise.

### GetDocumentUrlOk

`func (o *PropertyCertification) GetDocumentUrlOk() (*string, bool)`

GetDocumentUrlOk returns a tuple with the DocumentUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentUrl

`func (o *PropertyCertification) SetDocumentUrl(v string)`

SetDocumentUrl sets DocumentUrl field to given value.

### HasDocumentUrl

`func (o *PropertyCertification) HasDocumentUrl() bool`

HasDocumentUrl returns a boolean if a field has been set.

### GetNotes

`func (o *PropertyCertification) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *PropertyCertification) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *PropertyCertification) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *PropertyCertification) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetMetadata

`func (o *PropertyCertification) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PropertyCertification) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PropertyCertification) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *PropertyCertification) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


