# ListUnitTypes200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | [**[]UnitType**](UnitType.md) |  | 
**Pagination** | [**PaginatedResponseAllOfPagination**](PaginatedResponseAllOfPagination.md) |  | 
**Links** | Pointer to [**PaginatedResponseAllOfLinks**](PaginatedResponseAllOfLinks.md) |  | [optional] 

## Methods

### NewListUnitTypes200Response

`func NewListUnitTypes200Response(data []UnitType, pagination PaginatedResponseAllOfPagination, ) *ListUnitTypes200Response`

NewListUnitTypes200Response instantiates a new ListUnitTypes200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListUnitTypes200ResponseWithDefaults

`func NewListUnitTypes200ResponseWithDefaults() *ListUnitTypes200Response`

NewListUnitTypes200ResponseWithDefaults instantiates a new ListUnitTypes200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *ListUnitTypes200Response) GetData() []UnitType`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ListUnitTypes200Response) GetDataOk() (*[]UnitType, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ListUnitTypes200Response) SetData(v []UnitType)`

SetData sets Data field to given value.


### GetPagination

`func (o *ListUnitTypes200Response) GetPagination() PaginatedResponseAllOfPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ListUnitTypes200Response) GetPaginationOk() (*PaginatedResponseAllOfPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ListUnitTypes200Response) SetPagination(v PaginatedResponseAllOfPagination)`

SetPagination sets Pagination field to given value.


### GetLinks

`func (o *ListUnitTypes200Response) GetLinks() PaginatedResponseAllOfLinks`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ListUnitTypes200Response) GetLinksOk() (*PaginatedResponseAllOfLinks, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ListUnitTypes200Response) SetLinks(v PaginatedResponseAllOfLinks)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ListUnitTypes200Response) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


