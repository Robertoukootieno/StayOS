# ServeFBOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ServedAt** | Pointer to **time.Time** |  | [optional] 
**ServedBy** | Pointer to **string** |  | [optional] 

## Methods

### NewServeFBOrderRequest

`func NewServeFBOrderRequest() *ServeFBOrderRequest`

NewServeFBOrderRequest instantiates a new ServeFBOrderRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServeFBOrderRequestWithDefaults

`func NewServeFBOrderRequestWithDefaults() *ServeFBOrderRequest`

NewServeFBOrderRequestWithDefaults instantiates a new ServeFBOrderRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetServedAt

`func (o *ServeFBOrderRequest) GetServedAt() time.Time`

GetServedAt returns the ServedAt field if non-nil, zero value otherwise.

### GetServedAtOk

`func (o *ServeFBOrderRequest) GetServedAtOk() (*time.Time, bool)`

GetServedAtOk returns a tuple with the ServedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServedAt

`func (o *ServeFBOrderRequest) SetServedAt(v time.Time)`

SetServedAt sets ServedAt field to given value.

### HasServedAt

`func (o *ServeFBOrderRequest) HasServedAt() bool`

HasServedAt returns a boolean if a field has been set.

### GetServedBy

`func (o *ServeFBOrderRequest) GetServedBy() string`

GetServedBy returns the ServedBy field if non-nil, zero value otherwise.

### GetServedByOk

`func (o *ServeFBOrderRequest) GetServedByOk() (*string, bool)`

GetServedByOk returns a tuple with the ServedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServedBy

`func (o *ServeFBOrderRequest) SetServedBy(v string)`

SetServedBy sets ServedBy field to given value.

### HasServedBy

`func (o *ServeFBOrderRequest) HasServedBy() bool`

HasServedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


