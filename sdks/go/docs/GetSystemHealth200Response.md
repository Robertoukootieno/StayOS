# GetSystemHealth200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] 
**Version** | Pointer to **string** |  | [optional] 
**Timestamp** | Pointer to **time.Time** |  | [optional] 
**Services** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewGetSystemHealth200Response

`func NewGetSystemHealth200Response() *GetSystemHealth200Response`

NewGetSystemHealth200Response instantiates a new GetSystemHealth200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetSystemHealth200ResponseWithDefaults

`func NewGetSystemHealth200ResponseWithDefaults() *GetSystemHealth200Response`

NewGetSystemHealth200ResponseWithDefaults instantiates a new GetSystemHealth200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *GetSystemHealth200Response) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetSystemHealth200Response) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetSystemHealth200Response) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetSystemHealth200Response) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetVersion

`func (o *GetSystemHealth200Response) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *GetSystemHealth200Response) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *GetSystemHealth200Response) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *GetSystemHealth200Response) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetTimestamp

`func (o *GetSystemHealth200Response) GetTimestamp() time.Time`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *GetSystemHealth200Response) GetTimestampOk() (*time.Time, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *GetSystemHealth200Response) SetTimestamp(v time.Time)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *GetSystemHealth200Response) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetServices

`func (o *GetSystemHealth200Response) GetServices() map[string]interface{}`

GetServices returns the Services field if non-nil, zero value otherwise.

### GetServicesOk

`func (o *GetSystemHealth200Response) GetServicesOk() (*map[string]interface{}, bool)`

GetServicesOk returns a tuple with the Services field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServices

`func (o *GetSystemHealth200Response) SetServices(v map[string]interface{})`

SetServices sets Services field to given value.

### HasServices

`func (o *GetSystemHealth200Response) HasServices() bool`

HasServices returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


