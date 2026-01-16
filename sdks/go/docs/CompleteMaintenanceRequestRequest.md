# CompleteMaintenanceRequestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Notes** | Pointer to **string** |  | [optional] 
**PartsUsed** | Pointer to [**[]CompleteMaintenanceRequestRequestPartsUsedInner**](CompleteMaintenanceRequestRequestPartsUsedInner.md) |  | [optional] 

## Methods

### NewCompleteMaintenanceRequestRequest

`func NewCompleteMaintenanceRequestRequest() *CompleteMaintenanceRequestRequest`

NewCompleteMaintenanceRequestRequest instantiates a new CompleteMaintenanceRequestRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompleteMaintenanceRequestRequestWithDefaults

`func NewCompleteMaintenanceRequestRequestWithDefaults() *CompleteMaintenanceRequestRequest`

NewCompleteMaintenanceRequestRequestWithDefaults instantiates a new CompleteMaintenanceRequestRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNotes

`func (o *CompleteMaintenanceRequestRequest) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *CompleteMaintenanceRequestRequest) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *CompleteMaintenanceRequestRequest) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *CompleteMaintenanceRequestRequest) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetPartsUsed

`func (o *CompleteMaintenanceRequestRequest) GetPartsUsed() []CompleteMaintenanceRequestRequestPartsUsedInner`

GetPartsUsed returns the PartsUsed field if non-nil, zero value otherwise.

### GetPartsUsedOk

`func (o *CompleteMaintenanceRequestRequest) GetPartsUsedOk() (*[]CompleteMaintenanceRequestRequestPartsUsedInner, bool)`

GetPartsUsedOk returns a tuple with the PartsUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartsUsed

`func (o *CompleteMaintenanceRequestRequest) SetPartsUsed(v []CompleteMaintenanceRequestRequestPartsUsedInner)`

SetPartsUsed sets PartsUsed field to given value.

### HasPartsUsed

`func (o *CompleteMaintenanceRequestRequest) HasPartsUsed() bool`

HasPartsUsed returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


