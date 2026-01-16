# Certification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationType** | Pointer to **string** |  | [optional] 
**CertificateNumber** | Pointer to **string** |  | [optional] 
**IssuedBy** | **string** | Issuing authority | 
**IssuedDate** | Pointer to **string** |  | [optional] 
**ExpiryDate** | **string** |  | 
**DocumentUrl** | Pointer to **string** | URL to certificate document | [optional] 

## Methods

### NewCertification

`func NewCertification(issuedBy string, expiryDate string, ) *Certification`

NewCertification instantiates a new Certification object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationWithDefaults

`func NewCertificationWithDefaults() *Certification`

NewCertificationWithDefaults instantiates a new Certification object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertificationType

`func (o *Certification) GetCertificationType() string`

GetCertificationType returns the CertificationType field if non-nil, zero value otherwise.

### GetCertificationTypeOk

`func (o *Certification) GetCertificationTypeOk() (*string, bool)`

GetCertificationTypeOk returns a tuple with the CertificationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationType

`func (o *Certification) SetCertificationType(v string)`

SetCertificationType sets CertificationType field to given value.

### HasCertificationType

`func (o *Certification) HasCertificationType() bool`

HasCertificationType returns a boolean if a field has been set.

### GetCertificateNumber

`func (o *Certification) GetCertificateNumber() string`

GetCertificateNumber returns the CertificateNumber field if non-nil, zero value otherwise.

### GetCertificateNumberOk

`func (o *Certification) GetCertificateNumberOk() (*string, bool)`

GetCertificateNumberOk returns a tuple with the CertificateNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateNumber

`func (o *Certification) SetCertificateNumber(v string)`

SetCertificateNumber sets CertificateNumber field to given value.

### HasCertificateNumber

`func (o *Certification) HasCertificateNumber() bool`

HasCertificateNumber returns a boolean if a field has been set.

### GetIssuedBy

`func (o *Certification) GetIssuedBy() string`

GetIssuedBy returns the IssuedBy field if non-nil, zero value otherwise.

### GetIssuedByOk

`func (o *Certification) GetIssuedByOk() (*string, bool)`

GetIssuedByOk returns a tuple with the IssuedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuedBy

`func (o *Certification) SetIssuedBy(v string)`

SetIssuedBy sets IssuedBy field to given value.


### GetIssuedDate

`func (o *Certification) GetIssuedDate() string`

GetIssuedDate returns the IssuedDate field if non-nil, zero value otherwise.

### GetIssuedDateOk

`func (o *Certification) GetIssuedDateOk() (*string, bool)`

GetIssuedDateOk returns a tuple with the IssuedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuedDate

`func (o *Certification) SetIssuedDate(v string)`

SetIssuedDate sets IssuedDate field to given value.

### HasIssuedDate

`func (o *Certification) HasIssuedDate() bool`

HasIssuedDate returns a boolean if a field has been set.

### GetExpiryDate

`func (o *Certification) GetExpiryDate() string`

GetExpiryDate returns the ExpiryDate field if non-nil, zero value otherwise.

### GetExpiryDateOk

`func (o *Certification) GetExpiryDateOk() (*string, bool)`

GetExpiryDateOk returns a tuple with the ExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryDate

`func (o *Certification) SetExpiryDate(v string)`

SetExpiryDate sets ExpiryDate field to given value.


### GetDocumentUrl

`func (o *Certification) GetDocumentUrl() string`

GetDocumentUrl returns the DocumentUrl field if non-nil, zero value otherwise.

### GetDocumentUrlOk

`func (o *Certification) GetDocumentUrlOk() (*string, bool)`

GetDocumentUrlOk returns a tuple with the DocumentUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentUrl

`func (o *Certification) SetDocumentUrl(v string)`

SetDocumentUrl sets DocumentUrl field to given value.

### HasDocumentUrl

`func (o *Certification) HasDocumentUrl() bool`

HasDocumentUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


