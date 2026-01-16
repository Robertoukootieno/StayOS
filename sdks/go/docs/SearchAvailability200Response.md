# SearchAvailability200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SearchId** | Pointer to **string** | Unique search identifier for tracking | [optional] 
**SearchCriteria** | Pointer to **map[string]interface{}** | Echo of search criteria | [optional] 
**Results** | Pointer to [**[]SearchAvailability200ResponseResultsInner**](SearchAvailability200ResponseResultsInner.md) |  | [optional] 
**Metadata** | Pointer to [**SearchAvailability200ResponseMetadata**](SearchAvailability200ResponseMetadata.md) |  | [optional] 

## Methods

### NewSearchAvailability200Response

`func NewSearchAvailability200Response() *SearchAvailability200Response`

NewSearchAvailability200Response instantiates a new SearchAvailability200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchAvailability200ResponseWithDefaults

`func NewSearchAvailability200ResponseWithDefaults() *SearchAvailability200Response`

NewSearchAvailability200ResponseWithDefaults instantiates a new SearchAvailability200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSearchId

`func (o *SearchAvailability200Response) GetSearchId() string`

GetSearchId returns the SearchId field if non-nil, zero value otherwise.

### GetSearchIdOk

`func (o *SearchAvailability200Response) GetSearchIdOk() (*string, bool)`

GetSearchIdOk returns a tuple with the SearchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchId

`func (o *SearchAvailability200Response) SetSearchId(v string)`

SetSearchId sets SearchId field to given value.

### HasSearchId

`func (o *SearchAvailability200Response) HasSearchId() bool`

HasSearchId returns a boolean if a field has been set.

### GetSearchCriteria

`func (o *SearchAvailability200Response) GetSearchCriteria() map[string]interface{}`

GetSearchCriteria returns the SearchCriteria field if non-nil, zero value otherwise.

### GetSearchCriteriaOk

`func (o *SearchAvailability200Response) GetSearchCriteriaOk() (*map[string]interface{}, bool)`

GetSearchCriteriaOk returns a tuple with the SearchCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchCriteria

`func (o *SearchAvailability200Response) SetSearchCriteria(v map[string]interface{})`

SetSearchCriteria sets SearchCriteria field to given value.

### HasSearchCriteria

`func (o *SearchAvailability200Response) HasSearchCriteria() bool`

HasSearchCriteria returns a boolean if a field has been set.

### GetResults

`func (o *SearchAvailability200Response) GetResults() []SearchAvailability200ResponseResultsInner`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *SearchAvailability200Response) GetResultsOk() (*[]SearchAvailability200ResponseResultsInner, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *SearchAvailability200Response) SetResults(v []SearchAvailability200ResponseResultsInner)`

SetResults sets Results field to given value.

### HasResults

`func (o *SearchAvailability200Response) HasResults() bool`

HasResults returns a boolean if a field has been set.

### GetMetadata

`func (o *SearchAvailability200Response) GetMetadata() SearchAvailability200ResponseMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SearchAvailability200Response) GetMetadataOk() (*SearchAvailability200ResponseMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SearchAvailability200Response) SetMetadata(v SearchAvailability200ResponseMetadata)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *SearchAvailability200Response) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


