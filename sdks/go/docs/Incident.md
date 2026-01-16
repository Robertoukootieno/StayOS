# Incident

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncidentId** | **string** |  | [readonly] 
**PropertyId** | **string** |  | 
**Type** | **string** |  | 
**Severity** | **string** |  | 
**Status** | **string** |  | 
**Title** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Location** | Pointer to **string** | Location within property | [optional] 
**ReportedBy** | Pointer to **string** |  | [optional] 
**IncidentDate** | Pointer to **time.Time** |  | [optional] 
**PersonsInvolved** | Pointer to [**[]IncidentAllOfPersonsInvolved**](IncidentAllOfPersonsInvolved.md) |  | [optional] 
**Witnesses** | Pointer to [**[]IncidentAllOfWitnesses**](IncidentAllOfWitnesses.md) |  | [optional] 
**CorrectiveActions** | Pointer to [**[]IncidentAllOfCorrectiveActions**](IncidentAllOfCorrectiveActions.md) |  | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewIncident

`func NewIncident(incidentId string, propertyId string, type_ string, severity string, status string, ) *Incident`

NewIncident instantiates a new Incident object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIncidentWithDefaults

`func NewIncidentWithDefaults() *Incident`

NewIncidentWithDefaults instantiates a new Incident object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncidentId

`func (o *Incident) GetIncidentId() string`

GetIncidentId returns the IncidentId field if non-nil, zero value otherwise.

### GetIncidentIdOk

`func (o *Incident) GetIncidentIdOk() (*string, bool)`

GetIncidentIdOk returns a tuple with the IncidentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidentId

`func (o *Incident) SetIncidentId(v string)`

SetIncidentId sets IncidentId field to given value.


### GetPropertyId

`func (o *Incident) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *Incident) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *Incident) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetType

`func (o *Incident) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Incident) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Incident) SetType(v string)`

SetType sets Type field to given value.


### GetSeverity

`func (o *Incident) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *Incident) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *Incident) SetSeverity(v string)`

SetSeverity sets Severity field to given value.


### GetStatus

`func (o *Incident) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Incident) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Incident) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetTitle

`func (o *Incident) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *Incident) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *Incident) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *Incident) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetDescription

`func (o *Incident) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Incident) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Incident) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Incident) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLocation

`func (o *Incident) GetLocation() string`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *Incident) GetLocationOk() (*string, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *Incident) SetLocation(v string)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *Incident) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetReportedBy

`func (o *Incident) GetReportedBy() string`

GetReportedBy returns the ReportedBy field if non-nil, zero value otherwise.

### GetReportedByOk

`func (o *Incident) GetReportedByOk() (*string, bool)`

GetReportedByOk returns a tuple with the ReportedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportedBy

`func (o *Incident) SetReportedBy(v string)`

SetReportedBy sets ReportedBy field to given value.

### HasReportedBy

`func (o *Incident) HasReportedBy() bool`

HasReportedBy returns a boolean if a field has been set.

### GetIncidentDate

`func (o *Incident) GetIncidentDate() time.Time`

GetIncidentDate returns the IncidentDate field if non-nil, zero value otherwise.

### GetIncidentDateOk

`func (o *Incident) GetIncidentDateOk() (*time.Time, bool)`

GetIncidentDateOk returns a tuple with the IncidentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidentDate

`func (o *Incident) SetIncidentDate(v time.Time)`

SetIncidentDate sets IncidentDate field to given value.

### HasIncidentDate

`func (o *Incident) HasIncidentDate() bool`

HasIncidentDate returns a boolean if a field has been set.

### GetPersonsInvolved

`func (o *Incident) GetPersonsInvolved() []IncidentAllOfPersonsInvolved`

GetPersonsInvolved returns the PersonsInvolved field if non-nil, zero value otherwise.

### GetPersonsInvolvedOk

`func (o *Incident) GetPersonsInvolvedOk() (*[]IncidentAllOfPersonsInvolved, bool)`

GetPersonsInvolvedOk returns a tuple with the PersonsInvolved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonsInvolved

`func (o *Incident) SetPersonsInvolved(v []IncidentAllOfPersonsInvolved)`

SetPersonsInvolved sets PersonsInvolved field to given value.

### HasPersonsInvolved

`func (o *Incident) HasPersonsInvolved() bool`

HasPersonsInvolved returns a boolean if a field has been set.

### GetWitnesses

`func (o *Incident) GetWitnesses() []IncidentAllOfWitnesses`

GetWitnesses returns the Witnesses field if non-nil, zero value otherwise.

### GetWitnessesOk

`func (o *Incident) GetWitnessesOk() (*[]IncidentAllOfWitnesses, bool)`

GetWitnessesOk returns a tuple with the Witnesses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWitnesses

`func (o *Incident) SetWitnesses(v []IncidentAllOfWitnesses)`

SetWitnesses sets Witnesses field to given value.

### HasWitnesses

`func (o *Incident) HasWitnesses() bool`

HasWitnesses returns a boolean if a field has been set.

### GetCorrectiveActions

`func (o *Incident) GetCorrectiveActions() []IncidentAllOfCorrectiveActions`

GetCorrectiveActions returns the CorrectiveActions field if non-nil, zero value otherwise.

### GetCorrectiveActionsOk

`func (o *Incident) GetCorrectiveActionsOk() (*[]IncidentAllOfCorrectiveActions, bool)`

GetCorrectiveActionsOk returns a tuple with the CorrectiveActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrectiveActions

`func (o *Incident) SetCorrectiveActions(v []IncidentAllOfCorrectiveActions)`

SetCorrectiveActions sets CorrectiveActions field to given value.

### HasCorrectiveActions

`func (o *Incident) HasCorrectiveActions() bool`

HasCorrectiveActions returns a boolean if a field has been set.

### GetMetadata

`func (o *Incident) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Incident) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Incident) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Incident) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


