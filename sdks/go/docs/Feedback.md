# Feedback

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FeedbackId** | **string** |  | [readonly] 
**GuestId** | **string** |  | 
**StayId** | Pointer to **string** | Associated stay (if applicable) | [optional] 
**PropertyId** | Pointer to **string** |  | [optional] 
**Type** | **string** |  | 
**Category** | Pointer to **string** |  | [optional] 
**Rating** | **int32** | Overall rating (1-5 stars) | 
**Subject** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Status** | **string** |  | 
**Priority** | Pointer to **string** |  | [optional] [default to "MEDIUM"]
**Response** | Pointer to [**FeedbackAllOfResponse**](FeedbackAllOfResponse.md) |  | [optional] 
**ServiceRecovery** | Pointer to [**FeedbackAllOfServiceRecovery**](FeedbackAllOfServiceRecovery.md) |  | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewFeedback

`func NewFeedback(feedbackId string, guestId string, type_ string, rating int32, status string, ) *Feedback`

NewFeedback instantiates a new Feedback object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFeedbackWithDefaults

`func NewFeedbackWithDefaults() *Feedback`

NewFeedbackWithDefaults instantiates a new Feedback object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFeedbackId

`func (o *Feedback) GetFeedbackId() string`

GetFeedbackId returns the FeedbackId field if non-nil, zero value otherwise.

### GetFeedbackIdOk

`func (o *Feedback) GetFeedbackIdOk() (*string, bool)`

GetFeedbackIdOk returns a tuple with the FeedbackId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeedbackId

`func (o *Feedback) SetFeedbackId(v string)`

SetFeedbackId sets FeedbackId field to given value.


### GetGuestId

`func (o *Feedback) GetGuestId() string`

GetGuestId returns the GuestId field if non-nil, zero value otherwise.

### GetGuestIdOk

`func (o *Feedback) GetGuestIdOk() (*string, bool)`

GetGuestIdOk returns a tuple with the GuestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestId

`func (o *Feedback) SetGuestId(v string)`

SetGuestId sets GuestId field to given value.


### GetStayId

`func (o *Feedback) GetStayId() string`

GetStayId returns the StayId field if non-nil, zero value otherwise.

### GetStayIdOk

`func (o *Feedback) GetStayIdOk() (*string, bool)`

GetStayIdOk returns a tuple with the StayId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayId

`func (o *Feedback) SetStayId(v string)`

SetStayId sets StayId field to given value.

### HasStayId

`func (o *Feedback) HasStayId() bool`

HasStayId returns a boolean if a field has been set.

### GetPropertyId

`func (o *Feedback) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *Feedback) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *Feedback) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.

### HasPropertyId

`func (o *Feedback) HasPropertyId() bool`

HasPropertyId returns a boolean if a field has been set.

### GetType

`func (o *Feedback) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Feedback) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Feedback) SetType(v string)`

SetType sets Type field to given value.


### GetCategory

`func (o *Feedback) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *Feedback) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *Feedback) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *Feedback) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetRating

`func (o *Feedback) GetRating() int32`

GetRating returns the Rating field if non-nil, zero value otherwise.

### GetRatingOk

`func (o *Feedback) GetRatingOk() (*int32, bool)`

GetRatingOk returns a tuple with the Rating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRating

`func (o *Feedback) SetRating(v int32)`

SetRating sets Rating field to given value.


### GetSubject

`func (o *Feedback) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *Feedback) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *Feedback) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *Feedback) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetDescription

`func (o *Feedback) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Feedback) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Feedback) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Feedback) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetStatus

`func (o *Feedback) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Feedback) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Feedback) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetPriority

`func (o *Feedback) GetPriority() string`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *Feedback) GetPriorityOk() (*string, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *Feedback) SetPriority(v string)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *Feedback) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetResponse

`func (o *Feedback) GetResponse() FeedbackAllOfResponse`

GetResponse returns the Response field if non-nil, zero value otherwise.

### GetResponseOk

`func (o *Feedback) GetResponseOk() (*FeedbackAllOfResponse, bool)`

GetResponseOk returns a tuple with the Response field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponse

`func (o *Feedback) SetResponse(v FeedbackAllOfResponse)`

SetResponse sets Response field to given value.

### HasResponse

`func (o *Feedback) HasResponse() bool`

HasResponse returns a boolean if a field has been set.

### GetServiceRecovery

`func (o *Feedback) GetServiceRecovery() FeedbackAllOfServiceRecovery`

GetServiceRecovery returns the ServiceRecovery field if non-nil, zero value otherwise.

### GetServiceRecoveryOk

`func (o *Feedback) GetServiceRecoveryOk() (*FeedbackAllOfServiceRecovery, bool)`

GetServiceRecoveryOk returns a tuple with the ServiceRecovery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRecovery

`func (o *Feedback) SetServiceRecovery(v FeedbackAllOfServiceRecovery)`

SetServiceRecovery sets ServiceRecovery field to given value.

### HasServiceRecovery

`func (o *Feedback) HasServiceRecovery() bool`

HasServiceRecovery returns a boolean if a field has been set.

### GetMetadata

`func (o *Feedback) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Feedback) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Feedback) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Feedback) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


