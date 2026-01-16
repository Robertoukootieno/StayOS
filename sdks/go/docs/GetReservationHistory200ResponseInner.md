# GetReservationHistory200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Timestamp** | Pointer to **time.Time** |  | [optional] 
**Action** | Pointer to **string** |  | [optional] 
**ChangedBy** | Pointer to **string** |  | [optional] 
**Changes** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewGetReservationHistory200ResponseInner

`func NewGetReservationHistory200ResponseInner() *GetReservationHistory200ResponseInner`

NewGetReservationHistory200ResponseInner instantiates a new GetReservationHistory200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetReservationHistory200ResponseInnerWithDefaults

`func NewGetReservationHistory200ResponseInnerWithDefaults() *GetReservationHistory200ResponseInner`

NewGetReservationHistory200ResponseInnerWithDefaults instantiates a new GetReservationHistory200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimestamp

`func (o *GetReservationHistory200ResponseInner) GetTimestamp() time.Time`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *GetReservationHistory200ResponseInner) GetTimestampOk() (*time.Time, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *GetReservationHistory200ResponseInner) SetTimestamp(v time.Time)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *GetReservationHistory200ResponseInner) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetAction

`func (o *GetReservationHistory200ResponseInner) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *GetReservationHistory200ResponseInner) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *GetReservationHistory200ResponseInner) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *GetReservationHistory200ResponseInner) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetChangedBy

`func (o *GetReservationHistory200ResponseInner) GetChangedBy() string`

GetChangedBy returns the ChangedBy field if non-nil, zero value otherwise.

### GetChangedByOk

`func (o *GetReservationHistory200ResponseInner) GetChangedByOk() (*string, bool)`

GetChangedByOk returns a tuple with the ChangedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangedBy

`func (o *GetReservationHistory200ResponseInner) SetChangedBy(v string)`

SetChangedBy sets ChangedBy field to given value.

### HasChangedBy

`func (o *GetReservationHistory200ResponseInner) HasChangedBy() bool`

HasChangedBy returns a boolean if a field has been set.

### GetChanges

`func (o *GetReservationHistory200ResponseInner) GetChanges() map[string]interface{}`

GetChanges returns the Changes field if non-nil, zero value otherwise.

### GetChangesOk

`func (o *GetReservationHistory200ResponseInner) GetChangesOk() (*map[string]interface{}, bool)`

GetChangesOk returns a tuple with the Changes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChanges

`func (o *GetReservationHistory200ResponseInner) SetChanges(v map[string]interface{})`

SetChanges sets Changes field to given value.

### HasChanges

`func (o *GetReservationHistory200ResponseInner) HasChanges() bool`

HasChanges returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


