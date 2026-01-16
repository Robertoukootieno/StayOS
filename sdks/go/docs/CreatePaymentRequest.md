# CreatePaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioId** | **string** |  | 
**Amount** | [**Money**](Money.md) |  | 
**Method** | **string** |  | 

## Methods

### NewCreatePaymentRequest

`func NewCreatePaymentRequest(folioId string, amount Money, method string, ) *CreatePaymentRequest`

NewCreatePaymentRequest instantiates a new CreatePaymentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatePaymentRequestWithDefaults

`func NewCreatePaymentRequestWithDefaults() *CreatePaymentRequest`

NewCreatePaymentRequestWithDefaults instantiates a new CreatePaymentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioId

`func (o *CreatePaymentRequest) GetFolioId() string`

GetFolioId returns the FolioId field if non-nil, zero value otherwise.

### GetFolioIdOk

`func (o *CreatePaymentRequest) GetFolioIdOk() (*string, bool)`

GetFolioIdOk returns a tuple with the FolioId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioId

`func (o *CreatePaymentRequest) SetFolioId(v string)`

SetFolioId sets FolioId field to given value.


### GetAmount

`func (o *CreatePaymentRequest) GetAmount() Money`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CreatePaymentRequest) GetAmountOk() (*Money, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CreatePaymentRequest) SetAmount(v Money)`

SetAmount sets Amount field to given value.


### GetMethod

`func (o *CreatePaymentRequest) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *CreatePaymentRequest) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *CreatePaymentRequest) SetMethod(v string)`

SetMethod sets Method field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


