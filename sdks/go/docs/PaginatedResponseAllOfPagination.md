# PaginatedResponseAllOfPagination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageSize** | **int32** | Number of items in current page | 
**Cursor** | Pointer to **string** | Cursor for next page (null if no more pages) | [optional] 
**HasMore** | **bool** | Whether more pages are available | 
**TotalCount** | Pointer to **int32** | Total number of items (optional, expensive to compute) | [optional] 

## Methods

### NewPaginatedResponseAllOfPagination

`func NewPaginatedResponseAllOfPagination(pageSize int32, hasMore bool, ) *PaginatedResponseAllOfPagination`

NewPaginatedResponseAllOfPagination instantiates a new PaginatedResponseAllOfPagination object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaginatedResponseAllOfPaginationWithDefaults

`func NewPaginatedResponseAllOfPaginationWithDefaults() *PaginatedResponseAllOfPagination`

NewPaginatedResponseAllOfPaginationWithDefaults instantiates a new PaginatedResponseAllOfPagination object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPageSize

`func (o *PaginatedResponseAllOfPagination) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *PaginatedResponseAllOfPagination) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *PaginatedResponseAllOfPagination) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.


### GetCursor

`func (o *PaginatedResponseAllOfPagination) GetCursor() string`

GetCursor returns the Cursor field if non-nil, zero value otherwise.

### GetCursorOk

`func (o *PaginatedResponseAllOfPagination) GetCursorOk() (*string, bool)`

GetCursorOk returns a tuple with the Cursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCursor

`func (o *PaginatedResponseAllOfPagination) SetCursor(v string)`

SetCursor sets Cursor field to given value.

### HasCursor

`func (o *PaginatedResponseAllOfPagination) HasCursor() bool`

HasCursor returns a boolean if a field has been set.

### GetHasMore

`func (o *PaginatedResponseAllOfPagination) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *PaginatedResponseAllOfPagination) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *PaginatedResponseAllOfPagination) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.


### GetTotalCount

`func (o *PaginatedResponseAllOfPagination) GetTotalCount() int32`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *PaginatedResponseAllOfPagination) GetTotalCountOk() (*int32, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *PaginatedResponseAllOfPagination) SetTotalCount(v int32)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *PaginatedResponseAllOfPagination) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


