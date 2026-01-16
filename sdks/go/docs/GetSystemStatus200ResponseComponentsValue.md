# GetSystemStatus200ResponseComponentsValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] 
**LastCheck** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewGetSystemStatus200ResponseComponentsValue

`func NewGetSystemStatus200ResponseComponentsValue() *GetSystemStatus200ResponseComponentsValue`

NewGetSystemStatus200ResponseComponentsValue instantiates a new GetSystemStatus200ResponseComponentsValue object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemStatus200ResponseComponentsValueWithDefaults

`func NewGetSystemStatus200ResponseComponentsValueWithDefaults() *GetSystemStatus200ResponseComponentsValue`

NewGetSystemStatus200ResponseComponentsValueWithDefaults instantiates a new GetSystemStatus200ResponseComponentsValue object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *GetSystemStatus200ResponseComponentsValue) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetSystemStatus200ResponseComponentsValue) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetSystemStatus200ResponseComponentsValue) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetSystemStatus200ResponseComponentsValue) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetLastCheck

`func (o *GetSystemStatus200ResponseComponentsValue) GetLastCheck() time.Time`

GetLastCheck returns the LastCheck field if non-nil, zero value otherwise.

### GetLastCheckOk

`func (o *GetSystemStatus200ResponseComponentsValue) GetLastCheckOk() (*time.Time, bool)`

GetLastCheckOk returns a tuple with the LastCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastCheck

`func (o *GetSystemStatus200ResponseComponentsValue) SetLastCheck(v time.Time)`

SetLastCheck sets LastCheck field to given value.

### HasLastCheck

`func (o *GetSystemStatus200ResponseComponentsValue) HasLastCheck() bool`

HasLastCheck returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


