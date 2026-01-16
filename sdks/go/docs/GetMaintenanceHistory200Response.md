# GetMaintenanceHistory200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | Pointer to **string** |  | [optional] 
**History** | Pointer to [**[]GetMaintenanceHistory200ResponseHistoryInner**](GetMaintenanceHistory200ResponseHistoryInner.md) |  | [optional] 

## Methods

### NewGetMaintenanceHistory200Response

`func NewGetMaintenanceHistory200Response() *GetMaintenanceHistory200Response`

NewGetMaintenanceHistory200Response instantiates a new GetMaintenanceHistory200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetMaintenanceHistory200ResponseWithDefaults

`func NewGetMaintenanceHistory200ResponseWithDefaults() *GetMaintenanceHistory200Response`

NewGetMaintenanceHistory200ResponseWithDefaults instantiates a new GetMaintenanceHistory200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *GetMaintenanceHistory200Response) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *GetMaintenanceHistory200Response) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *GetMaintenanceHistory200Response) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *GetMaintenanceHistory200Response) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### GetHistory

`func (o *GetMaintenanceHistory200Response) GetHistory() []GetMaintenanceHistory200ResponseHistoryInner`

GetHistory returns the History field if non-nil, zero value otherwise.

### GetHistoryOk

`func (o *GetMaintenanceHistory200Response) GetHistoryOk() (*[]GetMaintenanceHistory200ResponseHistoryInner, bool)`

GetHistoryOk returns a tuple with the History field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistory

`func (o *GetMaintenanceHistory200Response) SetHistory(v []GetMaintenanceHistory200ResponseHistoryInner)`

SetHistory sets History field to given value.

### HasHistory

`func (o *GetMaintenanceHistory200Response) HasHistory() bool`

HasHistory returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


