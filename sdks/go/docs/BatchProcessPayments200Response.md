# BatchProcessPayments200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Successful** | Pointer to [**[]Payment**](Payment.md) |  | [optional] 
**Failed** | Pointer to **[]map[string]interface{}** |  | [optional] 

## Methods

### NewBatchProcessPayments200Response

`func NewBatchProcessPayments200Response() *BatchProcessPayments200Response`

NewBatchProcessPayments200Response instantiates a new BatchProcessPayments200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatchProcessPayments200ResponseWithDefaults

`func NewBatchProcessPayments200ResponseWithDefaults() *BatchProcessPayments200Response`

NewBatchProcessPayments200ResponseWithDefaults instantiates a new BatchProcessPayments200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccessful

`func (o *BatchProcessPayments200Response) GetSuccessful() []Payment`

GetSuccessful returns the Successful field if non-nil, zero value otherwise.

### GetSuccessfulOk

`func (o *BatchProcessPayments200Response) GetSuccessfulOk() (*[]Payment, bool)`

GetSuccessfulOk returns a tuple with the Successful field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccessful

`func (o *BatchProcessPayments200Response) SetSuccessful(v []Payment)`

SetSuccessful sets Successful field to given value.

### HasSuccessful

`func (o *BatchProcessPayments200Response) HasSuccessful() bool`

HasSuccessful returns a boolean if a field has been set.

### GetFailed

`func (o *BatchProcessPayments200Response) GetFailed() []map[string]interface{}`

GetFailed returns the Failed field if non-nil, zero value otherwise.

### GetFailedOk

`func (o *BatchProcessPayments200Response) GetFailedOk() (*[]map[string]interface{}, bool)`

GetFailedOk returns a tuple with the Failed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailed

`func (o *BatchProcessPayments200Response) SetFailed(v []map[string]interface{})`

SetFailed sets Failed field to given value.

### HasFailed

`func (o *BatchProcessPayments200Response) HasFailed() bool`

HasFailed returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


