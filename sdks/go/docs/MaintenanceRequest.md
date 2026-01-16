# MaintenanceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **string** |  | [readonly] 
**PropertyId** | **string** |  | 
**InventoryUnitId** | Pointer to **string** | Specific room/unit (if applicable) | [optional] 
**Category** | **string** |  | 
**Priority** | **string** |  | 
**Status** | **string** |  | 
**Title** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**ReportedBy** | Pointer to **string** |  | [optional] 
**AssignedTo** | Pointer to **string** | Technician ID | [optional] 
**ScheduledFor** | Pointer to **time.Time** |  | [optional] 
**CompletedAt** | Pointer to **time.Time** |  | [optional] 
**VerifiedAt** | Pointer to **time.Time** |  | [optional] 
**EstimatedCost** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**ActualCost** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**WorkLog** | Pointer to [**[]MaintenanceRequestAllOfWorkLog**](MaintenanceRequestAllOfWorkLog.md) |  | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewMaintenanceRequest

`func NewMaintenanceRequest(requestId string, propertyId string, category string, priority string, status string, ) *MaintenanceRequest`

NewMaintenanceRequest instantiates a new MaintenanceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMaintenanceRequestWithDefaults

`func NewMaintenanceRequestWithDefaults() *MaintenanceRequest`

NewMaintenanceRequestWithDefaults instantiates a new MaintenanceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *MaintenanceRequest) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *MaintenanceRequest) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *MaintenanceRequest) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.


### GetPropertyId

`func (o *MaintenanceRequest) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *MaintenanceRequest) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *MaintenanceRequest) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetInventoryUnitId

`func (o *MaintenanceRequest) GetInventoryUnitId() string`

GetInventoryUnitId returns the InventoryUnitId field if non-nil, zero value otherwise.

### GetInventoryUnitIdOk

`func (o *MaintenanceRequest) GetInventoryUnitIdOk() (*string, bool)`

GetInventoryUnitIdOk returns a tuple with the InventoryUnitId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryUnitId

`func (o *MaintenanceRequest) SetInventoryUnitId(v string)`

SetInventoryUnitId sets InventoryUnitId field to given value.

### HasInventoryUnitId

`func (o *MaintenanceRequest) HasInventoryUnitId() bool`

HasInventoryUnitId returns a boolean if a field has been set.

### GetCategory

`func (o *MaintenanceRequest) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *MaintenanceRequest) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *MaintenanceRequest) SetCategory(v string)`

SetCategory sets Category field to given value.


### GetPriority

`func (o *MaintenanceRequest) GetPriority() string`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *MaintenanceRequest) GetPriorityOk() (*string, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *MaintenanceRequest) SetPriority(v string)`

SetPriority sets Priority field to given value.


### GetStatus

`func (o *MaintenanceRequest) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *MaintenanceRequest) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *MaintenanceRequest) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetTitle

`func (o *MaintenanceRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *MaintenanceRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *MaintenanceRequest) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *MaintenanceRequest) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetDescription

`func (o *MaintenanceRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MaintenanceRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MaintenanceRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MaintenanceRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetReportedBy

`func (o *MaintenanceRequest) GetReportedBy() string`

GetReportedBy returns the ReportedBy field if non-nil, zero value otherwise.

### GetReportedByOk

`func (o *MaintenanceRequest) GetReportedByOk() (*string, bool)`

GetReportedByOk returns a tuple with the ReportedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportedBy

`func (o *MaintenanceRequest) SetReportedBy(v string)`

SetReportedBy sets ReportedBy field to given value.

### HasReportedBy

`func (o *MaintenanceRequest) HasReportedBy() bool`

HasReportedBy returns a boolean if a field has been set.

### GetAssignedTo

`func (o *MaintenanceRequest) GetAssignedTo() string`

GetAssignedTo returns the AssignedTo field if non-nil, zero value otherwise.

### GetAssignedToOk

`func (o *MaintenanceRequest) GetAssignedToOk() (*string, bool)`

GetAssignedToOk returns a tuple with the AssignedTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedTo

`func (o *MaintenanceRequest) SetAssignedTo(v string)`

SetAssignedTo sets AssignedTo field to given value.

### HasAssignedTo

`func (o *MaintenanceRequest) HasAssignedTo() bool`

HasAssignedTo returns a boolean if a field has been set.

### GetScheduledFor

`func (o *MaintenanceRequest) GetScheduledFor() time.Time`

GetScheduledFor returns the ScheduledFor field if non-nil, zero value otherwise.

### GetScheduledForOk

`func (o *MaintenanceRequest) GetScheduledForOk() (*time.Time, bool)`

GetScheduledForOk returns a tuple with the ScheduledFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduledFor

`func (o *MaintenanceRequest) SetScheduledFor(v time.Time)`

SetScheduledFor sets ScheduledFor field to given value.

### HasScheduledFor

`func (o *MaintenanceRequest) HasScheduledFor() bool`

HasScheduledFor returns a boolean if a field has been set.

### GetCompletedAt

`func (o *MaintenanceRequest) GetCompletedAt() time.Time`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *MaintenanceRequest) GetCompletedAtOk() (*time.Time, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *MaintenanceRequest) SetCompletedAt(v time.Time)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *MaintenanceRequest) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.

### GetVerifiedAt

`func (o *MaintenanceRequest) GetVerifiedAt() time.Time`

GetVerifiedAt returns the VerifiedAt field if non-nil, zero value otherwise.

### GetVerifiedAtOk

`func (o *MaintenanceRequest) GetVerifiedAtOk() (*time.Time, bool)`

GetVerifiedAtOk returns a tuple with the VerifiedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerifiedAt

`func (o *MaintenanceRequest) SetVerifiedAt(v time.Time)`

SetVerifiedAt sets VerifiedAt field to given value.

### HasVerifiedAt

`func (o *MaintenanceRequest) HasVerifiedAt() bool`

HasVerifiedAt returns a boolean if a field has been set.

### GetEstimatedCost

`func (o *MaintenanceRequest) GetEstimatedCost() Model0`

GetEstimatedCost returns the EstimatedCost field if non-nil, zero value otherwise.

### GetEstimatedCostOk

`func (o *MaintenanceRequest) GetEstimatedCostOk() (*Model0, bool)`

GetEstimatedCostOk returns a tuple with the EstimatedCost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEstimatedCost

`func (o *MaintenanceRequest) SetEstimatedCost(v Model0)`

SetEstimatedCost sets EstimatedCost field to given value.

### HasEstimatedCost

`func (o *MaintenanceRequest) HasEstimatedCost() bool`

HasEstimatedCost returns a boolean if a field has been set.

### GetActualCost

`func (o *MaintenanceRequest) GetActualCost() Model0`

GetActualCost returns the ActualCost field if non-nil, zero value otherwise.

### GetActualCostOk

`func (o *MaintenanceRequest) GetActualCostOk() (*Model0, bool)`

GetActualCostOk returns a tuple with the ActualCost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualCost

`func (o *MaintenanceRequest) SetActualCost(v Model0)`

SetActualCost sets ActualCost field to given value.

### HasActualCost

`func (o *MaintenanceRequest) HasActualCost() bool`

HasActualCost returns a boolean if a field has been set.

### GetWorkLog

`func (o *MaintenanceRequest) GetWorkLog() []MaintenanceRequestAllOfWorkLog`

GetWorkLog returns the WorkLog field if non-nil, zero value otherwise.

### GetWorkLogOk

`func (o *MaintenanceRequest) GetWorkLogOk() (*[]MaintenanceRequestAllOfWorkLog, bool)`

GetWorkLogOk returns a tuple with the WorkLog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkLog

`func (o *MaintenanceRequest) SetWorkLog(v []MaintenanceRequestAllOfWorkLog)`

SetWorkLog sets WorkLog field to given value.

### HasWorkLog

`func (o *MaintenanceRequest) HasWorkLog() bool`

HasWorkLog returns a boolean if a field has been set.

### GetMetadata

`func (o *MaintenanceRequest) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *MaintenanceRequest) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *MaintenanceRequest) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *MaintenanceRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


