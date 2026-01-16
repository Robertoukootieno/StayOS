# PaginatedResponsePagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pageSize** | **number** | Number of items in current page | [default to undefined]
**cursor** | **string** | Cursor for next page (null if no more pages) | [optional] [default to undefined]
**hasMore** | **boolean** | Whether more pages are available | [default to undefined]
**totalCount** | **number** | Total number of items (optional, expensive to compute) | [optional] [default to undefined]

## Example

```typescript
import { PaginatedResponsePagination } from '@stayos/api-client';

const instance: PaginatedResponsePagination = {
    pageSize,
    cursor,
    hasMore,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
