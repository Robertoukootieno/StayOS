# Survey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SurveyId** | **string** |  | [readonly] 
**StayId** | **string** |  | 
**GuestId** | **string** |  | 
**OverallRating** | Pointer to **int32** |  | [optional] 
**NpsScore** | Pointer to **int32** | Net Promoter Score (0-10) | [optional] 
**Ratings** | Pointer to [**SurveyAllOfRatings**](SurveyAllOfRatings.md) |  | [optional] 
**Comments** | Pointer to **string** |  | [optional] 
**WouldRecommend** | Pointer to **bool** |  | [optional] 
**CompletedAt** | Pointer to **time.Time** |  | [optional] [readonly] 

## Methods

### NewSurvey

`func NewSurvey(surveyId string, stayId string, guestId string, ) *Survey`

NewSurvey instantiates a new Survey object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSurveyWithDefaults

`func NewSurveyWithDefaults() *Survey`

NewSurveyWithDefaults instantiates a new Survey object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSurveyId

`func (o *Survey) GetSurveyId() string`

GetSurveyId returns the SurveyId field if non-nil, zero value otherwise.

### GetSurveyIdOk

`func (o *Survey) GetSurveyIdOk() (*string, bool)`

GetSurveyIdOk returns a tuple with the SurveyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurveyId

`func (o *Survey) SetSurveyId(v string)`

SetSurveyId sets SurveyId field to given value.


### GetStayId

`func (o *Survey) GetStayId() string`

GetStayId returns the StayId field if non-nil, zero value otherwise.

### GetStayIdOk

`func (o *Survey) GetStayIdOk() (*string, bool)`

GetStayIdOk returns a tuple with the StayId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayId

`func (o *Survey) SetStayId(v string)`

SetStayId sets StayId field to given value.


### GetGuestId

`func (o *Survey) GetGuestId() string`

GetGuestId returns the GuestId field if non-nil, zero value otherwise.

### GetGuestIdOk

`func (o *Survey) GetGuestIdOk() (*string, bool)`

GetGuestIdOk returns a tuple with the GuestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestId

`func (o *Survey) SetGuestId(v string)`

SetGuestId sets GuestId field to given value.


### GetOverallRating

`func (o *Survey) GetOverallRating() int32`

GetOverallRating returns the OverallRating field if non-nil, zero value otherwise.

### GetOverallRatingOk

`func (o *Survey) GetOverallRatingOk() (*int32, bool)`

GetOverallRatingOk returns a tuple with the OverallRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverallRating

`func (o *Survey) SetOverallRating(v int32)`

SetOverallRating sets OverallRating field to given value.

### HasOverallRating

`func (o *Survey) HasOverallRating() bool`

HasOverallRating returns a boolean if a field has been set.

### GetNpsScore

`func (o *Survey) GetNpsScore() int32`

GetNpsScore returns the NpsScore field if non-nil, zero value otherwise.

### GetNpsScoreOk

`func (o *Survey) GetNpsScoreOk() (*int32, bool)`

GetNpsScoreOk returns a tuple with the NpsScore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNpsScore

`func (o *Survey) SetNpsScore(v int32)`

SetNpsScore sets NpsScore field to given value.

### HasNpsScore

`func (o *Survey) HasNpsScore() bool`

HasNpsScore returns a boolean if a field has been set.

### GetRatings

`func (o *Survey) GetRatings() SurveyAllOfRatings`

GetRatings returns the Ratings field if non-nil, zero value otherwise.

### GetRatingsOk

`func (o *Survey) GetRatingsOk() (*SurveyAllOfRatings, bool)`

GetRatingsOk returns a tuple with the Ratings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatings

`func (o *Survey) SetRatings(v SurveyAllOfRatings)`

SetRatings sets Ratings field to given value.

### HasRatings

`func (o *Survey) HasRatings() bool`

HasRatings returns a boolean if a field has been set.

### GetComments

`func (o *Survey) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *Survey) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *Survey) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *Survey) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetWouldRecommend

`func (o *Survey) GetWouldRecommend() bool`

GetWouldRecommend returns the WouldRecommend field if non-nil, zero value otherwise.

### GetWouldRecommendOk

`func (o *Survey) GetWouldRecommendOk() (*bool, bool)`

GetWouldRecommendOk returns a tuple with the WouldRecommend field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWouldRecommend

`func (o *Survey) SetWouldRecommend(v bool)`

SetWouldRecommend sets WouldRecommend field to given value.

### HasWouldRecommend

`func (o *Survey) HasWouldRecommend() bool`

HasWouldRecommend returns a boolean if a field has been set.

### GetCompletedAt

`func (o *Survey) GetCompletedAt() time.Time`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *Survey) GetCompletedAtOk() (*time.Time, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *Survey) SetCompletedAt(v time.Time)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *Survey) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


