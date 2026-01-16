# ListSuppliers200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | [**[]Supplier**](Supplier.md) |  | 
**Pagination** | [**PaginatedResponseAllOfPagination**](PaginatedResponseAllOfPagination.md) |  | 
**Links** | Pointer to [**PaginatedResponseAllOfLinks**](PaginatedResponseAllOfLinks.md) |  | [optional] 

## Methods

### NewListSuppliers200Response

`func NewListSuppliers200Response(data []Supplier, pagination PaginatedResponseAllOfPagination, ) *ListSuppliers200Response`

NewListSuppliers200Response instantiates a new ListSuppliers200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListSuppliers200ResponseWithDefaults

`func NewListSuppliers200ResponseWithDefaults() *ListSuppliers200Response`

NewListSuppliers200ResponseWithDefaults instantiates a new ListSuppliers200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *ListSuppliers200Response) GetData() []Supplier`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ListSuppliers200Response) GetDataOk() (*[]Supplier, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ListSuppliers200Response) SetData(v []Supplier)`

SetData sets Data field to given value.


### GetPagination

`func (o *ListSuppliers200Response) GetPagination() PaginatedResponseAllOfPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ListSuppliers200Response) GetPaginationOk() (*PaginatedResponseAllOfPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ListSuppliers200Response) SetPagination(v PaginatedResponseAllOfPagination)`

SetPagination sets Pagination field to given value.


### GetLinks

`func (o *ListSuppliers200Response) GetLinks() PaginatedResponseAllOfLinks`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ListSuppliers200Response) GetLinksOk() (*PaginatedResponseAllOfLinks, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ListSuppliers200Response) SetLinks(v PaginatedResponseAllOfLinks)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ListSuppliers200Response) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


