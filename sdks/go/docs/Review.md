# Review

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReviewId** | **string** |  | [readonly] 
**Source** | **string** |  | 
**ExternalId** | Pointer to **string** | Review ID from external platform | [optional] 
**GuestName** | Pointer to **string** |  | [optional] 
**Rating** | **float32** |  | 
**Title** | Pointer to **string** |  | [optional] 
**Content** | Pointer to **string** |  | [optional] 
**ReviewDate** | Pointer to **string** |  | [optional] 
**Response** | Pointer to [**ReviewAllOfResponse**](ReviewAllOfResponse.md) |  | [optional] 

## Methods

### NewReview

`func NewReview(reviewId string, source string, rating float32, ) *Review`

NewReview instantiates a new Review object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewWithDefaults

`func NewReviewWithDefaults() *Review`

NewReviewWithDefaults instantiates a new Review object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReviewId

`func (o *Review) GetReviewId() string`

GetReviewId returns the ReviewId field if non-nil, zero value otherwise.

### GetReviewIdOk

`func (o *Review) GetReviewIdOk() (*string, bool)`

GetReviewIdOk returns a tuple with the ReviewId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewId

`func (o *Review) SetReviewId(v string)`

SetReviewId sets ReviewId field to given value.


### GetSource

`func (o *Review) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Review) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Review) SetSource(v string)`

SetSource sets Source field to given value.


### GetExternalId

`func (o *Review) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *Review) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *Review) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.

### HasExternalId

`func (o *Review) HasExternalId() bool`

HasExternalId returns a boolean if a field has been set.

### GetGuestName

`func (o *Review) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *Review) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *Review) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *Review) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetRating

`func (o *Review) GetRating() float32`

GetRating returns the Rating field if non-nil, zero value otherwise.

### GetRatingOk

`func (o *Review) GetRatingOk() (*float32, bool)`

GetRatingOk returns a tuple with the Rating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRating

`func (o *Review) SetRating(v float32)`

SetRating sets Rating field to given value.


### GetTitle

`func (o *Review) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *Review) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *Review) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *Review) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetContent

`func (o *Review) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *Review) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *Review) SetContent(v string)`

SetContent sets Content field to given value.

### HasContent

`func (o *Review) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetReviewDate

`func (o *Review) GetReviewDate() string`

GetReviewDate returns the ReviewDate field if non-nil, zero value otherwise.

### GetReviewDateOk

`func (o *Review) GetReviewDateOk() (*string, bool)`

GetReviewDateOk returns a tuple with the ReviewDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewDate

`func (o *Review) SetReviewDate(v string)`

SetReviewDate sets ReviewDate field to given value.

### HasReviewDate

`func (o *Review) HasReviewDate() bool`

HasReviewDate returns a boolean if a field has been set.

### GetResponse

`func (o *Review) GetResponse() ReviewAllOfResponse`

GetResponse returns the Response field if non-nil, zero value otherwise.

### GetResponseOk

`func (o *Review) GetResponseOk() (*ReviewAllOfResponse, bool)`

GetResponseOk returns a tuple with the Response field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponse

`func (o *Review) SetResponse(v ReviewAllOfResponse)`

SetResponse sets Response field to given value.

### HasResponse

`func (o *Review) HasResponse() bool`

HasResponse returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


