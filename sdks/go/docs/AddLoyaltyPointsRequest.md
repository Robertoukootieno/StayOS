# AddLoyaltyPointsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Points** | **int32** |  | 
**Reason** | **string** |  | 
**ReferenceId** | Pointer to **string** |  | [optional] 

## Methods

### NewAddLoyaltyPointsRequest

`func NewAddLoyaltyPointsRequest(points int32, reason string, ) *AddLoyaltyPointsRequest`

NewAddLoyaltyPointsRequest instantiates a new AddLoyaltyPointsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddLoyaltyPointsRequestWithDefaults

`func NewAddLoyaltyPointsRequestWithDefaults() *AddLoyaltyPointsRequest`

NewAddLoyaltyPointsRequestWithDefaults instantiates a new AddLoyaltyPointsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPoints

`func (o *AddLoyaltyPointsRequest) GetPoints() int32`

GetPoints returns the Points field if non-nil, zero value otherwise.

### GetPointsOk

`func (o *AddLoyaltyPointsRequest) GetPointsOk() (*int32, bool)`

GetPointsOk returns a tuple with the Points field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoints

`func (o *AddLoyaltyPointsRequest) SetPoints(v int32)`

SetPoints sets Points field to given value.


### GetReason

`func (o *AddLoyaltyPointsRequest) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *AddLoyaltyPointsRequest) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *AddLoyaltyPointsRequest) SetReason(v string)`

SetReason sets Reason field to given value.


### GetReferenceId

`func (o *AddLoyaltyPointsRequest) GetReferenceId() string`

GetReferenceId returns the ReferenceId field if non-nil, zero value otherwise.

### GetReferenceIdOk

`func (o *AddLoyaltyPointsRequest) GetReferenceIdOk() (*string, bool)`

GetReferenceIdOk returns a tuple with the ReferenceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceId

`func (o *AddLoyaltyPointsRequest) SetReferenceId(v string)`

SetReferenceId sets ReferenceId field to given value.

### HasReferenceId

`func (o *AddLoyaltyPointsRequest) HasReferenceId() bool`

HasReferenceId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


