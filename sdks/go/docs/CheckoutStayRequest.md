# CheckoutStayRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckoutTime** | Pointer to **time.Time** |  | [optional] 
**Notes** | Pointer to **string** |  | [optional] 

## Methods

### NewCheckoutStayRequest

`func NewCheckoutStayRequest() *CheckoutStayRequest`

NewCheckoutStayRequest instantiates a new CheckoutStayRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckoutStayRequestWithDefaults

`func NewCheckoutStayRequestWithDefaults() *CheckoutStayRequest`

NewCheckoutStayRequestWithDefaults instantiates a new CheckoutStayRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckoutTime

`func (o *CheckoutStayRequest) GetCheckoutTime() time.Time`

GetCheckoutTime returns the CheckoutTime field if non-nil, zero value otherwise.

### GetCheckoutTimeOk

`func (o *CheckoutStayRequest) GetCheckoutTimeOk() (*time.Time, bool)`

GetCheckoutTimeOk returns a tuple with the CheckoutTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckoutTime

`func (o *CheckoutStayRequest) SetCheckoutTime(v time.Time)`

SetCheckoutTime sets CheckoutTime field to given value.

### HasCheckoutTime

`func (o *CheckoutStayRequest) HasCheckoutTime() bool`

HasCheckoutTime returns a boolean if a field has been set.

### GetNotes

`func (o *CheckoutStayRequest) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *CheckoutStayRequest) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *CheckoutStayRequest) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *CheckoutStayRequest) HasNotes() bool`

HasNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


