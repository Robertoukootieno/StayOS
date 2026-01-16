# TrainingEnrollment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EnrollmentId** | **string** |  | [readonly] 
**ModuleId** | **string** |  | 
**StaffId** | **string** |  | 
**Status** | **string** |  | 
**EnrolledAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**StartedAt** | Pointer to **time.Time** |  | [optional] 
**CompletedAt** | Pointer to **time.Time** |  | [optional] 
**ExpiresAt** | Pointer to **time.Time** |  | [optional] 
**AssessmentScore** | Pointer to **int32** |  | [optional] 
**Attempts** | Pointer to **int32** | Number of assessment attempts | [optional] 
**CertificateUrl** | Pointer to **string** |  | [optional] [readonly] 

## Methods

### NewTrainingEnrollment

`func NewTrainingEnrollment(enrollmentId string, moduleId string, staffId string, status string, ) *TrainingEnrollment`

NewTrainingEnrollment instantiates a new TrainingEnrollment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrainingEnrollmentWithDefaults

`func NewTrainingEnrollmentWithDefaults() *TrainingEnrollment`

NewTrainingEnrollmentWithDefaults instantiates a new TrainingEnrollment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnrollmentId

`func (o *TrainingEnrollment) GetEnrollmentId() string`

GetEnrollmentId returns the EnrollmentId field if non-nil, zero value otherwise.

### GetEnrollmentIdOk

`func (o *TrainingEnrollment) GetEnrollmentIdOk() (*string, bool)`

GetEnrollmentIdOk returns a tuple with the EnrollmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentId

`func (o *TrainingEnrollment) SetEnrollmentId(v string)`

SetEnrollmentId sets EnrollmentId field to given value.


### GetModuleId

`func (o *TrainingEnrollment) GetModuleId() string`

GetModuleId returns the ModuleId field if non-nil, zero value otherwise.

### GetModuleIdOk

`func (o *TrainingEnrollment) GetModuleIdOk() (*string, bool)`

GetModuleIdOk returns a tuple with the ModuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModuleId

`func (o *TrainingEnrollment) SetModuleId(v string)`

SetModuleId sets ModuleId field to given value.


### GetStaffId

`func (o *TrainingEnrollment) GetStaffId() string`

GetStaffId returns the StaffId field if non-nil, zero value otherwise.

### GetStaffIdOk

`func (o *TrainingEnrollment) GetStaffIdOk() (*string, bool)`

GetStaffIdOk returns a tuple with the StaffId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStaffId

`func (o *TrainingEnrollment) SetStaffId(v string)`

SetStaffId sets StaffId field to given value.


### GetStatus

`func (o *TrainingEnrollment) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TrainingEnrollment) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TrainingEnrollment) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetEnrolledAt

`func (o *TrainingEnrollment) GetEnrolledAt() time.Time`

GetEnrolledAt returns the EnrolledAt field if non-nil, zero value otherwise.

### GetEnrolledAtOk

`func (o *TrainingEnrollment) GetEnrolledAtOk() (*time.Time, bool)`

GetEnrolledAtOk returns a tuple with the EnrolledAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrolledAt

`func (o *TrainingEnrollment) SetEnrolledAt(v time.Time)`

SetEnrolledAt sets EnrolledAt field to given value.

### HasEnrolledAt

`func (o *TrainingEnrollment) HasEnrolledAt() bool`

HasEnrolledAt returns a boolean if a field has been set.

### GetStartedAt

`func (o *TrainingEnrollment) GetStartedAt() time.Time`

GetStartedAt returns the StartedAt field if non-nil, zero value otherwise.

### GetStartedAtOk

`func (o *TrainingEnrollment) GetStartedAtOk() (*time.Time, bool)`

GetStartedAtOk returns a tuple with the StartedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartedAt

`func (o *TrainingEnrollment) SetStartedAt(v time.Time)`

SetStartedAt sets StartedAt field to given value.

### HasStartedAt

`func (o *TrainingEnrollment) HasStartedAt() bool`

HasStartedAt returns a boolean if a field has been set.

### GetCompletedAt

`func (o *TrainingEnrollment) GetCompletedAt() time.Time`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *TrainingEnrollment) GetCompletedAtOk() (*time.Time, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *TrainingEnrollment) SetCompletedAt(v time.Time)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *TrainingEnrollment) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.

### GetExpiresAt

`func (o *TrainingEnrollment) GetExpiresAt() time.Time`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *TrainingEnrollment) GetExpiresAtOk() (*time.Time, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *TrainingEnrollment) SetExpiresAt(v time.Time)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *TrainingEnrollment) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### GetAssessmentScore

`func (o *TrainingEnrollment) GetAssessmentScore() int32`

GetAssessmentScore returns the AssessmentScore field if non-nil, zero value otherwise.

### GetAssessmentScoreOk

`func (o *TrainingEnrollment) GetAssessmentScoreOk() (*int32, bool)`

GetAssessmentScoreOk returns a tuple with the AssessmentScore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssessmentScore

`func (o *TrainingEnrollment) SetAssessmentScore(v int32)`

SetAssessmentScore sets AssessmentScore field to given value.

### HasAssessmentScore

`func (o *TrainingEnrollment) HasAssessmentScore() bool`

HasAssessmentScore returns a boolean if a field has been set.

### GetAttempts

`func (o *TrainingEnrollment) GetAttempts() int32`

GetAttempts returns the Attempts field if non-nil, zero value otherwise.

### GetAttemptsOk

`func (o *TrainingEnrollment) GetAttemptsOk() (*int32, bool)`

GetAttemptsOk returns a tuple with the Attempts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttempts

`func (o *TrainingEnrollment) SetAttempts(v int32)`

SetAttempts sets Attempts field to given value.

### HasAttempts

`func (o *TrainingEnrollment) HasAttempts() bool`

HasAttempts returns a boolean if a field has been set.

### GetCertificateUrl

`func (o *TrainingEnrollment) GetCertificateUrl() string`

GetCertificateUrl returns the CertificateUrl field if non-nil, zero value otherwise.

### GetCertificateUrlOk

`func (o *TrainingEnrollment) GetCertificateUrlOk() (*string, bool)`

GetCertificateUrlOk returns a tuple with the CertificateUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateUrl

`func (o *TrainingEnrollment) SetCertificateUrl(v string)`

SetCertificateUrl sets CertificateUrl field to given value.

### HasCertificateUrl

`func (o *TrainingEnrollment) HasCertificateUrl() bool`

HasCertificateUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


