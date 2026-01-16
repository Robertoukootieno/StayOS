# ServiceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **string** |  | [readonly] 
**PropertyId** | **string** |  | 
**StayId** | Pointer to **string** |  | [optional] 
**GuestId** | Pointer to **string** |  | [optional] 
**InventoryUnitId** | Pointer to **string** |  | [optional] 
**Category** | **string** |  | 
**Priority** | Pointer to **string** |  | [optional] [default to "NORMAL"]
**Status** | **string** |  | 
**Title** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**RequestedBy** | Pointer to **string** |  | [optional] [default to "GUEST"]
**AssignedTo** | Pointer to **string** |  | [optional] 
**AcknowledgedAt** | Pointer to **time.Time** |  | [optional] 
**CompletedAt** | Pointer to **time.Time** |  | [optional] 
**GuestFeedback** | Pointer to [**ServiceRequestAllOfGuestFeedback**](ServiceRequestAllOfGuestFeedback.md) |  | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewServiceRequest

`func NewServiceRequest(requestId string, propertyId string, category string, status string, ) *ServiceRequest`

NewServiceRequest instantiates a new ServiceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceRequestWithDefaults

`func NewServiceRequestWithDefaults() *ServiceRequest`

NewServiceRequestWithDefaults instantiates a new ServiceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *ServiceRequest) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *ServiceRequest) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *ServiceRequest) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.


### GetPropertyId

`func (o *ServiceRequest) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *ServiceRequest) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *ServiceRequest) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetStayId

`func (o *ServiceRequest) GetStayId() string`

GetStayId returns the StayId field if non-nil, zero value otherwise.

### GetStayIdOk

`func (o *ServiceRequest) GetStayIdOk() (*string, bool)`

GetStayIdOk returns a tuple with the StayId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayId

`func (o *ServiceRequest) SetStayId(v string)`

SetStayId sets StayId field to given value.

### HasStayId

`func (o *ServiceRequest) HasStayId() bool`

HasStayId returns a boolean if a field has been set.

### GetGuestId

`func (o *ServiceRequest) GetGuestId() string`

GetGuestId returns the GuestId field if non-nil, zero value otherwise.

### GetGuestIdOk

`func (o *ServiceRequest) GetGuestIdOk() (*string, bool)`

GetGuestIdOk returns a tuple with the GuestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestId

`func (o *ServiceRequest) SetGuestId(v string)`

SetGuestId sets GuestId field to given value.

### HasGuestId

`func (o *ServiceRequest) HasGuestId() bool`

HasGuestId returns a boolean if a field has been set.

### GetInventoryUnitId

`func (o *ServiceRequest) GetInventoryUnitId() string`

GetInventoryUnitId returns the InventoryUnitId field if non-nil, zero value otherwise.

### GetInventoryUnitIdOk

`func (o *ServiceRequest) GetInventoryUnitIdOk() (*string, bool)`

GetInventoryUnitIdOk returns a tuple with the InventoryUnitId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryUnitId

`func (o *ServiceRequest) SetInventoryUnitId(v string)`

SetInventoryUnitId sets InventoryUnitId field to given value.

### HasInventoryUnitId

`func (o *ServiceRequest) HasInventoryUnitId() bool`

HasInventoryUnitId returns a boolean if a field has been set.

### GetCategory

`func (o *ServiceRequest) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *ServiceRequest) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *ServiceRequest) SetCategory(v string)`

SetCategory sets Category field to given value.


### GetPriority

`func (o *ServiceRequest) GetPriority() string`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *ServiceRequest) GetPriorityOk() (*string, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *ServiceRequest) SetPriority(v string)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *ServiceRequest) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetStatus

`func (o *ServiceRequest) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ServiceRequest) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ServiceRequest) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetTitle

`func (o *ServiceRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *ServiceRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *ServiceRequest) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *ServiceRequest) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetDescription

`func (o *ServiceRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ServiceRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ServiceRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ServiceRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRequestedBy

`func (o *ServiceRequest) GetRequestedBy() string`

GetRequestedBy returns the RequestedBy field if non-nil, zero value otherwise.

### GetRequestedByOk

`func (o *ServiceRequest) GetRequestedByOk() (*string, bool)`

GetRequestedByOk returns a tuple with the RequestedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedBy

`func (o *ServiceRequest) SetRequestedBy(v string)`

SetRequestedBy sets RequestedBy field to given value.

### HasRequestedBy

`func (o *ServiceRequest) HasRequestedBy() bool`

HasRequestedBy returns a boolean if a field has been set.

### GetAssignedTo

`func (o *ServiceRequest) GetAssignedTo() string`

GetAssignedTo returns the AssignedTo field if non-nil, zero value otherwise.

### GetAssignedToOk

`func (o *ServiceRequest) GetAssignedToOk() (*string, bool)`

GetAssignedToOk returns a tuple with the AssignedTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedTo

`func (o *ServiceRequest) SetAssignedTo(v string)`

SetAssignedTo sets AssignedTo field to given value.

### HasAssignedTo

`func (o *ServiceRequest) HasAssignedTo() bool`

HasAssignedTo returns a boolean if a field has been set.

### GetAcknowledgedAt

`func (o *ServiceRequest) GetAcknowledgedAt() time.Time`

GetAcknowledgedAt returns the AcknowledgedAt field if non-nil, zero value otherwise.

### GetAcknowledgedAtOk

`func (o *ServiceRequest) GetAcknowledgedAtOk() (*time.Time, bool)`

GetAcknowledgedAtOk returns a tuple with the AcknowledgedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAcknowledgedAt

`func (o *ServiceRequest) SetAcknowledgedAt(v time.Time)`

SetAcknowledgedAt sets AcknowledgedAt field to given value.

### HasAcknowledgedAt

`func (o *ServiceRequest) HasAcknowledgedAt() bool`

HasAcknowledgedAt returns a boolean if a field has been set.

### GetCompletedAt

`func (o *ServiceRequest) GetCompletedAt() time.Time`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *ServiceRequest) GetCompletedAtOk() (*time.Time, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *ServiceRequest) SetCompletedAt(v time.Time)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *ServiceRequest) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.

### GetGuestFeedback

`func (o *ServiceRequest) GetGuestFeedback() ServiceRequestAllOfGuestFeedback`

GetGuestFeedback returns the GuestFeedback field if non-nil, zero value otherwise.

### GetGuestFeedbackOk

`func (o *ServiceRequest) GetGuestFeedbackOk() (*ServiceRequestAllOfGuestFeedback, bool)`

GetGuestFeedbackOk returns a tuple with the GuestFeedback field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestFeedback

`func (o *ServiceRequest) SetGuestFeedback(v ServiceRequestAllOfGuestFeedback)`

SetGuestFeedback sets GuestFeedback field to given value.

### HasGuestFeedback

`func (o *ServiceRequest) HasGuestFeedback() bool`

HasGuestFeedback returns a boolean if a field has been set.

### GetMetadata

`func (o *ServiceRequest) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ServiceRequest) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ServiceRequest) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *ServiceRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


