# TrainingModule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ModuleId** | **string** |  | [readonly] 
**Title** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**Category** | **string** |  | 
**Duration** | **int32** | Duration in minutes | 
**Content** | Pointer to [**TrainingModuleAllOfContent**](TrainingModuleAllOfContent.md) |  | [optional] 
**AssessmentRequired** | Pointer to **bool** |  | [optional] [default to false]
**PassingScore** | Pointer to **int32** | Minimum score to pass (percentage) | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewTrainingModule

`func NewTrainingModule(moduleId string, title string, category string, duration int32, ) *TrainingModule`

NewTrainingModule instantiates a new TrainingModule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrainingModuleWithDefaults

`func NewTrainingModuleWithDefaults() *TrainingModule`

NewTrainingModuleWithDefaults instantiates a new TrainingModule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetModuleId

`func (o *TrainingModule) GetModuleId() string`

GetModuleId returns the ModuleId field if non-nil, zero value otherwise.

### GetModuleIdOk

`func (o *TrainingModule) GetModuleIdOk() (*string, bool)`

GetModuleIdOk returns a tuple with the ModuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModuleId

`func (o *TrainingModule) SetModuleId(v string)`

SetModuleId sets ModuleId field to given value.


### GetTitle

`func (o *TrainingModule) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *TrainingModule) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *TrainingModule) SetTitle(v string)`

SetTitle sets Title field to given value.


### GetDescription

`func (o *TrainingModule) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TrainingModule) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TrainingModule) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TrainingModule) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCategory

`func (o *TrainingModule) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *TrainingModule) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *TrainingModule) SetCategory(v string)`

SetCategory sets Category field to given value.


### GetDuration

`func (o *TrainingModule) GetDuration() int32`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *TrainingModule) GetDurationOk() (*int32, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *TrainingModule) SetDuration(v int32)`

SetDuration sets Duration field to given value.


### GetContent

`func (o *TrainingModule) GetContent() TrainingModuleAllOfContent`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *TrainingModule) GetContentOk() (*TrainingModuleAllOfContent, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *TrainingModule) SetContent(v TrainingModuleAllOfContent)`

SetContent sets Content field to given value.

### HasContent

`func (o *TrainingModule) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetAssessmentRequired

`func (o *TrainingModule) GetAssessmentRequired() bool`

GetAssessmentRequired returns the AssessmentRequired field if non-nil, zero value otherwise.

### GetAssessmentRequiredOk

`func (o *TrainingModule) GetAssessmentRequiredOk() (*bool, bool)`

GetAssessmentRequiredOk returns a tuple with the AssessmentRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssessmentRequired

`func (o *TrainingModule) SetAssessmentRequired(v bool)`

SetAssessmentRequired sets AssessmentRequired field to given value.

### HasAssessmentRequired

`func (o *TrainingModule) HasAssessmentRequired() bool`

HasAssessmentRequired returns a boolean if a field has been set.

### GetPassingScore

`func (o *TrainingModule) GetPassingScore() int32`

GetPassingScore returns the PassingScore field if non-nil, zero value otherwise.

### GetPassingScoreOk

`func (o *TrainingModule) GetPassingScoreOk() (*int32, bool)`

GetPassingScoreOk returns a tuple with the PassingScore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassingScore

`func (o *TrainingModule) SetPassingScore(v int32)`

SetPassingScore sets PassingScore field to given value.

### HasPassingScore

`func (o *TrainingModule) HasPassingScore() bool`

HasPassingScore returns a boolean if a field has been set.

### GetMetadata

`func (o *TrainingModule) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TrainingModule) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TrainingModule) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *TrainingModule) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


