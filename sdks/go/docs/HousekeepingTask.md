# HousekeepingTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskId** | **string** |  | [readonly] 
**PropertyId** | **string** |  | 
**InventoryUnitId** | **string** | Room/unit to clean | 
**TaskType** | **string** |  | 
**Priority** | Pointer to **string** |  | [optional] [default to "NORMAL"]
**Status** | **string** |  | 
**AssignedTo** | Pointer to **string** | Staff member ID | [optional] 
**ScheduledFor** | Pointer to **time.Time** |  | [optional] 
**StartedAt** | Pointer to **time.Time** |  | [optional] 
**CompletedAt** | Pointer to **time.Time** |  | [optional] 
**VerifiedAt** | Pointer to **time.Time** |  | [optional] 
**VerifiedBy** | Pointer to **string** |  | [optional] 
**Notes** | Pointer to **string** |  | [optional] 
**Issues** | Pointer to **[]string** | Issues found during cleaning | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewHousekeepingTask

`func NewHousekeepingTask(taskId string, propertyId string, inventoryUnitId string, taskType string, status string, ) *HousekeepingTask`

NewHousekeepingTask instantiates a new HousekeepingTask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingTaskWithDefaults

`func NewHousekeepingTaskWithDefaults() *HousekeepingTask`

NewHousekeepingTaskWithDefaults instantiates a new HousekeepingTask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskId

`func (o *HousekeepingTask) GetTaskId() string`

GetTaskId returns the TaskId field if non-nil, zero value otherwise.

### GetTaskIdOk

`func (o *HousekeepingTask) GetTaskIdOk() (*string, bool)`

GetTaskIdOk returns a tuple with the TaskId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskId

`func (o *HousekeepingTask) SetTaskId(v string)`

SetTaskId sets TaskId field to given value.


### GetPropertyId

`func (o *HousekeepingTask) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *HousekeepingTask) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *HousekeepingTask) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetInventoryUnitId

`func (o *HousekeepingTask) GetInventoryUnitId() string`

GetInventoryUnitId returns the InventoryUnitId field if non-nil, zero value otherwise.

### GetInventoryUnitIdOk

`func (o *HousekeepingTask) GetInventoryUnitIdOk() (*string, bool)`

GetInventoryUnitIdOk returns a tuple with the InventoryUnitId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryUnitId

`func (o *HousekeepingTask) SetInventoryUnitId(v string)`

SetInventoryUnitId sets InventoryUnitId field to given value.


### GetTaskType

`func (o *HousekeepingTask) GetTaskType() string`

GetTaskType returns the TaskType field if non-nil, zero value otherwise.

### GetTaskTypeOk

`func (o *HousekeepingTask) GetTaskTypeOk() (*string, bool)`

GetTaskTypeOk returns a tuple with the TaskType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskType

`func (o *HousekeepingTask) SetTaskType(v string)`

SetTaskType sets TaskType field to given value.


### GetPriority

`func (o *HousekeepingTask) GetPriority() string`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *HousekeepingTask) GetPriorityOk() (*string, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *HousekeepingTask) SetPriority(v string)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *HousekeepingTask) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetStatus

`func (o *HousekeepingTask) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *HousekeepingTask) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *HousekeepingTask) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetAssignedTo

`func (o *HousekeepingTask) GetAssignedTo() string`

GetAssignedTo returns the AssignedTo field if non-nil, zero value otherwise.

### GetAssignedToOk

`func (o *HousekeepingTask) GetAssignedToOk() (*string, bool)`

GetAssignedToOk returns a tuple with the AssignedTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedTo

`func (o *HousekeepingTask) SetAssignedTo(v string)`

SetAssignedTo sets AssignedTo field to given value.

### HasAssignedTo

`func (o *HousekeepingTask) HasAssignedTo() bool`

HasAssignedTo returns a boolean if a field has been set.

### GetScheduledFor

`func (o *HousekeepingTask) GetScheduledFor() time.Time`

GetScheduledFor returns the ScheduledFor field if non-nil, zero value otherwise.

### GetScheduledForOk

`func (o *HousekeepingTask) GetScheduledForOk() (*time.Time, bool)`

GetScheduledForOk returns a tuple with the ScheduledFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduledFor

`func (o *HousekeepingTask) SetScheduledFor(v time.Time)`

SetScheduledFor sets ScheduledFor field to given value.

### HasScheduledFor

`func (o *HousekeepingTask) HasScheduledFor() bool`

HasScheduledFor returns a boolean if a field has been set.

### GetStartedAt

`func (o *HousekeepingTask) GetStartedAt() time.Time`

GetStartedAt returns the StartedAt field if non-nil, zero value otherwise.

### GetStartedAtOk

`func (o *HousekeepingTask) GetStartedAtOk() (*time.Time, bool)`

GetStartedAtOk returns a tuple with the StartedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartedAt

`func (o *HousekeepingTask) SetStartedAt(v time.Time)`

SetStartedAt sets StartedAt field to given value.

### HasStartedAt

`func (o *HousekeepingTask) HasStartedAt() bool`

HasStartedAt returns a boolean if a field has been set.

### GetCompletedAt

`func (o *HousekeepingTask) GetCompletedAt() time.Time`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *HousekeepingTask) GetCompletedAtOk() (*time.Time, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *HousekeepingTask) SetCompletedAt(v time.Time)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *HousekeepingTask) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.

### GetVerifiedAt

`func (o *HousekeepingTask) GetVerifiedAt() time.Time`

GetVerifiedAt returns the VerifiedAt field if non-nil, zero value otherwise.

### GetVerifiedAtOk

`func (o *HousekeepingTask) GetVerifiedAtOk() (*time.Time, bool)`

GetVerifiedAtOk returns a tuple with the VerifiedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerifiedAt

`func (o *HousekeepingTask) SetVerifiedAt(v time.Time)`

SetVerifiedAt sets VerifiedAt field to given value.

### HasVerifiedAt

`func (o *HousekeepingTask) HasVerifiedAt() bool`

HasVerifiedAt returns a boolean if a field has been set.

### GetVerifiedBy

`func (o *HousekeepingTask) GetVerifiedBy() string`

GetVerifiedBy returns the VerifiedBy field if non-nil, zero value otherwise.

### GetVerifiedByOk

`func (o *HousekeepingTask) GetVerifiedByOk() (*string, bool)`

GetVerifiedByOk returns a tuple with the VerifiedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerifiedBy

`func (o *HousekeepingTask) SetVerifiedBy(v string)`

SetVerifiedBy sets VerifiedBy field to given value.

### HasVerifiedBy

`func (o *HousekeepingTask) HasVerifiedBy() bool`

HasVerifiedBy returns a boolean if a field has been set.

### GetNotes

`func (o *HousekeepingTask) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *HousekeepingTask) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *HousekeepingTask) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *HousekeepingTask) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetIssues

`func (o *HousekeepingTask) GetIssues() []string`

GetIssues returns the Issues field if non-nil, zero value otherwise.

### GetIssuesOk

`func (o *HousekeepingTask) GetIssuesOk() (*[]string, bool)`

GetIssuesOk returns a tuple with the Issues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssues

`func (o *HousekeepingTask) SetIssues(v []string)`

SetIssues sets Issues field to given value.

### HasIssues

`func (o *HousekeepingTask) HasIssues() bool`

HasIssues returns a boolean if a field has been set.

### GetMetadata

`func (o *HousekeepingTask) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *HousekeepingTask) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *HousekeepingTask) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *HousekeepingTask) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


