# GetCleaningSchedule200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** |  | [optional] 
**Tasks** | Pointer to [**[]HousekeepingTask**](HousekeepingTask.md) |  | [optional] 

## Methods

### NewGetCleaningSchedule200Response

`func NewGetCleaningSchedule200Response() *GetCleaningSchedule200Response`

NewGetCleaningSchedule200Response instantiates a new GetCleaningSchedule200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetCleaningSchedule200ResponseWithDefaults

`func NewGetCleaningSchedule200ResponseWithDefaults() *GetCleaningSchedule200Response`

NewGetCleaningSchedule200ResponseWithDefaults instantiates a new GetCleaningSchedule200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *GetCleaningSchedule200Response) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *GetCleaningSchedule200Response) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *GetCleaningSchedule200Response) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *GetCleaningSchedule200Response) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetTasks

`func (o *GetCleaningSchedule200Response) GetTasks() []HousekeepingTask`

GetTasks returns the Tasks field if non-nil, zero value otherwise.

### GetTasksOk

`func (o *GetCleaningSchedule200Response) GetTasksOk() (*[]HousekeepingTask, bool)`

GetTasksOk returns a tuple with the Tasks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTasks

`func (o *GetCleaningSchedule200Response) SetTasks(v []HousekeepingTask)`

SetTasks sets Tasks field to given value.

### HasTasks

`func (o *GetCleaningSchedule200Response) HasTasks() bool`

HasTasks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


