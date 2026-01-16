# PaginatedResponseAllOfPagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_size** | **int** | Number of items in current page | 
**cursor** | **str** | Cursor for next page (null if no more pages) | [optional] 
**has_more** | **bool** | Whether more pages are available | 
**total_count** | **int** | Total number of items (optional, expensive to compute) | [optional] 

## Example

```python
from stayos_api_client.models.paginated_response_all_of_pagination import PaginatedResponseAllOfPagination

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedResponseAllOfPagination from a JSON string
paginated_response_all_of_pagination_instance = PaginatedResponseAllOfPagination.from_json(json)
# print the JSON string representation of the object
print(PaginatedResponseAllOfPagination.to_json())

# convert the object into a dict
paginated_response_all_of_pagination_dict = paginated_response_all_of_pagination_instance.to_dict()
# create an instance of PaginatedResponseAllOfPagination from a dict
paginated_response_all_of_pagination_from_dict = PaginatedResponseAllOfPagination.from_dict(paginated_response_all_of_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


