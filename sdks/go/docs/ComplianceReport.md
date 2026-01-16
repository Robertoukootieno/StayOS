# ComplianceReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportId** | **string** |  | [readonly] 
**Type** | **string** |  | 
**PropertyId** | **string** |  | 
**StartDate** | **string** |  | 
**EndDate** | **string** |  | 
**Status** | Pointer to **string** |  | [optional] 
**FileUrl** | Pointer to **string** |  | [optional] [readonly] 
**SubmittedTo** | Pointer to **string** | Authority/agency submitted to | [optional] 
**SubmittedAt** | Pointer to **time.Time** |  | [optional] 
**GeneratedAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewComplianceReport

`func NewComplianceReport(reportId string, type_ string, propertyId string, startDate string, endDate string, ) *ComplianceReport`

NewComplianceReport instantiates a new ComplianceReport object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewComplianceReportWithDefaults

`func NewComplianceReportWithDefaults() *ComplianceReport`

NewComplianceReportWithDefaults instantiates a new ComplianceReport object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReportId

`func (o *ComplianceReport) GetReportId() string`

GetReportId returns the ReportId field if non-nil, zero value otherwise.

### GetReportIdOk

`func (o *ComplianceReport) GetReportIdOk() (*string, bool)`

GetReportIdOk returns a tuple with the ReportId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportId

`func (o *ComplianceReport) SetReportId(v string)`

SetReportId sets ReportId field to given value.


### GetType

`func (o *ComplianceReport) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ComplianceReport) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ComplianceReport) SetType(v string)`

SetType sets Type field to given value.


### GetPropertyId

`func (o *ComplianceReport) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *ComplianceReport) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *ComplianceReport) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetStartDate

`func (o *ComplianceReport) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ComplianceReport) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ComplianceReport) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.


### GetEndDate

`func (o *ComplianceReport) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ComplianceReport) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ComplianceReport) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.


### GetStatus

`func (o *ComplianceReport) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ComplianceReport) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ComplianceReport) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ComplianceReport) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetFileUrl

`func (o *ComplianceReport) GetFileUrl() string`

GetFileUrl returns the FileUrl field if non-nil, zero value otherwise.

### GetFileUrlOk

`func (o *ComplianceReport) GetFileUrlOk() (*string, bool)`

GetFileUrlOk returns a tuple with the FileUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileUrl

`func (o *ComplianceReport) SetFileUrl(v string)`

SetFileUrl sets FileUrl field to given value.

### HasFileUrl

`func (o *ComplianceReport) HasFileUrl() bool`

HasFileUrl returns a boolean if a field has been set.

### GetSubmittedTo

`func (o *ComplianceReport) GetSubmittedTo() string`

GetSubmittedTo returns the SubmittedTo field if non-nil, zero value otherwise.

### GetSubmittedToOk

`func (o *ComplianceReport) GetSubmittedToOk() (*string, bool)`

GetSubmittedToOk returns a tuple with the SubmittedTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubmittedTo

`func (o *ComplianceReport) SetSubmittedTo(v string)`

SetSubmittedTo sets SubmittedTo field to given value.

### HasSubmittedTo

`func (o *ComplianceReport) HasSubmittedTo() bool`

HasSubmittedTo returns a boolean if a field has been set.

### GetSubmittedAt

`func (o *ComplianceReport) GetSubmittedAt() time.Time`

GetSubmittedAt returns the SubmittedAt field if non-nil, zero value otherwise.

### GetSubmittedAtOk

`func (o *ComplianceReport) GetSubmittedAtOk() (*time.Time, bool)`

GetSubmittedAtOk returns a tuple with the SubmittedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubmittedAt

`func (o *ComplianceReport) SetSubmittedAt(v time.Time)`

SetSubmittedAt sets SubmittedAt field to given value.

### HasSubmittedAt

`func (o *ComplianceReport) HasSubmittedAt() bool`

HasSubmittedAt returns a boolean if a field has been set.

### GetGeneratedAt

`func (o *ComplianceReport) GetGeneratedAt() time.Time`

GetGeneratedAt returns the GeneratedAt field if non-nil, zero value otherwise.

### GetGeneratedAtOk

`func (o *ComplianceReport) GetGeneratedAtOk() (*time.Time, bool)`

GetGeneratedAtOk returns a tuple with the GeneratedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedAt

`func (o *ComplianceReport) SetGeneratedAt(v time.Time)`

SetGeneratedAt sets GeneratedAt field to given value.

### HasGeneratedAt

`func (o *ComplianceReport) HasGeneratedAt() bool`

HasGeneratedAt returns a boolean if a field has been set.

### GetMetadata

`func (o *ComplianceReport) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ComplianceReport) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ComplianceReport) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *ComplianceReport) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


