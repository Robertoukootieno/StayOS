# GetAuditLogs200ResponseAllOfDataInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Timestamp** | Pointer to **time.Time** |  | [optional] 
**UserId** | Pointer to **string** |  | [optional] 
**Action** | Pointer to **string** |  | [optional] 
**EntityType** | Pointer to **string** |  | [optional] 
**EntityId** | Pointer to **string** |  | [optional] 
**Changes** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewGetAuditLogs200ResponseAllOfDataInner

`func NewGetAuditLogs200ResponseAllOfDataInner() *GetAuditLogs200ResponseAllOfDataInner`

NewGetAuditLogs200ResponseAllOfDataInner instantiates a new GetAuditLogs200ResponseAllOfDataInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAuditLogs200ResponseAllOfDataInnerWithDefaults

`func NewGetAuditLogs200ResponseAllOfDataInnerWithDefaults() *GetAuditLogs200ResponseAllOfDataInner`

NewGetAuditLogs200ResponseAllOfDataInnerWithDefaults instantiates a new GetAuditLogs200ResponseAllOfDataInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimestamp

`func (o *GetAuditLogs200ResponseAllOfDataInner) GetTimestamp() time.Time`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *GetAuditLogs200ResponseAllOfDataInner) GetTimestampOk() (*time.Time, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *GetAuditLogs200ResponseAllOfDataInner) SetTimestamp(v time.Time)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *GetAuditLogs200ResponseAllOfDataInner) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetUserId

`func (o *GetAuditLogs200ResponseAllOfDataInner) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *GetAuditLogs200ResponseAllOfDataInner) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *GetAuditLogs200ResponseAllOfDataInner) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *GetAuditLogs200ResponseAllOfDataInner) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetAction

`func (o *GetAuditLogs200ResponseAllOfDataInner) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *GetAuditLogs200ResponseAllOfDataInner) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *GetAuditLogs200ResponseAllOfDataInner) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *GetAuditLogs200ResponseAllOfDataInner) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetEntityType

`func (o *GetAuditLogs200ResponseAllOfDataInner) GetEntityType() string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *GetAuditLogs200ResponseAllOfDataInner) GetEntityTypeOk() (*string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *GetAuditLogs200ResponseAllOfDataInner) SetEntityType(v string)`

SetEntityType sets EntityType field to given value.

### HasEntityType

`func (o *GetAuditLogs200ResponseAllOfDataInner) HasEntityType() bool`

HasEntityType returns a boolean if a field has been set.

### GetEntityId

`func (o *GetAuditLogs200ResponseAllOfDataInner) GetEntityId() string`

GetEntityId returns the EntityId field if non-nil, zero value otherwise.

### GetEntityIdOk

`func (o *GetAuditLogs200ResponseAllOfDataInner) GetEntityIdOk() (*string, bool)`

GetEntityIdOk returns a tuple with the EntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityId

`func (o *GetAuditLogs200ResponseAllOfDataInner) SetEntityId(v string)`

SetEntityId sets EntityId field to given value.

### HasEntityId

`func (o *GetAuditLogs200ResponseAllOfDataInner) HasEntityId() bool`

HasEntityId returns a boolean if a field has been set.

### GetChanges

`func (o *GetAuditLogs200ResponseAllOfDataInner) GetChanges() map[string]interface{}`

GetChanges returns the Changes field if non-nil, zero value otherwise.

### GetChangesOk

`func (o *GetAuditLogs200ResponseAllOfDataInner) GetChangesOk() (*map[string]interface{}, bool)`

GetChangesOk returns a tuple with the Changes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChanges

`func (o *GetAuditLogs200ResponseAllOfDataInner) SetChanges(v map[string]interface{})`

SetChanges sets Changes field to given value.

### HasChanges

`func (o *GetAuditLogs200ResponseAllOfDataInner) HasChanges() bool`

HasChanges returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


