# GetSystemStatus200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] 
**Components** | Pointer to [**map[string]GetSystemStatus200ResponseComponentsValue**](GetSystemStatus200ResponseComponentsValue.md) |  | [optional] 

## Methods

### NewGetSystemStatus200Response

`func NewGetSystemStatus200Response() *GetSystemStatus200Response`

NewGetSystemStatus200Response instantiates a new GetSystemStatus200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemStatus200ResponseWithDefaults

`func NewGetSystemStatus200ResponseWithDefaults() *GetSystemStatus200Response`

NewGetSystemStatus200ResponseWithDefaults instantiates a new GetSystemStatus200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *GetSystemStatus200Response) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetSystemStatus200Response) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetSystemStatus200Response) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetSystemStatus200Response) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetComponents

`func (o *GetSystemStatus200Response) GetComponents() map[string]GetSystemStatus200ResponseComponentsValue`

GetComponents returns the Components field if non-nil, zero value otherwise.

### GetComponentsOk

`func (o *GetSystemStatus200Response) GetComponentsOk() (*map[string]GetSystemStatus200ResponseComponentsValue, bool)`

GetComponentsOk returns a tuple with the Components field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponents

`func (o *GetSystemStatus200Response) SetComponents(v map[string]GetSystemStatus200ResponseComponentsValue)`

SetComponents sets Components field to given value.

### HasComponents

`func (o *GetSystemStatus200Response) HasComponents() bool`

HasComponents returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


